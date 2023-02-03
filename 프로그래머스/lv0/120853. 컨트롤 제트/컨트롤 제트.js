function solution(s) {
    const a = s.split(' ');
    let sum = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] === 'Z'){
            sum -= Number(a[i-1]);
        }
        else sum += Number(a[i]);
    }
    return sum;
}