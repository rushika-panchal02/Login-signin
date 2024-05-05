let form = document.getElementById("form");
let nameinput = document.getElementById("name");
let noname = document.getElementById("no-name");
let emailinput = document.getElementById("email");
let noemail = document.getElementById("no-email");
let emailexists = document.getElementById("email-exists");
let passwordinput = document.getElementById("password");
let nopassword = document.getElementById("no-password");

let hidden = "hidden";
let invalidinfo = "invalid-info";

form.addEventListener('submit', (e) => {
    e.preventDefault();

    noname.classList.add(hidden);
    nopassword.classList.add(hidden);
    noemail.classList.add(hidden);
    nameinput.classList.remove(invalidinfo);
    passwordinput.classList.remove(invalidinfo);
    emailinput.classList.remove(invalidinfo);
    emailexists.classList.add(hidden);

    let flag = false; 

    if(nameinput.value === ''){
        flag = true;
        noname.classList.remove(hidden);
        nameinput.classList.add(invalidinfo);
    }
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
        localStorage.setItem(emailinput.value, 
            JSON.stringify({
                name: nameinput.value, 
                password: passwordinput.value,}));
                location.href = "sucess.html";  
                return;
    }
    if(localStorage.getItem(emailinput.value) !== null){
        emailexists.classList.remove(hidden);
    }
});