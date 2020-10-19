 var car,ball,car1,car2;


function setup() {
  createCanvas(800,600);
  wall = createSprite(700,200,100,80);
  wall.shapeColor = "green";
  wall1 = createSprite(700,300,100,80);
  wall1.shapeColor = "green";
  wall2 = createSprite(700,400,100,80);
  wall2.shapeColor = "green";
  bullet = createSprite(50,50,20,20);
  bullet.shapeColor = "orange";

}

function draw() {
  ball.x = World.mouseX;
  ball.y = World.mouseY;
  background(255,255,255);  
   if (isTouching(ball,car)){
    car.shapeColor = "blue";
   } else {
    car.shapeColor = "green";
   }
   if (isTouching(ball,car1)){
    car1.shapeColor = "purple";
   } else {
    car1.shapeColor = "green";
   }
   if (isTouching(ball,car2)){
    car2.shapeColor = "red";
   } else {
    car2.shapeColor = "green";
   }
  
  drawSprites();
}
function isTouching(shape1,shape2){
  if(shape1.x-shape2.x < shape1.width/2 + shape2.width/2 &&
    shape2.x-shape1.x < shape1.width/2 + shape2.width/2 &&
    shape2.y-shape1.y < shape1.height/2 + shape2.height/2 &&
    shape1.y-shape2.y < shape1.height/2 + shape2.height/2){
      shape1.velocityX = -shape1.velocityX;
      return true;
  } else {
    return false;
  }

}
