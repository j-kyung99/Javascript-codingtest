function solution(before, after) {
    before = before.split('');
    before.sort();
    after = after.split('');
    after.sort();
    let count = 0;
    for(let i=0;i<before.length;i++){
        if(before[i] === after[i]) count++;
    }
    if(count === before.length) return 1;
    else return 0;
}