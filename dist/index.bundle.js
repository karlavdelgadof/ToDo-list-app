"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Space Grotesk', sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: rgba(243, 173, 75, 0.845);\n  background-blend-mode: soft-light;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  color: #545862;\n  height: 100vh;\n}\n\n#todo-list,\n#hero {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  background-color: rgb(247, 247, 248);\n  box-shadow: 5px 10px 8px rgba(202, 67, 29, 0.492);\n}\n\n#todo-list {\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n#hero {\n  background: none;\n  box-shadow: none;\n  align-items: center;\n  gap: 1rem;\n}\n\n#hero h1 {\n  font-family: 'Darker Grotesque', sans-serif;\n  color: rgb(219, 45, 67);\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n#todo-list a {\n  border: none;\n  padding: 1rem 1.3rem;\n  text-align: center;\n  text-decoration: none;\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  font-weight: 600;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  fill: rgba(152, 152, 152, 1);\n  cursor: pointer;\n}\n\n#header,\n#add-task {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n#add-task input {\n  background-color: rgb(247, 247, 248);\n  width: 90%;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\n#add-icon svg {\n  fill: rgb(231, 104, 56);\n}\n\n#header h2 {\n  font-family: 'Darker Grotesque', sans-serif;\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  color: transparent;\n  font-size: 2rem;\n  font-weight: 900;\n  font-style: italic;\n  width: 70%;\n}\n\n#sync {\n  display: flex;\n  align-items: center;\n}\n\n#sync svg {\n  fill: rgb(219, 45, 67);\n}\n\n#sync svg:hover {\n  fill: #57d131;\n}\n\ni[class^=\"fa\"] {\n  color: rgba(152, 152, 152, 1);\n}\n\n.fa-ellipsis-vertical {\n  display: none;\n}\n\n.fa-ellipsis-vertical.show {\n  display: block;\n}\n\n.fa-trash-can {\n  display: none;\n}\n\n.fa-trash-can.show {\n  display: block;\n}\n\n#task-list {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 1.3rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.task.active {\n  background-color: #28df99;\n}\n\n.task-d {\n  width: 90%;\n  background-color: rgb(247, 247, 248);\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  padding-left: 0.8rem;\n}\n\n.task-d.active {\n  background-color: #28df99;\n}\n\n.task-d.cross {\n  text-decoration: line-through;\n  width: 87.1%;\n  background-color: transparent;\n}\n\n#clear-all {\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  color: transparent;\n}\n\n@media screen and (min-width: 768px) {\n  #todo-list,\n  #hero {\n    width: 50%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,mDAA2B;EAC3B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,2CAA2C;EAC3C,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,oCAAoC;EACpC,iDAAiD;AACnD;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,2CAA2C;EAC3C,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;EACrB,iHAAiH;EACjH,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2CAA2C;EAC3C,iHAAiH;EACjH,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,iHAAiH;EACjH,2BAA2B;EAC3B,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Space Grotesk', sans-serif;\n  background: url('./bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: rgba(243, 173, 75, 0.845);\n  background-blend-mode: soft-light;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  color: #545862;\n  height: 100vh;\n}\n\n#todo-list,\n#hero {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  background-color: rgb(247, 247, 248);\n  box-shadow: 5px 10px 8px rgba(202, 67, 29, 0.492);\n}\n\n#todo-list {\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n#hero {\n  background: none;\n  box-shadow: none;\n  align-items: center;\n  gap: 1rem;\n}\n\n#hero h1 {\n  font-family: 'Darker Grotesque', sans-serif;\n  color: rgb(219, 45, 67);\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n#todo-list a {\n  border: none;\n  padding: 1rem 1.3rem;\n  text-align: center;\n  text-decoration: none;\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  font-weight: 600;\n}\n\nli {\n  list-style: none;\n}\n\n.icon {\n  fill: rgba(152, 152, 152, 1);\n  cursor: pointer;\n}\n\n#header,\n#add-task {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n#add-task input {\n  background-color: rgb(247, 247, 248);\n  width: 90%;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\n#add-icon svg {\n  fill: rgb(231, 104, 56);\n}\n\n#header h2 {\n  font-family: 'Darker Grotesque', sans-serif;\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  color: transparent;\n  font-size: 2rem;\n  font-weight: 900;\n  font-style: italic;\n  width: 70%;\n}\n\n#sync {\n  display: flex;\n  align-items: center;\n}\n\n#sync svg {\n  fill: rgb(219, 45, 67);\n}\n\n#sync svg:hover {\n  fill: #57d131;\n}\n\ni[class^=\"fa\"] {\n  color: rgba(152, 152, 152, 1);\n}\n\n.fa-ellipsis-vertical {\n  display: none;\n}\n\n.fa-ellipsis-vertical.show {\n  display: block;\n}\n\n.fa-trash-can {\n  display: none;\n}\n\n.fa-trash-can.show {\n  display: block;\n}\n\n#task-list {\n  width: 100%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 1.3rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.task.active {\n  background-color: #28df99;\n}\n\n.task-d {\n  width: 90%;\n  background-color: rgb(247, 247, 248);\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  padding-left: 0.8rem;\n}\n\n.task-d.active {\n  background-color: #28df99;\n}\n\n.task-d.cross {\n  text-decoration: line-through;\n  width: 87.1%;\n  background-color: transparent;\n}\n\n#clear-all {\n  background-image: linear-gradient(90deg, rgb(168, 2, 111), rgb(219, 45, 67), rgb(231, 104, 56), rgb(255, 153, 0));\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  color: transparent;\n}\n\n@media screen and (min-width: 768px) {\n  #todo-list,\n  #hero {\n    width: 50%;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _modules_remove_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove-storage.js */ "./src/modules/remove-storage.js");






