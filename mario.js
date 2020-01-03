let clock = document.getElementById('clock');
function time() {
    let date = new Date();
    let times = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
    clock.innerHTML = times;
}
setInterval(time, 1000)

let button1 = document.getElementById('button');
let h3 = document.getElementById('h3');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

let trans = true;

function translate() {
    trans = !trans;
    if (trans) {
        button1.style.background = 'pink';
        button1.innerText = 'Click me';
        h3.innerText = 'Mario will come down to you soon:';
        p1.innerText = 'Uh oh! the pyramid is still under construction.';
        p2.innerText = 'Though... you could try to build it yourself! Good luck!';
    }
    else {
        button1.style.background = 'yellow';
        button1.innerText = 'Нажми на меня';
        h3.innerText = 'Марио скоро спустится к вам:'
        p1.innerText = 'Ой-йой! Пирамида все еще строится.';
        p2.innerText = 'Хотя... Вы могли бы попробовать построить ее сами! Удачи!';
    }
}

let textTrans = setInterval(translate, 3000);

function printPyramid(height) {
    logoAnime();
    clearInterval(textTrans);
    h3.innerText = 'Here he is!!! А вот и он!!!'
    let button = document.getElementById('button');
    button.disabled = true;
    let sliderNum = document.getElementById('slider').value;
    height = Number(sliderNum);
    let k = 0;
    let block = document.getElementById('pyramid');
    block.innerHTML = '';
    document.getElementById('animation')? document.getElementById('animation').remove(): '';
    document.getElementById('pot').style.width = '0px'; 
    let numOfBricks = document.getElementById('bricks');
    numOfBricks.innerHTML = height;
    let brickSymbol = document.getElementById('brickSymbol').value;
    for (let i = 2; i <= height + 1; i++) {
        let line = document.createElement('section');
        line.id = k++;
        let brick = document.createElement('div');
        brick.style = 'height: 20px; width: 20px; display: inline-block; background: brown; margin: 1px; vertical-align: middle';
        let white = document.createElement('div');
        white.style = 'height: 20px; width: 20px; display: inline-block; background: rgb(51, 135, 247); margin: 1px; vertical-align: middle; opacity: 0';
        brick.innerText = brickSymbol;
        white.classList.add('white');
        counter = height + 1 - i;
        while (counter--) {
            line.appendChild(white.cloneNode(true));
        }
        c = i;
        while (c--) {
            line.appendChild(brick.cloneNode(true));
        }
        block.appendChild(line);
    }
    document.getElementById('construction') ? document.getElementById('construction').style.display = 'none' : '';
    run();
}
let k = 2000;

async function run() {
    let block = document.getElementById('pyramid');
    for (let i of block.childNodes) {
        for (let brick of i.childNodes) {
            let pic = document.createElement('img');
            pic.src = 'mario2.gif';
            pic.style = 'height: 30px; width: 30px; position: relative; top: -30px';
            if (brick.style.background === 'brown') {
                brick.appendChild(pic);
                // pic.id = ++k;
                await delayedDisplay(pic);
                break;
            }
        }
    }
    let mario = document.createElement('img');
    mario.id = 'animation';
    mario.style = 'position: relative; width: 0px';
    mario.src = 'mario.gif';
    document.getElementById('running').appendChild(mario);
    let pot = document.getElementById('pot');
    pot.style = "width: 0px; left: 600px; margin-right: 70px; position: relative; clip-path: ellipse(100% 100% at 50% 50%);";
    anime(mario, pot);
    setTimeout(hide, 3000, mario, pot);
    setTimeout(() => {
        mario.remove();
        pot.style.top = '0px';
        let button = document.getElementById('button');
        button.disabled = false;
    }, 6000);
}

function hide(mario, pot, size=0) {
    let start = Date.now(); // запомнить время начала
    let timer = setInterval(function() {
        let timePassed = Date.now() - start; // сколько времени прошло с начала анимации?
        if (timePassed >= 3000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        pot.style.top = --size + 'px';
    }, 16);
    setTimeout(() => {
        let s = Date.now();
        let x = 50;
        let t = setInterval(function() {
            let p = Date.now() - s; // сколько времени прошло с начала анимации?
            if (p >= 2000) {
                clearInterval(t); // закончить анимацию через 2 секунды
                return;
            }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
            pot.style.clipPath = `ellipse(${--x}% ${x}% at 50% 50%)`;
        }, 20);
    }, 3000)
}

function anime(mario, pot, size=30) {
    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 3000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);
    }, 20);
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
    function draw(timePassed) {
    mario.style.left = timePassed / 5 + 'px';
    mario.style.width = ++size + 'px';
    pot.style.width = size + 'px';
    }
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  
async function delayedDisplay(pic) {
    // мы можем использовать await для Promise
    // который возвращается из delay
    await delay();
    pic.style.display = 'none';
  }


  function showBricks(slider) {
    let numOfBricks = document.getElementById('bricks');
    numOfBricks.innerHTML = slider.value;
  }


let logo = document.getElementById('logo');
// logo.style = 'clip-path: ellipse(10% 50% at 20% 50%); width: 500px';

function logoAnime(x=0, y=0) {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        if (timePassed >= 5000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);
    }, 20);
// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
    function draw(timePassed) {
        if (x < 200) logo.style = `clip-path: ellipse(10% 50% at ${++x}% 50%); width: 500px;`;
        else logo.style = `clip-path: ellipse(${y}% ${++y}% at 50% 50%); width: 500px;`;
    }    
}

logoAnime();

