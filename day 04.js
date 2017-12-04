var data = `/**/`;

data = data.split('\n').map(row => row.split(' '));

if(partB = true)
 data = data.map(row => row.map(word => word.split('').sort().join('')));

var c = c=data.length;

for(var r=0; r<data.length; r++){
 for(var i=0; i<data[r].length; i++){
  if(data[r].indexOf(data[r][i]) != i){
   c--;
   break;
  }
 }
}

console.log(c);