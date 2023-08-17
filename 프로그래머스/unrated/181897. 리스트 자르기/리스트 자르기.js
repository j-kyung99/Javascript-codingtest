function solution(n, slicer, num_list) {
    if(n === 1) return num_list.slice(0, slicer[1]+1);
    else if(n === 2) return num_list.slice(slicer[0],num_list.length);
    else if(n === 3) return num_list.slice(slicer[0], slicer[1]+1);
    else {
        num_list = num_list.slice(slicer[0], slicer[1]+1);
        let answer = [];
        for(let i=0;i<num_list.length;i+=slicer[2]){
            answer.push(num_list[i]);
        }
        return answer;
    }
}