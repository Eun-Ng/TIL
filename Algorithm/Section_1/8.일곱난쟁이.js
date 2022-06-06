// 입력값 아홉명의 난쟁이 중 키의 합이 100인 일곱난쟁이를 찾는 문제
const sevenDwarfs = (dwarfs) => {
    let answer = [];
    let sumResult = 0;
    let sum = dwarfs.reduce((a, b) => a + b, 0);
    for (let i = 0; i < dwarfs.length - 1; i++) {
        for (let j = i + 1; j < dwarfs.length; j++) {
            sumResult = sum - (dwarfs[i] + dwarfs[j]);
            if (sumResult === 100) {
                console.log(dwarfs[i], dwarfs[j]);
                dwarfs.splice(j, 1); // i를 먼저 제거하면 인덱싱이 떙겨져서 결과 값 다르게 나옴
                dwarfs.splice(i, 1);
                answer = dwarfs;
            }
        }
    }
    return answer;
};
const dwarfs = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(sevenDwarfs(dwarfs)); // [20, 7, 23, 19, 10, 8, 13]