class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const syncIcon = document.getElementById('sync');

syncIcon.addEventListener('click', () => {
  _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = true; });
  const completed = _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].filter((task) => task.completed === true);
  completed.forEach((task) => (0,_modules_remove_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"])(task));
});

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.getTasks(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((task) => { task.completed = false; });
  _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTaks(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
});

const addIcon = document.getElementById('add-icon');

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    const task = new Task(addInput.value, false, _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
    _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(task);
    // Prevent submit
    e.preventDefault();
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

addIcon.addEventListener('click', (e) => {
  if (addInput.value) {
    const task = new Task(addInput.value, false, _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].length + 1);
    _modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"].push(task);
    // Prevent submit
    e.preventDefault();
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task);
    _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_modules_taskarr_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});


/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks)
/* harmony export */ });
const getTasks = (tasks) => tasks.push(...JSON.parse(localStorage.getItem('tasks')));

const addTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};




/***/ }),

/***/ "./src/modules/remove-storage.js":
/*!***************************************!*\
  !*** ./src/modules/remove-storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");



const clearAll = document.getElementById('clear-all');

const removeTask = (index) => {
  const trashIcon = document.querySelectorAll('.fa-trash-can');
  const trashArr = Array.from(trashIcon);
  if (index.completed === true) {
    trashArr[index.index - 1].parentElement.remove();

    _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(index.index - 1, 1);
    for (let i = 0; i < _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i += 1) {
      _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].index = i + 1;
    }
  }
  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

clearAll.addEventListener('click', () => {
  const remain = _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
});


/***/ }),

/***/ "./src/modules/taskarr.js":
/*!********************************!*\
  !*** ./src/modules/taskarr.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskArr = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskArr);

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIDisplay)
/* harmony export */ });
/* harmony import */ var _taskarr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskarr.js */ "./src/modules/taskarr.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.js */ "./src/modules/local-storage.js");
/* harmony import */ var _remove_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-storage.js */ "./src/modules/remove-storage.js");




const taskList = document.getElementById('task-list');

const changeDesc = (input, taskel, el) => {
  taskel.classList.toggle('active');
  input.classList.toggle('active');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.value = e.target.value;
      input.classList.toggle('active');
      taskel.classList.toggle('active');
      _taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"][el.index - 1].description = input.value;
      _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  });
};

