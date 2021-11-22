setInterval(function() {
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



// alert("Добро пожаловать на мой сайт! Спасибо что зашли.");
