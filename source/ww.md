
---
title: page
layout: false
---

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <script src="https://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <style type="text/css">
    @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600");
    .more-pens {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 10;
      font-family: "Montserrat";
      font-size: 12px;
    }

    a.white-mode,
    a.white-mode:link,
    a.white-mode:visited,
    a.white-mode:active {
      font-family: "Montserrat";
      font-size: 12px;
      text-decoration: none;
      /* background: #212121; */
      padding: 4px 8px;
      color: #f7f7f7;
    }

    a.white-mode:hover,
    a.white-mode:link:hover,
    a.white-mode:visited:hover,
    a.white-mode:active:hover {
      background: #edf3f8;
      color: #212121;
    }

    .title {
      z-index: 9999 !important;
      position: absolute;
      left: 50%;
      top: 42%;
      transform: translateX(-50%) translateY(-50%);
      font-family: "Montserrat";
      text-align: center;
      width: 100%;
    }

    .title h1 {
      z-index: 99;
      position: relative;
      color: #fff;
      font-weight: 100;
      font-size: 70px;
      padding: 0;
      margin: 0;
      line-height: 1;
      text-shadow: 0 0 10px #ff006c, 0 0 20px #ff006c, 0 0 30px #ff006c,
      0 0 40px #ff417d, 0 0 70px #ff417d, 0 0 80px #ff417d,
      0 0 100px #ff417d, 0 0 150px #ff417d;
    }

    .title h1 span {
      z-index: 99;
      font-weight: 600;
      padding: 0;
      margin: 0;
      color: #ffffff;
    }

    .title h3 {
      z-index: 99;
      font-weight: 200;
      font-size: 26px;
      padding: 0;
      margin: 0;
      line-height: 1;
      color: #ffffff;
      letter-spacing: 2px;
    }

    /* 爱心css */
    canvas {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .img {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      width: 180px;   /* 160 */
      height: 180px;
    }
    #pinkboard {
      position: relative;
      top: 0%;
      left: 0%;
      height: 429px;
    }
    .STARDUST1 {
      position: relative !important;
      top: -60px;
    }
    .STARDUST2 {
      position: relative !important;
      top: -40px;
    }
    .STARDUST3 {
      position: relative !important;
      top: -20px;
    }
    /* 星空css */
    html,
    body {
      padding: 0px;
      margin: 0px;
      width: 100%;
      height: 100%;
      position: fixed;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-filter: contrast(120%);
      filter: contrast(120%);
      background-image: radial-gradient(
              1600px at 70% 120%,
              rgba(33, 39, 80, 1) 10%,
              #020409 100%
      ) !important;
      /* background-color: black; */
    }

    .container2 {
      /* z-index: 8; */
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
              1600px at 70% 120%,
              rgba(33, 39, 80, 1) 10%,
              #020409 100%
      ) !important;
    }

    .content {
      width: inherit;
      height: inherit;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
              1600px at 70% 120%,
              rgba(33, 39, 80, 1) 10%,
              #020409 100%
      ) !important;
    }

    #universe {
      width: 100%;
      height: 100%;
    }

    #footerContent {
      font-family: sans-serif;
      font-size: 110%;
      color: rgba(200, 220, 255, 0.3);
      width: 100%;
      position: fixed;
      bottom: 0px;
      padding: 20px;
      text-align: center;
      z-index: 20;
    }

    /* #footer {
      position: absolute;
      bottom: 0px;
      height: 300px;
      width: 100%;
    } */

    #scene {
      height: 100%;
      position: absolute;
      left: 50%;
      margin-left: -800px;
    }

    a {
      text-decoration: none;
      color: rgba(200, 220, 255, 1);
      opacity: 0.4;
      transition: opacity 0.4s ease;
    }

    a:hover {
      opacity: 1;
    }
  </style>

</head>

<body>
<audio autoplay="autopaly">
  <source src="renxi.mp3" type="audio/mp3" />
</audio>
<!-- 星空html -->
<!-- <div> -->
<div class="container2">
  <div class="content">
    <canvas id="universe"></canvas>
  </div>
</div>
<!-- </div> -->
<div class="title">
  <!-- 星团文字html -->

  <!-- 爱心html -->
  <canvas id="pinkboard"> </canvas>
  <div class="main"><h1>wei</h1>></div>

</div>

