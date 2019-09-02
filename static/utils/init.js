/**
 * 在Array的原型上添加数组去重方法
 */
Array.prototype.unique = function () {
  let check = {};
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!check[this[i]]) {
      check[this[i]] = true;
      arr.push(this[i]);
    }
  }
  return arr;
};

/**
 * 在String的原型上添加字符串去重方法
 */
String.prototype.unique = function () {
  let check = {};
  let newStr = '';
  for (let i = 0; i < this.length; i++) {
    if (!check[this[i]]) {
      check[this[i]] = true;
      newStr += this[i];
    }
  }
  return newStr;
};

/**
 * 在Date的原型上添加获取day天后的日期的方法
 *  @param {Number} day
 *  @return {String} 年-月-日
 */
Date.prototype.getFuture = function (day) {
  let nowDate = this.getDate();
  this.setDate(nowDate + day);
  return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate();
};

