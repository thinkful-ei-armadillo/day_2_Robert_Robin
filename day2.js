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
