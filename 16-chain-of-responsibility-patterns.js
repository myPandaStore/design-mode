/**
 * 使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，
 * 将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止
 */

// 请假审批，需要组长审批，经理审批，总监审批
class Action {
  constructor(name) {
    this.name = name;
    this.nextAction = null;
  }
  setNextAction(action) {
    this.nextAction = action;
  }
  handle() {
    console.log(`${this.name}审批`);
    if (this.nextAction != null) {
      this.nextAction.handle();
    }
  }
}

// test
let a1 = new Action("组长");
let a2 = new Action("经理");
let a3 = new Action("总监");
a1.setNextAction(a2);
a2.setNextAction(a3);
a1.handle();
