var canvas = document.querySelector("canvas");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(590,150);
context.lineTo(720,150);
context.lineTo(660, 35);
context.fillStyle = "gold";
context.fill();

context.beginPath();
context.moveTo(520,260);
context.lineTo(650,260);
context.lineTo(590,150);
context.fillStyle = "gold";
context.fill();

context.beginPath();
context.moveTo(650,260);
context.lineTo(780,260);
context.lineTo(720,150);
context.fillStyle = "gold";
context.fill();
