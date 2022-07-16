/*
https://school.programmers.co.kr/learn/courses/30/lessons/12935

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/

const solution = (arr) => {
  // 1. 스프레드 연산자로 배열을 벗겨낸 뒤
  // 2. Math.min으로 최솟값을 구하고
  // 3. indexOf로 해당 최솟값의 인덱스 값을 구한 뒤
  // 4. splice 메서드로 해당 최솟값부터 1번째 인덱스 값만 자름
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length <= 1) arr.push(-1);
  // 5. 만약 배열의 길이가 1이하라면 배열에 -1을 푸쉬
  return arr;
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
