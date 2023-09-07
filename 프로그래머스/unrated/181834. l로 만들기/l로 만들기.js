function solution(myString) {
    let result = '';
    for(let i of myString){
        if(i < 'l') {
            result += 'l'
        } else result += i;
    }
    return result;
}