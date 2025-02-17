console.log("ready")

///function buttonPressed() {
//console.log('button was pressed')
//}

let home = 0
let away = 0


//scoring buttons and checks
function home1point() {
  console.log('Home score plus one')
  home++
  console.log(home)
  UpdateHomeScore()
  CheckWinner()
}
function home3point() {
  console.log('Home score plus 3')
  home += 3
  console.log(home)
  UpdateHomeScore()
  CheckWinner()
}
function negativePoint() {


}

function away1point() {
  console.log('Away score plus one')
  away++
  console.log(away)
  UpdateAwayScore()
  CheckWinner()
}
function away3point() {
  console.log('away score plus 3')
  away += 3
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
//checks the winner as long as score is >= 10, then sends alert saying who has won and returns the score to 0 to start again
function CheckWinner() {

  if (home >= 10) {
    console.log("Home Wins")
    window.alert("Home has Won!")
    home = 0
    away = 0
    UpdateAwayScore()
    UpdateHomeScore()

  }
  else if (away >= 10) {
    console.log("Away Wins")
    window.alert("Away has Won!")
    home = 0
    away = 0
    UpdateAwayScore()
    UpdateHomeScore()

  }
  else {

  }

}