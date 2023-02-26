const time = document.querySelector('.time');
const dateTag = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

//get time
const date = new Date();
//const currentTime = date.toLocaleTimeString();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};
const currentDate = date.toLocaleDateString('en-US', options);
console.log(currentDate);
const showAmPM = true;

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;


    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPM ? amPM : ''}`;
    showDate();
    setTimeout(showTime, 1000);

}
showTime();

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function showDate() {
    dateTag.innerHTML = currentDate;

}

function getTimeOfDay() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon';
    } else {
        greeting.textContent = 'Good Evening';
    }
}
const timeOfDay = getTimeOfDay();
const greetingText = `${timeOfDay}`;
function getName() {
    if(localStorage.get)
}
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

