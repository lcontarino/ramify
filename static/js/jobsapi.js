/**/

  
document.getElementById("loadJsonProjects").addEventListener("click", loadJson);


function loadJson() {
  fetch("./static/fetch/projects.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      
        

 data.forEach((data) => {
    
const worktList = document.getElementById('works-list');
 const element = document.createElement('div');

 element.innerHTML = `
    
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./images/prueba.jpg" alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${data.name}</h5>
     <p class="card-text">${data.description}</p>
      <a href="#" class="btn btn-secondary btn-sm">View More</a>
     <div class="row">
      <div class="col-md-12">
      <div class="progress mt-2">
     <div class="progress-bar" style="width: ${data.progress}; background:#ef2d56;">
       <div class="progress-value"> ${data.progress}</div>
  
   
      </div>
     
       </div>
       <div class="work__card-footer">
      <a href="#">
          <i class="fa-solid fa-heart"></i>
           </a>
      </div>
     <div class="plunker-card-facets">
      <div class="plunker-card-tag"> ${data.tags[0]} </div> 
       <div class="plunker-card-tag"> ${data.tags[1]} </div>
       </div>
      </div>
   </div>
       </div>
  
   `;
   worktList.appendChild(element);
  
//           //console.log(workName.name)
     
//          //console.log(workName);
       //  console.log(works.name);
   
  });
  
  let work = JSON.parse(localStorage.getItem("Works_Object"));
    
})

.catch(function(error){
    Swal.fire(
        "No se encuentra el archivo json",
        'Verifica tu codigo.',
        'error'
      )
});
}