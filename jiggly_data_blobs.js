function setup() {
     createCanvas(400, 400);
}

// a boolean flag to indicate whether it is in the drawing
// mode or not
var isDrawing = false;
var changeSize = 0;
var symbol = {}
symbol.r = 5
symbol.dr = 1

function drawMyName(){
     stroke(color(11, 244, 255));
     fill(color(2, 143, 232));
     textSize(32);
     text('Keaton Whitehead', 20, 30);
}

// draw the mouse cursor location
function drawSymbolAt(x, y) {
     fill(color(random(255), random(255), random(255)));
     push();
     translate(x, y);
     drawSymbol();
     pop();
}

function drawSymbol(){
     if(isDrawing == true){
          noFill();
          stroke(symbol.color);
          ellipse(0, 0, symbol.r, symbol.r);
     }
}

function updateSymbol(){

     symbol.r = symbol.r + changeSize;// Modify this line such that symbol.r keeps changing

     if (symbol.r > 30) {
          changeSize = -4

     } else if (symbol.r < 10) {
          changeSize = 4;

     }

     symbol.color = color(random(255), random(255), random(255));	// Modify Me
}

function draw() {
     drawMyName();
}

function mousePressed() {
     // Add logic to flip the "isDrawing" flag
     isDrawing = !isDrawing;
}

// When the user clicks the mouse
function mouseMoved() {

     if (true) {	// Modify Me
          updateSymbol();
          drawSymbolAt(mouseX, mouseY);
     }

}
