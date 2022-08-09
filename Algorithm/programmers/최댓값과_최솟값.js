/* https://school.programmers.co.kr/learn/courses/30/lessons/12939

문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
*/

const solution = (s) => {
  // 빈 배열 선언
  let temp = [];
  // 파라미터값을 공백으로 쪼갠 뒤, map 메서드로 정수화
  const result = s.split(' ').map((a) => Number(a));
  // 오름차순 정렬
  const arr = result.sort((b, c) => b - c);
  // 정렬된 배열의 가장 최솟값, 최댓값을 빈 배열에 푸쉬
  temp.push(arr[0], arr[arr.length - 1]);

  // join 메서드를 이용해 문자열 배열을 공백을 포함한 하나의 문자열화
  const answer = temp.join(' ');

  return answer;
};

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
