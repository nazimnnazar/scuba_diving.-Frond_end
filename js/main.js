// const myButton = document.getElementById("myButton");
// const myBox = document.getElementById("myBox");

// myButton.addEventListener("click", () => {
// if (myBox.style.display === "none") {
//   myBox.style.display = "block";
// } else {
//   myBox.style.display = "none";
// }
// });

// const mystatus = document.getElementById("mystatus");
// const status = document.getElementById("status");

// mystatus.addEventListener("click", () => {
// if (status.style.display === "none") {
//     status.style.display = "block";
// } else {
//     status.style.display = "none";
// }
// });

// var settingsmenu = document.querySelector(".settings-menu");

// function settingsMenuToggle(){
//   settingsmenu.classList.toggle(".settings-menu-height")
// }                                     bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvbbvv                        

const roomBtn = document.getElementById("roomBtn");
const statusBtn = document.getElementById("statusBtn");
const roomBox = document.getElementById("roomBox");
const statusBox = document.getElementById("statusBox");

roomBtn.addEventListener("click", function() {
    if (roomBox.style.display === "block") {
        roomBox.style.display = "none";
    } else {
        roomBox.style.display = "block";
        statusBox.style.display = "none";
    }
});

statusBtn.addEventListener("click", function() {
    if (statusBox.style.display === "block") {
        statusBox.style.display = "none";
    } else {
        statusBox.style.display = "block";
        roomBox.style.display = "none";
    }
});