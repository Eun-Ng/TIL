const findStr = (a, b) => {
    let answer = 0;
    // 1. for문
    for (let x of str2) {
        if (x === b) {
            answer += 1;
        }
    }
    // 2. split 함수. 구분자로 문자를 잘라서 배열로 반환
    // answer = a.split(b).length;
    // return answer - 1;
    return answer;
};
const str2 = "COMPUTERPROGRAMMING";
console.log(findStr(str2, "R"));
