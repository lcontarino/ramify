const categories = ['HTML', 'CSS', 'SCSS', 'POSTCSS',
  'JS', 'REACT', 'VUE', 'Babel',
  'PUSHER', 'EMBER.JS', 'METEOR.JS',
  'AURELIA', 'FEATHERS.JS']

class Project {
  constructor(name, description, image, date,tags) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.date = date;
    this.tags = tags;
  }
}

class UI {
  //Methods addProject
  addProject(project) {
    const projectList = document.getElementById('works-list');
    const element = document.createElement('div');
    
    element.innerHTML = `
    <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="./images/${project.image}" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">${project.name}</h5> 
         <p class="card-text">${project.description}</p>
         <a href="#" class="btn btn-primary">Publish</a>
         <a href="#" class="btn btn-danger" name = "btnDanger">Remove</a>
       </div>
     </div>
       `;
    projectList.appendChild(element);
  }

   //Methods deleteProject
  deleteProject(element) {
    if(element.name === 'btnDanger'){
     element.parentElement.parentElement.parentElement.remove();
    }

  }

  //Methods showMessage
  showMessage() {

  }

   //Methods resetForm
  resetForm() {
    document.getElementById('project-form').reset();
  }
}

 //DOM EVENTS
document.getElementById('project-form').addEventListener('submit', function (e) {
  const name = document.getElementById('projectName').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0].name;
  const date = document.getElementById('projectDate').value;
  const tags = document.getElementById('tags').value;

  // log Form input. Uncoment for debug.
  // console.log(name, description, image, date,tags);

  save_localStorage(name, description, image, date,tags)
  
  /*CREATE A NEW PROJECT*/
  const project = new Project(name, description, image, date,tags);

  // Create a New  Object from UI
  const ui = new UI();

  // Acces UI's Methods
  ui.addProject(project);

  ui.resetForm();

  e.preventDefault();

})

document.getElementById('works-list').addEventListener('click', function(e){
  alert("Eliminar")
  console.log(e.target)

   // Create a New  Object from UI
   const ui = new UI();
   // Delete Method
   ui.deleteProject(e.target);
})
//save_localStorage();


function save_localStorage(name, description, image, date,tags) {
  let works = {
    projectName: name,
    description: description,
    projectImage: image,
    date: date,
    tags: tags
  }
  //localStorage.setItem("Name_On_Local", name);
  //localStorage.setItem("Description_On_Local", description);
  localStorage.setItem("Works_Object", JSON.stringify(works))
}

function load_localStorage() {
  const retrieveWorks = JSON.parse(localStorage.getItem('Works_Object'));
  
  if (localStorage.getItem("Works_Object")) {
   

    const worktList = document.getElementById('works-list');
    const elements = document.createElement('div');


}
  else {
    showError();
    let work = ("No hay Datos que mostrar");
   // console.log(work);
  }
}


function showError(){
  

    const noWorksDiv = document.getElementById('no-works');
    const noWorkElement = document.createElement('div');
    
    noWorkElement.innerHTML = `
    <div class="container bg-indigo-800" style="width: 18rem;">
    <h4> No projects for show </h4>
     </div>
       `;
       noWorksDiv.appendChild(noWorkElement);
  
  Swal.fire(
    "You haven't created any projects yet. wait no more and start coding now",
    'Lets Go',
    'error'
  )
}



class UIFromLocal {
  addProject(projectFromLocal) {
    const projectList = document.getElementById('works-list');
    const element = document.createElement('div');
    
    element.innerHTML = `
    <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="./images/${project.image}" alt="Card image cap">
       <div class="card-body">
         <h5 class="card-title">${project.name}</h5> 
         <p class="card-text">${project.description}</p>
         <a href="#" class="btn btn-primary">Publish</a>
       </div>
     </div>
       `;
    projectList.appendChild(element);
  }
  deleteProject() {

  }
  showMessage() {

  }
  resetForm() {
    document.getElementById('project-form').reset();
  }
}

load_localStorage();


Toastify({

  text: "Welcome to User dash",
  
  duration: 3000
  
  }).showToast();