

var hunger = 100
var energy = 100
var hygiene = 100
var fun = 100

function start (){
  setInterval(function (){
    hunger -= 2
    energy -= 1
    hygiene -= 1
    fun -= 2
    // console.log(hunger)
  }, 2000);
  
}
start()




