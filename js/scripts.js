//business
function Player(name) {
  this.roll = 0;
  this.currentScore = 0;
  this.totalScore = 0;
  this.playerName = name;
}
var player1
var player2
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}
//user interface
$(document).ready(function() {
  $("form#opponent").submit(function() {
    event.preventDefault();
    if (document.getElementById("player").checked) {
      $(".game").fadeIn();
      $(".opponent").hide();
    } else {
      alert("computer is not available")
    }
  })
  $(".player1rolldice").submit(function() {
    event.preventDefault();
    rollDice();
    $(".player1total").text(rollDice());
  })
  $(".player2rolldice").submit(function() {
    event.preventDefault();
    rollDice();
    $(".player2total").text(rollDice());
  })
  $("form.fillName").submit(function(event) {
    event.preventDefault();
    var inputtedPlayer1Name = $("#inputtedPlayer1Name").val();
    var inputtedPlayer2Name = $("#inputtedPlayer2Name").val();
    player1 = new Player(inputtedPlayer1Name)
    player2 = new Player(inputtedPlayer2Name)
    $("#player1name").text(inputtedPlayer1Name);
    $("#player2name").text(inputtedPlayer2Name);
  })
});
