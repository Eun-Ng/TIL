/*
https://school.programmers.co.kr/learn/courses/30/lessons/12910

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

제한사항
arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.

입출력 예 설명
입출력 예#1
arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2
arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3
3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
*/
const solution = (arr, divisor) => {
  const answer = [];

  // for문 스타뚜
  for (let i = 0; i < arr.length; i++) {
    // 배열 값 하나하나가 0으로 나눠진다면 빈 배열 answer 에 푸쉬
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }

  // 1차로 푸쉬된 answer에 삼항연산자를 이용해서 answer 배열값이 비어있으면 -1을 푸쉬하고,
  // 그렇지 않다면 내림차순 sorting
  answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);

  return answer;
};

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
