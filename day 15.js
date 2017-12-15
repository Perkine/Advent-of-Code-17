var A = 16807,
    B = 48271,
    d = 2147483647,
    a = 516,
    b = 190,
    arrA = [],
    arrB = [];

for(var i=0, c=0; i<4e7; i++) {
 a = a * A % d;
 b = b * B % d;

 if(!(a & 3))
  arrA.push(a);
 if(!(b & 7))
  arrB.push(b);

 c += (a & 0xffff) == (b & 0xffff);
}

console.log(c);


for(var i=0, c=0; i<5e6; i++){
 c += (arrA[i] & 0xffff) == (arrB[i] & 0xffff);
}

console.log(c);