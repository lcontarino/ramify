document.getElementById('login-form').addEventListener('submit', (e)=>{
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    console.log(email, password);
    e.preventDefault();//Prevent Reload Page after Form Submit
    let users = localStorage.getItem('Email_On_Local');
    let passwords = localStorage.getItem('Pass_On_Local');
    let localUsers = JSON.parse(localStorage.getItem("Uzer_Object"));

   
    if(email === ""){
        alert('Usuario nulo');
     } 
     if (email !== localUsers.email || password !== localUsers.password){
        alert('Usuario o Password incorrectos');
        
     }
     else if(email === localUsers.email && password === localUsers.password){
        alert('Usuario Correcto');
        window.location.href = "/userdash.html";
     }
   
})

function loadUser_localStorage(email,password) {
    let users = localStorage.getItem('Email_On_Local');
    let passwords = localStorage.getItem('Pass_On_Local');
    let localUsers = JSON.parse(localStorage.getItem("Uzer_Object"));

}

function compareUser(){
    
}