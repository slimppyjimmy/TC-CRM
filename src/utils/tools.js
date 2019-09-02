/**
 * 获取浏览器窗口的高度的兼容性方法
 * @return {Number} 返回高度
 */
function getViewHeight() {
  if (window.innerHeight) {
    return window.innerHeight
  } else {
    if (document.compatMode === 'BackCompat') {
      return document.body.clientHeight
    } else {
      return document.documentElement.clientHeight
    }
  }
}

/**
 * 获取html文档的宽高的兼容性函数
 * @return {Object} 包含宽度和高度的对象
 */
function getHtmlSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}

/**
 * 获取鼠标位置相对于当前html文档的坐标（封装pageX/Y）
 * #params {Object} Event对象
 * @return {Object} X/Y坐标
 */
function pagePos(ev) {
  let e = ev || window.event,
    sLeft = this.getScroll().left,
    sTop = this.getScroll().top,
    cLeft = document.documentElement.clientLeft || 0,
    cTop = document.documentElement.clientTop || 0;
  return {
    X: e.clientX + sLeft - cLeft,
    Y: e.clientY + sTop - cTop
  }
}

/**
 * 判断元素的数据类型，弥补系统内置的typeof的不足
 * @param {All} val 被判断的元素
 * @return {String} 返回元素的数据类型
 */
function typeOf(val) {
  let res = {
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Number]': 'object Number',
    '[object String]': 'object String',
    '[object Boolean]': 'object Boolean',
  };
  if (val === undefined) {
    return '请传参数';
  }
  let type = typeof (val);
  let toStr = Object.prototype.toString;
  if (val === null) {
    return 'null';
  } else if (type === 'object') {
    let ret = toStr.call(val);
    return res[ret];
  } else {
    return type;
  }
}

/**
 * 生成count个min和max之间的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Number} count 随机数的个数
 * @return {Array} 返回生成的随机数数组
 */
function randomNum(min = 0, max = 255, count = 3) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
  }
  return arr;
}

/**
 * 生成一组min到max之间的不重复的随机序列，长度为count
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Number} count 随机数的个数，不能大于最大值和最小值的差
 * @return {Array} 返回数组
 */
function randomNoRepeat(min = 0, max = 10, count = 11) {
  count = count > (max - min) ? (max - min + 1) : count;
  let arr = [];
  let temp;
  for (let i = 0; i < count; i++) {
    let flag = true;
    temp = Math.round(Math.random() * (max - min) + min);
    for (let j = 0; j < arr.length; j++) {
      if (temp === arr[j]) {
        flag = false;
        i--;
      }
    }
    if (flag === true) {
      arr.push(temp);
    }
  }
  return arr;
}

/**
 * 查询字符串的字节长度
 * @param {String} str
 * @return {Number}
 */
function retBytes(str) {
  let count = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255)
      count++;
  }
  return count || 0;
}

/**
 * 通过自定义数组的sort方法，对数组进行随机排序
 * @param {Array} arr
 * @return {Object} tools对象
 */
function randomSort(arr) {
  arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}

/**
 * 生成一个随机数，时间戳+6位随机数
 * @return {String}
 */
function getRandomId() {
  let time = new Date().getTime();
  let num = Math.round(Math.random()*(999999-100000) + 100000)
  return String(time + num)
}

/**
 * 实现前端分页，将数组处理成二维数组
 * @return {Array}
 */
function pageData(arr,count) {
  let len = arr.length,
    pageArr = [],
    index = 0;
  while (index < len){
    pageArr.push(arr.slice(index,index+=count))
  }
  return pageArr
}

export default {
  getViewHeight,
  getHtmlSize,
  pagePos,
  typeOf,
  randomNum,
  randomNoRepeat,
  retBytes,
  randomSort,
  getRandomId,
  pageData
}
