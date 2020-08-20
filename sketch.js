const Engine = Matter.Engine;
 const World = Matter.World;
 //const Events = Matter.Events;
 const Bodies = Matter.Bodies;

 var maxDrops = 100;
 var umbrella;

function preload(){
    
}

function setup(){
 
    createCanvas(500, 1000);
    engine = Engine.create();
    world = engine.world;
   
    umbrella=new Umbrella(30,950,10);

    
}

function draw(){
    background (0);

    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new Drop(random(0,400),random(0,400)));
       
    }
    
    maxDrops.display();
    umbrella.display();
    drawSprites ();
}   

