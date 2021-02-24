let propertiesTime = [
    'v-date',
    'v-day',
    'v-month',
    'v-year'
]
let days= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let month= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
] 
let Time = [
    new Date().getDate(),
    days[new Date().getDay()],
    month[new Date().getMonth()],
    new Date().getUTCFullYear()
]
for (var i = 0; i <= propertiesTime.length; i++) {
    if (document.querySelector(`.${propertiesTime[i]}`)) {
        for(var z = 0; z < document.querySelectorAll(`.${propertiesTime[i]}`).length; z++) {
            document.querySelectorAll(`.${propertiesTime[i]}`)[z].innerHTML = Time[i]
        }
    }
}