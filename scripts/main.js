var mName = document.querySelector("h1");
mName.textContent = 'hello world';

var myImage = document.getElementById("mainPic01");
myImage.onclick = function (){
  var mySrc = myImage.getAttribute('src');
  if (mySrc==="images/2016-11-22-23-56-25.jpg"){
    myImage.setAttribute("src","images/QQ截图20170318125542.jpg");
  }
    else {
      myImage.setAttribute("src","images/2016-11-22-23-56-25.jpg");
    }
}

var storedName;
var mBtn;
mBtn = document.getElementById("nameBtn");

function getName(){
  var inputName=prompt("hello","input your name");
  localStorage.setItem("name",inputName);
  storedName = localStorage.getItem("name");
  alert (storedName);
  mName.textContent = "hello " + inputName;
}

mBtn.onclick = function (){
  getName();
}

if (!localStorage.getItem("name")){
  getName();
}else {
  mName.textContent = "hello "+ localStorage.name;
}
