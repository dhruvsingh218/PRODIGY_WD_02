let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCount = 1;
let savedTime = 0;

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(getShowTime, 1);
        document.getElementById("startStopBtn").innerHTML = "Stop";
        running = true;
    } else {
        savedTime = difference;
        clearInterval(tInterval);
        document.getElementById("startStopBtn").innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    document.getElementById("startStopBtn").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
}

function lap() {
    if (running) {
        let lapTime = document.createElement("div");
        lapTime.className = "lapTime";
        lapTime.innerHTML = `Lap ${lapCount}: ${document.getElementById("display").innerHTML}`;
        document.getElementById("laps").appendChild(lapTime);
        lapCount++;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("display").style.transform = "scale(1.1)";
    setTimeout(() => {
        document.getElementById("display").style.transform = "scale(1)";
    }, 100);
}
