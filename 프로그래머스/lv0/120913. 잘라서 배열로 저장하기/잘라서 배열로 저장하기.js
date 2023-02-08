function solution(my_str, n) {
    var answer = [];
    let a = 0;
    let b = n;
    while(a < my_str.length){
        answer.push(my_str.slice(a, b));
        a += n;
        b += n;
    }
    return answer;
}