let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScoreBtn1 = document.getElementById ("home-score-btn1")
let homeScore = 0
let guestScore = 0

function start() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}
function AddHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}


function AddHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function AddHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function AddGuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function AddGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function AddGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
