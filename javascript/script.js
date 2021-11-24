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
    switch (element1) {
        case 1:
            if ((document.getElementById("c1").getAttribute("style") == null) || (document.getElementById("c1").getAttribute("style") == "null")) {
                document.getElementById("c1").setAttribute("style", "background : #6633cc;");
                document.getElementById("c1-1").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c1").setAttribute("style", null);
                document.getElementById("c1-1").setAttribute("style", null);
            }
            break;
        case 2:
            if ((document.getElementById("c2").getAttribute("style") == null) || (document.getElementById("c2").getAttribute("style") == "null")) {
                document.getElementById("c2").setAttribute("style", "background : #6633cc;");
                document.getElementById("c2-2").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c2").setAttribute("style", null);
                document.getElementById("c2-2").setAttribute("style", null);
            }
            break;
        case 3:
            if ((document.getElementById("c3").getAttribute("style") == null) || (document.getElementById("c3").getAttribute("style") == "null")) {
                document.getElementById("c3").setAttribute("style", "background : #6633cc;");
                document.getElementById("c3-3").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c3").setAttribute("style", null);
                document.getElementById("c3-3").setAttribute("style", null);
            }
            break;
        case 4:
            if ((document.getElementById("c4").getAttribute("style") == null) || (document.getElementById("c4").getAttribute("style") == "null")) {
                document.getElementById("c4").setAttribute("style", "background : #6633cc;");
                document.getElementById("c4-4").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c4").setAttribute("style", null);
                document.getElementById("c4-4").setAttribute("style", null);
            }
            break;
        case 5:
            if ((document.getElementById("c5").getAttribute("style") == null) || (document.getElementById("c5").getAttribute("style") == "null")) {
                document.getElementById("c5").setAttribute("style", "background : #6633cc;");
                document.getElementById("c5-5").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c5").setAttribute("style", null);
                document.getElementById("c5-5").setAttribute("style", null);
            }
            break;
        case 6:
            if ((document.getElementById("c6").getAttribute("style") == null) || (document.getElementById("c6").getAttribute("style") == "null")) {
                document.getElementById("c6").setAttribute("style", "background : #6633cc;");
                document.getElementById("c6-6").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c6").setAttribute("style", null);
                document.getElementById("c6-6").setAttribute("style", null);
            }
            break;
        case 7:
            if ((document.getElementById("c7").getAttribute("style") == null) || (document.getElementById("c7").getAttribute("style") == "null")) {
                document.getElementById("c7").setAttribute("style", "background : #6633cc;");
                document.getElementById("c7-7").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c7").setAttribute("style", null);
                document.getElementById("c7-7").setAttribute("style", null);
            }
            break;
        case 8:
            if ((document.getElementById("c8").getAttribute("style") == null) || (document.getElementById("c8").getAttribute("style") == "null")) {
                document.getElementById("c8").setAttribute("style", "background : #6633cc;");
                document.getElementById("c8-8").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c8").setAttribute("style", null);
                document.getElementById("c8-8").setAttribute("style", null);
            }
            break;
        case 9:
            if ((document.getElementById("c9").getAttribute("style") == null) || (document.getElementById("c9").getAttribute("style") == "null")) {
                document.getElementById("c9").setAttribute("style", "background : #6633cc;");
                document.getElementById("c9-9").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c9").setAttribute("style", null);
                document.getElementById("c9-9").setAttribute("style", null);
            }
            break;
        case 10:
            if ((document.getElementById("c10").getAttribute("style") == null) || (document.getElementById("c10").getAttribute("style") == "null")) {
                document.getElementById("c10").setAttribute("style", "background : #6633cc;");
                document.getElementById("c10-10").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c10").setAttribute("style", null);
                document.getElementById("c10-10").setAttribute("style", null);
            }
            break;
        case 11:
            if ((document.getElementById("c11").getAttribute("style") == null) || (document.getElementById("c11").getAttribute("style") == "null")) {
                document.getElementById("c11").setAttribute("style", "background : #6633cc;");
                document.getElementById("c11-11").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c11").setAttribute("style", null);
                document.getElementById("c11-11").setAttribute("style", null);
            }
            break;
        case 12:
            if ((document.getElementById("c12").getAttribute("style") == null) || (document.getElementById("c12").getAttribute("style") == "null")) {
                document.getElementById("c12").setAttribute("style", "background : #6633cc;");
                document.getElementById("c12-12").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c12").setAttribute("style", null);
                document.getElementById("c12-12").setAttribute("style", null);
            }
            break;
        case 13:
            if ((document.getElementById("c13").getAttribute("style") == null) || (document.getElementById("c13").getAttribute("style") == "null")) {
                document.getElementById("c13").setAttribute("style", "background : #6633cc;");
                document.getElementById("c13-13").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c13").setAttribute("style", null);
                document.getElementById("c13-13").setAttribute("style", null);
            }
            break;
        case 14:
            if ((document.getElementById("c14").getAttribute("style") == null) || (document.getElementById("c14").getAttribute("style") == "null")) {
                document.getElementById("c14").setAttribute("style", "background : #6633cc;");
                document.getElementById("c14-14").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c14").setAttribute("style", null);
                document.getElementById("c14-14").setAttribute("style", null);
            }
            break;
        case 15:
            if ((document.getElementById("c15").getAttribute("style") == null) || (document.getElementById("c15").getAttribute("style") == "null")) {
                document.getElementById("c15").setAttribute("style", "background : #6633cc;");
                document.getElementById("c15-15").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c15").setAttribute("style", null);
                document.getElementById("c15-15").setAttribute("style", null);
            }
            break;
        case 16:
            if ((document.getElementById("c16").getAttribute("style") == null) || (document.getElementById("c16").getAttribute("style") == "null")) {
                document.getElementById("c16").setAttribute("style", "background : #6633cc;");
                document.getElementById("c16-16").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c16").setAttribute("style", null);
                document.getElementById("c16-16").setAttribute("style", null);
            }
            break;
        case 17:
            if ((document.getElementById("c17").getAttribute("style") == null) || (document.getElementById("c17").getAttribute("style") == "null")) {
                document.getElementById("c17").setAttribute("style", "background : #6633cc;");
                document.getElementById("c17-17").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c17").setAttribute("style", null);
                document.getElementById("c17-17").setAttribute("style", null);
            }
            break;
        case 18:
            if ((document.getElementById("c18").getAttribute("style") == null) || (document.getElementById("c18").getAttribute("style") == "null")) {
                document.getElementById("c18").setAttribute("style", "background : #6633cc;");
                document.getElementById("c18-18").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c18").setAttribute("style", null);
                document.getElementById("c18-18").setAttribute("style", null);
            }
            break;
        case 19:
            if ((document.getElementById("c19").getAttribute("style") == null) || (document.getElementById("c19").getAttribute("style") == "null")) {
                document.getElementById("c19").setAttribute("style", "background : #6633cc;");
                document.getElementById("c19-19").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c19").setAttribute("style", null);
                document.getElementById("c19-19").setAttribute("style", null);
            }
            break;
        case 20:
            if ((document.getElementById("c20").getAttribute("style") == null) || (document.getElementById("c20").getAttribute("style") == "null")) {
                document.getElementById("c20").setAttribute("style", "background : #6633cc;");
                document.getElementById("c20-20").setAttribute("style", "color : #ffffff;");
            } else {
                document.getElementById("c20").setAttribute("style", null);
                document.getElementById("c20-20").setAttribute("style", null);
            }
            break;
        default:
            document.getElementById("c1").setAttribute("style", null);
            document.getElementById("c1-1").setAttribute("style", null);
            document.getElementById("c2").setAttribute("style", null);
            document.getElementById("c2-2").setAttribute("style", null);
            document.getElementById("c3").setAttribute("style", null);
            document.getElementById("c3-3").setAttribute("style", null);
            document.getElementById("c4").setAttribute("style", null);
            document.getElementById("c4-4").setAttribute("style", null);
            document.getElementById("c5").setAttribute("style", null);
            document.getElementById("c5-5").setAttribute("style", null);
            document.getElementById("c6").setAttribute("style", null);
            document.getElementById("c6-6").setAttribute("style", null);
            document.getElementById("c7").setAttribute("style", null);
            document.getElementById("c7-7").setAttribute("style", null);
            document.getElementById("c8").setAttribute("style", null);
            document.getElementById("c8-8").setAttribute("style", null);
            document.getElementById("c9").setAttribute("style", null);
            document.getElementById("c9-9").setAttribute("style", null);
            document.getElementById("c10").setAttribute("style", null);
            document.getElementById("c10-10").setAttribute("style", null);
            document.getElementById("c11").setAttribute("style", null);
            document.getElementById("c11-11").setAttribute("style", null);
            document.getElementById("c12").setAttribute("style", null);
            document.getElementById("c12-12").setAttribute("style", null);
            document.getElementById("c13").setAttribute("style", null);
            document.getElementById("c13-13").setAttribute("style", null);
            document.getElementById("c14").setAttribute("style", null);
            document.getElementById("c14-14").setAttribute("style", null);
            document.getElementById("c15").setAttribute("style", null);
            document.getElementById("c15-15").setAttribute("style", null);
            document.getElementById("c16").setAttribute("style", null);
            document.getElementById("c16-16").setAttribute("style", null);
            document.getElementById("c17").setAttribute("style", null);
            document.getElementById("c17-17").setAttribute("style", null);
            document.getElementById("c18").setAttribute("style", null);
            document.getElementById("c18-18").setAttribute("style", null);
            document.getElementById("c19").setAttribute("style", null);
            document.getElementById("c19-19").setAttribute("style", null);
            document.getElementById("c20").setAttribute("style", null);
            document.getElementById("c20-20").setAttribute("style", null);
    }
}














// alert("Добро пожаловать на мой сайт! Спасибо что зашли.");
