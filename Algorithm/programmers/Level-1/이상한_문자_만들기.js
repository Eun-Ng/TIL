/*
https://school.programmers.co.kr/learn/courses/30/lessons/12930

문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/
const solution = (str) => {
  const answer = str
    .split(' ') // 받아온 인자값을 ' ' 공백으로 쪼갠뒤
    .map(
      (a) =>
        a // map 메서드를 돌려, 각 글자별 배열로 다시 쪼갠 뒤
          .split('')
          .map((a, i) => (i % 2 === 0 ? a.toUpperCase() : a.toLowerCase())) // 그 배열에 또 map 메서드를 돌려 인덱스 값이 짝수면 대문자화, 홀수면 소문자화 시켜서
          .join('') // 나온 배열값을 join한 후
    )
    .join(' '); // 다시 한번 조인해 문자열화

  return answer;
};

console.log(solution('try hello world'));
