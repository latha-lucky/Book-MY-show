let email=document.getElementById('email')//input tag
let password=document.getElementById('password')
let signinbutton =document.getElementById('btn')//button

signinbutton.addEventListener('click', submit)

function submit() {
    x.preventDefault();//to prevent reloading
    if(email.value == "latha397@gmail.com" && password.value == 123456){
    //navigate to home page
    //console.log(email.value ,password.value);
    window.location.href='bms.html'
} else{
    alert('Invalid credentials')//error message
}
}
