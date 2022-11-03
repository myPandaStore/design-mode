/**
 * 允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类
 */

// 状态 （弱光、强光、关灯）
class State {
  constructor(state) {
    this.state = state;
  }
  handle(context) {
    console.log(`this is ${this.state} light`);
    context.setState(this);
  }
}

class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

// test
let context = new Context();
let weak = new State("weak");
let strong = new State("strong");
let off = new State("off");

// weak light
weak.handle(context);
console.log(context.getState());

// strong light
strong.handle(context);
console.log(context.getState());

// off light
off.handle(context);
console.log(context.getState());
