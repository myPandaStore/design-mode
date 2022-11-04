/**
 * 表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。
 */

// 访问者
class Visitor {
  constructor() {}
  visitConcreteElement(ConcreteElement) {
    ConcreteElement.operation();
  }
}

// 元素类
class ConcreteElement {
  constructor() {}
  operation() {
    console.log("ConcreteElement.operation invoked");
  }
  accept(visitor) {
    visitor.visitConcreteElement(this);
  }
}

// client
let visitor = new Visitor();
let element = new ConcreteElement();
element.accept(visitor);
