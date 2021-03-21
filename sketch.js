
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1
var stone1
var rubber1

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(700,320,200,500)
	ground = new Ground(600,height,1200,20)
	stone1= new Stone(700,320,70,70)
	rubber1= new Rubber(500,320,70,70)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  hammer1.display()
  ground.display()
  stone1.display()
  rubber1.display()
  drawSprites();
 
}



