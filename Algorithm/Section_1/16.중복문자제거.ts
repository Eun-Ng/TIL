const overlapStr = (a: string): string => {
  let answer: string = "";

  for (let i = 0; i < a.length; i++) {
    // console.log(a[i], i, a.indexOf(a[i]));
    if (a.indexOf(a[i]) === i) {
      answer += a[i];
    }
  }

  return answer;
};

console.log(overlapStr("ksekkset"));
