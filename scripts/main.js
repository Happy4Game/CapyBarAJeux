let isBurgerMenuOpened = false;

function openCloseBurger() {
  document.getElementById("nav-container").style.display = isBurgerMenuOpened
    ? "none"
    : "block";
  isBurgerMenuOpened = !isBurgerMenuOpened;
}

function injectNavBar() {
  fetch("./components/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
    });

  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
}
