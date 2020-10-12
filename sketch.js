var box;
var object;

function setup() {
  createCanvas(800,400);
  box = createSprite(400, 200, 50, 50);
  box.shapeColor = "pink"

  object = createSprite(100,300,50,100);
  object.shapeColor = "green"
}

function draw() {
  background("black");
  object.x = mouseX;
  object.y = mouseY;
  if(box.x-object.x<box.width/2+object.width/2
    && object.x-box.x<box.width/2+object.width/2
    &&box.y-object.y<box.height/2+object.height/2
    &&object.y-box.y<box.height/2+object.height/2){
      box.shapeColor = "red"
      object.shapeColor = "blue"
    }
  else{
    box.shapeColor = "pink"
    object.shapeColor = "green"
  }
  
  drawSprites();
}