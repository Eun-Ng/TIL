const converting = (a: string): string => {
  let answer: string = "";
  // 1. for of
  // for (let x of a) {
  //   if (x === "A") {
  //     answer += "#";
  //   } else {
  //     answer += x;
  //   }
  // }

  // 2. replace
  answer = a.replace(/A/g, "#");
  return answer;
};

const str = "BANANA";
console.log(converting(str)); // B#N#N#
