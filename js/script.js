//var yoff = 0.0;
//var xoff = 0.0;
var waves
var totalwaves=5;
function setup() {
  canvas = createCanvas(windowWidth*0.99, windowHeight*0.99);
  canvas.parent("p5canvas");
  for (let wavescount = 0; wavescount < totalwaves; wavescount++) {
    wave[wavescount] = new wave()
  }
//  frameRate(1);
}
var points=100;
var move=0;

function draw() {
  background(color('#78c1ff'));
  noStroke();

  c = color('rgba(255, 255, 255, 0.1)');
    fill(c);
    for (let wavescount = 0; wavescount < totalwaves; wavescount++) {
      wave[wavescount].draw(100)
    }
}

function wave() {
  this.y_top= new Array();
  this.y_bot= new Array();
  this.x = new Array();
  this.xoff=0;
  this.yoff=random();

this.draw=function(i){
  //console.log(x);
  beginShape();
  //this.x_off_add=map(sin(this.xoff), -1, 1, 0,0.01);
  this.x[0]=-15;
  this.xoff = 0.0;
  this.y_top[0]=map(tan(noise(this.xoff,this.yoff)), -1, 1, 0,(2*height/3));
  for (let j = 1; j <=i; j++) {
    this.x[j] = this.x[j-1] + 15;
    this.y_top[j] =map(tan(noise(this.xoff,this.yoff)), -1, 1, 0,(2*height/3));
    //this.y_bot[j] = map(noise(i*0.005), 0, 1, this.y_top[i],(2*height/3));
    this.y_bot[j] =map(tan(noise(this.xoff,this.yoff)), -1, 1, this.y_top[i],(2*height/3));


    this.x_off_add=map(sin(this.xoff), -1, 1, 0,0.01);
    //this.xoff += this.x_off_add;
    this.xoff += this.x_off_add
  }
  this.y_off_add=map(sin(this.yoff), -1, 1, 0,0.001);
  //this.y_off_add=0.00;
  this.yoff += this.y_off_add;

  for (let j = 0; j <=i; j++) {
    vertex(this.x[j], this.y_top[j]);
  }
  vertex(width, height);
  for (var j = i; j >=0; j--) {
    vertex(this.x[j], this.y_bot[j]);
  }
  vertex(0, height);
  endShape(CLOSE);

}
};
function go(){
  noLoop();
  totalwaves+=1
  wave[totalwaves-1]=new wave();
  loop();
//  redraw();
}

function randomisewaves(){
  for (let wavescount = 0; wavescount < totalwaves; wavescount++) {
    wave[wavescount].yoff=random();
  }
}
