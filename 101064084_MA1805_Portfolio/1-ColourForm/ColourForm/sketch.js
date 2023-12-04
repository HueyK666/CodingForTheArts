

function setup (){
    createCanvas(600, 300)//canvas width/height//
   
}
function draw(){
   //Create rectangle in the yellow from the Rwandan Flag insted of white to act as BG
   fill(255, 209, 0)
   rect(0, 0, 600, 3000,)
  
   //Add the main 'red crosses' but in the Rwandan green
   fill(0, 119, 73)
   rect(270, 0, 60, 300,)
   rect(0, 120, 600, 60)
   noStroke()

   //Add additional cross marks in green with the quad shape
   //Using Quad allows me to set the x&y coordinate of each point
   fill(0, 119, 73)
   quad(0, 0, 0, 20, 200, 100, 220, 100) //top left
   quad(600, 0, 600, 20, 400, 100, 380, 100) //bottom left
   quad(0, 300, 0, 280, 200, 200, 220, 200) //top right
   quad(600, 300, 600, 280, 400, 200, 380, 200) //bottom right
   noStroke()

   //create the blue 'triangle shapes
   //Again creating these shapes as triangles allows me to easier manipulate the cordinates
   fill(0,119,200)
   triangle(30, 0, 250, 100, 250, 0)//top left large
   triangle(0, 30, 0, 100, 180, 100) //top left small
   triangle(0, 200, 0, 270, 180, 200)//bottom left small
   triangle(30, 300, 250, 300, 250, 200)//bottom left large
   triangle(350, 0, 350, 100, 570, 0)//top right large
   triangle(600, 30, 420, 100, 600, 100)//top right small
   triangle(420, 200, 600, 270, 600,200)// bottom right small
   triangle(350, 200, 350, 300, 570, 300)//bottom right large
   noStroke()



}