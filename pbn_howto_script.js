/* global p5 */
let p = new p5(() => {});

let backgroundColor, bHome, bPBN, myFont;

p.preload = function() {
  myFont = p.loadFont(
    "https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2FPWRoughs.ttf?v=1595963714210"
  );
};

p.setup = function() {
  // Canvas & color settings
  p.createCanvas(500, 700);
  p.colorMode(p.HSB, 360, 100, 100);
  //backgroundColor = p.color(220, 20, 90);
  backgroundColor = 0;

  //home button
  bHome = p.createButton("Home");
  bHome.style("background-color", "black");
  bHome.style("color", "white");
  bHome.position(0.03 * p.width, 15);
  bHome.mouseClicked(returnHome);
  
  //back to game button
  bHome = p.createButton("Back To Coloring");
  bHome.style("background-color", "black");
  bHome.style("color", "white");
  bHome.position(0.14 * p.width, 15);
  bHome.mouseClicked(returnToColoring);
  
  p.textFont(myFont, 40);
}

p.draw = function() {
  p.background(backgroundColor);
  p.stroke(100);
  p.fill(100);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(40);
  p.text(":: COLOR ME IN ::", p.width / 2, 0.1 * p.height);
  p.textSize(35);
  p.text("HOW TO PLAY", p.width / 2, 0.2 * p.height);
  p.textSize(20);
  p.rect(p.width/2 - 200, 0.25 * p.height, 400, 425);
  p.fill(0);
  p.stroke(30);
  p.text("Color Me In is a coloring game.", p.width / 2, 0.30 * p.height)
  
  p.text("First, select the color that you want from", p.width / 2, 0.36 * p.height);
  p.text("the pallete at the bottom of the screen.", p.width / 2, 0.39 * p.height);
  
  p.text("Then select what part of the picture", p.width / 2, 0.45 * p.height);
  p.text("you want to color to fill it with the color selected.", p.width / 2, 0.48 * p.height);
  
  p.text("To color the background, such as sky and grass,", p.width / 2, 0.54 * p.height);
  p.text("click color background.", p.width / 2, 0.57 * p.height);
  
  p.text("To go back to coloring foreground,", p.width / 2, 0.63* p.height);
  p.text("click color foreground.", p.width / 2, 0.66 * p.height);
  
   p.text("To erase, click eraser,", p.width / 2, 0.71* p.height);
  p.text("and then what you want to erase.", p.width / 2, 0.74 * p.height);
  
  p.text("To clear the paint, click clear.", p.width / 2, 0.80* p.height);
 
  
  

  
  
  p.stroke(100);
}

function returnHome() {
  window.location.replace("https://cssi-final-project-abs.glitch.me/");
}
function returnToColoring(){
  window.location.replace("https://cssi-final-project-abs.glitch.me/paintbynumbers.html");
}
