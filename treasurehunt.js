//alert("I am connected")
//const treasure = (location) => {
  //  return alert(location)
    //}
//const treasure = (heart) => {
    // if(heart === 0){
    //     document.getElementById(0).innerHTML = "🥇" 
    // }
    // if(heart === 1){
    //     document.getElementById(1).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 2){
    //     document.getElementById(2).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 3){
    //     document.getElementById(3).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 4){
    //     document.getElementById(4).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 5){
    //     document.getElementById(5).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 6){
    //     document.getElementById(6).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 7){
    //     document.getElementById(7).innerHTML = "🏴‍☠️" 
    // }
    // if(heart === 8){
    //     document.getElementById(8).innerHTML = "💣" 
    // }
// }
var treasureNumber = Math.floor(Math.random()*9)
var bombNumber = Math.floor(Math.random()*9)
const treasure = (square) => {
    if(square === treasureNumber){
       document.getElementById(square).innerHTML = "🥇"
    } else if(square === bombNumber){
        document.getElementById(square).innerHTML = "💣"
    } else {
        document.getElementById(square).innerHTML = "🏴‍☠️" 
} 
}