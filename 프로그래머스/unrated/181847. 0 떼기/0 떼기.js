function solution(n_str) {
    if(n_str[0] === '0'){
        let count = 0;
        for(let i=0;i<n_str.length;i++){
            if(n_str[i] !== '0') break;
            else if(n_str[i] === '0') count++;
        }
        n_str = n_str.slice(count);
    }
    return n_str;
}