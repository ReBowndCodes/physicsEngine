const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var objects;

var ball;

function setup() {
  createCanvas(800,800);

  var ground_options = {
    isStatic:true  
  } 

  var ball_options = {
    restitution:1.0
  }

  engine = Engine.create();
  world = engine.world;
  objects = Bodies.rectangle(200,200,50,70,ground_options);

ball = Bodies.circle(200,200,50);
World.add(world,ball)

 World.add(world,objects);
  console.log(objects);
  console.log(objects.position.x);
  console.log(objects.position.y);

   
}

function draw() {
  background('white')

Engine.update(engine);

  rectMode(CENTER);
  rect(objects.position.x, objects.position.y, 50, 90); 

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)  
  
  drawSprites();
}