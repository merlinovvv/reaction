
var object = document.querySelector(".area__object");
var area = document.querySelector(".row__area");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function objectRand() {
    object.style.width = getRandomArbitrary(15, 40) + 'px';
    object.style.height = getRandomArbitrary(15, 40) + 'px';
    var rand = getRandomArbitrary(1, 3)
    if (rand >= 1 && rand < 2) {
        object.style.backgroundColor = 'red';
        area.style.backgroundColor = 'white';
    } else if (rand >= 2 && rand < 3){
        object.style.backgroundColor = 'blue';
        area.style.backgroundColor = 'green';
    } else if (rand >= 3){
        object.style.backgroundColor = 'green';
        area.style.backgroundColor = 'blue';
    }
    object.style.position =  "relative";
  
    object.style.left = getRandomArbitrary(1, 100) + "%";
    object.style.top = getRandomArbitrary(1, 100) + "%";
}