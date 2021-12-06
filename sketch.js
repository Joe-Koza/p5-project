function setup() {
  createCanvas(400, 400);
}

function draw() {
  console.log (mouseX + ", " + mouseY);
  background(220);
  fill('gray');
  triangle(85, 125, 105, 180, 140, 140);
  triangle(315, 125, 295, 180, 260, 140);
  ellipse(200, 200, 200, 150);
  
  
  if (mouseIsPressed) {
    fill('black');
  ellipse(155, 200, 55, 5);
  ellipse(245, 200, 55, 5);
  } else {
    fill('green');
  ellipse(155, 195, 50, 40);
  ellipse(245, 195, 50, 40);
    
  fill('black');
  ellipse(155, 195, 25, 40);
  ellipse(245, 195, 25, 40);
  }
  
  
  fill('pink')
  triangle(190, 220, 200, 205, 210, 220);
  
  fill('gray');
  stroke(50);
  arc(190, 230, 20, 20, 0, PI + PI/24, OPEN);
  arc(210, 230, 20, 20, 0, PI + PI/24, OPEN);
}