var data = `/**/`;

data = data.split('\n');
var o = {}
data.forEach(parse);

function parse(line, _, i){
 var re = /(\S+)\s\((\d+)\)(?:\s->\s)?(.*)/g;
 var t = line.match(re);
 return o[RegExp.$1] =  !RegExp.$3 ? {name: RegExp.$1, weight: +RegExp.$2} : {name: RegExp.$1, weight: +RegExp.$2, children: RegExp.$3.split(', ')};
};

outer:for([prg, {children}] of Object.entries(o)){
 if(children){
  for([_, {_, children}] of Object.entries(o)){
   if(children && ~children.indexOf(prg)){
    continue outer;
   }
  }
  break;
 }
}
console.log(prg);

function buildTree(obj) {
 if(!obj.children)
  return obj;
  obj.children.forEach(function(val, idx) {
   var ret = buildTree(o[val]) || o[val];
   if(!obj.fullWeight)
    obj.fullWeight = obj.weight;
   if(!obj.carryWeight)
    obj.carryWeight = 0;
   obj.fullWeight += ret.fullWeight || ret.weight;

   if(obj.carryWeight != 0 && (obj.carryWeight % ret.fullWeight))
    console.log(obj.name, '->', ret.name, ret.fullWeight, ret.weight);
   obj.carryWeight += ret.fullWeight;

   obj.children[idx] = ret;
 });
}

buildTree(o[prg]);