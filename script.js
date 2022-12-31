let playerScore = 0;
let computerScore = 0;

const playerNumber = document.getElementById("playerNumber");
const computerNumber = document.getElementById("computerNumber");
const outcome = document.getElementById("outcome");


function computerPlay() {

  let a = ['Batu', 'Kertas', 'Gunting']

  return a[Math.floor(Math.random() * a.length)]

}

function toCapitalize(word) {

  let lower = word.toLowerCase();
  let first = lower.charAt(0).toUpperCase();
  let remaining = lower.slice(1)
  return first + remaining

};

function play(id) {

  playRound(id, computerPlay())

};

function playRound(playerselection, computerSelection) {

  let p = toCapitalize(playerselection)
  let c = toCapitalize(computerSelection)


  if (p === 'Kertas' &&
    c === 'Batu') {
    outcome.textContent = 'Menang! Kertas Menang.'
    playerNumber.textContent = playerScore += 1

  } else if (p === 'Batu' &&
    c === 'Gunting') {

    outcome.textContent = 'Menang! Batu Menang.'
    playerNumber.textContent = playerScore += 1

  } else if (p === 'Gunting' &&
    c === 'Kertas') {

    outcome.textContent = 'Menang! Gunting Menang.'
    playerNumber.textContent = playerScore += 1

  } else if (p === c) {

    outcome.textContent = 'Seri!!.'

  } else {

    outcome.textContent = `Kalah! ${c} kalahkan ${p}.
    `;
    computerNumber.textContent = computerScore += 1
  }
  
}
