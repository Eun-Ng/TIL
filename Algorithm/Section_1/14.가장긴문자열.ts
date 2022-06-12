const longStr = (a: string[]): string => {
  let answer: string = "";
  let max: number = 0;

  for (let x of a) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
};

const str6 = ["teacher", "time", "student", "beautiful", "good"];
console.log(longStr(str6)); // beautiful
