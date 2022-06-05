const checkCar = (day: number, arr: number[]): number => {
  let answer: number = 0;
  carArr.forEach((a: number) => {
    if (a % 10 === day) {
      answer++;
    }
  });
  return answer;
};

const carArr = [25, 23, 11, 47, 53, 17, 33];
console.log(checkCar(3, carArr));
