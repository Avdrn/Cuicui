
var tam1 = new Tamagotchi()
var birdSound = new sound("Sounds/338277__andreas-mustola__bird4.wav");
var sleepSound = new sound("Sounds/446581__nicolas4677__snoring.wav");
var foodSound = new sound("Sounds/429593__inspectorj__chewing-breadstick-single-b.wav")
var waterSound = new sound("Sounds/371274__mafon2__water-click.wav")
var pooSound = new sound("Sounds/237662__delphidebrain__delphis-fart-11.wav")
var owlSound = new sound("Sounds/384186__claytron3000__desert-owl.mp3")
var transformationSound = new sound("Sounds/240944__soundfreakthony__laser-on-off-kawabunga.wav")
var cuicuiSound = new sound("Sounds/85403__readeonly__canaryartie-3.wav")


// --------PLAY -------------//



//----------------------//

$(document).ready(function() {

  $("#game").hide()

$("#starting-btn").click(function() {
  $("#game").show()
  $("#open-cover").hide()
})



  $("#food" ).click(function() {
    if (tam1.hunger + 5 >= 100){
      tam1.hunger = 100  
      tam1.poo();   
  }
     else {
     tam1.hunger += 5
    }
    
    document.getElementById("hunger").innerHTML = tam1.hunger + "%"
    foodSound.play();
    
  });

  $("#sleep" ).click(function() {
    if (tam1.energy + 5 >= 100) {
      tam1.energy = 100;
    } else {
      tam1.energy += 5;
    }
    document.getElementById("energy").innerHTML = tam1.energy + "%"
    sleepSound.play();
  });

  $("#wash" ).click(function() {
    if (tam1.hygiene + 30 >= 100) {
    $("#poo1-hide, #poo2-hide, #poo3-hide, #poo4-hide, #poo5-hide").hide()
    tam1.counterPoo = 0
    tam1.hygiene = 100;
    } else {
      tam1.hygiene += 30;
    }
    document.getElementById("hygiene").innerHTML = tam1.hygiene + "%"
    waterSound.play();
  });

  $("#play" ).click(function() {
    if (tam1.fun + 5 >= 100) {
    tam1.energy -=5;
    tam1.fun = 100;
    } else {
      tam1.fun += 5;
      tam1.energy -=5;
    }
    document.getElementById("fun").innerHTML = tam1.fun + "%"
    birdSound.play();
  });

    $("#startPause").click(function() {
      $("#pet").toggleClass("animate")

      if ($("#startPause").hasClass("active")){
      $("#startPause").attr("src", "Img/pause.svg")
      $("#startPause").removeClass("active")
      tam1.start()
      
      
    } else {
      $("#startPause").attr("src", "Img/play.svg")
      $("#startPause").addClass("active")
      tam1.stop()
    
    }
    
      
      $("#poo1-hide, #poo2-hide, #poo3-hide, #poo4-hide, #poo5-hide").hide()
      $(".explosion").hide()


     
      })

   

  });



