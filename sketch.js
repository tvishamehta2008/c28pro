
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;
var stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,110,30);
	mango2=new mango(1150,140,30);
	mango3=new mango(1050,160,30);
	mango4=new mango(1100,100,30);
	mango5=new mango(1100,100,30);
	mango6=new mango(1100,100,30);

	stone1=new stone(235,420,30);

	launcher1=new Launcher(stone1.body,{x:240,y:421});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone1.display();
  launcher1.display();
  groundObject.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  //detectCollision(stone1,mango4);
  //detectCollision(stone1,mango5);
  //detectCollision(stone1,mango6);
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	launcher1.fly();
}

function keyPressed() {
	if(keyCode===32)
	{
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		launcher1.attach(stone1.body);
	}
}

function detectCollision(lstone,lmango)
{
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<= lmango.r + lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}