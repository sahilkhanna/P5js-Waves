var yoff = 0.0;
var xoff = 0.0;
var wave1,wave2;
function setup() {
  canvas = createCanvas(windowWidth*0.99, windowHeight*0.99);
  canvas.parent("p5canvas");
  wave1 = new wave();
  wave2 = new wave();
}
var points=0;
var move=0;
function draw() {
  let x=new Array();
  let y_top= new Array();
  let y_bot= new Array();
  let y2_top= new Array();
  let y2_bot= new Array();
  background(color('#78c1ff'));
  noStroke();
  xoff = 0;
  x[0]=-15;
  for (let i = 1; i <= 100; i++) {
    x[i] = x[i-1] + 15;
    y_top[i] = map(tan(noise(xoff,yoff)), -1, 1, 0,(2*height/3));
    y_bot[i] = map(noise(i*0.005), 0, 1, y_top[i],(2*height/3));
    y2_top[i] = map(tan(noise(yoff,xoff)), -1, 1, 0,(2*height/3));
    y2_bot[i] = map(noise(i*0.005), -1, 1, y2_top[i], (2*height/3));
    let x_off_add=map(sin(xoff), -1, 1, 0,0.01);
    xoff += x_off_add;
    points=i;
  }
  let y_off_add=map(sin(yoff), -1, 1, 0,0.001);
    yoff += y_off_add;
  c = color('rgba(255, 255, 255, 0.4)');
    fill(c);
  wave1.draw(x,y_top,y_bot,points);
  c = color('rgba(255, 255, 255, 0.2)');
  fill(c);
  wave2.draw(x,y2_top,y2_bot,points);

}

function wave() {
this.draw=function(x_point,y_point,y_bottom_point,i){
  //console.log(x);
  beginShape();
  for (let j = 0; j <=i; j++) {
    vertex(x_point[j], y_point[j]);
  }
  vertex(width, height);
  for (var j = i; j >=0; j--) {
    vertex(x_point[j], y_bottom_point[j]);
  }
  vertex(0, height);
  endShape(CLOSE);

}
};
