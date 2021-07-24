const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;



function preload() {
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  cannon = new Cannon(180, 110, 110, 50,angle);
  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(0,590,0,0,options);
  World.add(world,ground);

  tower = Bodies.rectangle(80,270,0,0,options);
  

}



function draw() {
  background(189);
  //console.log(mouseX,mouseY);
  

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,1);

  image(towerImage,tower.position.x,tower.position.y,160,320)
  cannon.display();

}
