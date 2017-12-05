var data = `/**/`;

data = data.split('\n');

(function(data) {
 for(var i=0, c=0, t=0; i<data.length;){
  i += data[i]++;
  c++;
 }
 console.log(c);
}(Array.from(data)));

(function(data) {
 for(var i=0, c=0, t=0; i<data.length;){
  i += (data[i] >= 3 ? data[i]-- : data[i]++);
  c++;
 }
 console.log(c);
}(Array.from(data)));