## 원시 자료형(Primitive Types)

자바스크립트에서 원시 자료형(primitive)이란 객체가 아니면서 메서드도 가지지 않는 데이터. 원시 자료형에는 7 종류가 있음.
대부분의 경우, 원시 값은 언어 구현체의 가장 저급한(low level) 단계에서 나타남.
모든 원시 값은 불변하여 변형할 수 없음. 원시 값 자체와, 원시값을 할당한 변수를 혼동하지 않는 것이 중요함. 변수는 새로운 값을 다시 할당할 수 있지만, 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없음.

<예제1> <br />
다음 예제는 원시 값이 불변함을 이해할 때 도움이 됨.

```javascript
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
원시 값을 교체할 수는 있지만, 직접 변형할 수는 없음.
```

<예제2>

```javascript
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

### javascript에서의 원시 wrapper 객체

null과 undefined 를 제외하고, 모든 원시 값은 원시 값을 wrapping 객체를 갖음.

문자열 원시 값을 위한 String 객체.
숫자 원시 값을 위한 Number 객체.
빅인트 원시 값을 위한 BigInt 객체.
불리언 원시 값을 위한 Boolean 객체.
심볼 원시 값을 위한 Symbol 객체.
wrapper 객체의 valueOf() 메서드는 원시 값을 반환합니다.

### String

JavaScript의 String 타입은 텍스트 데이터를 나타낼 때 사용함. String은 16비트 부호 없는 정수 값 "요소"로 구성된 집합으로, 각각의 요소가 String의 한 자리를 차지함. 첫 번째 요소는 인덱스 0에, 그 다음 요소는 인덱스 1, 그 다음은 2, ... 이런식으로. String의 길이는 그 안의 요소 수와 같음.

C 언어와 같은 일부 프로그래밍 언어와 달리 JavaScript 문자열은 불변함. 즉 문자열을 생성한 후 바꾸는 것은 불가능함.

그러나 원본 문자열을 사용해 새로운 문자열을 생성하는 것은 가능함. 예를 들어,

- 원본 문자열에서 각각의 문자를 선택하거나 String.substr()을 사용해 생성한 부분문자열
- 연결 연산자(+)를 사용하거나 String.concat()을 사용해 두 개의 문자열을 합친 결과물

"문자열의 타입화"를 조심하라!
문자열을 사용해 복잡한 데이터를 표현하는 것이 매력적으로 보일지도 모르고, 단기적으로는 다음과 같은 장점이 있음.

- 연결 연산자를 통해 복잡한 문자열을 쉽게 만들 수 있음.
- 문자열은 디버깅이 쉬움. (출력 내용이 항상 문자열의 값과 동일)
- 문자열은 많은 API(입력 칸 (en-US), 로컬 스토리지 값, responseText와 함께 사용하는 XMLHttpRequest 등등)의 공통 분모임.

규칙만 잘 정한다면 어떤 자료구조라도 문자열로 표현할 수 있음. 그러나 그게 좋은 방법이 되는 것은 아님. 예컨대, 구분자를 사용하면 (물론 JavaScript 배열이 더 적합하겠지만) 문자열로 리스트를 흉내낼 수도 있음. 그러나 구분자를 리스트의 요소로 사용하는 순간 리스트가 망가짐. 이제 구분자를 구분하기 위해 이스케이프 문자를 선택하고, 등등... 이 모든 것이 각자의 규칙을 필요로 하고 불필요한 유지보수 부담이 있음.

문자열은 텍스트 데이터에만 사용. 복잡한 데이터를 표현해야 할 땐 문자열을 파싱해서 적합한 추상화로 덮으셈.

### Number

ECMAScript는 Number와 BigInt 두 가지의 내장 숫자 타입을 가지고 있음.

Number 타입은 배정밀도 64비트 이진 형식 IEEE 754 값(-(2^53 − 1)부터 2^53 − 1까지의 수)임. Number 타입은 부동소수점 숫자 외에도 +Infinity, -Infinity, NaN("Not a Number") 세 개의 상징적인 값을 가짐.

±Infinity 범위 내에서 가능한 가장 크거나 작은 수를 확인하려면 Number.MAX_VALUE와 Number.MIN_VALUE 상수를 사용할 수 있음.

Number 는 37이나 -9.25와 같은 숫자를 표현하고 다룰 때 사용하는 원시 래퍼 객체.
Number 생성자는 숫자를 다루기 위해 상수와 메소드를 가지고 있음. 다른 타입의 값은 Number() 함수를 사용하여 숫자로 바꿀 수 있음.

JavaScript Number 타입은 Java 혹은 C#의 double 타입처럼 IEEE 754 64비트 바이너리 배정 밀도 값. 즉, 분수 값을 나타낼 수 있지만 저장할 수 있는 값에는 몇 가지 제한이 있습니다. Number는 소수점 이하 17자리 정도만 유지하며 산술은 반올림의 대상이 됨. Number가 가질 수 있는 가장 큰 값은 1.8E308임. 그보다 더 큰 값은 특별한 Number 상수인 Infinity으로 대체됨.

JavaScript 코드에서 37과 같은 숫자 리터럴은 정수가 아니라 부동 소수점 값. 일상적으로 흔히 사용되는 별도의 정수형은 없음. (JavaScript에는 이제 BigInt 타입이 있지만 일상적인 사용을 위해 Number를 대체하도록 설계되지 않았음. 37은 여전히 Number일 뿐, BigInt가 아님.)

Number는 0b101, 0o13, 0x0A와 같은 리터럴 형식으로 표현될 수도 있음.

- 설명
  Number(value)처럼 함수로 사용하면 문자열이나 다른 값을 Number 타입으로 변환합니다. 만약 만약 인수를 숫자로 변환할 수 없으면 NaN을 리턴합니다.

- 리터럴 구문

```javascript
123; // 백 이십 삼
123.0; // 동일
123 === 123.0; // 참
```

- 함수 구문

```javascript
Number('123'); // 숫자 123을 반환
Number('123') === 123; // 참

