let Courses = []

function addCourse() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;
//  let newCourse = {
//   name:
//   id:
//   phone: 
//   course:

//  }
  Courses.push({name,id,phone,course});
  console.log(Courses);
  load();
  save();
}

let container = document.getElementById("container");
function load() {
  container.innerHTML="";
  Courses.forEach((Newcourse)=>{
    container.innerHTML+=`<div><h1>${Newcourse.name} - ${ Newcourse.id}</h1><h3>${Newcourse.course}</h3></div>`;
    
  });
}

function save(){
  localStorage.setItem("Courses",JSON.stringify(Courses));
}
function read(){
  Courses = JSON.parse(localStorage.getItem("Courses")||[]);
  load();
}
read();