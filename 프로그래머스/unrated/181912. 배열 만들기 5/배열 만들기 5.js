function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i of intStrs){
        let str = i.split('');
        let num = 0;
        num = str.slice(s, s+l);
        Number(num.join('')) > k ? answer.push(Number(num.join(''))) : 0
    }
    return answer;
}