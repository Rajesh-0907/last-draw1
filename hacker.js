var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imag = document.getElementById("image");
var clear = window.setInterval(rotate, 5);
var score = document.getElementById("score");
var score1 = document.getElementById("result");
var score2 = document.getElementById("result1");
var playb = document.getElementById("play");
var pause1 = document.getElementById("pause");
playb.addEventListener("click", playbu);
pause1.addEventListener("click", pause12);
var img = new Image();
img.src = "thumb.png";
var bleep = new Audio();
var seco;
var millis;
bleep.src = "jump.mp3";
var bleep1 = new Audio();
bleep1.src = "bubble.mp3";
var count = 0;
var zero = 0;
var storage = window.localStorage;
var ball1;
var res;
var imag1 = document.getElementById("restart");
var bool;

localStorage.setItem("HighScore", zero);

function pause() {
  var data = localStorage.getItem("HighScore");
  if (data < count) {
    localStorage.clear();
    localStorage.setItem("HighScore", count);
  }
  count = 0;
  score.innerHTML = count;
  ball1 = window.setInterval(rotate, 5);

  imag1.style.display = "none";
  score2.style.display = "none";
  score1.style.display = "none";
  imag1.removeEventListener("click", pause);
}
function pause12() {
  clearInterval(clear);
  clearInterval(ball1);
  playb.style.display = "inline";
  pause1.style.display = "none";
  window.removeEventListener("keydown", change1, false);
  seco = 0;
  millis = 0;
}
function playbu() {
  ball1 = window.setInterval(rotate, 5);
  playb.style.display = "none";
  pause1.style.display = "inline";
}

function hit() {
  ctx.translate(0, 0);
  ctx.clearRect(0, 0, 340, 700);
  ctx.clearRect(0, 0, 340, 700);
  ctx.restore();
  window.removeEventListener("keydown", change1, false);
  color = "rgba(255, 230, 0, 0.925)";

  imag1.style.display = "inline";
  score2.style.display = "inline";
  score1.style.display = "inline";
  score2.innerHTML = count;

  clearInterval(clear);
  clearInterval(ball1);

  y = 500;
  a = 384;
  m = 384;
  b = 250;
  c = 460;
  n = 400;
  o = 440;
  d = -250;
  e = 0;
  f = 1;
  g = 50;
  h = 1;
  q = -80;
  t = 510;
  r = -430;
  s = -760;
  u = 100;
}

var y = 500;
var a = 384;
var m = 384;
var b = 250;
var c = 500;
var n = 400;
var o = 440;
var d = -250;
var e = 0;
var f = 1;
var g = 50;
var h = 1;
var q = -80;
var r = -430;
var s = -760;
var l;
var t = 510;
var u = 100;
var aa = 4;
var ab = 5;
var ac = 6;
var ad = 7;
var frame;
var color = "rgba(255, 230, 0, 0.925)";

