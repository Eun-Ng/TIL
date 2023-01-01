/*
https://school.programmers.co.kr/learn/courses/30/lessons/12933

문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
*/

const solution = (n) => {
  const answer = Number(
    n
      // 인자 n을 문자열화 시킴
      .toString()
      // 문자열을 쪼개서 배열화
      .split('')
      // 쪼갠 배열을 내림차순으로 정렬
      .sort((a, b) => b - a)
      // join 메서드를 통해 문자열을 합침
      .join('')
    // 최종적으로 문자열 값을 Number 메서드로 정수화
  );

  return answer;
};

console.log(solution(118372));
