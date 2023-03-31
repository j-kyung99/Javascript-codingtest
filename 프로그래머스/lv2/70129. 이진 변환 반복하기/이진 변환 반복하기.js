function solution(s) {
    var answer = [0, 0];
    while(s !== '1'){
        s = s.split('');
        answer[0]++;
        let count = s.filter(v => v === '1').length;
        answer[1] += s.length - count;
        s = count.toString(2);
    }
    return answer;
}