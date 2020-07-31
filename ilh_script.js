/* global p5 */
let p = new p5(() => {});

let backgroundColor, bHome;
//let x1 = 
let leftColors, yPos, xPos1, yPos1,  rightColors, anchors; 
let secondColColors, thirdColColors, fourthColColors, colorArrays;
let selectedColor, selected;
let arrayOfCols = [];
let winningBoard, winningArray;
let myFont, bWin;
let bHowToPlay;

p.preload = function() {
  myFont = p.loadFont(
    "https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2FPWRoughs.ttf?v=1595963714210"
  );
};

p.setup = function(){
  // Canvas & color settings
  p.createCanvas(500, 600);
  p.colorMode(p.HSB, 360, 100, 100);
  backgroundColor = p.color(200, 50, 80);

  //home button //you can move where it is if you want
  bHome = p.createButton('Home');
  bHome.style('background-color', 'black');
  bHome.style('color', 'white');
  bHome.position(10, 550);
  bHome.mouseClicked(returnHome);
  
  bHowToPlay = p.createButton('How To Play');
  bHowToPlay.style('background-color', 'black');
  bHowToPlay.style('color', 'white');
  bHowToPlay.position(10, 575);
  bHowToPlay.mouseClicked(howToPlay);
  
  
  bWin = p.createButton('Finish');
  bWin.style('background-color', 'black');
  bWin.style('color', 'white');
  bWin.position(.45 * p.width, .97 * p.height);
  bWin.mouseClicked(handleWin);
  
  //selected config 
  selectedColor = null;
  
  //setup color arrays for board
  leftColors = [];
  rightColors = [];
  secondColColors = [];
  thirdColColors = [];
  fourthColColors = [];
  anchors = [];
  selected = [0, 0];
  
  //setup colors for board
  for(let i= 0; i < 5; i++){
    leftColors.push(p.color(180 - (i * 2), 98 - (i * 2), 100 - (i * 2)));
  }   
  for(let i= 0; i < 5; i++){
    secondColColors.push(p.color(170 - (i * 2), 98 - (i * 2), 100 - (i * 2)));
  }  
    for(let i= 0; i < 5; i++){
    thirdColColors.push(p.color(160 - (i * 2), 98 - (i * 2), 100 - (i * 2)));
  }  
    for(let i= 0; i < 5; i++){
    fourthColColors.push(p.color(150 - (i * 2), 98 - (i * 2), 100 - (i * 2)));
  }  
  for(let i= 0; i < 5; i++){
   rightColors.push(p.color(140 - (i * 2), 98 - (i * 2), 100 - (i * 2)));
  }   
  
  colorArrays = [leftColors, secondColColors, thirdColColors, fourthColColors, rightColors];
  
  winningBoard = [];
   let xPos = 0;
  for(let array of colorArrays){
    let cols = []
    yPos = 0;
  for(let color of array){
    cols.push(new Square(xPos, yPos, 100, color));
    yPos += 100;
  }
    winningBoard.push(cols);
    xPos += 100;
  }
  scrambleColors(leftColors, rightColors);
  
  //set up board array/arrayOfCols
   xPos = 0;
  for(let array of colorArrays){
    let cols = []
    yPos = 0;
  for(let color of array){
    cols.push(new Square(xPos, yPos, 100, color));
    yPos += 100;
  }
    arrayOfCols.push(cols);
    xPos += 100;
  }
  console.log(arrayOfCols);
}

p.draw = function(){
  p.background('black');
  p.stroke(100);
  p.fill(100);
  p.textFont(myFont);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(32);
  p.text('HUE GAME', p.width/2, .9 * p.height);
  p.noStroke();
  for(let columns of arrayOfCols){
    for(let block of columns){
      block.show();
    }
  }

  //let xPos1 = 0;
for(let xPos = 150; xPos <= 350; xPos += 100){
  //yPos1 = 0;
  for(let yPos = 50; yPos <= 450; yPos += 100){
  p.fill(0, 0, 0)
  p.ellipse(xPos, yPos, 10, 10);
  //yPos1 += 100
  }
xPos1 += 100
  }
   
  
  {p.fill(0, 0, 0);
  p.ellipse(50, 50, 10, 10);}
  
  {p.ellipse(50, 450, 10, 10);}
  
  {p.ellipse(450, 450, 10, 10);}
  
  {p.ellipse(450, 50, 10, 10);}
  

  
  p.noStroke()
  console.log("winning Array");
  console.log(winningArray);

  
}



//                             mouse pressed event              //
p.mousePressed = function() {
  let hit = false;
  for(let i = 0; i < arrayOfCols.length; i++){
    for(let j = 0; j < arrayOfCols[i].length; j++){
      hit = checkRectCollision(arrayOfCols[i][j]);
      handleHit(hit, arrayOfCols[i][j], [i, j])
    }
  }
  
}


//                                  helper method         //
function handleHit(hit, block, select){
  if(hit){
    if (selectedColor != null){
      let tempColor = block.color;
      block.setColor(selectedColor);
      arrayOfCols[selected[0]][selected[1]].setColor(tempColor);
      selectedColor = null;
    } else {
      selectedColor = block.color;
      selected = select;
    }
  }
}

//                    checks if game has been completed  DOESNT WORK    //
function checkWin(checkArrays){
  let match = false;
  for(let n = 0; n < winningBoard.length; n++){
    for(let i = 0; i < winningBoard[0].length; i++){
       if(checkArrays[n][i] == winningArray[n][i]){
            match = true;
    } else {
          return false;
    }
   }
  }
   return match;
}
//                          handles win                         //
function handleWin(){
  p.fill(p.color(20, 100, 100));
  p.rect(.2 * p.width, .4 * p.height, 300, 50);
  p.stroke(100);
  p.fill(100);
  p.text("YOU FOUND THE HUE!", .5 * p.width, .45* p.height);
  p.noLoop();
}
//                          checks collision                 //
function checkRectCollision(object) {
  return p.collidePointRect(
    p.mouseX,
    p.mouseY,
    object.x,
    object.y,
    object.width,
    object.height
  );
}

//                             class Square                      //
class Square{
  constructor(x, y, size, color){
    this.x = x;
    this.y = y;
    this.width = size;
    this.height = size;
    this.color = color;
  }
  
  show(){
    p.fill(p.color(this.color));
    p.rect(this.x, this.y, this.width, this.height);
  }
  
  setColor(color){
    this.color = color;
  }
}
  



//                 scramble +   helper functions          //
function scrambleColors(array1, array2){
  swap(2, 1, array1);
  swap(2, 3, array1);
  swap(1, 3, array2);
  swapBetweenCols(1, 3, array1, array2);
  swapBetweenCols(3, 2, array1, array2);
  swap(2, 1, array1);
  swap(2, 3, array1);
  swap(1, 2, array2);
  
}

function swapBetweenCols(a, b, array1, array2){
  let temp = array1[a];
  array1[a] = array2[b];
  array2[b] = temp;
}

function swap(a, b, array){
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
function returnHome(){
   window.location.replace('https://cssi-final-project-abs.glitch.me/');
}

function howToPlay(){
   window.location.replace('https://cssi-final-project-abs.glitch.me/ilovehueHTP.html');
}
