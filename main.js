"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modules/gameboard */ \"./src/modules/gameboard.js\");\n\r\n\r\nconst refresh = document.querySelector('.refresh');\r\n\r\nrefresh.addEventListener('click', () => {\r\n  (0,_src_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://webpack-template/./index.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addInput = document.querySelector('.add-input');\r\n\r\nclass ScoreObject {\r\n  static scoreArr = [];\r\n\r\n  constructor(user, score) {\r\n    this.user = user;\r\n    this.score = score;\r\n  }\r\n}\r\n\r\n// GET: Get a list of scores for the given game\r\nconst refreshScore = async () => {\r\n  await fetch(\r\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFC8bUMLOgFAV1KQTW8D/scores/',\r\n  ).then((res) => res.json().then((data) => {\r\n    const scoreChart = document.querySelector('.scores');\r\n    scoreChart.innerHTML = '';\r\n    let chart = '';\r\n\r\n    const fetched = data.result;\r\n    fetched.forEach((score) => {\r\n      chart += `<li><p>${score.user}: ${score.score}</p></li>`;\r\n    });\r\n    scoreChart.innerHTML = chart;\r\n  }));\r\n};\r\n\r\n// POST: Post a new Score for the given game\r\nconst addPost = async (e) => {\r\n  e.preventDefault();\r\n  const name = document.getElementById('name');\r\n  const score = document.getElementById('score');\r\n  const newScoreObject = new ScoreObject(name.value, score.value);\r\n  await fetch(\r\n    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFC8bUMLOgFAV1KQTW8D/scores/',\r\n    {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(newScoreObject),\r\n    },\r\n  ).then((res) => res.json().then((data) => data.result));\r\n  name.value = '';\r\n  score.value = '';\r\n};\r\n\r\naddInput.addEventListener('submit', addPost);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshScore);\n\n//# sourceURL=webpack://webpack-template/./src/modules/gameboard.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);