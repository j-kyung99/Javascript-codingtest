function solution(s, n) {
    var answer = '';
    s = s.split('');
    for(let i=0;i<s.length;i++){
        let ascii = s[i].charCodeAt();
        if(ascii >= 65 && ascii <= 90) {
            ascii += n;
            if(ascii > 90) ascii -= 26;
        }
        else if(ascii >= 97 && ascii <= 122){
            ascii += n;
            if(ascii > 122) ascii -= 26;
        }
        answer += String.fromCharCode(ascii);
    }
    return answer;
}