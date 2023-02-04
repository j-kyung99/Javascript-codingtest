function solution(order) {
    const game = order.toString().split('');
    let count = 0;
    for(let i=0;i<game.length;i++){
        if(game[i] === '3' || game[i] === '6' || game[i] === '9') count++;
    }
    return count;
}