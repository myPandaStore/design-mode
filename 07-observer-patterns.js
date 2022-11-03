/**
 * 定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，
 * 这个主题对象的状态发生变化时就会通知所有的观察者对象，使它们能够自动更新自己，
 * 当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。
 */

// 发布 & 订阅  一对多

// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`);
  }
}

// test
let s = new Subject();
let o1 = new Observer("o1", s);
let o2 = new Observer("o2", s);

s.setState(12);
