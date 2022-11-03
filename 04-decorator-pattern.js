/**
 * 动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
 * 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，
 * 而不会影响从这个类中派生的其他对象
 */

class Cellphone {
  create() {
    console.log("create a phone");
  }
}

class Decroator {
  constructor(cellphone) {
    this.cellphone = cellphone;
  }
  create() {
    this.cellphone.create();
    this.createShell(cellphone);
  }
  createShell() {
    console.log("create the shell of phone");
  }
}

// code test
let cellphone = new Cellphone();
cellphone.create();

let dec = new Decroator(cellphone);
dec.create();
