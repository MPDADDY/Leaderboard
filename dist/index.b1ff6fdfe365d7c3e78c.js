"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: rgb(254, 255, 255);
}

.leaderboard_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  width: 600px;
  background-color: rgb(247, 243, 243);
}

h1 {
  padding: 20px 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 800;
}

.leaderboard_section {
  display: grid;
  grid-template-columns: auto auto;
  padding: 1.2rem 3rem;
  gap: 20px;
}

.leaderboard_header {
  display: grid;
  grid-template-columns: auto 50px;
  gap: 5px;
  align-items: center;
}

.leaderboard_header > button {
  align-self: flex-end;
  margin-bottom: 4px;
}

button[type=button] {
  margin-top: -30px;
}

.input_section {
  display: grid;
  grid-template-columns: auto;
}

form {
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 20px;
}

button[type=submit] {
  width: fit-content;
  align-self: flex-end;
}

.leaderboard {
  width: 100%;
  height: 200px;
  border: 1px solid rgb(20, 18, 18);
  overflow-y: scroll;
}

input[type=text],
input[type=number] {
  padding: 3px;
}

.gray {
  background-color: rgb(218, 207, 207);
}

p {
  padding: 5px;
}

.odd-bg {
  background-color: rgb(181, 172, 172);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,sHAAsH;EACtH,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(254, 255, 255);\r\n}\r\n\r\n.leaderboard_container {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 3px solid black;\r\n  width: 600px;\r\n  background-color: rgb(247, 243, 243);\r\n}\r\n\r\nh1 {\r\n  padding: 20px 20px;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  font-weight: 800;\r\n}\r\n\r\n.leaderboard_section {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  padding: 1.2rem 3rem;\r\n  gap: 20px;\r\n}\r\n\r\n.leaderboard_header {\r\n  display: grid;\r\n  grid-template-columns: auto 50px;\r\n  gap: 5px;\r\n  align-items: center;\r\n}\r\n\r\n.leaderboard_header > button {\r\n  align-self: flex-end;\r\n  margin-bottom: 4px;\r\n}\r\n\r\nbutton[type=button] {\r\n  margin-top: -30px;\r\n}\r\n\r\n.input_section {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 150px;\r\n  gap: 20px;\r\n}\r\n\r\nbutton[type=submit] {\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.leaderboard {\r\n  width: 100%;\r\n  height: 200px;\r\n  border: 1px solid rgb(20, 18, 18);\r\n  overflow-y: scroll;\r\n}\r\n\r\ninput[type=text],\r\ninput[type=number] {\r\n  padding: 3px;\r\n}\r\n\r\n.gray {\r\n  background-color: rgb(218, 207, 207);\r\n}\r\n\r\np {\r\n  padding: 5px;\r\n}\r\n\r\n.odd-bg {\r\n  background-color: rgb(181, 172, 172);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");



const initializeApp = () => {
  document.addEventListener('click', _modules_render_js__WEBPACK_IMPORTED_MODULE_1__.handleSubmission);
  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.renderScores)();
};

window.addEventListener('DOMContentLoaded', initializeApp);

/***/ }),

/***/ "./src/modules/myApp.js":
/*!******************************!*\
  !*** ./src/modules/myApp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScore: () => (/* binding */ addScore),
/* harmony export */   createGame: () => (/* binding */ createGame),
/* harmony export */   getScores: () => (/* binding */ getScores),
/* harmony export */   initializeGameId: () => (/* binding */ initializeGameId)
/* harmony export */ });
const makeRequest = async (url, method = 'GET', requestData = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method,
    headers,
  };

  if (requestData) {
    options.body = JSON.stringify(requestData);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

const createGame = async (baseUrl, name) => {
  const url = `${baseUrl}games/`;
  const requestData = { name };
  const response = await makeRequest(url, 'POST', requestData);
  return response.result;
};

const initializeGameId = async (baseUrl, gameName) => {
  const gameId = localStorage.getItem(gameName);
  if (!gameId) {
    try {
      const newGameId = await createGame(baseUrl, gameName);
      localStorage.setItem(gameName, newGameId);
      return newGameId;
    } catch (error) {
      return Promise.reject(error);
    }
  } else {
    return gameId;
  }
};

const addScore = async (baseUrl, gameId, user, score) => {
  const url = `${baseUrl}games/${gameId}/scores/`;
  const requestData = { user, score };
  const response = await makeRequest(url, 'POST', requestData);
  return response.result;
};

const getScores = async (baseUrl, gameId) => {
  if (!gameId) return [];
  const url = `${baseUrl}games/${gameId}/scores/`;
  const response = await makeRequest(url);
  return response.result;
};

// Export functions



/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSubmission: () => (/* binding */ handleSubmission),
/* harmony export */   renderScores: () => (/* binding */ renderScores)
/* harmony export */ });
/* harmony import */ var _myApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myApp.js */ "./src/modules/myApp.js");


