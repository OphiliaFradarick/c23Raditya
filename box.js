class Box{
    //properties
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1,
            'density':1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);

    }

    //functions
    display(){
       var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);

    }
}