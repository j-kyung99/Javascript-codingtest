function solution(myString) {
    myString = myString.split('');
    for(let i=0;i<myString.length;i++){
        if(myString[i] === 'a' || myString[i] === 'A') myString[i] = 'A';
        else myString[i] = myString[i].toLowerCase();
    }
    return myString.join('');
}