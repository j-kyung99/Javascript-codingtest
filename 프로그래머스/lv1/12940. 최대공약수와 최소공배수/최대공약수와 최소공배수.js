function maxNum(a, b){
    let num = 0;
    let max = a > b ? a : b;
    for(let i=1;i<=max;i++){
        if(a%i === 0 && b%i === 0){
            num = i;
        }
    }
    return num;
}

function minNum(a, b){
    let min = a < b ? a : b;
    let max = a * b;
    let num = 1;
    for(let i=max;i>=min;i--){
        if(i%a === 0 && i%b === 0){
            num = i;
        }
    }
    return num;
}

function solution(n, m) {
    var answer = [];
    answer.push(maxNum(n,m), minNum(n,m));
    return answer;
}