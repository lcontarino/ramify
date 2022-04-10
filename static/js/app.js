const name = document

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

document.getElementById('project-form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0].name;
  const date = document.getElementById('date').value;
  const tags = document.getElementById('tags').value;

  console.log(name, description, image, date,tags);

  //localStorage.setItem("Project Name", name);
  save_localStorage(name, description, image, date,tags)

  /*CREATE A NEW PROJECT*/
  const project = new Project(name, description, image, date,tags);
  const ui = new UI();
  ui.addProject(project);
  ui.resetForm();

  e.preventDefault();

})
//save_localStorage();
//load_localStorage();

function save_localStorage(name, description, image, date,tags) {
  let works = {
    projectName: name,
    description: description,
    projectImage: image,
    date: date,
    tags: tags
  }
  localStorage.setItem("Name_On_Local", name);
  localStorage.setItem("Description_On_Local", description);
  localStorage.setItem("Works_Object", JSON.stringify(works))
}

function load_localStorage() {
  if (localStorage.getItem("nombre")) {
    let nombre = localStorage.getItem("nombre");
    let work = JSON.parse(localStorage.getItem("work"));
    console.log(nombre);
    console.log(work);
  }
  else {
    console.log("No hay Datos que mostrar");
  }
}
