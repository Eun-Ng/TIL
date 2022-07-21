/*
자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

제한 조건
N의 범위 : 100,000,000 이하의 자연수
*/
function solution(n) {
  let result = '';
  let sum = 0;

  let arr = n.toString().split('').reverse();

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  result = arr
    .map((a) => {
      sum += Number(a);
      return Number(a);
    })
    .join('+');

  result += '=' + sum;

  return result;
}

console.log(solution(718253));
console.log(solution(12345));
console.log(solution(1532576));
