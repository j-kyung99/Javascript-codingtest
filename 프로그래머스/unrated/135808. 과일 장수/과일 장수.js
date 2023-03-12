function solution(k, m, score) {
    var answer = 0;
    let s = score.sort((a, b) => b-a);
    for(let i=0;i<score.length;i+=m){
        let str = [];
        for(let j=i;j<i+m;j++){
            if(score[j] === undefined) continue;
            str.push(score[j]);
        }
        if(str.length === m) answer += str[m-1] * m;
    }
    return answer;
}