## 암시적 형변환(Implicit Coercion)

Javascript의 암시적 형변환은 정해지지 않은 값 유형을 예상되는 유형으로 강제 변환하려는 Javascript의 성질이다.
이로 인해 사용자는 숫자 값을 넘겨야 하는 곳에 문자열을 넣을 수도 있고, 문자열을 넣어야 하는 곳에 객체를 넘기는 실수를 할 수도 있다.
이는 Javascript의 주요 기능이지만, 가장 피해야 할 기능이다.
Javascript는 다른 언어와 달리 타입에 굉장히 유연하다.

```javascript
3 * '3'; // 9
1 + '2' + 1; // 121

true + true; // 2
10 - true; // 9

const foo = {
  valueOf: () => 2
};
3 + foo; // 5
4 * foo; // 8

const bar = {
  toString: () => ' promise is a boy :)'
};
1 + bar; // "1 promise is a boy :)"

4 * []; // 0
4 * [2]; // 8
4 + [2]; // "42"
4 + [1, 2]; // "41,2"
4 * [1, 2]; // NaN

'string' ? 4 : 1; // 4
undefined ? 4 : 1; // 1
```

### 숫자 표현식에서 숫자가 아닌 값

**String(문자열)**

숫자 문자(Numeric Characters)를 가졌다면 어떤 문자열이라도 동등한 숫자로 바뀝니다. 하지만 만일 문자열에 숫자가 아닌 것(Non-Numeric Characters)이 포함되어 있으면 NaN(Not a Number)을 리턴하게 됩니다

**더하기 연산자(+)**

더하기 연산자는 크게 2가지 기능을 수행한다.

- 수학적인 덧셈
- 문자열 합치기

또한, 더하기 연산자는 두가지 특징을 지닌다.

- 더하기 연산자에서는 문자의 우선순위가 숫자보다 높다.
- 객체와 함수 또한 문자보다 우선순위가 낮다.

**그 외 연산자(-, \*, /, %)**

- 더하기 연산자를 제외한 연산자에서는 숫자의 우선순위가 문자보다 높다.
- 숫자가 아닌 문자열이 들어갈 경우 연산이 불가능해 NAN이 반환된다.

```javascript
3 * '3'; // 3 * 3
3 * Number('3'); // 3 * 3
Number('5'); // 5

Number('1.'); // 1
Number('1.34'); // 1.34
Number('0'); // 0
Number('012'); // 12

Number('1,'); // NaN
Number('1+1'); // NaN
Number('1a'); // NaN
Number('la'); // NaN
Number('one'); // NaN
Number('text'); // NaN
```

**객체(Object)**
자바스크립트에서 객체의 대부분의 암묵적 형변환은 결과 값으로 [object Object]를 반환한다.

```javascript
'name' + {}; // "name[object Object]"
```

모든 자바스크립트 객체는 `toString` 메소드를 상속받습니다. 상속받은 `toString` 메소드는 객체가 문자열 타입으로 변해야 할 때마다 쓰인다. `toString`의 반환 값은 문자열 합치기(string concatenation) 혹은 수학적 표현식(mathematical expressions)과 같은 연산에서 쓰이게 된다.

```javascript
const foo = {};
foo.toString(); // [object Object]

const baz = {
  toString: () => "I'm object baz"
};

baz + '!'; // "I'm object baz!"
```

객체가 수학적 표현식 사이에 들어갔을 때는, 자바스크립트는 반환 값을 숫자로 변환하려 할 것이다.

```javascript
const foo = {
  toString: () => 4
};

2 * foo; // 8
2 / foo; // 0.5
2 + foo; // 6
'four' + foo; // "four4"

const baz = {
  toString: () => 'four'
};

2 * baz; // NaN
2 + baz; // 2four

const bar = {
  toString: () => '2'
};

2 + bar; // "22"
2 * bar; // 4
```

**배열 객체(Array Object)**
배열에서 상속된 toString 메소드는 약간 다르게 동작합니다. 이것은 배열에서 아무런 인자도 넣지 않은 join 메소드를 호출한 것과 비슷한 방식으로 작동하게 됨.

```javascript
[1, 2, 3].toString() // "1,2,3"
[1, 2, 3].join() // "1,2,3"
[].toString() // ""
[].join() // ""

"me" + [1,2,3] // "me1,2,3"
4 + [1,2,3] // "41,2,3"
4 * [1,2,3] // NaN
```

