class Ball{
    constructor(x,y,r,Ball_options){
         Ball_options={
            isStatic:false,
            restitution:0.5,
            friction:0,
            density:1.2
        }

        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,Ball_options)

        World.add(world,this.body)
    }

    display(){
        push()
        fill(255,255,255)
        ellipseMode(RADIUS)
        noStroke();
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        pop();
    }

    Metodo(){
     if(keyCode === UP_ARROW){
      Body.applyForce(this.body,this.body.position,{x:90,y:-100})
    }
            
    }
   
}