const nameContainer = document.querySelector(".input__name");
const nameMsg = document.querySelector(".name__msg");
const emailContainer = document.querySelector(".input__email");
const emailMsg = document.querySelector(".email__msg");
const passwordContainer = document.querySelector(".input__password");
const passwordMsg = document.querySelector(".password__msg");
const form = document.querySelector(".form");
const loginTitle = document.querySelector(".login__title");
const loginButton = document.querySelector(".login__button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameContainer.classList.add("success");
  nameMsg.textContent = "Valid Name";
  emailContainer.classList.add("success");
  emailMsg.textContent = "Valid Email";
  passwordContainer.classList.add("success");
  passwordMsg.textContent = "Valid Password";

  loginTitle.textContent = "Login Successful";
  loginButton.textContent = "Logging in...";

  setTimeout(() => {
    e.target.submit();
  }, 3000);
});
