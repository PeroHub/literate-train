// const clock = document.querySelector('.hours')
// clock.textContent
// console.log(clock)



const clock = () => {
const dates = new Date()
let hours = dates.getHours()
let min = dates.getMinutes()
let second = dates.getSeconds()

// console.log(hours)
// console.log(min)
// console.log(second)
// console.log(milisecond)


document.getElementById('hours').innerHTML =  hours;
document.getElementById('minute').innerHTML = ":" + min;
document.getElementById('second').innerHTML = ":" + second;

}

setInterval(clock, 100)
