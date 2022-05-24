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

const 부모 = {성: "남궁"};
const 자식 = {};

자식.__proto__ = 부모;
console.log(자식.성);

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
