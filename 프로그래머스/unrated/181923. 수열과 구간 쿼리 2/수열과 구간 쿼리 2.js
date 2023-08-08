function solution(arr, queries) {
    var answer = [];
    for(let i=0;i<queries.length;i++){
        let query = [];
        for(let j=queries[i][0];j<=queries[i][1];j++){
            if(arr[j] > queries[i][2]){
                query.push(arr[j])
            }
        }
        if(query.length === 0) answer.push(-1);
        else {
            query.sort((a,b) => a-b);
            answer.push(query[0]);
        }
    }
    return answer;
}