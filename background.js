var div = document.getElementById("full");
// var btn = document.getElementById("btn");

// btn.addEventListener("click", )

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
    
}

function changeColor(){
    div.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 1000);

