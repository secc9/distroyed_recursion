
/*
Ashley Sagar Recursive homework


code liberated from workshop.
I moved into WEBGL (3D) and turned a rect into a box
and played with the camera
 That's about it.

 I can't seem to grasp this topic :/

 */

let iterx = 3;
let itery = 3.
let camX = 100;
let camY = 100;
let camZ = 100;

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);


}



function draw(){
  background(0);
  camera(camZ, 1000, 100)
  perspective(100, 1, camZ);
  // camX = camX + 0.1;
  camZ = camZ + 3;
  push();

  translate(0, 0);
  rotateY(-200+ camX);
  rotateX(200);
  drawCarpet(100000, -width/2, -height/2);

  camX = camX + 5;
  pop();


}



//draw the function
//pretty much liberated from class
function drawCarpet(n, x, y){
  stroke(255);
  fill(200, 20, 200, 20);
  if (n < 3){
    return;
  }
  n = n/3;
  rect(x+n, y+n, n * 0.5, n* 0.5);
  box(x+n);

  for(let i =0; i < iterx; i+= 5){
    for(let j = 0; j < itery; j += 5){
      if(!(i == 1 && j == 1)){
        drawCarpet(n, x+(j/n), y+(i*n));
        // drawCarpet(n + y * 0.5, x, y);

      }
    }
  }

}
