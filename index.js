let newDate = new Date()
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// If you want to see the time in 12-hour format(e.g. 10:30:40 AM) then change the hour12 option in timeOptions to true.
const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
let date = newDate.toLocaleDateString(undefined, dateOptions);
let time = newDate.toLocaleTimeString(undefined, timeOptions)

showTime.innerText = time
showDate.innerText = date

setInterval(() => {
    newDate = new Date()
    date = newDate.toLocaleDateString(undefined, dateOptions);
    time = newDate.toLocaleTimeString(undefined, timeOptions)
    showTime.innerText = time
    showDate.innerText = date
}, 1000)