var lineX = 98;
var lineY = 45;

rect(125, 0, 150, 45);

rect(30, 45, 340, 35);
for( var k = 0; k < 4; k++){
line(lineX, lineY, lineX, lineY + 35);
lineX += 68;
}

rect(45,95, 130, 130);
rect(45,263, 130, 130);
rect(243,95, 130, 130);
var scenes = [true, false];
var currScene = 0;
draw = function() {
if(mouseIsPressed && mouseX>30 && mouseX<98 && mouseY>45 && mouseY< 80 && scenes[0] === false){
    background(255, 0, 0);
    
  currScene =   
}
else if(mouseIsPressed && mouseX>30 && mouseX<98 && mouseY>45 && mouseY< 80){
    background(255, 0, 0);
    
}
};









textSize(23);
fill(136, 0, 255);
text("GameSoft", 150, 30);
textSize(18);
text("games", 37, 67);
text("store", 111, 67);
text("mods", 178, 67);
