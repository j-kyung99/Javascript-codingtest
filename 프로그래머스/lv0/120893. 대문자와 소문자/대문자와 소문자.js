function solution(my_string) {
    my_string = [...my_string].map((a) => a.charCodeAt() >= 65 && a.charCodeAt() < 91 ? a.toLowerCase() : a.toUpperCase()).join('');
    return my_string;
}