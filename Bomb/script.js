let defuser = document.getElementById('defuser');
let timer = document.getElementById('timer');

let time = 15;
let intervalId = setInterval(function() {
    time = time - 1;
    timer.textContent = time;
    if (time === 0) {
        timer.textContent = 'BOOOOM';
        clearInterval(intervalId);
    }
}, 1000);

defuser.addEventListener('keydown', function(event) {
    let defuseKey = defuser.value;
    console.log(defuseKey);
    if (event.key === 'Enter' && defuseKey === 'defuse' && time !== 0) {
        timer.textContent = 'OH GOD, You saved us';
        clearInterval(intervalId);
    }
})