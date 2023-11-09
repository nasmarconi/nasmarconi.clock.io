const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock,1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDegree = (hour / 12) * 360;
    const minuteDegree = (minute / 60) * 360;
    const secondDegree = (second / 60) * 360;
    hourEl.style.transform = `rotate(${hourDegree}deg)`;
    minuteEl.style.transform = `rotate(${minuteDegree}deg)`;
    secondEl.style.transform = `rotate(${secondDegree}deg)`;
}

updateClock();