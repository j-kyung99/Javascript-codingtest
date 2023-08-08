function solution(numLog) {
    let result = [];
    for(let i=0;i<numLog.length-1;i++){
        if(numLog[i+1] - numLog[i] === 1) result.push('w');
        else if(numLog[i+1] - numLog[i] === -1) result.push('s');
        else if(numLog[i+1] - numLog[i] === 10) result.push('d');
        else result.push('a');
    }
    return result.join('');
}