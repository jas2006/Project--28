
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango_i , stone_i,tree_i,boy_i ;
var mango,mango2,mango3,mango4 , tree , stone , boy ;
var chain1

function preload()
{
	 mango_i = loadImage(mango.png);
 	 stone_i = loadImage(stone.png);
	 tree_i = loadImage(tree.png);
	 boy_i =  loadImage(boy.png);
	
}

function setup() {
	createCanvas(800, 700);
//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;
	tree = rect(650,600,200,600);
	tree.addImage(tree_i);
	
	boy = rect(150,600,50,150);
	boy.addImage(boy_i);
	
	stone = rect(235,420,40,40);
	stone.addImage(stone_i);

	mango = new Mango(700,250,50);
	mango.addImage(mango_i);

	mango1 = new Mango(720,300,50);
	mango1.addImage(mango_i);

	mango2 = new Mango(680,400,50);
	mango2.addImage(mango_i);

	mango3 = new Mango(600,500,50);
	mango3.addImage(mango_i);

	mango4 = new Mango(700,450,50);
	mango4.addImage(mango_i);

	chain1 = new Chain(boy,stone);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  boy.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();;
  stone.display();
  mango_i.display();
  tree_i.display();
  stone_i.display();
  boy_i.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(boy.body,stone.body);
}   
  	function mouseReleased(){
		chain.fly();
	}
function detectCollision(lstone,lmango){

mangoBodyPosition = lmango.body.Position
stoneBodyposition = lstone.body.Position

var distance = dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<-lstone+lmango){
	Matter.Body.setStatic(lmango,false)
}

}
function keyPressed(){
	if(keyCode === 32){
	Matter.Body.setPosition(stone,{x:235 , y:400})
	chain.attach(stoneBody);
	}
}

