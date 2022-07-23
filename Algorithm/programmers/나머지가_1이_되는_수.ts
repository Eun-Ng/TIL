/*
https://school.programmers.co.kr/learn/courses/30/lessons/87389

문제 설명
자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

제한사항
3 ≤ n ≤ 1,000,000
*/

const solution = (n: number): number => {
  let answer: number[] | number = [];

  // for문을 0부터 n과 같거나 작아질때까지 돌림
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      // 매개변수 n값이 i 인덱스 값으로 나눴을때 1이 나온다면 우리가 찾는 수이기에
      answer.push(i); // 빈 배열에 해당값을 푸쉬
    }
  }
  answer = Math.min(...answer); // 푸쉬된 배열 중 가장 작은 값을 찾으면 끝
  return answer;
};

console.log(solution(10));
console.log(solution(12));
