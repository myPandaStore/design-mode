/**
 * 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。
 * 该模式使一个类的实例化延迟到了子类。
 * 而子类可以重写接口方法以便创建的时候指定自己的对象类型。
 * **/
class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log("init");
  }
  fun() {
    console.log("fun");
  }
}

class Factory {
  create(name) {
    return new Product(name);
  }
}

// use
let factory = new Factory();
let p = factory.create("p1");
p.init();
p.fun();
