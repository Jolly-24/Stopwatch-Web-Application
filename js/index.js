let [seconds, minutes, hours] = [0, 0, 0];
let getHours = document.getElementById("time-hours");
let getMins = document.getElementById("time-min");
let getsecs = document.getElementById("time-sec");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let lap = document.getElementById("lap");
let lapsContainer = document.getElementById("laps");
var lapNumber=1;
let interval;
let isPaused = true;  // Track whether the timer is paused or running

// Start or Resume Timer
start.addEventListener('click', () => {
    if (isPaused) {
        interval = setInterval(startTimer, 1000);  // Start or resume the timer with 1-second interval
        isPaused = false;  // Timer is now running
    }
});

// Pause the Timer on Stop Button Click
stop.addEventListener('click', () => {
    if (!isPaused) {
        // Pause the timer
        clearInterval(interval);  // Stop the timer  
        isPaused = true;
    }
});

// Reset Timer
reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    [seconds, minutes, hours] = [0, 0, 0];
    getsecs.innerHTML = '00';
    getHours.innerHTML = '00';
    getMins.innerHTML = '00'; 
    stop.innerHTML = "Pause";  // Change button back to "Pause"
    isPaused = true;  // Timer is reset and paused
    lapsContainer.innerHTML = '';  // Clear all the laps
    lapNumber = 1;
});
// save laps
lap.addEventListener('click', () => {
   lapsContainer.innerHTML += `
   <div class="lapBox d-flex align-items-center justify-content-center gap-5 py-1 px-4 rounded-1">
                    <h3 class="text-decoration-underline">Lap ${lapNumber++}</h3>
                    <div class="timer d-flex align-items-center justify-content-center gap-2 fw-semibold fs-4">
                        <div class="time-box ">
                            <span class="time-hours " id="time-hours">${'0' + hours}</span>
                        </div>
                        :
                        <div class="time-box ">
                            <span class="time-min" id="time-min">${'0' + minutes}</span>
                        </div>
                        :
                        <div class="time-box ">
                            <span class="time-sec" id="time-sec">${'0' + seconds}</span>
                        </div>
                    </div>
                </div>
   `
});


// Timer Logic
function startTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    
    // Update Display
    getsecs.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    getMins.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    getHours.innerHTML = hours < 10 ? '0' + hours : hours;
}
