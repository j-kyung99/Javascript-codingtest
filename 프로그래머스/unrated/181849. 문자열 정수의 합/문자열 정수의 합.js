function solution(num_str) {
    let sum = 0;
    num_str = num_str.split('');
    for(let i=0;i<num_str.length;i++){
        sum += +num_str[i];
    }
    return sum;
}