document.getElementById('register-form').addEventListener('submit',  (e) => {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log(name, username, email, password);
    saveUser_localStorage(name, username, email, password);
    e.preventDefault();//Prevent Reload Page after Form Submit
    resetForm();
  })

  function saveUser_localStorage(name, username, email, password) {
    let newUser = {
      name: name,
      username: username,
      email: email,
      password: password
    }
    localStorage.setItem("Name_On_Local", name);
    localStorage.setItem("Uname_On_Local", username);
    localStorage.setItem("Email_On_Local", email);
    localStorage.setItem("Pass_On_Local", password);
    localStorage.setItem("Uzer_Object", JSON.stringify(newUser))
    document.getElementById('project-form').reset();
  }

  