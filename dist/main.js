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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nclass Scores {\r\n    static scoreList = [];\r\n  \r\n    constructor(user, score) {\r\n      this.user = user;\r\n      this.score = score;\r\n    }\r\n  }\r\n\r\nconst points = document.querySelector('.scores')\r\nconst refresh = document.querySelector('.refresh')\r\nconst submitBtn = document.querySelector('.submit-button')\r\n\r\n\r\n\r\n\r\n\r\n// New Game\r\nlet id = ''\r\nasync function genIdentifier(){\r\n    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {\r\n        method: 'POST', \r\n        headers: { 'Content-type': 'application/JSON' },\r\n        body: JSON.stringify({\r\n            name: \"My cool new game\",\r\n        }),\r\n    })\r\n    .then((res)=> res.json().then((data)=>{\r\n        id = data.result\r\n     \r\n    })) \r\n    \r\n}\r\ngenIdentifier()\r\n\r\nsubmitBtn.addEventListener('click', (e)=>{\r\n    e.preventDefault()\r\n    async () => {\r\n        const name = document.getElementById('name');\r\n        const score = document.getElementById('score');\r\n        const newScore = new Scores(name.value, score.value);\r\n        await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${uniqueIdentifier}/scores/`, {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json',\r\n          },\r\n          body: JSON.stringify(newScore),\r\n        }).then((res) => res.json().then((data) => data.resut));\r\n        name.value = '';\r\n        score.value = '';\r\n    }\r\n    \r\n})\r\n\r\nrefresh.addEventListener('click', ()=>{\r\n    async () => {\r\n        await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${uniqueIdentifier}/scores/`).then((res) => res.json().then((data) => {\r\n          points.innerHTML = '';\r\n          let pointers = '';\r\n          data.result.forEach((score) => {\r\n            pointers += `<li class=\"score\"><p class=\"name\">${score.user}: ${score.score}</p></li>`;\r\n          });\r\n          points.innerHTML = pointers;\r\n        }));\r\n      };\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);