배열을 어딘가로 넘길 때는 언제나 toString 메소드를 거치면 어떻게 되는지를 생각해봅시다. 숫자로 변할지 문자열로 변할지 말이죠.

```javascript
4 * []; // 0
4 / [2]; // 2

//similar to
4 * Number([].toString());
4 * Number('');
4 * 0;

//

4 / Number([2].toString());
4 / Number('2');
4 / 2;
```

**True, False 그리고 ""**

```javascript
Number(true); // 1
Number(false); // 0
Number(''); // 0

4 + true; // 5
3 * false; // 0
3 * ''; // 0
3 + ''; // 3
```

**valueOf 메소드**
문자열이나 숫자가 올 곳에 객체를 넘길 때마다 자바스크립트 엔진에 의해 사용될 valueOf메소드를 정의하는 것도 가능함.

```javascript
const foo = {
  valueOf: () => 3
};

3 + foo; // 6
3 * foo; // 9
```

객체에 toString과 valueOf메소드가 전부 정의되어 있을 때는 자바스크립트 엔진은 valueOf메소드를 사용함.

```javascript
const bar = {
  valueOf: () => 5,
  toString: () => 2
};

'sa' + bar; // "sa5"
3 * bar; // 15
2 + bar; // 7
```

valueOf메소드는 객체가 어떠한 숫자값을 나타낼 때 사용하기 위해 만들어짐.

```javascript
const two = new Number(2);

two.valueOf(); // 2
```

**Falsy와 Truthy**
모든 자바스크립트 값은 true나 false로 변환될 수 있는 특성을 갖고 있음. true로 형변환을 강제하는 것을 truthy라고 함. 또 false로 형변환을 강제하는 것을 falsy라고 함.

다음은 자바스크립트에서 반환 시에 falsy로 취급되는 값들임.

1. false
2. 0
3. null
4. undefined
5. ""
6. NaN
7. -0

이 외에는 전부 truthy로 취급됨.

```javascript
if (-1) // truthy
if ("0") // truthy
if ({}) // truthy
```

위의 코드처럼 truthy를 이용해도 괜찮음. 하지만 값이 참임을 명시적으로 표현해주는 것이 더 좋은 작성법임. 명심해야 할 것은 만일 당신이 자바스크립트의 묵시적 형변환(implicit coercion)을 완벽히 이해하더라도, 자바스크립트의 묵시적인 형변환에 의존하지 않았으면 함.

아래 코드 대신에

```javascript
const counter = 2

if(counter)
```

다음의 코드가 훨씬 좋은 코드임.

```javascript
if(counter === 2)

// or

if(typeof counter === "number")
```

아래 함수는 number 타입의 변수를 받아 실행하도록 하고 싶어 만든 함수임.

```javascript
const add = (number) => {
  if (!number) new Error('Only accepts arguments of type: number');
  // your code
};
```

위와 같은 경우에는 인자 값으로 0를 주면 의도치 않은 에러가 발생함.

```javascript
add(0); // Error: Only accepts arguments of type: number

//better check

const add = (number) => {
  if (typeof number !== 'number')
    new Error('Only accepts arguments of type: number');
  //your code
};

add(0); // no error
```

**NaN(Not a Number)**
`NaN`은 자기 자신과도 같지 않은 특별한 숫자 값.
Javascript에서 유일하게 자기 자신과 같지 않은 값.

```javascript
NaN === NaN; // false

const notANumber = 3 * 'a'; // NaN

notANumber == notANumber; // false
notANumber === notANumber; // false

if (notANumber !== notANumber) // true
```

ES6(ECMAScript6)에서는 `NaN`을 체크하기 위한 메소드`(Number.isNaN)`가 등장.

```javascript
Number.isNaN(NaN); // true
Number.isNaN('name'); // false
```

전역 `isNaN`함수에 대해서도 알아야 함. 이 함수는 인자가 실제로 `NaN`인지 체크하기 전에 인자로 들어온 값의 형변환을 강제함.

```javascript
isNaN('name'); // true
isNaN('1'); // false
```

전역 `isNaN`함수는 사용하지 않는 것이 좋음.

```javascript
const coerceThenCheckNaN = (val) => {
  const coercedVal = Number(val);
  return coercedVal !== coercedVal ? true : false;
};

coerceThenCheckNaN('1a'); // true
coerceThenCheckNaN('1'); // false
coerceThenCheckNaN('as'); // true
coerceThenCheckNaN(NaN); // true
coerceThenCheckNaN(10); // false
```

