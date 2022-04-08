const works = [{
    userId: 1,
    id: 1,
    name: "Primer Trabajo",
    description: "Primer trabajo de Storage",
    image: "/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
  },
  {
    userId: 2,
    id: 2,
    name: "Segundo Trabajo",
    description: "Segundo trabajo de Storage",
    image: "/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['react', 'node', 'javascript'],
  },
  {
    userId: 3,
    id: 3,
    name: "Tercer Trabajo",
    description: "Tercer trabajo de Storage",
    image: "/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['vue', 'angular', 'bootstrap'],
  },
  {
    userId: 1,
    id: 1,
    name: "Cuarto Trabajo",
    description: "Cuarto trabajo de Storage",
    image: "/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
  },
  {
    userId: 1,
    id: 1,
    name: "Quinto Trabajo",
    description: "Quinto trabajo de Storage",
    image: "/images/prueba.jpg",
    date: "04/03/2022",
    tags: ['javascript', 'webdevelopment'],
  },
  ]
  
 works.forEach((works) => {
    const worktList = document.getElementById('works-list');
    const element = document.createElement('div');
    element.innerHTML = `
    
     <div class="card" style="width: 18rem;">
     <img class="card-img-top" src="/images/prueba.jpg" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${works.name}</h5> 
       <p class="card-text">${works.description}</p>
       <a href="#" class="btn btn-primary">View More</a>
     </div>
   </div>
   
     `;
     worktList.appendChild(element);
      //console.log(workName.name)
     
         //console.log(workName);
        
   
 });
