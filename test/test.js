
function setup() {
  createCanvas(600, 600);
  background('pink');
}

function draw() {
  background(248, 190, 198);

  stroke('black');
  strokeWeight(5);

    // hair (back)
  fill(39, 29, 27);
  stroke('black');
  strokeWeight(5);
  
  // main back hair
  beginShape();
  vertex(300, 60);
  bezierVertex(200, 50, 140, 115, 145, 235);
  bezierVertex(140, 310, 135, 390, 155, 440);
  bezierVertex(190, 460, 245, 465, 300, 455);
  bezierVertex(355, 465, 410, 460, 445, 440);
  bezierVertex(465, 390, 460, 310, 455, 235);
  bezierVertex(460, 115, 400, 50, 300, 60);
  endShape(CLOSE);

  // left hair layers
  beginShape();
  vertex(155, 300);
  bezierVertex(145, 355, 150, 405, 125, 430);
  vertex(155, 425);
  bezierVertex(150, 450, 130, 460, 115, 465);
  vertex(155, 460);
  bezierVertex(170, 480, 195, 480, 215, 465);
  bezierVertex(185, 440, 170, 390, 175, 345);
  endShape(CLOSE);
  
  // right hair layers
  push();
  translate(600, 0);
  scale(-1, 1);
  
  beginShape();
  vertex(155, 300);
  bezierVertex(145, 355, 150, 405, 125, 430);
  vertex(155, 425);
  bezierVertex(150, 450, 130, 460, 115, 465);
  vertex(155, 460);
  bezierVertex(170, 480, 195, 480, 215, 465);
  bezierVertex(185, 440, 170, 390, 175, 345);
  endShape(CLOSE);
  
  pop();
  
  // more layers
  beginShape();
  vertex(175, 365);
  bezierVertex(180, 415, 205, 450, 235, 455);
  vertex(210, 465);
  bezierVertex(190, 460, 175, 440, 170, 415);
  endShape(CLOSE);
  
  push();
  translate(600, 0);
  scale(-1, 1);
  
  beginShape();
  vertex(175, 365);
  bezierVertex(180, 415, 205, 450, 235, 455);
  vertex(210, 465);
  bezierVertex(190, 460, 175, 440, 170, 415);
  endShape(CLOSE);
  
  pop();

 // shirt
  stroke('black');
  strokeWeight(5);
  fill(115, 110, 113);
  
  beginShape();
  vertex(210, 450);
  bezierVertex(180, 455, 145, 470, 120, 495);
  vertex(65, 600);
  vertex(535, 600);
  vertex(480, 495);
  bezierVertex(455, 470, 420, 455, 390, 450);
  vertex(350, 445);
  endShape(CLOSE);

  // neck
  fill(252, 210, 178);
  rect(260, 385, 80, 100);

  fill(175, 116, 89);
  triangle(260, 390, 340, 390, 260, 460);

  // face
  fill(252, 215, 184);
  stroke('black');
  strokeWeight(5);
  beginShape();
  vertex(185, 190);
  bezierVertex(190, 115, 250, 95, 300, 100);
  bezierVertex(390, 95, 420, 165, 415, 255);
  bezierVertex(415, 355, 360, 410, 300, 415);
  bezierVertex(235, 410, 185, 355, 185, 255);
  endShape(CLOSE);

  // ears
  fill(252, 215, 184);
  ellipse(185, 290, 30, 45);
  ellipse(415, 290, 30, 45);

// front hair and bangs
fill(39, 29, 27);
stroke('black');
strokeWeight(5);

// left half
beginShape();
vertex(300, 65);
bezierVertex(210, 55, 145, 120, 150, 250);
vertex(165, 285);
vertex(190, 220);
vertex(220, 235);
vertex(250, 175);
vertex(275, 230);
vertex(300, 170);
endShape(CLOSE);

// right half
push();
translate(600, 0);
scale(-1, 1);

beginShape();
vertex(300, 65);
bezierVertex(210, 55, 145, 120, 150, 250);
vertex(165, 285);
vertex(190, 220);
vertex(220, 235);
vertex(250, 175);
vertex(275, 230);
vertex(300, 170);
endShape(CLOSE);

pop();

  // eyebrows
  stroke('black');
  strokeWeight(9);
  line(205, 230, 275, 230);
  line(325, 230, 395, 225);

  // right eye
  stroke('black');
  strokeWeight(3);
  fill('white');
  ellipse(355, 270, 78, 43);

  fill(105, 68, 38);
  ellipse(355, 270, 40, 40);

  fill('black');
  circle(355, 270, 20);

  fill('white');
  noStroke();
  circle(346, 260, 9);

  // left eye
  stroke('black');
  strokeWeight(3);
  fill('white');
  ellipse(245, 270, 78, 43);

  fill(105, 68, 38);
  ellipse(245, 270, 40, 40);

  fill('black');
  circle(245, 270, 20);

  fill('white');
  noStroke();
  circle(236, 260, 9);

  // glasses
  noFill();
  stroke(210, 205, 195);
  strokeWeight(4);
  rect(190, 240, 105, 65, 20);
  rect(305, 240, 105, 65, 20);
  line(295, 260, 305, 260);

  // eye details
  stroke(145, 95, 65);
  strokeWeight(4);
  line(215, 305, 245, 310);
  line(355, 310, 385, 305);

  // nose
  noStroke();
  fill(180, 120, 90);
  triangle(300, 285, 290, 330, 315, 325);

  // mouth
  noFill();
  stroke(55, 35, 35);
  strokeWeight(4);
  strokeCap(ROUND);
  beginShape();
  vertex(285, 365);
  bezierVertex(300, 367, 320, 360, 330, 352);
  endShape();

  // earrings
  noFill();
  stroke(220);
  strokeWeight(5);
  ellipse(185, 325, 22, 30);
  ellipse(415, 325, 22, 30);

  // crystal necklace chain
  stroke(245);
  strokeWeight(3);
  line(235, 455, 300, 510);
  line(300, 510, 365, 455);

  // crystal pendant
  stroke(190, 190, 195);
  strokeWeight(2);
  fill(225, 235, 240);
  beginShape();
  vertex(300, 510);
  vertex(289, 525);
  vertex(300, 545);
  vertex(311, 525);
  endShape(CLOSE);

  // crystal center
  stroke(255);
  line(300, 510, 300, 543);

}
