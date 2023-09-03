let score = 0;

let tg = document.querySelector('.tg')
let time_rem = document.querySelector('#time')
tg.addEventListener('click',function(){
    tg.style.visibility = "hidden";
    score = score + 1;
})

let time = 30;

let interval;

let time30 = document.querySelector('.sec30').addEventListener('click',function(){
    time = 30;
    document.querySelector('.sec30').style.backgroundColor = '#cbd5e1'
    document.querySelector('.sec45').style.backgroundColor = 'transparent'
    document.querySelector('.sec60').style.backgroundColor = 'transparent'
})
let time45 = document.querySelector('.sec45').addEventListener('click',function(){
    time = 45;
    document.querySelector('.sec30').style.backgroundColor = 'transparent'
    document.querySelector('.sec45').style.backgroundColor = '#cbd5e1'
    document.querySelector('.sec60').style.backgroundColor = 'transparent'
})
let time60 = document.querySelector('.sec60').addEventListener('click',function(){
    time = 60;
    document.querySelector('.sec30').style.backgroundColor = 'transparent'
    document.querySelector('.sec45').style.backgroundColor = 'transparent'
    document.querySelector('.sec60').style.backgroundColor = '#cbd5e1'
})


function getRandomInt() {
    tg.style.visibility = "visible";
    time_rem.innerHTML = `Time: ${time}`;
    time--;
    if(time < 0){
        clearInterval(interval)
        time_rem.innerHTML = `Time: ${0}`;
        getscore();
    }
    let game = document.getElementById('gamescreen');
    let x = ( Math.floor(Math.random() * ((game.offsetWidth-100) - 0 + 1)) + 0);
    let y = ( Math.floor(Math.random() * ((game.offsetHeight-100) - 0 + 1)) + 0);
    tg.style.top = y + "px";
    tg.style.left = x + "px";
    document.getElementById('score').innerHTML = `Score: ${score}`
}


let red = document.querySelector('.red').addEventListener('click',function(){
    tg.style.backgroundColor = '#D2042D'
    document.querySelector('.red').style.border = '1px solid white'
    document.querySelector('.blue').style.border = 'none'
    
})
let blue = document.querySelector('.blue').addEventListener('click',function(){
    tg.style.backgroundColor = '#0047AB'
    document.querySelector('.blue').style.border = '1px solid white'
    document.querySelector('.red').style.border = 'none'
})

let targetlife = 1000;

let tgt1 = document.querySelector('.t1').addEventListener('click',function(){
    targetlife = 1000;
    document.querySelector('.t1').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t08').style.backgroundColor = 'transparent'
    document.querySelector('.t05').style.backgroundColor = 'transparent'
})
let tgt08 = document.querySelector('.t08').addEventListener('click',function(){
    targetlife = 800;
    document.querySelector('.t1').style.backgroundColor = 'transparent'
    document.querySelector('.t08').style.backgroundColor = '#cbd5e1'
    document.querySelector('.t05').style.backgroundColor = 'transparent'
})
let tgt05 = document.querySelector('.t05').addEventListener('click',function(){
    targetlife = 500;
    document.querySelector('.t1').style.backgroundColor = 'transparent'
    document.querySelector('.t08').style.backgroundColor = 'transparent'
    document.querySelector('.t05').style.backgroundColor = '#cbd5e1'
})

document.getElementById('close').addEventListener('click',function(){
    document.querySelector('.instructions').style.visibility = 'hidden'
    interval = setInterval(getRandomInt,targetlife)
})

function close_instructions(){

}