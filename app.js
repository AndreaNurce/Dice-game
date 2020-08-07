 let winnerOnePoints = 0;
 let winnerTwoPoints = 0;
 let x = true;
 let y = true;
let scores, turn, player, disable;
intro();
//roll the dice
//chech if the dice is not 1
//collect the points
document.querySelector('.btn-roll').addEventListener('click', function() {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  let random = random1 + random2;
  if (disable) {
  document.querySelector('.dice').src = 'dice-' + random1 + '.png';
  document.querySelector('.dice2').src = 'dice-' + random2 + '.png';
  document.querySelector('.dice').style.display= 'block';
  document.querySelector('.dice2').style.display= 'block';


    if (random1 !== 1 && random2 !== 1) {
      document.querySelector('#current-' + turn).textContent = scores += random;
    }  else {
      nextPlayer();
    }
    if (random1 === 6 && random2 === 6) {
      document.querySelector('#score-' + turn).textContent = 0;
      document.querySelector('#current-' + turn).textContent =0;
        player[turn] = 0;
      nextPlayer();
    }
  }
});
// hold the scores and give the turn to the other player
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (disable) {

    player[turn] += scores;
    document.querySelector('#score-' + turn).textContent = player[turn];
    if (player[turn] >= 100) {
      document.querySelector('#current-' + turn).textContent = 0;
      document.querySelector('#name-' + turn).innerHTML = 'WINNER';
      document.querySelector('.dice').style.display= 'none';
      document.querySelector('.dice2').style.display= 'none';
      disable = false;
      if (player[0] >= 100) {
        winnerOnePoints++;
        document.querySelector('#woner2').textContent = winnerOnePoints;
      }else{
        winnerTwoPoints++;
        document.querySelector('#woner1').textContent = winnerTwoPoints;
      }
    } else {
      nextPlayer();
    }
  }
});
//New game
document.querySelector('.btn-new').addEventListener('click', function () {
  intro();
});
document.querySelector('.reset').addEventListener('click', function(){
  document.location.reload();
});
document.querySelector('.i').addEventListener('click', function() {

  if (y) {
    setTimeout(function(){
       fadeIn();
    }, 400);
    information();
    y= false;

  }else{
    fadeOut();
    setTimeout( function(){
      y = true;
      information();
    }, 100);
  }

});
function fadeIn() {
  document.querySelector('.text').style.display = 'block';
}
function fadeOut() {
  document.querySelector('.text').style.display = 'none';
}
function information() {
  if (x) {
    document.querySelector('.square').style.transform = "rotate(0deg)";
    document.querySelector('.square').style.transitionDuration = "0.3s";
    document.querySelector('.i').style.marginLeft = '445px';
    document.querySelector('.i').style.transitionDuration = "0.3s";
    x = false;
  }else {
    document.querySelector('.square').style.transform = "rotate(90deg)";
    document.querySelector('.square').style.transitionDuration = "0.3s";
    document.querySelector('.i').style.marginLeft = '0px';
    document.querySelector('.i').style.transitionDuration = "0.3s";
    x = true;

  }
}
//change the turn
function nextPlayer() {
  scores = 0;
  document.querySelector('#current-' + turn).textContent = 0;
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
};
//set the variables value
function intro() {
  scores = 0;
  turn = 0;
  player = [0, 0];
  disable = true;

  document.getElementById('score-0').innerHTML =0;
  document.getElementById('score-1').innerHTML =0;
  document.getElementById('name-0').innerHTML = 'Player 1';
  document.getElementById('name-1').innerHTML = 'Player 2';
  document.getElementById('current-0').innerHTML =0;
  document.getElementById('current-1').innerHTML =0;
  document.querySelector('.dice').style.display= 'none';
  document.querySelector('.dice2').style.display= 'none';

  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');



}
