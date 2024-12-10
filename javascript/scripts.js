const burgerButton = document.getElementsByClassName("header-hamburger")[0];
const navMenu = document.getElementsByClassName("header-nav-list")[0];
const authButtons = document.getElementsByClassName("header-auth-btns")[0];
const signInButton = document.getElementsByClassName("header-sign-in-btn")[0];
const signUpButton = document.getElementsByClassName("header-sign-up-btn")[0];
const signInWindowClose = document.getElementsByClassName("sign-in-window-close")[0];
const signInWindow = document.getElementsByClassName("sign-in-window-wrapper")[0];
const signUpWindowClose = document.getElementsByClassName("sign-up-window-close")[0];
const signUpWindow = document.getElementsByClassName("sign-up-window-wrapper")[0];

const mediaQuery = window.matchMedia("(max-width: 768px)");

mediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    authButtons.style.display = "none";
    navMenu.style.display = "none";
  } else {
    authButtons.style.display = "flex";
    navMenu.style.display = "block";
  }
})

burgerButton.addEventListener("click", burgerClick);
signInButton.addEventListener("click", headerSignInButtonCallback);
signInWindowClose.addEventListener("click", closeSignInWindow);
signInWindow.addEventListener("click", function (event) {
  if (event.target !== event.currentTarget) return;
  closeSignInWindow();
});
signUpButton.addEventListener("click", headerSignUpButtonCallback);
signUpWindowClose.addEventListener("click", closeSignUpWindow);
signUpWindow.addEventListener("click", function (event) {
  if (event.target !== event.currentTarget) return;
  closeSignUpWindow();
});


function burgerClick () {
  if (navMenu.style.display === "none" || !navMenu.style.display) {
    authButtons.style.display = "flex";
    navMenu.style.display = "block";
  } else {
    authButtons.style.display = "none";
    navMenu.style.display = "none";
  }
}

function headerSignInButtonCallback () {
  const signInWindowWrap = document.getElementsByClassName("sign-in-window-wrapper")[0];

  if (signInWindowWrap.style.display === "none" || !signInWindowWrap.style.display) {
    signInWindowWrap.style.display = "flex";
  } else {
    signInWindowWrap.style.display = "none";
  }
}

function closeSignInWindow () {
  signInWindow.style.display = "none";
}

function headerSignUpButtonCallback () {
  const signUpWindowWrap = document.getElementsByClassName("sign-up-window-wrapper")[0];

  if (signUpWindowWrap.style.display === "none" || !signUpWindowWrap.style.display) {
    signUpWindowWrap.style.display = "flex";
  } else {
    signUpWindowWrap.style.display = "none";
  }
}

function closeSignUpWindow () {
  signUpWindow.style.display = "none";
}