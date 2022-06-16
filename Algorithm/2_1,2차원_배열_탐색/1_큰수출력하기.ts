const bigNum = (a: number[], b: number): number[] => {
  let answer: number[] = [];
  let exNum: number = a.indexOf(b) - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[exNum] < arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
};

const arr = [7, 3, 9, 5, 6, 12];
console.log(bigNum(arr, 6));
