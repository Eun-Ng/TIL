const convertStr = (a) => {
    let answer = "";
    for (let x of a) {
        if (x === x.toUpperCase()) {
            answer += x.toLowerCase();
        }
        else if (x.toLowerCase()) {
            answer += x.toUpperCase();
        }
    }
    return answer;
};
const str5 = "StuDY";
console.log(convertStr(str5)); // sTUdy
