onkeydown = function (event) {
    if (event.code == "Enter") {
        p.innerHTML = document.getElementById("input").value
    }
    return event.code != "Space"
}