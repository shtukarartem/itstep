let number = 0;
let isFinal = false
document.querySelector("table").onclick = function(event){
if(isFinal){
    return false
}
    let td = event.target;
    if(td.tagName != "TD")
    return false
    let rowI = td.parentNode.rowIndex;
    let cellI = td.cellIndex;
    let tdd = td.parentElement.children;
    let trr = document.querySelectorAll(`tr td:nth-child(${cellI+1})`);
    let tds = []
    tds.push(td,tdd.item(cellI + 1),tdd.item(cellI - 1),trr.item(rowI + 1),trr.item(rowI - 1))
    tds.forEach(function(item){
       if(item){
        item.classList.toggle("black")
       }
    })
    console.log(tds)
    number ++
    let fin = document.querySelectorAll(".black");
if(fin == 36){
    document.querySelector("table").style.display = "none";
    let div = document.createElement("div");
    div.innerHTML = `Игра пройдена за ${number} шагов!!`
    document.append(div)
    isFinal = true
    
}
}