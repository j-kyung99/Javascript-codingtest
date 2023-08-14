function solution(my_string, s, e) {
    let str = my_string.substring(s, e+1).split('').reverse().join('');
    return my_string.substring(0, s) + str + my_string.substring(e + 1)
}