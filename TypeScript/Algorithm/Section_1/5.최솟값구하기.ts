const minimumNum = (arr: number[]): number => {
  let answer: number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < answer) {
      answer = arr[i];
    }
  }
  return answer;
};

const arr = [5, 3, 7, 11, 2, 16, 17];
console.log(minimumNum(arr));

// Math 객체 사용
const minimumNum2 = (arr2: number[]): number => {
  let answer: number = Math.min(...arr2); // 스프레드 연산자로 배열 분해. 그냥 배열객체로 넘기면 안받아짐.
  return answer;
};

const arr2 = [5, 3, 7, 11, 2, 16, 17];
console.log(minimumNum2(arr2));
