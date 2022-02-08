function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const confirmModal = document.querySelector(".confirm-modal")
const confirmClose = document.querySelector(".confirm-close");
const confirmCloseBtn = document.querySelector(".confirm-modal-btn");
const eventForm = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Fermer le modal
modalClose.onclick = function () {
    modalbg.style.display = "none";
}