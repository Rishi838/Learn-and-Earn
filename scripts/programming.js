console.log("Conencte");
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
/* Backend Js starts here */
document.getElementById("module1").addEventListener("click",()=>{
  console.log("Hello");
  location.href="/prog_m_1";
})
document.getElementById("module2").addEventListener("click",()=>{
  console.log("Hello");
  location.href="/prog_m_2";
})
document.getElementById("module3").addEventListener("click",()=>{
  console.log("Hello");
  location.href="/prog_m_3";
})
/* Backend Js Ends Here */