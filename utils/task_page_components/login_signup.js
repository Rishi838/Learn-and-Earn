// Importing postdata from fetch api
import { postData } from "./fetch_api.js"
// Variable to store otp
let sent_otp
// Function to validate email
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}
var interval;
// Function for 2 min timer in verify button
function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = document.getElementById('verify_time').innerHTML;
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      document.getElementById('verify_time').innerHTML = minutes + ':' + seconds

      if (minutes == 0 && seconds == 0) {
         document.getElementById("otp-time").innerHTML="OTP Expired"
         // document.getElementById('verify_time').innerHTML = "Hekl"
         clearInterval(interval);
      }
  }, 1000);
}
// Listner when user logins
export async function login_listner() {
  let data = {
    email: document.getElementById('login_email_id').value,
    password: document.getElementById('login_password').value
  }
  if (data.email == "" && data.password == "") {
    document.getElementById("login_email_error").innerText = "*Please Enter Email"
    document.getElementById("login_pass_error").innerText = "*Please Enter PassWord"
    document.getElementById("login_credentials_error").innerText = ""
    return;
  }
  else if (data.email == "") {
    document.getElementById("login_email_error").innerText = "*Please Enter Email"
    document.getElementById("login_password").value = ""
    document.getElementById("login_pass_error").innerText = ""
    document.getElementById("login_credentials_error").innerText = ""
    return;
  }
  else if (data.password == "") {
    document.getElementById("login_email_error").innerText = ""
    ocument.getElementById("login_credentials_error").innerText = ""
    document.getElementById("login_pass_error").innerText = "*Please Enter Password"
    return;
  }
  else {
    document.getElementById("login_email_error").innerText = ""
    document.getElementById("login_pass_error").innerText = ""
    if (!ValidateEmail(data.email)) {
      document.getElementById("login_email_error").innerText = "*Not a Valid Email"
      return
    }
    else {
      document.getElementById("load1").style.display ="block"
      let resp = await postData('/login', data);
      document.getElementById("load1").style.display ="none"
      // console.log(resp)
      if (resp.success == -1) {
        document.getElementById("login_credentials_error").innerText = "*Valid Credentials Not Provided"
        return
      }
      else if (resp.success == 0) {
        document.getElementById("login_credentials_error").innerText = "*No user with this email exist"
        return
      }
      else if (resp.success == 1) {
        document.getElementById("login_credentials_error").innerText = "*PassWord Incorrect"
        return
      }
      else if (resp.success == 3) {
        document.getElementById("login_credentials_error").innerText = "Email Incorrect"
        return
      }
      else {
        location.reload()
      }
    }

  }
}
// Listner when user signups
export async function signup_listner() {
  let data = {
    name: document.getElementById('signup_name').value,
    email: document.getElementById('signup_email').value,
    password: document.getElementById('signup_pass').value,
  }
  if (data.email == "" && data.name == "" && data.password == "") {
    document.getElementById("signup_email_error").innerText = "*Please Enter Email"
    document.getElementById("signup_name_error").innerText = "*Please Enter Name"
    document.getElementById("signup_pass_error").innerText = "*Please Enter Password"
    return
  }
  else if (data.email == "" && data.name == "") {
    document.getElementById("signup_email_error").innerText = "*Please Enter Email"
    document.getElementById("signup_name_error").innerText = "*Please Enter Name"
    document.getElementById("signup_pass_error").innerText = ""
    return
  }
  else if (data.email == "" && data.password == "") {
    document.getElementById("signup_email_error").innerText = "*Please Enter Email"
    document.getElementById("signup_name_error").innerText = ""
    document.getElementById("signup_pass_error").innerText = "*Please Enter Password"
    return
  }
  else if (data.password == "" && data.name == "") {
    document.getElementById("signup_email_error").innerText = ""
    document.getElementById("signup_name_error").innerText = "*Please Enter Name"
    document.getElementById("signup_pass_error").innerText = "*Please Enter Password"
    return
  }
  else if (data.password == "") {
    document.getElementById("signup_email_error").innerText = ""
    document.getElementById("signup_name_error").innerText = ""
    document.getElementById("signup_pass_error").innerText = "*Please Enter Password"
    return
  }
  else if (data.name == "") {
    document.getElementById("signup_email_error").innerText = ""
    document.getElementById("signup_name_error").innerText = "*Please Enter Name"
    document.getElementById("signup_pass_error").innerText = ""
    return
  }
  else if (data.email == "") {
    document.getElementById("signup_email_error").innerText = "*Please Enter Email"
    document.getElementById("signup_name_error").innerText = ""
    document.getElementById("signup_pass_error").innerText = ""
    return
  }
  else {
    if (!ValidateEmail(data.email)) {
      document.getElementById("signup_email_error").innerText = "*Not a Valid Email"
      document.getElementById("signup_pass_error").innerText = ""
      document.getElementById("signup_name_error").innerText = ""
      return
    }
    else {
      document.getElementById("load2").style.display ="block"
      let res = await postData('/signup', data)
      document.getElementById("load2").style.display ="none"
      if (res.success == 0) {
        document.getElementById("signup_credentials_error").innerText = "*User Already Exists"
        return
      }
      else if (res.success == 1) {
        document.getElementById("signup_credentials_error").innerText = "*No Such Email"
        return
      }
      else if (res.success == 2) {
        document.getElementById('verify_time').innerHTML = "2:00"
        // OTP will remain valid for 2 mins only
        sent_otp = res.otp
        setTimeout(() => {
          sent_otp = 0
        }, 120000)

        document.getElementById("m2").style.display = "none"
        document.getElementById("m3").style.display = "block"
        countdown()
      }
    }
  }
}
// Listner when user verify_otp
export async function verify_listner() {
  let data = {
    name: document.getElementById('signup_name').value,
    email: document.getElementById('signup_email').value,
    password: document.getElementById('signup_pass').value,
  }
  if(data.name=="" || data.email=="" || data.password =="")
  {
    document.getElementById("otp_valid_error").innerText = "Valid Credntials Not Provided"
    return
  }
  let otp = document.getElementById('otp').value
  // console.log(sent_otp)
  if (otp == "") {
    document.getElementById("otp_valid_error").innerText = "Please Enter OTP"
  }
  else if (sent_otp == 0) {
    document.getElementById("otp_valid_error").innerText = "OTP Expired"
  }
  else if (otp != sent_otp) {
    document.getElementById("otp_valid_error").innerText = "Incorrect OTP"
  }
  else {
    document.getElementById('load3').style.display ="block"
    let res = await postData('/verify', data)
    document.getElementById('load3').style.display ="none"
    if (res.success == 1) {
      document.getElementById("otp_valid_error").innerText = "Server Error"
    }
    else {
    location.reload()
    }
  }

}
// Listner when user asks to resend otp
export async function resend_listner() {
  console.log("Inside resent")
  document.getElementById('load3').style.display = "block"
  let result = await postData('/resend', { email: document.getElementById('signup_email').value })
  document.getElementById('load3').style.display = "none"
  if (result.success == 1) {
    document.getElementById("otp_valid_error").innerText = "Internal Server Error"
  }
  else {
    sent_otp = result.otp
    setTimeout(() => {
      sent_otp = 0
    }, 120000)
    document.getElementById('verify_time').innerHTML = "2:00"
    countdown()

    document.getElementById("otp_valid_error").innerText = "OTP Sent Successfully"
  }
}
// For yes part on logout popup
export async function logout_yes() {
   postData('/logout',{})
  location.reload()
}
// For no part on logout popup
export async function logout_no() {
  document.getElementById("m4").style.display = "none"
  document.querySelector('header').style.display="block"
  document.getElementsByClassName('content')[0].style.display="block"
}

// When user clicks on login page of signup btn
export async function login_on_signup() {
  document.getElementById('m2').style.display = 'none'
  document.getElementById('m1').style.display = 'block'
  // document.getElementById('id01').style.width = 'auto'
}
// When user clicks on signup btn of loginpage
export async function signup_on_login() {
  document.getElementById('m1').style.display = 'none'
  document.getElementById('m2').style.display = 'block'
  // document.getElementById('id02').style.width = 'auto'
}
// Pop up Login Form ans signup js ends here


// Validating user to change navbar accordingly
export async function validate_user(){
  const resp = await postData('/validate',{})
  console.log(resp)
//  If user is validatedd successfully
if(resp.success==0)
{
document.getElementById('b3').style.display="none"
document.getElementById('b4').style.display="none"
}
else if(resp.success==1){
  document.getElementById('b1').style.display="none"
  document.getElementById('b2').style.display="none"
}
// Else case
}
