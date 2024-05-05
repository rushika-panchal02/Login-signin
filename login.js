let form = document.getElementById("form");
let emailinput = document.getElementById("email");
let passwordinput = document.getElementById("password");
let noemail = document.getElementById("no-email");
let nopassword = document.getElementById("no-password");
let emailnotexists = document.getElementById("email-not-exists");
let invalidpassword = document.getElementById("invalid-password");

let hidden = "hidden";
let invalidinfo = "invalid-info";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nopassword.classList.add(hidden);
    noemail.classList.add(hidden);
    passwordinput.classList.remove(invalidinfo);
    emailinput.classList.remove(invalidinfo);
    emailnotexists.classList.add(hidden);
    invalidpassword.classList.add(hidden);

    let flag = false;

    if(passwordinput.value === ''){
        flag = true;
        nopassword.classList.remove(hidden);
        passwordinput.classList.add(invalidinfo);
    }
    if(emailinput.value === ''){
        flag = true;
        noemail.classList.remove(hidden);
        emailinput.classList.add(invalidinfo);
    }

    if(flag) return;

    if(localStorage.getItem(emailinput.value) === null){
        emailnotexists.classList.remove(hidden);
        emailinput.classList.add(invalidinfo);
        return;
    }

    if(localStorage.getItem(emailinput.value) != null){
        let obj = JSON.parse(localStorage.getItem(emailinput.value));
        if(passwordinput.value !== obj.password){
            passwordinput.classList.add(invalidinfo);
            invalidpassword.classList.remove(hidden);
        }else{
            location.href = "sucess.html";
        }
    }

});