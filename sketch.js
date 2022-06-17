var ship, ship_animation;
var sea, sea_image;
function preload(){
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea_image = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite (225, 200, 400, 400);
  sea.addImage("sea", sea_image);
  sea.scale = 0.3
  ship = createSprite (250, 250, 50, 50);
  ship.addAnimation ("sail", ship_animation);
  ship.scale = 0.2
  
  
}

function draw() {
  background("blue");
  
  sea.velocityX = 5
  if (sea.x > 625){
    sea.x = -225
  }

  drawSprites();

 
}
