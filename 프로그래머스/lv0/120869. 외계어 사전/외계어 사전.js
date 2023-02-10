function solution(spell, dic) {
    for(let i=0;i<dic.length;i++){
        const a = dic[i].split('');
        let count = 0;
        for(let j=0;j<spell.length;j++){
            a.includes(spell[j]) ? count++ : count;
        }
        if(count === spell.length) return 1;
    }
    return 2;
}