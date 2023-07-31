function solution(my_string, n) {
    my_string = my_string.split('');
    my_string.splice(n);
    return my_string.join('');
}