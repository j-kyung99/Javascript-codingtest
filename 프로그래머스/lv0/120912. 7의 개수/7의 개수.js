function solution(array) {
    var count = 0;
    array = array.join('').split('').map((a) => {
        if(a === '7') count++;
    });
    return count;
}