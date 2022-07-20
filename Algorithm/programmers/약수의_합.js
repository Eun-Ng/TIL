/*
https://school.programmers.co.kr/learn/courses/30/lessons/12928

약수의 합
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
*/

const solution = (n) => {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    // for문을 매개변수 n의 값과 같아질때까지 돌린 뒤
    if (n % i === 0) {
      // n값이 인덱스 값과 나눠진다면 그 인덱스 값은 해당 매개변수의 약수.
      answer += i; // answer 값에 약수를 누적해서 더함
    }
  }
  return answer;
};

console.log(solution(12));
console.log(solution(5));
