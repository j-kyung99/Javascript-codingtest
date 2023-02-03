function solution(my_string) {
    var str = my_string.split('').filter(a => !isNaN(a)).map(a => Number(a));
    let sum = 0;
    for(let i=0;i<str.length;i++) sum += str[i];
    return sum;
}