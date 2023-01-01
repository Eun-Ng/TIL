/*
https://school.programmers.co.kr/learn/courses/30/lessons/12932

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
*/

const solution = (n) => {
  const answer = n
    // 인자값을 문자열화 시키고
    .toString()
    // 각각 쪼갠 다음
    .split('')
    // 순서를 뒤집고
    .reverse()
    // map 메서드를 이용해 각 요소를 정수화
    .map((a) => Number(a));

  return answer;
};

console.log(solution(12345));

/*
다른 사람의 풀이인데.. 신기해서 가져와봤다.
대부분의 사람들이 문자열화 시켜서 문제를 풀었는데 이 분은 숫자로 풀어냈다.

1. 빈 배열 생성
 var arr = [];

    do {
        2. 인자값에 10을 나눈 뒤 빈 배열에 푸쉬
        arr.push(n%10);
        3. Math.floor로 소수점을 버린 뒤 
        n = Math.floor(n/10);
        4. n이 0보다 커질때까지 반복
    } while (n>0);

    return arr;
*/
