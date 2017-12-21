var data = `/**/`;

data = data.split('\n').map(parse);

function parse(line){
 var r = line.match(/p=<(.+),(.+),(.+)>, v=<(.+),(.+),(.+)>, a=<(.+),(.+),(.+)>/);
 return r.slice(1,10).map(i => 1*i);
};

function calc(line){
 return Math.abs(line[6]) + Math.abs(line[7]) + Math.abs(line[8]);
};

var part1 = data.map(calc);
console.log(part1.indexOf(Math.min(...part1)));


outer:while(true){
 for(var i=0, fromMid, c=0; i<data.length;){
  if(data[i].length == 3) {
   data.splice(i, 1);
   continue;
  }

  fromMid = Math.abs(data[i][0]) + Math.abs(data[i][1]) + Math.abs(data[i][2]);

  data[i][3] += data[i][6];
  data[i][4] += data[i][7];
  data[i][5] += data[i][8];
  data[i][0] += data[i][3];
  data[i][1] += data[i][4];
  data[i][2] += data[i][5];

  if(Math.abs(data[i][0]) + Math.abs(data[i][1]) + Math.abs(data[i][2]) >= fromMid){ // particle is moving away from middle
   if(++c == data.length){ // all particles moving away
    break outer;
   }
  }
  i++;
 }


 for(var i=0; i<data.length; i++){
  for(var j=i+1; j<data.length; j++){
   if(data[i][0] == data[j][0] && data[i][1] == data[j][1] && data[i][2] == data[j][2]) { // collision
    data[i].length = 3; // mark for deletion
    data[j].length = 3; // mark for deletion
   }
  }
 }
}

console.log(data.length);