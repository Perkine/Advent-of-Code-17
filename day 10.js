function reverse(array, i, j) {
  while(i < j) {
    [array[i % array.length], array[j % array.length]] = [array[j % array.length], array[i % array.length]];
    i++;
    j--;
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var data = '165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153'.split(',').map(Number);
var list = [...Array(256).keys()];

for(var start=0, skip=0, i=0; i<data.length; i++){
  reverse(list, start, start + data[i] - 1);
  start = (start + data[i] + skip++) % list.length;
}

console.log(list[0]*list[1]);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var data = '165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153'.split('').map(v => v.charCodeAt(0));
data.push(17, 31, 73, 47, 23);

var list = [...Array(256).keys()];

for(var start=0, skip=0, i=0; i<64*data.length; i++) {
  reverse(list, start, start + data[i % data.length] - 1);
  start = (start + data[i % data.length] + skip++) % list.length;
}

for(var hash='', i=0; i<list.length; i+=16) {
 hash += ('0'+list.slice(i, i+16).reduce((t,c) => t^c).toString(16)).slice(-2);
}

console.log(hash);