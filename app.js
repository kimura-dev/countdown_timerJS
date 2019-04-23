let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds){
  const now = Date.now(); // is going to be in milliseconds
  const then = now + seconds * 1000 // we * by 1000 because milliseconds needs to be converted into seconds
  displayTimeLeft(seconds);

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