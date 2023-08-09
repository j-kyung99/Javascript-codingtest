function solution(l, r) {
    var answer = [];
    for(let i=l;i<=r;i++){
        let arr = String(i);
        if(i%5 !== 0) continue;
        if(![...arr].every(x => x === '5' || x === '0')) continue;
        answer.push(i);
    }
    return answer.length === 0 ? [-1] : answer;
}