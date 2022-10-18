import {textChangeRangeIsUnchanged} from 'typescript';

// 기본적으로 변수, 속성, 매개변수, 리턴값에 타입이 붙음
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;

// 타입에 고정된 원시값을 넣을수도 있음
const f: true = true;

// Object
const obj: {lat: number; lon: number} = {lat: 37.5, lon: 127.5};

// Array
const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456]; // using generic
const arr3: [number, number, string] = [123, 456, 'hello']; // tuple type. 길이가 고정된 배열

// function
const add = (x: number, y: number): number => x + y;
const add2: (x: number, y: number) => number = (x, y) => x + y;

// type Alias
type Add = (x: number, y: number) => number;
const add4: Add = (x, y) => x + y;

// interface
interface Minus {
  (x: number, y: number): number;
}

let aa = 123;
aa = 'hello' as unknown as number;

try {
  const array: string[] = [];
  array.push('hello');
} catch (error) {
  error;
}

// null이나 undefined가 아님을 보장. 비추. ! 대신 if 사용
// const head: Element = document.querySelector('#head')!;
// console.log(head);

// const head = document.querySelector('#head');
// if (head) {
//   head.innerHTML = 'hello world';
//   console.log(head);
// }

/**  1 - 5. */
// template literal type
type World = 'world' | 'hell';

// type Greeting = 'hello world'
type Greeting = `hello ${World}`;
const world: Greeting = 'hello hell';

// Array, tuple type
let strArr: string[] = [];
let strArr2: Array<string> = [];
function rest(...args: string[]) {}

const tuple: [string, number] = ['1', 1];
// tuple[2] = 'hello'; 얘는 막아주는데
tuple.push('hello'); // 얘는 못막아줌

/**  1 - 6. enum, keyof, typeof */
// enum. 서로 연관된 상수들을 하나의 namespace로 묶어 추상화시키기 위해 도입된 것.
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const up = EDirection.Up; // 0

// as const. type assertion의 일종으로 리터럴 타입의 추론 범위를 줄이고 값의 재할당을 막기 위한 목적으로 만들어짐. 프로퍼티들을 상수로 사용 가능.
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// 값 자체를 -> 타입으로 바꾸고 싶을때 typeof, key 값들만 뽑고 싶을때는 keyof
const obj1 = {a: '123', b: 'hello', c: 'world'} as const;
// type Key = keyof typeof obj1 // 키 값만 뽑아냄
type Key = typeof obj1[keyof typeof obj1]; // 밸류 값만 뽑아냄

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

// union type(|) 둘 중에 한 속성만 있어도 됨
// function uni(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// intersection(&). 두 속성 모두 만족해야함. union(|)은 하나만 만족해도 됨
type Amp = {hello: 'world'} & {type: 'script'};
const ts: Amp = {hello: 'world', type: 'script'};

// type alias & interface
type Animal = {breath: true};
type Mammal = Animal & {breed: true};
type Human = Mammal & {think: true};
const eun: Human = {breath: true, breed: true, think: true};

interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}
const inter: B = {breath: true, breed: true, think: true};
interface A {
  think: true;
}

// 객체 리터럴 잉여 속성 검사
interface O {
  a: string;
}
// const obj2: O = {a: 'hello', b: 'world'}; // Error
// 중간에 다른 변수 하나를 껴서 입력하면 검사를 안함
const obj2 = {a: 'hello', b: 'world'};
const obj3: O = obj2;

// void type. 리턴 값이 없거나 undefined인 타입
function forEach(arr: number[], callback: (el: number) => undefined): void; // 함수 선언
function forEach() {
  // 구현부
}

// declare 사용시 함수 타입 선언만 가능. 단, 컴파일시 사라짐.
// declare function forEach(arr: number[], callback: (el: number) => undefined): void; // 함수 선언

// unknown & any. unknown은 사용시 타입 명시해줘야 함.
try {
} catch (error) {
  // 타입스크립트에서 제공하는 Error 타입
  (error as Error).message;
}

// 타입 가드
function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');
  } else {
    a.toFixed(1);
  }
}
numOrStr('123');
numOrStr(1);

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.slice(1);
  } else {
    // number
    a.toFixed(1);
  }
}

// readonly
interface Read {
  readonly a: string;
  b: string;
}

