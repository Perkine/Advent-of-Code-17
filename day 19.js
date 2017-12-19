var data = `/**/`;

data = data.split('\n').map(line => line.split(''));

var dir = {x: 0, y: 1},
    pos = {x: data[1].indexOf('|'), y: 1},
    letters = [],
    count = 0;

while(++count) {
  pos.x += dir.x;
  pos.y += dir.y;

  if(data[pos.y][pos.x] == '+' && dir.x){
    dir.x = 0;
    dir.y = (data[pos.y-1][pos.x] == '|' ? -1 : 1);
  } else if(data[pos.y][pos.x] == '+' && dir.y){
    dir.y = 0;
    dir.x = (data[pos.y][pos.x-1] == '-' ? -1 : 1);
  }

  if(!~'-| +'.indexOf(data[pos.y][pos.x])){
    letters.push(data[pos.y][pos.x]);
  }

  if(data[pos.y][pos.x] == ' '){
    break;
  }
}

console.log(letters.join(''), count);