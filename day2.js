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

//console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//bonus for invoking function on one line
//console.log(filter( ['Rich', 'Joe', 'Bhaumik', 'Ray'], name => name[0] === 'R'));

//function as return values (drill 3)
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${warningCounter !== 1 ? 's' : ''} today!`);
  }
}

const haz1 = hazardWarningCreator('Rocks on the road');
const haz2 = hazardWarningCreator('Ice on the road');
const haz3 = hazardWarningCreator('Oil on the road');
/*
haz1('Main St and Pacific Ave');
haz1('Centinela Ave and Olympic Blvd');
haz2('Timbuck Two');
haz3('Atlantis');
*/

//for each, filter, and map (drill 4)
const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const totalSteps = turtleMovement
// filter steps in upward and left movement
  .filter(index => index[0] >= 0 && index[1] >= 0)
// map total steps in Each array
  .map ((el) => el[0]+el[1])
//log with forEach for each case
  .forEach(el => console.log(`The turtle took ${el} steps`));

// totalSteps;

//reduce drill (drill 5)

const encodedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// split to array
const messageArray = encodedMessage.split(' ')
// reduce function 
                    .reduce((accumulator, currentValue) =>
                     currentValue.length === 3 ? accumulator + ' ' : accumulator + currentValue[currentValue.length - 1].toUpperCase(), "");

console.log(messageArray);