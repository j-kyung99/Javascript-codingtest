function solution(emergency) {
    let answer = [...emergency].sort((a, b) => b - a);
    return emergency.map((v) => answer.indexOf(v)+1);
}