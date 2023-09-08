function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    let num = row > col ? row : col;
    if(row > col){
        for(let i=0;i<row;i++){
            for(let j=col;j<row;j++){
                arr[i].push(0);
            }
        }
    } else {
        for(let i=row;i<col;i++){
            arr.push([])
            for(let j=0;j<col;j++){
                arr[i].push(0);
            }
        }
    }
    return arr;
}