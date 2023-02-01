function solution(n) {
    let fac = 1;
    for(let i = 1;i<=10;i++){
        fac *= i;
        if(fac > n) {
            return i-1;
        }
        else if(fac === n) {
            return i;
        }
    }
}