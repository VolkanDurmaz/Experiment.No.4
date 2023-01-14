let canvas;
var paletteName;
let palettes = 
  {   
       "Mars": ['#451804', '#c1440e', '#e77d11', '#fda600', '#ffaa00', '#000000', '#FFFFFF'],
       "Earth": ['#decca6', '#a4a726', '#945b14', '#706454', '#381d0a', '#000000', '#FFFFFF'],
       "Sirius": ['#038376', '#74054d', '#f9b1b1', '#055269', '#ffe8cb', '#000000', '#FFFFFF'],
       "Saturn": ['#eddbad', '#e2bf7d', '#c3924f', '#fceead', '#c4b08b', '#000000', '#FFFFFF'],
       "Uranus": ['#afdbf5', '#93cdf1', '#62aee7', '#4296dc', '#2e84ce', '#000000', '#FFFFFF'],
       "Neptune": ['#477efd', '#74d6fd', '#3d5ef9', '#2b378b', '#1f2255', '#000000', '#FFFFFF'],
       "Jupiter": ['#507992', '#ddbca6', '#cea589', '#c17d6b', '#946956', '#000000', '#FFFFFF'],
       "Mercury": ['#e7e8ec', '#ada8a5', '#b1adad', '#8c8c94', '#68696d', '#000000', '#FFFFFF'],
       "Venus": ['#632417', '#CC3A01', '#FE9D43', '#FFDC79', '#FFEBAC', '#000000', '#FFFFFF'],
       "Planeta": ['#7BFF00', '#01FFF4', '#FFF103', '#FE0000', '#FF1078', '#000000', '#FFFFFF'],
       "Planetc": ['#54183F', '#8E0B3A', '#C30133', '#FB5731', '#FBC300', '#000000', '#FFFFFF'],
       "Planetg": ['#3D5220', '#3D5220', '#B7CB99', '#B7CB99', '#9DDBC8', '#000000', '#FFFFFF'],
       "Planetg": ['#3D5220', '#B7CB99', '#778FD2', '#2A3759', '#431D32', '#000000', '#FFFFFF'],
       "Planetx": ['#081012', '#4D8FC3', '#FFF3EB', '#E0AB9A', '#EF8A84', '#000000', '#FFFFFF'],

  }
var palette=[];
let x = 0;
let y = 0;
let shape = rnd()*6+5;
let t = rnd()*100+100;


function setup() {
  canvas = createCanvas(fxrand()*560+720, 920);
  let seed = int(fxrand() * 100000);
  randomSeed(seed);
  noiseSeed(seed);
  console.log(palette1);
  if (shape >=1) {
    background(0);
  } else {
    background(color(palettes[palette1][floor(rnd()*4)]));
  }
  // background(color(palettes[palette1][floor(rnd()*4)]));
}


function draw() {
  // stroke(fxrand()*255);
  stroke(255);
  strokeWeight(fxrand()*2)
    if (shape >= 1) {
      rectColor = color(palettes[palette1][floor(rnd()*5)]);
      fill(rectColor);
      rect(x, y, fxrand()*100, fxrand()*100);
    } else {
      rectColor = color(palettes[palette1][floor(rnd()*5)]);
      fill(rectColor);
      rect(x, y, fxrand()*200, fxrand()*200);
    }
    x = x + fxrand()*100;
    if (x > width) {
      x = 0;
      y = y + fxrand()*100;
    }
    
    if (shape >= 5){
    for (let a=-10; a < width; a++) {
      stroke(color(palettes[palette1][floor(rnd()*5+1)]));
      // stroke(255);
      strokeWeight(0.01);
      line(a*2, -height*2, a*2, height*2);
      a = tan(a) + rnd()*width;
      if (height < y/2){
        break;
      }
      line(-width, a*2, width, a*2);
      a = a + (rnd()*5);
      if (width < y/2){
        break;
      }
    }    
  } else if(shape>=4) {
    for (let a=0; a < height; a++) {
      // stroke(color(palettes[palette1][floor(rnd()*4)]));
      // stroke(color(palettes[palette1][floor(rnd())]));
      stroke(0);
      strokeWeight(0.05);
      line(-width, a, width, a);
      a = a + 20+ (rnd()*5 + 20);
      if (height < y/8){
        break;
      }
    }
  } else if (shape>=3) {
    for (let a=0; a < height; a++) {
      // stroke(color(palettes[palette1][floor(rnd()*4)]));
      stroke(color(palettes[palette1][floor(rnd())]));
      // stroke(255);
      strokeWeight(0.1);
      line(-width, a-100, width, a*rnd()*20);
      a = a + 10 + (rnd()*5 + 20);
      if (height < y/10){
        break;
      }
    }
  } else if (shape>=2){
    for (let a=-10; a < width; a++) {
      stroke(color(palettes[palette1][floor(rnd())]));
      // stroke(255);
      strokeWeight(0.01);
      line(a, -height, a, height);
      a = tan(a) + rnd()*width;
      if (height < y/2){
        break;
      }
    } 
  } else if (shape>=1){
    for (let a=-100; a < width; a++) {
      stroke(color(palettes[palette1][floor(rnd())]));
      // stroke(0);
      strokeWeight(0.05);
      line(a, -width, a, height);
      a = tan(a) + rnd()*width;
      if (height < y/2){
        break;
      }
    }  
  } else if (shape>=0){
    for (let a=-10; a < width; a++) {
      stroke(color(palettes[palette1][floor(rnd())]));
      // stroke(255);
      strokeWeight(0.05);
      line(-width, a*2, width, a*2);
      a = tan(a) + rnd()*width;
      if (height < y/2){
        break;
      }
    }  
  } 
    
  console.log(shape);
  stroke(255);
  strokeWeight(fxrand()*2)
  if (shape <= 2) {
    rectColor = color(palettes[palette1][floor(rnd()*5)]);
    fill(rectColor);
    rect(x, y-(height), fxrand()*100, fxrand()*100);
    rect(x, y-(height*2), fxrand()*100, fxrand()*100);
  } else {
    rectColor = color(palettes[palette1][floor(rnd()*5)]);
    fill(rectColor);
    rect(x, y-(height*2), fxrand()*100, fxrand()*100);
  }
  x = x + fxrand()*100;
    if (x > width*2) {
      x = 0;
      y = y + fxrand()*100;
    }
  } 

  function rnd() {
    return fxrand();
}

  function intRnd(n) {
    return ((rnd() * 1000 * n) | 0) % (n)
}

  function colorPalette() {
    var paletteKeys = Object.keys(palettes);
    var n = paletteKeys.length;
    palette1 = paletteKeys[intRnd(n)];
    return palette1;
}

  window.$fxhashFeatures = {
    "Palette": colorPalette(),
    "Shape": shape,
  }