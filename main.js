/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTab\": () => (/* binding */ contactTab)\n/* harmony export */ });\nconst contactTab = (() =>{\n    const funcCont = () => {\n\n    const content = document.querySelector('#content');\n\n    const contactdiv = document.createElement('div');\n    contactdiv.setAttribute('id','contact');\n    // contactdiv.style.backgroundImage = 'url(\"dist/kitchen.jpg\")';\n    \n    content.appendChild(contactdiv);\n\n    const contactCard = document.createElement('div')\n    contactCard.setAttribute('id','cont-card')\n    contactCard.textContent = 'Call: XXXX-XXX-XXX'\n    \n    contactdiv.appendChild(contactCard);\n    }\n    return{funcCont}\n})();\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomeTab\": () => (/* binding */ createHomeTab)\n/* harmony export */ });\nconst createHomeTab = (() => {\n\n    const funcHome = () => {\n    const content = document.querySelector('#content')\n\n    const homeTab = document.createElement('div')\n    homeTab.setAttribute('id','hometab')\n    homeTab.style.backgroundImage = 'url(kitchen.jpg)';\n    \n    content.appendChild(homeTab)\n\n    const midCont = document.createElement('div');\n    midCont.setAttribute('id','mid');\n    homeTab.appendChild(midCont)\n\n    const about = document.createElement('p')\n    about.innerHTML = 'THIS IS A GREAT RESTAURANT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat viverra sapien eu facilisis. Suspendisse convallis convallis neque eu mattis. Curabitur diam tellus, aliquet sit amet euismod id, euismod id sapien. Maecenas varius dui eget tellus eleifend, suscipit dignissim est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac odio ac diam molestie tempor vel sed diam. Proin molestie et dui vitae fermentum. Donec tincidunt egestas pulvinar. Cras in dolor in tellus luctus laoreet non at eros. Fusce vitae tempor lorem. '\n    about.setAttribute('id','abttxt')\n\n    midCont.appendChild(about)\n    \n    }\n    return {funcHome}\n})();\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\nconst content = document.querySelector('#content');\n\n\n\n\n\nconst homePage = (() => {\n\n    const createHeadd = (() => {\n    const header = document.createElement('div')\n    header.setAttribute('id','header')\n\n    content.appendChild(header)\n\n    const nameText = document.createElement('p');\n    nameText.innerHTML = 'Restaurant';\n    nameText.setAttribute('class','text')\n\n    header.appendChild(nameText)\n    })();\n\n    const createNavbar = (() => {\n        const navbar = document.createElement('div');\n        navbar.setAttribute('id','navbar');\n\n        content.appendChild(navbar)\n\n        const createButton = (name) =>{\n            const button = document.createElement('button')\n            button.setAttribute('id',String(name));\n            button.textContent = name;\n\n            navbar.appendChild(button)\n        }\n\n        createButton('Home');\n        createButton('Menu');\n        createButton('Contact');\n\n    })();    \n\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.createHomeTab.funcHome();\n\n    const homebtn = document.getElementById('Home');\n    const menubtn = document.getElementById('Menu');\n    const contactbtn = document.getElementById('Contact');\n    \n    homebtn.addEventListener('click',() => {\n        content.removeChild(content.childNodes[2]);\n        _home_js__WEBPACK_IMPORTED_MODULE_1__.createHomeTab.funcHome();\n        homebtn.style.backgroundColor = 'rgb(206, 206, 206)';\n        menubtn.style.backgroundColor = 'rgb(80, 233, 220)';\n        contactbtn.style.backgroundColor = 'rgb(80, 233, 220)';\n    })\n\n    menubtn.addEventListener('click',() => {\n        content.removeChild(content.childNodes[2]);\n        _menu_js__WEBPACK_IMPORTED_MODULE_2__.menuTab.funcMenu();\n        homebtn.style.backgroundColor = 'rgb(80, 233, 220)';\n        menubtn.style.backgroundColor = 'rgb(206, 206, 206)';\n        contactbtn.style.backgroundColor = 'rgb(80, 233, 220)';\n    })\n\n    contactbtn.addEventListener('click',() => {\n        content.removeChild(content.childNodes[2]);\n        _contact_js__WEBPACK_IMPORTED_MODULE_0__.contactTab.funcCont();\n        homebtn.style.backgroundColor = 'rgb(80, 233, 220) ';\n        menubtn.style.backgroundColor = 'rgb(80, 233, 220) ';\n        contactbtn.style.backgroundColor = 'rgb(206, 206, 206)';\n    })\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab)\n/* harmony export */ });\nconst menuTab = (() => {\n\n    const funcMenu = () => {\n    const content = document.querySelector('#content')\n    \n    const menu = document.createElement('div');\n    menu.setAttribute('id','menu');\n\n    content.appendChild(menu)\n\n    const menuContent = document.createElement('div');\n    menuContent.setAttribute('class','menucard-container');\n\n    menu.appendChild(menuContent)\n    \n    const createCard = (image,name, description) => {\n        const card = document.createElement('div');\n        card.setAttribute('id',String(name));\n        card.setAttribute('class','card');\n\n        const img = document.createElement('img');\n        img.setAttribute('class','image');\n        img.src = String(image)\n        \n        const descTitle = document.createElement('div')\n        descTitle.setAttribute('class','name')\n        descTitle.textContent = name;\n\n        const desc = document.createElement('div')\n        desc.setAttribute('class','info')\n        desc.textContent = description;\n\n        menuContent.appendChild(card);\n        card.appendChild(img);\n        card.appendChild(descTitle);\n        card.appendChild(desc)\n\n    }\n\n    const menuDish = [{imgUrl:'/dist/images/Chicken-Shawarma.jpg', dishName:'shawarma',desc:'this is the best thing you will ever eat'},\n    {imgUrl:'/dist/images/Greek-salad.jpg',dishName:'Greek Salad',desc:'Greek is a delicious classic combo of various veggies and feta cheese'},\n    {imgUrl:'/dist/images/turkey.jpeg',dishName:'The perfect Turkey',desc:'This deliciouly roasted turkey is the mesl of your dreams with its rich flavor and texture'},\n    {imgUrl:'/dist/images/cappuccino.jpg',dishName:'Cappucino',desc:'A traditional cappuccino has an even distribution of espresso, steamed milk, and foamed milk with a rich creamy taste'},\n]\n\n    for(const i in menuDish){\n        createCard(menuDish[i].imgUrl,menuDish[i].dishName,menuDish[i].desc)\n    }\n\n    }\n\n    return{funcMenu}\n})();\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;