const confirmPassword = document.querySelector("#confirm-password");
const password = document.querySelector("#password");

function comparePasswords(password, confirmPassword) {
  const label = document.querySelector(`label[for=${password.id}]`);
  const p = label.querySelector("p");
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");
    password.setCustomValidity("");
    p.hidden = true;
  } else {
    confirmPassword.setCustomValidity("Passwords do not match");
    password.setCustomValidity("Passwords do not match");
    p.hidden = false;
  }
}

confirmPassword.addEventListener("focusout", () =>
  comparePasswords(password, confirmPassword)
);

const inputs = document.querySelectorAll("input");

inputs.forEach((element) =>
  element.addEventListener("focusout", () => checkValidity(element))
);

function checkValidity(input) {
  console.log(input);
  console.log(input.validity.valid);
  if (input.validity.valid) {
    input.style.outline = "1px solid #E5E7EB";
  } else {
    input.style.outline = "1px solid rgb(207, 7, 7)";
  }
}
