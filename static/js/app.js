class Project {
    constructor(image,name,description,year){
        this.image = image;
        this.name = name;
        this.description = description;
        this.year = year;


    }
}

class UI{
    addProject(project){
       const projectList = document.getElementById('project-list');
       const element = document.createElement('div');
       element.innerHTML = `
       
       <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="./images/${project.image}" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">${project.name}</h5> 
         <p class="card-text">${project.description}</p>
         <a href="#" class="btn btn-primary">Delete</a>
       </div>
     </div>
     
       `;
       projectList.appendChild(element);
    }
    deleteProject(){

    }
    showMessage(){

    }
    resetForm(){
        document.getElementById('project-form').reset();
    }
}

document.getElementById('project-form').addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').files[0].name;
        const price = document.getElementById('description').value;
        const year = document.getElementById('year').value;
        
        console.log(name,image,price,year);
        /*CREATE A NEW PROJECT*/
        const project = new Project(image,name,price,year);
        const ui = new UI();
        ui.addProject(project);
        ui.resetForm();

        e.preventDefault();

})
//save_localStorage();
load_localStorage();

function save_localStorage(){
    let works ={
      name:"Projecto 21",
      owner:"leonardo Contarino",
      email:"lcontarino@gmail.com"
    }
    let nombre ="Pedro";
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("work", JSON.stringify(works))
}

function load_localStorage(){
 
  

  if(localStorage.getItem("nombre")){
    let nombre = localStorage.getItem("nombre");
    let work = JSON.parse(localStorage.getItem("work"));
    console.log(nombre);
    console.log(work);
  }
  else{
    console.log("No hay Datos que mostrar");
  }
}

