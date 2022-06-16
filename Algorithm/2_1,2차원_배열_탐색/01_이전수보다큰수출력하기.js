const bigNum = (a, b) => {
    let answer = [];
    let exNum = a.indexOf(b) - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[exNum] < arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
};
const arr = [7, 3, 9, 5, 6, 12];
console.log(bigNum(arr, 6)); // [7, 9, 6, 12]
