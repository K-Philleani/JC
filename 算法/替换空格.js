/*
  请实现一个函数，把字符串中的每个空格替换成"%20"。
  例如输入“We are happy.”，则输出“We%20are%20happy.”
*/

/** 
 * 正则表达式
 * @param {string} str
 */

 function repalceEmpty1(str) {
  const re = / /g
  return str.replace(re, "%20")
 }


 