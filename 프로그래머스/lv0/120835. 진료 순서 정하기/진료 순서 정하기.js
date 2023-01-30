function solution(emergency) {
    var answer = [];
    var a = [];
    answer = [...emergency];
    answer.sort((a, b) => b-a);
    for(let i=0;i<answer.length;i++){
        answer[i] = [answer[i],i+1];
    }
    for(let i=0;i<answer.length;i++){
        for(let j=0;j<answer.length;j++){
            if(answer[j][0] === emergency[i]) a.push(answer[j][1]);
        }
    }
    return a;
}