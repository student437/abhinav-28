class Mango{
    constructor(x,y,radius) {
    
var options = {
    isStatic : true,
    restitution : 0,
    friction : 1,

 }


this.body = Bodies.circle(x,y,radius,options)
this.image = loadImage("ima/mango.png")
this.x=x
this.y=y
this.radius=radius
World.add(world,this.body)



}
display(){

var pos = this.body.position
push()
translate(pos.x,pos.y)
imageMode(CENTER);
 image(this.image, 170, 0, 50,  50);
pop();
}
}