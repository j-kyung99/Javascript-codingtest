function solution(rank, attendance) {
    for(let i=0;i<rank.length;i++){
        rank[i] = [i, rank[i]];
    }
    for(let i=0;i<rank.length;i++){
        if(attendance[i] === false){
            rank.splice(i, 1, 0);
        }
    }
    rank = rank.filter(v => v !== 0);
    rank.sort((a,b) => a[1] - b[1] );
    return rank[0][0] * 10000 + rank[1][0] * 100 + rank[2][0];
}