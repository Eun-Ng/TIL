const minimum = (a: number, b: number, c: number): number => {
  let answer: number = 0;

  if (a < b) {
    answer = a;
  } else if (a > b) {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
};

console.log(minimum(2, 1, 3));
