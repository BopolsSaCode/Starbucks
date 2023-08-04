const kalboNav = document.querySelectorAll(".kalbo__nav__link");
const kalboContent = document.querySelectorAll(".kalbo__item__content");
kalboNav.forEach((kalbo) => {
 kalbo.addEventListener("click", () => {
  removeActiveKalbo();
  kalbo.style = "transition:.5s ";
  kalbo.classList.add("active");
  kalbo.style = "transition:.5s";
  const activeContent = document.querySelector(`#${kalbo.id}-content`);
  removeActiveContent();
  activeContent.classList.add("active");
 });
});

function removeActiveKalbo() {
 kalboNav.forEach((kalbo) => {
  kalbo.classList.remove("active");
 });
}

function removeActiveContent() {
 kalboContent.forEach((kalbo) => {
  kalbo.classList.remove("active");
 });
}


const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const blur = document.querySelector(".blurred")
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
    blur.classList.toggle("open");
});


