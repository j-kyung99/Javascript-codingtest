function solution(my_string, overwrite_string, s) {
    let str1 = [];
    let str2 = [];
    str1 = my_string.split('');
    str2 = overwrite_string.split('');
    for(let i=s;i<str2.length+s;i++){
        str1[i] = str2[i-s];
    }
    return str1.join('');
}