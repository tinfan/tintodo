var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todo = document.querySelector('.todo')

form.addEventListener('submit', function(event){
  event.preventDefault();
  let val = input.value.trim()
  if(val){
    addTodoElement({
        text: val,
    })

  }
  input.value=''
})


function addTodoElement(todos){
 
  var li = document.createElement('li')
  li.innerHTML = `
              <span1>${todos.text}</span1>
              <span class="close">×</span>
`
if (todos.status === 'completed'){
    li.setAttribute('class', 'completed')
}
li.addEventListener('click', function(){
   this.classList.toggle('completed')
})
li.querySelector('span').addEventListener('click', function(){
  this.parentElement.remove()
})

 todo.appendChild(li)
}