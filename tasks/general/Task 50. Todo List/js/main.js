document.forms.todo_form.button.onclick = function(){
    let li = document.createElement("li");
    li.innerHTML = `${document.forms.todo_form.task.value}<span class="close">×</span><span class = "arrow">&#9998;</span>`
    document.querySelector("ul").append(li);
    return false
}

document.querySelector("ul").onclick = function(event){
 let li = event.target;
 if(li.tagName == "LI")
    li.classList.toggle("checked")
 
 
 if (li.classList.contains("close")) {
    //li.parentNode.remove()
    console.log(li.parentNode.textContent)
}
if (li.classList.contains("arrow")) {
    let list = document.querySelectorAll("li");
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove("add")
    }     
        let text ='';
        text += li.parentNode.firstChild.textContent
        document.forms.todo_form.task.value = text;
        li.parentNode.classList.add("add")
    }
 
}


document.forms.todo_form.edit_btn.onclick = function(){
document.querySelector(".add").innerHTML = `${document.forms.todo_form.task.value}<span class="close">×</span><span class = "arrow">&#9998;</span>`
document.querySelector(".add").classList.remove(".add")
return false
}

//5
const tasksListElement = document.querySelector("ul");
const taskElements = tasksListElement.querySelectorAll("li");

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
    task.draggable = true;
  }

  tasksListElement.addEventListener(`dragstart`, function(event){//добавление класса для начала перетаскивания.
    event.target.classList.add(`selected`);
  })
  
  tasksListElement.addEventListener(`dragend`, function(event){ //Удаление класса при окончании перетаскивания.
    event.target.classList.remove(`selected`);
  });

  tasksListElement.addEventListener(`dragover`, function(event){
    // Разрешаем сбрасывать элементы в эту область
    event.preventDefault();
  
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = event.target;
    // Проверяем, что событие сработало:
    // не на том элементе, который мы перемещаем,
    const isMoveable = activeElement !== currentElement
  
    // Если нет, прерываем выполнение функции
    if (!isMoveable) {
      return;
    }
  
    // Находим элемент, перед которым будем вставлять
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
        currentElement.nextElementSibling :
        currentElement;
  
    // Вставляем activeElement перед nextElement
    tasksListElement.insertBefore(activeElement, nextElement);
  });

  const getNextElement = function(cursorPosition, currentElement){
    // Получаем объект с размерами и координатами
    const currentElementCoord = currentElement.getBoundingClientRect();
    // Находим вертикальную координату центра текущего элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
    // Если курсор выше центра элемента, возвращаем текущий элемент
    // В ином случае — следующий DOM-элемент
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
  
    return nextElement;
  };