## 명시적 형변환(Explicit Coercion)

명시적 변환(Explicit Conversion)은 개발자가 의도적으로 형변환을 하는 것.
명시적 형변환은 주로 `String, Number, Boolean` 타입으로 이루어짐.
`symbol`은 자주 사용되지 않고, `null`과 `undefined`는 자료형이면서 동시에 값이기 때문에 필요한 경우 그냥 그 값을 할당하면 됨.
`object`도 `Date` 객체를 숫자로 변환하는 특별한 경우가 아니라면, 그냥 순전히 값을 object로 만들면 만들었지 굳이 `object`로 형 변환하는 일은 없음.

### String()

```javascript
console.log(String(123)); // 123
console.log(String(NaN)); // NaN
console.log(String(1 / 0)); // Infinity
console.log(String(-1 / 0)); // -Infinity
console.log(String(true)); // true
console.log(String(false)); // true
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String({ name: 'bigtop' })); // [object Object]
```

문자열이 아닌 값을 문자열로 바꾸려면 이렇게 String 함수를 활용하면 되는데, 소괄호 안에 값을 넣어주면 그 값이 문자열로 변함.

객체의 경우에는 "[object Object]"가 출력되는데 우리가 바라보는 객체의 모양 그대로를 문자열로 만들고 싶은 경우에는 JSON객체의 stringify 메서드를 활용해야함.

```javascript
console.log(JSON.stringify({ name: 'bigtop' })); // {"name": "bigtop"}
```

### Number()

```javascript
console.log(Number('')); // 0
console.log(Number('abc')); // NaN
console.log(Number('123')); // 123
console.log(Number('123a')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({ name: 'bigtop' })); // NaN
console.log(Number({})); // NaN
```

마찬가지로 숫자가 아닌 값을 숫자로 바꾸려면 이렇게 Number함수를 활용하면 됨.

- 빈 문자열은 0으로 반환
- 숫자와 문자가 혼합된 문자열은 NaN 반환
- Boolean 형태의 값은 true는 1, false는 0 반환
- null은 0, undefined는 NaN 반환
- 빈 객체는 NaN 반환

참고로 '123a'와 같은 숫자와 문자가 혼합된 경우에도 숫자로 시작하는 문자열인 경우 parseInt 혹은 parseFloat 함수를 사용하면 숫자 형태로 변환이 가능함.

```javascript
// 첫 문자가 숫자인 경우 parseInt는 정수형으로 해석이 가능한 만큼 숫자로 변환.
console.log(parseInt('123a')); // 123
console.log(parseInt('1.23a')); // 1

// 첫 문자가 숫자이거나 소숫점인 경우 parseFloat은 소수형으로 해석이 가능한 만큼 숫자로 변환
console.log(parseFloat('1.23a')); // 1.23
console.log(parseFloat('.23a')); // 0.23

// 첫 문자가 문자일 경우는 NaN값으로 변환.
console.log(parseInt('a123')); // NaN
console.log(parseFloat('a1.23')); // NaN
```

### Boolean()

```javascript
console.log(Boolean('')); // false
console.log(Boolean('abc')); // true
console.log(Boolean('123')); // true
console.log(Boolean('0')); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({ name: 'bigtop' })); // true
console.log(Boolean({})); // true
```

## 명칭적 타이핑(Nominal Typing)

Nominal 방식은 특정 키워드를 통하여 타입을 지정해 사용하는 방식.
C++이나 Java와 같은 언어가 명칭(Nominal) 즉 '타입'을 정해서 개발하는 방식. 타입을 미리 정해서 개발하면 오류를 줄이고 유지보수가 수월하지만 Javascript에서는 타입을 지정하는 것이 불가능함.
이같은 Javascript의 단점을 보완하기 위해 마이크로소프트에서 TypeScript를 개발함.

```java
int num = 10;
char str = "a";

num = str; // ERROR!!
num = "a"; // ERROR!!
str = 10; // ERROR!!
```

위와 같은 상황에서 num은 int형으로 str은 char형으로 선언됨.
따라서 서로 타입이 맞지않는 값을 대입연산자(=)를 이용해 대입하려 할 경우 에러가 발생함.

```java
class Foo {};
class Bar {};

Foo foo = new Bar();
```

클래스에서도 마찬가지로 위의 예시의 Foo와 Bar는 서로 호환이 불가능한 클래스.

```java
class Foo {};
class Bar extends Foo {};

Foo foo = new Bar();
```

