
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stand,block1,block2,block3,block4,block5,block6,chain,polygon
var engine,world
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    polygon = Bodies.circle(100,350,20)
	
    chain = new SlingShot(polygon, {x:200, y: 350})
    stand = new Ground(400,350,5,100)
    block1 = new Box(370,350,30,40)
    block1 = new Box(400,350,30,40)
    block1 = new Box(430,350,30,40)
    block1 = new Box(370,310,30,40)
    block1 = new Box(430,310,30,40)
    block1 = new Box(400,280,30,40)
    

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  drawSprites();
 chain.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 stand.display()
}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
