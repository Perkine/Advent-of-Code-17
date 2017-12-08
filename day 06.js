var data = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5'.split('\t').map(Number);

var cache = [data.join('|')];

outer:while(true) {
 var idx = data.indexOf(Math.max(...data));
 var val = data[idx];
 data[idx] = 0;

 for(var i=idx+1; i<idx+val+1; i++){
  data[i % data.length]++;
 }

 var joined = data.join('|');
 var idx = cache.indexOf(joined);

 if(~idx){
  break outer;
 }

 cache.push(joined);
}

console.log(cache.length,  cache.length - cache.indexOf(data.join('|')));