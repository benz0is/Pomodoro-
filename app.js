const pointup1 = document.getElementById('pointup1');
const pointup2 = document.getElementById('pointup2');
const pointdown1 = document.getElementById('pointdown1');
const pointdown2 = document.getElementById('pointdown2');
const sessiontimer = document.getElementById('session-time');
const maintimer = document.getElementById("main-timer");
const breaktime = document.getElementById("break-time");
const refresh = document.getElementById("refresh");
const play = document.getElementById("play");
const pause =document.getElementById('pause');
const stop = document.getElementById('stop');
breaktime.innerHTML = 5;
maintimer.innerHTML = 25 +":00";
sessiontimer.innerHTML = 25;



function main(){
    pointup1.addEventListener("click", function(){
        if (sessiontimer.innerHTML > 59) return;
        const value = parseInt(sessiontimer.innerHTML,10) + 1;
        const valid = parseInt(maintimer.innerHTML,10) + 1 + ":00";
        document.getElementById('session-time').innerHTML = value;
        document.getElementById("main-timer").innerHTML = valid;
}) 
    pointdown1.addEventListener("click", function(){
        if (sessiontimer.innerHTML <=1) return;
        const value = parseInt(sessiontimer.innerHTML,10) - 1;
        document.getElementById('session-time').innerHTML = value;
        const valid = parseInt(maintimer.innerHTML,10) - 1 + ":00";
        document.getElementById("main-timer").innerHTML = valid;
    })
    pointup2.addEventListener("click", function(){
        if(breaktime.innerHTML >59) return;
            const value = parseInt(breaktime.innerHTML,10) +1;
            breaktime.innerHTML = value;
    })
    pointdown2.addEventListener("click", function(){
        if(breaktime.innerHTML <=1) return;
            const value = parseInt(breaktime.innerHTML,10) -1;
            breaktime.innerHTML = value;
    })



    play.addEventListener('click', function(){
        maintimer.innerHTML=sessiontimer.innerHTML;
        var countdown = setInterval(start,1000)
        var time = maintimer.innerHTML * 60;
        refresh.addEventListener('click', function(){
            breaktime.innerHTML = 5;
            maintimer.innerHTML = 25 +":00";
            sessiontimer.innerHTML= 25;
            clearInterval(countdown)
        
        })
        var pausedtime 
        pause.addEventListener('click', function(){
            clearTimeout(countdown)
            pausedtime = maintimer.innerHTML
            
            
        })
        function start() {
            if (!(isNaN(pausedtime))){
                time = pausedtime
            }
            var minutes = Math.floor(time/60);
            var seconds = time % 60;
            maintimer.innerHTML = `${minutes}:${seconds}`;
            time--;

        }

    })
}

main();
