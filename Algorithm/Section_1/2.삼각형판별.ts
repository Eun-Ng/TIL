const triangle = (a: number, b: number, c: number): string => {
  let answer: string = "Yes";
  let max!: number;
  let sum: number = a + b + c;

  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (max < c) {
    max = c;
  }
  if (sum - max <= max) {
    answer = "No";
  }
  return answer;
};

console.log(triangle(6, 7, 11));
console.log(triangle(13, 33, 17));
