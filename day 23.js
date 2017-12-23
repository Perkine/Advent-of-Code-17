// modified for part 1. Counts on register 'a'.
var data = `set b 99
set c b
set f 1
set d 2
set e 2
jnz 0 0
jnz 0 0
jnz 0 0
jnz 0 0
sub a -1
sub e -1
set g e
sub g b
jnz g -8
sub d -1
set g d
sub g b
jnz g -13
jnz 0 0
jnz 0 0
set g b
sub g c
jnz g 2
jnz 1 3
sub b -17
jnz 1 -23`;

data = data.split('\n').map(line => line.split(' '));

function Program(id){
 this.id = id;
 this.regs = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0, i:0};
 this.queue = [];
 this.lastSound;
 this.i = 0;
 this.waiting = false;
}

Program.prototype = {
 set: function(a, b){this.regs[a] = isNaN(b) ? this.regs[b] : +b},
 sub: function(a, b){this.regs[a] -= isNaN(b) ? this.regs[b] : +b},
 mul: function(a, b){this.regs[a] *= isNaN(b) ? this.regs[b] : b},
 jnz: function(a, b){if((isNaN(a) ? this.regs[a] : a) != 0) this.i += (isNaN(b) ? this.regs[b] : b) - 1},
};

(function(){
 var prg = new Program(0);
 for(c=0; prg.i>=0 && prg.i<data.length; prg.i++){
  if(data[prg.i][0] == 'mul')
   c++
  prg[data[prg.i][0]](data[prg.i][1], data[prg.i][2]);
 }
 console.log(prg.regs.a);
}());

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function isPrime(n) {
 for(var i=2, s=Math.sqrt(n); i<=s; i++)
  if(n % i == 0) return false;   
 return n != 1;
};

var b = 109900,
    c = 126900,
    h = 0,
    i;

for(; b<=c; b+=17){
 h += !isPrime(b);
}
console.log(h);