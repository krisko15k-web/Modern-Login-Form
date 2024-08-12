const email = document.getElementById("email");
const emailMsg = document.querySelector(".email__msg");
const emailContainer = document.querySelector(".input__email");
const password = document.getElementById("password");
const passwordMsg = document.querySelector(".password__msg");
const passwordContainer = document.querySelector(".input__password");
const form = document.querySelector(".form");
const loginTitle = document.querySelector(".login__title");

form.addEventListener("submit", (e) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  if (
    password.value.length < 8 ||
    password.value.length > 30 ||
    !password.value.match(lowerCaseLetters) ||
    !password.value.match(upperCaseLetters) ||
    !password.value.match(numbers)
  ) {
    e.preventDefault();

    passwordContainer.classList.add("error");
    passwordMsg.textContent =
      "Password must be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.";
  } else {
    e.preventDefault();

    emailContainer.classList.add("success");
    emailMsg.textContent = "Valid Email";
    passwordContainer.classList.add("success");
    passwordMsg.textContent = "Valid Password";

    loginTitle.textContent = "Login Successful";

    setTimeout(() => {
      e.target.submit();
    }, 3000);
  }
});
