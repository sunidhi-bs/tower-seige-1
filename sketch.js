const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(350,300,200,10);
  ground2 = new Ground(650,200,180,10);
  
  block1 = new Box(660,180,33,40);
  block2 = new Box(680,180,33,40);
  block3 = new Box(710,180,33,40);
  block4 = new Box(620,180,33,40);
  block5 = new Box(590,180,33,40);
  //level 2
  block6 = new Box(630,140,33,40);
  block7 = new Box(670,140,33,40);
  block8 = new Box(650,140,33,40);
  //level 3
  block9 = new Box(650,100,33,40);

  block1 = new Box(660,180,33,40);
  block2 = new Box(680,180,33,40);
  block3 = new Box(710,180,33,40);
  block4 = new Box(620,180,33,40);
  block5 = new Box(590,180,33,40);
  block6 = new Box(630,140,33,40);
  block7 = new Box(670,140,33,40);
  
  polygon = new Polygon(100,150,15);
  slingshot = new SlingShot(polygon.body,{x:100,y:150})

  //this.circle = Bodies.circle(500,200,50);
  //World.add(world,this.circle);
}
function draw() {
  background(0);  
  Engine.update(engine); 
  ground1.display();
  ground2.display();
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("purple");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}