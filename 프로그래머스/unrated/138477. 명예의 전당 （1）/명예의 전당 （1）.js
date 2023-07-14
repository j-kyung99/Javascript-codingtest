function solution(k, score) {
    var answer = [];
    let loser = [];
    for(let i=0;i<score.length;i++){
        loser.push(score[i]);
        loser.sort((a, b) => b-a);
        if(loser.length > k) loser.pop();
        answer.push(loser[loser.length-1]);
    }
    return answer;
}