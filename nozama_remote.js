var buttons = []
var blue
var white
var black
var red
var channelB = 52;
var channel = 52;
var volume = 78;
var power = true;
var bSize = 100;

function setup() {
     createCanvas(600, 900);
     frameRate(10);
     blue = color(10,150,255);
     white = color(255,255,255);
     black = color(0,0,0);
     red = color(200,0,0);

//Channel
     //Red dots
     createEllipse(390,245,7,red,52,1);
     createEllipse(390,235,6,red,53,1);
     createEllipse(390,225,6,red,54,1);
     createEllipse(390,215,5,red,55,1);
     createEllipse(390,205,5,red,56,1);
     createEllipse(390,195,4,red,57,1);
     createEllipse(390,185,4,red,58,1);
     createEllipse(390,175,3,red,59,1);
     createEllipse(390,165,3,red,60,1);
     createEllipse(390,155,2,red,61,1);

     //White dots
     createEllipse(390,295,6,white,51,1);
     createEllipse(390,305,6,white,50,1);
     createEllipse(390,315,5,white,49,1);
     createEllipse(390,325,5,white,48,1);
     createEllipse(390,335,4,white,47,1);
     createEllipse(390,345,4,white,46,1);
     createEllipse(390,355,3,white,45,1);
     createEllipse(390,365,3,white,44,1);
     createEllipse(390,375,2,white,43,1);

//Volume
     //White dots
     createEllipse(210,245,7,white,87,2);
     createEllipse(210,235,6,white,86,2);
     createEllipse(210,225,6,white,85,2);
     createEllipse(210,215,5,white,84,2);
     createEllipse(210,205,5,white,83,2);
     createEllipse(210,195,4,white,82,2);
     createEllipse(210,185,4,white,81,2);
     createEllipse(210,175,3,white,80,2);
     createEllipse(210,165,3,white,79,2);
     createEllipse(210,155,2,white,78,2);
     //Blue dots
     createEllipse(210,295,6,blue,77,2);
     createEllipse(210,305,6,blue,76,2);
     createEllipse(210,315,5,blue,75,2);
     createEllipse(210,325,5,blue,74,2);
     createEllipse(210,335,4,blue,73,2);
     createEllipse(210,345,4,blue,72,2);
     createEllipse(210,355,3,blue,71,2);
     createEllipse(210,365,3,blue,70,2);
     createEllipse(210,375,2,blue,69,2);

}

function createEllipse(x, y, radius, color,channelNumber,type){
     var newButton = {}
     newButton.x = x;
     newButton.y = y;
     newButton.radius = radius;
     newButton.color = color;
     newButton.channel = channelNumber;
     newButton.type = type
     buttons.push(newButton);

}

function drawButton(b){
     if (dist(b.x, b.y, mouseX, mouseY) < b.radius + 1) {
          if(b.type == 1){
               fill(b.color);
               b.radius = b.radius + 5;
               ellipse(b.x, b.y, b.radius, b.radius);
               b.radius = b.radius - 5

               //Channel adjustment number + circle
               fill(black);
               stroke(white);
               ellipse(b.x,b.y,35,35);

               //Small channel
               textSize(15);
               fill(b.color);
               noStroke();
               text(b.channel, b.x-5, b.y+5);
               channel = b.channel;
               channelB = b.channel;
               bSize = 100;
          }
          else{
               fill(b.color);
               b.radius = b.radius + 5;
               ellipse(b.x, b.y, b.radius, b.radius);
               b.radius = b.radius - 5

               //Channel adjustment number + circle
               fill(black);
               stroke(white);
               ellipse(b.x,b.y,35,35);

               //Small channel
               textSize(15);
               fill(b.color);
               noStroke();
               text(b.channel, b.x-5, b.y+5);
               volume = b.channel;
          }

    } else {
         fill(color(b.color))
         ellipse(b.x, b.y, b.radius, b.radius);

    }

}
function draw() {
     background(220);
     //Color Definitons


     //Body
     fill(black);
     rect(170, 50, 250, 550, 50, 50, 100, 100);

     //Buttons
     //3 lined button
     stroke(white);
     if(dist(240,425,mouseX,mouseY) < 20){
          volume = 0;
     }
     textSize(10);
     fill(white);
     noStroke();
     text('Mute',240,425)


     //Settings
     noFill();
     stroke(white);
     line(338,420,330,420);
     line(338,430,330,430);
     line(338,425,330,425);
     ellipse(348,425,15,15);
     ellipse(348,425,5,5);
     if(dist(342,425,mouseX,mouseY) <20){
          channelB = 'menu';
          bSize = 50;
     }

     for (var i = 0 ; i < buttons.length; i++ ){
          var b = buttons[i]
          noStroke();
          //draw it
  	     drawButton(b);
     }

//Channel
     //Big channel number
     textSize(bSize);
     fill(white);
     text(channelB,245,310);
     //small channel changer
     stroke(red);
     fill(black);
     ellipse(390,270,35,35);
     noStroke();
     fill(red);
     textSize(15);
     text(channel,383,275);
     //Volume

     //Small volume
     textSize(15);
     fill(blue);
     noStroke();
     text(volume,225,310);

     //Volume Adjuster
     //Channel adjustment number + circle
     fill(black);
     stroke(blue);
     ellipse(210,270,35,35);

     //Small channel
     textSize(15);
     fill(blue);
     noStroke();
     text(volume,202,275);

     //Percent
     noStroke();
     var temp = 'Battery:35%';
     textSize(10);
     fill(white);
     text(temp,275,225);

     if(dist(210, 95, mouseX, mouseY) < 10){
          power = !power;
     }
     if(power == true){

     }
     else{
          fill(black);
          rect(170, 50, 250, 550, 50, 50, 100, 100);
     }

     //Power button
     noStroke();
     fill(red);
     ellipse(210,95,25,25);
     fill(black);
     stroke(black);
     ellipse(210,95,10,10);
     line(209.5,82,209.5,85);
     line(209.5,105,209.5,108);
     line(196.5,94,199.5,94);
     line(222.5,94,219.5,94);
     line(216.5,102,219.5,105);
     line(199.5,86,202.5,89);
     line(216.5,89,219.5,86);
     line(199.5,105,202.5,102);

     //Nozama
     var name = 'Nozama';
     textSize(25);
     noStroke();
     fill(red);
     text(name,245,550);
}
