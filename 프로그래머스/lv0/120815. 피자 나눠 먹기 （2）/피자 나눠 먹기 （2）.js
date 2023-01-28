function solution(n) {
    if(n%6 !== 0){
        let a = n;
        let b = 6;
        let count = 1;
        for(let i=2;i<=n;i++){
            if(a%i === 0 && b%i === 0) count = i;
        }
        if(count > 1) return a/count;
        else return a;
    }
    else return n/6;
}