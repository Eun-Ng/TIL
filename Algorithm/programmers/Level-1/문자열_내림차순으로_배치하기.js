/*
https://school.programmers.co.kr/learn/courses/30/lessons/12917

문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
*/

const solution = (str) => {
  const answer = str
    // split 연산자로 문자열 배열로 쪼갠 다음
    .split('')
    // 정렬시작
    .sort((a, b) => {
      // a가 b보다 크다면 작은 순으로 정렬해 뒤쪽으로 정렬
      if (a > b) {
        return -1;
        // 뒤에 있는 b가 a보다 크다면 앞으로 앞쪽으로 땡겨서 작은 순으로 정렬
      } else if (b > a) {
        return 1;
      }
    })
    .join('');
  return answer;
};

console.log(solution('Zbcdefg'));

/*
다른 분의 깔끔한 코드... 가독성이 아주 좋다
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
*/
