function solution(arr) {
    for(let i=0;i<=10;i++){
        if(arr.length === 2 ** i) break;
        else if(arr.length > 2 ** i) continue;
        else {
            let diff = (2 ** i) - arr.length;
            for(let j=0;j<diff;j++){
                arr.push(0)
            }
            break;
        }
    }
    return arr;
}