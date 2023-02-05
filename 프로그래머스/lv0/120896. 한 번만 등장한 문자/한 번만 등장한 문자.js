function solution(s) {
    var answer = [];
    const a = s.split('').sort();
    a.forEach((item) => {
        if(a.indexOf(item) === a.lastIndexOf(item)) answer.push(item);
    })
    return answer.join('');
}