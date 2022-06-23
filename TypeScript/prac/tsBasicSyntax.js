let 이름 = 'Namgung';
// union type
let product = ['shirts', 'pants'];
let numbers = [1, '2', 3];
let obj = { a: '123' };
// any type. 모든 자료형 허용
let any;
any = 123;
any = '123';
any = true;
any = {};
any = [];
// unknown type. any랑 기능은 똑같지만 보다 안정됨
let unknown = 123;
let un = '123'; // Input number? -> error
let john = [123, true];
let member1 = { name: 'mike', gender: 'male' };
// class 타입 지정
class User {
    name;
    constructor(name) {
        this.name = 'eun';
    }
}
const eun = { name: 'eun', age: 27 };
const favoriteSong = {
    songName: 'As It Was',
    singer: 'Harry Styles',
};
let project = {
    member: ['kim', 'park'],
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
        console.log('이름이 없습니다');
    }
};
let lengthChecker = (param) => {
    return param.toString().length;
};
// Narrowing. 타입 확정지어주기
const myFunc = (x) => {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
};
console.log(myFunc('123'));
// undefined narrowing
const undeNar = (a) => {
    if (a && typeof a === 'string') {
        // a가 undefined면 false, string 이면 true
    }
};
function fishBird(animal) {
    if ('swim' in animal) {
        return animal.swim;
    }
    return animal.fly;
}
// 2. instanceof 연산자. 부모 클래스로 유추
let 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log('참이에요');
}
function 함수(x) {
    if (x.wheel === 4) {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
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
        if (typeof a === 'string') {
            convertingArr.push(Number(a));
        }
        else {
            convertingArr.push(a);
        }
    });
    return convertingArr;
};
console.log(converting(['1', '2', 3])); // [1, 2, 3]
// 문제 2. 마지막 과목 출력
const firstGrade = { subject: 'math' };
const secondGrade = { subject: ['math', 'science'] };
const thirdGrade = { subject: ['math', 'science', 'english'] };
const lastSubject = (a) => {
    if (typeof a.subject === 'string') {
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        return a.subject.pop();
    }
    else {
        return 'Nothing';
    }
};
console.log(lastSubject(thirdGrade));
let pSize = ['XL'];
const animal = {
    name: 'Dog',
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
    console.log('Just hello');
};
literalTest('hello');
// literalTest(something); // Error
let 자료 = {
    name: 'kim',
}; // 1. Object value 값을 그대로 타입으로 지정해줌 2. readonly가 적용됨. Object 잠그기 가능
const mine = (a) => { };
mine(자료.name);
const funcType = (a) => {
    return 10;
};
const cutZero = (a) => {
    let result = a.replace(/0/g, '');
    return result;
};
const rmDash = (a) => {
    let result = a.replace(/-/g, '');
    return Number(result);
};
console.log(cutZero('11110000'));
console.log(rmDash('010-1234-5678'));
const allFunc = (a, func1, func2) => {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
};
allFunc('010-1234-5678', cutZero, rmDash);
// DOM Manipulation
// JS와는 다르게 DOM 조작을 할때도 narrowing이 필요함
// 1. if문
const title1 = document.querySelector('#title');
if (title1 !== null) {
    title1.innerHTML = '반가워요';
}
// 2. instanceof 연산자
const title2 = document.querySelector('#title');
if (title2 instanceof Element) {
    title2.innerHTML = '반가워요';
}
// 3. assertion
const title3 = document.querySelector('#title');
title3.innerHTML = '반가워요';
// 4. ?. optional chaining
const title4 = document.querySelector('#title');
if (title4?.innerHTML !== undefined) {
    title4.innerHTML = '반가워요';
}
// TypeScript를 이용해 DOM 조작시 해당 요소의 타입을 narrowing 해야함
const link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://www.kakao.com';
}
const btn = document.querySelector('#button');
btn?.addEventListener('click', function () {
    console.log('hi');
});
const changeImg = document.querySelector('#image');
if (changeImg instanceof HTMLImageElement) {
    changeImg.src =
        'https://images.unsplash.com/photo-1653815918843-13a7072eeff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
}
// class type
class TypeClass {
    name;
    constructor(param) {
        this.name = param;
    }
}
let 사람1 = new TypeClass('hi');
class Car {
    model;
    price;
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
// 타입별 배열 반환
class Word {
    num;
    str;
    constructor(...param) {
        let numbers = [];
        let words = [];
        param.forEach((i) => {
            if (typeof i === 'number') {
                numbers.push(i);
            }
            else if (typeof i === 'string') {
                words.push(i);
            }
        });
        this.num = numbers;
        this.str = words;
    }
}
let word = new Word('kim', 123, 456, 789, 'park');
console.log(word);
let 네모 = { color: 'red', width: 100 };
let 상품 = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone'],
};
let shoppingCart = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
const calcObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
};
// return Max Number
// 1.
const maxNum = (...a) => {
    let answer = 0;
    for (let x of a) {
        if (answer < x) {
            answer = x;
        }
    }
    return answer;
};
console.log(maxNum(6, 3, 7, 9));
const desFunc = ({ user, comment, admin }) => {
    console.log(user, comment, admin);
};
desFunc({ user: 'kim', comment: [3, 5, 4], admin: false });
const arrFunc = ([a, b, c]) => {
    console.log(a, b, c);
};
arrFunc([40, 'wine', false]);
// never type. 코드에 등장할때 있음
const neverType = () => {
    throw new Error(); // or 무한 loop문
};
// public, private 키워드
class User1 {
    name;
    familyName;
    constructor() {
        this.name = 'kim';
        let hello = this.familyName + '안뇽'; //가능
    }
}
let 유저1 = new User1();
유저1.name = 'park'; //가능
// 유저1.familyName = 456; //에러남
class User2 {
    name;
    familyName;
    constructor() {
        this.name = 'kim';
        let hello = this.familyName + '안뇽';
    }
    changeSecret() {
        this.familyName = 'park';
    }
}
let 유저2 = new User2();
// 유저2.familyName = 'park';  //에러남
유저2.changeSecret(); // 함수 이용해서 변경 가능
// protected: private과 유사하나, extends시 값 변경 가능
// static 키워드: 부모 class에 직접 부여돼서 자식에세 상속 불가능
class User3 {
    static x = 10;
    static y = 20;
    static addOne(파라미터) {
        User3.x += 파라미터;
    }
    static printX() {
        console.log(User3.x);
    }
}
User3.addOne(3);
User3.addOne(10);
User3.printX();
// Generic
function geneFunc(x) {
    return x[0];
}
let a = geneFunc([4, 2]);
// Type 파라미터 제한
function constraintGeneFunc(x) {
    return x - 1;
}
let b = constraintGeneFunc(100);
// 1. length checker
function lengthCheck(x) {
    console.log(x.length);
}
lengthCheck('hello');
lengthCheck(['kim', 'park']);
let data = '{"name": "Eun", "age": 27}';
const convertObject = (a) => {
    return JSON.parse(a);
};
console.log(convertObject(data));
