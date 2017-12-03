var puzzelInput = 277678;

function calcSteps(n) {
  var root = Math.ceil(Math.sqrt(n));
      root -= root % 2 ? 1 : 0;
  var toAxis = root / 2;
  var t = n - Math.pow(root - 1, 2);
  return toAxis + Math.abs(t % root - toAxis);
};

console.log(calcSteps(puzzelInput));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var grid = [null,1];

function indexByCoord(x, y) {
  var c = Math.max(Math.abs(x), Math.abs(y)),
      p = Math.pow(1 + 2*c, 2),
      i;

  if(x == c && y != c || y == -c){
    i = p - (4*c) - (c+x) - (c+y);
  } else {
   i = p - (c-x) - (c-y);
  }

  //console.log(c, p, i);
  return i;
};

function getValue(x, y) {
  var index = indexByCoord(x, y);
  //console.log('i,v', index, index in grid ? grid[index] : 0);
  return  index in grid ? grid[index] : 0;
}

function addSquare(x, y) {
  var t = getValue(x-1, y-1) + getValue(x, y-1) + getValue(x+1, y-1) + 
          getValue(x-1, y) + /*self*/ + getValue(x+1, y) + 
          getValue(x-1, y+1) + getValue(x, y+1) + getValue(x+1, y+1);
  grid.push(t);
  //console.log('x,y,v',x,y,t);
  if(t > puzzelInput) return t;
};

var x = 1, y = 0, i = 1,dir = 1, ret=false;

outer:while(true){
  while(2 * x * dir < i){
    if(ret = addSquare(x, -y))
      break outer;
    x += dir;
  }
  while(2 * y * dir < i){
    if(ret = addSquare(x, -y))
      break outer;
    y += dir;
  }
  dir *= -1;
  i++;
}

console.log(ret);
