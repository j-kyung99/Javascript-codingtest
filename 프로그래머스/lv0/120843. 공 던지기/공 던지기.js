function solution(numbers, k) {
    let a = 0;
    for(let i=k-1;i>0;i--){
        a += 2;
        if(a >= numbers.length) a -= numbers.length;
    }
    return numbers[a];
}