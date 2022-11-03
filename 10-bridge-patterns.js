/**
 * 桥接模式（Bridge）将抽象部分与它的实现部分分离，使它们都可以独立地变化。
 */

class Color {
  constructor(name) {
    this.name = name;
  }
}

class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  draw() {
    console.log(`${this.color.name} ${this.name}`);
  }
}

// test
let red = new Color("red");
let yellow = new Color("yellow");
let circle = new Shape("circle", red);
circle.draw();
let triangle = new Shape("triangle", yellow);
triangle.draw();
