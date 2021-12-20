setInterval(function () {
    document.getElementById("demo").innerHTML = new Date()
}, 1000)

function displayDate() {
    if (document.getElementById("button_date").innerHTML === "Узнать дату") {
        document.getElementById("button_date").innerHTML = Date();
    } else {
        document.getElementById("button_date").innerHTML = "Узнать дату"
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
            if (document.getElementById("c" + i).getAttribute("style") == null) {
                continue;
            } else {
                document.getElementById("c" + i).removeAttribute("style");
                document.getElementById("c" + i + "-" + i).removeAttribute("style");
            }
        }
    }
}

var user_array = ["admin"];
var pass_array = ["admin"];

function proverka_polzovatelya() {
    var counter1 = 0; 
    let user = document.getElementById("login1").value;
    let pass = document.getElementById("password1").value;

    for (let i = 0; i < user_array.length; i++) {
        if (user_array[i] == user) {
            counter1++;
        } else {
            continue;
        }
    }
    return (counter1);
}

function registration1() {
    if (proverka_polzovatelya() == 0 && document.getElementById("login1").value != '') {
        let user = document.getElementById("login1").value;
        let pass = document.getElementById("password1").value;

        user_array.push(user);
        pass_array.push(pass);
    } else {
        if (document.getElementById("login1").value == '') {
            alert("Ошибка ввода!!!");
        } else {
            alert("Такой пользователь уже существует!");
        }
    }
}

function input1() {
    let user = document.getElementById("login1").value;
    let pass = document.getElementById("password1").value;

    if (document.getElementById("button_input").getAttribute("value") == "Вход") {
        for (let i = 0; i < user_array.length; i++) {
            if (user == user_array[i] && pass == pass_array[i]) {
                document.getElementById("login1").setAttribute("type", "hidden");
                document.getElementById("password1").setAttribute("type", "hidden");
                document.getElementById("button_input").setAttribute("value", "Выход");
                document.getElementById("button_registration").setAttribute("type", "hidden");
            } else {
                continue;
            }
        }
    } else {
        document.getElementById("login1").setAttribute("type", "text");
        document.getElementById("password1").setAttribute("type", "password");
        document.getElementById("button_input").setAttribute("value", "Вход");
        document.getElementById("button_registration").setAttribute("type", "button");
    }
}








// alert("Добро пожаловать на мой сайт! Спасибо что зашли.");
