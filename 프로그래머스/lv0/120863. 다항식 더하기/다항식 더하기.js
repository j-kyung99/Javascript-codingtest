function solution(polynomial) {
    let countX = 0;
    let num = 0;
    let answer = '';
    polynomial = polynomial.split(' + ');
    for(let i=0;i<polynomial.length;i++){
        if(polynomial[i] === 'x'){
            countX++;
        } else if(!isNaN(Number(polynomial[i]))){
            num += Number(polynomial[i]);
        } else {
            console.log(polynomial[i].length);
            countX += Number(polynomial[i].substr(0, polynomial[i].length-1));
        }
    }
    if(countX === 0 && num === 0) return 0;
    else if(countX === 0){
        answer += num;
    }
    else if(num === 0){
        if(countX === 1){
            answer += 'x';
        }
        else {
            answer = countX + 'x';
        }
    }
    else {
        if(countX === 1){
            if(num === 0){
                answer += 'x';
            }
            else {   
                answer = 'x' + ' + ' + num;
            }
        }
        else {
            answer = countX + 'x' + ' + ' + num;
        }
    }
    return answer;
}