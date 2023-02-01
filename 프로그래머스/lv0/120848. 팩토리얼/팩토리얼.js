function solution(n) {
    var answer = 0;
    let fac = 1;
    for(let i = 1;i<=10;i++){
        fac *= i;
        if(fac > n) {
            answer = i-1;
            break;
        }
        else if(fac === n) {
            answer = i;
            break;
        }
    }
    return answer;
}