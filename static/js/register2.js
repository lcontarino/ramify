document.getElementById('register-form').addEventListener('submit',  (e) => {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log(name, username, email, password);
    saveUser_localStorage(name, username, email, password);
    e.preventDefault();//Prevent Reload Page after Form Submit
   
  })

  function saveUser_localStorage(name, username, email, password) {
    // if (localStorage ===null){
    //   let newUser
    // }
    var newUser =[{
      name: name,
      username: username,
      email: email,
      password: password
    }
  ];
  newUser.push(name,username,email,password);
    //Convert array to JSON
    let newUserToJsonArray = JSON.stringify(newUser);

    localStorage.setItem("Uzer_Object", JSON.stringify(newUserToJsonArray));
    
    let getUser = JSON.parse(localStorage.getItem('Uzer_Object'));
    console.log(getUser);
    document.getElementById('register-form').reset();
  }

  