function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  background(255);
  noFill(0);
  for (let x = 50; x <= width - 50; x += 20) {
    for (let y = 50; y <= height - 50; y += 20) {
      ellipse(x, y, 20, 20);
      ellipse(x, y, 20, 20);
      ellipse(x, y, 20, 20);

    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}