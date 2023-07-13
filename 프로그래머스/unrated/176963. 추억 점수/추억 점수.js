function solution(name, yearning, photo) {
    var answer = [];
    for(let i=0;i<name.length;i++){
        name[i] = [name[i],yearning[i]];
    }
    
    for(let i=0;i<photo.length;i++){
        let count = 0;
        for(let j=0;j<photo[i].length;j++){
            for(let k=0;k<name.length;k++){
                if(photo[i][j] === name[k][0]) count += name[k][1];
            }
        }
        answer.push(count);
    }
    return answer;
}