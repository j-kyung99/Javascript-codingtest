function solution(array, height) {
    let count = 0;
    array.push(height);
    array.sort((a,b) => a-b).map((v) => {
        if(v > height) count++;
    });
    return count;
}