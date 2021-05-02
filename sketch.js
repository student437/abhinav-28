
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5,mango6;
var ground1;
var boy1;
var stone1;
var tree1;
var ss1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1 = new Mango(320,360,50,50)
	mango2 = new Mango(380,380,50,50)
	mango3 = new Mango(460,340,50,50)
	mango4 = new Mango(420,300,50,50)
	mango5 = new Mango(550,360,50,50)
	mango6 = new Mango(400,330,50,50)
	ground1 = new Ground(400,700,840,45)
	boy1=new Boy(80,630,20,20)
	stone1 = new Stone(40,567,20,20)
	tree1 = new Tree(470,400)
	
	ss1 = new Slingshot(stone1.body,{x:180,y:540})
    Engine.run(engine);

}


function draw() {
  
	Engine.update(engine);
  

  background(180,150);
    ss1.display();
  ground1.display();
  boy1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 detectcollision(stone1,mango1);
 detectcollision(stone1,mango2);
 detectcollision(stone1,mango3);
 detectcollision(stone1,mango4);
 detectcollision(stone1,mango5);
 detectcollision(stone1,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})}

	function mouseReleased(){
		ss1.fly();
	  }
	  
	  function keyPressed(){
		  if (keyCode === 32){
			  Matter.Body.setPosition(stone1.body,{x : 235,y : 420})
			  ss1.attach(stone1.body);

		  }
	  }

	  function detectcollision(stone,mango){
		  mango1BodyPosition =mango.body.position
		  stone1BodyPosition =stone.body.position

		  var distance = dist( stone1BodyPosition.x, stone1BodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
          if(distance<=mango.radius+stone.radius)
		  {
			  Matter.Body.setStatic(mango.body,false);
		  }
	  }
	  