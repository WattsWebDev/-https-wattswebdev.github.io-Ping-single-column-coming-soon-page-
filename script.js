const email = document.getElementById('email');
const button = document.getElementById('button');
const text =  document.getElementById('inputBox');
const input = document.querySelector('input')


const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email));
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      text.innerHTML="Thank you for subscribing to our newsletter!";
      text.style.color = 'green';
      input.style.borderColor = 'green';
    }else{
      text.innerHTML="Please enter a valid email address.";
      text.style.color = 'red';
      input.style.borderColor = 'red';
    }
})



