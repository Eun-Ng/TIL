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
let pSize = ["XL"];
// 함수에 타입지정. parameter에도 return 값에도 가능
const func = (a) => {
    return a * 2;
};
func(2);
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
