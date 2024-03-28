document.write("hello world!");

//函数1
//获取用户姓名并返回相应的问候语
function sayHello(){
 var response = prompt("What's your name?");
 alert("Hello " + response + ", have a nice day!");
};
//sayHello()函数被前端点击按钮button onclick="sayHello()"触发

//函数2 获取特定ID的元素并设置其样式
//被HTML里button onclick引用形成交互效果
function showTopic(){
  var x = document.getElementById('demo')//demo是ID选择器里的ID名（CSS不careID、class，但是JS在意）
  //document指一整个HTML文档，
  //document.getElementById() 是 JavaScript 提供的内置函数
  x.style.fontSize = "25px";
  x.style.color = "red";//把ID为demo的元素样式字体、颜色改变
};

//函数3 a+b
function add(a,b){
  return a + b;
};
