class Paper{
    constructor(x,y,radius){
var options ={
 isStatic:true,
 'restitution':0.3,
  'friction' :0.5,
  'denstiy':1.2   
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius

World.add(world,this.body);
}
display(){
  ellipseMode(RADIUS);
  
  fill("pink");

circle(this.body.position.x,this.body.position.y,this.radius);
}
}