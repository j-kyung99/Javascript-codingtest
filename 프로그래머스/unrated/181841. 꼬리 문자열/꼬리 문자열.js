function solution(str_list, ex) {
    str_list = str_list.filter(v => !v.includes(ex));
    return str_list.join('')
}