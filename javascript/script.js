setInterval(function () {
    document.getElementById("demo").innerHTML = new Date()
}, 1000)

function displayDate() {
    if (document.getElementById("button1").innerHTML === "Узнать дату") {
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

function cursorPoint(element1) {
    let cellColor = "background : #6633cc;"
    let linkColor = "color : #ffffff;"

    try {
        if (document.getElementById("c" + element1).getAttribute("style") == null) {
            document.getElementById("c" + element1).setAttribute("style", cellColor);
            document.getElementById("c" + element1 + "-" + element1).setAttribute("style", linkColor);
        } else {
            document.getElementById("c" + element1).removeAttribute("style");
            document.getElementById("c" + element1 + "-" + element1).removeAttribute("style");
        }
    } catch (err1) {
        for (let i = 1; i <= 20; i++) {
            document.getElementById("c" + i).removeAttribute("style");
            document.getElementById("c" + i + "-" + i).removeAttribute("style");
        }
    }
}














// alert("Добро пожаловать на мой сайт! Спасибо что зашли.");
