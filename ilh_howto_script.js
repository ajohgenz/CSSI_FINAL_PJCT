/* global p5 */
let p = new p5(() => {});

let backgroundColor, bHome, bReturnGame, myFont;


p.preload = function() {
  myFont = p.loadFont(
    "https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2FPWRoughs.ttf?v=1595963714210"
  );
};

p.setup = function(){
  // Canvas & color settings
  p.createCanvas(500, 600);
  p.colorMode(p.HSB, 360, 100, 100);
  backgroundColor = 0;

  //home button //you can move where it is if you want
  bHome = p.createButton('Home');
  bHome.style('background-color', 'black');
  bHome.style('color', 'white');
  bHome.position(.45 * p.width, 550);
  bHome.mouseClicked(returnHome);
  
  bReturnGame = p.createButton('Back to Game');
  bReturnGame.style('background-color', 'black');
  bReturnGame.style('color', 'white');
  bReturnGame.position(.40 * p.width, 500);
  bReturnGame.mouseClicked(returnToGame);
  
  p.textFont(myFont);
}

p.draw = function() {
  p.background(backgroundColor);
  p.stroke(100);
  p.fill(100);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(50);
  p.text("I LOVE HUE", p.width / 2, 0.1 * p.height);
  p.textSize(30);
  p.text("HOW TO PLAY", p.width / 2, 0.2 * p.height);
  p.textSize(20);
  p.rect(p.width/2 - 200, 0.25 * p.height, 400, 320);
  p.fill(0);
  p.stroke(30);
  p.text("I Love Hue is a gradient matching game.", p.width / 2, 0.30 * p.height)
  
  p.text("You use your mouse to select blocks.", p.width / 2, 0.36 * p.height);
  p.text("Selecting a block and then another will swap them.", p.width / 2, 0.39 * p.height);
  
  p.text("The object of the game", p.width / 2, 0.45 * p.height);
  p.text("is to match the gradient.", p.width / 2, 0.48 * p.height);
  
  p.text("Once the game looks visually correct,", p.width / 2, 0.54 * p.height);
  p.text("click the finish button.", p.width / 2, 0.57 * p.height);
  
  p.text("The blocks with a black dot,", p.width / 2, 0.63* p.height);
  p.text("serve as anchors and cannot be moved.", p.width / 2, 0.66 * p.height);
  
   p.text("Hope you enjoy", p.width / 2, 0.71* p.height);
  p.text("version 1.0 of our game!", p.width / 2, 0.74 * p.height);
  
  p.stroke(100);
}
function returnHome() {
  window.location.replace("https://cssi-final-project-abs.glitch.me/");
}
function returnToGame(){
  window.location.replace("https://cssi-final-project-abs.glitch.me/ilovehue.html");
}
