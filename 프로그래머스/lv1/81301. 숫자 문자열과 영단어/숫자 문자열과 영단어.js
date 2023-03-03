function solution(s) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let answer = s;
    for(let i=0;i<numbers.length;i++){
        let arr = answer.split(numbers[i]);
        console.log(arr);
        answer = arr.join(i);
        console.log(answer);
    }
    console.log(typeof answer);
    return Number(answer);
}