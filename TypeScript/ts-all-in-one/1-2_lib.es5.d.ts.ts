import { textChangeRangeIsUnchanged } from 'typescript';

// 제네릭 분석
interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
}

// forEach 제네릭 분석
[1, 2, 3].forEach((value) => {
  console.log(value);
});
['1', '2', '3'].forEach((value) => {
  console.log(value);
});
[true, false, true].forEach((value) => {
  console.log(value);
});
['123', 123, true].forEach((value) => {
  console.log(value);
});

// map 제네릭 분석
const strings = [1, 2, 3].map((item) => item.toString()); // ['1', '2', '3'] string[]

// filter 제네릭 분석
const predicate = (value: string | number): value is string => typeof value === 'string';
const filtered = ['1', 2, '3', 4, '5'].filter(predicate); // ['1', '3', '5'] string[]

// 타입 직접 만들기
interface ArrEx<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (v: T, i: number) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

// forEach 타입 직접 만들기
const forEachEx: ArrEx<number> = [1, 2, 3];
forEachEx.forEach((item) => {
  console.log(item);
});
forEachEx.forEach((item) => {
  console.log(item);
  return '3';
});

const forEachEx2: ArrEx<string> = ['1', '2', '3'];
forEachEx2.forEach((item) => {
  console.log(item);
});
forEachEx2.forEach((item) => {
  console.log(item);
  return '3';
});

// map 타입 직접 만들기
const mapEx: ArrEx<number> = [1, 2, 3];
const mapEx2 = mapEx.map((v, i) => v + 1); // [2, 3, 4]
const mapEx3 = mapEx.map((v, i) => v.toString()); // ['2', '3', '4']; string[]
const mapEx4 = mapEx.map((v, i) => v % 2 === 0); // [false, true, false]; boolean[]
const mapEx5 = forEachEx2.map((v, i) => +v); // string[] -> number[]

// filter 타입 직접 만들기
const filterEx: ArrEx<number> = [1, 2, 3];
const filterEx2 = filterEx.filter((v): v is number => v % 2 === 0);

const filterEx3: ArrEx<number | string> = [1, '2', 3, '4', 5];
const filterEx4 = filterEx3.filter((v): v is string => typeof v === 'string'); // ['2', '4']; string[]
const filterEx5 = filterEx3.filter((v): v is number => typeof v === 'number'); // [1, 3, 5,]; number[];

// 공변성, 반공변성
function covariance(x: string | number): number {
  return +x;
}
type covarianceEx = (x: string) => number | string;
const covarianceEx2: covarianceEx = covariance;

// 타입 오버로딩
declare function overload(x: number, y: number): number;
declare function overload(x: string, y: string, z: number): string;

overload(1, 2);
overload(2, 3);

interface overload2 {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const overload3: overload2 = (x: any, y: any) => x + y;

class overload4 {
  overload3(x: number, y: number): number;
  overload3(x: string, y: string): string;
  // 구현부
  overload3(x: any, y: any) {
    return x + y;
  }
}

const overload5 = new overload4().overload3(1, 2);

// 에러 처리법
interface Axios {
  get(): void;
}
class CustomError extends Error {
  response?: {
    data: any;
  };
}
declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err) {
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }
})();
