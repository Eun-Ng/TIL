import { textChangeRangeIsUnchanged } from 'typescript';

// utility types
// Partial 타입 분석
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type Name = Profile['name'];

type P<T> = {
  [Key in keyof T]?: T[Key];
};

const eunNg: Profile = {
  name: 'eun',
  age: 27,
  married: false,
};

const newEunNg: P<Profile> = {
  name: 'eun',
  age: 27,
};

// Pick 타입 분석
// Pick
type P2<T, S extends keyof T> = {
  [Key in S]: T[Key];
};

const newEunNg2: P2<Profile, 'name' | 'age'> = {
  name: 'eun',
  age: 27,
};

// Omit
const newEunNg3: Omit<Profile, 'married'> = {
  name: 'eun',
  age: 27,
};

// Exclude
type E = Exclude<keyof Profile, 'married'>;
type Omit2<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
const newEunNg4: Omit2<Profile, 'married'> = {
  name: 'eun',
  age: 27,
};

// Exclude & Extract
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;

type Bugs = 'fly' | 'dragonfly' | '404';
type Insects = Exclude<Bugs, '404'>; // 'fly' | 'dragonfly'
type Insects2 = Extract<Bugs, 'fly' | 'dragonfly'>; // 'fly' | 'dragonfly';

// Required
interface Opt {
  name?: string;
  age?: number;
  married?: boolean;
}

/* type Required<T> = {
    [P in keyof T]-?: T[P];
};
*/
type R<T> = {
  [Key in keyof T]-?: T[Key];
};

const newEunNg5: R<Opt> = {
  name: 'eun',
  age: 27,
  married: false,
};

// Record
type Re<T extends keyof any, S> = {
  [Key in T]: S;
};

const ReEx: Re<string, number> = { a: 3, b: 5, c: 7 };

// NonNullable
type Non = string | null | undefined | boolean | number;
type Non2 = NonNullable<Non>; // string, boolean, number

type NonEx<T> = T extends null | undefined ? never : T; // string | boolean | number

// infer
function inf(x: number, y: string, z: boolean): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

// 함수의 파라미터 타입 가져오기
type Infer<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;

// 함수의 리턴 타입을 가져오기
type InferReturn<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

type Params = Parameters<typeof inf>;
type Ret = ReturnType<typeof inf>;
type First = Params[0]; // number

// ConstructorParameters
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

class ConsEx {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const consEx2 = new ConsEx('123', 123, true);
// 생성자 타입 얻어오기
type ConsType = ConstructorParameters<typeof ConsEx>; // typeof 클래스가 생성자
// 인스턴스 타입 얻어오기
type ConsIns = InstanceType<typeof ConsEx>;

const consEx3: ConsEx = new ConsEx('456', 456, false); // 인스턴스

// InstanceType
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

// Promise 타입 분석하기
const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a.toString());
// Promise<number>, Promise<number>, Promise<number>, Promise<string>
const p2 = Promise.resolve(2); // Promise<number>
const p3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  // {'0': string, '1': number, '2': unknown, length: 3}
  console.log(result); // 타입 추론이 정확하게 됨. ['3', 2, undefined]
});

// T = [p1, p2, p3] ('0': p1, '1': p2, '2': p3, length: 3)
// keyof T = '0' | '1' | '2' | 'length'

type Result = Awaited<Promise<Promise<Promise<number>>>>; // number
type Result2 = Awaited<{ then(onfulfilled: (v: number) => number): any }>; // thenable

// bind 타입 분석하기
function bindEx(this: Window | typeof bindEx2) {
  console.log(this.name);
}

const bindEx2 = { name: 'Eun' };
const bindEx3 = bindEx.bind(bindEx2);
bindEx3();

type This = ThisParameterType<typeof bindEx>;
type NoThis = OmitThisParameter<typeof bindEx>;

const zerocho = {
  name: 'zerocho',
  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  },
};

const sayHello = zerocho.sayHello;
const sayHi = zerocho.sayHello.bind({ name: 'nero' });

function addEx(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
}

const addEx1 = addEx.bind(null);
addEx1(1, 2, 3, 4, 5, 6);

const addEx2 = addEx.bind(null, 1);
addEx2(2, 3, 4, 5, 6);

const addEx3 = addEx.bind(null, 1, 2);
addEx3(3, 4, 5, 6);

const addEx4 = addEx.bind(null, 1, 2, 3);
addEx4(4, 5, 6);

const addEx5 = addEx.bind(null, 1, 2, 3, 4);
addEx5(5, 6);

// Error
// const addEx6 = addEx.bind(null, 1, 2, 3, 4, 5);
// addEx6(6);

// flat 타입 분석하기
const flat = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // [1, 2, 3, 1, 2, [1], [2]];
const flat2 = [1, 2, 3, [1, 2]].flat(); // [1, 2, 3, 1, 2];

// FlatArray<(number[] | number[][] | number[][][]), 2>[]
// FlatArray<(number | number[] | number[][]), 1>[]
// FlatArray<(number | number[]), 0>[]
// FlatArray<number, -1>[]
// number[]
