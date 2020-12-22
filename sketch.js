var car, carImage1, carImage2, carImage3, wall, wallImage;
var speed, weight;

function preload(){

carImage1 = loadImage('red car.png')
carImage2 = loadImage('blue car.png')
carImage3 = loadImage('yellow car.png')
wallImage = loadImage('wall.png')


}
function setup() {
  createCanvas(1600,400);
  
  speed  = random(55,90)
  weight = random(400,1500)

  wall = createSprite(1500,200,60, height/2)
  wall.addImage(wallImage)
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.addImage(carImage1)
  car.scale = 0.3
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2){


    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){

      car.addImage(carImage1);
      car.scale = 0.3
    }

    if(deformation<180 && deformation>100){

      car.addImage(carImage2);
      car.scale = 0.1

    }

    if(deformation<100){

      car.addImage(carImage3)
      car.scale = 0.1
    }
  }
  drawSprites();
}
  




  
  
  
 