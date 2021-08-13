
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  createCanvas(800,400);
  
 blower= createSprite(400, 200, 50, 50);
  ball = createSprite(348,220,60,10);
  blowerMouth=createSprite(348,300,70,30)
   
  button= createButton("click to blow");
  button.position(width/2, height-100);
  button.class("blowButton");
  button.mousePressed(blowerMouth);

}

function draw() {
  background("black");  

  function blowerMouth()
{
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}  
  drawSprites();
}