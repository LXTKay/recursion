"use strict";

function fibs(amount){
  let arr = []
  for(let i = 0; i < amount; i++){
    if(i == 0){
      arr.push(0);
    } else if(i == 1){
      arr.push(1)
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    };
  };
  console.log(arr);
};

let fibsRecArr = [0,1];

function fibsRec( n ){
  if (n<0) return [];
  if (n == 0) return [0];
  if (n == 1) return [0,1];

  let arr = fibsRec( n - 1);
  arr.push(arr[n -1] + arr[n - 2]);
  return arr;
};

console.log(fibsRec(1));
console.log(fibsRec(8));