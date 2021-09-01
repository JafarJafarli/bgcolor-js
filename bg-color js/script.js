


// function start(){
//  let div = document.getElementsByTagName("div")[0];
//  let randomColor = Math.floor(Math.random()*16777215).toString(16);
//  div.style.backgroundColor = "#"+randomColor;
// }
// setInterval(start,1000);

// function stop(){

// }

// let i = 0;
// function start() {
//  let div = document.getElementsByTagName("div")[0];
//  let color = ["black", "blue", "brown", "green"];
//  div.style.backgroundColor = color[i];
//  i = (i + 1) % color.length;
// }
// setInterval(start,1000);


 let div = document.getElementsByTagName("div")[0];
 function start(){
 function RandomColor(){
 let colors = '0123456789ABCDEF';
 let hash = '#';
 for(let i = 0; i < 6; i++){
  hash += colors[Math.floor(Math.random() * 16)];
 }
 return hash;
 }
 var interval = setInterval(function changeColor(){
 div.style.backgroundColor = RandomColor();
 }, 1000);
 }


 // let interval = setInterval(function(){changeColor()},1000);

// function stop(){
//  clearInterval(interval);
// }




// HOMEWORK

 // let interval = setInterval(function(){color()}, 1000);
 // function color() {
 //  let body = document.body;
 //  body.style.backgroundColor = body.style.backgroundColor == "crimson" ? "grey" : "crimson";
 // }
 // function stop() {
 //  clearInterval(interval);
 // }