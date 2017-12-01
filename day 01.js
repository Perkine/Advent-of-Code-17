var data = '/**/';

data = data.split('');

/*
for(var i=0, sum=0; i<data.length;) {
  if(data[i] == data[++i])  
    sum += +data[i]
}
console.log(sum + 8); // +8, because first and last digit are both 8
*/

function search(step) {
  for(var i=0, sum=0; i<data.length; i++)
    if(data[i] == data[(i + step) % data.length])  
      sum += +data[i];
  return sum;
};

console.log(search(1), search(data.length / 2));