function change1(key) {
  bleep.play();
  if (key.keyCode == "38") {
    frame = window.requestAnimationFrame(gravity);
    if (c <= 450) {
      y = y - 20;
      a = a + 20;
      b = b + 20;
      m = m + 20;
      n = n + 20;
      o = o + 20;
      d = d + 20;
      q = q + 20;
      t = t + 20;
      r = r + 20;
      s = s + 20;
      u = u + 20;
    }
    l = 3.9;
  }
}
function rotate() {
  imag1.addEventListener("click", pause);
  window.addEventListener("keydown", change1, false);
  cancelAnimationFrame(frame);

  ctx.clearRect(0, 0, 340, 700);
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.save();
  ctx.save();

  var time = new Date();
  seco = time.getSeconds();
  millis = time.getMilliseconds();
  ctx.translate(170, b);
  ctx.rotate(((2 * Math.PI) / 6) * seco + ((2 * Math.PI) / 6000) * millis);

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 240, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 120, false);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(0, 225, 255)";
  ctx.stroke();
  bool = ctx.isPointInPath(170, c);

  ctx.beginPath();
  ctx.arc(0, 0, 80, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(255, 0, 157)";
  ctx.stroke();
  var bool1 = ctx.isPointInPath(170, c);
  ctx.restore();

  ctx.translate(170, q);
  ctx.rotate(
    ((-2 * Math.PI) / 6) * time.getSeconds() +
      ((-2 * Math.PI) / 6000) * time.getMilliseconds()
  );

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 240, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
  ctx.stroke();
  var bool2 = ctx.isPointInPath(170, c - 9);

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 120, false);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(0, 225, 255)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 80, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(255, 0, 157)";
  ctx.stroke();
  var bool3 = ctx.isPointInPath(170, c - 9);
  ctx.restore();

  ctx.translate(170, r);
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 240, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
  ctx.stroke();
  var bool4 = ctx.isPointInPath(170, c - 9);

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 120, false);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(0, 225, 255)";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 80, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(255, 0, 157)";
  ctx.stroke();
  var bool5 = ctx.isPointInPath(170, c - 9);
  ctx.restore();

  ctx.translate(170, s);
  ctx.rotate(
    ((-2 * Math.PI) / 6) * time.getSeconds() +
      ((-2 * Math.PI) / 6000) * time.getMilliseconds()
  );

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 240, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
  ctx.stroke();
  var bool7 = ctx.isPointInPath(170, c - 9);

  ctx.beginPath();
  ctx.arc(0, 0, 80, 0, (Math.PI / 180) * 120, false);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(0, 225, 255)";
  ctx.stroke();
  var bool6 = ctx.isPointInPath(170, c - 9);

  ctx.beginPath();
  ctx.arc(0, 0, 80, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
  ctx.lineWidth = 14;
  ctx.strokeStyle = "rgb(255, 0, 157)";

  ctx.stroke();

  ctx.restore();

  if (bool || bool1 || bool3 || bool2 || bool4 || bool5 || bool6 || bool7) {
    hit();
  } else {
    ctx.translate(205, a);
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );

    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, (Math.PI / 180) * 240, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 157)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, (Math.PI / 180) * 120, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(0, 225, 255)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 15, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
    ctx.stroke();
    ctx.restore();
    ctx.translate(143, m);
    ctx.rotate(
      ((-2 * Math.PI) / 6) * time.getSeconds() +
        ((-2 * Math.PI) / 6000) * time.getMilliseconds()
    );

    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, (Math.PI / 180) * 240, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 157)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, (Math.PI / 180) * 120, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(0, 225, 255)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 15, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(170, c, 9, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();

    ctx.translate(170, u);
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, (Math.PI / 180) * 240, true);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "rgb(255, 0, 157)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, (Math.PI / 180) * 120, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "rgb(0, 225, 255)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, (Math.PI / 180) * 240, (Math.PI / 180) * 120, true);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "rgba(255, 230, 0, 0.925)";
    ctx.stroke();
    ctx.restore();

    ctx.font = "46px sans-serif";
    ctx.beginPath();
    ctx.fillText("C   " + "L   " + "R", 90, n);
    ctx.fillStyle = "white";
    ctx.fillText("SWITCH", 80, o);
    ctx.fill();
    ctx.beginPath();
    ctx.drawImage(img, 150, t, 60, 90);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  if (c < b - 80) {
    switch (count) {
      case 0:
        count = 1;
        break;
      case aa:
        count = aa + 1;
        aa = aa + 4;
        break;
      default:
        break;
    }

    score.innerHTML = count;
  }
  if (c < q - 80) {
    switch (count) {
      case 1:
        count = 2;
        break;
      case ab:
        count = ab + 1;
        ab = ab + 4;
        break;
      default:
        break;
    }

    score.innerHTML = count;
  }
  if (c < r - 80) {
    switch (count) {
      case 2:
        count = 3;
        break;
      case ac:
        count = ac + 1;
        ac = ac + 4;
        break;
      default:
        break;
    }

    score.innerHTML = count;
  }
  if (c < s - 80) {
    switch (count) {
      case 3:
        count = 4;
        break;
      case ad:
        count = ad + 1;
        ad = ad + 4;
        break;
      default:
        break;
    }

    score.innerHTML = count;
  }

  if (u + 10 > c && u + 10 < b) {
    u = r - 170;
    color = "rgb(0, 225, 255)";
    bleep1.play();
  }
  if (u + 10 > c && u + 10 < r) {
    u = b - 150;
    color = "rgb(255, 0, 157)";
    bleep1.play();
  }
  if (u + 10 > c && u + 10 < s) {
    u = b - 150;
    color = "rgba(255, 230, 0, 0.925)";
    bleep1.play();
  }

  if (b - 80 > 700) {
    b = s - 330;
  }

  if (q - 80 > 700) {
    q = b - 330;
  }
  if (r - 80 > 700) {
    r = q - 330;
  }
  if (s - 80 > 700) {
    s = r - 330;
  }
}

function gravity() {
  c = c - l;
  l = l - 0.17;
  if (c > 500) c = 500;

  window.requestAnimationFrame(gravity);
  cancelAnimationFrame(frame);
}
