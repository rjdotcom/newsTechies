let form = document.form[0];
let btnSubmit = form.querySelector("#btn-signup");
let fullName;
let email;
let password;


document.addEventListener("change", (event) => {
    fullName = form.querySelector("#name").value;
    email= form.querySelector("#email").value;
    password = form.querySelector("#password").value;
})

btnSubmit.addEventListener("click", createUser);


function createUser() {
    //TODO
}