
document.getElementById('login-form').addEventListener('submit', (e) => {
    // Obtengo los datos del formulario HTML
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

   // console.log(email, password);

    //Prevent Reload Page after Form Submit
    e.preventDefault();

    let storageUser     = JSON.parse(localStorage.getItem('User_Object'));
    let storagePassword     = JSON.parse(localStorage.getItem('User_Object'));
    let storageUsers     = JSON.parse(localStorage.getItem('User_Object'));
    //let storagePassword = localStorage.getItem('User_Password');
  
    // for (let index = 0; index < storageUsers.length; index++) {
    //     const element = storageUsers[index];
    //     console.log(element[0].name)
    // }

    storageUsers.forEach(element => {
        console.log(element[0].name)
        if (email !== element[0].email || password !== element[0].password ) {
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
    
    });
    
   
})

function loadUser_localStorage(email, password) {
    let users = localStorage.getItem('Email_On_Local');
    let passwords = localStorage.getItem('Pass_On_Local');
    let localUsers = JSON.parse(localStorage.getItem("User_Object"));

}

function compareUser() {

}

