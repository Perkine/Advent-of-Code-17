var data = `/**/`;

data = data.split('\n');

var programs = [],
    pipes = [],
    amount,
    groups = 0;

for(line of data) {
 var t = line.match(/(\d+) <-> (.+)/);
 programs[t[1]] = t[2].split(', ');
}

function checkPipes(prg){
 for(pipe of prg) {
  if(!(pipe in pipes)){
   pipes[pipe] = true;
   checkPipes(programs[pipe]);
  }
 }
}; 

for(var i=0; i<programs.length; i++) {
 if(!(i in pipes)){
  groups++;
  pipes[i] = true;
  checkPipes(programs[i]);
 }
 if(i == 0){
  amount = pipes.reduce((t,v) => t+v, 0);
  console.log(programs.length, pipes.length, amount);
 }
}

console.log(programs.length, pipes.length, groups);