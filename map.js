import cloud_assets from "./img/clouds/*.png";
import island_assets from "./img/islands/*.png";
// import path from 'path'
// import fs from 'fs'
// const fs = require("fs")

// //joining path of directory 
// const directoryPath = path.join(__dirname, '/img/islands');
// //passsing directoryPath and callback function

// let islands = [];
// for(var key in island_assets){
//     islands.push(island_assets[key]);}


const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 800;

let start = 0;

let map =[];
let islandAssets = Object.keys(island_assets)
let i = 0;
for(const key of islandAssets){
    i++;
    let island ={
        type:"island",
        x:getRandomInt(canvas.width) * i % (3 * canvas.width),
        y:getRandomInt(canvas.height) * i % (3 * canvas.height),
        xx:null,
        yy:null,
        swidth:getRandomFloat(),
        sheigth:100*getRandomInt(10),
        img: new Image(),
        imgsrc: island_assets[key]
        }
        //! set fields that can be set in the object
    island.img.src = island.imgsrc;
    island.width = island.img.naturalWidth;
    island.height = island.img.naturalHeight;
 map.push(island);
}


let cloudAssets = Object.keys(cloud_assets);
i = 0;
for(const key of cloudAssets){
    i+=5;
    let cloud ={
        type:"cloud",
        x:getRandomInt(canvas.width) *i % (3 * canvas.width),
        y:getRandomInt(canvas.height)*i % (3 * canvas.height),
        xx:null,
        yy:null,
        swidth:getRandomFloat(),
        sheigth:getRandomInt(10),
        img: new Image(),
        imgsrc: cloud_assets[key]
        }
        //! set fields that can be set in the object
    cloud.img.src = cloud.imgsrc;
    cloud.width = cloud.img.naturalWidth;
    cloud.height = cloud.img.naturalHeight;
 map.push(cloud);
}

let square ={
    type:"square",
        x:0,
        y:0,
        xx:null,
        yy:null,
        swidth:100,
        sheigth:100
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

    ctx.font = "40pt Calibri";
    ctx.fillStyle ="black";
    ctx.fillText(square.x, 0, 50); 
    ctx.fillText(square.y, 100, 50);   
}




let isMouseDown = false;
let mouseX;
let mouseY;

// let island = {x: 0, y: 0}; 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function getRandomFloat() {
  return Math.random();
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

function draw(time){
    //ctx.
    // ctx.fillRect(0,0,canvas.width-100,1000)
  
    seaBG();
    drawSquare();
    drawElements(time);
  
}

function drawElements(time){

 map.forEach(el =>{ 
     if(el.type === "island" || el.type === "cloud"){
        ctx.save();
            if(el.type==="cloud"){
                ctx.shadowColor = "rgba(10,20,20,0.3)";
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = -10;
                ctx.shadowOffsetY = 160;
              
                if( el.x < square.x-el.width-canvas.width ){
                    el.x = square.x + window.innerWidth + 100;
                }
                
                ctx.drawImage(el.img,el.x, el.y, (el.img.naturalWidth-10) * el.swidth, (el.img.naturalHeight-10) * el.swidth);
                el.x -= time * el.swidth + 1;
            }
        // drawXY(el,el.x,el.y);
        ctx.restore();
        ctx.drawImage(el.img,el.x, el.y, el.img.naturalWidth * el.swidth, el.img.naturalHeight * el.swidth);
       
          
} });

function drawXY(element,x,y){
    ctx.font = "40pt Calibri";
    ctx.fillStyle ="black";
    ctx.fillText(element.x, x, y);
    ctx.fillText(element.y, x+100, y);
}

}
function step(time){
    let progress = (time - start)%1;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    draw(progress);
   
    requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
// setInterval(function(){ 
//     draw();
// }, 1);

// window.onload( draw());