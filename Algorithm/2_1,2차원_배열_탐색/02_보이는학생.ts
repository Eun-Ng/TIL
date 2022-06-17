// 한 줄로 쭉 섰을때 보이는 학생의 수
// 이중for문은 시간복잡도 비효율
const student = (a: number[]): number => {
  let answer: number = 0;
  let sawStudent: number[] = [];

  sawStudent.push(a[0]);
  for (let i = 1; i < stu.length; i++) {
    if (sawStudent[sawStudent.length - 1] < a[i]) {
      sawStudent.push(a[i]);
    }
    console.log(sawStudent);
    answer = sawStudent.length;
  }
  return answer;
};

const stu = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(student(stu)); // 5
