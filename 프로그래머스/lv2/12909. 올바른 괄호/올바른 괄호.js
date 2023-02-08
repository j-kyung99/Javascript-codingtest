function solution(s){
    let stack = [];
    if(s.length === 1 || s[0] === ')' || s[s.length-1] === '(') return false;
    for(let i=0;i<s.length;i++){
        if(s[i] === '(') stack.push(s[i]);
        else {
            if(stack.length !== 0 && stack[stack.length-1] === '(') stack.pop();
            else return false;
        }
    }
    return stack.length === 0 ? true : false;
}