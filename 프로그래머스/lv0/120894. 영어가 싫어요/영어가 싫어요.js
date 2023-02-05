function solution(numbers) {
    const n = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var a = [];
    for(let i=0;i<n.length;i++){
        numbers = numbers.split(n[i]).join(i);
    }
    return parseInt(numbers);
}