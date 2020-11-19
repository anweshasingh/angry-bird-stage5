class SlingShot {
    constructor (bodyA, pointB) { //in constructor we give one body and one point
        var options = {
            bodyA: bodyA, // assigning bodyA to bodyA 
            pointB: pointB, // assigning pointB to pointB
            length: 10, //length to that the chain
            stiffness: 0.04 //strength of the chain 
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options); //creating chain using constraint
        World.add(world,this.sling); // adding chain to the world
    }

    fly () { //function to make the bird fly
        this.sling.bodyA = null; //when the bird fly bodyA becomes null, so bird ids no longer attached to the sling 
    }

    display () {
        if(this.sling.bodyA) { // chain will be disappeared only when bird is attach to the sling
            var pointA = this.sling.bodyA.position; // set pointA to bodyA
            var pointB = this.pointB //set pointB to pointB
            line(pointA.x,pointA.y, pointB.x,pointB.y); //draw a line between them
        }
       
    }
}