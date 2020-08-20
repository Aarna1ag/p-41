class Umbrella {
    constructor(x, y,r) {
      var options = {
      // //     restitution: 1,
      //      friction: 0,
             isStatic:true
        }
        this.r = 450;
        this.body = Bodies.circle(220, 800,300,options);
        this.x=300;
        this.y=950;
        this.image = loadImage("boy.PNG");
       
        World.add(world, this.body);
    }
    display(){
      var pos;
      pos=this.body.position;
     imageMode (CENTER);
     image (this.image,pos.x,pos.y,this.r,this.r);
    }
}