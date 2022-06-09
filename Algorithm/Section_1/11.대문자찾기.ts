const findUpper = (a: string): number => {
  let answer: number = 0;

  for (let x of str3) {
    if (x === x.toUpperCase()) {
      answer += 1;
    }
  }

  return answer;
};

const str3 = "KoreaTimeGood";
console.log(findUpper(str3));
