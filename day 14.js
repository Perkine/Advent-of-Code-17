function reverse(array, i, j) {
  while(i < j) {
    [array[i % array.length], array[j % array.length]] = [array[j % array.length], array[i % array.length]];
    i++;
    j--;
  }
};

function createHash(key) {
 var list = [...Array(256).keys()];
 var data = key.split('').map(v => v.charCodeAt(0));
 data.push(17, 31, 73, 47, 23);

 for(var start=0, skip=0, i=0; i<64*data.length; i++) {
  reverse(list, start, start + data[i % data.length] - 1);
  start = (start + data[i % data.length] + skip++) % list.length;
 }

 for(var hash='', i=0; i<list.length; i+=16) {
  hash += ('0'+list.slice(i, i+16).reduce((t,c) => t^c).toString(16)).slice(-2);
 }

 return hash;
};

function toBin(str){
 return str.split('').reduce((t,v) => t + ('0000' + parseInt(v, 16).toString(2)).slice(-4), '');
};

function checkCell(x,y) {
 return disk[y] && disk[y][x] == 1;
};

function addCell(x, y) {
 disk[y][x] = 2;
 checkCell(x-1, y) && addCell(x-1, y);
 checkCell(x+1, y) && addCell(x+1, y);
 checkCell(x, y-1) && addCell(x, y-1);
 checkCell(x, y+1) && addCell(x, y+1);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

for(var i=0, hash, disk=[], total=0; i<128; i++) {
 hash = createHash('wenycdww-'+i);
 total += hash.split('').reduce((t,v) => t + [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4][parseInt(v, 16)], 0);
 disk.push(createHash('wenycdww-'+i));
}

disk = disk.map(line => toBin(line).split(''));

for(var y=0, regions=0; y<disk.length; y++){
 for(var x=0; x<disk[0].length; x++){
  if(checkCell(x, y)){
   addCell(x, y);
   regions++;
  }
 }
}

console.log(total, regions);