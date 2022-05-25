// const 함수 = (a) => a + 10;
// console.log(함수(5));

// [1, 2, 3, 4].forEach((a) => console.log(a));

// document
//   .getElementById("버튼")
//   .addEventListener("click", (e) => console.log(e.currentTarget));

// let 오브젝트 = {
//   함수: () => {
//     console.log(this);
//   },
// };

// 오브젝트.함수();

// 1번
let 사람 = {
  name: "손흥민",
  sayHi: () => {
    console.log("안녕 나는 " + 사람.name);
  },
};

사람.sayHi();

// 2번
let arr = {
  data: [1, 2, 3, 4, 5],
};

arr.allPlus = () => {
  let dataPlus = 0;
  arr.data.forEach((a) => {
    dataPlus += a;
  });
  console.log(dataPlus);
};

// arr.allPlus = function () {
//   let dataPlus = 0;
//   this.data.forEach(function (a) {
//     dataPlus += a;
//   });
//   console.log(dataPlus);
// };

arr.allPlus();

// 3번
document.querySelector("#버튼").addEventListener("click", function () {
  setTimeout(() => {
    console.log(this);
    console.log(this.innerHTML);
  }, 2000);
});

// spread operator
const sumArr = [10, 20, 30];

let sum = (a, b, c) => {
  console.log(a + b + c);
};

sum(...sumArr);
sum.apply(undefined, sumArr);

// apply
let hello = {
  hi: function () {
    console.log("안녕 " + this.name);
  },
};

let 손흥민 = {
  name: "손흥민",
};

hello.hi.apply(손흥민);

// default parameter
let sumFunc = (a, b = 10) => {
  console.log(a + b);
};

sumFunc(1); // 11
sumFunc(1, 2); // 3

// if parameter is function
let replaceFunc = () => {
  return 10;
};

let multiplyFunc = (a, b = replaceFunc()) => {
  console.log(a * b);
};

multiplyFunc(2); // 20

// arguments. 옛날 문법, arrow function 사용 불가
function argFunc(a, b, c) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

argFunc(1, 2, 3);

// rest parameter
function restFunc(a, b, ...rest) {
  console.log(rest);
}

restFunc(1, 2, 3, 4, 5); // [3, 4, 5]

let restArrowFunc = (...rest) => {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
};

restArrowFunc(1, 2, 3, 4);

// 글자세기
let checkWord = (word) => {
  let result = {};
  [...word].forEach((a) => {
    if (result[a] > 0) {
      result[a] += 1;
    } else {
      result[a] = 1;
    }
  });
  console.log(result);
};

checkWord("aaaaabbbcddeeeee"); // {a: 5, b: 3, c: 1, d: 2, e: 5}

// constructor
function Product(pName, pPrice) {
  this.name = pName;
  this.price = pPrice;
  this.taxPrice = function () {
    console.log(
      "부가세 포함 가격은 " + (this.price + this.price * 0.1) + "원 입니다."
    );
  };
}

const shirts = new Product("shirts", 30000);
const pants = new Product("pants", 40000);

console.log(shirts);
console.log(shirts.taxPrice());

function Student(sName, sAge) {
  this.name = sName;
  this.age = sAge;
  this.sayHi = function () {
    console.log("안녕 나는 " + this.name + "이야.");
  };
}

const student1 = new Student("손흥민", 30);
const student2 = new Student("김범수", 28);
const student3 = new Student("남궁은", 27);

student3.sayHi();

// prototype
Product.prototype.pGender = "Men's Wear";
console.log(shirts.pGender);

console.log(Array.prototype);
console.log(shirts.__proto__); // 부모 prototype 탐색

// const 부모 = {성: "남궁", 나이: 50};
// const 자식 = {};

// 자식.__proto__ = 부모;
// console.log(자식.성);

let numArr = [1, 2, 3, 4];

Array.prototype.removeNumber = function (e) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === e) {
      this.splice(i, 1);
    }
  }
};

numArr.removeNumber(4);
console.log(numArr); // [1, 2, 3]

// ES5 Inheritance
// Object.create(프로토타입 Object);

// const 부모 = {성: "남궁", 나이: 60};
// const 자식 = Object.create(부모);
// const 손주 = Object.create(자식);
// 자식.나이 = 33;
// 손주.나이 = 1;
// console.log(자식.나이);
// console.log(손주.나이);

// ES6 Inheritance

class 부모 {
  constructor(param) {
    this.성 = param;
    // this.helloWorld = function () {
    //   console.log("Hello World!");
    // }; // 자식에 상속 가능
  }
  helloWorld() {
    console.log("Hello World!"); // 부모 prototype에만 추가됨
  }
}

const 자식 = new 부모("남궁");
console.log(자식);
console.log(자식.__proto__);
console.log(Object.getPrototypeOf(자식));

// extends & super
class 할아버지 {
  constructor(name) {
    this.성 = "남궁";
    this.name = name;
  }
}

class 아버지 extends 할아버지 {
  constructor(name) {
    super(name);
    this.나이 = 50;
  }
}

const 아버지1 = new 아버지("아무개");
console.log(아버지1);

// getter & setter
class somebody {
  constructor(나이) {
    this.name = "김아무개";
    this.age = Number(나이);
  }
  get koreanAge() {
    return this.age + 1;
  }
  set setAge(나이) {
    this.age = Number(나이);
  }
}

const somebody1 = new somebody();
somebody1.setAge = "26";
console.log(somebody1.koreanAge);

// practice
class Dog {
  constructor(종, 털색깔) {
    this.종 = String(종);
    this.털색깔 = String(털색깔);
  }
  한살먹기() {
    if (this instanceof Cat) {
      return this.나이 + 1;
    }
  }
}

const 말티즈 = new Dog("말티즈", "하얀색");
const 시바 = new Dog("시바", "갈색");
console.log(말티즈);

class Cat extends Dog {
  constructor(종, 털색깔, 나이) {
    super(종, 털색깔);
    this.나이 = Number(나이);
  }
}

const 스코티쉬폴드 = new Cat("스코티쉬폴드", "회색", 3);
const 코숏 = new Cat("코숏", "노란색", 2);
console.log(스코티쉬폴드);
console.log(코숏.한살먹기());

class Unit {
  constructor(공격력, 체력) {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return Number(this.공격력 + this.체력);
  }
  set heal(힐) {
    this.체력 = Number(this.체력 + 힐);
  }
}

const Unit1 = new Unit();
console.log(Unit1.battlePoint);
Unit1.heal = 50;
console.log(Unit1.체력);

let data = {
  odd: [],
  even: [],
  set setter(num) {
    // if ((num/2) = 1) {
    //   odd = [...num]
    // } else {
    //   even = [...num]
    // }
  },
  get getter() {
    return this.num.sort();
  },
};

// data.setter(1, 2, 3, 4, 5);
