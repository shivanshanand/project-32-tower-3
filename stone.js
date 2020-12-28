    class stone{
        constructor(x,y,radius){
            var op={
                isStatic: false,
                restitution: 0,
                friction: 1,
                density:1.5
            }
            this.body=Bodies.circle(x,y,radius/2,op);
            this.radius= radius;
            this.image=loadImage("polygon.png");
            World.add(world,this.body);
        }
    
        display(){
            push(); 
            translate(this.body.position.x, this.body.position.y,this.radius);
            rotate(this.body.angle);
            image( this.image, 0,0,50,50) ; 
            pop();
        }
    }