function solution(myString) {
    myString = myString.split('x');
    while(myString.includes('')){
        myString.splice(myString.indexOf(''), 1)
    }
    return myString.sort();
}