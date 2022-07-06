const rank = (a) => {
    let answer = [1, 1, 1, 1, 1];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[i]) {
                answer[i] += 1;
            }
        }
    }
    return answer;
};
const grade = [87, 89, 92, 100, 76];
console.log(rank(grade));
