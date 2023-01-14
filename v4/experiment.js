let canvas;
var paletteName;
let palettes = 
  {  
       "Space": ['#0E185F', '#2FA4FF', '#00FFDD', '#E8FFC2', '#000000', '#FFFFFF'],
       "Earth": ['#0081B4', '#FAD3E7', '#EFA3C8', '#F4D9E7', '#000000', '#FFFFFF'],
       "Moon": ['#39B5E0', '#A31ACB', '#FF78F0', '#F5EA5A', '#000000', '#FFFFFF'],
       "Mars": ['#451804', '#c1440e', '#e77d11', '#fda600', '#000000', '#FFFFFF'],
       "Saturn": ['#0F4C75', '#1B262C', '#00B7C2', '#FDCB9E', '#000000', '#FFFFFF'],
  }
var palette=[];
let x = 0;
let y = 0;
let shape = rnd()*5;
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
  stroke(fxrand()*255);
  strokeWeight(fxrand()*3)
    if (shape >= 1) {
      rectColor = color(palettes[palette1][floor(rnd()*4)]);
      fill(rectColor);
      rect(x, y, fxrand()*100, fxrand()*100);
    } else {
      rectColor = color(palettes[palette1][floor(rnd()*4)]);
      fill(rectColor);
      rect(x, y, fxrand()*100, fxrand()*100);
    }
    x = x + fxrand()*100;
    if (x > width) {
      x = 0;
      y = y + fxrand()*100;
    }
    
    if (shape >= 3){
    for (let a=0; a < width; a++) {
      // console.log(a);
      console.log(shape);
      stroke(color(palettes[palette1][4]));
      // stroke(1);
      strokeWeight(0.05);
      line(a, -width, a, height);
      a = a + 20 + (rnd()*5) + 20;
      if (height < y/4){
        break;
      }
    }    
  } if (3 > shape >= 1){
    for (let a=0; a < height; a++) {
      // stroke(color(palettes[palette1][floor(rnd()*4)]));
      stroke(color(palettes[palette1][floor(rnd()+5)]));
      // stroke(255);
      strokeWeight(0.05);
      line(-width, a, width, a);
      a = a + 20+ (rnd()*5 + 20);
      if (height < y/4){
        break;
      }
    }
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