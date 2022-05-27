let 이름 = "Namgung";
// union type
let product = ["shirts", "pants"];
let 손흥민 = { name: "손흥민" };
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
