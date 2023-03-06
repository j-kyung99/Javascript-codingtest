function solution(food) {
    let answer = '';
    for(let i=1;i<food.length;i++){
        if(Number(food[i])%2 === 1){
            food[i] = Number(food[i]) - 1;
        }
    }
    for(let i=1;i<food.length;i++){
        for(let j=0;j<Number(food[i]/2);j++){
            answer += i;
        }
    }
    answer += '0';
    for(let i=food.length-1;i>0;i--){
        for(let j=0;j<Number(food[i]/2);j++){
            answer += i;
        }
    }
    return answer;
}