const pencil = (n: number): number => {
  let answer: number = 0;
  // answer = Math.ceil(n / 12); // 간단한 방법

  if (n / 12 === 0) {
    answer = n / 12;
  } else if (n / 12 >= 1) {
    answer = Math.floor(n / 12 + 1);
  }

  return answer;
};

console.log(pencil(25));
console.log(pencil(178));
