var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(100,590,200,20);
    box1.shapeColor="blue";
    box2=createSprite(300,590,250,20);
    box2.shapeColor="yellow";
    box3=createSprite(500,590,200,20);
    box3.shapeColor="pink";
    box4=createSprite(700,590,200,20);
    box4.shapeColor="green";
    



    //create box sprite and give velocity
    striker=createSprite(50,50,20,20);
    striker.shapeColor="white";
    striker.velocityY=-8;
    striker.velocityX=8;
    striker.y=Math.round(random(20,750));
}

function draw() {
    //background(rgb(169,169,169));
    background("skyBlue");
    //create edgeSprite

    edgeSprite1=createSprite(795,300,10,600);
    edgeSprite1.visible=false;
    edgeSprite2=createSprite(10,300,10,600);
    edgeSprite2.visible=false;
    edgeSprite3=createSprite(400,10,780,10);
    edgeSprite3.visible=false;



    //add condition to check if box touching surface and make it box
    if(striker.isTouching(edgeSprite1)){    

        striker.bounceOff(edgeSprite1);
    }

    if(striker.isTouching(edgeSprite2)){    

        striker.bounceOff(edgeSprite2);
    }

    
    if(striker.isTouching(edgeSprite3)){    

        striker.bounceOff(edgeSprite3);
    }

    if(striker.isTouching(box1)){    

        striker.bounceOff(box1);
        striker.shapeColor="blue";
        
       

    }

    if(striker.isTouching(box2)){    

        striker.bounceOff(box2);
        striker.shapeColor="yellow";
        

     

    }
    if(striker.isTouching(box3)){    

        striker.bounceOff(box3);
        striker.shapeColor="pink";
        striker.velocityX=0;
        striker.velocityY=0;
        
        
    }

    if(striker.isTouching(box4)){    

        striker.bounceOff(box4);
        striker.shapeColor="green";
        
  

        
    }

    

    
    
    

    


    

    

    
    

     drawSprites();
}
