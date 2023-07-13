// $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

// $("#menu-icon").on("click", function(){
// $("nav").slideToggle();
// $(this).toggleClass("active");
// });

import { login_listner, login_on_signup, resend_listner, signup_listner, signup_on_login, verify_listner, logout_yes, logout_no} from '../../utils/task_page_components/login_signup.js'

// Validating users to adjust navbar accordingly
// validate_user()

const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
menuSection.addEventListener('click', (e) => {
   if (!menu.classList.contains('active')) {
      return;
   }
   if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});
menuArrow.addEventListener('click', () => {
   hideSubMenu();
});
menuTrigger.addEventListener('click', () => {
   toggleMenu();
});
menuClosed.addEventListener('click', () => {
   toggleMenu();
});
menuOverlay.addEventListener('click', () => {
   toggleMenu();
});
function toggleMenu() {
   menu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
}
function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector('.menu-subs');
   subMenu.classList.add('active');
   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
   menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
   menu.querySelector('.menu-mobile-header').classList.add('active');
}
function hideSubMenu() {
   subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
      subMenu.classList.remove('active');
   }, 300);
   menu.querySelector('.menu-mobile-title').innerHTML = '';
   menu.querySelector('.menu-mobile-header').classList.remove('active');
}
window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains('active')) {
         toggleMenu();
      }
   }
};

// For Login Form
var m1 = document.getElementById("m1");

// Get the button that opens the modal
var b1 = document.getElementById("b1");

// Get the <span> element that closes the modal
var s1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
b1.onclick = function () {
   document.querySelector('header').style.display = "none"
   m1.style.display = "block";
   document.getElementsByClassName('content')[0].style.display = "none"
}

// When the user clicks on <span> (x), close the modal
s1.onclick = function () {
   console.log("hello")
   m1.style.display = "none";
   document.querySelector('header').style.display = "block"
   document.getElementsByClassName('content')[0].style.display = "block"
   document.querySelector('body').style.backgroundImage = "none"
}

// For Signup Form
var m2 = document.getElementById("m2");

// Get the button that opens the modal
var b2 = document.getElementById("b2");

// Get the <span> element that closes the modal
var s2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
b2.onclick = function () {
   document.querySelector('header').style.display = "none"
   m2.style.display = "block";
   document.getElementsByClassName('content')[0].style.display = "none"
}

// When the user clicks on <span> (x), close the modal
s2.onclick = function () {
   console.log("hello")
   m2.style.display = "none";
   document.querySelector('header').style.display = "block"
   document.getElementsByClassName('content')[0].style.display = "block"
}
// For closing verify tab
var s3 = document.getElementsByClassName("close")[2];
var m3 = document.getElementById("m3");
s3.onclick = function () {
   // console.log("hello")
   m3.style.display = "none";
   document.querySelector('header').style.display = "block"
   document.getElementsByClassName('content')[0].style.display = "block"

}
// For Logout Btn
var m4 = document.getElementById("m4");

// Get the button that opens the modal
var b4 = document.getElementById("b4");

// Get the <span> element that closes the modal
var s4 = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
b4.onclick = function () {
   document.querySelector('header').style.display = "none"
   m4.style.display = "block";
   document.getElementsByClassName('content')[0].style.display = "none"
}

// When the user clicks on <span> (x), close the modal
s4.onclick = function () {
   console.log("hello")
   m4.style.display = "none";
   document.querySelector('header').style.display = "block"
   document.getElementsByClassName('content')[0].style.display = "block"

}


// When user enter credentials and click on login btn for verifying
document.getElementById('login').addEventListener('click', login_listner)
// When user enter credentials and click on signup btn for verifying
document.getElementById('signup').addEventListener('click', signup_listner)
// verify otp page
document.getElementById('verify').addEventListener('click', verify_listner)
// When user clicks on resend otp 
document.getElementById('resend').addEventListener('click', resend_listner)


// When yes on logout popup is clicked
document.getElementById("logout_yes").addEventListener('click', logout_yes)
// When no on logout popup is clicked
document.getElementById("logout_no").addEventListener('click', logout_no)

// Redirect to login popup from signup
document.getElementById('login_on_signup').addEventListener('click', login_on_signup)
// Redirect to signup popup from login
document.getElementById('signup_on_login').addEventListener('click', signup_on_login)
