/**
 * 解除对象与对象之间的紧耦合关系。增加一个中介者对象后，
 * 所有的相关对象都通过中介者对象来通信，而不是互相引用，
 * 所以当一个对象发生改变时，只需要通知中介者对象即可。
 * 中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。
 * 中介者模式使网状的多对多关系变成了相对简单的一对多关系
 * （类似于观察者模式，但是单向的，由中介者统一管理。）
 */

class A {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setB();
    }
  }
}

class B {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if (m) {
      m.setA();
    }
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  setA() {
    let number = this.b.number;
    this.a.setNumber(number * 10);
  }
  setB() {
    let number = this.a.number;
    this.b.setNumber(number / 10);
  }
}

let a = new A();
let b = new B();
let m = new Mediator(a, b);
a.setNumber(10, m);
console.log(a.number, b.number);
b.setNumber(10, m);
console.log(a.number, b.number);
