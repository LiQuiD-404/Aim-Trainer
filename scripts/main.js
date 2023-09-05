let score = 0;
var audio = new Audio('./assets/coins.mp3');



let tg = document.querySelector('.tg')
let time_rem = document.querySelector('#time')
tg.addEventListener('click', function () {
    tg.style.visibility = "hidden";
    score = score + 1;
    audio.play();
})

let time = 30;

let interval;

let time30 = document.querySelector('.sec30').addEventListener('click', function () {
    time = 30;
    document.querySelector('.sec30').style.backgroundColor = '#cbd5e1'
    document.querySelector('.sec45').style.backgroundColor = 'transparent'
    document.querySelector('.sec60').style.backgroundColor = 'transparent'
})
let time45 = document.querySelector('.sec45').addEventListener('click', function () {
    time = 45;
    document.querySelector('.sec30').style.backgroundColor = 'transparent'
    document.querySelector('.sec45').style.backgroundColor = '#cbd5e1'
    document.querySelector('.sec60').style.backgroundColor = 'transparent'
})
let time60 = document.querySelector('.sec60').addEventListener('click', function () {
    time = 60;
    document.querySelector('.sec30').style.backgroundColor = 'transparent'
    document.querySelector('.sec45').style.backgroundColor = 'transparent'
    document.querySelector('.sec60').style.backgroundColor = '#cbd5e1'
})


function getRandomInt() {
    tg.style.visibility = "visible";
    gsap.set('.tg', { scale: 0 });
    if (targetlife == 1000) {
        gsap.to('.tg', {
            scale: targetsize,
            duration: 0.5,
        })
    }
    if (targetlife == 800) {
        gsap.to('.tg', {
            scale: targetsize,
            duration: 0.1,
        })
    }
    if (targetlife == 500) {
        gsap.set('.tg', { scale: targetsize });
    }

    time_rem.innerHTML = `Time: ${time}`;
    time--;
    if (time < 0) {
        clearInterval(interval)
        time_rem.innerHTML = `Time: ${0}`;
        document.querySelector('.gameover').style.display = 'flex'
        document.querySelector('.instructions').style.display = 'none'
        let highscore = (localStorage.getItem("score"));
        if (score > highscore) {
            localStorage.setItem("score", score);
            highscore = score;
        }
        document.querySelector('.highscore').innerHTML = `Highscore : ${highscore}`
    }
    let game = document.getElementById('gamescreen');
    let x = (Math.floor(Math.random() * ((game.offsetWidth - 100) - 0 + 1)) + 0);
    let y = (Math.floor(Math.random() * ((game.offsetHeight - 100) - 0 + 1)) + 0);
    tg.style.top = y + "px";
    tg.style.left = x + "px";
    document.getElementById('score').innerHTML = `Score: ${score}`
}

let targetsize = 1;

let red = document.querySelector('.red').addEventListener('click', function () {
    tg.style.backgroundColor = '#D2042D'
    document.querySelector('.red').style.border = '1px solid white'
    document.querySelector('.blue').style.border = 'none'
    document.querySelector('.cyan').style.border = 'none'

})
let blue = document.querySelector('.blue').addEventListener('click', function () {
    tg.style.backgroundColor = '#0047AB'
    document.querySelector('.blue').style.border = '1px solid white'
    document.querySelector('.red').style.border = 'none'
    document.querySelector('.cyan').style.border = 'none'
})
let cyan = document.querySelector('.cyan').addEventListener('click', function () {
    tg.style.backgroundColor = '#1fc67c'
    document.querySelector('.cyan').style.border = '1px solid white'
    document.querySelector('.red').style.border = 'none'
    document.querySelector('.blue').style.border = 'none'
})

let targetlife = 1000;

let tgt1 = document.querySelector('.t1').addEventListener('click', function () {
    targetlife = 1000;
    document.querySelector('.t1').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t08').style.backgroundColor = 'transparent'
    document.querySelector('.t05').style.backgroundColor = 'transparent'
})
let tgt08 = document.querySelector('.t08').addEventListener('click', function () {
    targetlife = 800;
    document.querySelector('.t1').style.backgroundColor = 'transparent'
    document.querySelector('.t08').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t05').style.backgroundColor = 'transparent'
})
let tgt05 = document.querySelector('.t05').addEventListener('click', function () {
    targetlife = 500;
    document.querySelector('.t1').style.backgroundColor = 'transparent'
    document.querySelector('.t08').style.backgroundColor = 'transparent'
    document.querySelector('.t05').style.backgroundColor = '#cbd5e1'
})

document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.instructions').style.visibility = 'hidden'
    interval = setInterval(getRandomInt, targetlife)
})

let size1x = document.querySelector('.t1x').addEventListener('click', function () {
    document.querySelector('.t1x').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t2x').style.backgroundColor = 'transparent'
    document.querySelector('.t5x').style.backgroundColor = 'transparent'
    tg.style.scale = 1
    targetsize = 1;

})
let size2x = document.querySelector('.t2x').addEventListener('click', function () {
    document.querySelector('.t1x').style.backgroundColor = 'transparent'
    document.querySelector('.t2x').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t5x').style.backgroundColor = 'transparent'
    tg.style.scale = 2
    targetsize = 2;
})
let size5x = document.querySelector('.t5x').addEventListener('click', function () {
    document.querySelector('.t1x').style.backgroundColor = 'transparent'
    document.querySelector('.t2x').style.backgroundColor = 'transparent'
    document.querySelector('.t5x').style.backgroundColor = '#cbd5e1'
    tg.style.scale = 5
    targetsize = 5;
})


function restart() {
    location.reload();
}


let load = 1;
function loader() {
    if(load < 90){
        load = load + Math.floor(Math.random() * 15);
        document.querySelector('.load').innerHTML = load + "%";
    }
    else{
        document.querySelector('.load').innerHTML = "100%";
        clearInterval(loadinterval)
        clearloader();
    }

}

let loadinterval = setInterval(() => {
    loader();
}, 200);

function clearloader(){
    gsap.to('.loader',{
        height: 0,
        duration: 0.5,
    })
    gsap.set('.instructions', { y: "100%", opacity: 0 });

    gsap.to('.instructions', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.5
})
}