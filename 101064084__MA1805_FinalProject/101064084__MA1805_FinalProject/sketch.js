let screen = 0;
let y=-20;
let x=200;
let speed = 2;
let score= 0;
//let play
let belts = []// creating an array for my belt images
let currentBeltIndex = 0; // creating an array for my belt images
//let beltDropped = false; //was playing with a true/false solution to have belts switch on each drop 

let imgs = [];


let angle = 0;
let flashingSpeed = 7;//any faster would need a flashing image warning on the main screen




//let c;
//let font = [];



//Add 8bit theme song to game that plays on loop

let mySound;

function preload() {
    // preload() runs once - loads images for various screens
    //font[0] = loadFont('8bitBold'); //THIS IS CAUSING THE PAGE TO TAKE TOO LONG LOADING
    imgs[0] = loadImage('startscreen.jpg');
    imgs[1] = loadImage('WinScreen.jpg');
    imgs[2] = loadImage('LoseScreen.png');
    belts[0] = loadImage('AEWbelt.png');
    belts[1] = loadImage('TNAbelt.png');
    belts[2] = loadImage('AAAbelt.png');
    imgs[6] = loadImage('Catcher.jpg');
    
    soundFormats('mp3', 'ogg');
      mySound = loadSound('BattleCry8bit.mp3');
   

    }

function setup() {
  createCanvas(600, 400);
// textFont('Press Start 2P');// Set the 8-bit font for the entire canvas
    //THIS ISN'T WORKING EITHER - ONLY TEXT CHANGED TO THIS FORMAT IS THE LOADING MESSAGE

//textFont(font[0]); //UNABLE TO USE DUE TO LOADING TIMES
      // setup() waits until preload() is done
      //imgs[0].loadPixels();
      //c = img.get();
      //play(mySound);//Song is now preloading fine, but need to get it to play
        //SEEMS TO BE AN ISSUE IN 'p5.sound.js'//
        //console is showing that 'play' is undefined in the above//

    }      





//ARRANGE THE FLOW THROUGH OF MY SCREENS
function draw() {0
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){ //draw the start screen with background image
		background(0)

       image ( imgs[0], 0,0, 600, 400);
       
		fill(255)
        stroke(199,36,177)//outline for visibility against bg
        strokeWeight(4)
        textAlign(LEFT);
        textSize (80);
		text('Ω',20, 100);
        textSize (65);
		text('KENNY OMEGA', 20, height / 2 )
        textSize (45);
        text('BELT COLLECTOR', 20, 300)
		textSize (25)
        text('Click to Start Collecting...', 20, 390);
    //textSize (10)
    //strokeWeight(0.5)
        //text('WARNING: FLASHING IMAGES', 420, 30);
        //Added in case framespeed increased above 10
		reset();
}

function gameOn(){ //click to play function
    noStroke()
	background(100)
  
  //I've used the below to create the effect of a light show
  let alpha = sin(angle) * 100 + 155;//have played with these values for light strobe effect
  fill(150, 0, 150, alpha);
  let x1 = width / 2;
  let y1 = 0;
  let x2 = x1 + cos(radians(-30)) * 100; // Adjust the size of the cone
  let y2 = y1 + sin(radians(-30)) * 100; // found some info on satck overflow about flashing shapes
  let x3 = x1 + cos(radians(30)) * 100; // went to p5js reference to learn about cos,sin and radians
  let y3 = y1 + sin(radians(30)) * 100;

  triangle(50, 0, 0, 350, 200, 250);
  triangle(550, 0, 600, 350, 400, 250);
  triangle(width/2, 0, 230, 230, 370, 230);

  angle += radians(flashingSpeed);

  //I've made light boxes below
  fill(150)  
  rect(50,0,25,25)
  rect(300,0,30,25)
  rect(550,0,25,25)

  //Building a wrestling ring for the catcher to move in
  fill(240)
  quad(0, 400, 120, 320, 480, 320, 600, 400)//Ring Mat

  fill(80)
  rect(width/2, 230, 360, 10)//Horizontal Ring Ropes
  rect(width/2, 265, 360, 10)
  rect(width/2, 300, 360, 10)

  quad(0, 380, 0, 370, 120, 300, 120, 310)//Left Ring Ropes
  quad(0, 345, 0, 335, 120, 265, 120, 275)
  quad(0, 310, 0, 300, 120, 230, 120, 240)

  quad(600, 380, 600, 370, 480, 300, 480, 310)//Right Ring Ropes
  quad(600, 345, 600, 335, 480, 265, 480, 275)
  quad(600, 310, 600, 300, 480, 230, 480, 240)

  fill(0)
  quad(120, 320, 120, 220, 140, 220, 140, 320)//Ring posts
  quad(480, 320, 480, 220, 460, 220, 460, 320)

  rect(0, 400, 50, 250)
  rect(600, 400, 50, 250)


  push()
  //for(let belts=0; belts<2; belts++){} //trying here to create an array of the belt images to be randomized
  //created array called [currentBeltIndex]
  image(belts[currentBeltIndex], x, y, 25, 25);
  //currentBeltIndex = (currentBeltIndex + 1) % belts.length;//
      //ABOVE LINE MAKES BELTS FLASH THROUGH 3 DIFFERENT IMAGES PER FRAME - STUTTERING
      angleMode(RADIANS)
      rotate(PI / 3.0);//trying to use what i learned from rotate in p5js ref to rotate belts as they fall
  
  pop()
  
  rectMode(CENTER)
  image(imgs[6],mouseX,height-40,60,40)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-40 && x<mouseX+40){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }


  fill(255)
  textSize(24)
  text("Belts = " + score, 90,20)
}


//
function pickRandom(){
	x= random(20,width-20)
  

}




function endScreen(){
    background(0)

    //SET UP LOSING SCREEN FOR SCORES UNDER 10 USING IfElse SOLUTION
    if(score<10){
        image ( imgs[2], 0,0, 600, 400); 
        
        fill(255)
    stroke(199,36,177)//outline for visibility against bg
    strokeWeight(4)
    textAlign(CENTER);
    textSize(65)
    text('GAME OVER', width / 2, height / 2 )
      text("BELTS = " + score, width / 2, height / 2 + 80)
    textSize(40)
    text('click to play again', width / 2, height / 2 + 125);
    

      //Else/If for the winning screen below
    }else if(score>=10){
        image ( imgs[1], 0,0, 600, 400); 
        
        fill(255)
    stroke(199,36,177)//outline for visibility against bg
    strokeWeight(4)
    textAlign(CENTER);
    textSize(65)
    text('YOU DID IT!', width / 2, height / 2 )
      text("BELTS = " + score, width / 2, height / 2 + 80)
    textSize(40)
    text('click to win even more!', width / 2, height / 2 + 125);
   

    }
 
}


function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
