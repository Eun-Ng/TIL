let 이름: string = "Namgung";

// union type
let product: string[] | number = ["shirts", "pants"];
let numbers: (number | string)[] = [1, "2", 3];
let obj: {a: number | string} = {a: "123"};

// any type. 모든 자료형 허용
let any: any;
any = 123;
any = "123";
any = true;
any = {};
any = [];

// unknown type. any랑 기능은 똑같지만 보다 안정됨
let unknown = 123;

let un: string = "123"; // Input number? -> error

// array에 쓰는 tuple type
type Member = [number, boolean];
let john: Member = [123, true];

type newMember = {
  [key: string]: string; // 모든 Object 속성
};

let member1: newMember = {name: "mike", sex: "male"};

// class 타입 지정
class User {
  name: string;
  constructor(name: string) {
    this.name = "eun";
  }
}

const eun: {name: string; age: number} = {name: "eun", age: 27};

const favoriteSong: {songName: string; singer: string} = {
  songName: "As It Was",
  singer: "Harry Styles",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// 함수에 타입지정. parameter에도 return 값에도 가능
const func = (a: number): number => {
  return a * 2;
};

func(2);

// void type. 리턴값 없음
const voidFunc = (a: number): void => {
  1 + 1;
};

// 파라미터를 옵션으로 주고싶을 때. 변수?: number === number | undefined
function optionParam(x?: number) {}

optionParam();

let hong = (name?: string): void => {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log("이름이 없습니다");
  }
};

let lengthChecker = (param: number | string): number => {
  return param.toString().length;
};

// Narrowing. 타입 확정지어주기
const myFunc = (x: number | string) => {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
};

console.log(myFunc("123"));

// Assertion. 타입 덮어쓰기
const myFunc1 = (x: number | string) => {
  const array: number[] = [];
  array[0] = x as number;
};

console.log(myFunc1(123));

// 문제 1. Array 내 문자 -> 숫자 변환
let converting = (param: (string | number)[]) => {
  let convertingArr: number[] = [];

  param.forEach((a) => {
    if (typeof a === "string") {
      convertingArr.push(Number(a));
    } else {
      convertingArr.push(a);
    }
  });
  return convertingArr;
};
console.log(converting(["1", "2", 3])); // [1, 2, 3]

// 문제 2. 마지막 과목 출력
const firstGrade = {subject: "math"};
const secondGrade = {subject: ["math", "science"]};
const thirdGrade = {subject: ["math", "science", "english"]};

const lastSubject = (a: {subject: string | string[]}) => {
  if (typeof a.subject === "string") {
    return a.subject;
  } else if (Array.isArray(a.subject)) {
    return a.subject.pop();
  } else {
    return "Nothing";
  }
};
console.log(lastSubject(thirdGrade));

// type alias. 타입을 변수에 담아 사용가능. 대문자로 시작해 일반 변수와 차별화
type Size = string | number;
let pSize: [Size] = ["XL"];

type Animal = {
  readonly name: string;
};

const animal: Animal = {
  name: "Dog",
};

// animal.name = "Cat"; // readonly로 Object 수정 Error 유발

// type extend
// 1. union type
type Name = string;
type Age = number;
type Person = Name | Age;

// 2. use &
type PositionX = {x: number};
type PositionY = {y: number};
type NewPosition = PositionX & PositionY;

let position: NewPosition = {x: 10, y: 20};

type AllCss = {
  color?: string;
  size: number;
  readonly position: number[];
};

const typeTest: AllCss = {
  size: 500,
  position: [100, 0, 0],
};
// typeTest.position = [0, 0, 0]; // Console Error

// Literal Types. 더 엄격한 타입지정
let cat: "cute" | "meow";

const literalTest = (a: "hello") => {
  console.log("Just hello");
};

literalTest("hello");
// literalTest(something); // Error

let 자료 = {
  name: "kim",
} as const; // 1. Object value 값을 그대로 타입으로 지정해줌 2. readonly가 적용됨. Object 잠그기 가능

const mine = (a: "kim") => {};

mine(자료.name);

// function type alias
type FuncType = (a: string) => number;

const funcType: FuncType = (a) => {
  return 10;
};

type MemberInfo = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

// 1
type CutZero = (a: string) => string;

const cutZero: CutZero = (a) => {
  let result = a.replace(/0/g, "");
  return result;
};

const rmDash = (a: string): number => {
  let result = a.replace(/-/g, "");
  return Number(result);
};

console.log(cutZero("11110000"));
console.log(rmDash("010-1234-5678"));

// 2
type Func1 = (a: string) => string;
type Func2 = (a: string) => number;

const allFunc = (a: string, func1: Func1, func2: Func2) => {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
};

allFunc("010-1234-5678", cutZero, rmDash);

// DOM Manipulation

// JS와는 다르게 DOM 조작을 할때도 narrowing이 필요함
// 1. if문
const title1 = document.querySelector("#title");
if (title1 !== null) {
  title1.innerHTML = "반가워요";
}

// 2. instanceof 연산자
const title2 = document.querySelector("#title");
if (title2 instanceof Element) {
  title2.innerHTML = "반가워요";
}

// 3. assertion
const title3 = document.querySelector("#title") as Element;
title3.innerHTML = "반가워요";

// 4. ?. optional chaining
const title4 = document.querySelector("#title");
if (title4?.innerHTML !== undefined) {
  title4.innerHTML = "반가워요";
}

// TypeScript를 이용해 DOM 조작시 해당 요소의 타입을 narrowing 해야함
const link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://www.kakao.com";
}

const btn = document.querySelector("#button");
btn?.addEventListener("click", function () {
  console.log("hi");
});

const changeImg = document.querySelector("#image");
if (changeImg instanceof HTMLImageElement) {
  changeImg.src =
    "https://images.unsplash.com/photo-1653815918843-13a7072eeff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
}
