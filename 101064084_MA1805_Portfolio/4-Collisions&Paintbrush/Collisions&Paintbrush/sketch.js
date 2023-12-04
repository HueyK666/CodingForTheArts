let size = 50;
let x = size/2;
let y = 50; 
let moveX = 2; 
let moveY = 2; 
let reverseX = false; 
let rgba;
const speed = 1

// I have the basic moving text box here
// I need to regulate the speed on each collison

// Need to add the If/else for not hitting corners
// Need to fix the box appearing to shrink on some collisions

let reverseY = false; 

function setup(){
	createCanvas(500, 300);
	background(255);
  noStroke();
  rgba = [random(255), random(255), random(255), 100];
}

function draw(){
  background(255);

  fill(rgba);

  rect(x, y, size * 1.5, size); // rectangle for DVD text
  fill(255);
  textSize(20);
  text("DVD", x + size / 4, y + size / 1.5); // Positioning the DVD text
 

// Change color on collision  
if (x >= width - size || x <= 0) {
  rgba = [random(255), random(255), random(255), 100];

}
  
  //add or subtract from the x position
  //to move the box on the x axis (side to side)
  if(reverseX == false){
    x += moveX;
  }else{
    x -= moveX;
  }

   //Check for side collision - I think something in here is allowing the box to half leave the frame
  if(x >= width-(size/2)){
    reverseX = true; 
    moveX = random(0,10); 
  }else if(x <= 0+(size/2)){
    reverseX = false; 
    moveX = random(0,10); 
  }

   //add or subtract from the y position
  //to move the box on the y axis (up and down)
  if(reverseY == false){
    y += moveY;
  }else{
    y -= moveY;
  }

  //Check for side collision - I think something in here is allowing the box to half leave the frame
  if(y >= height-(size/2)){
    reverseY = true; 
    moveY = random(0,10); 
  }else if(y <= 0+(size/2)){
    reverseY = false; 
    moveY = random(0,10); 
  }

}
  

