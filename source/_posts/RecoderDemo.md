---
title: RecoderDemo
top: false
cover: false
toc: true
mathjax: false
date: 2023-10-25 11:13:26
author:
img:
coverImg:
password:
summary:
---

 ```python
import sys
import queue
import threading
import time
import os
import cv2
from PyQt5 import QtWidgets, QtGui, QtCore


# 总结,进度条点击事件实现了,但是对应的视频跳转还没有实现
# 视频图像的大小也不能随窗口变化而变化
# 倍速的话倒是简单实现,但是整体的倍速实现是依靠time.sleep实现的,还是稍微有点事件延长
#整体实现就是依靠cv2里面的一些线程处理,然后跳出内嵌循环实现视频列表和inddex的变化,外部的话就是self.currentindex变化
# Create a video buffer queue
video_queue = queue.Queue(10)
fps = 30
frame_delay = 0.25 / fps
# 这个类是实现在进度条点击就跳转到点击位置
class SliderCustom(QtWidgets.QSlider):
    def mousePressEvent(self, event):
        if event.button() == QtCore.Qt.LeftButton and not self.isSliderDown():
            opt = QtWidgets.QStyleOptionSlider()
            self.initStyleOption(opt)
            sliderRect = self.style().subControlRect(
                QtWidgets.QStyle.CC_Slider, opt,
                QtWidgets.QStyle.SC_SliderHandle, self)
            if event.pos() not in sliderRect:
                # the mouse is not over the handle, let's move it; this is based
                # on the original C++ code that moves the handle when the
                # "absolute button" is pressed
                grooveRect = self.style().subControlRect(
                    QtWidgets.QStyle.CC_Slider, opt,
                    QtWidgets.QStyle.SC_SliderGroove, self)
                center = sliderRect.center() - sliderRect.topLeft()
                pos = event.pos() - center
                if self.orientation() == QtCore.Qt.Horizontal:
                    sliderLength = sliderRect.width()
                    sliderMin = grooveRect.x()
                    sliderMax = grooveRect.right() - sliderLength + 1
                    pos = pos.x()
                else:
                    sliderLength = sliderRect.height()
                    sliderMin = grooveRect.y()
                    sliderMax = grooveRect.bottom() - sliderLength + 1
                    pos = pos.y()
                value = self.style().sliderValueFromPosition(
                    self.minimum(), self.maximum(), pos - sliderMin,
                    sliderMax - sliderMin, opt.upsideDown
                )
                self.setSliderPosition(value)
        super().mousePressEvent(event)
class VideoPlayer(QtWidgets.QWidget):
    def __init__(self):
        super(VideoPlayer, self).__init__()
        self.cleaned_files = None
        self.opened_files = []
        self.file_contents = None
        self.file_path = None
        self.file_name = None
        self.script_dir = None
        self.paused = False
        self.playing = False
        self.current_file_index = 0  # 当前播放的文件索引
        self.index_next_event = threading.Event()
        self.index_forward_event = threading.Event()
        self.index_click_event = threading.Event()
        self.pause_event = threading.Event()
        self.stop_event = threading.Event()
        self.lock = threading.Lock()# 线程锁
        self.initUI()

    def initUI(self):
        # ... (原始初始化代码)
        self.setWindowTitle("Video Player")
        self.setGeometry(100, 100, 2000, 900)

        # Create a QHBoxLayout for the main layout
        self.mainlayout = QtWidgets.QHBoxLayout()

        # Create a QVBoxLayout for the left side (you can adjust the proportions as needed)
        self.leftlayout = QtWidgets.QVBoxLayout()
        self.leftlayout.addWidget(QtWidgets.QLabel("Left Side Content"))  # Add any content you want on the left

        # Create a QVBoxLayout for the right side
        self.rightlayout = QtWidgets.QVBoxLayout()

        self.videoLabel = QtWidgets.QLabel(self)
        self.videoLabel.setScaledContents(True)
        self.videoLabel.setStyleSheet("background-color: black;")
        self.rightlayout.addWidget(self.videoLabel)

        # Create a QHBoxLayout for the buttons and progress bar
        buttonbox = QtWidgets.QHBoxLayout()

        # Create start and stop buttons
        # Create a "Next" button
        self.forwardButton = QtWidgets.QPushButton("Forward", self)
        self.forwardButton.clicked.connect(self.forward_video)
        self.nextButton = QtWidgets.QPushButton("Next", self)
        self.nextButton.clicked.connect(self.play_next_video)
        self.startButton = QtWidgets.QPushButton("Start", self)
        self.stopButton = QtWidgets.QPushButton("Stop", self)
        self.startButton.clicked.connect(self.start_video)
        self.stopButton.clicked.connect(self.stop_video)

        # Create a QSlider for the progress bar
        self.progressBar = SliderCustom(QtCore.Qt.Horizontal)
        self.progressBar.setRange(0, 100)
        self.progressBar.setValue(0)

        # Add the buttons and progress bar to the buttonbox
        self.playPauseButton = QtWidgets.QPushButton("Play/Pause", self)
        self.playPauseButton.clicked.connect(self.toggle_play_pause)

        buttonbox.addWidget(self.startButton)
        buttonbox.addWidget(self.stopButton)
        buttonbox.addWidget(self.playPauseButton)
        buttonbox.addWidget(self.forwardButton)
        buttonbox.addWidget(self.nextButton)
        buttonbox.addWidget(self.progressBar)

        # Add the buttonbox to the right layout
        self.rightlayout.addLayout(buttonbox)

        # Create an "Open File" button
        self.openFileButton = QtWidgets.QPushButton("Open File")
        self.openFileButton.clicked.connect(self.open_file_dialog)
        self.leftlayout.addWidget(self.openFileButton)

        # Create a QListWidget to display opened files
        self.fileListWidget = QtWidgets.QListWidget()
        self.leftlayout.addWidget(self.fileListWidget)

        # Add the left and right layouts to the main layout
        self.mainlayout.addLayout(self.leftlayout, 1)
        self.mainlayout.addLayout(self.rightlayout, 7)

        # Set the main layout for the widget
        self.setLayout(self.mainlayout)
        # open "PathList.txt" in self.opened_files
        self.script_dir = os.path.dirname(__file__)
        self.file_name = "PathList.txt"
        self.file_path = os.path.join(self.script_dir, self.file_name)
        if not os.path.exists(self.file_path):
            with open(self.file_path, 'w'):
                pass
        with open(self.file_path, 'r') as file:
            self.file_contents = file.read().splitlines()
        self.cleaned_files = [file.strip('"') for file in self.file_contents]
        self.opened_files.extend(self.cleaned_files)
        self.update_file_list(self.opened_files)
        self.fileListWidget.itemClicked.connect(self.handle_file_click)

        # Connect closeEvent to custom slot
        self.closeEvent = self.on_close

    def start_video(self):
        if video_queue.empty():
            self.video_thread = threading.Thread(target=self.add_video_to_queue)
            self.video_thread.daemon = True
            self.video_thread.start()

            self.play_thread = threading.Thread(target=self.play_video_from_queue)
            self.play_thread.daemon = True
            self.play_thread.start()

    def play_next_video(self):
        self.index_next_event.set()

    def forward_video(self):
        self.index_forward_event.set()
    def handle_file_click(self, item):
        file_index = self.fileListWidget.currentRow()
        # 这里是从零开始的
        # Pause video processing thread
        self.pause_event.set()
        while not video_queue.empty():
            video_queue.get()
        with self.lock:
            self.current_file_index = file_index
        self.index_click_event.set()
        # Resume video processing thread
        self.pause_event.clear()


    def stop_video(self):
        self.stop_event.set()
        if hasattr(self, 'video_thread') and self.video_thread.is_alive():
            self.video_thread.join()
        if hasattr(self, 'play_thread') and self.play_thread.is_alive():
            self.play_thread.join()
        cv2.destroyAllWindows()
        QtWidgets.QApplication.quit()
        sys.exit(app.exec_())
         # Gracefully exit the application

    def add_video_to_queue(self):
        i = 0
        index = self.current_file_index
        if index < 0:
            index = 0
        else:
            if index + 1 > len(self.opened_files):
                index = len(self.opened_files) - 1
        video_files = self.opened_files[index:]

        while index < len(video_files) and not self.stop_event.is_set():
            if self.pause_event.is_set():
                time.sleep(0.1)
                continue
            # if self.stop_event.is_set():
            #     print('退出')
            #     break

            i += 1
            print(i)
            video_file = video_files[index]
            cap = cv2.VideoCapture(video_file)
            total_frames = cap.get(cv2.CAP_PROP_FRAME_COUNT)
            current_frame = 0

            while not self.stop_event.is_set():
                try:
                    if self.playing:
                        time.sleep(0.1)
                        continue
                    if self.index_next_event.is_set():
                        self.index_next_event.clear()
                        break
                    if self.index_click_event.is_set():
                        self.index_click_event.clear()
                        index = self.current_file_index - 1

                        break
                    if self.index_forward_event.is_set():
                        self.index_forward_event.clear()
                        index -= 2
                        if index < -1:
                            index = len(video_files) - 2
                        break

                    ret, frame = cap.read()
                except:
                    continue
                if not ret:
                    break
                video_queue.put(frame)
                current_frame += 1
                progress = int((current_frame / total_frames) * 100)
                self.update_progress(progress)

                if video_queue.full():
                    time.sleep(frame_delay)
            # 点击事件以后就开始,在这里开始
            if index == len(self.opened_files) - 1:
                index = 0
            else:
                index += 1
            cap.release()



    def play_video_from_queue(self):
        t1 = time.perf_counter()
        while not self.stop_event.is_set():
            if self.playing:
                time.sleep(0.1)
                continue
            if self.pause_event.is_set():
                time.sleep(0.1)
                continue
            # if self.stop_event.is_set():
            #     break
            frame = video_queue.get()
            imS = cv2.resize(frame, (700, 500))
            imS = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            qimg = QtGui.QImage(imS.data, imS.shape[1], imS.shape[0], QtGui.QImage.Format_RGB888)
            pixmap = QtGui.QPixmap.fromImage(qimg)
            self.videoLabel.setPixmap(pixmap)
            if self.current_file_index == len(self.opened_files) - 1:
                self.current_file_index = 0

            time.sleep(frame_delay)
    #进度条函数
    def update_progress(self, progress):
        self.progressBar.setValue(progress)
    #open_file_button
    def open_file_dialog(self):
        file_dialog = QtWidgets.QFileDialog(self)
        file_dialog.setNameFilter("Video files (*.mp4 *.avi *.mkv)")
        file_dialog.setFileMode(QtWidgets.QFileDialog.ExistingFiles)
        if file_dialog.exec_():
            selected_files = file_dialog.selectedFiles()
            self.opened_files.extend(selected_files)
            # 添加选择的视频文件
            self.update_file_list(selected_files)
            # 添加进去左边的列表里面
    #button_play_pause
    def toggle_play_pause(self):
        if self.playing:
            self.playing = False
        else:
            self.playing = True
    #add_path to fileList
    def update_file_list(self, files):
        for file in files:
            item = QtWidgets.QListWidgetItem(file)
            self.fileListWidget.addItem(item)
    # xx close button
    def on_close(self, event):

        self.stop_video()


if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    player = VideoPlayer()
    player.show()
    sys.exit(app.exec_())

```

