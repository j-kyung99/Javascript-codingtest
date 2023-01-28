function solution(array) {
    for(let i=0;i<array.length-1;i++){
        array.sort((a,b) => a-b);
    }
    const middle = Math.floor(array.length/2);
    console.log(middle);
    return array[middle];
}