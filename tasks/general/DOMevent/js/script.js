function myclick(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x+y;
    
    button2.style.background = "white";
}

var button2 = document.getElementById("calc2")
button2.onclick = function(){
    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);

    document.getElementsByTagName("p").item(0).innerHTML = x-y;
}

button2.addEventListener("click", function() {
    button2.style.background = "red";
});

button2.addEventListener("click", function() {
    calc.style.background = "red";
});
var button3 = document.getElementById("calc3")
button3.addEventListener("click", function(){

    let x = + document.getElementById("a").value;
    let y = parseFloat(document.getElementById("b").value);
    
    switch (document.getElementById("c").value) {
        case "+":
            document.getElementsByTagName("p").item(0).innerHTML = x+y;
            break;

        case "-":
            document.getElementsByTagName("p").item(0).innerHTML = x-y;
            break;

        case "*":
            document.getElementsByTagName("p").item(0).innerHTML = x*y;
            break;
        
        case "/":
            document.getElementsByTagName("p").item(0).innerHTML = x/y;
            break;
    }
});