/*
https://school.programmers.co.kr/learn/courses/30/lessons/12922

문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.
*/
const solution = (n) => {
  let answer = '';

  // '수박' 문자열을 인자 값인 n번 만큼 반복.
  // 그 다음 0번째부터 n번째까지 잘라서 쓰면 끝.
  answer = '수박'.repeat(n).slice(0, n);

  return answer;
};

console.log(solution(3));
console.log(solution(10));
