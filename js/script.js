// *********************** navScroll
let nav = document.getElementsByTagName("nav")[0];
let toUp = document.getElementById("toUp");

addEventListener("scroll", navScroll);
navScroll();

// the function
function navScroll() {
  if (window.pageYOffset > 80) {
    nav.classList.add("scroll");
    toUp.style.opacity = 1;
  } else {
    nav.classList.remove("scroll");
    toUp.style.opacity = 0;
  }
}

// *********************** dropdown list

let dropdown = document.querySelector("nav > ul >li.dropdown");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
addEventListener("click", (e) => {
  if (e.target != dropdown) dropdown.classList.remove("active");
});
// *********************** the main list

let listButton = document.querySelector("nav i.list");
let mainList = document.querySelector("nav > ul");

listButton.addEventListener("click", () => {
  mainList.classList.toggle("active");
});

// search-screen

let searchScreen = document.querySelector(".search-screen");
let searchButton = document.querySelector("nav > i");
let closeSearch = document.querySelector(".search-screen span");
searchButton.addEventListener("click", () => {
  searchScreen.classList.remove("invisible");
});
closeSearch.addEventListener("click", () => {
  console.log("asd");
  searchScreen.classList.add("invisible");
});

// scroll animation

let sa = [...document.getElementsByClassName("sa")];
let vvv = sa[0];

sa.forEach((ele) => {
  addEventListener("scroll", () => {
    scrollAnimation(ele);
  });
  addEventListener("load", () => {
    scrollAnimation(ele);
  });
});

function scrollAnimation(ele) {
  if (
    window.scrollY > ele.offsetTop - window.innerHeight + 150 &&
    window.scrollY < ele.offsetTop + ele.offsetHeight - 150
  ) {
    ele.style.animationName = ele.dataset.sa;
  }
}

// Projects

let projectClasses = [...document.querySelectorAll("#projects li")];
let projects = [...document.querySelectorAll("#projects .box")];

projectClasses.forEach((e) => {
  e.addEventListener("click", () => {
    projectClasses.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    projects.forEach((ele) => {
      if (ele.classList.contains(e.dataset.class) || e.dataset.class == "all") {
        ele.style.display = "block";
      } else {
        ele.style.display = "none";
      }
    });
  });
});

let mainInput = [...document.querySelectorAll("#main input , #main textarea")];

mainInput.forEach((e) => {
  e.addEventListener("focus", () => {
    e.parentElement.classList.add("focus");
  });
  e.addEventListener("focusout", () => {
    e.parentElement.classList.remove("focus");
  });
});

// owl carousel

$(".owl-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 10,
  dots: false,
  loop: true,
  center: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
});
