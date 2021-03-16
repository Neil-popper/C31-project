const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);

  for (var k = 0; k<=innerWidth; k = k +80) {
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=innerWidth; j=j+35) {
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15; j <=innerWidth; j=j+35) {
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 40; j <=innerWidth; j=j+35) {
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 15; j <=innerWidth; j=j+35) {
    plinkos.push(new Plinko(j,375))
  }


  ground = new Ground(240,785,800,30)
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-230, width/2+230), 10, 10))
  }

  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }
  

}