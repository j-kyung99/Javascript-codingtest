function solution(number) {
    number = String(number).split('');
    let sum = 0;
    number.map(i => sum += Number(i));
    return sum % 9;
}