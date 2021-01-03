class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 300
        }
        this.chain =  Constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
       this.chain.bodyB = null 
    }
    attach(){
        bodyB : bodyA
    }
    
    display(){
       if(this.sling.bodyB) {
         var pointA = this.chain.bodyA.position 
        var pointB = this.chain.bodyB.position
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       }
    }
} 