var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  console.log(height);
  wall = createSprite(1200,200,160,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background("blue");  
  drawSprites();
  collide(wall,car);
}

function collide(wall,car){

  if((wall.x-car.x) < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

   if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
    }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
    }
  }

}