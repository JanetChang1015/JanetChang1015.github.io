//inspiration:
//Paine, S. (n.d.). City in bloom . Pinterest. Retrieved September 17, 2024, from https://www.pinterest.com/pin/67835538123153032/
// background Photo:
// Gornail, J., & Garcia, S. (n.d.). 1930: Chrysler Building and Skyscrapers. History101.NYC. Retrieved September 18, 2024, from https://www.history101.nyc/new-york-city-from-1930-to-1935 

let backgroundImg;
let flowerRB;
let flowerYB;
let flowerS;
let flowerYS;
let flowerP;
let flowerW;
let flowerRS;
let building1;
let building2;
let leafB;
let mouse;
let oldMouse = 847;
let cropFlowerR;
let cropFlowerY;
let cropFlowerS;
let cropFlowerYS;
let cropFlowerP;
let cropFlowerW;
let cropFlowerRS;
let size = 100;
let oldSize;
let flowerYaixs = [685, 640, 774, 309, 590, 774,390];

function preload() {
  backgroundImg = loadImage('background.png');
  flowerRB = loadImage('flower1.png');
  flowerYB = loadImage('flower2.png');
  flowerS = loadImage('flower3.png');
  flowerYS = loadImage('flower4.png');
  flowerP = loadImage('flower5.png');
  flowerRS = loadImage('flower7.png');
  building1 = loadImage('building1.png');
  building2 = loadImage('building2.png');
  flowerW = loadImage('flower6.png');
  
  leafB = loadImage('leaf1.png');
  
  
}

function setup() {
  createCanvas(660, 847);
  frameRate(20);
  

}

function draw() {
  
  if (mouseY <= oldMouse) {
    mouse = abs(mouseY - oldMouse);
    //oldMouse = mouseY;
  }
  oldMouse = mouseY;
  
  
  image(backgroundImg, 0,0);  
  if (mouse > 0 && flowerYaixs[0] > 378) {
        size += 10;
        for (let i = 0; i <= 7; i++) {
          flowerYaixs[i] -= 10;
        }
  }
  

 
  cropFlowerR = flowerRB.get(0,0, 193, size);
  cropFlowerY = flowerYB.get(0,0, 151, size);
  cropFlowerS = flowerS.get(0, 0, 142, size);
  cropFlowerYS = flowerYS.get(0, 0, 162, size);
  cropFlowerP = flowerP.get(0, 0, 179, size);
  cropFlowerW = flowerW.get(0, 0, 105, size);
  cropFlowerRS = flowerRS.get(0, 0, 107, size);
  
  image(cropFlowerR,150, flowerYaixs[0]);
  image(cropFlowerY,0, flowerYaixs[1] + 50);
  image(cropFlowerS,288, flowerYaixs[2]);
  image(cropFlowerYS,290, flowerYaixs[3] + 30);
  image(cropFlowerP,385, flowerYaixs[4] - 30);
  image(cropFlowerRS,510, flowerYaixs[6] + 150);
  image(building1, 389,480);
  image(cropFlowerW,460, flowerYaixs[5] + 80);
  //image(leafB, 23, 590);
  //image(leafB, 560, 309);
  image(building2,130, 600);
  
}