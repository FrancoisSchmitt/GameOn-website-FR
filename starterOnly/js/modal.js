

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

// Function qui vérifie que le prénom n'est pas vide ou < 2 
function firstValid() {
  const firstname = document.forms["reserve"]["first"];
  if (firstname.value == null || firstname.value < 2) {
    formData[0].setAttribute("data-success-visible", false);
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`);
    return false;
  }
  else {
    return true;
  };
}

// Function qui vérifie que le nom de famille n'est pas vide ou < 2  
function nameValid() {

  const name = document.forms["reserve"]["name"];
  if (name.value == null || name.value < 2) {
    formData[1].setAttribute("data-success-visible", false);
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", `Veuillez entrer 2 caractères ou plus pour le champ du nom.`);
    return false;
  }
  else {
    formData[1].setAttribute("data-success-visible", true);
    formData[1].setAttribute("data-error-visible", false);
    return true;
  };
}

// Function qui vérifie que l'email est valide avec un regex.
function emailValid() {
  const email = document.forms["reserve"]["email"];
  const validRegexEmail = /^\S+@\S+.\S+$/;
  if (!email.value.match(validRegexEmail)) {
    formData[2].setAttribute("data-success-visible", false);
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", `Votre email n'est pas valide. exemple : email@to.me`);
    return false;
  } else {
    return true;
  }
}

// Function qui vérifie si une date est entré.
function dateValid() {
  const birthdate = document.forms["reserve"]["birthdate"];
  const dateCurrent = new Date();

  if (birthdate.value == "") {
    formData[3].setAttribute("data-success-visible", false);
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", `Vous devez entrer votre date de naissance.`);
    return false
  }
  else {
    return true
  }
}

// Function qui vérifie / valide uniquement si la réponse est un chiffre.
function numbValid() {
  const quantity = document.forms["reserve"]["quantity"];
  const regexNumb = /^[0-9]+$/;
  if (!quantity.value.match(regexNumb)) {
    formData[4].setAttribute("data-success-visible", false);
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", `Veuillez entré un nombre entre 0 et 99.`);
    return false;
  }
  else {
    return true;
  }
}
// Function avec boucle for qui vérifie si une localisation à bien été choisi.
function locationValid() {
  const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
  for (let radio of locationInput) {
    if (radio.checked === true)
      return true;
  }
  formData[5].setAttribute("data-success-visible", false);
  formData[5].setAttribute("data-error-visible", true);
  formData[5].setAttribute("data-error", `Vous devez choisir une option.`);
  return false;
}

// Function qui vérifie si la checkbox est bien coché.
function checkboxValid() {
  const checkboxInput = document.getElementById("checkbox1");
  if (!checkboxInput.checked) {
    formData[6].setAttribute("data-success-visible", false);
    formData[6].setAttribute("data-error-visible", true);
    formData[6].setAttribute("data-error", `Vous devez vérifier que vous acceptez les termes et conditions.`);
    return false
  }
  else {
    return true;
  }
}
// Crée une fonction Validate qui vérifie si xValid === true Sinon le formulaire return false.
function validate() {
  if (firstValid() && nameValid() && emailValid() && dateValid() && numbValid() && locationValid() && checkboxValid() === true) {
    modalbg.style.display = "none"
    confirmModal.style.display = "block";
  }
  else {
    return false;
  }
};