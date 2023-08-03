function solution(a, b) {
    let str = Number(String(a)+String(b));
    let mul = 2 * a * b;
    return Math.max(str, mul);
}