Number('unicorn'); // NaN
Number(undefined); // NaN
```

### BigInt

BigInt 타입은 임의 정밀도로 정수를 나타낼 수 있는 JavaScript 숫자 원시 값. BigInt를 Number의 안전 한계를 넘어서는 큰 정수도 안전하게 저장하고 연산할 수 있음.

BigInt는 정수 끝에 n을 추가하거나 생성자를 호출해 생성할 수 있음.

Number의 안전 한계는 Number.MAX_SAFE_INTEGER로 알아볼 수 있음. BigInt의 도입 이후로는 이 한계를 넘는 숫자에 대해 계산이 가능함.

다음 예제는 Number.MAX_SAFE_INTEGER 밖으로 나가는 정수에서도 예상된 값을 반환하는 것을 보임.

```javascript
> const x = 2n ** 53n;
> 9007199254740992n
> const y = x + 1n;
> 9007199254740993n
```

> +, \*, -, \*\*, % 연산자를 Number에 사용하듯 BigInt에서도 사용할 수 있습니다. BigInt는 Number와 엄격하게 같지는 않지만 유사.

BigInt는 if, ||, &&, Boolean, !처럼 불리언 변환이 발생하는 곳에서는 Number처럼 동작함.

BigInt는 Number와 혼합해 연산할 수 없으며, 이때 TypeError가 발생함.

### Boolean

컴퓨터 과학에서, 불린(boolean)은 논리적인 데이터 유형이다. 불린은 참(true) 혹은 거짓(false) 값만을 가질 수 있다. 자바스크립트에서 불린 조건은 어떤 코드 부문이 실행되어야 할 지(예를 들어 if 절 안에서) 또는 어떤 코드 부문을 반복해야 할지(예를 들어 for 문 안에서) 결정하는 데 쓰인다.

아래는 불린이 쓰일 수 있는 예시를 보여주는 유사코드이다(실행 가능한 코드가 아니다).

```javascript
**_JavaScript if Statement_**
if(boolean conditional) {
//coding
}

if(true) {
console.log("boolean conditional resolved to true");
} else {
console.log("boolean conditional resolved to false");
}


**_JavaScript for Loop_**
for(control variable; boolean conditional; counter) {
//coding
}

for(var i=0; i<4; i++) {
console.log("I print only when the boolean conditional is true");
}
```

### undefined

undefined는 원시값으로, 선언한 후 값을 할당하지 않은 변수 혹은 값이 주어지지 않은 인수에 자동으로 할당됩니다.

```javascript
var x; // 값을 할당하지 않고 변수 선언

console.log("x's value is", x); // "x's value is undefined" 출력
```

### Symbol

심볼은 클래스와 유사함.

"심볼" 데이터 형식은 값으로 익명의 객체 속성(object property)을 만들 수 있는 특성을 가진 원시 데이터 형식(primitive data type)임. 이 데이터 형식은 클래스나 객체 형식(object type)의 내부에서만 접근할 수 있도록 전용(private) 객체 속성의 키(key)로 사용됨. 예를 들어, 심볼 형식으로 된 키는 자바스크립트의 다양한 내장(built-in) 객체 안에 존재함. 사용자 지정 클래스(custom classes) 역시 이러한 방식으로 전용 멤버를 만들 수 있음. 심볼 데이터 형식은 고도로 특화된 용도로 쓰이며, 범용성은 현저히 떨어짐.

"심볼" 데이터 형식의 값은 "심볼 값(symbol value)"라고도 부름. 자바스크립트 런타임 환경 내에서 심볼 값은 Symbol() 함수를 호출하여 생성할 수 있는데, 이 함수는 동적으로 익명의 고유한 값을 만들어냄. 심볼은 객체 속성(object property)로 사용될 수 있음.

심볼은 Symbol 함수를 호출함으로써 생성할 수 있다. 이때 생성되는 심볼은 변경이 불가능한 원시 값이다. Symbol 함수를 호출할 때 인자로 전달하는 문자열 값은 생성될 심볼에 대한 일종의 설명문(Description)으로, 오직 디버깅의 용도로만 사용된다. 즉, 뒤에서 설명할 심볼의 키와는 완전히 다른 것으로, console.log() 등을 이용한 디버깅 시에 각 심볼을 구분하기 위한 용도로 사용이 된다.

```javascript
// Create symbols
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('bar');

