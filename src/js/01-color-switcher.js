
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

    const body = document.querySelector('body')
    const btnStart = document.querySelector('button[data-start]');
    const btnStop = document.querySelector('button[data-stop]');

    let intervalId = null
    let isActive = false

btnStart.addEventListener("click", showColorClick);
btnStop.addEventListener("click", hideColorClick);

// поясніть чому в мене isActive- зразу працює а потім неможу запустити старт
// чи isActive непотрібно використовувати???
// 

function showColorClick(){
    // if(isActive){
    //     return
    // }
    // isActive = true;

    btnStop.removeAttribute('disabled','');
    btnStart.setAttribute('disabled','');
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
     }, 1000)
     console.log(setInterval);
   }


function hideColorClick(){
    btnStart.removeAttribute('disabled','');
    btnStop.setAttribute('disabled','');
    clearInterval(intervalId);
}


