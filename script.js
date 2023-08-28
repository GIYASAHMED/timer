let h = document.querySelector('#hour')
let m = document.querySelector('#min')
let s = document.querySelector('#sec')

let start = document.querySelector('#start')

let hour = 0
let min = 0
let sec = 0

function timer() {
    sec++
    if (sec == 60) {
        sec = 0
        min++
    } if (min == 60) {
        min = 0
        hour++
    }

    let hh = hour < 10 ? '0' + hour : hour
    let mm = min < 10 ? '0' + min : min
    let ss = sec < 10 ? '0' + sec : sec

    h.innerHTML = hh
    m.innerHTML = mm
    s.innerHTML = ss

    // if (min == 10) {
    //     stopTime()
    // }

}



let int

let ontime = 0

start.addEventListener('click', function () {
    if (ontime == 0) {
        int = setInterval(timer, 1000)
        start.style.background = "green"
        ontime = 1
    }
})

document.querySelector('#end').addEventListener('click', function () {
    if (ontime == 1) {
        clearInterval(int)
        ontime = 0
    }
    
})

document.querySelector('#reset').addEventListener('click', function () {
    location.reload()
        
})

