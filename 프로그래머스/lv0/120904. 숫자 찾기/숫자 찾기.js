function solution(num, k) {
    num = num.toString().split('');
    k = k.toString();
    return num.indexOf(k) === -1 ? -1 : num.indexOf(k)+1;
}