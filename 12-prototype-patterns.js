/**
 * 原型模式（prototype）是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
  sayHello() {
    console.log(`Hello, My name is ${this.name}`);
  }
}

let student = new Student("lucy");
student.sayHello();
