
var tam1 = new Tamagotchi()

tam1.start()

$(document).ready(function() {

  $("#food" ).click(function() {
    if (tam1.hunger + 5 >= 100) {
    tam1.hunger = 100;
    } else {
      tam1.hunger += 5;
    }
    document.getElementById("hunger").innerHTML = tam1.hunger + "%"
  });

  $("#sleep" ).click(function() {
    if (tam1.energy + 5 >= 100) {
    tam1.energy = 100;
    } else {
      tam1.energy += 5;
    }
    document.getElementById("energy").innerHTML = tam1.energy + "%"
  });

  $("#wash" ).click(function() {
    if (tam1.hygiene + 30 >= 100) {
    tam1.hygiene = 100;
    } else {
      tam1.hygiene += 30;
    }
    document.getElementById("hygiene").innerHTML = tam1.hygiene + "%"
  });

  $("#play" ).click(function() {
    if (tam1.fun + 5 >= 100) {
    tam1.fun = 100;
    } else {
      tam1.fun += 5;
    }
    document.getElementById("fun").innerHTML = tam1.fun + "%"
  });

  });

