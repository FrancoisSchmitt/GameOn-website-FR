// DOM
const firstname = document.forms["reserve"]["first"];
const lastname = document.forms["reserve"]["name"];
const email = document.forms["reserve"]["email"];
const birthdate = document.forms["reserve"]["birthdate"];
const quantity = document.forms["reserve"]["quantity"];
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const formData = document.querySelectorAll(".formData");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");


// DOM event form
const eventForm = document.querySelector("form");

// DOM form validate
const confirmModal = document.querySelector(".confirm-modal")
const confirmClose = document.querySelector(".confirm-close");
const confirmCloseBtn = document.querySelector(".confirm-modal-btn");

// date Format
const dateCurrent = new Date();

// regex
const regexNumb = /^[0-9]+$/;
const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Fermer le modal de confirmation.
confirmClose.onclick = function () {
  confirmModal.style.display = "none";
}

confirmCloseBtn.onclick = function () {
  confirmModal.style.display = "none";
}

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  // lastname verif

  if (firstname.value.length >= 2) {
    formData[0].setAttribute("data-success-visible", true);
    formData[0].setAttribute("data-error-visible", false);

  }
  else {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`);
  }

  // name verif

  if (lastname.value.length >= 2) {
    formData[1].setAttribute("data-success-visible", false);

  }
  else {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du nom.`);
  }

  // email verif

  if (email.value.match(validRegexEmail)) {
    formData[2].setAttribute("data-success-visible", false);

  }
  else {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", `Votre email n'est pas valide. exemple : email@to.me`);
  }

  // birthdate verif

  if (!birthdate.value == "") {
    formData[3].setAttribute("data-success-visible", false);

  }
  else {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", `Vous devez entrer votre date de naissance.`);
  }

  // quantity verif

  if (quantity.value.match(regexNumb)) {
    formData[4].setAttribute("data-success-visible", false);

  }
  else {
    formData[4].setAttribute("data-error", `Veuillez entré un nombre entre 0 et 99.`);
    formData[4].setAttribute("data-error-visible", true);
  }

  //  radiobutton verif
  // for (let radio of locationInput) {
  //   if (radio.checked === true) {
  //     formData[5].setAttribute("data-success-visible", false);
  //   }
  //   else {
  //     formData[5].setAttribute("data-error", `Veuillez séléctioner une ville.`);
  //     formData[5].setAttribute("data-error-visible", true);
  //   }
  //   console.log(locationInput.value);
  // }

  if (location1.checked || location2.checked || location3.checked ||
    location4.checked || location5.checked || location6.checked) {
    formData[5].setAttribute("data-success-visible", false);
  }
  else {
    formData[5].setAttribute("data-error", `Veuillez séléctioner une ville.`);
    formData[5].setAttribute("data-error-visible", true);
  }



  // checkboxinput verif

  if (checkboxInput.checked) {
    formData[6].setAttribute("data-success-visible", false);
  }
  else {
    formData[6].setAttribute("data-error-visible", true);
    formData[6].setAttribute("data-error", `Vous devez vérifier que vous acceptez les termes et conditions.`);
  }

  if (lastname.value && firstname.value && birthdate.value && quantity.value && email.value &&
    ((location1.checked) || (location2.checked) || (location3.checked) || (location4.checked) ||
      (location5.checked) || (location6.checked)) && checkbox1.checked === true) {
    modalbg.style.display = "none";
    confirmModal.style.display = "block";
  }
  else {
    return false;
  }
};

