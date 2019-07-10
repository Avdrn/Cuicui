
var tam1 = new Tamagotchi()
var mySound = new sound("Sounds/338277__andreas-mustola__bird4.wav");

tam1.start()
$("#poo1-hide, #poo2-hide, #poo3-hide, #poo4-hide, #poo5-hide").hide()

$(document).ready(function() {
  $("#food" ).click(function() {
    if (tam1.hunger += 5 >= 100){
      tam1.hunger = 100  
    tam1.poo()
  }
     else {
     tam1.hunger += 5
    }
    
    document.getElementById("hunger").innerHTML = tam1.hunger + "%"
    mySound.play();
    
  });

  $("#sleep" ).click(function() {
    if (tam1.energy + 5 >= 100) {
      tam1.energy = 100;
    } else {
      tam1.energy += 5;
    }
    document.getElementById("energy").innerHTML = tam1.energy + "%"
    mySound.play();
  });

  $("#wash" ).click(function() {
    if (tam1.hygiene + 30 >= 100) {
    tam1.hygiene = 100;
    } else {
      tam1.hygiene += 30;
    }
    document.getElementById("hygiene").innerHTML = tam1.hygiene + "%"
    mySound.play();
  });

  $("#play" ).click(function() {
    if (tam1.fun + 5 >= 100) {
    
    tam1.fun = 100;
    } else {
      tam1.fun += 5;
    }
    document.getElementById("fun").innerHTML = tam1.fun + "%"
    mySound.play();
  });

  });



