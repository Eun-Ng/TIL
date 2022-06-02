const sum = (n) => {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += i;
    }
    return answer;
};
console.log(sum(6));
console.log(sum(10));
