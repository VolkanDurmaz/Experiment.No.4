var paletteName;
let palettes = 
  {  
       "Space": ['#2BAEB3', '#404272', '#FF6E3C', '#FFD74B', '#F0F0FF'],
       "Earth": ['#0081B4', '#FAD3E7', '#EFA3C8', '#F4D9E7', '#F0F0FF'],
  }
var palette=[];
let x = 0;
let y = 0;

function setup() {
  canvas = createCanvas(fxrand()*560+720, 1000);
  let seed = int(fxrand() * 100000);
  randomSeed(seed);
  noiseSeed(seed);
  console.log(palette1);
  background(color(palettes[palette1][floor(rnd()*5)]));
}

function draw() {
  stroke(2);
  strokeWeight(fxrand()*3);
  strokeCap(ROUND);
  
    if (fxrand()*5 >= 1) {
      rectColor = color(palettes[palette1][floor(rnd()*5)]);
      fill(rectColor);
      rect(x, y, fxrand()*55, fxrand()*55);
    }
    
    y = y + 50;
    if (y > height) {
      y = 0;
      x = x + fxrand()*50;
    }
  } 

  function rnd() {
    return Math.random();
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
  }