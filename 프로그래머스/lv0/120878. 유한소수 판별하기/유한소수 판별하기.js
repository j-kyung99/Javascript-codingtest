function solution(a, b) {
    let max = 1;
    for(let i=1;i<=b;i++){
        if(a%i === 0 && b%i === 0){
            max = i;
        }
    }
    b = b/max;
    while(b%2 === 0 || b%5 === 0){
        if(b%2 === 0) b = b/2;
        if(b%5 === 0) b = b/5;
    }
    return b === 1 ? 1 : 2;
}