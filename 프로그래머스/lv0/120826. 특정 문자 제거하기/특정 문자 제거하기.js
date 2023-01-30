function solution(my_string, letter) {
    var answer = my_string.split('');
    for(let i=0;i<answer.length;i++){
        if(answer[i] === letter) {
            answer.splice(i, 1);
            i = -1;
        }
    }
    return answer.join('');
}