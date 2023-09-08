function solution(arr) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j] === arr[j][i]) count++;
        }
    }
    return count === arr.length * arr[0].length ? 1 : 0;
}