/*
https://school.programmers.co.kr/learn/courses/30/lessons/77884

문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/

/*
  1. 일단 매개변수의 약수값을 구해야함
  2. 약수의 개수를 알아야함
  3. 약수의 개수가 홀수이면 해당 매개변수는 마이너스, 약수의 개수가 짝수이면 해당 매개변수는 플러스
  4. 해서 누적시킨 값 도출 시키면 됨
*/
const solution = (left, right) => {
  let answer = 0;
  // i는 left 값부터 ~ right 값이랑 같아질때까지 for문을 돌림
  // 이중 for문으로 j는 0부터 i값(right 값)이랑 같아질때까지 돌림
  for (let i = left; i <= right; i++) {
    let val = [];
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) val.push(j);
      // i(left~right)값과 j(0~right)값이 나눠진다면 j값은 i값의 약수이기에 빈 배열에 j값을 푸쉬
    }
    val.length % 2 === 0 ? (answer += i) : (answer -= i); // 배열의 길이가 2로 나눠진다면 약수의 개수가 짝수이기에 플러스, 반대의 경우엔 홀수이기에 마이너스
  }
  return answer;
};

console.log(solution(13, 17));
console.log(solution(24, 27));

/*
다른 사람의 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
제곱근이 정수면 약수의 개수가 홀수다
*/
