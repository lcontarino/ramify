

document.getElementById('register-form').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //console.log(name, username, email, password);
  saveUser_localStorage(name, username, email, password);
  e.preventDefault();//Prevent Reload Page after Form Submit

})

//Funcion para guardar un nuevo usuario en el LocalStorage//

function saveUser_localStorage(name, username, email, password) {
  //Declaro un array de objetos (sin valores)
  let newUser = [];
  // Condicional para verificar datos dentro del LocalStorage. .
  if (localStorage.getItem('Uzer_Object') === null) {
    // Si esta vacio inserta el array 'newUser'
    localStorage.setItem("Uzer_Object", JSON.stringify(newUser));
    // Limpiamos el Formulario de Registro. 
    document.getElementById('register-form').reset();
  }


  /* Obtenemos datos desde el LocalStorage y lo almacenamos 
  dentro de getUser para asi persistir los datos almacenados con anterioridad.*/
  let getUser = JSON.parse(localStorage.getItem('Uzer_Object'));

  newUser = [{
    name: name,
    username: username,
    email: email,
    password: password
  }]
  //actualizamos el valor de 'getUser' con los valores de 'newUser'
  getUser.push(newUser);

  localStorage.setItem("Uzer_Object", JSON.stringify(getUser));
  console.log(getUser);
  document.getElementById('register-form').reset();
}
