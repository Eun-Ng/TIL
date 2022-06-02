const minimumNum = (arr) => {
    let answer = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < answer) {
            answer = arr[i];
        }
    }
    return answer;
};
const arr = [5, 3, 7, 11, 2, 16, 17];
console.log(minimumNum(arr));
