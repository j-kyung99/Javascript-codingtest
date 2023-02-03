function solution(n) {
    const div = [];
    let num = 2;
    while(n !== 1){
        if(n%num === 0){
            div.push(num);
            n /= num;
            num = 2;
        }
        else num += 1;
    }
    return Array.from(new Set(div));
}