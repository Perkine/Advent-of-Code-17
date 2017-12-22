var data = `/**/`.split('\n');

var map = {}, y, x;

for(y=0; y<data.length; y++){
 for(x=0; x<data[y].length; x++){
  map[x +'#'+ y] = data[y][x];
 }
}

function exe(steps, map, mutations) {
 var i,
     state,
     pos = {x: 12, y: 12},
     dirs = [{x:0, y:-1}, {x:1, y:0}, {x:0, y:1}, {x:-1, y:0}],
     dir = 0,
     count = 0;

 for(i=0; i<steps; i++) {
  state = map[pos.x +'#'+ pos.y];
  dir = (dir + {undefined: 3, '.': 3, 'W': 0, '#': 1, 'F': 2}[state]) % 4;

  map[pos.x +'#'+ pos.y] = mutations[state];

  count += mutations[state] == '#';
  pos.x += dirs[dir].x
  pos.y += dirs[dir].y
 }
 return count;
};

console.log( exe(10000, Object.create(map), {undefined: '#', '.': '#', '#': '.'}) );
console.log( exe(10000000, Object.create(map), {undefined: 'W', '.': 'W', 'W': '#', '#': 'F', 'F': '.'}) );