function solution(sizes) {
    let width = 0;
    let height = 0;
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b) => a-b);
    }
    for(let i=0;i<sizes.length;i++){
        if(sizes[i][0] > width){
            width = sizes[i][0];
        }
        if(sizes[i][1] > height){
            height = sizes[i][1];
        }
    }
    return width * height;
}