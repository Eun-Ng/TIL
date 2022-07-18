/*
https://school.programmers.co.kr/learn/courses/30/lessons/81301

문제 설명
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
제한사항
1 ≤ s의 길이 ≤ 50
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

제한시간 안내
정확성 테스트 : 10초
*/

const solution = (str) => {
  // 인자 값과 비교할 배열 생성
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let answer = str;

  // 애초에 생각했던건 대체할 배열은 선언해놨으니, 인자 값을 선언한 배열 값의 단어들로 쪼갤려고 했다. 그래야 숫자로 변환이 되니깐
  // split까지는 생각해봤는데 이후 과정에서 애를 먹었다. 어차피 words의 length만큼 돌으니 항상 인덱스 값과 해당 배열의 값이 일치한다. 예를들어, zero는 인덱스 값이 0, one은 인덱스 값이 1 ... 이렇게 쭉 인덱스 값이 일치하니, 이 인덱스 값을 쓰는거 까지는 생각해냈는데 이 이후 과정에서 애를 먹었다.
  // 결국 구글링으로 join 메서드로 해결한걸 찾아봤다....
  for (let i = 0; i < words.length; i++) {
    let arr = answer.split(words[i]);
    // console.log(arr);
    answer = arr.join(i);
    // console.log('hi', answer); // <- 로그 찍히는거 쉽게 보려고 'hi' 문자열 추가
  }
  return Number(answer);
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
