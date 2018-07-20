var rollDice=function(){
return  Math.floor((Math.random() * 6) + 1);
}
$(document).ready(function(){
  $(".rolldice").submit(function(event){
    event.preventDefault();
    rollDice();
$(".total").text(rollDice());
  })
})
