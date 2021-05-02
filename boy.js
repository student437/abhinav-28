class Boy{
    constructor(x,y,w,h){
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.image = loadImage("ima/boy.png")
    this.x = x;
    this.y = y;
    this.w = w ;
    this.h = h;
    World.add(world,this.body);
    }

    display(){

        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
         image(this.image, 170, 0, 150,  250);
        pop();
        }
        }