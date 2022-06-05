const triangle = (a, b, c) => {
    let answer = "Yes";
    let max = 0;
    let sum = a + b + c;
    if (a < b) {
        max = b;
    }
    else {
        max = a;
    }
    if (max < c) {
        max = c;
    }
    if (sum - max <= max) {
        answer = "No";
    }
    return answer;
};
console.log(triangle(6, 7, 11));
console.log(triangle(13, 33, 17));
