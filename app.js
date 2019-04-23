let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  // in case there are timers already set
  clearInterval(countdown);
  const now = Date.now(); // is going to be in milliseconds
  const then = now + seconds * 1000 // we * by 1000 because milliseconds needs to be converted into seconds

  displayTimeLeft(seconds);

  // only needs to be run ones
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    // check if we should stop it!
    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const displayTime = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = displayTime;
  timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp)
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour -12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0': ''}${minutes} `;
}

function startTimer(){
  const seconds = parseInt(this.dataset.time); //must turn into real number with a parseInt
  timer(seconds);

}


buttons.forEach( button => button.addEventListener('click', startTimer));