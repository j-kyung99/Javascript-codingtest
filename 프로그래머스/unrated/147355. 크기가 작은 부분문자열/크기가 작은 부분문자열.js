function solution(t, p) {
    var answer = 0;
    const str = [];
    for(let i=0;i<t.length-p.length+1;i++){
        let s = '';
        for(let j=i;j<p.length+i;j++){
            s += t[j];
        }
        str.push(Number(s));
    }
    for(let i=0;i<str.length;i++){
        if(Number(p) >= str[i]) answer++;
    }
    return answer;
}