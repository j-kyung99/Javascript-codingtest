function solution(chicken) {
    let order = 0;
    while(chicken >= 10){
        order += parseInt(chicken / 10);
        chicken = chicken % 10 + parseInt(chicken / 10);
    }
    return order;
}