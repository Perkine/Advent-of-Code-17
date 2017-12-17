var step = 329,
    mem = [0],
    cur = 1,
    pos = 0,
    val;

for(var i=0; i<2017; i++){
 pos = 1 + (pos + step) % cur;
 if(i < 2017)
  mem.splice(pos,0,cur);
 cur++;
}
console.log(mem[pos + 1]);

for(; i<50000000; i++){
 pos = 1 + (pos + step) % cur;
 if(pos == 1)
  val = cur;
 cur++;
}
console.log(val);