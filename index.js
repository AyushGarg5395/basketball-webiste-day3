let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let resultHome = 0
let resultGuest = 0

function addHome1() {
    resultHome += 1
    homeScore.textContent = resultHome 
}

function addHome2() {
    resultHome += 2
    homeScore.textContent = resultHome 
}

function addHome3() {
    resultHome += 3
    homeScore.textContent = resultHome 
}

function addGuest1() {
    resultGuest += 1
    guestScore.textContent = resultGuest 
}

function addGuest2() {
    resultGuest += 2
    guestScore.textContent = resultGuest
}

function addGuest3() {
    resultGuest += 3
    guestScore.textContent = resultGuest 
}