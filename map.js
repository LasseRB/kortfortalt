import volcano from "./img/islands/volcano.png";
import assets from "./img/islands/*.png";
// import path from 'path'
// import fs from 'fs'
// const fs = require("fs")

// //joining path of directory 
// const directoryPath = path.join(__dirname, '/img/islands');
// //passsing directoryPath and callback function

let islands = [];
for(var key in assets){
    islands.push(assets[key]);}

const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 800;



let map =[];
for(let i = 0; i < islands.length; i++){
    let island ={
        type:"island",
        x:getRandomInt(canvas.width) * i  % (3 * canvas.width),
        y:getRandomInt(canvas.height) * i % (3 * canvas.height),
        xx:null,
        yy:null,
        width:null,
        heigth:null,
        img: new Image(),
        imgsrc: islands[i]
        }
        //! set fields that can be set in the object
    island.img.src = island.imgsrc;
    island.width = island.img.naturalWidth;
    island.height = island.img.naturalHeight;
 map.push(island);
}

let square ={
    type:"square",
        x:0,
        y:0,
        xx:null,
        yy:null,
        width:100,
        heigth:100
}
map.push(square);
function drawSquare(){
    // ctx.clearRect(0,canvas.width, 0, canvas.height)
    ctx.strokeStyle = 'rgba(10, 100, 190, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath(); 
    for(let i = square.y+0.5; i <= canvas.height; i += 60){
         
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);
        ctx.stroke();
    }
    for(let i = square.x; i <= 2*canvas.width; i += 60){
   
        ctx.moveTo(i*0.7,0);
        ctx.lineTo(i,canvas.width);
        ctx.stroke();
        
    }

    
}

console.log(square.x)


let isMouseDown = false;
let mouseX;
let mouseY;

// let island = {x: 0, y: 0}; 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
canvas.addEventListener("mousedown", beginMove);
canvas.addEventListener("mouseup", endMove);
document.addEventListener("keydown", beginMove);
document.addEventListener("keyup", endMove);
function beginMove(e){
    console.log(e.keyCode);
    if(e.keyCode  === 32 || e.type == "mousedown"){
        isMouseDown = true;
        map.forEach(element =>{
            let offsetX = mouseX-element.x;
            let offsetY = mouseY-element.y;

            element.xx = offsetX;
            element.yy = offsetY;

        })
    }
}
function endMove(e){
    isMouseDown = false;              
}
canvas.addEventListener("mouseout", e=>{
    isMouseDown = false;              
});


canvas.addEventListener("mousemove", e=>{  
    
     mouseX = e.offsetX;
     mouseY = e.offsetY;

    if(isMouseDown){
        draw();
        map.forEach(element=> {
            // console.debug(element.el.xx +" "+ element.el.yy)
           
            element.x = (element.xx-mouseX)*-1;
            element.y = (element.yy-mouseY)*-1;
        })
    }
});
function seaBG(){
    ctx.fillStyle = "rgb(30, 181, 200)"; 
    ctx.fillRect(0,0,canvas.width,1500);
}

function draw(){
    //ctx.
    // ctx.fillRect(0,0,canvas.width-100,1000)
    seaBG();
    drawSquare();
    drawIsland();
      
}

function drawIsland(){

 map.forEach(island =>{ 
     if(island.type === "island"){
          
            ctx.drawImage(island.img,island.x, island.y);
} });
}
setInterval(function(){ 
    draw();
}, 1);
