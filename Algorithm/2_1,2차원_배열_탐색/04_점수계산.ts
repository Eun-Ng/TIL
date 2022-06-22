const jumsu = (a: number[]): number => {
  let answer: number = 0;
  let counter: number = 0;

  for (let x of a) {
    if (x === 1) {
      counter++;
      answer += counter;
    } else {
      counter = 0;
    }
  }

  return answer;
};

const jungdap = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(jumsu(jungdap));
