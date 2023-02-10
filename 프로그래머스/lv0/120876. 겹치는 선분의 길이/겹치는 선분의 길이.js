function solution(lines) {
    const a = [];
    const answer = [];
    for(let i=0;i<lines.length;i++){
        for(let j=lines[i][0];j<lines[i][1];j++){
            a.push(j);
        }
    }
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i] === a[j]) {
                if(answer.includes(a[i])) continue;
                else answer.push(a[i]);
            }
        }
    }
    return answer.length;
}