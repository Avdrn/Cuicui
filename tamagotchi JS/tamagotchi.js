
class Tamagotchi {
  constructor() {
  this.hunger = 100
  this.energy = 100
  this.hygiene = 100
  this.fun = 100
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
      } 

     // change the width of the bars
    changeWidth() {
      $("#hunger").css("width", `${this.hunger}%`)
      $("#energy").css("width", `${this.energy}%`)
      $("#hygiene").css("width", `${this.hygiene}%`)
      $("#fun").css("width", `${this.fun}%`)
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
    
     checkStatus (){
      if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0){
       clearInterval(this.Tamagotchiinterval);
       let mySound = new sound("Sounds/76376__deleted-user-877451__game-over.wav");
       mySound.play()
       }
     }
  /* energy */
    colorEnergy() {
      if (this.energy <= 20){
        $("#energy").css("background-color", "#ff0000")
     } else if (this.energy <= 60) {
        $("#energy").css("background-color", "#f1a165")
      } else {
      $("#energy").css("background-color", "rgb(43,194,83")
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
   
  // change img
  changeImg(){
  if (this.hunger <= 0 || this.energy <= 0 || this.hygiene <= 0 || this.fun <= 0) {
    $ ("#pet").attr("src", "Img/game-over.png")
  }
  else if (this.hunger <= 20 || this.energy <= 20 || this.hygiene <= 20 || this.fun <= 20) {
    $ ("#pet").attr("src", "Img/birdDisapear.png")
  }
  else if (this.hunger <= 60 || this.energy <= 60 || this.hygiene <= 60 || this.fun <= 60){
  $ ("#pet").attr("src", "Img/birdFading.png")
  }
  else {
  $ ("#pet").attr("src", "Img/bird.png")
  }
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











