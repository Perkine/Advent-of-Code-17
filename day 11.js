var data = `/**/`.split(',');

diff = {
 n : {x: 0, z:-1},
 s : {x: 0, z: 1},
 ne: {x: 1, z:-1},
 se: {x: 1, z: 0},
 sw: {x:-1, z: 1},
 nw: {x:-1, z: 0}
};

var position = {x: 0, y: 0, z: 0};
var max = 0;

function distance(a, b){
 return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.z - b.z));
};

for(move of data){
 position.x += diff[move].x;
 position.z += diff[move].z;
 position.y = -position.x - position.z;

 var max = Math.max(distance({x: 0, y: 0, z:0}, position), max);
}

var steps = distance({x: 0, y: 0, z:0}, position);
console.log(position, steps, max);