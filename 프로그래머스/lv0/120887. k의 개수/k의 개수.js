function solution(i, j, k) {
    let count = 0;
    for(let a=i;a<=j;a++){
        if(String(a).length > 1){
            for(let b=0;b<String(a).length;b++){
                if(String(a)[b].includes(String(k))) count++;
            }
        } else {
            if(String(a).includes(String(k))) count++;
        }
    }
    return count;
}