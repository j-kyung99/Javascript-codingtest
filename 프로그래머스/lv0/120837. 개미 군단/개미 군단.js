function solution(hp) {
    var answer = 0;
    if(hp%5 >= 0) {
        answer += Math.floor(hp/5);
        hp = hp%5;
    }
    console.log(answer, hp);
    if(hp%3 >= 0){
        answer += Math.floor(hp/3);
        hp = hp%3;
    }
    return answer+hp;
}