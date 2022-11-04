/**
 * 运用共享技术有效地支持大量细粒度对象的复用。系统只使用少量的对象，而这些对象都很相似，状态变化很小，
 * 可以实现对象的多次复用。由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称为轻量级模式，它是一种对象结构型模式
 */

let examCarNum = 0; //驾考车辆总数
/* 驾考车辆对象 */
class ExamCar {
  constructor(carType) {
    examCarNum++;
    this.carId = examCarNum;
    this.carType = carType ? "手动挡" : "自动挡";
    this.usingState = false; //是否正在使用
  }
  /* 在本车上考试 */
  examine(candidateId) {
    return new Promise((resolve) => {
      this.usingState = true;
      console.log(
        `考生-${candidateId} 开始在${this.carType}驾考车-${this.carId}上考试`
      );
      setTimeout(() => {
        this.usingState = false;
        console.log(
          `%考生-${candidateId}在${this.carType}驾考车-${this.carId}上考试完毕`
        ),
          resolve(); // 0~2秒后考试完毕
      }, Math.random() * 2000);
    });
  }
}

/* 手动挡汽车对象池 */
ManualExamCarPool = {
  _pool: [], // 驾考车对象池
  _candidateQueue: [], //考生队列

  /* 注册考生ID列表 */
  registCandiates(candidateList) {
    candidateList.forEach((candidateId) => this.registCandiate(candidateId));
  },

  /* 注册手动挡考生 */
  registCandiate(candidateId) {
    const examCar = this.getManualExamCar(); // 找一个未被占用的手动挡驾考车
    if (examCar) {
      examCar
        .examine(candidateId) // 开始考试，完成后让队列中的下一个考生开始考试
        .then(() => {
          const nextCandidateId =
            this._candidateQueue.length && this._candidateQueue.shift();
          nextCandidateId && this.registCandiate(nextCandidateId);
        });
    } else this._candidateQueue.push(candidateId);
  },

  /* 注册手动挡车 */
  initManualExamCar(manualExamCarNum) {
    for (let i = 1; i <= manualExamCarNum; i++) {
      this._pool.push(new ExamCar(true));
    }
  },

  /* 获取状态为未被占用的手动挡车 */
  getManualExamCar() {
    return this._pool.find((car) => !car.usingState);
  },
};

ManualExamCarPool.initManualExamCar(3); // 初始化3辆驾考车
ManualExamCarPool.registCandiates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 初始化10个考生
