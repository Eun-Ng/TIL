const odd = (arr3: number[]): number[] => {
  let answer: number[] = [];
  let sum: number = 0;
  let min: number = arr3[0];

  arr3.forEach((a: number) => {
    if (a / 2 !== 0) {
      sum += a;
      if (a < min) {
        min = a;
      }
    }
  });

  answer = [sum, min]; // 최대값, 최소값 배열로 할당
  return answer; // 배열 리턴
};

const arr3 = [12, 77, 38, 41, 53, 92, 85];
console.log(odd(arr3));
