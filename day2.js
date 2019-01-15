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

