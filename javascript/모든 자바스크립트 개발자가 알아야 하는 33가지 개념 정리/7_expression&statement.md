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
