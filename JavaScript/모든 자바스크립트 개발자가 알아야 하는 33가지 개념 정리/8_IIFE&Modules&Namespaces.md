### IIFE(Immediately Invoked Function Expression, 즉시 실행되는 함수 표현식)

```Javascript
(function () {
    statements
})();
```

- IIFE란? 함수의 선언과 동시에 즉시 실행되는 함수입니다. **일종의 괄호로 둘러싸인 익명 함수**입니다.

- 익명 함수를 선언할 경우 오류가 발생됩니다.

```Javascript
function() {
  console.log('my name is eun!');
} // Uncaught SyntaxError: Function statements require a function name
```

- 익명 함수를 괄호로 둘러싸게 되면 익명 함수를 반환하는 함수가 됩니다.

```Javascript
(function() {
  console.log('my name is eun!');
}) /* ƒ () {
  console.log('my name is eun!');
} */
// 함수를 그대로 뱉어냅니다.
```

- 반환된 함수를 바로 실행하고 싶다면, 뒤에 괄호를 하나 더 붙이면 됩니다.

```Javascript
(function() {
  console.log('my name is eun!');
})();
```

#### IIFE의 필요성

- 불필요한 변수를 추가해 **전역 스코프가 지저분해지는 것을 방지**합니다.
- **IIFE 내부로 다른 변수들의 접근 방지**합니다.

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

### 모듈(Modules)

- 모듈이란 애플리케이션을 구성하는 **개별적인 요소**로서 **재사용 가능한 코드 조각**을 일컫습니다. 모듈은 세부 사항을 **캡슐화**하고 **공개가 필요한 API만을 외부에 노출**합니다.
- 개발되는 애플리케이션의 크기가 점차 커지면서 파일을 여러 개로 분리하게 됩니다. 이때 분리된 파일 각각을 **모듈**이라고 부릅니다.
- 본디 클라이언트 사이드인 Javascript는 `script` 태그를 통해 외부 스크립트 파일을 가져올 수는 있으나, 그 파일마다 독립적인 파일 스코프를 지니고 있지 않고 **하나의 전역 객체(Global Object)**를 공유합니다. 즉 여러 개의 외부 파일을 `script` 태그로 불러오더라도 결국 **하나의 Javascript 파일 내에 있는 것처럼 동작**하기에 전역 변수가 중복되는 등의 문제가 발생할 수 있습니다.

#### 모듈 패턴(Module Pattern)

- AMD: 가장 오래된 모듈 시스템 중 하나로 require.js라는 라이브러리를 통해 처음 개발되었습니다.
- CommonJS: Node.js 서버를 위해 만들어진 모듈 시스템입니다.
- UMD: AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 만들어졌습니다.
- ES6 Module: Javascript에 드디어 표준 모듈 시스템이 도입되었습니다.

#### 모듈 지시자(Module Directive)

- export 지시자를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할 수 있습니다(모듈 내보내기).
- import 지시자를 사용하면 외부 모듈의 기능을 가져올 수 있습니다(모듈 가져오기).

##### ES6 Module

- `export` 지시자를 사용해 모듈 `sayHi.js` 내부의 함수 `sayHi`를 외부로 내보낼 수 있습니다.

```Javascript
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

- `import` 지시자를 사용해 `main.js`에서 모듈 `sayHi.js`를 불러올 수 있습니다.

```Javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // 함수
sayHi('eun'); // Hello, eun!
```

### 모듈의 핵심 기능

- 모듈은 항상 **엄격 모드(use strict)**로 실행됩니다. 따라서 선언되지 않은 변수에 값을 할당하는 등의 코드는 에러가 발생됩니다.

- 모듈은 **자신만의 스코프**가 있습니다. 따라서 모듈 내부에서 정의한 변수나 함수는 다른 스크립트에서 접근할 수 없습니다.

### Namespaces

- Namespace는 객체나 변수가 겹쳐지지 않도록 안전한 코드를 만들기 위한 개념입니다.

- Javascript에서는 아직 Namespacing을 지원하지 않아 다음 특성을 이용합니다.
  - Javascript의 모든 객체는 속성을 갖습니다.
  - 객체에 담긴 속성은 다른 객체를 담을 수 있습니다.

```Javascript
var globVariable = {}; // 전역 객체 하나 생성

globVariable.sayMyName = function() {
    console.log('eun!'); // 함수 추가
}

globVariable.sayYourName = function() {
    console.log('something!');
}

globVariable.sayMyName()
globVariable.sayYourName()
```

- 전역 객체에 기능을 추가하는 패턴입니다. 현재는 직관적인 Module을 더 많이 사용하기에 잘 사용하지는 않습니다.
