/* global p5 */
let p = new p5(() => {});

//this is the homepage 
let backgroundColor, hueIcon, retroBG, paintByNumberIcon, TwentyFortyEightIcon, myFont, bHue, bPaintByNumbers, bTwentyFourtyEight;

p.preload = function(){
  myFont = p.loadFont('https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2FPressStart2P.ttf?v=1595944405214');
}

p.setup = function() {
  // Canvas & color settings
  p.createCanvas(600, 500);
  p.colorMode(p.HSB, 360, 100, 100);
  backgroundColor = p.color(180, 50, 0);
  //textSettings 
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont(myFont, 32);
  p.stroke(0);
  p.strokeWeight(2);
  p.fill(100);
  
  //load game icons
  hueIcon = p.loadImage('https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2Fi_love_hue.jpg?v=1595895002146');
  paintByNumberIcon = p.loadImage('https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2Fpaint_by_number.jpg?v=1595896812553');
  TwentyFortyEightIcon = p.loadImage('https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2F2048.jpg?v=1595897031425');
  //load background image
  retroBG = p.loadImage('https://cdn.glitch.com/74e16c9c-bf35-4ed5-9a06-b1b8310a4ae3%2Fretro_background.jpg?v=1595899858352');
  //create game play buttons
  bHue = p.createButton('Play');
  bPaintByNumbers = p.createButton('Play');
  bTwentyFourtyEight = p.createButton('Play');
  
  //set button styles 
  bHue.style('color', 'white');
  bHue.style('background-color', 'black');
  bPaintByNumbers.style('color', 'white');
  bPaintByNumbers.style('background-color', 'black');
  bTwentyFourtyEight.style('color', 'white');
  bTwentyFourtyEight.style('background-color', 'black');
  
  //set button positions
  bHue.position(.20 * p.width + 20, .70 * p.height + 90);
  bPaintByNumbers.position(.45 * p.width + 20, .70  * p.height + 90);
  bTwentyFourtyEight.position(.70 * p.width + 20, .70  * p.height + 90);
  
  //set button action
  bHue.mouseClicked(openHue);
  bPaintByNumbers.mouseClicked(openPaintByNumbers);
  bTwentyFourtyEight.mouseClicked(openTwentyFourtyEight);
  
}

p.draw = function () {
  //draw background
  p.image(retroBG, 0, 0);
  retroBG.resize(p.width, p.height);
  
  //draw header
  p.text("WELCOME TO", p.width/2, p.height/7 - 30);
  p.text("THE CALM ARCADE", p.width/2, p.height/7);
  
  //draw icon background
  p.fill(p.color(265, 100, 100));
  p.rect(.19 * p.width, .69 * p.height, 82, 80);
  p.rect(.44 * p.width, .69 * p.height, 82, 80);
   p.rect(.69 * p.width, .69 * p.height, 82, 80);
  
  //draw icons
  p.image(hueIcon, .20 * p.width, .70 * p.height);
  hueIcon.resize(70, 70);
  p.image(paintByNumberIcon, .45 * p.width, .70 * p.height);
  paintByNumberIcon.resize(70, 70);
  p.image(TwentyFortyEightIcon, .70 * p.width, .70 * p.height);
  TwentyFortyEightIcon.resize(70, 70);
  p.fill(100);
 

  
}

//redirects the page to the ilovehue page
function openHue(){
  window.location.replace('https://cssi-final-project-abs.glitch.me/ilovehue.html')
}

//redirects the page to the paintbynumbers page
function openPaintByNumbers(){
  window.location.replace('https://cssi-final-project-abs.glitch.me/paintbynumbers.html')
}

//redirects the page to the twentyfourtyeight page
function openTwentyFourtyEight(){
  window.location.replace('https://cssi-final-project-abs.glitch.me/twentyfourtyeight.html')
}
