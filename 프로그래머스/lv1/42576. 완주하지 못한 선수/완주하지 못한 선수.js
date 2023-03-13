function solution(participant, completion) {
    const a = participant.sort();
    const b = completion.sort();
    console.log(a, b);
    for(let i=0;i<a.length;i++){
        if(a[i] !== b[i]) return a[i];
    }
}