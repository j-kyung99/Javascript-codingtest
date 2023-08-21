function solution(arr) {
    let count = 0;
    let prev = arr;
    while(1){
        let pres = prev.map(a => {
            if(a >= 50 && a % 2 === 0) return a/2;
            else if(a < 50 && a % 2 === 1) return a*2+1;
            else return a;
        })
        let same = prev.every((a, i) => a === pres[i]);
        if(same) break;
        count++;
        prev = pres;
    }
    return count;
}