// *********************** navScroll
let nav = document.getElementsByTagName("nav")[0];
let toUp = document.getElementById("toUp");

addEventListener("scroll", navScroll);
navScroll();

// the function
function navScroll() {
  if (window.pageYOffset > 80){
    nav.classList.add("scroll");
    toUp.style.opacity = 1
  }
  else{
    nav.classList.remove("scroll");
    toUp.style.opacity = 0
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
  console.log("asd")
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
    window.scrollY > ele.offsetTop - window.innerHeight + 150 &&
    window.scrollY < ele.offsetTop + ele.offsetHeight - 150
  ) {
    ele.style.animationName = ele.dataset.sa
  }
}


// Projects

let projectClasses = [...document.querySelectorAll("#projects li")]
let projects = [...document.querySelectorAll("#projects .box")]

projectClasses.forEach(e=>{
  e.addEventListener("click",()=>{
    projectClasses.forEach(e=>{
      e.classList.remove("active")
    })
    e.classList.add("active")
    projects.forEach(ele=>{
        if ( ele.classList.contains(e.dataset.class)||e.dataset.class=="all"){
          ele.style.display = "block"
        }
        else{
          ele.style.display = "none"
        }
      })
  })
})
// owl carousel

$('.owl-carousel').owlCarousel({
    items:3,
    center:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:1500,
    dots:false
});