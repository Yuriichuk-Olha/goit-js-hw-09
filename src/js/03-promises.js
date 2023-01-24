import Notiflix from 'notiflix';


const firstDelay = document.querySelector('input[name="delay"]')
const stepDelay = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const btn = document.querySelector('button[type="submit"]')


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
    },delay)
  })
}

btn.addEventListener('click', event => {
  event.preventDefault()
    let first = firstDelay.value;
    //console.log(first);
    let step = stepDelay.value;
   // console.log(step);
    for(let i = 0; i< amount.value; i++){
        createPromise(i + 1, first)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  first += step;

    }

  });