// Print symbols (use the description that was specified when calling Symbol function)
console.log(sym1); // Symbol()
console.log(sym2); // Symbol(foo)
console.log(sym3); // Symbol(bar)

// Check type of symbol
console.log(typeof sym1); // symbol
console.log(typeof sym2); // symbol
console.log(typeof sym3); // symbol
```

한편, Symbol 함수를 호출하면 매번 새로운(고유한) 심볼이 생성된다. 일치 연산자(===)를 통해 이를 확인해 보자.

```javascript
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1); // true

console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false
```

그런데 심볼 타입에는 특이한 점이 하나 있다. 그것은 바로 Number, String, Boolean 타입과 달리 new 연산자를 이용한 래퍼 객체의 생성이 불가능하다는 점이다. new 연산자를 이용하여 래퍼 객체를 생성하려고 하면 TypeError가 발생한다. new 연산자를 이용할 수 없다는 것은 곧 Symbol 함수를 생성자로 사용할 수 없음을 의미한다.

```javascript
const sym = new Symbol(); // Uncaught TypeError: Symbol is not a constructor
```

Number, String, Boolean 타입의 경우 new 연산자를 이용한 래퍼 객체의 생성이 가능하다. 이렇게 생성되는 래퍼 객체는 해당 타입의 원시 값을 저장하고 있고, 유용한 몇몇 메소드들을 가지고 있다. 만약 new 연산자를 이용하지 않고 단순히 Number, String, Boolean 함수를 호출하기만 하면 해당 타입의 원시 값이 생성되기만 하고 래퍼 객체는 생성되지 않는다. 참고로, Array 함수의 경우에는 단순히 함수를 호출하기만 하든 new 연산자를 이용하여 생성자로서 호출하든 결과는 같다.

그러면 이렇게 생성된 심볼은 어디에 쓰일까? 결론부터 얘기하자면, 일반적으로 심볼은 객체의 프로퍼티 키로 사용된다. 프로퍼티 키란 곧 해당 프로퍼티의 값에 접근하고자 할 때 사용하는 이름이다. JavaScript에서 객체의 프로퍼티 키는 대개 문자열 값이다. 숫자로 쓰는 것도 사실은 문자열이다(내부적으로 문자열로 변환됨).

```javascript
const obj = {};

obj.propertyKey1 = 'propertyValue1';
obj['propertyKey2'] = 'propertyValue2';

obj[3] = 'propertyValue3'; // obj['3'] = 'propertyValue3'으로 변환

console.log(obj); // {propertyKey1: 'propertyValue1', propertyKey2: 'propertyValue2', 3: 'propertyValue3'}
```

그런데 문자열 값 대신 심볼도 프로퍼티 키로 사용될 수 있다는 것이다. 이 경우, 기본적으로 심볼은 고유하기 때문에 심볼을 키로 갖는 프로퍼티는 다른 어떤 프로퍼티와도 충돌하지 않을 것이다.

```javascript
const obj = {};

const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');

obj[sym1] = 'propertyValue1';
obj[sym2] = 'propertyValue2';
obj[sym3] = 'propertyValue3'; // no conflict with sym2

console.log(obj); // {Symbol(): 'propertyValue1', Symbol(foo): 'propertyValue2', Symbol(foo): 'propertyValue3'}

console.log(obj[sym1]); // propertyValue1
console.log(obj[sym2]); // propertyValue2
console.log(obj[sym3]); // propertyValue3
```

출처: https://it-eldorado.tistory.com/149

### null

컴퓨터 과학에서 null 값은 일반적으로 존재하지 않거나 유효하지 않은 object 또는 주소를 의도적으로 가리키는 참조를 나타냄. null참조의 의미는 언어의 구현에 따라 다양함.

null은 동작이 원시적으로 보이기 때문에 primitive values 중 하나로 표시됨.

그러나 특정 경우에, null 은 처음 봤던것 만큼 "원시적"이지 않다. 모든 객체는 null 값으로 부터 파생되며 따라서 typeof 연산자는 아래의 코드에서 object를 반환함.

```javascript
typeof null === 'object'; // true
```
