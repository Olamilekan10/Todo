 const addForm = document.querySelector(".add");
 const list = document.querySelector(".todos");

 const generateTemplate = todo => {
      
      // const html = `
      // <li class="list-group-item d-flex justify-content-between align-items-center">
      // <span>${todo}</span>
      // <i class="fa fa-trash delete" aria-hidden="true"></i> 
      // </li>`;

      // list.innerHTML += html;

 };

 addForm.addEventListener("submit", e => {

    e.preventDefault();
   const todo = addForm.add.value;

  //  if (todo.length) {
  //    generateTemplate(todo);
  //    addForm.reset();
  //  }
     
 });