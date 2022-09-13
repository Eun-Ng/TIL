import {NoSubstitutionTemplateLiteral} from 'typescript';
import {useNavigate} from 'react-router-dom';

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

// intersection(&). 두 속성 모두 만족해야함
type Amp = {hello: 'world'} & {type: 'script'};
const ts: Amp = {hello: 'world', type: 'script'};
