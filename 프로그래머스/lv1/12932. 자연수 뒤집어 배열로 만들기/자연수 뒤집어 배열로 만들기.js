function solution(n) {
    var answer = [];
    n = n.toString().split('');
    n.map((v) => answer.push(Number(v)));
    answer.reverse();
    return answer;
}