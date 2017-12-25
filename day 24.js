var data = `/**/`;

data = data.split('\n').map(line => line.split('/').map(Number));

var solutions = [], maxWeightA = 0, maxWeightB = 0, maxLength = 0;

function buildBridge(bridge, blocks, end, weight){
 for(var i=0, a, b, newArr; i<blocks.length; i++){
  [a, b] = blocks[i];
  if(a == end || b == end){
   // buildBridge([...bridge, [a,b]], blocks.filter(cur => {[A,B] = cur; return !(A == a && B == b)}), a + b - end, a + b + weight); // filter method is slow...
   newArr = blocks.slice(0);
   newArr.splice(i,1);
   buildBridge([...bridge, [a,b]], newArr, a + b - end, a + b + weight);
  }
 }

  maxWeightA = Math.max(maxWeightA, weight);
  maxLength = Math.max(maxLength, bridge.length);

 if(bridge.length == 36){			// hardcoded maxLength
  maxWeightB = Math.max(maxWeightB, weight);
 }
};

buildBridge([], data, 0, 0);
console.log(maxWeightA, maxLength, maxWeightB);