class UIDisplay {
  static createTask = (el) => {
    const task = document.createElement('li');
    task.classList.add('task');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkB');
    task.appendChild(checkBox);

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('task-d');
    taskDesc.value = `${el.description}`;
    task.appendChild(taskDesc);

    const dots = document.createElement('i');
    dots.classList.add('fa-solid', 'fa-ellipsis-vertical', 'show');
    task.appendChild(dots);

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can');
    task.appendChild(trashIcon);

    checkBox.addEventListener('change', () => {
      dots.classList.toggle('show');
      trashIcon.classList.toggle('show');
      taskDesc.classList.toggle('cross');
      task.classList.toggle('active');
      if (el.completed === false) {
        el.completed = true;
      } else {
        el.completed = false;
      }
      _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addTask(_taskarr_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });

    taskDesc.addEventListener('click', () => {
      changeDesc(taskDesc, task, el);
    });

    trashIcon.addEventListener('click', () => {
      (0,_remove_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(el);
    });

    taskList.appendChild(task);
  };

  static displayTaks(arr) {
    arr.forEach((el) => UIDisplay.createTask(el));
  }
}


/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ce99b3a954e5f432e17.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLFVBQVUsRUFBQzs7QUFFMUI7QUFDQSxpQkFBaUIsbURBQU87QUFDeEI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGE7QUFDUztBQUNDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBTztBQUNiLE1BQU0sc0RBQWEsQ0FBQyxtREFBTztBQUMzQjtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTSxzREFBYSxDQUFDLG1EQUFPO0FBQzNCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLDhEQUFVO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvcmVtb3ZlLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3Rhc2thcnIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYXJrZXIrR3JvdGVzcXVlOndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMTczLCA3NSwgMC44NDUpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBjb2xvcjogIzU0NTg2MjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiN0b2RvLWxpc3QsXFxuI2hlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggOHB4IHJnYmEoMjAyLCA2NywgMjksIDAuNDkyKTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jaGVybyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNoZXJvIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDIxOSwgNDUsIDY3KTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiN0b2RvLWxpc3QgYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDEuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDE2OCwgMiwgMTExKSwgcmdiKDIxOSwgNDUsIDY3KSwgcmdiKDIzMSwgMTA0LCA1NiksIHJnYigyNTUsIDE1MywgMCkpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBmaWxsOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVhZGVyLFxcbiNhZGQtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG5cXG4jYWRkLXRhc2sgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC1pY29uIHN2ZyB7XFxuICBmaWxsOiByZ2IoMjMxLCAxMDQsIDU2KTtcXG59XFxuXFxuI2hlYWRlciBoMiB7XFxuICBmb250LWZhbWlseTogJ0RhcmtlciBHcm90ZXNxdWUnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTY4LCAyLCAxMTEpLCByZ2IoMjE5LCA0NSwgNjcpLCByZ2IoMjMxLCAxMDQsIDU2KSwgcmdiKDI1NSwgMTUzLCAwKSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4jc3luYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N5bmMgc3ZnIHtcXG4gIGZpbGw6IHJnYigyMTksIDQ1LCA2Nyk7XFxufVxcblxcbiNzeW5jIHN2Zzpob3ZlciB7XFxuICBmaWxsOiAjNTdkMTMxO1xcbn1cXG5cXG5pW2NsYXNzXj1cXFwiZmFcXFwiXSB7XFxuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAxKTtcXG59XFxuXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmEtdHJhc2gtY2FuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mYS10cmFzaC1jYW4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3Rhc2stbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjNyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuXFxuLnRhc2suYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGRmOTk7XFxufVxcblxcbi50YXNrLWQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ4KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcXG59XFxuXFxuLnRhc2stZC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZGY5OTtcXG59XFxuXFxuLnRhc2stZC5jcm9zcyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHdpZHRoOiA4Ny4xJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jY2xlYXItYWxsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDE2OCwgMiwgMTExKSwgcmdiKDIxOSwgNDUsIDY3KSwgcmdiKDIzMSwgMTA0LCA1NiksIHJnYigyNTUsIDE1MywgMCkpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAjdG9kby1saXN0LFxcbiAgI2hlcm8ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbURBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDJDQUEyQztFQUMzQyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlIQUFpSDtFQUNqSCxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGlIQUFpSDtFQUNqSCwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUhBQWlIO0VBQ2pILDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7O0lBRUUsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFya2VyK0dyb3Rlc3F1ZTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYmcuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAxNzMsIDc1LCAwLjg0NSk7XFxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3RvZG8tbGlzdCxcXG4jaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggcmdiYSgyMDIsIDY3LCAyOSwgMC40OTIpO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiNoZXJvIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2hlcm8gaDEge1xcbiAgZm9udC1mYW1pbHk6ICdEYXJrZXIgR3JvdGVzcXVlJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoMjE5LCA0NSwgNjcpO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3RvZG8tbGlzdCBhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTY4LCAyLCAxMTEpLCByZ2IoMjE5LCA0NSwgNjcpLCByZ2IoMjMxLCAxMDQsIDU2KSwgcmdiKDI1NSwgMTUzLCAwKSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gIGZpbGw6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXIsXFxuI2FkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxufVxcblxcbiNhZGQtdGFzayBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0OCk7XFxuICB3aWR0aDogOTAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLWljb24gc3ZnIHtcXG4gIGZpbGw6IHJnYigyMzEsIDEwNCwgNTYpO1xcbn1cXG5cXG4jaGVhZGVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFya2VyIEdyb3Rlc3F1ZScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigxNjgsIDIsIDExMSksIHJnYigyMTksIDQ1LCA2NyksIHJnYigyMzEsIDEwNCwgNTYpLCByZ2IoMjU1LCAxNTMsIDApKTtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbiNzeW5jIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3luYyBzdmcge1xcbiAgZmlsbDogcmdiKDIxOSwgNDUsIDY3KTtcXG59XFxuXFxuI3N5bmMgc3ZnOmhvdmVyIHtcXG4gIGZpbGw6ICM1N2QxMzE7XFxufVxcblxcbmlbY2xhc3NePVxcXCJmYVxcXCJdIHtcXG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDEpO1xcbn1cXG5cXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mYS10cmFzaC1jYW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZhLXRyYXNoLWNhbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC44cmVtIDEuM3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcbn1cXG5cXG4udGFzay5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ZGY5OTtcXG59XFxuXFxuLnRhc2stZCB7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDgpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xcbn1cXG5cXG4udGFzay1kLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkZjk5O1xcbn1cXG5cXG4udGFzay1kLmNyb3NzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgd2lkdGg6IDg3LjElO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNjbGVhci1hbGwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTY4LCAyLCAxMTEpLCByZ2IoMjE5LCA0NSwgNjcpLCByZ2IoMjMxLCAxMDQsIDU2KSwgcmdiKDI1NSwgMTUzLCAwKSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICN0b2RvLWxpc3QsXFxuICAjaGVybyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIFN0b3JlIGZyb20gJy4vbW9kdWxlcy9sb2NhbC1zdG9yYWdlLmpzJztcbmltcG9ydCBVSURpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMnO1xuaW1wb3J0IHRhc2tBcnIgZnJvbSAnLi9tb2R1bGVzL3Rhc2thcnIuanMnO1xuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9tb2R1bGVzL3JlbW92ZS1zdG9yYWdlLmpzJztcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufVxuXG5jb25zdCBzeW5jSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jJyk7XG5cbnN5bmNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrQXJyLmZvckVhY2goKHRhc2spID0+IHsgdGFzay5jb21wbGV0ZWQgPSB0cnVlOyB9KTtcbiAgY29uc3QgY29tcGxldGVkID0gdGFza0Fyci5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcbiAgY29tcGxldGVkLmZvckVhY2goKHRhc2spID0+IHJlbW92ZVRhc2sodGFzaykpO1xufSk7XG5cbmNvbnN0IGFkZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBTdG9yZS5nZXRUYXNrcyh0YXNrQXJyKTtcbiAgdGFza0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7IHRhc2suY29tcGxldGVkID0gZmFsc2U7IH0pO1xuICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xuICBVSURpc3BsYXkuZGlzcGxheVRha3ModGFza0Fycik7XG59KTtcblxuY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaWNvbicpO1xuXG5hZGRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBhZGRJbnB1dC52YWx1ZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhhZGRJbnB1dC52YWx1ZSwgZmFsc2UsIHRhc2tBcnIubGVuZ3RoICsgMSk7XG4gICAgdGFza0Fyci5wdXNoKHRhc2spO1xuICAgIC8vIFByZXZlbnQgc3VibWl0XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFVJRGlzcGxheS5jcmVhdGVUYXNrKHRhc2spO1xuICAgIFN0b3JlLmFkZFRhc2sodGFza0Fycik7XG5cbiAgICBhZGRJbnB1dC52YWx1ZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGFkZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gIH1cbn0pO1xuXG5hZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGFkZElucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGFkZElucHV0LnZhbHVlLCBmYWxzZSwgdGFza0Fyci5sZW5ndGggKyAxKTtcbiAgICB0YXNrQXJyLnB1c2godGFzayk7XG4gICAgLy8gUHJldmVudCBzdWJtaXRcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgVUlEaXNwbGF5LmNyZWF0ZVRhc2sodGFzayk7XG4gICAgU3RvcmUuYWRkVGFzayh0YXNrQXJyKTtcblxuICAgIGFkZElucHV0LnZhbHVlID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgYWRkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgfVxufSk7XG4iLCJjb25zdCBnZXRUYXNrcyA9ICh0YXNrcykgPT4gdGFza3MucHVzaCguLi5KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSk7XG5cbmNvbnN0IGFkZFRhc2sgPSAodGFza3MpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmV4cG9ydCB7IGdldFRhc2tzLCBhZGRUYXNrIH07XG4iLCJpbXBvcnQgdGFza0FyciBmcm9tICcuL3Rhc2thcnIuanMnO1xuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9sb2NhbC1zdG9yYWdlLmpzJztcblxuY29uc3QgY2xlYXJBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYWxsJyk7XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoLWNhbicpO1xuICBjb25zdCB0cmFzaEFyciA9IEFycmF5LmZyb20odHJhc2hJY29uKTtcbiAgaWYgKGluZGV4LmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIHRyYXNoQXJyW2luZGV4LmluZGV4IC0gMV0ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4LmluZGV4IC0gMSwgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0YXNrQXJyW2ldLmluZGV4ID0gaSArIDE7XG4gICAgfVxuICB9XG4gIFN0b3JlLmFkZFRhc2sodGFza0Fycik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrO1xuXG5jbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgcmVtYWluID0gdGFza0FycjtcbiAgY29uc3QgY29tcGxldGVkID0gcmVtYWluLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IHRydWUpO1xuICBjb21wbGV0ZWQuZm9yRWFjaCgodGFzaykgPT4gcmVtb3ZlVGFzayh0YXNrKSk7XG59KTtcbiIsImNvbnN0IHRhc2tBcnIgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IHRhc2tBcnI7IiwiaW1wb3J0IHRhc2tBcnIgZnJvbSAnLi90YXNrYXJyLmpzJztcbmltcG9ydCAqIGFzIFN0b3JlIGZyb20gJy4vbG9jYWwtc3RvcmFnZS5qcyc7XG5pbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL3JlbW92ZS1zdG9yYWdlLmpzJztcblxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG5cbmNvbnN0IGNoYW5nZURlc2MgPSAoaW5wdXQsIHRhc2tlbCwgZWwpID0+IHtcbiAgdGFza2VsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaW5wdXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGFza2VsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGFza0FycltlbC5pbmRleCAtIDFdLmRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSURpc3BsYXkge1xuICBzdGF0aWMgY3JlYXRlVGFzayA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrQicpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tEZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZCcpO1xuICAgIHRhc2tEZXNjLnZhbHVlID0gYCR7ZWwuZGVzY3JpcHRpb259YDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjKTtcblxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZG90cy5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcsICdzaG93Jyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkb3RzKTtcblxuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtdHJhc2gtY2FuJyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xuXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgZG90cy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgdGFza0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnY3Jvc3MnKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICBpZiAoZWwuY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICBlbC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBTdG9yZS5hZGRUYXNrKHRhc2tBcnIpO1xuICAgIH0pO1xuXG4gICAgdGFza0Rlc2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VEZXNjKHRhc2tEZXNjLCB0YXNrLCBlbCk7XG4gICAgfSk7XG5cbiAgICB0cmFzaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW1vdmVUYXNrKGVsKTtcbiAgICB9KTtcblxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spO1xuICB9O1xuXG4gIHN0YXRpYyBkaXNwbGF5VGFrcyhhcnIpIHtcbiAgICBhcnIuZm9yRWFjaCgoZWwpID0+IFVJRGlzcGxheS5jcmVhdGVUYXNrKGVsKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==