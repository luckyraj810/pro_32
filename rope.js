class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){

     this.sling.bodyA=null;
    }
    attach(body){
		this.sling.bodyA=body;
	}
    display(){
       // var pos =this.body.position;
      
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
           // translate(this.body.position.x, this.body.position.y);
            strokeWeight(4);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}