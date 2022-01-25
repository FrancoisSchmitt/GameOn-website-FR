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


// Crée une fonction firstValid pour validé le Prénom de l'utilisateur
function firstValid() {
  // Variable 
  const firstname = document.forms["reserve"]["first"];
  //  Condition si le prénom est null ou inférieure a 2 cara cela renvoie une erreur 
  if (firstname.value == null || firstname.value < 2) {
    formData[0].setAttribute("data-success-visible", false);
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", `Veuillez saisir votre prénom avec plus de 2 caractère.`);
    return false;
  }
  // Sinon c'est validé & on return true
  else {
    formData[0].setAttribute("data-success-visible", true);
    formData[0].setAttribute("data-error-visible", false);
    return true;
  };
}

// Crée une fonction nameValid pour validé le Prénom de l'utilisateur
function nameValid() {
  // Variable
  const name = document.forms["reserve"]["name"];
  //  Condition si le nom de famille est null ou inférieure a 2 cara cela renvoie une erreur 
  if (name.value == null || name.value < 2) {
    formData[1].setAttribute("data-success-visible", false);
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", `Veuillez saisir votre prénom avec plus de 2 caractère.`);
    return false;
  }
  // Sinon c'est validé & on return true
  else {
    formData[1].setAttribute("data-success-visible", true);
    formData[1].setAttribute("data-error-visible", false);
    return true;
  };
}

// Crée une fonction emailValid pour validé le Prénom de l'utilisateur
function emailValid() {
  
  // Variable & regex
  const email = document.forms["reserve"]["email"];
  const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  //  Condition si l'email ne match pas avec le regex alors c'est false
  if (!email.value.match(validRegexEmail)) {
    formData[2].setAttribute("data-success-visible", false);
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", `Votre email n'est pas valide.`);
    return false;

  // Sinon c'est validé & on return true
  } else {
    return true;
  }
}


// Crée une fonction Validate
function validate() {
  // Condition qui vérifie que toute les autres xValid sont true
  if (firstValid() && nameValid() && emailValid() === true){
  return true;
}
// Sinon elle renvoie une erreur
  else {
    return false;
  }

};
  




// Crée une fonction qui va appeler toutes les fonction de vérification 
// Faire une condition si toutes les fonctions return true, alors on return true




  // Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
  // Les données doivent être saisies correctement :
  // (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  // (3) L'adresse électronique est valide.
  // (4) Pour le nombre de concours, une valeur numérique est saisie.
  // (5) Un bouton radio est sélectionné.
  // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  // Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.