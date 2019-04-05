// use the keyboard to select other brush shapes (i.e., 1 = circle, 2 = oval, 3 = oval);
// increase / decrease the size of the brush by pressing the up / down arrow key;
// press the 'c' key to clear the canvas;
// press the 'e' key to switch to the "eraser" mode, where the paint color is the background color. Press the 'e' key again to exit the eraser mode.
// see the "system status" in the upper right corner (i.e., is the user in the eraser mode or not? is the brush is painting or not).
var backgroundColor = (255,255,255);
function setup() {
     createCanvas(500, 500);
}

// a boolean flag to indicate whether it is in the drawing
// mode or not
var isDrawing = false;
var changeSize = 0;
var canvasInfo = '';
var symbol = {}
symbol.r = 5;
symbol.dr = 0;
symbol.s = 1;
symbol.t = 'circle';


function keyPressed(){
     //Change the size of the radius
     if(keyCode === UP_ARROW){
          symbol.dr = 5;
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;


     }
     else if(keyCode === DOWN_ARROW){
          symbol.dr = -5;
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
     }
     else if(keyCode == 49){
          symbol.s = 1;
          symbol.t = 'circle';
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
     }
     else if(keyCode == 50){
          symbol.s = 2;
          symbol.t = 'rect';
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
     }
     else if(keyCode == 51){
          symbol.s = 3;
          symbol.t = 'oval';
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
     }
     else if(keyCode == 69){
          symbol.s = 4;
          symbol.t = 'eraser'
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
     }
     else if(keyCode == 67){
          symbol.s = 5;
          symbol.t = 'clear'
          canvasInfo = 'Size: ' + symbol.r + '\nTool: ' + symbol.t;
          //have to add this because the white rect covers the tool box
          //Border around canvasInfo
          fill(200);
          rect(398,5,100,60);
          //Size of brush
          noStroke();
          fill(color(0, 0, 0));
          textSize(15);
          text(canvasInfo, 400, 30);
     }
     else{
          return false;
     }

}
function drawMyName(){
     //Title
     stroke(color(200, 50, 50));
     fill(color(200, 50, 50));
     textSize(32);
     text('Paint', 20, 30);
}

function updateBrushInfo(){
     //Border around canvasInfo
     fill(200);
     rect(398,5,100,60);
     //Size of brush
     noStroke();
     fill(color(0, 0, 0));
     textSize(15);
     text(canvasInfo, 400, 30);
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
     if(symbol.s == 1){
          if(isDrawing == true){
               noFill();
               stroke(symbol.color);
               ellipse(0, 0, symbol.r, symbol.r);
               symbol.dr = 0;
          }
     }
     else if(symbol.s == 2){
          if(isDrawing == true){
               noFill();
               stroke(symbol.color);
               rect(-symbol.r/2, -symbol.r/2, symbol.r, symbol.r);
               symbol.dr = 0;
          }
     }
     else if(symbol.s == 3){
          if(isDrawing == true){
               noFill();
               stroke(symbol.color);
               ellipse(0, 0, symbol.r, 2*symbol.r);
               symbol.dr = 0;
          }
     }
     else if(symbol.s == 4){
          if(isDrawing == true){
               noStroke();
               fill(255);
               ellipse(0,0,symbol.r,symbol.r);
               noFill();
               symbol.dr = 0;
          }

     }
     else if(symbol.s == 5){
          noStroke();
          translate(-mouseX,-mouseY);
          fill(255);
          rect(0,0,800,500);
          noFill();
          symbol.dr = 0;
     }

}

function updateSymbol(){
     // Modify this line such that symbol.r keeps changing
     symbol.r = symbol.r + symbol.dr;
     symbol.color = color(random(255), random(255), random(255));
     updateBrushInfo();
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
