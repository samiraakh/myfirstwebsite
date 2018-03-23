let r= 50; 
function setup() {
  // put setup code here
  createCanvas(600, 600);
  //createCanvas (innerWidth, innerHeight);
  background(130, 100, 180);

  
}

function draw() {
  // put drawing code here
  //background(0);
  let x = mouseX;
  let y = mouseY;

  //background (x % 255, 255- y %255, 0)
  //if x and y are used it needs to be defined above of the command

  if(x > width/2) {
    fill (x, y, random(255));
    rect (x- r/2, y-r/2, r, r);

  }else {
    fill (x, y, random(255));
    ellipse (x, y, r); } 



let vertices = map (mouseX,0, width, 4, 100);
let start = r;

beginShape ();
for (let i = start;i < vertices; i++) {

  let angle = map(i, start, vertices, 0, TWO_PI);
  let posX = r * cos(angle) + x ;
  let posY = r * sin(angle) + y;
  vertex (posX, posY);
  /*if (y> height/2) {
    ellipse (x, y, r, r);
  }*/
  //ellipse(mouseX, mouseY, 100, 100)
}

endShape ();
}

// function windowsResized () { 
//   resizeCanvas (innerWidth, innerHeight);

// }