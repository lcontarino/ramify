

document.getElementById('register-form').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  saveUser_localStorage(name, username, email, password);
  e.preventDefault();//Prevent Reload Page after Form Submit

})

//Funcion para guardar un nuevo usuario en el LocalStorage//

function saveUser_localStorage(name, username, email, password) {
  //Declaro un array de objetos (vacio)
  let newUser = [];
  // Condicional para verificar datos dentro del LocalStorage. .
  if (localStorage.getItem('User_Object') === null) {
    // Si esta vacio inserta el array 'newUser'
    localStorage.setItem("User_Object", JSON.stringify(newUser));
    localStorage.setItem("User_Email",email)
    localStorage.setItem("User_Password",password)
    // Limpiamos el Formulario de Registro. 
    document.getElementById('register-form').reset();
    
  }


  /* Obtenemos datos desde el LocalStorage y lo almacenamos 
  dentro de getUser para asi persistir los datos almacenados con anterioridad.*/
  let getUser = JSON.parse(localStorage.getItem('User_Object'));

  newUser = [{
    name: name,
    username: username,
    email: email,
    password: password
  }]
  //actualizamos el valor de 'getUser' con los valores de 'newUser'
  getUser.push(newUser);

  localStorage.setItem("User_Object", JSON.stringify(getUser));
  document.getElementById('register-form').reset();
  alert("1")
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'The user was successfully registered. You will be redirected to userDash',
    showConfirmButton: false,
    timer: 2000
})
   // Use time out for set delay in redirection
   setTimeout(() => {
     // Use Console log for Debug
     window.location.href = "/userdash.html";
 }, 1000); 
}
