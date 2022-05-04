let images = [];       
let currentImage = 0; 
let stamp;
let bg;

function preload() {
    images[0]=loadImage('js/japanimg/ecuador/ecuador1.png');
    images[1]=loadImage('js/japanimg/ecuador/ecuador2.png');
    images[2]=loadImage('js/japanimg/ecuador/ecuador3.png');
    images[3]=loadImage('js/japanimg/ecuador/ecuador4.png');
    images[4]=loadImage('js/japanimg/ecuador/ecuador5.png');
    images[5]=loadImage('js/japanimg/ecuador/ecuador6.png');
    images[6]=loadImage('js/japanimg/ecuador/ecuador7.png');
    images[7]=loadImage('js/japanimg/ecuador/ecuador8.png');
    images[8]=loadImage('js/japanimg/ecuador/ecuador9.png');
    images[9]=loadImage('js/japanimg/ecuador/ecuador10.png');
    bg = loadImage('js/japanimg/passport1.png');
  }

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("p5-canva");
  stamp = new Stamp();
  background(bg);
}


function keyTyped() {
    if (key === 's' || key === 'S') {
      saveCanvas('myCanvas', 'jpg');
      print("saving image");
    }
  }
  
  function mousePressed() {
    stamp.display(); 
  }
  
  class Stamp {
    constructor() {
      this.sizeX = 120;
      this.sizeY = 150;
    }
    
    display(){
      imageMode(CENTER);
      image(images[currentImage], mouseX, mouseY, this.sizeX, this.sizeY);
      currentImage++;
      
      if(currentImage > 9){
        currentImage = 0;
      }
    }
  }