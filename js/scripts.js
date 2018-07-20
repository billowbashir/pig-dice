//business
var rollDice=function(){
return  Math.floor((Math.random() * 6) + 1);
}
//user interface
$(document).ready(function(){
$("form#opponent").submit(function(){
  event.preventDefault();
  if (document.getElementById("player2").checked) {
    $(".game").fadeIn();
    $(".opponent").hide();
  }else {
    alert("computer is not available")
  }
})
  $(".rolldice").submit(function(){
    event.preventDefault();
    rollDice();
$(".total").text(rollDice());
  })
});
