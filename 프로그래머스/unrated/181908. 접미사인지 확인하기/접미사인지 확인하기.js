function solution(my_string, is_suffix) {
    let suf = [];
    for(let i=0;i<my_string.length;i++){
        suf.push(my_string.slice(i));
    }
    return suf.indexOf(is_suffix) === -1 ? 0 : 1
}