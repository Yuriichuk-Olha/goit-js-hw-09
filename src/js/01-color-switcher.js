
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

    const body = document.querySelector('body')
    const btnStart = document.querySelector('button[data-start]');
    const btnStop = document.querySelector('button[data-stop]');

    let intervalId = null

btnStart.addEventListener("click", showColorClick);
btnStop.addEventListener("click", hideColorClick);


function showColorClick(){
    btnStop.classList.remove('disabled');
    btnStart.classList.add('disabled');
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
     }, 1000)
     console.log(setInterval);
   }


function hideColorClick(){
    btnStart.classList.remove('disabled');
    btnStop.classList.add('disabled');
    clearInterval(intervalId);
}


