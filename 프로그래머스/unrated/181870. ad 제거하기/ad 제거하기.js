function solution(strArr) {
    for(let i=0;i<strArr.length;i++){
        if(strArr[i].includes("ad")){
            strArr.splice(i, 1)
            i = 0;
        }
    }
    return strArr;
}