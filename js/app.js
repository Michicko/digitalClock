const time = document.querySelector('#time');

function getTime() {
    let today = new Date(),
        hours = today.getHours(),
        mins = today.getMinutes(),
        secs = today.getSeconds();

    let amPm = hours >= 12 ? 'PM' : 'AM';

    // 12 hours 
    hours = hours % 12 || 12;

    time.innerHTML = `${hours}<span>:</span>${addZero(mins)}<span>:</span>${addZero(secs)} <span>${amPm}</span>`;

    setTimeout(getTime, 1000);
}

getTime();

// add zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}