define(function (require) {

  require('./game');
  var deck = document.getElementById("deck");

  // Card 0
  var play = document.getElementById("play");
  var inst = document.getElementById("inst");

  play.addEventListener("click", function() {
    deck.shuffleTo(1);
  });

  inst.addEventListener("click", function() {
    deck.shuffleTo(2);
  });

  // Card 1
  var playBack = document.getElementById("playBack");
  var pause = document.getElementById("pause");

  playBack.addEventListener("click", function() {
    deck.shuffleTo(0);
  });

  pause.addEventListener("click", function() {
    console.log("pause the game");


  });

  // Card 2
  var instBack = document.getElementById("instBack");

  instBack.addEventListener("click", function() {
    deck.shuffleTo(0);
  });

});
