/**
 * 在不破坏封装性的前提下，捕获一个对象的内部状态，
 * 并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。
 */

// 备忘类
class Memento {
  constructor(content) {
    this.content = content;
  }
  getContent() {
    return this.content;
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = [];
  }
  add(memento) {
    this.list.push(memento);
  }
  get(index) {
    return this.list[index];
  }
}

// 编辑器
class Editor {
  constructor() {
    this.content = null;
  }
  setContent(content) {
    this.content = content;
  }
  getContent() {
    return this.content;
  }
  saveContentToMemento() {
    return new Memento(this.content);
  }
  getContentFromMemento(memento) {
    this.content = memento.getContent();
  }
}

// test

let editor = new Editor();
let careTaker = new CareTaker();

editor.setContent("111");
editor.setContent("222");
careTaker.add(editor.saveContentToMemento());
editor.setContent("333");
careTaker.add(editor.saveContentToMemento());
editor.setContent("444");

console.log(editor.getContent()); //444
editor.getContentFromMemento(careTaker.get(1));
console.log(editor.getContent()); //333

editor.getContentFromMemento(careTaker.get(0));
console.log(editor.getContent()); //222
