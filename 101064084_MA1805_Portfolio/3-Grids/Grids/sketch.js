
// Initialise the  variables
let width = 600;  // Width of the canvas
let height = 500; // Height of the canvas
let row = 10;     // Number of shapes in a row
let col = 10;     // Number of shapes in a col
let pad = 8;      // Padding between shapes 
let sWidth = ((width-pad)-(pad*row))/10; // Calc height of shapes
let sHeight = ((height-pad)-(pad*col))/10; // Calc height of shapes

let buildings = 30; // Number of buildings
let minWidth = 5; // Minimum width of a buildings
let maxWidth = 50; // Maximum width of a buildings
let minHeight = 20; // Minimum height of a buildings
let maxHeight = 800; // Maximum height of a buildings



function setup() {
    createCanvas(width, height); // canvas width/height
   background (30,150,225)
    rectMode(CENTER); // Rectangle coords from the center
    noStroke();
}

function draw(){
  // Create a 'sky'' background
  background(30,150,225); 
  

 
  for (let i = 0; i < buildings; i++) {
    let randomHeight = random(minHeight, maxHeight);
    let xPos = (width / buildings) * i;

    fill(200,200,200);
    rect(xPos, height, width / buildings, -randomHeight); //creates the random buildings popping up
    // Map building height to mouseX position
    //maxHeight = map(mouseX, 0, width, minHeight, maxHeight);//can't see inm the console why this is not working
        
    }

    fill(205,170,109);
    rect(300, 500, 600, 250);//creates the 'Sand' floor



}

   