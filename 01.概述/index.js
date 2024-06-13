// Math.random()  用于生成随机数
function getUserName() {
  if (Math.random() < 0.5) {
      return "yuan jin";
  }
  return 404;
}

let myname= getUsername();
myneam = myname.split(" ") // 这里会抛出错误，如果myname是数字
    .filter(it => it)
    .map(it => it[0].touperCase() + it.substr(1))
    .join(" ");
//1. 第一处错误 函数名写错
//2. 第二处错误 getUserName的返回值可能是number类型也能是string类型 myname是number类型使用split方法会出错
//3.  第三处错误 myneam变量写错
//4.  第四处错误 touperCase方法名字错误
