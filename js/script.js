const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const seconds = document.querySelector('#seconds')
const clock = document.querySelectorAll('#clock>li')

let flag = 1, sec = 0, min = 0, hr = 0, intervalId, i = 74, intervalId2, opacity = 0.5

start.addEventListener('click', () => {
    if (flag % 2) {
        start.children[1].innerText = 'STOP'

        intervalId = setInterval(() => {
            if (sec < 59) {
                sec++
            } else {
                sec = 0
                if (min < 59) {
                    min++
                } else {
                    min = 0
                    hr++
                }
            }
            seconds.innerText = (sec < 10) ? '0' + sec : sec
            minute.innerText = (min < 10) ? '0' + min : min
            hour.innerText = (hr < 10) ? '0' + hr : hr
        }, 1000)

        intervalId2 = setInterval(changeOpacity, 10)

    } else {
        start.children[1].innerText = 'START'
        clearInterval(intervalId)
        clearInterval(intervalId2)
    }
    flag++
})

function changeOpacity() {
    clock[i % clock.length].style.opacity = opacity
    i = (i + 1) % clock.length
    if (i === 74) {
        clearInterval(intervalId2)
        opacity = opacity === 0.5 ? 1 : 0.5
        intervalId2 = setInterval(changeOpacity, 10)
    }
}

reset.addEventListener('click', () => {
    clearInterval(intervalId)
    clearInterval(intervalId2)
    sec = 0
    min = 0
    hr = 0
    seconds.innerText = '00'
    minute.innerText = '00'
    hour.innerText = '00'
    start.children[1].innerText = 'START'
    flag = 1
    i = 74
    opacity = 0.5
    clock.forEach(li => li.style.opacity = 1)
})