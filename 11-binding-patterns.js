/**
 * 将对象组合成树形结构，以表示“整体-部分”的层次结构。
 * 通过对象的多态表现，使得用户对单个对象和组合对象的使用具有一致性。
 */

class TrainOrder {
  create() {
    console.log("Creating a train Ticket Order");
  }
}

class HotelOrder {
  create() {
    console.log("Creating a hotel Order");
  }
}

class TotalOrder {
  constructor() {
    this.orderList = [];
  }
  addOrder(order) {
    this.orderList.push(order);
    return this;
  }
  create() {
    this.orderList.forEach((item) => {
      item.create();
    });
    return this;
  }
}

// test
let train = new TrainOrder();
let hotel = new HotelOrder();
let total = new TotalOrder();
total.addOrder(train).addOrder(hotel).create();
