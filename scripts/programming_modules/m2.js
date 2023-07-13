import {  l4, l5, login_listner, login_on_signup, navbar_login, navbar_logout, navbar_signup, resend_listner, signup_listner, signup_on_login, verify_listner } from '../../utils/task_page_components/login_signup.js'

// Trigger navbar
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			// $body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
      if( $body.className == 'menu-active' )
      {
        $body.className =''
        document.getElementById('content').style.width = '100%'
      }
      else{
        $body.className ='menu-active'
        document.getElementById('content').style.width = '87%'

      }
		});
	}

}).call(this);



// When user enter credentials and click on login btn for verifying
document.getElementById('login').addEventListener('click',login_listner)
// When user enter credentials and click on signup btn for verifying
document.getElementById('signup').addEventListener('click',signup_listner)
// verify otp page
document.getElementById('verify_otp').addEventListener('click',verify_listner)
// When user clicks on resend otp 
document.getElementById('resend').addEventListener('click',resend_listner)

// To close when sometthing outside popup is clicked
window.onclick = function (event) {
    if (event.target == id01) {
      id01.style.display = "none";
    }
    if (event.target == id02) {
      id02.style.display = "none";
    }
    if (event.target == id03) {
      id03.style.display = "none";
    }
    if (event.target == id04) {
      id04.style.display = "none";
    }
  }

// When navbar login_btn is clicked
document.getElementById("login_btn").addEventListener('click',navbar_login)
// When navbar signup btn is clicked
document.getElementById("signup_btn").addEventListener('click',navbar_signup)
// When navbar logout btn is clicked
document.getElementById("logout_btn").addEventListener('click',navbar_logout)

// When yes on logout popup is clicked
document.getElementById("l4").addEventListener('click',l4)
// When no on logout popup is clicked
document.getElementById("l5").addEventListener('click',l5)

// Redirect to login popup from signup
document.getElementById('btn_login').addEventListener('click',login_on_signup)
// Redirect to signup popup from login
document.getElementById('btn_signup').addEventListener('click',signup_on_login)

// For Rendering all tasks

document.getElementById('intro').addEventListener('click',()=>{
  location.href='/prog_m_2'
})
document.getElementById('task1').addEventListener('click',()=>{
  location.href='/prog_m_2/task1'
})
document.getElementById('task2').addEventListener('click',()=>{
  location.href='/prog_m_2/task2'
})
document.getElementById('task3').addEventListener('click',()=>{
  location.href='/prog_m_2/task3'
})
document.getElementById('task4').addEventListener('click',()=>{
  location.href='/prog_m_2/task4'
})
document.getElementById('task5').addEventListener('click',()=>{
  location.href='/prog_m_2/task5'
})
document.getElementById('task6').addEventListener('click',()=>{
  location.href='/prog_m_2/task6'
})
document.getElementById('task7').addEventListener('click',()=>{
  location.href='/prog_m_2/task7'
})
document.getElementById('task8').addEventListener('click',()=>{
  location.href='/prog_m_2/task8'
})
document.getElementById('task9').addEventListener('click',()=>{
  location.href='/prog_m_2/task9'
})



