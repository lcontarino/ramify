/**/
const works = [{
    userId: 1,
    id: 1,
    name: "Primer Trabajo",
    description: "Primer trabajo de Storage",
    image: "https://lcontarino.github.io/ramify/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
    progress:['65%'],
  },
  {
    userId: 2,
    id: 2,
    name: "Segundo Trabajo",
    description: "Segundo trabajo de Storage",
    image: "https://lcontarino.github.io/ramify/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['react', 'node', 'javascript'],
    progress:['25%'],
  },
  {
    userId: 3,
    id: 3,
    name: "Tercer Trabajo",
    description: "Tercer trabajo de Storage",
    image: "https://lcontarino.github.io/ramify/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['vue', 'angular', 'bootstrap'],
    progress:['5%'],
  },
  {
    userId: 1,
    id: 1,
    name: "Cuarto Trabajo",
    description: "Cuarto trabajo de Storage",
    image: "https://lcontarino.github.io/ramify/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
    progress:['90%'],
  },
  {
    userId: 1,
    id: 1,
    name: "Quinto Trabajo",
    description: "Quinto trabajo de Storage",
    image: "https://lcontarino.github.io/ramify/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
    progress:['50%'],
  },
  ]
  
 works.forEach((works) => {
   
    const worktList = document.getElementById('works-list');
    const element = document.createElement('div');
    element.innerHTML = `
    
     <div class="card" style="width: 18rem;">
     <img class="card-img-top" src="./images/prueba.jpg" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${works.name}</h5>
       <p class="card-text">${works.description}</p>
       <a href="#" class="btn btn-secondary btn-sm">View More</a>
       <div class="row">
       <div class="col-md-12">
       <div class="progress mt-2">
       <div class="progress-bar" style="width: ${works.progress}; background:#ef2d56;">
       <div class="progress-value"> ${works.progress}</div>
    
      
       </div>
      
       </div>
       <div class="work__card-footer">
       <a href="#">
            <i class="fa-solid fa-heart"></i>
            </a>
       </div>
       <div class="plunker-card-facets">
       <div class="plunker-card-tag"> ${works.tags[0]} </div> 
       <div class="plunker-card-tag"> ${works.tags[1]} </div>
        </div>
       </div>
     </div>
   </div>
   
     `;
     worktList.appendChild(element);   
 });

 let work = JSON.parse(localStorage.getItem("Works_Object"));
    
