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
        x:getRandomInt(canvas.width)  % (3 * canvas.width),
        y:getRandomInt(canvas.height) % (3 * canvas.height),
        xx:null,
        yy:null,
        width:100,
        heigth:100
}

map.push(square);

let isMouseDown = false;
let MdX = 0;
let MdY = 0;

// let island = {x: 0, y: 0}; 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
canvas.addEventListener("mousedown", beginMove);
canvas.addEventListener("keydown", beginMove);
function beginMove(e){
 if(e.key === 32){
       e= new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: true,
            view: window
          });
        }
    isMouseDown = true;
     map.forEach(element =>{
        let offsetX = e.offsetX-element.x;
        let offsetY = e.offsetY-element.y;

        element.xx = offsetX;
        element.yy = offsetY;

     })
}
canvas.addEventListener("mouseup", e=>{
    isMouseDown = false;              
});
canvas.addEventListener("mouseout", e=>{
    isMouseDown = false;              
});


canvas.addEventListener("mousemove", e=>{  
    
    let x = e.offsetX;
    let y = e.offsetY;

    if(isMouseDown){
        draw();
        map.forEach(element=> {
            // console.debug(element.el.xx +" "+ element.el.yy)
           
            element.x = (element.xx-x)*-1;
            element.y = (element.yy-y)*-1;
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
