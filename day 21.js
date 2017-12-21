var data = `/**/`;

var book = {};
data.split('\n').forEach(parse);

var pattern = ['.#.','..#','###'];

for(var i=0; i<5; i++){
 pattern = enhance(pattern);
}
console.log(pattern.join('').split('').reduce((t,v) => t+=(v=='#'), 0));

for(; i<18; i++){
 pattern = enhance(pattern);
}
console.log(pattern.join('').split('').reduce((t,v) => t+=(v=='#'), 0));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function parse(line){
 var t = line.match(/(.+) => (.+)/)
 book[t[1]] = t[2];
};

function enhance(pattern) {
 var size = pattern[0].length,
     out = [],
     ret, x, y, i;

  for(y=0; y<size; y += size%2 ? 3 : 2){
   for(x=0; x<size;  x+= size%2 ? 3 : 2){

    if(size%2 == 0){
     ret = enhance2([
	pattern[y][x], pattern[y][x+1],
	pattern[y+1][x], pattern[y+1][x+1]
     ]).split('/');
    } else {
     ret = enhance3([
	pattern[y][x], pattern[y][x+1], pattern[y][x+2],
	pattern[y+1][x], pattern[y+1][x+1], pattern[y+1][x+2],
	pattern[y+2][x], pattern[y+2][x+1], pattern[y+2][x+2]
     ]).split('/');
    }

    for(i=0; i<ret.length; i++){
     if(x==0){
      out.push([ret[i]]);
     } else
      out[i + (y * (size%2 ? 4/3 : 3/2))].push(ret[i]);
     }
    }
   }
  return out.map(line => line.join(''));
};

function enhance2(inp) {
 var [a,b,c,d] = inp;

 function join(pattern) {
  pattern.splice(2, 0, '/');
  return pattern.join('');
 };

 return book[ join([a,b,c,d]) ] || book[ join([b,a,d,c]) ] || book[ join([c,d,a,b]) ] || book[ join([d,c,b,a]) ] ||
        book[ join([c,a,d,b]) ] || book[ join([a,c,b,d]) ] || book[ join([d,b,c,a]) ] || book[ join([b,d,a,c]) ];
};

function enhance3(inp) {
 var [a,b,c,d,e,f,g,h,i] = inp;

 function join(pattern) {
  pattern.splice(6, 0, '/');
  pattern.splice(3, 0, '/');
  return pattern.join('');
 };

 return book[join([a,b,c,d,e,f,g,h,i])] || book[join([c,b,a,f,e,d,i,h,g])] || book[join([g,h,i,d,e,f,a,b,c])] || book[join([i,h,g,f,e,d,c,b,a])] ||
        book[join([g,d,a,h,e,b,i,f,c])] || book[join([a,d,g,b,e,h,c,f,i])] || book[join([i,f,c,h,e,b,g,d,a])] || book[join([c,f,i,b,e,h,a,d,g])];
};

</script>