function solution(id_pw, db) {
    let answer = "fail";
    let tf = false;
    const [id, pw] = id_pw;
    for(let i=0;i<db.length;i++){
        if(id === db[i][0] && pw === db[i][1]) tf = true;
        if(id === db[i][0] && pw !== db[i][1]) answer = "wrong pw";
        
    }
    if(tf) answer = "login";
    return answer;
}