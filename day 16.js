var data = `/**/`;

data = data.split(',');

var prgs = 'abcdefghijklmnop'.split('');
var dances = [];

function spin(i){
// prgs = prgs.concat(prgs.splice(0, i));
 prgs = prgs.splice(-i, i).concat(prgs);
};

function swap(a, b){
 [prgs[a], prgs[b]] = [prgs[b], prgs[a]];
};

var moves = {
 s: spin,
 x: swap,
 p: (a, b) => swap(prgs.indexOf(a), prgs.indexOf(b))
};

for(var i=0; ; i++){
 for(move of data){
  var t = move.match(/(s|x|p)(.+)/);
  moves[t[1]](...t[2].split('/'));
 }
 var order = prgs.join('');
 if(~dances.indexOf(order)){
  break;
 }
 dances.push(order);
}

console.log('dances:', i, 'remainder:', 1e9 % i);
console.log(dances[0]);
console.log(dances[(1e9 % i) - 1]);