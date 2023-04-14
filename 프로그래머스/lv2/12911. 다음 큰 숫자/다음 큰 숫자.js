function solution(n) {
    let num = n.toString(2).split('');
    let numCount = 0;
    num.map((v) => v === '1' ? numCount++ : numCount);
    for(let i=n+1;i<=1000000;i++){
        let answer = i.toString(2).split('');
        let answerCount = 0;
        answer.map((v) => v === '1' ? answerCount++ : answerCount);
        if(numCount === answerCount){
            return i;
        }
    }
}