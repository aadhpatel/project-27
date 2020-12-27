
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob, bobSprite;
var roof, roofSprite;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 1300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1 = new Bob (200, 200, 20, 20);
	bob2 = new Bob(200, 400, 20, 20);
	bob3 = new Bob(200, 600,20, 20);
	bob4 = new Bob(200, 800, 20, 20);
    bob5 = new Bob(200, 100, 20, 20);

	roof = new Roof (100, 200, 50, 20);
	
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 roof.display();
 
	
  

 
}



