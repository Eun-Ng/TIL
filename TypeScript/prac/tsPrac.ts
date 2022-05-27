let 이름: string = "Namgung";

// union type
let product: string[] | number = ["shirts", "pants"];

let 손흥민: {name: string} = {name: "손흥민"};

// type alias. 타입을 변수에 담아 사용가능
type Size = string | number;

let pSize: [Size] = ["XL"];

// 함수에 타입지정. parameter에도 return 값에도 가능
const func = (a: number): number => {
  return a * 2;
};

func(2);

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
