function solution(numbers) {
    let max = -100000000;
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(max < numbers[i]*numbers[j]) max = numbers[i]*numbers[j];
        }
    }
    return max;
}