function solution(s) {
    var a = [];
    var b = [];
    var answer = '';
    a = s.split(' ');
    for(let i=0;i<a.length;i++){
        b.push(Number(a[i]));
    }
    b.sort((a, b) => a - b);
    answer = b[0] + ' ' + b[b.length - 1];
    return answer;
}