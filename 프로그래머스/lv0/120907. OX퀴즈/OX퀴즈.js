function solution(quiz) {
    var answer = [];
    for(let i=0;i<quiz.length;i++){
        var exp = quiz[i].split(' ');
        if(exp[1] === '+'){
            if(Number(exp[0]) + Number(exp[2]) === Number(exp[4])) answer.push("O");
            else answer.push("X");
        } else if(exp[1] === '-'){
            if(Number(exp[0]) - Number(exp[2]) === Number(exp[4])) answer.push("O");
            else answer.push("X");
        }
    }
    return answer;
}