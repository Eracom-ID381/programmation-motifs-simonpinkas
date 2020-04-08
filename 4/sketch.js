function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  fill(0);
  for (let x = 50; x < width - 50; x += 20) {
    for (let y = 50; y < height - 50; y += 20) {
      //rect(x-10, y-10, 22, 22);
      for (let i = 0; i < 16; i += 4) {
        line(x + i, y, x + i, y + 12);
      }
      line(x, y, x + 12, y + 12);
    }
  }

}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}