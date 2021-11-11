const { PRIORITY_BELOW_NORMAL } = require("constants");

var box;

//SA Will write these two variables
var boxpos;
var database;

function preload(){
    ludo=loadImage("background.jpg")
}
function setup(){
    
    createCanvas(500,500);


    //Initialise Databbase
    database = firebase.database();

    box=createSprite(200,200,100,100);
    box.shapeColor= "red";

    // .ref() and .on
    boxpos = database.ref("box/position");
    boxpos.on("value",readposition);

}

function draw(){
    background(ludo);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    box.x = box.x + x;
    box.y = box.y + y;
}


//Function read position
function readposition(data){
    position = data.val()
    console.log(position)
    box.x = position.x;
    box.y = position.y;
}