let images = [];       
let currentImage = 0; 
let stamp;
let bg;

function preload() {
    images[0]=loadImage('japan1.png');
    images[1]=loadImage('japan2.png');
    images[2]=loadImage('japan3.png');
    images[3]=loadImage('japan4.png');
    images[4]=loadImage('japan5.png');
    images[5]=loadImage('japan6.png');
    images[6]=loadImage('japan7.png');
    images[7]=loadImage('japan8.png');
    images[8]=loadImage('japan9.png');
    images[9]=loadImage('japan10.png');
    bg = loadImage('passport1.png');
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