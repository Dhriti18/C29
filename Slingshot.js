class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push ();
        imageMode (CENTER);
        image (this.sling1,220,120);//right sling
        image (this.sling2,193,80);//left sling
        
        pop ();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            strokeWeight(7);
            stroke (49,22,8);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);//right string
            line(pointA.x-18, pointA.y, pointB.x-10, pointB.y);
            }
            else{
                strokeWeight(3);
            stroke (49,22,8);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);//right string
            line(pointA.x-18, pointA.y, pointB.x-10, pointB.y);
            }
            image (this.sling3,pointA.x - 25,pointA.y-10,10,30);
        }

    }
    
}