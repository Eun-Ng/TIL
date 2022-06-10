const allUpper = (a) => {
    let answer = "";
    for (let x of str4) {
        if (x === x.toLowerCase()) {
            answer += x.toUpperCase();
        }
        else {
            answer += x;
        }
    }
    return answer;
};
const str4 = "ItIsTimeToStudy";
console.log(allUpper(str4));
