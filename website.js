var scenes = [false, false];
var currScene = 0;
//creating scenes
draw = function(){
    //Home screen
    if((scenes[0] === false && currScene === 0) || (mouseIsPressed && mouseX>30 && mouseX<98 && mouseY>45 && mouseY< 80)){
        background(0, 0, 0);
        rect(45,95, 130, 130);
        rect(45,263, 130, 130);
        rect(243,95, 130, 130);
        rect(243,263, 130, 130);
        currScene = 0;
        scenes[0] = true;
    }
    //Games screen
    else if(mouseIsPressed && mouseX>30 && mouseX<166 && mouseY>45 && mouseY< 80 &&         currScene === 0){
        background(255, 0, 0);
    }
    //Store screen
    else if(mouseIsPressed && mouseX>30 && mouseX<234 && mouseY>45 && mouseY<80 && currScene === 0){
      background(0, 175, 255);
    }
    //Mods screen
    else if(mouseIsPressed && mouseX>30 && mouseX<302 && mouseY>45 && mouseY<80){
        background(13, 255, 0);
    }

    var lineX = 98;
    var lineY = 45;
    //title and task bar
    rect(125, 0, 150, 45);
    rect(30, 45, 340, 35);
    for( var k = 0; k < 4; k++){
        line(lineX, lineY, lineX, lineY + 35);
        lineX += 68;
    }

    textSize(23);
    fill(136, 0, 255);
    text("GameSoft", 150, 30);
    textSize(18);
    text("Home", 37, 67);
    text("games", 105, 67);
    text("store", 178, 67);
    text("mods", 246, 67);
    fill(255, 255, 255);
        };
