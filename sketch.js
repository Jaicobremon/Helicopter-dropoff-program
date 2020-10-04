//declaring variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//creating the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//preloading images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating canvas and setting rectmode to center
	createCanvas(800, 700);
	rectMode(CENTER);

	//creating package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//assigning value to engine and world using Matter.js
	engine = Engine.create();
	world = engine.world;

	//creating packageBody using Matter.js
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Run the physics engine
	Engine.run(engine);
  
}


function draw() {
  //setting rectmode whenever updated to center
  rectMode(CENTER);
  //setting background
  background(0);
  //making the packages position same as the package object
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //drawing sprites
  drawSprites();
 
}

function keyPressed() {
	//when down arrow is pressed makepackage drop from helicopter 
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
    
  }
}
