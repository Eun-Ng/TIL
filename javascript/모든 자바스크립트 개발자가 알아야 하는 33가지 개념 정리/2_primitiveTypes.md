## 원시자료형(Primitive Types)

Javascript에서 `원시자료형(Primitive)`이란 객체가 아니면서 메서드도 가지지 않는 데이터 입니다.  
대부분의 경우, 원시 값은 언어 구현체의 가장 저급한(Low Level) 단계에서 나타납니다.  
모든 원시 값은 불변하여 변형할 수 없습니다.  
원시 값 자체와, 원시값을 할당한 변수를 혼동하지 않는 것이 중요합니다.  
변수는 새로운 값을 다시 할당할 수 있지만, 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없습니다.

<예제1>  
다음 예제는 원시 값이 불변함을 이해할 때 도움이 됩니다.

```Javascript
// 문자열 메서드는 문자열을 변형하지 않음
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// 배열 메소드는 배열을 변형함
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// 할당은 원시 값에 새로운 값을 부여 (변형이 아님)
bar = bar.toUpperCase(); // BAZ
Copy to Clipboard
원시 값을 교체할 수는 있지만, 직접 변형할 수는 없습니다.
```

<예제2>

```Javascript
// 원시 값
let foo = 5;

// 원시 값을 변경해야 하는 함수 정의
function addTwo(num) {
  num += 2;
}
// 같은 작업을 시도하는 다른 함수
function addTwo_v2(foo) {
  foo += 2;
}

// 원시 값을 인수로 전달해 첫 번째 함수를 호출
addTwo(foo);
// 현재 원시 값 반환
console.log(foo); // 5

// 두 번째 함수로 다시 시도
addTwo_v2(foo);
console.log(foo); // 5
```

### 1. String

Javascript의 `String` 타입은 텍스트 데이터를 나타낼 때 사용합니다.  
`String`은 16비트 부호 없는 정수 값 "요소"로 구성된 집합으로, 각각의 요소가 `String`의 한 자리를 차지합니다.  
첫 번째 요소는 인덱스 0에, 그 다음 요소는 인덱스 1, 그 다음은 2, ... 이런식으로 진행됩니다.  
`String`의 길이는 그 안의 요소 수와 같습니다.  
`String`의 특징으로는

- 작은따옴표(''), 큰따옴표(""), 템플릿 리터럴(``)으로 문자열을 할당할 수 있다.
- 특히, ES6부터 도입된 템플릿 리터럴을 이용하면, 줄바꿈이나 공백이 모두 적용된다.

### 2. Number

Javascript는 `Number`와 `BigInt` 두 가지의 내장 숫자 타입을 가지고 있습니다.  
`Number`는 64비트 부동소수점 형식으로, 모든 숫자를 실수로 처리합니다.

```Javascript
var num_01 = 10; // 정수도 실수로 처리한다.
var num_02 = -10.05; // 실수
var num_03 = 10 / 0; // +Infinity
var num_04 = 10 / -0; // -Infinity
var num_05 = 1 * 'str'; // NaN
console.log(typeof num_01); // number
```

### 3. BigInt

`BigInt`는 `Number`의 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.

`BigInt`와 `Number`는 어떤 면에서 비슷하지만 중요한 차이점이 있습니다.  
예컨대 `BigInt`는 내장 `Math` 객체의 메서드와 함께 사용할 수 없고, 연산에서 `Number`와 혼합해 사용할 수 없습니다.  
따라서 먼저 같은 자료형으로 변환해야 합니다.  
그러나, `BigInt`가 `Number`로 바뀌면 정확성을 잃을 수 있으니 주의해야 합니다.  
`BigInt`는 정수 리터럴의 뒤에 `n`을 붙이거나`(10n)` 함수 `BigInt()`를 호출해 생성할 수 있습니다.

```Javascript
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt('9007199254740991');
// ↪ 9007199254740991n

const hugeHex = BigInt('0x1fffffffffffff');
// ↪ 9007199254740991n

const hugeBin = BigInt(
  '0b11111111111111111111111111111111111111111111111111111'
);
// ↪ 9007199254740991n
```

> +, \*, -, \*\*, % 연산자를 Number에 사용하듯 BigInt에서도 사용할 수 있습니다. BigInt는 Number와 엄격하게 같지는 않지만 유사합니다.

`BigInt`는 `if, ||, &&, Boolean, !`처럼 불리언 변환이 발생하는 곳에서는 `Number`처럼 동작합니다.  
`BigInt`는 `Number`와 혼합해 연산할 수 없으며, 이때 `TypeError`가 발생합니다.

### 4. Boolean

![2_primitiveTypes](./images/2_primitiveTypes.png)

컴퓨터 과학에서 `Boolean` 타입은 논리적인 데이터 유형입니다.  
`Boolean`은 `참(true)` 혹은 `거짓(false)` 값만을 가질 수 있습니다.  
Javascript에서 `Boolean`의 조건은 어떤 코드 부문이 실행되어야 할 지(예를 들어 if 절 안에서) 또는 어떤 코드 부문을 반복해야 할지(예를 들어 for 문 안에서) 결정하는 데 쓰입니다.  
이처럼 `Boolean`타입은 주로 조건문에 자주 사용하며 **0, -0, null, false, NaN, undefined, 빈 문자열 ("")은 false**로 간주됩니다.  
문자열 `false`를 포함한 그 외 모든 다른 값은 초기값을 `true`로 설정합니다.

아래는 `Boolean`이 쓰일 수 있는 예시를 보여주는 유사코드(실행 가능한 코드가 아님)입니다.

```Javascript
**_Javascript if Statement_**
if(boolean conditional) {
//coding
}

if(true) {
console.log("boolean conditional resolved to true");
} else {
console.log("boolean conditional resolved to false");
}


**_Javascript for Loop_**
for(control variable; boolean conditional; counter) {
//coding
}

for(var i=0; i<4; i++) {
console.log("I print only when the boolean conditional is true");
}
```

### 5. Symbol

심볼은 ES6에서 새롭게 추가된 타입으로 변경 불가능한 원시 타입의 값이다.  
심볼은 주로 **이름의 충돌 위험이 없는 유일한 객체의 Property Key를 만들기 위해 사용**합니다.

```Javascript
// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

### 6. undefined

선언 이후 값을 할당하지 않은 변수는 `undefined` 값으로 초기화 됩니다.  
**어떤 변수를 만들고 그 값을 정의해주지 않았을때나 존재하지 않는 객체 프로퍼티**에 접근할 경우 `undefined`가 반환됩니다.

```Javascript
var x; // 값을 할당하지 않고 변수 선언

console.log("x's value is", x); // "x's value is undefined" 출력
```

### 7. null

`null`은 **개발자가 의도적으로 변수에 값이 없다는 것을 명시할 때 사용**합니다.  
Javascript는 대소문자를 구별하므로 `null`은 `Null, NULL` 등과 다릅니다.

**null 사용 시, 주의할 점**
타입을 나타내는 문자열을 반환하는 `typeof` 연산자로 `null` 값을 연산해보면 `null`이 아닌 `object` 값이 나옵니다.  
이는 Javascript 초기 설계상의 오류입니다.

```Javascript
var foo = null;
console.log(typeof foo); // object
```

따라서 `null` 타입을 확인할 때는 `typeof` 연산자 대신 일치 연산자(===)를 사용해야 합니다.

```Javascript
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null); // true
```

참고자료:

- https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-Javascript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part.2
