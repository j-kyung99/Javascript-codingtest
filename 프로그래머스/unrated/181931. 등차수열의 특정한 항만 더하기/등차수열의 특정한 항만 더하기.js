function solution(a, d, included) {
    let answer = 0;
    let sum = a;
    for(let i=0;i<included.length;i++){
        included[i] === true ? answer += sum : answer;
        sum += d;
    }
    return answer;
}