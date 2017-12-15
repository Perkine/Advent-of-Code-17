var data = `/**/`;

data = data.split('\n')
	.map(line => line.split(': '))
	.reduce((ret, [a, b]) => {ret[a] = b * 2 -2; return ret}, []);

for(var i=0, sev=0; i<data.length; i++) {
 if(data[i] && !(i % data[i])) {
  sev += i * (data[i] / 2 + 1);
 }
}

outer:for(var delay=0; ; delay++) {
 for(var i=0; i<data.length; i++) {
  if(data[i] && !((i + delay) % data[i])) {
   continue outer;
  }
 }
 break;
}

console.log(sev, delay);