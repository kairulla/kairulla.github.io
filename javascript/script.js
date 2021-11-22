setInterval(function () {
    // Load the date here every second
    document.getElementById("demo").innerHTML = new Date()
}, 1000)

function displayDate() {
    if (document.getElementById("button1").innerHTML == "Узнать дату") {
        document.getElementById("button1").innerHTML = Date();
    } else {
        document.getElementById("button1").innerHTML = "Узнать дату"
    }
}

function activeLight() {
    if (document.getElementById("light1").getAttribute("src") == "pictures/light_off.png") {
        document.getElementById("light1").setAttribute("src", "pictures/light_on.png");
    } else {
        document.getElementById("light1").setAttribute("src", "pictures/light_off.png");
    }
}


// alert("Добро пожаловать на мой сайт! Спасибо что зашли.");
