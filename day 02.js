var data = `/**/
/**/`;

data = data.split('\n').map(row => row.split(/\s+/).sort((a, b) => b - a)); // added sorting for part 2

var checksum = data.reduce((t, arr) => t + (Math.max(...arr) - Math.min(...arr)), 0);
console.log(checksum);


for(var r=0, sum=0; r<data.length; r++){
  c:for(var c=0; c<data[r].length; c++){
    for(var i=c+1; i<data[r].length; i++){
      if(!(data[r][c] % data[r][i])){
        sum += data[r][c] / data[r][i];
        continue c;
      }
    }
  }
}

console.log(sum);