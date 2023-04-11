const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})

// function validateForm() {
//     var name = document.forms["contactForm"]["name"].value;
//     var email = document.forms["contactForm"]["email"].value;
//     var message = document.forms["contactForm"]["message"].value;
//     var error = "";
//     if (name == "") {
//         error += "Please enter your name.\n";
//     }
//     if (email == "") {
//         error += "Please enter your email address.\n";
//     } else if (!validateEmail(email)) {
//         error += "Please enter a valid email address.\n";
//     }
//     if (message == "") {
//         error += "Please enter a message.\n";
//     }
//     if (error != "") {
//         alert(error);
//         return false;
//     }
// }
// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email); }