const aaaa: Read = {a: 'hello', b: 'world'};

// Index Signature
type Is = {[key: string]: string}; // 어떤 키든간에 전부 문자열이고, 값도 전부 문자열

// Mapped Types
type Mt = 'Human' | 'Mammal' | 'Animal';
type M = {[key in Mt]: number}; // 키가 무조건 B 셋 중에 하나.

// readonly
interface Imp {
  readonly a: string;
  b: string;
  c: string;
}

// private, protected
class Pri implements Imp {
  a: string = 'Hello'; // can use private
  b: string = 'World'; // can use protected
  c: string = '!';
}
class Pro extends Pri {}
// new Pro().a; // can't use
// new Pro().b; // can't use
new Pro().c;

// abstract class, abstract method
abstract class User {
  abstract work(user: User): boolean;
}
class Work extends User {
  work(user: User): boolean {
    return true;
  }
}

// optional
function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);

let opt: {a: string; b?: string} = {a: 'hello', b: 'world'};
opt = {a: 'hello'};

// generic
function gen<T extends string>(x: T, y: T): T {
  return x;
}
// gen(1, 2);
gen('1', '2');

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol

// 제네릭 분석
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
}

// forEach 제네릭 분석
[1, 2, 3].forEach((value) => {
  console.log(value);
});
['1', '2', '3'].forEach((value) => {
  console.log(value);
});
[true, false, true].forEach((value) => {
  console.log(value);
});
['123', 123, true].forEach((value) => {
  console.log(value);
});

// map 제네릭 분석
const strings = [1, 2, 3].map((item) => item.toString()); // ['1', '2', '3'] string[]

// filter 제네릭 분석
const predicate = (value: string | number): value is string =>
  typeof value === 'string';
const filtered = ['1', 2, '3', 4, '5'].filter(predicate); // ['1', '3', '5'] string[]

// 타입 직접 만들기
interface ArrEx<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (v: T, i: number) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

// forEach 타입 직접 만들기
const forEachEx: ArrEx<number> = [1, 2, 3];
forEachEx.forEach((item) => {
  console.log(item);
});
forEachEx.forEach((item) => {
  console.log(item);
  return '3';
});

const forEachEx2: ArrEx<string> = ['1', '2', '3'];
forEachEx2.forEach((item) => {
  console.log(item);
});
forEachEx2.forEach((item) => {
  console.log(item);
  return '3';
});

// map 타입 직접 만들기
const mapEx: ArrEx<number> = [1, 2, 3];
const mapEx2 = mapEx.map((v, i) => v + 1); // [2, 3, 4]
const mapEx3 = mapEx.map((v, i) => v.toString()); // ['2', '3', '4']; string[]
const mapEx4 = mapEx.map((v, i) => v % 2 === 0); // [false, true, false]; boolean[]
const mapEx5 = forEachEx2.map((v, i) => +v); // string[] -> number[]

// filter 타입 직접 만들기
const filterEx: ArrEx<number> = [1, 2, 3];
const filterEx2 = filterEx.filter((v): v is number => v % 2 === 0);

const filterEx3: ArrEx<number | string> = [1, '2', 3, '4', 5];
const filterEx4 = filterEx3.filter((v): v is string => typeof v === 'string'); // ['2', '4']; string[]
const filterEx5 = filterEx3.filter((v): v is number => typeof v === 'number'); // [1, 3, 5,]; number[];

// 공변성, 반공변성
function covariance(x: string | number): number {
  return +x;
}
type covarianceEx = (x: string) => number | string;
const covarianceEx2: covarianceEx = covariance;

// 타입 오버로딩
declare function overload(x: number, y: number): number;
declare function overload(x: string, y: string, z: number): string;

overload(1, 2);
overload(2, 3);

interface overload2 {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const overload3: overload2 = (x: any, y: any) => x + y;

class overload4 {
  overload3(x: number, y: number): number;
  overload3(x: string, y: string): string;
  // 구현부
  overload3(x: any, y: any) {
    return x + y;
  }
}

const overload5 = new overload4().overload3(1, 2);

// 에러 처리법
interface Axios {
  get(): void;
}
class CustomError extends Error {
  response?: {
    data: any;
  };
}
declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err) {
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }
})();

// infer
