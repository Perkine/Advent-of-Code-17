var state = 'A',
    steps = 12317297,
    tape = new Map,
    pos = 0,
    count = 0;

var rules = {
 A: [[1, 1, 'B'], [0, -1, 'D']],
 B: [[1, 1, 'C'], [0, 1, 'F']],
 C: [[1, -1, 'C'], [1, -1, 'A']],
 D: [[0, -1, 'E'], [1, 1, 'A']],
 E: [[1, -1, 'A'], [0, 1, 'B']],
 F: [[0, 1, 'C'], [0, 1, 'E']]
};

while(steps--) {
  let [value, dir, nextState] = rules[state][tape.get(pos) || 0];
  tape.set(pos, value);
  pos += dir;
  state = nextState;
}

for(let t of tape.values()){
 count += t;
}
console.log(count);