function solution(a, b) {
    let answer = [];
    answer.push(Number(String(a)+String(b)));
    answer.push(Number(String(b)+String(a)));
    answer.sort((a,b) => b-a);
    return answer[0];
}