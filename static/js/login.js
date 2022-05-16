
document.getElementById('login-form').addEventListener('submit', (e) => {
    // Obtengo los datos del formulario HTML
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const currentUser = email;

    //Prevent Reload Page after Form Submit
    e.preventDefault();

    // Storage form data into LocalStorage ass an array object
    let storageUserObject = JSON.parse(localStorage.getItem('User_Object'));

    // Use for debug individual values into local store
    let storagePassword = JSON.parse(localStorage.getItem('User_Object'));
    let storageUser = JSON.parse(localStorage.getItem('User_Object'));

    // retrive users from local Storage and compare with de form input field

    storageUserObject.forEach(retriveUsers => {
        // Use for Debug users and passwords
        // console.log(retriveUsers[0].email)
        // console.log(retriveUsers[0].password)
        if (email != retriveUsers[0].email && password != retriveUsers[0].password || email === null || password ===null ) {
            //Sweet alert for incorrect User or Password ;
            console.log("Form Email: " + email +" " + "Form Password: " + password )
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Email or Password',
                showConfirmButton: false,
                timer: 2000
            })
        }
         if (email === retriveUsers[0].email && password === retriveUsers[0].password) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'The username and password is correct',
                showConfirmButton: false,
                timer: 2000
            })

            // Use time out for set delay in redirection
            setTimeout(() => {
                // Use Console log for Debug
                // console.log("Wait 3 seconds to redirect to userdash")
                window.location.href = "/ramify/userdash.html";
            }, 3000);

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

