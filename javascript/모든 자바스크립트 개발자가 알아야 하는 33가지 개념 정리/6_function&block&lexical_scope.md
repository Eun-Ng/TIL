## 스코프(유효 범위, Scope)

스코프란, 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정됩니다. 즉, 스코프는 **식별자가 유효한 범위**를 뜻합니다.

MDN에 따르면 스코프란 현재 실행되는 컨텍스트를 말합니다. 여기서 컨텍스트는 값과 표현식이 "표현"되거나 참조될 수 있음을 의미합니다. 만약 변수 또는 다른 표현식이 "해당 스코프"내에 있지 않다면 사용할 수 없습니다. 스코프는 또한 계층적인 구조를 가지기 때문에 하위 스코프는 상위 스코프에 접근할 수 있지만 반대는 불가합니다.

<예제 1>

```Javascript
function exampleFunction() {
    var x = "declared inside function";
    // x는 오직 exampleFunction 내부에서만 사용 가능.
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // 에러 발생
```

그러나 아래와 같은 코드는 변수가 함수 외부의 전역에서 선언되었기 때문에 유효합니다.

<예제 2>

```Javascript
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

### `var`, 함수 스코프(Function Scope)

`var` 키워드는 함수 스코프(Function Scope)입니다.  
 이는 생성된 함수 내에서만 사용할 수 있으며, 함수 내부에서 생성되지 않은 경우 전역 범위를 가집니다.

```Javascript
function eun() {
  var name = 'goong';
  console.log(name); // 'goong'
}

eun(); // 'goong'

console.log(name); // name is not defined
```

위 예제를 보면 함수 내부에서 선언된 `var` 키워드로 선언된 변수 `name`은 함수 외부에서 접근할 수 없습니다. 접근하니 에러가 납니다.  
`name` 변수는 전역 변수로 선언 된것이 아니기에 `eun` 함수 스코프 내에서만 접근이 가능합니다.

하지만 if 문, loop 문 등과 같은 다른 유형의 블록에서는 스코프로 간주되지 않습니다.

```Javascript
var age = 26;
  if (true) {
    var korAge = age + 1;
    console.log(`Your Korean Age is ${korAge}!`); // 'Your Korean Age is 27!'
  }
  console.log(korAge); // 27
```

위 예제를 보면 if 문 내에 `var` 키워드로 선언된 변수 `korAge`는 if 문 외부에서 사용할 수 있습니다. `var` 키워드는 함수 스코프를 제외한 다른 스코프는 같은 스코프로 간주하기 때문입니다.

### `let`, `const`, 블록 스코프(Block Scope)

ES6에서는 변수를 선언하는 대체 방법으로 `let`, `const` 키워드가 도입되었으며, 이 둘은 블록 스코프를 가집니다.  
함수 스코프만 스코프로 취급하는 `var` 키워드와는 달리 블록 스코프에서는 모든 블록이 스코프가 됩니다.  
블록이란? 여는 중괄호 '{'와 닫는 중괄호 '}'의 집합입니다.

```Javascript
var age = 26;
  if (true) {
    let korAge = age + 1;
    console.log(`Your Korean Age is ${korAge}!`); // 'Your Korean Age is 27!'
  }
  console.log(korAge); // Uncaught ReferenceError: korAge is not defined
```

위의 예제에서는 `var` 키워드를 `let` 키워드로만 대체하여 변수를 선언했습니다.  
`let` 키워드로 선언된 `korAge` 변수는 콘솔에서 타입 에러를 일으킵니다.  
**`let`, `const` 키워드는 `var` 키워드와 달리 함수 스코프가 아닌 블록 스코프를 가지고 있기 때문입니다.**  
위의 예에서 `let` 키워드를 `const` 키워드로 대체해도 동일한 결과 값이 출력됩니다.

### 렉시컬 스코프(Lexical Scope)

렉시컬 스코프란 중첩된 함수 그룹에서 내부 함수가 상위 범위의 변수 및 기타 리소스에 액세스 할 수 있음을 의미합니다.

즉, 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정한다는 뜻이며, 가장 중요한 점은 **함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정됩니다.**

다른 말로, 정적 스코프(Static scope)라 부르기도 합니다.

<예제>

```Javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

위 예제를 보듯 Javascript는 렉시컬 스코프를 따르기에 함수를 선언한 시점에 상위 스코프가 결정됩니다. 함수를 어디서 호출하였는지는 스코프 결정에 아무런 영향을 주지 않습니다. 위 예제의 `bar` 함수는 전역에 선언되었기에 `bar` 함수의 상위 스코프는 전역 스코프이고, 따라서 전역 변수 x의 값 1을 두번 출력합니다.

### Summary

- `var` 키워드는 함수 스코프(Function Scope). 범위는 함수 안.
- `let`, `const` 키워드는 블록 스코프(Block Scope) 범위는 중괄호 안.
- 렉시컬 스코프(Lexical Scope)는 함수를 어디서 호출하는지가 아닌 어디에 선언하였는지에 따라 결정됨.
