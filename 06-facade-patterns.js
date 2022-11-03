/**
 * 为子系统的一组接口提供一个一致的界面，定义了一个高层接口，
 * 这个接口使子系统更加容易使用
 */

// 1.兼容浏览器事件绑定
let addMyEvent = function (el, ev, fn) {
  if (el.addEventListenner) {
    el.addEventListenner(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + ev, fn);
  } else {
    el["on" + ev] = fn;
  }
};

// 2.封装接口
let myEvemt = {
  // ...
  stop: (e) => {
    e.stopPropagetion();
    e.preventDefault();
  },
};
