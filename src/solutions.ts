// Problem-1
function filterEvenNumbers(arrays: number[]): number[] {
  let evenNum: number[] = [];
  for (const arr of arrays) {
    if (arr % 2 == 0) {
      evenNum.push(arr);
    }
  }
  return evenNum;
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//Problem-2
function reverseString(revStr: string): string {
  let str = "";
  for (let i = revStr.length - 1; i >= 0; i--) {
    str += revStr[i];
  }
  return str;
}
reverseString("typescript");

//Problem-3
function checkType(StringOrNumber: string | number) {
  if (typeof StringOrNumber === "string") {
    return "String";
  } else if (typeof StringOrNumber == "number") {
    return "Number";
  }
}
checkType("Hello");
checkType(32);

//Problem-4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
const userName = getProperty(user, "name");

//Problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

//Problem-6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

//Problem-7

function getIntersection(one: number[], two: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      if (one[i] == two[j]) {
        result.push(one[i]);
      }
    }
  }
  return result;
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