```angular2html
# -*- coding: utf-8 -*-
import platform
import os
import sys
import cv2
import time

from PyQt5 import QtWidgets, QtGui, QtCore
import vlc
import queue
import cv2

video_queue = queue.Queue(10)
fps = 30  # 正常视频的帧率，这里假设为30帧/秒
frame_delay = 1 / fps  # 计算每帧之间的延迟时间
t1 = 0
t2 = 0
class Player(QtWidgets.QMainWindow):
    def __init__(self, master=None):
        QtWidgets.QMainWindow.__init__(self, master)
        self.setWindowTitle("Media Player")

        self.instance = vlc.Instance()
        self.media = None
        self.mediaplayer = self.instance.media_player_new()


        self.create_ui()
        self.is_paused = False
        self.playlist = []   # 存储播放列表中的多个文件
        self.current_media_index = 0  # 跟踪当前播放的文件索引

        # self.playlist2 = self.instance.media_list_new()
        # self.media_player = self.instance.media_list_player_new()
        # self.media1 = self.instance.media_new_path("D:\wolf1.mp4")
        # self.playlist2.add_media(self.media1)
        # self.media2 = self.instance.media_new_path("D:\wolf2.mp4")
        # self.playlist2.add_media(self.media1)
        # self.media_player.set_media_list(self.playlist2)
        # self.media_player.play()
        # time.sleep(5)

    def create_ui(self):
        self.widget = QtWidgets.QWidget(self)
        # widget videoframe positionslider hbuttonbox
        # hbuttonbox vboxlayout
        self.setCentralWidget(self.widget)

        if platform.system() == "Darwin":
            self.videoframe = QtWidgets.QMacCocoaViewContainer(0)
        else:
            self.videoframe = QtWidgets.QFrame()

        self.palette = self.videoframe.palette()
        self.palette.setColor(QtGui.QPalette.Window, QtGui.QColor(0, 0, 0))
        self.videoframe.setPalette(self.palette)
        self.videoframe.setAutoFillBackground(True)
        self.videoframe.setGeometry(0, 0, self.width(), self.height())

        self.positionslider = QtWidgets.QSlider(QtCore.Qt.Horizontal, self)
        self.positionslider.setToolTip("Position")
        self.positionslider.setMaximum(1000)
        self.positionslider.sliderMoved.connect(self.set_position)
        self.positionslider.sliderPressed.connect(self.set_position)
        # 创建视频文件列表
        self.video_list_widget = QtWidgets.QListWidget()
        self.video_list_widget.itemClicked.connect(self.play_selected_video)  # 连接列表项点击事件
        self.vboxlayoutleft = QtWidgets.QVBoxLayout()
        self.vboxlayoutleft.addWidget(self.video_list_widget)

        self.hbuttonbox = QtWidgets.QHBoxLayout()
        self.playbutton = QtWidgets.QPushButton("Play")
        self.hbuttonbox.addWidget(self.playbutton)
        self.playbutton.clicked.connect(self.play_pause)

        self.stopbutton = QtWidgets.QPushButton("Stop")
        self.hbuttonbox.addWidget(self.stopbutton)
        self.stopbutton.clicked.connect(self.stop)

        self.hbuttonbox.addStretch(1)
        self.volumeslider = QtWidgets.QSlider(QtCore.Qt.Horizontal, self)
        self.volumeslider.setMaximum(100)
        self.volumeslider.setValue(self.mediaplayer.audio_get_volume())
        self.volumeslider.setToolTip("Volume")
        self.hbuttonbox.addWidget(self.volumeslider)
        self.volumeslider.valueChanged.connect(self.set_volume)

        self.vboxlayout = QtWidgets.QVBoxLayout()
        self.vboxlayout.addWidget(self.videoframe)
        self.vboxlayout.addWidget(self.positionslider)
        self.vboxlayout.addLayout(self.hbuttonbox)

        # self.widget.setLayout(self.vboxlayout)
        # 将视频输出窗口设置为 videoframe
        self.mediaplayer.set_hwnd(self.videoframe.winId())

        # 将视频文件列表布局添加到主布局中的左侧
        self.hboxlayout = QtWidgets.QHBoxLayout()
        self.hboxlayout.addLayout(self.vboxlayoutleft,1)
        self.hboxlayout.addLayout(self.vboxlayout,2)
        self.widget.setLayout(self.hboxlayout)

        menu_bar = self.menuBar()

        file_menu = menu_bar.addMenu("File")

        open_action = QtWidgets.QAction("Load Video", self)
        close_action = QtWidgets.QAction("Close App", self)
        file_menu.addAction(open_action)
        file_menu.addAction(close_action)

        open_action.triggered.connect(self.open_file)
        close_action.triggered.connect(sys.exit)

        self.timer = QtCore.QTimer(self)
        self.timer.setInterval(100)
        self.timer.timeout.connect(self.update_ui)

    # 创建函数来处理视频播放列表点击事件
    def play_selected_video(self, item):
        selected_index = self.video_list_widget.indexFromItem(item).row()
        if 0 <= selected_index < len(self.playlist):
            self.play_media(selected_index)
    def play_pause(self):
        if self.mediaplayer.is_playing():
            self.mediaplayer.pause()
            self.playbutton.setText("Play")
            self.is_paused = True
            self.timer.stop()
        else:
            if self.mediaplayer.play() == -1:
                self.open_file()
                return

            self.mediaplayer.play()
            self.playbutton.setText("Pause")
            self.timer.start()
            self.is_paused = False

    def stop(self):
        self.mediaplayer.stop()
        self.playbutton.setText("Play")

    def open_file(self):
        dialog_txt = "Choose Media Files"
        filenames, _ = QtWidgets.QFileDialog.getOpenFileNames(self, dialog_txt, os.path.expanduser('~'))
        if not filenames:
            return
        self.playlist.extend(filenames)
        if not self.media:
            self.play_media(0)
            t1 = time.perf_counter()

            # 获取主窗口的位置和大小
        main_window_rect = self.geometry()

        # 设置视频窗口的位置和大小
        self.videoframe.setGeometry(main_window_rect.x(), main_window_rect.y(), main_window_rect.width(),
                                    main_window_rect.height())

    def play_media(self, index):
        if index < len(self.playlist):
            self.current_media_index = index
            filename = self.playlist[index]
            self.media = self.instance.media_new(filename)
            self.mediaplayer.set_media(self.media)
            self.media.parse()
            self.setWindowTitle(self.media.get_meta(0))
            self.play_pause()

    def set_volume(self, volume):
        self.mediaplayer.audio_set_volume(volume)

    def set_position(self):
        self.timer.stop()
        pos = self.positionslider.value()
        self.mediaplayer.set_position(pos / 1000.0)
        self.timer.start()

    def update_ui(self):
        media_pos = int(self.mediaplayer.get_position() * 1000)
        self.positionslider.setValue(media_pos)
        if not self.mediaplayer.is_playing() and not self.is_paused:
            if self.current_media_index < len(self.playlist) - 1:
                self.play_media(self.current_media_index + 1)
            else:
                self.timer.stop()
                self.stop()

def main():
    app = QtWidgets.QApplication(sys.argv)
    player = Player()
    player.show()
    player.resize(640, 480)

    print('程序运行时间:%s毫秒' % ((t2 - t1)))
    sys.exit(app.exec_())

if __name__ == "__main__":
    main()


```
