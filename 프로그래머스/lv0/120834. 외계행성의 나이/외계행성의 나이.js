function solution(age) {
    return String(age).split('').map((v) => String.fromCharCode(parseInt(v)+97)).join('');
}