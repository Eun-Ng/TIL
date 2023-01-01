/*
https://school.programmers.co.kr/learn/courses/30/lessons/12947

문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
*/

const solution = (x) => {
  // 정답 리턴할 변수
  let answer = true;
  // 값 저장 위한 변수
  let saving = 0;
  // 인자로 넘어온 숫자를 문자열화 시켜서 스플릿 메서드로 쪼갬
  const strX = String(x).split('');

  // for문 스타뚜. strX의 길이만큼.
  for (let i = 0; i < strX.length; i++) {
    // 돌며 추출한 각 인덱스 값을 정수화 시켜서 saving 값에 더함
    saving += Number(strX[i]);
  }
  // 삼항연산자를 이용해 인자값이 saving 값으로 나뉘면 true 반환. 아니면 false 반환. answer에 할당해 리턴
  answer = x % saving === 0 ? true : false;
  return answer;
};

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
