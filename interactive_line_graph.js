// number of elements
var n = 20

// your last four digit buffcard ID
// this number will be used as the random seed
// in theory, everyone's submission will look unique
var buffId = 4301

// set the inital properties of each element
// you need to modify this method
function initElement(element, i){

     element.x0 = 0;
     element.x1 = int(random(300));	// final x position where the element should stop
     element.s = random(5,15);	// size of the ellipse - MODIFY ME
     element.xi = element.x0;	// current x position (intialized to x0)
     element.y = i * 19 + 10;	      // y position - MODIFY ME
     element.dx = element.x1/30;	// change in x - MODIFY ME
     element.color = color(random(255),random(255),random(255));	// color - MODIFY ME
}

// draw a given element
// you need to modify this method
function drawElement(element) {
     fill(0,0,0)
     text(element.x1, element.x1+element.s, element.y+element.s/2)
     fill(element.color)
     rect(0, (element.y-(element.s/2)), element.xi, element.s)
     ellipse(element.xi, element.y, element.s, element.s)

}

// update a given element
// you need to modify this method
function updateElement(element) {

     if(element.xi <= element.x1){
          element.xi = element.xi + element.dx
     }

}

//
// you do not need to modify the code below
//

// define an array to hold elements
var elements = [];

function setup() {

     // fix to the same random seed so that each time you run, you get
     // the same random numbers, which is easy for debugging
     randomSeed(buffId)

     createCanvas(400, 400);

     for (var i = 0; i < n; i++) {

          // create a new element as a blank javascript object
          var newElement = {};

          // call to initial the element
          initElement(newElement, i);

          // add the element
          elements.push(newElement);
     }

}

// you do not need to chanege anything in draw()
function draw() {
     background(220);

     frameRate(20);

     // iterate through each element in elements
     for (var i = 0; i < elements.length; i++) {

          // update the attributes of the i-th element
          updateElement(elements[i]);

          // call drawElement to draw the i-th element
          drawElement(elements[i]);

     }

}
