let 이름 = "Namgung";
// union type
let product = ["shirts", "pants"];
let numbers = [1, "2", 3];
let obj = { a: "123" };
// any type. 모든 자료형 허용
let any;
any = 123;
any = "123";
any = true;
any = {};
any = [];
// unknown type. any랑 기능은 똑같지만 보다 안정됨
let unknown = 123;
let un = "123"; // Input number? -> error
let john = [123, true];
let member1 = { name: "mike", sex: "male" };
// class 타입 지정
class User {
    name;
    constructor(name) {
        this.name = "eun";
    }
}
const eun = { name: "eun", age: 27 };
const favoriteSong = {
    songName: "As It Was",
    singer: "Harry Styles",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// 함수에 타입지정. parameter에도 return 값에도 가능
const func = (a) => {
    return a * 2;
};
func(2);
// void type. 리턴값 없음
const voidFunc = (a) => {
    1 + 1;
};
// 파라미터를 옵션으로 주고싶을 때. 변수?: number === number | undefined
function optionParam(x) { }
optionParam();
let hong = (name) => {
    if (name) {
        console.log(`안녕하세요 ${name}`);
    }
    else {
        console.log("이름이 없습니다");
    }
};
let lengthChecker = (param) => {
    return param.toString().length;
};
// Narrowing. 타입 확정지어주기
const myFunc = (x) => {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
};
console.log(myFunc("123"));
// Assertion. 타입 덮어쓰기
const myFunc1 = (x) => {
    const array = [];
    array[0] = x;
};
console.log(myFunc1(123));
// 문제 1. Array 내 문자 -> 숫자 변환
let converting = (param) => {
    let convertingArr = [];
    param.forEach((a) => {
        if (typeof a === "string") {
            convertingArr.push(Number(a));
        }
        else {
            convertingArr.push(a);
        }
    });
    return convertingArr;
};
console.log(converting(["1", "2", 3])); // [1, 2, 3]
// 문제 2. 마지막 과목 출력
const firstGrade = { subject: "math" };
const secondGrade = { subject: ["math", "science"] };
const thirdGrade = { subject: ["math", "science", "english"] };
const lastSubject = (a) => {
    if (typeof a.subject === "string") {
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        return a.subject.pop();
    }
    else {
        return "Nothing";
    }
};
console.log(lastSubject(thirdGrade));
let pSize = ["XL"];
const animal = {
    name: "Dog",
};
let position = { x: 10, y: 20 };
const typeTest = {
    size: 500,
    position: [100, 0, 0],
};
// typeTest.position = [0, 0, 0]; // Console Error
// Literal Types. 더 엄격한 타입지정
let cat;
const literalTest = (a) => {
    console.log("Just hello");
};
literalTest("hello");
// literalTest(something); // Error
let 자료 = {
    name: "kim",
}; // 1. Object value 값을 그대로 타입으로 지정해줌 2. readonly가 적용됨. Object 잠그기 가능
const mine = (a) => { };
mine(자료.name);
