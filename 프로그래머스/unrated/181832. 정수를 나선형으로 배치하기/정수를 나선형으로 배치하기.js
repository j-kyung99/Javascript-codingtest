function solution(n) {
    const arr = []
    for(let i = 0 ; i < n ; i ++) arr.push([])
    
    let increaseNum = 1
    let startRow = 0
    let startCol = 0
    let endRow = n-1
    let endCol = n-1
    
    while(startRow <= endRow && startCol <= endCol) {
        
        for(let i = startCol ; i <= endCol ; i ++) {
            arr[startRow][i] = increaseNum++
        }
        startRow++
        
        for(let i = startRow ; i <= endRow ; i ++) {
            arr[i][endCol] = increaseNum++
        }
        endCol--
        
        for(let i = endCol ; i >= startCol ; i --) {
            arr[endRow][i] = increaseNum++
        }
        endRow--
        
        for(let i = endRow ; i >= startRow ; i --) {
            arr[i][startCol] = increaseNum++
        }
        startCol++
    }
    return arr
}