const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const scoresArticle = document.getElementById('leaderboard');
const myStatus = document.getElementById('message');

const renderScores = async () => {
  try {
    const gameId = await (0,_myApp_js__WEBPACK_IMPORTED_MODULE_0__.initializeGameId)(API_BASE_URL, 'leaderboard');
    const scores = await (0,_myApp_js__WEBPACK_IMPORTED_MODULE_0__.getScores)(API_BASE_URL, gameId);

    if (scores.length > 0) {
      scoresArticle.innerHTML = '';
      scores.forEach((score, index) => {
        const scoreItem = document.createElement('p');
        scoreItem.textContent = `${score.user}: ${score.score}`;
        scoreItem.classList.add('list');
        if (index % 2 === 0) {
          scoreItem.classList.add('even-bg');
        } else {
          scoreItem.classList.add('odd-bg');
        }
        scoresArticle.appendChild(scoreItem);
      });
    } else {
      scoresArticle.innerHTML = `<div class="empty-warning">
        <h2>Add new scores</h2>
      </div>`;
    }
  } catch (error) {
    myStatus.textContent = `${error}: Check your Internet`;
  }
};

const handleSubmission = async (e) => {
  e.preventDefault();
  const submitButton = e.target;

  if (submitButton.id === 'submit') {
    myStatus.textContent = 'Submitting...';
    myStatus.classList.remove('hidden');

    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (name && !Number.isNaN(score)) {
      try {
        const gameId = await (0,_myApp_js__WEBPACK_IMPORTED_MODULE_0__.initializeGameId)(API_BASE_URL, 'leaderboard');
        const result = await (0,_myApp_js__WEBPACK_IMPORTED_MODULE_0__.addScore)(API_BASE_URL, gameId, name, score);
        renderScores();
        myStatus.textContent = result;
        myStatus.className = 'success';
        nameInput.value = '';
        scoreInput.value = '';
      } catch (error) {
        myStatus.className = 'error';
        myStatus.textContent = `${error}: Check your Internet`;
      }

      setTimeout(() => {
        myStatus.className = 'hide';
      }, 3000);
    }
  } else if (submitButton.id === 'refresh') {
    window.location.reload();
  }
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0MsNkJBQTZCLG1EQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL215QXBwLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5sZWFkZXJib2FyZF9jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MywgMjQzKTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5sZWFkZXJib2FyZF9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmxlYWRlcmJvYXJkX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTBweDtcclxuICBnYXA6IDVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGVhZGVyYm9hcmRfaGVhZGVyID4gYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPWJ1dHRvbl0ge1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uaW5wdXRfc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1zdWJtaXRdIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5sZWFkZXJib2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAsIDE4LCAxOCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLFxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmdyYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIwNywgMjA3KTtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ub2RkLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAxNzIsIDE3Mik7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0hBQXNIO0VBQ3RILGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZF9jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQzLCAyNDMpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcmJvYXJkX3NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZF9oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA1MHB4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmRfaGVhZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT1idXR0b25dIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRfc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT1zdWJtaXRdIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwLCAxOCwgMTgpO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdLFxcclxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIwNywgMjA3KTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vZGQtYmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMTcyLCAxNzIpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJTY29yZXMsIGhhbmRsZVN1Ym1pc3Npb24gfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyLmpzJztcblxuY29uc3QgaW5pdGlhbGl6ZUFwcCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdWJtaXNzaW9uKTtcbiAgcmVuZGVyU2NvcmVzKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBcHApOyIsImNvbnN0IG1ha2VSZXF1ZXN0ID0gYXN5bmMgKHVybCwgbWV0aG9kID0gJ0dFVCcsIHJlcXVlc3REYXRhID0gbnVsbCkgPT4ge1xuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVycyxcbiAgfTtcblxuICBpZiAocmVxdWVzdERhdGEpIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YSk7XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1JlcXVlc3QgZmFpbGVkJyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWUgPSBhc3luYyAoYmFzZVVybCwgbmFtZSkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfWdhbWVzL2A7XG4gIGNvbnN0IHJlcXVlc3REYXRhID0geyBuYW1lIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZVJlcXVlc3QodXJsLCAnUE9TVCcsIHJlcXVlc3REYXRhKTtcbiAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVHYW1lSWQgPSBhc3luYyAoYmFzZVVybCwgZ2FtZU5hbWUpID0+IHtcbiAgY29uc3QgZ2FtZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2FtZU5hbWUpO1xuICBpZiAoIWdhbWVJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdHYW1lSWQgPSBhd2FpdCBjcmVhdGVHYW1lKGJhc2VVcmwsIGdhbWVOYW1lKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdhbWVOYW1lLCBuZXdHYW1lSWQpO1xuICAgICAgcmV0dXJuIG5ld0dhbWVJZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdhbWVJZDtcbiAgfVxufTtcblxuY29uc3QgYWRkU2NvcmUgPSBhc3luYyAoYmFzZVVybCwgZ2FtZUlkLCB1c2VyLCBzY29yZSkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfWdhbWVzLyR7Z2FtZUlkfS9zY29yZXMvYDtcbiAgY29uc3QgcmVxdWVzdERhdGEgPSB7IHVzZXIsIHNjb3JlIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZVJlcXVlc3QodXJsLCAnUE9TVCcsIHJlcXVlc3REYXRhKTtcbiAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbn07XG5cbmNvbnN0IGdldFNjb3JlcyA9IGFzeW5jIChiYXNlVXJsLCBnYW1lSWQpID0+IHtcbiAgaWYgKCFnYW1lSWQpIHJldHVybiBbXTtcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH1nYW1lcy8ke2dhbWVJZH0vc2NvcmVzL2A7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZVJlcXVlc3QodXJsKTtcbiAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbn07XG5cbi8vIEV4cG9ydCBmdW5jdGlvbnNcbmV4cG9ydCB7XG4gIGluaXRpYWxpemVHYW1lSWQsXG4gIGNyZWF0ZUdhbWUsXG4gIGFkZFNjb3JlLFxuICBnZXRTY29yZXMsXG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0U2NvcmVzLFxuICBhZGRTY29yZSxcbiAgaW5pdGlhbGl6ZUdhbWVJZCxcbn0gZnJvbSAnLi9teUFwcC5qcyc7XG5cbmNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS8nO1xuXG5jb25zdCBzY29yZXNBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkJyk7XG5jb25zdCBteVN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG5cbmNvbnN0IHJlbmRlclNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBnYW1lSWQgPSBhd2FpdCBpbml0aWFsaXplR2FtZUlkKEFQSV9CQVNFX1VSTCwgJ2xlYWRlcmJvYXJkJyk7XG4gICAgY29uc3Qgc2NvcmVzID0gYXdhaXQgZ2V0U2NvcmVzKEFQSV9CQVNFX1VSTCwgZ2FtZUlkKTtcblxuICAgIGlmIChzY29yZXMubGVuZ3RoID4gMCkge1xuICAgICAgc2NvcmVzQXJ0aWNsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHNjb3Jlcy5mb3JFYWNoKChzY29yZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2NvcmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzY29yZUl0ZW0udGV4dENvbnRlbnQgPSBgJHtzY29yZS51c2VyfTogJHtzY29yZS5zY29yZX1gO1xuICAgICAgICBzY29yZUl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgc2NvcmVJdGVtLmNsYXNzTGlzdC5hZGQoJ2V2ZW4tYmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29yZUl0ZW0uY2xhc3NMaXN0LmFkZCgnb2RkLWJnJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcmVzQXJ0aWNsZS5hcHBlbmRDaGlsZChzY29yZUl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjb3Jlc0FydGljbGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlbXB0eS13YXJuaW5nXCI+XG4gICAgICAgIDxoMj5BZGQgbmV3IHNjb3JlczwvaDI+XG4gICAgICA8L2Rpdj5gO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBteVN0YXR1cy50ZXh0Q29udGVudCA9IGAke2Vycm9yfTogQ2hlY2sgeW91ciBJbnRlcm5ldGA7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGUudGFyZ2V0O1xuXG4gIGlmIChzdWJtaXRCdXR0b24uaWQgPT09ICdzdWJtaXQnKSB7XG4gICAgbXlTdGF0dXMudGV4dENvbnRlbnQgPSAnU3VibWl0dGluZy4uLic7XG4gICAgbXlTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgIGNvbnN0IHNjb3JlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBzY29yZSA9IHBhcnNlRmxvYXQoc2NvcmVJbnB1dC52YWx1ZSk7XG5cbiAgICBpZiAobmFtZSAmJiAhTnVtYmVyLmlzTmFOKHNjb3JlKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2FtZUlkID0gYXdhaXQgaW5pdGlhbGl6ZUdhbWVJZChBUElfQkFTRV9VUkwsICdsZWFkZXJib2FyZCcpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhZGRTY29yZShBUElfQkFTRV9VUkwsIGdhbWVJZCwgbmFtZSwgc2NvcmUpO1xuICAgICAgICByZW5kZXJTY29yZXMoKTtcbiAgICAgICAgbXlTdGF0dXMudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIG15U3RhdHVzLmNsYXNzTmFtZSA9ICdzdWNjZXNzJztcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHNjb3JlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG15U3RhdHVzLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gICAgICAgIG15U3RhdHVzLnRleHRDb250ZW50ID0gYCR7ZXJyb3J9OiBDaGVjayB5b3VyIEludGVybmV0YDtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG15U3RhdHVzLmNsYXNzTmFtZSA9ICdoaWRlJztcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdWJtaXRCdXR0b24uaWQgPT09ICdyZWZyZXNoJykge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcmVuZGVyU2NvcmVzLCBoYW5kbGVTdWJtaXNzaW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=