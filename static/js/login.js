
document.getElementById('login-form').addEventListener('submit', (e) => {
    // Obtengo los datos del formulario HTML
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

   // console.log(email, password);

    //Prevent Reload Page after Form Submit
    e.preventDefault();

    let storageUser     = JSON.parse(localStorage.getItem('User_Object').email);
    let storagePassword     = JSON.parse(localStorage.getItem('User_Object').password);
    //let storagePassword = localStorage.getItem('User_Password');
    

    if (email !== storageUser || password !== storagePassword ) {
        //alert('Usuario o Password incorrectos');
        Swal.fire(
            'The username or password is incorrect',
            'Please try again',
            'error'
        )

    }
    else {
        alert('Usuario Correcto');
        window.location.href = "/userdash.html";
    }

})

function loadUser_localStorage(email, password) {
    let users = localStorage.getItem('Email_On_Local');
    let passwords = localStorage.getItem('Pass_On_Local');
    let localUsers = JSON.parse(localStorage.getItem("User_Object"));

}

function compareUser() {

}

