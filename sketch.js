var tower_image,door_image,climber_image,ghost_image
var spooky_sound,tower,ghost,doorsGroup,climbersGroup
var invisibleBlockGroup,gameState="play"



function preload(){
tower_image=loadImage("tower.png")
door_image=loadImage("door.png")
climber_image=loadImage("climber.png");
ghost_image1=loadImage("ghost-standing.png")
spooky_sound=loadSound("spooky.wav")
}

function setup(){
createCanvas(600,600)
  
spooky_sound.loop();
  
tower=createSprite(300,300)
tower.addImage(tower_image)
tower.velocityY=4

ghost=createSprite(300,180)  
ghost.addImage(ghost_image1)
ghost.scale=0.5

doorsGroup = new Group();
climbersGroup = new Group(); 
invisibleBlockGroup = new Group();
  

 
  
} 
function draw(){
background(0)
  
  
if (gameState===("play")){
if(keyDown("left_arrow")){
  ghost.x=ghost.x-3
}
if(keyDown("right_arrow")){
  ghost.x=ghost.x+3
}
  
if(keyDown("space")){
  ghost.velocityY=-4
}
if(tower.y>400){
tower.y=300
}
ghost.velocityY = ghost.velocityY + 0.8
 SpawnDoors()
  

if(climbersGroup.isTouching(ghost)){ 
  ghost.velocityY = 0;
}
if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
ghost.destroy(); 
gameState = "end" 
}
drawSprites()
}
if (gameState === "end"){ stroke("yellow");
fill("yellow"); textSize(30);
text("Game Over", 230,250) }
}

function SpawnDoors(){
  
  
  
  if (frameCount %240=== 0) { 
var door = createSprite(200, -50);
var climber = createSprite(200,10); 
var invisibleBlock = createSprite(200,15);
invisibleBlock.width = climber.width; 
invisibleBlock.height = 2;
door.x = Math.round(random(120,400)); 
climber.x = door.x;
invisibleBlock.x = door.x;
door.addImage(door_image);
climber.addImage(climber_image);
door.velocityY = 1; 
climber.velocityY = 1;
invisibleBlock.velocityY = 1;
ghost.depth = door.depth; 
ghost.depth +=1;
door.lifetime = 800;
climber.lifetime = 800;
invisibleBlock.lifetime = 800;
doorsGroup.add(door); 
invisibleBlock.debug = true; 
climbersGroup.add(climber);
invisibleBlockGroup.add(invisibleBlock);

}
      }