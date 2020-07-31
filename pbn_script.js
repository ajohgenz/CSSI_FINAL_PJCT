      this.strands.push(new Strand(this.width - (i * this.width/32), this.y, p.random(this.height-40, this.height), 100));
  }
  }
  
  show(){
    p.fill(this.color);
    for(let strand of this.strands){
      strand.show();
    }
  }
  setColor(color) {
    this.color = color;
    console.log('gets to changeColor grass');
    for(let strand of this.strands){
      strand.setColor(color);
    }
  }
}

class Strand {
  constructor (x, y, h, color){
    this.x1 = x;
    this.y1 = y;
    
    this.x2 = x + 10;
    this.y2 = y - h;
    
    this.x3 = x + 20;
    this.y3 = y;
    
    this.color = color;
  }
 
  //draws the grass on canvas when called
  show () {
    p.stroke(0);
    p.fill(this.color);
    p.triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    p.stroke(100);
  }
  
  setColor(color) {
    this.color = color;
  }
}
//                  Color Pallete Class                        //
class ColorPallete {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    p.stroke(100);
    p.fill(this.color);
    p.rect(this.x, this.y, this.width, this.height);
  }
}

//                  Canvas Class                        //
class PBNCanvas {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    p.fill(bgColor);
    p.stroke(100);
    p.rect(this.x, this.y, this.width, this.height);
  }

  setColor(color) {
    this.color = color;
  }
}

//                  Sun Class                        //
class Sun {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
    this.color = 100;
    this.r = width/2
  }

  show() {
    p.fill(this.color);
    p.ellipse(this.x, this.y, this.width, this.height, this.color);
    //rays
    p.fill(0);
    
    //left side
    p.line(this.x - (this.r/2), this.y + this.r, (this.x + this.r) - 46, (this.y + this.r) + 20);
    p.line(this.x - (this.r/2), this.y - this.r, (this.x + this.r) - 46, (this.y - this.r) - 20);
    p.line(this.x - this.r, this.y + (this.r /2), (this.x + this.r) - 66, (this.y + this.r));
    p.line(this.x - this.r, this.y - (this.r /2), (this.x + this.r) - 66, (this.y - this.r));
    p.line(this.x - this.r, this.y - (.1 * this.r), (this.x + this.r) - 70, (this.y - (.2 * this.r)));
    
    //right side
    p.line(this.x + (this.r/2), this.y + this.r, (this.x + this.r), (this.y + this.r) + 20);
    p.line(this.x + (this.r/2), this.y - this.r, (this.x + this.r), (this.y - this.r) - 20);
    p.line(this.x + this.r, this.y + (this.r /2), (this.x + this.r) + 10, (this.y + this.r));
    p.line(this.x + this.r, this.y - (this.r /2), (this.x + this.r) + 10, (this.y - this.r));
    p.line(this.x + this.r, this.y - (.1 * this.r), (this.x + this.r) + 70, (this.y - (this.r - 30)));
  }

  setColor(color) {
    this.color = color;
  }
}

//                  Flower Class                        //
class Flower {
  constructor(x, y, radius, color, stemEnd) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.color = color;
    this.petals = [
      new Petal(this.x, this.y, this.r, "up", 80, 100),
      new Petal(this.x, this.y, this.r, "down", 80, 100),
      new Petal(this.x, this.y, this.r, "left", 80, 100),
      new Petal(this.x, this.y, this.r, "right", 80, 100)
    ];
    this.stemEnd = stemEnd;
  }

  show() {
    p.stroke(0);
    p.fill(this.color);
    p.strokeWeight(4);
    p.line(
      this.x + 4,
      this.y,
      this.stemEnd * this.x,
      pbnCanvas.y + pbnCanvas.height
    );
    p.strokeWeight(2);
    for (let petal of this.petals) {
      petal.show();
    }
    p.fill(0);
    p.ellipse(this.x, this.y, this.r / 2);
  }

  setColor(color) {
    this.color = color;
  }
}

//                  Petal Class                        //

class Petal {
  constructor(x, y, r, position, length, color) {
    if (position == "right") {
      this.x = x + (4 / 3) * r;
      this.y = y;
      this.width = length;
      this.height = (r * 2) / 3;
    } else if (position == "left") {
      this.x = x - (4 / 3) * r;
      this.y = y;
      this.width = length;
      this.height = (r * 2) / 3;
    } else if (position == "up") {
      this.y = y - (4 / 3) * r;
      this.x = x;
      this.width = (r * 2) / 3;
      this.height = length;
    } else {
      this.y = y + (4 / 3) * r;
      this.x = x;
      this.width = (r * 2) / 3;
      this.height = length;
    }
    this.color = color;
  }

  show() {
    p.stroke(0);
    p.fill(this.color);
    p.ellipse(this.x, this.y, this.width, this.height);
  }

  setColor(color) {
    this.color = color;
  }
}

//to fill in area, you'll check for collide if mouse pressed between
//ellipse/rect/whatever (check with each petal, etc) shape and mouse point;
//draw flower() > for each petal in list of petals (p.ellipse, )

//    FUNCTIONS I STOPPED USING BECAUSE THERE WAS A BETTER WAY TO DO IT //

//make this into a canvas class
/*
function drawPBNCanvas(){
  pbnCanvasX = .2 * p.width;
  pbnCanvasY = .2 * p.width;
  pbnWidth = 300;
  pbnHeight = 400;
  cWidth = pbnCanvasX + pbnWidth;
  cHeight = pbnCanvasY + pbnHeight;
  p.fill(100);
  p.stroke(0);
  
  p.rect(pbnCanvasX, pbnCanvasY, pbnWidth, pbnHeight);
  
}
*/

/*
function drawUnfilledFlower(){
  
  
  /*
  p.line(.5 * cWidth + 4, .5 * cHeight, .7 * cWidth, cHeight);
  //right petal
  //notice 10 +- size of middle thing = 40 which is what you're adding and subtracting to cWidth
  p.ellipse(.5 * cWidth + 40, .5 * cHeight, 80, 20);
  //left petal
  p.ellipse(.5 * cWidth - 40, .5 * cHeight, 80, 20);
  //up petal
  p.ellipse(.5 * cWidth, .5 * cHeight - 40, 20, 80);
  //down petal
  p.ellipse(.5 * cWidth, .5 * cHeight + 40, 20, 80);
  //middle circle
  p.ellipse(.5 * cWidth, .5 * cHeight, 30);
    
}
*/
