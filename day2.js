'use strict';
// Min - Max drills

function min(num){
  let i = 0;
  let min = num[0];
  while(i !== num.length){
    if(min > num[i]){
      min = num[i];
    }
    i++;
  }
  return min;
}

function max(num){
  let i = 0;
  let max = num[0];
  while(i !== num.length){
    if(max < num[i]){
      max = num[i];
    }
    i++;
  }
  return max;
}

//Average drills

const average = (array) => {
  let sum=0;
  array.forEach( (num) => sum += num);
  return sum/array.length;
};

//Higher Order drill (1)

function repeat(num, fn) {
  for (let i=0; i<num; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('goodbye world');
}

//functions as arguments 2
function filter(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES