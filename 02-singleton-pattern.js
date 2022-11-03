/**
 * 一个类只有一个实例，并提供一个访问它的全局访问点。
 */
class LoginForm {
  constructor() {
    this.state = "hide";
  }
  show() {
    if (this.state === "show") {
      alert("已经显示");
      return;
    }
    this.state = "show";
    console.log("登陆框显示成功");
  }
  hide() {
    if (this.state === "hide") {
      alert("已经隐藏");
      return;
    }
    this.state = "hide";
    console.log("登陆框隐藏成功");
  }
}

/*
new 对象包括2步，
1）加载类；
2）并且实例化。

Class的对象.getInstance()，仅仅只是实例化；
也就是说，在执行 Class的对象.getInstance() 之前一定要先加载对应的类
*/
LoginForm.getInStance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();
