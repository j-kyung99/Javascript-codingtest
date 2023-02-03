function solution(my_string) {
    return my_string.split('').filter(a => !isNaN(a)).map(a => Number(a)).sort((a,b) => a-b);
}