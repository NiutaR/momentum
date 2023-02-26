const time = document.querySelector('.time');
const dateTag = document.querySelector('.date');

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
    setTimeout(showTime, 1000);

}
showTime();

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function showDate() {
    dateTag.innerHTML = currentDate;

}
showDate();