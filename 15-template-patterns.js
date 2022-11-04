/**
 * 模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。
 * 通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。
 * 子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。
*/

class Beverage {
    constructor({brewDrink, addCondiment}) {
        this.brewDrink = brewDrink
        this.addCondiment = addCondiment
    }
    /* 烧开水，共用方法 */
    boilWater() {console.log('水已经煮沸===共用')}
    /* 倒杯子里，共用方法 */
    pourCup() {console.log('倒进杯子里===共用')}
    /* 模版方法 */
    init() {
        this.boilWater()
        this.brewDrink()
        this.pourCup()
        this.addCondiment()
    }
}

/* 咖啡 */
const coffee = new Beverage({
    /* 冲泡咖啡，覆盖抽象方法 */
    brewDrink: function() {console.log('冲泡咖啡')},
    /* 加调味品，覆盖抽象方法 */
    addCondiment: function() {console.log('加点奶和糖')}
})
coffee.init()
