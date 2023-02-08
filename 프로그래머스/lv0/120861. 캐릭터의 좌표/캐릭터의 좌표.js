function solution(keyinput, board) {
    let minX = parseInt((board[0]/2)*(-1));
    let maxX = parseInt(board[0]/2);
    let minY = parseInt((board[1]/2)*(-1));
    let maxY = parseInt(board[1]/2);
    let coor = [0, 0];
    for(let i=0;i<keyinput.length;i++){
        if(keyinput[i] === "left"){
            if(coor[0] <= minX) continue;
            coor[0] -= 1;
        } else if(keyinput[i] === "right"){
            if(coor[0] >= maxX) continue;
            coor[0] += 1;
        } else if(keyinput[i] === "up"){
            if(coor[1] >= maxY) continue;
            coor[1] += 1;
        } else {
            if(coor[1] <= minY) continue;
            coor[1] -= 1;
        }
    }
    return coor;
}