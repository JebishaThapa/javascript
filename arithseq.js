function getSecondHighest(arr){
    let highest = Number.NEGATIVE_INFINITY;
    let secondHighest = Number.NEGATIVE_INFINITY;

    for(const num of arr){
        if(num>highest){
            secondHighest = highest;
            highest=num;

        }else if (num > secondHighest && num < highest){
            secondHighest = num;
        }
    }

    return secondHighest === Number.NEGATIVE_INFINITY ? null : secondHighest;
}