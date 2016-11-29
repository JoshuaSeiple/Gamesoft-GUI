var chooseProduct = 0;
var currScene = 0;
var products = [];
var cart = [];
var createProduct =function(title, price) {
    var product = {
    title: title,
    price: price
    };
    products.push(product);
};
//creating products
createProduct("game1", 50);
chooseProduct = 1;
createProduct("game2", 45);
chooseProduct = 2;
createProduct("game3", 60);
//creating scenes
draw = function(){
    //Home screen
    if(currScene === 0 ||(mouseIsPressed && mouseX>30 && mouseX<98 && mouseY>45 && mouseY< 80)){
        background(0, 0, 0);
        rect(45,95, 130, 130);
        rect(45,263, 130, 130);
        rect(243,95, 130, 130);
        rect(243,263, 130, 130);
        currScene = -1;
    }
    //Games screen
    //currScene = 1
    else if(mouseIsPressed && mouseX>30 && mouseX<166 && mouseY>45 && mouseY< 80){
        background(255, 0, 0);
        rect(255, 260, 110, 110);
        rect(255, 260, 110, 110);
        currScene = 1;
        
    }

    //Store screen
    //currScene = 2
    else if((mouseIsPressed && mouseX>30 && mouseX<234 && mouseY>45 && mouseY<80) || currScene === 2){
      background(0, 175, 255);
      rect(270, 100, 84, 30);
      fill(255, 0, 0);
      text("Cart", 295, 120);
      fill(255, 255, 255);
      for ( var t = 0; t < products.length; t++){
        text(products[t].title + " " + products[t].price, 200, 200 + t * 25);
      }
     
      currScene = 2;
    }
        
    //Mods screen
    //currScene = 3
    else if(mouseIsPressed && mouseX>30 && mouseX<302 && mouseY>45 && mouseY<80){
        background(13, 255, 0);
        currScene = 3;
    }
    //Cart screen
    //currScene = 5
    if (mouseIsPressed && mouseX>270 && mouseX<354 && mouseY>100 && mouseY<130 && currScene === 2){
       background(204, 0, 255);
       currScene= 5;
       for(var t = 0; t<cart.length; t++){
           fill(0, 255, 234);
           text(cart[t].title, 295, 120 + t * 50);
           text(cart[t].price, 295, 150 + t * 50);
           
           
       }
       
       
       
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
    if(currScene === 2){
        for(var t = 0; t< products.length; t++){
         if(mouseIsPressed && mouseX > 200 && mouseX < 280 && mouseY > 190 + t*25 && mouseY < 205 + t*25){
                cart[cart.length] = products[t];  
            }
        }
        text(mouseX + "," + mouseY, 5, 380);
    }
};
