function solution(array) {
    const a = [...array].sort((a,b) => b-a);
    const answer = [];
    for(let i=0;i<array.length;i++){
        if(a[0] === array[i]) {
            answer.push(a[0], i);
        }
    }
    return answer;
}