<!--爱心js  -->
<script>
  /*
   * Settings
   */
  var settings = {
    particles: {
      length: 500, // maximum amount of particles
      duration: 2, // particle duration in sec
      velocity: 100, // particle velocity in pixels/sec
      effect: -0.75, // play with this for a nice effect
      size: 30, // particle size in pixels
    },
  };

  /*
   * RequestAnimationFrame polyfill by Erik M?ller
   */
  (function () {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
      window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
              window[c[a] + "CancelAnimationFrame"] ||
              window[c[a] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (h, e) {
        var d = new Date().getTime();
        var f = Math.max(0, 16 - (d - b));
        var g = window.setTimeout(function () {
          h(d + f);
        }, f);
        b = d + f;
        return g;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (d) {
        clearTimeout(d);
      };
    }
  })();

  /*
   * Point class
   */
  var Point = (function () {
    function Point(x, y) {
      this.x = typeof x !== "undefined" ? x : 0;
      this.y = typeof y !== "undefined" ? y : 0;
    }
    Point.prototype.clone = function () {
      return new Point(this.x, this.y);
    };
    Point.prototype.length = function (length) {
      if (typeof length == "undefined")
        return Math.sqrt(this.x * this.x + this.y * this.y);
      this.normalize();
      this.x *= length;
      this.y *= length;
      return this;
    };
    Point.prototype.normalize = function () {
      var length = this.length();
      this.x /= length;
      this.y /= length;
      return this;
    };
    return Point;
  })();

  /*
   * Particle class
   */
  var Particle = (function () {
    function Particle() {
      this.position = new Point();
      this.velocity = new Point();
      this.acceleration = new Point();
      this.age = 0;
    }
    Particle.prototype.initialize = function (x, y, dx, dy) {
      this.position.x = x;
      this.position.y = y;
      this.velocity.x = dx;
      this.velocity.y = dy;
      this.acceleration.x = dx * settings.particles.effect;
      this.acceleration.y = dy * settings.particles.effect;
      this.age = 0;
    };
    Particle.prototype.update = function (deltaTime) {
      this.position.x += this.velocity.x * deltaTime;
      this.position.y += this.velocity.y * deltaTime;
      this.velocity.x += this.acceleration.x * deltaTime;
      this.velocity.y += this.acceleration.y * deltaTime;
      this.age += deltaTime;
    };
    Particle.prototype.draw = function (context, image) {
      function ease(t) {
        return --t * t * t + 1;
      }
      var size = image.width * ease(this.age / settings.particles.duration);
      context.globalAlpha = 1 - this.age / settings.particles.duration;
      context.drawImage(
              image,
              this.position.x - size / 2,
              this.position.y - size / 2,
              size,
              size
      );
    };
    return Particle;
  })();

  /*
   * ParticlePool class
   */
  var ParticlePool = (function () {
    var particles,
            firstActive = 0,
            firstFree = 0,
            duration = settings.particles.duration;

    function ParticlePool(length) {
      // create and populate particle pool
      particles = new Array(length);
      for (var i = 0; i < particles.length; i++)
        particles[i] = new Particle();
    }
    ParticlePool.prototype.add = function (x, y, dx, dy) {
      particles[firstFree].initialize(x, y, dx, dy);

      // handle circular queue
      firstFree++;
      if (firstFree == particles.length) firstFree = 0;
      if (firstActive == firstFree) firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    };
    ParticlePool.prototype.update = function (deltaTime) {
      var i;

      // update active particles
      if (firstActive < firstFree) {
        for (i = firstActive; i < firstFree; i++)
          particles[i].update(deltaTime);
      }
      if (firstFree < firstActive) {
        for (i = firstActive; i < particles.length; i++)
          particles[i].update(deltaTime);
        for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
      }

      // remove inactive particles
      while (
              particles[firstActive].age >= duration &&
              firstActive != firstFree
              ) {
        firstActive++;
        if (firstActive == particles.length) firstActive = 0;
      }
    };
    ParticlePool.prototype.draw = function (context, image) {
      // draw active particles
      if (firstActive < firstFree) {
        for (i = firstActive; i < firstFree; i++)
          particles[i].draw(context, image);
      }
      if (firstFree < firstActive) {
        for (i = firstActive; i < particles.length; i++)
          particles[i].draw(context, image);
        for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
      }
    };
    return ParticlePool;
  })();

  /*
   * Putting it all together
   */
  (function (canvas) {
    var context = canvas.getContext("2d"),
            particles = new ParticlePool(settings.particles.length),
            particleRate = settings.particles.length / settings.particles.duration, // particles/sec
            time;

    // get point on heart with -PI <= t <= PI
    function pointOnHeart(t) {
      return new Point(
              160 * Math.pow(Math.sin(t), 3),
              130 * Math.cos(t) -
              50 * Math.cos(2 * t) -
              20 * Math.cos(3 * t) -
              10 * Math.cos(4 * t) +
              25
      );
    }

    // creating the particle image using a dummy canvas
    var image = (function () {
      var canvas = document.createElement("canvas"),
              context = canvas.getContext("2d");
      canvas.width = settings.particles.size;
      canvas.height = settings.particles.size;
      // helper function to create the path
      function to(t) {
        var point = pointOnHeart(t);
        point.x =
                settings.particles.size / 2 +
                (point.x * settings.particles.size) / 350;
        point.y =
                settings.particles.size / 2 -
                (point.y * settings.particles.size) / 350;
        return point;
      }
      // create the path
      context.beginPath();
      var t = -Math.PI;
      var point = to(t);
      context.moveTo(point.x, point.y);
      while (t < Math.PI) {
        t += 0.01; // baby steps!
        point = to(t);
        context.lineTo(point.x, point.y);
      }
      context.closePath();
      // create the fill
      context.fillStyle = "#ea80b0";
      context.fill();
      // create the image
      var image = new Image();
      image.src = canvas.toDataURL();
      return image;
    })();

    // render that thing!
    function render() {
      // next animation frame
      requestAnimationFrame(render);

      // update time
      var newTime = new Date().getTime() / 1000,
              deltaTime = newTime - (time || newTime);
      time = newTime;

      // clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // create new particles
      var amount = particleRate * deltaTime;
      for (var i = 0; i < amount; i++) {
        var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
        var dir = pos.clone().length(settings.particles.velocity);
        particles.add(
                canvas.width / 2 + pos.x,
                canvas.height / 2 - pos.y,
                dir.x,
                -dir.y
        );
      }

      // update and draw particles
      particles.update(deltaTime);
      particles.draw(context, image);
    }

    // handle (re-)sizing of the canvas
    function onResize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    window.onresize = onResize;

    // delay rendering bootstrap
    setTimeout(function () {
      onResize();
      render();
    }, 10);
  })(document.getElementById("pinkboard"));
</script>
<!-- 星空js -->
<script>
  window.requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;

  var starDensity = 0.216;
  var speedCoeff = 0.05;
  var width;
  var height;
  var starCount;
  var circleRadius;
  var circleCenter;
  var first = true;
  var giantColor = "180,184,240";
  var starColor = "226,225,142";
  var cometColor = "226,225,224";
  var canva = document.getElementById("universe");
  canva.style.zIndex = 200;
  var stars = [];

  windowResizeHandler();
  window.addEventListener("resize", windowResizeHandler, false);

  createUniverse();

  function createUniverse() {
    universe = canva.getContext("2d");

    for (var i = 0; i < starCount; i++) {
      stars[i] = new Star();
      stars[i].reset();
    }

    draw();
  }

  function draw() {
    universe.clearRect(0, 0, width, height);

    var starsLength = stars.length;

    for (var i = 0; i < starsLength; i++) {
      var star = stars[i];
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw();
    }

    window.requestAnimationFrame(draw);
  }

  function Star() {
    this.reset = function () {
      this.giant = getProbability(3);
      this.comet = this.giant || first ? false : getProbability(10);
      this.x = getRandInterval(0, width - 10);
      this.y = getRandInterval(0, height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx =
              getRandInterval(speedCoeff, 6 * speedCoeff) +
              (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) +
              speedCoeff * 2;
      this.dy =
              -getRandInterval(speedCoeff, 6 * speedCoeff) -
              (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
      this.fadingOut = null;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(
              0.2,
              1 - (this.comet + 1 - 1) * 0.4
      );
      this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * 0.001;
    };

    this.fadeIn = function () {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    };

    this.fadeOut = function () {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;
        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    };

    this.draw = function () {
      universe.beginPath();

      if (this.giant) {
        universe.fillStyle = "rgba(" + giantColor + "," + this.opacity + ")";
        universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        universe.fillStyle = "rgba(" + cometColor + "," + this.opacity + ")";
        universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

        //comet tail
        for (var i = 0; i < 30; i++) {
          universe.fillStyle =
                  "rgba(" +
                  cometColor +
                  "," +
                  (this.opacity - (this.opacity / 20) * i) +
                  ")";
          universe.rect(
                  this.x - (this.dx / 4) * i,
                  this.y - (this.dy / 4) * i - 2,
                  2,
                  2
          );
          universe.fill();
        }
      } else {
        universe.fillStyle = "rgba(" + starColor + "," + this.opacity + ")";
        universe.rect(this.x, this.y, this.r, this.r);
      }

      universe.closePath();
      universe.fill();
    };

    this.move = function () {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false) {
        this.reset();
      }
      if (this.x > width - width / 4 || this.y < 0) {
        this.fadingOut = true;
      }
    };

    (function () {
      setTimeout(function () {
        first = false;
      }, 50);
    })();
  }

  function getProbability(percents) {
    return Math.floor(Math.random() * 1000) + 1 < percents * 10;
  }

  function getRandInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  function windowResizeHandler() {
    width = window.innerWidth;
    height = window.innerHeight;
    starCount = width * starDensity;
    circleRadius = width > height ? height / 2 : width / 2;
    circleCenter = {
      x: width / 2,
      y: height / 2,
    };

    canva.setAttribute("width", width);
    canva.setAttribute("height", height);
  }
</script>
<!-- 星团js -->
<script>
  let particles = [];
  let microparticles = [];

  const c1 = createCanvas({
    width: $(window).width(),
    height: $(window).height(),
  });

  const tela = c1.canvas;
  const canvas = c1.context;

  // $("body").append(tela);
  $("body").append(c1.canvas);

  class Particle1 {
    constructor(canvas) {
      this.random = Math.random();
      this.random1 = Math.random();
      this.random2 = Math.random();
      this.progress = 0;
      this.canvas = canvas;
      this.life = 1000 + Math.random() * 3000;

      this.x =
              $(window).width() / 2 + (Math.random() * 20 - Math.random() * 20);
      this.y = $(window).height();
      this.s = 2 + Math.random();
      this.w = $(window).width();
      this.h = $(window).height();
      this.direction = this.random > 0.5 ? -1 : 1;
      this.radius = 1 + 3 * this.random;
      this.color = "#ff417d";

      this.ID = setInterval(
              function () {
                microparticles.push(
                        new microParticle(c1.context, {
                          x: this.x,
                          y: this.y,
                        })
                );
              }.bind(this),
              this.random * 20
      );

      setTimeout(
              function () {
                clearInterval(this.ID);
              }.bind(this),
              this.life
      );
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      // this.canvas.lineWidth = 2;
      this.canvas.shadowOffsetX = 0;
      this.canvas.shadowOffsetY = 0;
      // this.canvas.shadowBlur = 6;
      this.canvas.shadowColor = "#000000";
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      this.x -=
              this.direction *
              Math.sin(this.progress / (this.random1 * 430)) *
              this.s;
      this.y -= Math.cos(this.progress / this.h) * this.s;

      if (this.x < 0 || this.x > this.w - this.radius) {
        clearInterval(this.ID);
        return false;
      }

      if (this.y < 0) {
        clearInterval(this.ID);
        return false;
      }
      this.render();
      this.progress++;
      return true;
    }
  }

  class microParticle {
    constructor(canvas, options) {
      this.random = Math.random();
      this.random1 = Math.random();
      this.random2 = Math.random();
      this.progress = 0;
      this.canvas = canvas;

      this.x = options.x;
      this.y = options.y;
      this.s = 2 + Math.random() * 3;
      this.w = $(window).width();
      this.h = $(window).height();
      this.radius = 1 + this.random * 0.5;
      this.color = "#4EFCFE"; //this.random > .5 ? "#a9722c" : "#FFFED7"
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.canvas.lineWidth = 2;
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      this.x -=
              Math.sin(this.progress / (100 / (this.random1 - this.random2 * 10))) *
              this.s;
      this.y += Math.cos(this.progress / this.h) * this.s;

      if (this.x < 0 || this.x > this.w - this.radius) {
        return false;
      }

      if (this.y > this.h) {
        return false;
      }
      this.render();
      this.progress++;
      return true;
    }
  }

  var random_life = 1000;

  setInterval(
          function () {
            particles.push(new Particle1(canvas));
            random_life = 2000 * Math.random();
          }.bind(this),
          random_life
  );

  function clear() {
    let grd = canvas.createRadialGradient(
            tela.width / 2,
            tela.height / 2,
            0,
            tela.width / 2,
            tela.height / 2,
            tela.width
    );
    grd.addColorStop(0, "rgba(20,20,20,1)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    // Fill with gradient
    canvas.globalAlpha = 0.16;
    canvas.fillStyle = grd;
    canvas.fillRect(0, 0, tela.width, tela.height);
  }

  function blur(ctx, canvas, amt) {
    // ctx.filter = `blur(${amt}px)`
    // ctx.drawImage(canvas, 0, 0)
    // ctx.filter = 'none'
  }

  function update() {
    clear();
    particles = particles.filter(function (p) {
      return p.move();
    });
    microparticles = microparticles.filter(function (mp) {
      return mp.move();
    });
    requestAnimationFrame(update.bind(this));
  }

  function createCanvas(properties) {
    let canvas = document.createElement("canvas");
    canvas.width = properties.width;
    //   canvas.style.zIndex = 999;
    canvas.height = properties.height;
    let context = canvas.getContext("2d");
    return {
      canvas: canvas,
      context: context,
    };
  }
  update();
</script>



</body>





