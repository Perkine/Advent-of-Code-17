var data = `/**/`;

data = data.replace(/!./g, ''); // remove canceled characters

var l = data.length, // store current length
    c = 0;

data = data.replace(/<.*?>/g, function(){c++; return ''}); // for part B, count how many garbage groups are removed. data.replace(/<.*?>/g, '');

for(var depth = 0, total = 0, i = 0; i<data.length; i++) {
 if(data[i] == '{'){
  depth++;
  total += depth;
 }
 if(data[i] == '}'){
  depth--;
 }
}

console.log(total, l - data.length - 2*c) // length without canceled - length without garbage - 2 * amount of removed groups