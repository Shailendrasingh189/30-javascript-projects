const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("messsage-error");
const submitError = document.getElementById("submit-error");

const validateName = () => {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Name required`;
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Write full name`;
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validatePhone = () => {
  let phone = document.getElementById("contact-number").value;

  if (phone.length == 0) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Phone no. required`;
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Phone no should be 10 digits`;
    return false;
  } 
  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Only digits please`;
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validateEmail = () => {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> email no. required`;
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]+\.[a-z]{2,4}$/)) {
    emailError.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email Invalid`;
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
};

const validateMessage = () => {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;
  if(left > 0 ){
    messageError.innerHTML = left + `more characters required`;
    return false;
  }
  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

const validateSubmit = () => {
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = `Please fix error before submit`;
        console.log("work");
        setTimeout(function () {
            submitError.style.display = 'none';
        },3000);
        return false;
    }
}