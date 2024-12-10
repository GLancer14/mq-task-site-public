const submitBlock = document.getElementsByClassName("form-email-msg")[0];
const submitSignUpButton = document.getElementsByClassName("form-sign-up-btn")[0];
const submitInputEmail = document.getElementById("form-input-email");

submitSignUpButton.addEventListener("click", function () {
  submitBlock.textContent = "";

  if (!/^[^\.][\w!#$%&'*+-/=?^_`{|}~.]{3,64}[^\.]\@[A-Za-z0-9-]{3,255}\.[A-Za-z0-9-]{2,10}/.test(submitInputEmail.value)) {
    submitBlock.classList.remove("form-email-msg-succ");
    submitBlock.classList.add("form-email-msg-err");
    submitBlock.textContent = "* Invalid email";
  } else {
    submitBlock.classList.remove("form-email-msg-err");
    submitBlock.classList.add("form-email-msg-succ");
    submitBlock.textContent = "We're send email to you to confirm your subscription";
  }
})