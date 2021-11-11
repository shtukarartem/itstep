let container = document.querySelectorAll("#container > div");
button1.onclick = function(){
    for(let i = 0; i < container.length; i++){
        container[i].innerHTML="";
    }
    let cicrcle = document.createElement("div");
    cicrcle.classList.add("circle")
    container.item(Math.floor(Math.random() * 16)).appendChild(cicrcle);
}

