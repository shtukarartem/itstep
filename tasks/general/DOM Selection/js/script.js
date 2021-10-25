/*let element = document.getElementById("first-element");

let elements = document.getElementsByTagName("div");

console.log(elements.length);

let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];

let sectionDivs = section.getElementsByTagName("div");

console.log(sectionDivs.length);

let divs = document.querySelectorAll(".first-section div");

console.log(divs.length);*/

let element = document.querySelectorAll(".first-section .neighbor");
console.log(element)

for (let i = 0; i < element.length; i++){
    element.item(i).innerHTML = "я хороший сосед"//1,1
}

for (let i = 0; i < element.length; i++){
    element.item(i).innerHTML = "я хороший сосед №"+(i+1)//1.2
}

/*for (let i = 0; i < element.length; i++){
    element.item(i).innerHTML = `<span> я хороший сосед №${+(i+1)}</span>`//1.3
}*/


for (let i = 0; i < element.length; i++){//1.3
    element.item(i).innerHTML = '';
    let newSpan = document.createElement("span");
    newSpan.innerHTML = "я хороший сосед №"+(i+1);
    element.item(i).appendChild(newSpan);
}

for (let i = 0; i < element.length; i++){//1.4
    let span = element.item(i).getElementsByTagName("span").item(0);
    span.outerHTML = `<b>${span.innerHTML}</b>`
}

let neighbor = document.querySelectorAll(".first-section .fourth-neighbor")//1.5
console.log(neighbor);
neighbor.item(0).innerHTML = "я последний хороший сосед №4"

element = document.getElementById("second-element");
console.log(element)
let out = "<ul>";
for (let i = 0; i < 10; i++){
    out += `<li>Пункт${i+1}</li>`
}
out += "</ul>";
element.innerHTML += out;

element = document.querySelectorAll("#second-element ul li");//2.1

for (let i = 0; i < element.length; i++){//2.2
    if (i % 2 != 0) {
        element.item(i).style.color = "red"
    } 
}

for (let i = 0; i < element.length; i++){//2.3
    if (i % 2 == 0) {
        element.item(i).classList.add("odd-element")
    } 
}








