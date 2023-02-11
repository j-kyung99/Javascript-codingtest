function solution(numlist, n) {
    const number = [];
    const answer = [];
    for(let i=0;i<numlist.length;i++){
        number.push([Math.abs(numlist[i] - n), numlist[i]]);
    }
    number.sort((a,b) => {
        if(a[0] === b[0]){
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    })
    for(let i=0;i<number.length;i++){
        answer.push(number[i][1]);
    }
    return answer;
}