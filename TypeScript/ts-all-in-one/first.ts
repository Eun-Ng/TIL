import {NoSubstitutionTemplateLiteral} from 'typescript';

// 기본적으로 변수, 속성, 매개변수, 리턴값에 타입이 붙음
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

// 타입에 고정된 원시값을 넣을수도 있음
const t: true = true;

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
const add3: Add = (x, y) => x + y;

// interface
interface Minus {
  (x: number, y: number): number;
}
