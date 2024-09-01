"use strict";

var student = {
  age: 7,
  name: "Salmon",
  gender: "man",
  city: "nagoya"
}; // if (student.age) {
//     alert(student.age);
// } else {
//     alert('fuuuuck')
// }

var btn = document.querySelector("#btn");
var h2 = document.querySelector("h2");
var btn2 = document.querySelector("#btn1"); // colors

var redBtn = document.querySelector("#red");
var redBtn2 = document.querySelector("#yellow");
var redBtn3 = document.querySelector("#green");

btn.onclick = function () {
  if (student.name) {
    h2.innerHTML = "".concat(student.name);
  } else {
    h2.innerHTML = "Fuuuuuck";
  }
};

btn2.onclick = function () {
  if (h2) {
    h2.style.background = "gray";
  } else {
    alert("looooo");
  }
};

redBtn.onclick = function () {
  if (h2) {
    h2.style.background = "red";
  } else {
    alert("looooo");
  }
};

redBtn2.onclick = function () {
  if (h2) {
    h2.style.background = "blue";
  } else {
    alert("looooo");
  }
};

redBtn3.onclick = function () {
  if (h2) {
    h2.style.background = "green";
  } else {
    alert("looooo");
  }
}; // student = document.querySelector('h2');
// console.log(student);


var infoKey = "love";
var obj = {
  foo: function foo() {
    return infoKey + " " + "you";
  }
};
var love = {
  person: function person() {
    return obj.foo() + ' ' + 'Diyora';
  }
};
console.log(obj.foo());
console.log(love.person());