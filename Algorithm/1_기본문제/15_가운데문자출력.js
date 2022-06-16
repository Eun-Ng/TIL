const middleStr = (a) => {
    let answer = "";
    let middle = Math.floor(a.length / 2);
    if (a.length % 2 === 1) {
        answer = a.substring(middle, middle + 1);
    }
    else {
        answer = a.substring(middle - 1, middle + 1);
    }
    return answer;
};
console.log(middleStr("study"));
console.log(middleStr("Boom"));
