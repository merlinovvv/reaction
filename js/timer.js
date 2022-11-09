let timer; // пока пустая переменная
let x = 5; // стартовое значение обратного отсчета


function countdown() {  // функция обратного отсчета
    document.querySelector('.timer__result').innerHTML = x;
    x--; // уменьшаем число на единицу
    if (x < 0) {
        clearTimeout(timer); // таймер остановится на нуле
        setTimeout((document.querySelector('.timer__result').style.display = 'none'), 1000);
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}