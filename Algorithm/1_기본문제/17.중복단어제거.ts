const overlapWord = (a: string[]): string[] => {
  let answer: string[] = [];

  answer = a.filter((v, i) => {
    return a.indexOf(v) === i;
  });
  return answer;
};

const str7 = ["good", "time", "good", "time", "student"];
console.log(overlapWord(str7));
