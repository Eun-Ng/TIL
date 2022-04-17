## 표현식(Expression) vs 문(Statement)

자바스크립트에는 2가지 주요 문법이 있습니다.

1. 표현식(Expression)
2. 문(Statement)

표현식(Expression)은 문(Statement)처럼 동작할 수 있지만,  
문(Statement)은 표현식(Expression)처럼 동작할 수 없습니다.

### 표현식(Expression)

- 표현식(Expression)은 단일 값을 생성합니다.
- 값으로 평가될 수 있는 문은 전부 표현식입니다.

- 값 자체도 하나의 값으로 평가되기에 표현식입니다.

```Javascript
10
3.14
'eun'
```

- 아무리 표현식이 길어지더라도 결국 단일 값을 생성하기에 표현식입니다.

```Javascript
10 + 10
20 * 20
(Math.random() * (100 - 10)) + 20 // 95.80295646022229
true == 1; // true
```

- 리터럴은 값으로 평가되기에, 리터럴도 결국은 표현식입니다.

```Javascript
{name: 'eun', address:'Seoul'} // 객체 리터럴
[ 1, 2, 3] // 배열 리터럴
function() {} // 함수 리터럴
/[A-Z]+/g // 정규 표현식 리터럴
```

- 함수 호출의 결과 또한 하나의 값을 반환하기에 식입니다.

### 문(Statement)

- 문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위입니다.
- Javascript에서 문은 값이 들어가야 할 곳에 들어갈 수 없습니다.
- 따라서 문은 함수의 인자, 대입 연산된 값, 연산자의 피연산자, 반환 값으로 사용할 수 없습니다.

```Javascript
foo(if (true) { return 2 }) // Error
```

Javascript에서 사용되는 문은 아래와 같습니다.

1. `if`
2. `if-else`
3. `while`
4. `do-while`
5. `for`
6. `switch`
7. `for-in`
8. `debugger`
9. `variable declaration`

```Javascript
if (true) { 9 + 9 } // 18
```

문을 사용해서 결과값을 출력하였지만, 문의 결과를 표현식처럼 사용할 수 없습니다.  
지금까지 배운 내용으로는 문은 아무런 값도 반환하면 안 됐습니다.  
따라서 우리는 이 반환된 값을 이용할 수 없고, 따라서 문(Statement)이 반환하는 값은 의미가 없습니다.

### 함수 선언, 함수 표현식, 네임드(Named) 함수 표현식

- 함수 선언문은 문(Statement)입니다.

```Javascript
function foo(func) {
  return func.name
}
```

- 익명 함수라 불리는 함수 표현식 또한 식(Expression)입니다.

```Javascript
foo(function () {} ) // ''
```

- 이름이 있는 네임드(Named) 함수 표현식 또한 식(Expression)입니다.

```Javascript
foo(function myName () {} ) // 'myName'
```

- 원래 값이 들어올 곳에 함수를 선언하게 되면, Javascript는 그 함수를 값으로 사용하려고 합니다.
- 선언된 함수가 값으로 사용될 수 없다면 에러가 발생합니다.
-

```Javascript
if () {
  function foo () {} // 함수 선언문
}

function foo () {} // 함수 선언문

function foo () {
  function bar() {} //함수 선언문
}

function foo () {
  return function bar () {} // 네임드 함수 표현식
}

foo(function () {}) // 익명 함수 표현식

function foo () {
  return function bar () {
    function baz () {} // 함수 선언문
  }
}

function () {} // SyntaxError: function statement requires a name

if (true){
  function () {} //SyntaxError: function statement requires a name
}
```

### 표현식인 문과 표현식이 아닌 문

- 표현식은 문의 일부일 수도 있고 그 자체로 문이 될 수도 있습니다.

```Javascript
var x; // 변수 선언문은 값으로 평가될 수 없으므로 표현식이 아닙니다.

x = 1+2; // x = 1+2는 표현식이면서 완전한 문이기도 합니다.
```

- **표현식의 문은 값으로 평가될 수 있는 문**이며, **표현식이 아닌 문은 값으로 평가될 수 없는 문**을 말합니다.

```Javascript
var foo = var x; //Uncaught SyntaxError: Unexpected token 'var'
// 표현식이 아닌 문은 값처럼 사용할 수 없다.
```

### 표현식을 문으로 변환

```Javascript
2+2; // 표현식 문
foo(); // 표현식 문
```

- `2 + 2`는 식(Expression)입니다.
- 식 끝에 세미콜론`;`을 추가한 `2 + 2;`는 표현식 문(Expression Statement)입니다.

```Javascript
console.log(2+2;) // Error. 세미콜론이 추가된 문(Statement)은 값이 될 수 없기에 식(Expression)의 자리에 들어가지 못합니다.
```

### IIFE(Immediately Invoked Function Expression, 즉시 실행되는 함수 표현식)

```Javascript
(function () {
    statements
})();
```

- IIFE란? 정의와 동시에 즉시 실행되는 함수입니다. **일종의 괄호로 둘러싸인 익명함수**입니다.
- IIFE는 1. 불필요한 변수를 추가해 **전역 스코프 지저분해지는 것을 방지** 2. **IIFE 내부로 다른 변수들의 접근 방지** 두 가지의 필요성을 지니고 있습니다.

```Javascript
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능합니다.
(function () {
    var myName = "eun";
})();

myName // "Uncaught ReferenceError: myName is not defined"
```

- IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고, 함수가 실행된 결과만 저장됩니다.

```Javascript
var result = (function () {
    var name = "eun";
    return name;
})();
// 즉시 결과를 생성합니다.
result; // "eun"
```
