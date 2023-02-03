function solution(my_string) {
    const str = my_string.split('').filter(a => !isNaN(a)).reduce((acc, cur) => parseInt(acc) + parseInt(cur));
    return str;
}