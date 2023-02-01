function solution(numbers, direction) {
    var answer = [];
    let n = 0;
    if(direction === 'right') {
        n = numbers.pop();
        numbers.unshift(n);
    } else {
        n = numbers.shift();
        numbers.push(n);
    }
    return numbers;
}