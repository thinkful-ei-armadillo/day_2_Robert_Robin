'use strict'

function min(num){
    let i = 0;
    let min = num[0];
    while(i != num.length){
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
    while(i != num.length){
        if(max < num[i]){
            max = num[i];
        }
        i++;
    }
    return max;
}

const average = (array) => {
    let sum=0;
    array.forEach( (num) => sum += num);
    return sum/array.length;
};

const arr = [3, 6, 7, 3];

console.log(average(arr));

console.log('hello');
