  class box {
      constructor(x, y, width, height) {
        var options = {
            isStatic:false     ,
            restitution:0.8,
            friction:0.3,
            density:1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width; 
        this.height = height;

        World.add(world, this.body); 

        this.visible=250;
    }

    display(){
     // console.log(this.body.speed)

      stroke("black")
      push();
      if(this.body.speed<3){
        var angle = this.body.angle;
        translate(this.body.position.x,this.body.position.y); 
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        this.visible=this.visible-5;
        tint(250, this.visible);
      }
      pop();
    }

    score(){
      if(this.visible<0 && this.visible>-200){
        score++;
      }
    }  
  }
