class Drop {
    constructor(x, y) {
      var options = {
      // //     restitution: 1,
     friction: 0.1,
       //     isStatic:true
       }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r,options);
        
        World.add(world, this.body);
    }
    update(){
if(this.rain.position.y>height){
    Matter .Body.setPosition(this.rain, {x:random (0,400),y:random(0,400)})
}
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}