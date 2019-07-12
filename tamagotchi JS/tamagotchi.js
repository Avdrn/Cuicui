
class Tamagotchi {
  constructor() {
  this.hunger = 100
  this.energy = 100
  this.hygiene = 100
  this.fun = 100
  this.points = 0
  this.counterPoo = 0
  }

 start (){
  this.Tamagotchiinterval = setInterval(()=>{
     this.reduce()
     this.show()
     this.changeWidth()
     this.colorHunger()
     this.colorEnergy()
     this.colorHygiene()
     this.colorFun()
     this.changeImg()
    this.checkStatus()
    this.changeImg()
     this.increasePoints()
    
  }, 1000)};

  // decrease the bars %
    reduce (){
      this.hunger -= 2
      this.energy -= 1
      this.hygiene -= 1
      this.fun -= 2
      }

    // Show %
    show(){
      document.getElementById("hunger").innerHTML = this.hunger + "%"
      document.getElementById("energy").innerHTML = this.energy + "%"
      document.getElementById("hygiene").innerHTML = this.hygiene + "%"
      document.getElementById("fun").innerHTML = this.fun + "%"
      document.getElementById("points").innerHTML = this.points + "pts"

      } 

     // change the width of the bars
    changeWidth() {
      $("#hunger").css("width", `${this.hunger}%`)
      $("#energy").css("width", `${this.energy}%`)
      $("#hygiene").css("width", `${this.hygiene}%`)
      $("#fun").css("width", `${this.fun}%`)
      }

  // GAME OVER

     checkStatus (){
      if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0){
       clearInterval(this.Tamagotchiinterval);
       let mySound = new sound("Sounds/76376__deleted-user-877451__game-over.wav");
       mySound.play()
       $("#startPause").attr("src", "Img/arrows.png")
       $("#startPause").addClass("restart")
       }
     }
    
    // colors
    /* hunger */
    colorHunger (){
      if (this.hunger <= 20){
        $("#hunger").css("background-color", "#ff0000");
      } else if (this.hunger <= 60) {
       $("#hunger").css("background-color", "#f1a165")
      } else {
      $("#hunger").css("background-color", "rgb(43,194,83")
        }
    }
 
 
  /* energy */
    colorEnergy() {
      if (this.energy <= 20){
        $("#energy").css("background-color", "#ff0000")
     } else if (this.energy <= 60) {
        $("#energy").css("background-color", "#f1a165")
      } else {
      $("#energy").css("background-color", "rgb(43,194,83)")
      } 
    }

  /* hygiene */
  colorHygiene(){
    if (this.hygiene <= 20){
      $("#hygiene").css("background-color", "#ff0000")
    } else if (this.hygiene <= 60) {
      $("#hygiene").css("background-color", "#f1a165")
    } else {
    $("#hygiene").css("background-color", "rgb(43,194,83")
    }
  }
   /* fun */
   colorFun(){
    if (this.fun <= 20){
      $("#fun").css("background-color", "#ff0000");
    } else if (this.fun <= 60) {
      $("#fun").css("background-color", "#f1a165")
    } else {
    $("#fun").css("background-color", "rgb(43,194,83")
      }
  }

   /* points*/
   increasePoints() {
    if (this.hunger >= 60 && this.energy >= 60 && this.hygiene >= 60 && this.fun >= 60) {
      this.points += 1
    }
  }
   
  // change img
 changeImg(){

  if (this.points > 200){
    this.owlTransform()
  } else if (this.points == 200)  { 
    this.transitionExplosion()
    owlSound.play()
  } else if (this.points < 200 && this.points > 100) {
    this.birdTransform()
  } else if (this.points == 100)  { 
    this.transitionExplosion()
    cuicuiSound.play()
  } else if (this.points < 100) {
        this.CuicuiTransform()
      };
  }

// EVOLUTIONS

  birdTransform(){
    if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0) {
    $ ("#pet").attr("src", "Img/game-over.png")
  } else if (this.hunger <= 20 || this.energy <= 20 || this.hygiene <= 20 || this.fun <= 20) {
    $ ("#pet").attr("src", "Img/birdDisapear.png")
  } else if (this.hunger <= 60 || this.energy <= 60 || this.hygiene <= 60 || this.fun <= 60){
  $ ("#pet").attr("src", "Img/birdFading.png")
  } else {
  $ ("#pet").attr("src", "Img/bird.png")
  }}
  
  owlTransform(){  
  if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0) {
    $ ("#pet").attr("src", "Img/game-over.png")
  }
  else if (this.hunger <= 20 || this.energy <= 20 || this.hygiene <= 20 || this.fun <= 20) {
    $ ("#pet").attr("src", "Img/owlDisapear.png")
  }
  else if (this.hunger <= 60 || this.energy <= 60 || this.hygiene <= 60 || this.fun <= 60){
  $ ("#pet").attr("src", "Img/owlFading.png")
  } else {
    $ ("#pet").attr("src", "Img/owl.png")
  }}

  CuicuiTransform(){  
    if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0) {
      $ ("#pet").attr("src", "Img/game-over.png")
    }
    else if (this.hunger <= 20 || this.energy <= 20 || this.hygiene <= 20 || this.fun <= 20) {
      $ ("#pet").attr("src", "Img/CuicuiDisapear.svg")
    }
    else if (this.hunger <= 60 || this.energy <= 60 || this.hygiene <= 60 || this.fun <= 60){
    $ ("#pet").attr("src", "Img/Cuicuifading.svg")
    } else {
      $ ("#pet").attr("src", "Img/Cuicui.svg")
    }}

    transitionExplosion(){
      $ ("#pet").attr("src", "Img/explosion.png")
      $ ("#pet").addClass("explosion")
      $ ("#pet").removeClass("implosion-trans")
      $ ("#pet").removeClass("implosion")
      transformationSound.play()
      $ ("#pet").addClass("explosion-trans")

      $ ("#pet.explosion-trans").one("transitionend", function() {
        $ ("#pet").addClass("implosion")
        $ ("#pet").addClass("implosion-trans")
        $ ("#pet").removeClass("explosion")
        $ ("#pet").removeClass("explosion-trans")

      })}

      // POO

  poo (){
    if(this.counterPoo == 5 && this.hunger == 100){
      this.counterPoo++;
      $("#poo5-hide").show()
      pooSound.play()
      this.hygiene -= 10
    } else if (this.counterPoo == 4 && this.hunger == 100){
      this.counterPoo++;
      $("#poo4-hide").show()
      pooSound.play()
      this.hygiene -= 10
    } else if(this.counterPoo == 3 && this.hunger == 100){
      this.counterPoo++;
      $("#poo3-hide").show()
      pooSound.play()
      this.hygiene -= 10
    } else if(this.counterPoo == 2 && this.hunger == 100){
      this.counterPoo++;
      $("#poo2-hide").show()
      pooSound.play()
      this.hygiene -= 10
    } else if (this.hunger == 100) {
      this.counterPoo++;
      $("#poo1-hide").show()
      pooSound.play()
      this.hygiene -= 10
      }
}

 stop () {
  clearInterval(this.Tamagotchiinterval);
 }
     }

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}













