document.getElementById('register-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(name, username, email, password);
    registerToLocalStorage(name,username,email,password);
    document.getElementById('register-form').reset();
}
)

function registerToLocalStorage(name,username,email,password) {
    let newUser = {
        name: name,
        username: username,
        email: email,
        password: password
    }
    localStorage.setItem("User_To_Local",name);
    localStorage.setItem("UserName_To_Local",username);
    localStorage.setItem("Email_To_Local",email);
    localStorage.setItem("Password_To_Local",password);
    localStorage.setItem("New_User_Object", JSON.stringify(newUser))

}

document.getElementById('login-form').addEventListener('submit', function (e) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log(email, password);
    document.getElementById('login-form').reset();
    loginUserFromLocalStorage(email,password);
}
);

function loginUserFromLocalStorage(email,password){
    localEmail = localStorage.getItem("Email_To_Local");
    localPassword = localStorage.getItem("Password_To_Local");
    
}

