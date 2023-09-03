let score = 0;

let tg = document.querySelector('.tg')
let time_rem = document.querySelector('#time')
tg.addEventListener('click',function(){
    tg.style.visibility = "hidden";
    score = score + 1;
})

let time = 45;

let interval = setInterval(getRandomInt,800)


function getRandomInt() {
    tg.style.visibility = "visible";
    time_rem.innerHTML = `Time: ${time}`;
    time--;
    if(time < 0){
        clearInterval(interval)
        time_rem.innerHTML = `Time: ${0}`;
        getscore();
    }
    let x = ( Math.floor(Math.random() * (1000 - 0 + 1)) + 0);
    let y = ( Math.floor(Math.random() * (500 - 0 + 1)) + 0);
    tg.style.top = y + "px";
    tg.style.left = x + "px";
    document.getElementById('score').innerHTML = `Score: ${score}`
}


let red = document.querySelector('.red').addEventListener('click',function(){
    tg.style.backgroundColor = '#D2042D'
})
let blue = document.querySelector('.blue').addEventListener('click',function(){
    tg.style.backgroundColor = '#0047AB'
})



function getscore(){

}