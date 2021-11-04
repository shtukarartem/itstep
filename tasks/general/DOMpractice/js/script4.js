let button = document.getElementById("calc")

button.addEventListener("click", function(){
    let x = + document.getElementById("a").value;
    let y = + document.getElementById("b").value;
    let c;
    c = x;
    document.getElementById("a").value = y;
    document.getElementById("b").value = c;
})