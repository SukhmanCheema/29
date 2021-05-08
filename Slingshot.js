class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.slingImage1=loadImage("sprites/sling1.png");
        this.slingImage2=loadImage("sprites/sling2.png");
        this.slingImage3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImage1,170,20);
        image(this.slingImage2,140,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<180){
             stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            image(this.slingImage3,pointA.x-25,pointA.y-15,15,30);
            } else{

                stroke(48,22,8);
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
                image(this.slingImage3,pointA.x+25,pointA.y-15,15,30);
                
                
                
                
            }
        }
    }
    
}