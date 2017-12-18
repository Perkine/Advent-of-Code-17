var data = `/**/`;

data = data.split('\n').map(line => line.split(' '));

function Program(id){
 this.id = id;
 this.regs = {p:id};
 this.queue = [];
 this.lastSound;
 this.i = 0;
 this.waiting = false;
}

Program.prototype = {
 set: function(a, b){this.regs[a] = isNaN(b) ? this.regs[b] : +b},
 add: function(a, b){this.regs[a] += isNaN(b) ? this.regs[b] : +b},
 mul: function(a, b){this.regs[a] *= isNaN(b) ? this.regs[b] : b},
 mod: function(a, b){this.regs[a] %= isNaN(b) ? this.regs[b] : b},
 jgz: function(a, b){if((isNaN(a) ? this.regs[a] : a) > 0) this.i += (isNaN(b) ? this.regs[b] : b) - 1},
 snd: function(a){this.lastSound = isNaN(a) ? this.regs[a] : +a},
 rcv: function(a){if(isNaN(a) ? this.regs[a] : a) console.log('recovered', this.lastSound); this.i = -1;}
};

(function(){
 var prg = new Program(0);
 for(; prg.i>=0 && prg.i<data.length; prg.i++){
  prg[data[prg.i][0]](data[prg.i][1], data[prg.i][2]);
 }
}());

(function(){
 var counter = 0;
 var A = new Program(0);
 var B = new Program(1);

 A.snd = function(a){B.queue.push(isNaN(a) ? +this.regs[a] : +a)};
 B.snd = function(a){counter++; A.queue.push(isNaN(a) ? +this.regs[a] : +a)};
 Program.prototype.rcv = function(a){
  if(this.queue.length) {
   this.regs[a] = this.queue.shift();
   this.waiting = false;
  } else {
   this.waiting = true;
   this.i--;
  }
 };

 for(; A.i>=0 && B.i>=0 && A.i<data.length && B.i<data.length;  A.i++, B.i++){
  A[data[A.i][0]](data[A.i][1], data[A.i][2]);
  B[data[B.i][0]](data[B.i][1], data[B.i][2]);

  if(A.waiting && B.waiting){
   break;
  }
 }
 console.log('done', A.i, B.i, A.waiting, B.waiting, counter);
}());