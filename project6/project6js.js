const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

let colorChange;

function startChangingColor(){

    if(!colorChange){
        colorChange = setInterval(changeBGcolor, 1000);
    }

    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }   
};

function stopChangingColor(){
    clearInterval(colorChange);
    colorChange = null;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);