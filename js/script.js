// *********************** navScroll
let nav = document.getElementsByTagName("nav")[0];

addEventListener("scroll", navScroll);
navScroll();

// the function
function navScroll() {
  if (window.pageYOffset > 80) nav.classList.add("scroll");
  else nav.classList.remove("scroll");
}

// *********************** dropdown list

let dropdown = document.querySelector("nav > ul >li.dropdown");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
addEventListener("click", (e) => {
  if (e.target != dropdown) dropdown.classList.remove("active");
});

// search-screen

let searchScreen = document.querySelector("nav .search-screen");
let searchButton = document.querySelector("nav > i");
let closeSearch = document.querySelector("nav  .search-screen span");
searchButton.addEventListener("click", () => {
  searchScreen.classList.remove("invisible");
});
closeSearch.addEventListener("click", () => {
  searchScreen.classList.add("invisible");
});

// scroll animation

let sa = [...document.getElementsByClassName("sa")];
let vvv = sa[0];

sa.forEach((ele) => {
  addEventListener("scroll", () => { scrollAnimation(ele) });
  addEventListener("load", () => { scrollAnimation(ele) });
});

function scrollAnimation(ele) {
  if (
    window.scrollY > ele.offsetTop - window.innerHeight + 100 &&
    window.scrollY < ele.offsetTop + ele.offsetHeight - 100
  ) {
    ele.style.animationName = ele.dataset.sa
  }
}