위와 같이 extends를 이용해 서로 클래스 간의 상호 호환을 명시하면 클래스를 사용할 수 있음.

## 구조적 타이핑(Structural Typing)

구조적 타이핑(Structural Typing)은 맴버에 따라 타입을 검사하는 방법이다.
명칭적 타이핑(Nominal Typing)과 반대되는 방법으로 `TypeScript, Go`등에서 사용한다.
구조적 타이핑(Structural Typing)은 두 데이터의 타입 구조를 비교하여 호환되는 타입인지 검사함.
한 타입이 다른 타입이 갖는 맴버를 모두 가지고 있을 경우 두 타입은 호환되는 타입임.

- Typescript의 핵심 원칙 중 하나는 타입 검사가 값이 있는 형태에 집중하는것.
- 두 객체가 같은 형태를 가지면 같은 것으로 간주.

```typescript
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 }; //여기 변수는 Point 타입으로 선언 된 적이 없지만,
printPoint(point);

// TS는 타입 검사에서 point 와 Point 형태를 비교, 둘 다 같은 형태라 통과!
```

형태 일치에서는 일치시킬 객체의 필드의 하위 집합만 필요함. 객체 또는 클래스에 필요한 모든 속성이 있다면?
Typescript는 구현 세부 정보에 관계 없이 일치하다고 봄.

```typescript
interface Point { 👈 여기의 속성이랑
    x: number;
    y: number;
}

function printPoint (p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

class VirtualPoint { 👈 여기의 속성이 같다
    x: number;
    y: number; // 모든 속성이 다 있음!
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);

printPoint (newVPoint);
```

## 덕 타이핑(Duck Typing)

컴퓨터 프로그래밍 분야에서 **덕 타이핑(duck typing)**은 동적 타이핑의 한 종류로, 객체의 변수 및 메소드의 집합이 객체의 타입을 결정하는 것을 말함. 클래스 상속이나 인터페이스 구현으로 타입을 구분하는 대신, **덕 타이핑은 객체가 어떤 타입에 걸맞은 변수와 메소드를 지니면 객체를 해당 타입에 속하는 것으로 간주함.**

"어떤 새가 오리처럼 걷고, 헤엄치고, 소리를 낸다면 그 새를 오리라고 부를 것이다."

자바스크립트는 타입에 대해 유연한 동적 타입 언어이다.
그래서 Java와는 다르게 타입에 대해서는 명시적으로 선언없이 자유자재로 사용하고 있음.

```java
// JAVA
String name = "goong";
```

```javascript
// Javascript
const name = 'goong';
```

우리는 자바를 정적 타입 언어, 자바스크립트를 동적 타입 언어라고 분류할 수 있음.
정적은 컴파일 시점, 동적은 런타임 시점에 타입이 체크되어진다고 생각하면 됨.
그리고 정적 타입이 가지는 장점과 동적 타입이 가지는 단점을 보완하는 것이 Typescript임.
하나의 예로, 즉 Typescript는 기존에 Javascript가 가지던 런타임에서 오는 이슈들을 컴파일 시점에 알아차릴 수 있음.
간단히 타입스크립트과 자바스크립트를 비교하면 다음과 같음.

Typescript의 코어 원리 중 하나는 타입 체킹을 형태(Shape)에 중점을 둔다고 함.
그리고 이것을 "덕 타이핑" 또는 "구조적 서브타이핑" 이라고 부를 수 있다고 함.
구조적 서브타이핑은 무엇을 나타내는 것이고, 덕 타이핑은 무엇인가?

덕 타이핑은 객체 자신이 어떠한 타입인지가 중요하지 않고, 특정 메소드나 속성의 존재로 타입을 판단함.
반대의 경우에는 특정 타입을 정의함으로써, 그 타입을 특정하게 됨.

덕 타이핑은 특정 타입에 얽매이지 않고, 원하는 행동을 할 수 있는 여부로 판단함.
그래서 타입에 제약없이 사용하여 보다 유연하게 코드를 작성할 수 있음.

```javascript
// static
let staticName: string = 'goong';
staticName = 1; // TypeError
// dynamic
let dynamicName = 'goong';
dynamicName = 1; // Ok
```

출처: https://bigtop.tistory.com/18, https://alstn2468.github.io/Javascript/2020-05-11-Implicit_Explict_Nominal_Structuring_DuckTyping/, https://velog.io/@eunjin0212/TypeScript-Study-Note-5, https://mygumi.tistory.com/367
