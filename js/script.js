"use strict"
var input = document.querySelector('.btns__input');
var a = 0;
var b;
function ready() {

    countdown();
    setTimeout(() => {
        objectRand();
        b = setInterval(() => {
            a = a + 0.1;
        }, 100);
    }, 5000);
}

function reaction() {
    clearInterval(b);
    input.value = '0';
    input.value = String(a);
    a = 0;
    document.querySelector(".area__object").style.display = "none";
    setTimeout(() => {
        document.querySelector(".area__object").style.display = "block";
        objectRand();
        b = setInterval(() => {
            a = a + 0.1;
        }, 100);
    }, getRandomArbitrary(500, 6000));
}