
const Engine= Matter.Engine;
const World=  Matter.World;
 const Bodies=  Matter.Bodies;
 const Constraint= Matter.Constraint;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  superman1=new superman(200,200,30,30);
  slingshot1=new slingshot(superman1.body,{x: 200, y: 100})
  // create sprites here
  block1=new block(550,100,40,40)
  block2=new block(550,100,40,40)
  block3=new block(550,100,40,40)
  block4=new block(550,100,40,40)
  block5=new block(550,100,40,40)
  block6=new block(550,100,40,40)
  block7=new block(550,100,40,40)
  
  block8=new block(500,100,40,40)
  block9=new block(500,100,40,40)
  block10=new block(500,100,40,40)
  block11=new block(500,100,40,40)
  block12=new block(500,100,40,40)
  block13=new block(500,100,40,40)
  block14=new block(500,100,40,40)

  block15=new block(450,100,40,40)
  block16=new block(450,100,40,40)
  block17=new block(450,100,40,40)
  block18=new block(450,100,40,40)
  block19=new block(450,100,40,40)
  block20=new block(450,100,40,40)
  block21=new block(450,100,40,40)

  ground1=new ground(350,300,500,10)
  ground2=new ground(750,200,100,10)

  monster1=new monster(750,0,40,40);
}

function draw() {
  background("black");
  
  Engine.update(engine);
  textSize(30)
  fill("red")
  text("drag the mouse  to kill the monster",120,350)
  superman1.display();
  slingshot1.display();
  block1.display();  
  fill("purple")
  block2.display(); 
  fill("pink")
  block3.display(); 
  fill("cyan")
  block4.display(); 
  fill("lime")
  block5.display(); 
  fill("green")
  block6.display(); 
  fill("yellow")
  block7.display(); 
  fill("red")

  block8.display();
  fill("blue")
  block9.display();
  fill("orange")
  block10.display();
  fill("red")
  block11.display();
   fill ("silver")
  block12.display();
  fill("gold")
  block13.display();
    fill ("skyblue")
  block14.display();
  fill("purple")

  block15.display();
  fill("brown")
  block16.display();
 fill ("peach")
  block17.display();
 fill ("red")
  block18.display();
  fill("yellow")
  block19.display();
  fill("orange")
  block20.display();
  fill("green")
  block21.display();
  fill("cyan")

  ground1.display();
  //ground2.display();

  monster1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superman1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot1.fly();

}

