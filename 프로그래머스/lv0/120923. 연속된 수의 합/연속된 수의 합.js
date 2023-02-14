function solution(num, total) {
    const mid = parseInt(total / num)
    let idx, dis;
    let answer = new Array(num)
    if (num % 2 === 1) {
        idx = parseInt(num / 2)
    } else {
        idx = parseInt(num / 2) -1
    }
    answer[idx] = mid;
    for (let i = 0; i < num; i++) {
        if (i > idx) {
            dis = i - idx
            answer[i] = mid + dis
        } else if ( i === idx) {
            continue
        } else {
            dis = idx - i
            answer[i] = mid - dis
        }
    }
    return answer
}
