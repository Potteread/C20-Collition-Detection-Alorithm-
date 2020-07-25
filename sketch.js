var fixedrect, movingrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400, 200, 70, 80);
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
  movingrect.debug = true
  fixedrect.debug = true
}

function draw() {
  background("pink");  
movingrect.x=mouseX
movingrect.y=mouseY
if (fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
  && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2  ){
    movingrect.shapeColor="purple"
    fixedrect.shapeColor="purple" 
  }
  else {
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
  }
 
  drawSprites();
}