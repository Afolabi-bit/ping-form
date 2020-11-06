const form = document.getElementById('form');
const email = document.getElementById('email');
const message = document.getElementById('error-msg');

function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function timeout() {
    setTimeout(() => {
         form.className = '';
     message.textContent = ''
    }, 5000);
}


function validate(e){
    e.preventDefault();
 const emailVal = email.value.trim();
 if(emailVal == '' || emailVal == null) {
     form.className = 'error';
     message.textContent = 'Whoops! It looks like you forgot to add your email'
 } else if (!isEmailValid(emailVal)) {
     form.className = 'error';
     message.textContent = 'Please provide a valid email address'
 } else {
    form.className = '';
     message.textContent = ''
 }

 timeout();
}

form.addEventListener('submit', validate);
