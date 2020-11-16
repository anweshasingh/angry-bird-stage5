class Chain {
    constructor (bodyA, bodyB) { //in constructor we give first and second body
        var options = {
            bodyA: bodyA, // assigning bodyA to bodyA 
            bodyB: bodyB, // assigning bodyB to bodyB
            length: 10, //length to that the chain
            stiffness: 0.04 //strength of the chain 
        }
        this.chain = Constraint.create(options); //creating chain using constraint
        World.add(world,this.chain); // adding chain to the world
    }

    display () {
        var pointA = this.chain.bodyA.position; // set pointA to bodyA
        var pointB = this.chain.bodyB.position; //set pointB to bodyB
        line(pointA.x,pointA.y, pointB.x,pointB.y); //draw a line between them
    }
}