parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nMAt":[function(require,module,exports) {
module.exports="57Z_Hill_Test_Blu.1748e3ed.png";
},{}],"BurL":[function(require,module,exports) {
module.exports="9A3_Hill1b.c2abc278.png";
},{}],"UPVL":[function(require,module,exports) {
module.exports="811_Hill1a.21dbb8b0.png";
},{}],"BPFv":[function(require,module,exports) {
module.exports="D81_Hill2_Blu-a.fa0827ac.png";
},{}],"eZPh":[function(require,module,exports) {
module.exports="FBD_Hill1c.8349e0b0.png";
},{}],"JLez":[function(require,module,exports) {
module.exports="volcano.23dfc80e.png";
},{}],"qiu3":[function(require,module,exports) {
module.exports={"57Z_Hill_Test_Blu":require("./57Z_Hill_Test_Blu.png"),"9A3_Hill1b":require("./9A3_Hill1b.png"),"811_Hill1a":require("./811_Hill1a.png"),"D81_Hill2_Blu-a":require("./D81_Hill2_Blu-a.png"),FBD_Hill1c:require("./FBD_Hill1c.png"),volcano:require("./volcano.png")};
},{"./57Z_Hill_Test_Blu.png":"nMAt","./9A3_Hill1b.png":"BurL","./811_Hill1a.png":"UPVL","./D81_Hill2_Blu-a.png":"BPFv","./FBD_Hill1c.png":"eZPh","./volcano.png":"JLez"}],"quTw":[function(require,module,exports) {
"use strict";var t=e(require("./img/islands/*.png"));function e(t){return t&&t.__esModule?t:{default:t}}var n=[];for(var i in t.default)n.push(t.default[i]);var o=document.getElementById("map"),u=o.getContext("2d");o.width=window.innerWidth,o.height=800;for(var a=[],r=0;r<n.length;r++){var d={type:"island",x:c(o.width)*r%(3*o.width),y:c(o.height)*r%(3*o.height),xx:null,yy:null,width:null,heigth:null,img:new Image,imgsrc:n[r]};d.img.src=d.imgsrc,d.width=d.img.naturalWidth,d.height=d.img.naturalHeight,a.push(d)}var h={type:"square",x:c(o.width)%(3*o.width),y:c(o.height)%(3*o.height),xx:null,yy:null,width:100,heigth:100};a.push(h);var l=!1,f=0,s=0;function c(t){return Math.floor(Math.random()*Math.floor(t))}function g(t){32===t.key&&(t=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,view:window})),l=!0,a.forEach(function(e){var n=t.offsetX-e.x,i=t.offsetY-e.y;e.xx=n,e.yy=i})}function m(){u.fillStyle="rgb(30, 181, 200)",u.fillRect(0,0,o.width,1500)}function w(){m(),y()}function y(){a.forEach(function(t){"island"===t.type&&u.drawImage(t.img,t.x,t.y)})}o.addEventListener("mousedown",g),o.addEventListener("keydown",g),o.addEventListener("mouseup",function(t){l=!1}),o.addEventListener("mouseout",function(t){l=!1}),o.addEventListener("mousemove",function(t){var e=t.offsetX,n=t.offsetY;l&&(w(),a.forEach(function(t){t.x=-1*(t.xx-e),t.y=-1*(t.yy-n)}))}),setInterval(function(){w()},1);
},{"./img/islands/*.png":"qiu3"}]},{},["quTw"], null)
//# sourceMappingURL=map.10d3ad50.js.map