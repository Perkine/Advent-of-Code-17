
var data = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5'.split('\t').map(Number);

var cache = [data.join('|')];

var c = 0;

outer:while(true) {
 c++;
 var idx = data.indexOf(Math.max(...data));
 var val = data[idx];
 data[idx] = 0;
 for(var i=idx+1; i<idx+val+1; i++){
  data[i % data.length]++;
 }

 if(~cache.indexOf(data.join('|')) && cache.indexOf(data.join('|')) != cache.lastIndexOf(data.join('|'))){
  break outer;
 }
 cache.push(data.join('|'));
}

console.log(cache.lastIndexOf(data.join('|')), c - cache.lastIndexOf(data.join('|')));