console.log("ready")

///function buttonPressed() {
//console.log('button was pressed')
//}

let home = 0
let away = 0

function home1point() {
  console.log('Home score plus one')
  home += 1
  console.log(home)
  UpdateHomeScore()
  CheckWinner()
}

function Away1point() {
  console.log('Away score plus one')
  away += 1
  console.log(away)
  UpdateAwayScore()
  CheckWinner()
}

function UpdateHomeScore() {
  const homeScoreElem = document.getElementById('home-score')
  homeScoreElem.innerText = home

}
function UpdateAwayScore() {
  const awayScoreElem = document.getElementById('away-score')
  awayScoreElem.innerText = away

}

function CheckWinner() {
  if (home == 10) {
    console.log("Home Wins")
    window.alert("Home has Won!")

  }
  else if (away == 10) {
    console.log("Away Wins")
    window.alert("Away has Won!")

  }
  else {

  }

}