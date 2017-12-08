var data= `/**/`;

data = data.split('\n').map(line => line.split(' '));

var registers = {};
var conditions = {
 '==' : (reg, val) => reg == val,
 '!=' : (reg, val) => reg != val,
 '>=' : (reg, val) => reg >= val,
 '<=' : (reg, val) => reg <= val,
 '>'  : (reg, val) => reg > val,
 '<'  : (reg, val) => reg < val
};

var max = 0;

function process([regA, ins, valA, _, regB, cnd, valB]) {
 if(!(regA in registers))
  registers[regA] = 0;
 if(!(regB in registers))
  registers[regB] = 0;
 if(conditions[cnd](registers[regB], valB)){
  registers[regA] += (ins == 'inc') ? +valA : -valA;
  max = Math.max(max, registers[regA]);
 }
};

data.forEach(process);

console.log(Math.max(...Object.values(registers)), max);