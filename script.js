let student = {
    age: 7,
    name: 'Salmon',
    gender: 'man',
    city: 'nagoya'
}

// if (student.age) {
//     alert(student.age);
// } else {
//     alert('fuuuuck')
// }

let btn = document.querySelector("#btn");
let h2 = document.querySelector("h2");
let btn2 = document.querySelector("#btn1");
// colors
let redBtn = document.querySelector("#red");
let redBtn2 = document.querySelector("#yellow");
let redBtn3 = document.querySelector("#green");


btn.onclick = () => {
    if (student.name) {
        h2.innerHTML = `${student.name}`;
    }
    else {
        h2.innerHTML = "Fuuuuuck"
    }
}
btn2.onclick = () => {
    if (h2) {
        h2.style.background = "gray";
    }
    else {
        alert("looooo");
    }
}
redBtn.onclick = () => {
    if (h2) {
        h2.style.background = "red";
    } else {
        alert("looooo");
    }
}
redBtn2.onclick = () => {
    if (h2) {
        h2.style.background = "blue";
    } else {
        alert("looooo");
    }
}
redBtn3.onclick = () => {
    if (h2) {
        h2.style.background = "green";
    } else {
        alert("looooo");
    }
}
// student = document.querySelector('h2');
// console.log(student);