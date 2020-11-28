// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/clouds/cloud-8094.png":[function(require,module,exports) {
module.exports = "/cloud-8094.2d304976.png";
},{}],"img/clouds/cloud-8100.png":[function(require,module,exports) {
module.exports = "/cloud-8100.e0817346.png";
},{}],"img/clouds/cloud-8114.png":[function(require,module,exports) {
module.exports = "/cloud-8114.e3465e4a.png";
},{}],"img/clouds/cloud-8116.png":[function(require,module,exports) {
module.exports = "/cloud-8116.b06bdfe9.png";
},{}],"img/clouds/*.png":[function(require,module,exports) {
module.exports = {
  "cloud-8094": require("./cloud-8094.png"),
  "cloud-8100": require("./cloud-8100.png"),
  "cloud-8114": require("./cloud-8114.png"),
  "cloud-8116": require("./cloud-8116.png")
};
},{"./cloud-8094.png":"img/clouds/cloud-8094.png","./cloud-8100.png":"img/clouds/cloud-8100.png","./cloud-8114.png":"img/clouds/cloud-8114.png","./cloud-8116.png":"img/clouds/cloud-8116.png"}],"img/islands/57Z_Hill_Test_Blu.png":[function(require,module,exports) {
module.exports = "/57Z_Hill_Test_Blu.5c6282b1.png";
},{}],"img/islands/811_Hill1a.png":[function(require,module,exports) {
module.exports = "/811_Hill1a.a3a7150a.png";
},{}],"img/islands/9A3_Hill1b.png":[function(require,module,exports) {
module.exports = "/9A3_Hill1b.de1dcb50.png";
},{}],"img/islands/D81_Hill2_Blu-a.png":[function(require,module,exports) {
module.exports = "/D81_Hill2_Blu-a.17271165.png";
},{}],"img/islands/FBD_Hill1c.png":[function(require,module,exports) {
module.exports = "/FBD_Hill1c.2ed334e7.png";
},{}],"img/islands/mermaid_stone.png":[function(require,module,exports) {
module.exports = "/mermaid_stone.d6a89490.png";
},{}],"img/islands/pirate-ship.png":[function(require,module,exports) {
module.exports = "/pirate-ship.6d34c956.png";
},{}],"img/islands/volcano.png":[function(require,module,exports) {
module.exports = "/volcano.8be98ed6.png";
},{}],"img/islands/*.png":[function(require,module,exports) {
module.exports = {
  "57Z_Hill_Test_Blu": require("./57Z_Hill_Test_Blu.png"),
  "811_Hill1a": require("./811_Hill1a.png"),
  "9A3_Hill1b": require("./9A3_Hill1b.png"),
  "D81_Hill2_Blu-a": require("./D81_Hill2_Blu-a.png"),
  "FBD_Hill1c": require("./FBD_Hill1c.png"),
  "mermaid_stone": require("./mermaid_stone.png"),
  "pirate-ship": require("./pirate-ship.png"),
  "volcano": require("./volcano.png")
};
},{"./57Z_Hill_Test_Blu.png":"img/islands/57Z_Hill_Test_Blu.png","./811_Hill1a.png":"img/islands/811_Hill1a.png","./9A3_Hill1b.png":"img/islands/9A3_Hill1b.png","./D81_Hill2_Blu-a.png":"img/islands/D81_Hill2_Blu-a.png","./FBD_Hill1c.png":"img/islands/FBD_Hill1c.png","./mermaid_stone.png":"img/islands/mermaid_stone.png","./pirate-ship.png":"img/islands/pirate-ship.png","./volcano.png":"img/islands/volcano.png"}],"map.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("./img/clouds/*.png"));

var _2 = _interopRequireDefault(require("./img/islands/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path'
// import fs from 'fs'
// const fs = require("fs")
// //joining path of directory 
// const directoryPath = path.join(__dirname, '/img/islands');
// //passsing directoryPath and callback function
// let islands = [];
// for(var key in island_assets){
//     islands.push(island_assets[key]);}
var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 800;
var start = 0;
var map = [];
var islandAssets = Object.keys(_2.default);
var i = 0;

for (var _i = 0, _islandAssets = islandAssets; _i < _islandAssets.length; _i++) {
  var key = _islandAssets[_i];
  i++;
  var island = {
    type: "island",
    x: getRandomInt(canvas.width) * i % (3 * canvas.width),
    y: getRandomInt(canvas.height) * i % (3 * canvas.height),
    xx: null,
    yy: null,
    swidth: getRandomFloat(),
    sheigth: 100 * getRandomInt(10),
    img: new Image(),
    imgsrc: _2.default[key]
  }; //! set fields that can be set in the object

  island.img.src = island.imgsrc;
  island.width = island.img.naturalWidth;
  island.height = island.img.naturalHeight;
  map.push(island);
}

var cloudAssets = Object.keys(_.default);
i = 0;

for (var _i2 = 0, _cloudAssets = cloudAssets; _i2 < _cloudAssets.length; _i2++) {
  var _key = _cloudAssets[_i2];
  i += 5;
  var cloud = {
    type: "cloud",
    x: getRandomInt(canvas.width) * i % (3 * canvas.width),
    y: getRandomInt(canvas.height) * i % (3 * canvas.height),
    xx: null,
    yy: null,
    swidth: getRandomFloat(),
    sheigth: getRandomInt(10),
    img: new Image(),
    imgsrc: _.default[_key]
  }; //! set fields that can be set in the object

  cloud.img.src = cloud.imgsrc;
  cloud.width = cloud.img.naturalWidth;
  cloud.height = cloud.img.naturalHeight;
  map.push(cloud);
}

var square = {
  type: "square",
  x: 0,
  y: 0,
  xx: null,
  yy: null,
  swidth: 100,
  sheigth: 100
};
map.push(square);

function drawSquare() {
  // ctx.clearRect(0,canvas.width, 0, canvas.height)
  ctx.strokeStyle = 'rgba(10, 100, 190, 0.05)';
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (var _i3 = square.y + 0.5; _i3 <= canvas.height; _i3 += 60) {
    ctx.moveTo(0, _i3);
    ctx.lineTo(canvas.width, _i3);
    ctx.stroke();
  }

  for (var _i4 = square.x; _i4 <= 2 * canvas.width; _i4 += 60) {
    ctx.moveTo(_i4 * 0.7, 0);
    ctx.lineTo(_i4, canvas.width);
    ctx.stroke();
  }

  ctx.font = "40pt Calibri";
  ctx.fillStyle = "black";
  ctx.fillText(square.x, 0, 50);
  ctx.fillText(square.y, 100, 50);
}

var isMouseDown = false;
var mouseX;
var mouseY; // let island = {x: 0, y: 0}; 

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

function beginMove(e) {
  console.log(e.keyCode);

  if (e.keyCode === 32 || e.type == "mousedown") {
    isMouseDown = true;
    map.forEach(function (element) {
      var offsetX = mouseX - element.x;
      var offsetY = mouseY - element.y;
      element.xx = offsetX;
      element.yy = offsetY;
    });
  }
}

function endMove(e) {
  isMouseDown = false;
}

canvas.addEventListener("mouseout", function (e) {
  isMouseDown = false;
});
canvas.addEventListener("mousemove", function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;

  if (isMouseDown) {
    draw();
    map.forEach(function (element) {
      // console.debug(element.el.xx +" "+ element.el.yy)
      element.x = (element.xx - mouseX) * -1;
      element.y = (element.yy - mouseY) * -1;
    });
  }
});

function seaBG() {
  ctx.fillStyle = "rgb(30, 181, 200)";
  ctx.fillRect(0, 0, canvas.width, 1500);
}

function draw(time) {
  //ctx.
  // ctx.fillRect(0,0,canvas.width-100,1000)
  seaBG();
  drawSquare();
  drawElements(time);
}

function drawElements(time) {
  map.forEach(function (el) {
    if (el.type === "island" || el.type === "cloud") {
      ctx.save();

      if (el.type === "cloud") {
        ctx.shadowColor = "rgba(10,20,20,0.3)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = -10;
        ctx.shadowOffsetY = 160;

        if (el.x < square.x - el.width - canvas.width) {
          el.x = square.x + window.innerWidth + 100;
        }

        ctx.drawImage(el.img, el.x, el.y, (el.img.naturalWidth - 10) * el.swidth, (el.img.naturalHeight - 10) * el.swidth);
        el.x -= time * el.swidth / 50;
      } // drawXY(el,el.x,el.y);


      ctx.restore();
      ctx.drawImage(el.img, el.x, el.y, el.img.naturalWidth * el.swidth, el.img.naturalHeight * el.swidth);
    }
  });

  function drawXY(element, x, y) {
    ctx.font = "40pt Calibri";
    ctx.fillStyle = "black";
    ctx.fillText(element.x, x, y);
    ctx.fillText(element.y, x + 100, y);
  }
}

function step(time) {
  var progress = (time - start) % 10; // ctx.clearRect(0,0,canvas.width, canvas.height);

  draw(progress);
  requestAnimationFrame(step);
}

window.requestAnimationFrame(step); // setInterval(function(){ 
//     draw();
// }, 1);
// window.onload( draw());
},{"./img/clouds/*.png":"img/clouds/*.png","./img/islands/*.png":"img/islands/*.png"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52464" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","map.js"], null)
//# sourceMappingURL=/map.27237bf4.js.map