var time = 0;
var interval

const otp = document.querySelector('#output')
otp.innerHTML = time;

var start = document.querySelector("#start") 
start.addEventListener('click', ()=> {
   //  console.log("clicked start button");
interval=  setInterval(function () 
{
    time = time +1 
    otp.innerHTML = time 
}, 1000);

    
})

var stop = document.querySelector("#stop")
stop.addEventListener('click', ()=> {
    console.log("Clicked stop button");
   clearInterval(interval);
})

const output = document.querySelector('#output')
output.innerHTML = time;
// function start(){
//     time = time + 1;

// }