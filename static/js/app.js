class Project {
  constructor(name, description, image, date,tags) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.date = date;
    this.tags = tags;
  }
}



document.getElementById('project-form').addEventListener('submit', function (e) {
  const name = document.getElementById('projectName').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0].name;
  const date = document.getElementById('projectDate').value;
  const tags = document.getElementById('tags').value;

  console.log(name, description, image, date, tags);
  saveUser_localStorage(name,description,image,date,tags)
})
// const categories = ['HTML', 'CSS', 'SCSS', 'POSTCSS',
//   'JS', 'REACT', 'VUE', 'Babel',
//   'PUSHER', 'EMBER.JS', 'METEOR.JS',
//   'AURELIA', 'FEATHERS.JS']



class UI {
  
  addProject(project) {
    const projectFromLocal = JSON.parse(localStorage.getItem('Project_Object'))
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

function saveUser_localStorage(name, description, image, date,tags) {
  let newProject = [];
  // Condicional para verificar datos dentro del LocalStorage. .
  if (localStorage.getItem('Project_Object') === null) {
    // Si esta vacio inserta el array 'newUser'
    localStorage.setItem("Project_Object", JSON.stringify(newProject));
    // Limpiamos el Formulario de Registro. 
    document.getElementById('project-form').reset();
  }
/* Obtenemos datos desde el LocalStorage y lo almacenamos 
  dentro de getUser para asi persistir los datos almacenados con anterioridad.*/
  let getProject = JSON.parse(localStorage.getItem('Project_Object'));
   newProject = [{
    name: name,
    description: description,
    image: image,
    date: date,
    tags: tags
  }]
  //actualizamos el valor de 'getUser' con los valores de 'newUser'
  getProject.push(newProject); 

  localStorage.setItem("Project_Object", JSON.stringify(getProject));
  console.log(getProject);
  document.getElementById('project-form').reset();

 
  /*CREATE A NEW PROJECT*/
  const project = new Project(name, description, image, date,tags);

  const ui = new UI();
  ui.addProject(project);
  }

  // function loadProject_FromLocal(){
  //   const projectFromLocal = JSON.parse(localStorage('Project_Object'))
  // }