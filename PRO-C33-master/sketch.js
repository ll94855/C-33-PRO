var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var score = 0;
var particle;
var turn = 0;
var plinkos = [];
var divisions = [];
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   scoring();
   text("500",24,550);
   text("500",104,550);
   text("500",184,550);
   text("500",264,550);
   text("100",344,550);
   text("100",424,550);
   text("100",504,550);
   text("200",584,550);
   text("200",664,550);
   text("200",744,550);
   gameEnd();

   
}

function mousePressed()
{
  if(gameState === "play")
  {
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}

function scoring()
{
  if(particle!= null)
  {
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x < 320)
      {
        score+=500;
        particle = null;
        if(turn >= 5) gameState ="end";
      }
      else if(particle.body.position.x > 321 && particle.body.position.x < 560)
      {
        score+=100;
        particle = null;
        if(turn >= 5) gameState ="end";
      }
      else if(particle.body.position.x > 561 && particle.body.position.x < 800)
      {
        score+=200;
        particle = null;
        if(turn >= 5) gameState ="end";
      }
    }
  }
}

function gameEnd()
{
  if(gameState === "end")
  {
    fill(0);
    rect(400,400,800,800);


    fill(256,256,256)
    textSize(30);
    text("Game Over!",330,400);
    textSize(15);
    text("Your score is: "+score,348,450);
  }
}