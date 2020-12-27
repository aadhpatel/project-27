class Rope {
    constructer(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display() {
     var pointA= this.rope.bodyA.position;
     var pointB=this.rope.bodyB.position;
     strokeWeight(4);
     //line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}