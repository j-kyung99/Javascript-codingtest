function solution(num_list, n) {
    let front = num_list.slice(n);
    let back = num_list.slice(0, n);
    return [...front, ...back];
}