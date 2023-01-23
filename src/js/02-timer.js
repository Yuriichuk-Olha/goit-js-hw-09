import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')


btnStart.disabled = true


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
          //  console.log(new Date(inputEl.value));
            Notiflix.Notify.failure("Please choose a date in the future");
            btnStart.disabled = true;
       } else {
        btnStart.disabled = false;
       }
    },   
    
}; 

flatpickr(inputEl, options)
 // startBtn.removeAttribute('disabled', '');
  // startBtn.getAttribute('disabled', '');

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', onDataStart);

function onDataStart(){
  
    timerId = setInterval(() => {
        let startingTimer = new Date(inputEl.value) - new Date()
        btnStart.disabled = true
       if(startingTimer >= 0){
        let endTimer = convertMs(startingTimer);
        daysEl.textContent = addLeadingZero(endTimer.days)
        hoursEl.textContent = addLeadingZero(endTimer.hours)
        minutesEl.textContent = addLeadingZero(endTimer.minutes)
        secondsEl.textContent = addLeadingZero(endTimer.seconds)
       } else {
        clearInterval(timerId);
       }
    }, 1000);

}

function addLeadingZero(value){
   return String(value).padStart(2, '0')
}