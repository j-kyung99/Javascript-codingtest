function solution(A, B) {
    if(A === B) return 0;
    A = A.split('');
    B = B.split('');
    for(let i=1;i<A.length;i++){
        let count = 0;
        A.unshift(A.pop());
        for(let j=0;j<A.length;j++){
            if(A[j] !== B[j]) break;
            else count++;
        }
        if(count === A.length) return i;
    }
    return -1;
}