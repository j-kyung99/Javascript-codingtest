function solution(picture, k) {
    const result = [];
    for(let i=0;i<picture.length;i++){
        let str = '';
        for(let j=0;j<picture[i].length;j++){
            str += picture[i][j].repeat(k);
        }
        for(let j=0;j<k;j++){
            result.push(str);
        }
    }
    return result
}