
var signUp = document.querySelector('.nav__signup')
var signForm= document.querySelector('.signup');
var closeForm = document.querySelector('.signup__form__close');


signUp.addEventListener('click',function(){

signForm.style.display='block';
document.querySelector('html').style.overflow="hidden";

})

closeForm.addEventListener('click',function(){
    signForm.style.display="none";
    document.querySelector('html').style.overflow="auto";
})


// Sign In Form

var signIn = document.querySelector(".nav__signin");
var signinform=document.querySelector(".signIn");
var signInClose = document.querySelector(".signin__close")

signIn.addEventListener('click',function(){
    
    signinform.style.display = 'block';
    document.querySelector('html').style.overflow="hidden";
})

signInClose.addEventListener('click',function(){
    signinform.style.display="none";
    document.querySelector('html').style.overflow="auto";
})





