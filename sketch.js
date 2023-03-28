const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restituition:0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  var groundOption = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,groundOption);
  World.add(world,ground);

}

function draw(){
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,400,20);





}