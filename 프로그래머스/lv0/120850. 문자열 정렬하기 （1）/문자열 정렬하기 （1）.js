function solution(my_string) {
    return my_string.split('').filter(a => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(a) ? true : false).map(a => Number(a)).sort((a,b) => a-b);
}