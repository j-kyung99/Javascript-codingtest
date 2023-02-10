function solution(dots) {
    let p = [];
    for(let i=0;i<dots.length;i++){
        for(let j=i+1;j<dots.length;j++){
            let dx = Math.abs(dots[i][0] - dots[j][0]);
            let dy = Math.abs(dots[i][1] - dots[j][1]);
            let lean = dy/dx;
            if(p.includes(lean)) return 1;
            p.push(lean);
        }
    }
    return 0;
}