function fac(a) {
    let n = BigInt(1);
    for(let i=a;i>=2;i--){
        n *= BigInt(i);
    }
    return n;
}

function solution(balls, share) {
    return fac(balls)/(fac(balls-share)*fac(share));
}