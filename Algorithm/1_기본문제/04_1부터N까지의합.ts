const sum = (n: number): number => {
  let answer: number = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};

console.log(sum(6));
console.log(sum(10));
