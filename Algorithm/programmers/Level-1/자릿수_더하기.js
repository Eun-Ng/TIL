/*
https://school.programmers.co.kr/learn/courses/30/lessons/12931
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
*/

const solution = (num) => {
  let answer = 0;

  // 스프레드 연산자를 사용하기 위해 문자열화
  const numArr = num.toString();
  // 스프레드 연산자로 배열 분해
  const numStr = [...numArr];
  // ['1', '2', '3'], ['9', '8', '7']

  // for문을 돌려
  for (let i = 0; i < numStr.length; i++) {
    answer += Number(numStr[i]); // 분해된 각 요소를 정수화 시키고 answer에 더하기
  }

  return answer;
};

console.log(solution(123));
console.log(solution(987));
