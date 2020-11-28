parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ug57":[function(require,module,exports) {
module.exports="cloud-8116.70ce80a5.png";
},{}],"sSL0":[function(require,module,exports) {
module.exports="cloud-8094.57d74592.png";
},{}],"bGUH":[function(require,module,exports) {
module.exports="cloud-8114.e5e9fdc6.png";
},{}],"K9ct":[function(require,module,exports) {
module.exports="cloud-8100.5fc18d59.png";
},{}],"vWjf":[function(require,module,exports) {
module.exports={"cloud-8116":require("./cloud-8116.png"),"cloud-8094":require("./cloud-8094.png"),"cloud-8114":require("./cloud-8114.png"),"cloud-8100":require("./cloud-8100.png")};
},{"./cloud-8116.png":"ug57","./cloud-8094.png":"sSL0","./cloud-8114.png":"bGUH","./cloud-8100.png":"K9ct"}],"nMAt":[function(require,module,exports) {
module.exports="57Z_Hill_Test_Blu.1748e3ed.png";
},{}],"UPVL":[function(require,module,exports) {
module.exports="811_Hill1a.21dbb8b0.png";
},{}],"BurL":[function(require,module,exports) {
module.exports="9A3_Hill1b.c2abc278.png";
},{}],"BPFv":[function(require,module,exports) {
module.exports="D81_Hill2_Blu-a.fa0827ac.png";
},{}],"eZPh":[function(require,module,exports) {
module.exports="FBD_Hill1c.8349e0b0.png";
},{}],"NN4C":[function(require,module,exports) {
module.exports="mermaid_stone.f6098864.png";
},{}],"NBUZ":[function(require,module,exports) {
module.exports="pirate-ship.5802110c.png";
},{}],"JLez":[function(require,module,exports) {
module.exports="volcano.23dfc80e.png";
},{}],"qiu3":[function(require,module,exports) {
module.exports={"57Z_Hill_Test_Blu":require("./57Z_Hill_Test_Blu.png"),"811_Hill1a":require("./811_Hill1a.png"),"9A3_Hill1b":require("./9A3_Hill1b.png"),"D81_Hill2_Blu-a":require("./D81_Hill2_Blu-a.png"),FBD_Hill1c:require("./FBD_Hill1c.png"),mermaid_stone:require("./mermaid_stone.png"),"pirate-ship":require("./pirate-ship.png"),volcano:require("./volcano.png")};
},{"./57Z_Hill_Test_Blu.png":"nMAt","./811_Hill1a.png":"UPVL","./9A3_Hill1b.png":"BurL","./D81_Hill2_Blu-a.png":"BPFv","./FBD_Hill1c.png":"eZPh","./mermaid_stone.png":"NN4C","./pirate-ship.png":"NBUZ","./volcano.png":"JLez"}],"quTw":[function(require,module,exports) {
"use strict";var t=i(require("./img/clouds/*.png")),e=i(require("./img/islands/*.png"));function i(t){return t&&t.__esModule?t:{default:t}}var n=document.getElementById("map"),o=n.getContext("2d");n.width=window.innerWidth,n.height=800;for(var r=0,a=[],d=Object.keys(e.default),h=0,u=0,l=d;u<l.length;u++){var s=l[u];h++;var g={type:"island",x:b(n.width)*h%(3*n.width),y:b(n.height)*h%(3*n.height),xx:null,yy:null,swidth:W(),sheigth:100*b(10),img:new Image,imgsrc:e.default[s]};g.img.src=g.imgsrc,g.width=g.img.naturalWidth,g.height=g.img.naturalHeight,a.push(g)}var f=Object.keys(t.default);h=0;for(var m=0,w=f;m<w.length;m++){var c=w[m];h+=5;var y={type:"cloud",x:b(n.width)*h%(3*n.width),y:b(n.height)*h%(3*n.height),xx:null,yy:null,swidth:W(),sheigth:b(10),img:new Image,imgsrc:t.default[c]};y.img.src=y.imgsrc,y.width=y.img.naturalWidth,y.height=y.img.naturalHeight,a.push(y)}var x={type:"square",x:0,y:0,xx:null,yy:null,swidth:100,sheigth:100};function v(){o.strokeStyle="rgba(10, 100, 190, 0.05)",o.lineWidth=1,o.beginPath();for(var t=x.y+.5;t<=n.height;t+=60)o.moveTo(0,t),o.lineTo(n.width,t),o.stroke();for(var e=x.x;e<=2*n.width;e+=60)o.moveTo(.7*e,0),o.lineTo(e,n.width),o.stroke();o.font="40pt Calibri",o.fillStyle="black",o.fillText(x.x,0,50),o.fillText(x.y,100,50)}a.push(x);var p,k,E=!1;function b(t){return Math.floor(Math.random()*Math.floor(t))}function W(){return Math.random()}function L(t){console.log(t.keyCode),32!==t.keyCode&&"mousedown"!=t.type||(E=!0,a.forEach(function(t){var e=p-t.x,i=k-t.y;t.xx=e,t.yy=i}))}function T(t){E=!1}function q(){o.fillStyle="rgb(30, 181, 200)",o.fillRect(0,0,n.width,1500)}function C(t){q(),v(),I(t)}function I(t){a.forEach(function(e){"island"!==e.type&&"cloud"!==e.type||(o.save(),"cloud"===e.type&&(o.shadowColor="rgba(10,20,20,0.3)",o.shadowBlur=10,o.shadowOffsetX=-10,o.shadowOffsetY=160,e.x<x.x-e.width-n.width&&(e.x=x.x+window.innerWidth+100),o.drawImage(e.img,e.x,e.y,(e.img.naturalWidth-10)*e.swidth,(e.img.naturalHeight-10)*e.swidth),e.x-=t*e.swidth/50),o.restore(),o.drawImage(e.img,e.x,e.y,e.img.naturalWidth*e.swidth,e.img.naturalHeight*e.swidth))})}function M(t){C((t-r)%10),requestAnimationFrame(M)}n.addEventListener("mousedown",L),n.addEventListener("mouseup",T),document.addEventListener("keydown",L),document.addEventListener("keyup",T),n.addEventListener("mouseout",function(t){E=!1}),n.addEventListener("mousemove",function(t){p=t.offsetX,k=t.offsetY,E&&(C(),a.forEach(function(t){t.x=-1*(t.xx-p),t.y=-1*(t.yy-k)}))}),window.requestAnimationFrame(M);
},{"./img/clouds/*.png":"vWjf","./img/islands/*.png":"qiu3"}]},{},["quTw"], null)
//# sourceMappingURL=map.b79b8e2e.js.map