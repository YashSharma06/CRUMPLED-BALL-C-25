const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,box2;

function preload(){

	img = loadImage("sprites/dustbingreen.png")
   
   }   

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);

	ball1 = new PaperBall(100,650);
	
	box1 = new Box( 690, 600, 15, 140);
	
	box2 = createSprite( 630, 600, 140, 15);
	box2.addImage(img);
	
	box3 = new Box( 560, 600, 15, 140);
	Engine.run(engine);
  
}

function draw() {
  
  background(150);
  //ImageMode (CENTER);
  //image (img, 0, 0, 140, 140);
  ground1.display(); 
  box1.display();
  box3.display();
  drawSprites();
  ball1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-15});
	}
}

