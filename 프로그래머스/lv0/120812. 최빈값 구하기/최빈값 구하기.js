function solution(array) {
    const answer = [];
    let result = [];
    for(let i=0;i<1000;i++){
        result[i] = 0;
    }
    for(let i=0;i<1000;i++){
        result[array[i]]++;
    }
    for(let i=0;i<1000;i++){
        answer.push([i,result[i]]);
    }
    answer.sort((a,b) => b[1]-a[1]);
    if(answer[0][1] === answer[1][1]) return -1;
    else return answer[0][0];
}