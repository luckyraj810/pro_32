
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var t1=0;

var b1,b2;

var bkimage;
var bg="light.jpg";

var score=0;

function preload()
{
	timezone();
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(700,690,1400,20);
	ground2=new Ground(600,550,400,20);
	ground3=new Ground(1200,350,300,20);
	box1=new Box(480,500,40,60);
	box2=new Box(520,500,40,60);
	box3=new Box(560,500,40,60);
	box4=new Box(600,500,40,60);
	box5=new Box(640,500,40,60);
	box6=new Box(680,500,40,60);
	box7=new Box(720,500,40,60);
	box8=new Box(520,400,40,60);
	box9=new Box(560,400,40,60);
	box10=new Box(600,430,40,60);
	box11=new Box(640,430,40,60);
	box12=new Box(680,430,40,60);
	box13=new Box(560,370,40,60);
	box14=new Box(600,370,40,60);
	box15=new Box(640,370,40,60);
	box16=new Box(600,300,40,60);

	box17=new Box1(1120,340,40,60);
	box18=new Box1(1160,340,40,60);
	box19=new Box1(1200,340,40,60);
	box20=new Box1(1240,340,40,60);
	box21=new Box1(1280,340,40,60);
	box22=new Box1(1160,280,40,60);
	box23=new Box1(1200,280,40,60);
	box24=new Box1(1240,280,40,60);
	box25=new Box1(1200,220,40,60);

	polygon1=new Polygon(150,470,20);

	r1=new Rope(polygon1.body,{x:150,y:470});
	

	

	Engine.run(engine);
	
	
	
}


function draw() {
 // rectMode(CENTER);
 if(bkimage)
 background(bkimage);
 
 // background("pink");

 noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
  
  Engine.update(engine);
  
  ground.display();
  ground2.display();
  ground3.display();
  polygon1.display();   
  box1.display();          
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

 

  r1.display();
}


function mouseDragged (){

	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased(){
	
	r1.fly();
	
	
	
	}
	function keyPressed(){
		if(keyCode===32){
		
			r1.attach(polygon1.body);
		
		
		
		
		}
		}

		async function timezone(){
var r=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var rjson=await r.json();
var dt=rjson.datetime;
var h=dt.slice(11,13);
console.log(h);
if(h>=06 && h<=18){

	//background(150);
bg="light.jpg";

}else{

//background(0);
bg="dark.jpg";


}

bkimage=loadImage(bg);



		}



