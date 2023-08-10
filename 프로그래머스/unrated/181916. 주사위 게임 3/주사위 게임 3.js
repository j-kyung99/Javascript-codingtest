function solution(a, b, c, d) {
    let arr = [a, b, c, d];
    let min = Math.min(a, b, c, d);
    let max = Math.max(a, b, c, d);
    let minCount = 0;
    let maxCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === min) minCount++;
        if(arr[i] === max) maxCount++;
    }
    if(minCount === 4 && maxCount === 4) return 1111 * max;
    if(minCount === 3 && maxCount === 1) return (10 * min + max) ** 2;
    if(maxCount === 3 && minCount === 1) return (10 * max + min) ** 2;
    if(maxCount === 2 && minCount === 2) return (min + max) * Math.abs(max - min)
    
    if(a === b) return c * d;
    if(a === c) return b * d;
    if(a === d) return b * c;
    if(b === c) return a * d;
    if(b === d) return a * c;
    if(c === d) return a * b;
    
    if(minCount === 1 && maxCount === 1) return min;
} 