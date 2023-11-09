"use strict";

const c = console.log;

function mergeSort(inputArr){
  if(inputArr.length < 2){
    return inputArr;
  };
  //sort left
  let left = mergeSort(inputArr.slice(0, Math.floor((inputArr.length) / 2)));
  //sort right
  let right = mergeSort(inputArr.slice(Math.floor((inputArr.length) / 2), inputArr.length));
  //merge
  let mergedArr = [];
  for(let i = 0; i < inputArr.length; i++){
    if(left[0] <= right[0]
      || right[0] == undefined
      || right[0] == ""){
      mergedArr.push(left[0]);
      left.shift();
    } else if(left[0] > right[0]
      || left[0] == undefined
      || left[0] == ""){
      mergedArr.push(right[0]);
      right.shift();
    };
  };
  return mergedArr;
};

let arr = [5,4,3,,99,34,41,5.3,12,-19,33,33,33,14,33,33,51,2,1,-Infinity,Math.PI];
console.log("Merge Sort this Array: " + arr);
console.log("Result: " + mergeSort(arr));