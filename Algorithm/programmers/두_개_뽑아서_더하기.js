/*
https://school.programmers.co.kr/learn/courses/30/lessons/68644

문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

입출력 예 설명
입출력 예 #1

2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
입출력 예 #2

2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.
*/

const solution = (num) => {
  const arr = [];

  // 값 두개를 비교해야 하기에 이중 for문 사용.
  // 값이 겹치지 않기 위해 i는 0부터 배열의 -1 자리까지 돌고, j는 i + 1번째부터 배열 끝까지 돌게 만듦
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
      // sum에 값을 더함
      let sum = num[i] + num[j];
      // 삼항연산자와 includes 메서드를 사용해, 이미 num[i] + num[j] 값이 있다면 null. 아무것도 하지않고, 값이 없다면 배열에 값을 푸쉬함
      arr.includes(num[i] + num[j]) ? null : arr.push(num[i] + num[j]);
    }
  }
  // 푸쉬된 배열을 오름차순으로 정렬
  arr.sort((a, b) => a - b);
  return arr;
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
