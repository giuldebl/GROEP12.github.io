// Name and Password from the register-form
var nm = document.getElementById('userNm');
var pw = document.getElementById('userPw');

// storing input from register-form
function store() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);
}



// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    
    event.preventDefault();

    // stored data from the register-form
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('Nm');
    var userPw = document.getElementById('Pw');

        // check if stored data from register-form is equal to data from login form
if(userName.value === storedName && userPw.value === storedPw) {
       

    
        document.getElementById('loginwelkom').innerHTML = "Welkom" + " " + userName.value + "!";
    }else {
        
        return false;   
    }
}



