function solution(score) {
    let sum = score.map((v) => v[0]+v[1]);
    let sort = [...sum].sort((a,b)=>b-a);
    return sum.map((v) => sort.indexOf(v)+1);
}