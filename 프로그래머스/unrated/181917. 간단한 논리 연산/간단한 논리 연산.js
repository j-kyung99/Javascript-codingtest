function solution(x1, x2, x3, x4) {
    let a1 = false;
    let a2 = false;
    if(x1 === true || x2 === true) {
        a1 = true;
    } else a1 = false;
    if(x3 === true || x4 === true) {
        a2 = true;
    } else a2 = false;
    if(a1 === true && a2 === true) return true;
    else return false;
}