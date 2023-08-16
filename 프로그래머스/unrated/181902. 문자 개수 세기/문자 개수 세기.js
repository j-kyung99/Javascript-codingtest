function solution(my_string) {
    const result = Array(52).fill(0);
    for(let i of my_string){
        if(i.charCodeAt() < 91) {
            result[i.charCodeAt() - 65]++;
        } else {
            result[i.charCodeAt() - 71]++;
        }
    }
    return result
}