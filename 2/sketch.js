function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  fill(0);
  let count = 120;
 for (let x = 50; x <= width - 50; x += 20) {
   for (let y = 50; y <= height - 50; y += 20) {
     let s = map(count, 120, 0, 0, TWO_PI * 2);
     arc(x, y, 14, 14, s, s + PI);
     count--;
   }
 }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}