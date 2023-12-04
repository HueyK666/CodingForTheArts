let ellipseY = [0, 0, 0];
let speeds = [3, 1, 0]; // created an array for the different speeds
let cols = [
  [76, 187, 23], //Green
  [239, 183, 0],// Yellow
  [225, 28, 31] //Red
];
let colindex = 0;//Color Array



function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(50);
  //fill(255);

  for (let i = 0; i < ellipseY.length; i++) {
    let x = (i+1)*100;
	fill(cols[colindex]) 
    ellipse(x, ellipseY[i], 50, 50);
    ellipseY[i] = (ellipseY[i]+ speeds[colindex]) % width; // Wrap movement with modulus 
  }

}

function mouseClicked() {//MouseClick changes color and speed of falling circles
  colindex++;
  if(colindex > 2){
    colindex = 0;
  }  
}
