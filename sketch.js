
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var engine;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1708,700);

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.

    groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1500,600,20,120);			
    ball = new Ball(100,100,20);
  
}


function draw() {
 background(0);

 groundObj.display();
 ball.display();
 leftSide.display();
 rightSide.display();


 Engine.update(engine);
}

function keyPressed(){
  ball.Metodo();
}
