function solution(babbling) {
    const yes = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    for(let i=0;i<babbling.length;i++){
        yes.forEach((v) => {
            babbling[i] = babbling[i].replace(v, " ");
        })
        if(babbling[i].replaceAll(" ","").length === 0){
            answer++;
        }
    }
    return answer;
}