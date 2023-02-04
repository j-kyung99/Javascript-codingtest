function solution(array, n) {
    array.push(n);
    array.sort((a,b) => a-b);
    let num = 0;
    for(let i=0;i<array.length;i++){
        if(array[i] === n) {
            num = i;
            break;
        }
    }
    console.log(num);
    if(num === 0) return array[1];
    else if(num === array.length-1) return array[array.length-2];
    else {
       return array[num] - array[num-1] <= array[num+1] - array[num] ? array[num-1] : array[num+1];
    }
}