
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObj,groundObj;	
var world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	paperObj=new paper(200,450,70);
	groundObj=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);  
}


function draw() {
	background(230);

  rectMode(CENTER);
 
  paperObj.display();
  groundObj.display();
  dustbinObj.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});
  	}
}





