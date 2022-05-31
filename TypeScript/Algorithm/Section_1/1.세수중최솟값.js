const minimum = (a, b, c) => {
    let answer;
    if (a < b) {
        answer = a;
    }
    else if (a > b) {
        answer = b;
    }
    if (c < answer) {
        answer = c;
    }
    return answer;
};
console.log(minimum(2, 1, 3));
