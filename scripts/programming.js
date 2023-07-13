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
document.getElementById("one").addEventListener("click",()=>{
  location.href="/prog_m_1";
})
document.getElementById("two").addEventListener("click",()=>{
  location.href="/prog_m_2";
})
document.getElementById("three").addEventListener("click",()=>{
  location.href="/prog_m_3";
})
document.getElementById("four").addEventListener("click",()=>{
  location.href="/prog_m_4";
})
document.getElementById("five").addEventListener("click",()=>{
  location.href="/prog_m_5";
})
document.getElementById("six").addEventListener("click",()=>{
  location.href="/prog_m_6";
})
document.getElementById("seven").addEventListener("click",()=>{
  location.href="/prog_m_7";
})
document.getElementById("eight").addEventListener("click",()=>{
  location.href="/prog_m_8";
})
document.getElementById("nine").addEventListener("click",()=>{
  location.href="/prog_m_9";
})
document.getElementById("ten").addEventListener("click",()=>{
  location.href="/prog_m_10";
})
/* Backend Js Ends Here */