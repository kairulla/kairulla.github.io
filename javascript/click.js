window.onload = function () { //дожидаемся полной загрузки страницы    
    var a = document.getElementById('switch'); //получаем идентификатор элемента
    a.onclick = function () { //вешаем на него событие
        //производим какие-то действия
        if (this.innerHTML == 'On') this.innerHTML = 'Off';
        else this.innerHTML = 'On'; //предотвращаем переход по ссылке href
        return false;
    }
}

alert("Добро пожаловать на мой сайт! Спасибо что зашли.");