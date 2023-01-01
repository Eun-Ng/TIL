/*
https://school.programmers.co.kr/learn/courses/30/lessons/12934

문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/

const solution = (n) => {
  let answer = 0;

  // Math.sqrt 메서드를 이용해 제곱근을 구한뒤
  const sqrt = Math.sqrt(n);
  // 제곱근이 1로 나눠지고, 1과 같거나 큰 수라면
  if (sqrt % 1 === 0 && 1 <= sqrt) {
    // Math.pow 메서드를 사용해 제곱근 + 1에 제곱한 결과를 반환
    answer = Math.pow(sqrt + 1, 2);
  } else {
    // 이외에 경우에는 answer는 -1
    answer = -1;
  }

  return answer;
};

console.log(solution(121));
console.log(solution(3));
