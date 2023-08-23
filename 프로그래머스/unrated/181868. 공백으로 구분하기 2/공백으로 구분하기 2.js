function solution(my_string) {
    my_string = my_string.split(' ');
    while(my_string.includes('')){
        my_string.splice(my_string.indexOf(''), 1)
    }
    return my_string
}