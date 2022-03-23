class Ground{
    constructor(x,y,w,h,ground_options){
        ground_options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,ground_options)
        this.w = w;
        this.h = h;

        World.add(world,this.body)
    }

    display(){
        push()
        rectMode(CENTER)
        fill("yellow")
        noStroke()
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }

}