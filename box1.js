class Box1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:0.5,
          density:0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      World.add(world, this.body);

      
      
    }
    display(){
     
      //console.log(this.body.speed);
     
      if(this.body.speed<5){
var angle=this.body.angle;
var pos =this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
fill("orange");
rectMode(CENTER);
rect(0, 0, this.width, this.height);
pop();

      }
      else{
        
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        pop();



      }
      if (this.Visiblity < 0 && this.Visiblity > -105){
        score++;
        
      }
      if (this.Visiblity < 0 && this.Visiblity > -10){
        score++;
       // pss.play();
      }
    }

      }
    
  
 