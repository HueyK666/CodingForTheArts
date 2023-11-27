let screen = 0;
let y=-20;
let x=200;
let speed = 2;
let score= 0;
//let song = [];//This code is now not crashing the game - but still will not play
let imgs = [];
let angle = 0;
//tring here to create an array of the belt images to be randomized

let c;

//let font = [];

//Add 8bit theme song to game that plays on loop


function preload() {
    // preload() runs once - loads images for various screens
    //font[0] = loadFont('8bitBold'); //THIS IS CAUSING THE PAGE TO TAKE TOO LONG LOADING
    imgs[0] = loadImage('startscreen.jpg');
    imgs[1] = loadImage('WinScreen.jpg');
    imgs[2] = loadImage('LoseScreen.png');
    imgs[3] = loadImage('AEWbelt.png');
    imgs[4] = loadImage('TNAbelt.png');
    imgs[5] = loadImage('AAAbelt.png');
    imgs[6] = loadImage('Catcher.jpg');
    let belts = [imgs[3],imgs[4],imgs[5]];//tring here to create an array of the belt images to be randomized
    //song[1] = loadSound('BattleCry8bit.mp3'); //This code is now not crashing the game - but still will not play


    }

function setup() {
  createCanvas(600, 400);
   //textFont(font[0]); //UNABLE TO USE DUE TO LOADING TIMES
      // setup() waits until preload() is done
      //imgs[0].loadPixels();
      //c = img.get();
      //song[1].loop //This code is now not crashing the game - but still will not play
}
//ARRANGE THE FLOW THROUGH OF MY SCREENS
function draw() {
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
		reset();
}

function gameOn(){ //click to play function
    noStroke()
	background(0)
  text("score = " + score, 30,20)

 push();   
    //translate(x, y);       // Set where 0,0 starts
     //  rotate(angle+0.1);  //trying to rotate belts as they fall
    image(imgs[3],x,y,25,25)
  //for(let belts=0; belts<2; belts++){} //trying here to create an array of the belt images to be randomized
 pop(); 



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
}


function pickRandom(){
	x= random(20,width-20)
}


function endScreen(){
    background(0)

    //SET UP WINNING & LOSING SCREENS USING IfElse SOLUTION
    //LOSING
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
    

    //WINNING
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
    text('click to play again', width / 2, height / 2 + 125);
   

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
