/*
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

const solution = (str, n) => {
  str.sort((a, b) => {
    // sort 메서드를 이용해 a[n]번째 요소와 b[n]번째 요소를 비교해
    if (a[n] > b[n]) {
      // a[n]이 b[n] 보다 크다면 인덱스에서 +1 하여 오름차순 정렬
      return 1;
    } else if (b[n] > a[n]) {
      // b[n]이 a[n] 보다 크다면 인덱스에서 -1 하여 내림차순 정렬
      return -1;
    } else {
      // 두 경우도 아니라면 삼항연산자를 사용해 a, b 전체값을 비교해 a가 크면 오름차순, b가 크면 내림차순 정렬 실행
      return a > b ? 1 : -1;
    }
  });
  return str;
};

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
