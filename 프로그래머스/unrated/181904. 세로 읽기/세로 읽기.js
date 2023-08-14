function solution(my_string, m, c) {
    let arr = [];
    let answer = '';
    for(let i=0;i<my_string.length;i+=m){
        let str = '';
        for(let j=i;j<i+m;j++){
            str += my_string[j];
        }
        arr.push(str);
    }
    for(let i=0;i<arr.length;i++){
        answer += arr[i][c-1];
    }
    return answer;
}