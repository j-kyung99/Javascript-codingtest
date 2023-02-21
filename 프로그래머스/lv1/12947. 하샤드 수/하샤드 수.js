function solution(x) {
    let sum = 0;
    const ha = x.toString().split('').reverse();
    for(let i=0;i<ha.length;i++){
        sum += Number(ha[i]);
    }
    if(x%sum === 0) return true;
    else return false;
}