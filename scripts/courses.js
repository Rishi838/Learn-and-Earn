import { courses } from '../utils/courses_cards.js'
// Navbar js starts here
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
// Navbar Js ends here
// Carousel js starts here
/*

3D Carousel images gallery. inspired from David DeSandro's tutorial (https://3dtransforms.desandro.com/)

*/

window.addEventListener('load', function() {
  carouselRUN();
}, false);

function carouselRUN() {
  var carousel = document.getElementById("carousel");
  var scene = document.getElementById("scene");
  var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
  var carousel_btn = document.getElementById("carousel_btn");
  var n = carousel_items_Arrey.length;
  var curr_carousel_items_Arrey = 0;
  var theta = Math.PI * 2 / n;
  var interval = null;
  var autoCarousel = carousel.dataset.auto;

  setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  window.addEventListener('resize', function() {
      clearInterval(interval);
      setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
  }, false);
  setupNavigation();


  function setupCarousel(n, width) {
      var apothem = width / (2 * Math.tan(Math.PI / n));
      scene.style.transformOrigin = `50% 50% ${- apothem}px`;

      for (let i = 1; i < n; i++) {
          carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
          carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
      }

      if (autoCarousel === "true") {
          setCarouselInterval();
      }
  }

  function setCarouselInterval() {
      interval = setInterval(function() {
          curr_carousel_items_Arrey++;
          scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
      }, 3000);
  }

  function setupNavigation() {
      carousel_btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var target = e.target;

          if (target.classList.contains('next')) {
              curr_carousel_items_Arrey++;
          } else if (target.classList.contains('prev')) {
              curr_carousel_items_Arrey--;
          }
          clearInterval(interval);
          scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

          if (autoCarousel === "true") {
              setTimeout(setCarouselInterval(), 3000);
          }
      }, true);
  }
}
// Carousel js ends here
// Courses js starts here
// if (typeof window.CSS.registerProperty === 'function') {
//     console.log('CSS.registerProperty supported 🎉')
//     document.body.style.setProperty('--supported', 1);
//     document.body.classList.add('registerProperty-supported')
//   } else {
//     console.log('CSS.registerProperty not supported ❌')
//     document.body.style.setProperty('--not-supported', 1);
//     document.body.classList.add('registerProperty-not-supported')
//   }
// Courses js ends here

// JavaScript for search functionality starts here

function get_cards () {
  let a=``
  courses.forEach((element)=>{
   a+=element[1]
  })
  return a
}

document.getElementById('courses_cards').innerHTML = get_cards()

document.getElementById('search_txt').addEventListener('input',()=>{
  let search_text = document.getElementById('search_txt').value.toLowerCase()
  let a=``
  courses.forEach((element)=>{
    if(element[0].includes(search_text))
    {
      a += element[1]
    }
   })
   if(a==``){
   document.getElementById('no_courses').innerHTML = `
   Ohhh Snap, No Courses to Display
   `
   document.getElementById('courses_cards').innerHTML = a
   }
   else{
    document.getElementById('no_courses').innerHTML = ``
   document.getElementById('courses_cards').innerHTML = a
   }
})

// JavaScript for search functionality ends here


/* JavaScript for backend processes and redirecting starts here */

/* JavaScript for backend processes and redirecting Ends here*/
