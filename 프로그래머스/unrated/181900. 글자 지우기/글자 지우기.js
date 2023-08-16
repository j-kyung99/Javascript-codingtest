function solution(my_string, indices) {
    my_string = my_string.split('')
    for(let i of indices){
        my_string.splice(i, 1, "");
    }
    return my_string.join('');
}