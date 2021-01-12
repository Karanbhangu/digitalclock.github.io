let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let dates = document.getElementById("dates");
let day = document.getElementById("day");
setInterval(()=>{
    let now = new Date();
    let weekday = now.getDay();
    if(weekday == 0){weekday = "Sunday"}
    if(weekday == 1){weekday = "Monday"}
    if(weekday == 2){weekday = "Tuesday"}
    if(weekday == 3){weekday = "Wednesday"}
    if(weekday == 4){weekday = "Thursday"}
    if(weekday == 5){weekday = "Friday"}
    if(weekday == 6){weekday = "Saturday"}
    hour.innerText = `${now.getHours()}`;
    minute.innerText = `${now.getMinutes()}`;
    second.innerText = `${now.getSeconds()}`;
    dates.innerText = `${now.getDate()}` + "/" +`${now.getMonth() + 1}` + "/" + `${now.getFullYear()}`;
    day.innerText = `${weekday}`
})