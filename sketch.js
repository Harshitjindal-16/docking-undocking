var bg
var issimg
var scimg1
var scimg2
var scimg3
var scimg4
var iss
var spacecraft
var hasDocked=false

function preload(){
  bg=loadImage('Docking-undocking/spacebg.jpg')
issimg=loadImage('Docking-undocking/iss.png')
scing1=loadImage('Docking-undocking/spacecraft1.png')
scing2=loadImage('Docking-undocking/spacecraft2.png')
scing3=loadImage('Docking-undocking/spacecraft3.png')
scing4=loadImage('Docking-undocking/spacecraft4.png')

}




function setup() {
  createCanvas(600,350);
  spacecraft =createSprite(280, 240);
spacecraft.addImage(scing1)
spacecraft.scale=0.5
iss=createSprite(300,100)
iss.addImage(issimg)
iss.scale=0.50
}

function draw() {
  background(0);
  spacecraft.addImage(scing1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  }  

  if(keyDown("UP_ARROW")){

    spacecraft.y=spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scing4)
    spacecraft.x=spacecraft.x-1
    
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scing3)
    spacecraft.x=spacecraft.x+1
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scing2)
  }
  drawSprites();

}