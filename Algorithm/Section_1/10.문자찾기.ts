const findStr = (a: string, b: string): number => {
  let answer: number = 0;

  // 1. for문
  for (let x of str2) {
    if (x === b) {
      answer += 1;
    }
  }

  // 2. split 함수. 구분자로 문자를 잘라서 배열로 반환
  // answer = a.split(b).length;
  // return answer - 1;

  return answer;
};

const str2: string = "COMPUTERPROGRAMMING";
console.log(findStr(str2, "R"));
