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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_slider_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider-services */ \"./modules/slider-services.js\");\n/* harmony import */ var _modules_sendForm1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm1 */ \"./modules/sendForm1.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n//sendForm();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider_services__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm1__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const accordeonBlock = document.querySelector(\".accordeon\");\r\n  const accorItems = accordeonBlock.querySelectorAll(\".element\");\r\n  const accorText = accordeonBlock.querySelectorAll(\".element-content\");\r\n\r\n  accorText.forEach((block, index) => {\r\n    if (accorItems[index] != accorItems[0]) {\r\n      block.style.transition = \"all .5s\";\r\n      block.style.overflow = \"hidden\";\r\n      block.style.maxHeight = \"0px\";\r\n      block.style.padding = \"0 20px\";\r\n      block.style.display = \"block\";\r\n    }\r\n  });\r\n\r\n  accorItems.forEach((elem) => {\r\n    const descr = elem.querySelector(\".element-content\");\r\n\r\n    elem.addEventListener(\"click\", () => {\r\n      accorText.forEach((tab, index) => {\r\n        if (tab == descr && accorItems[index].classList.contains(\"active\")) {\r\n          accorItems[index].classList.remove(\"active\");\r\n          accorItems[index].style.paddingBottom = \"0px\";\r\n          tab.style.transition = \"all .5s\";\r\n          tab.style.overflow = \"hidden\";\r\n          tab.style.maxHeight = \"0px\";\r\n          tab.style.padding = \"0 20px\";\r\n          tab.style.display = \"block\";\r\n        } else if (tab == descr) {\r\n          accorItems[index].classList.add(\"active\");\r\n          accorItems[index].style.paddingBottom = \"20px\";\r\n          tab.style.padding = \"20px 20px 0\";\r\n          tab.style.maxHeight = tab.scrollHeight + 20 + \"px\";\r\n        } else {\r\n          accorItems[index].classList.remove(\"active\");\r\n          accorItems[index].style.paddingBottom = \"0px\";\r\n          tab.style.transition = \"all .5s\";\r\n          tab.style.overflow = \"hidden\";\r\n          tab.style.maxHeight = \"0px\";\r\n          tab.style.padding = \"0 20px\";\r\n          tab.style.display = \"block\";\r\n        }\r\n      });\r\n    });\r\n\r\n    /* elem.addEventListener(\"click\", () => {\r\n      accorText.forEach((tab, index) => {\r\n        if (tab == descr) {\r\n          accorItems[index].classList.add(\"active\");\r\n          accorItems[index].style.paddingBottom = \"20px\";\r\n          tab.style.padding = \"20px 20px 0\";\r\n          tab.style.maxHeight = tab.scrollHeight + 20 + \"px\";\r\n        } else {\r\n          accorItems[index].classList.remove(\"active\");\r\n          accorItems[index].style.paddingBottom = \"0px\";\r\n          tab.style.transition = \"all .3s\";\r\n          tab.style.overflow = \"hidden\";\r\n          tab.style.maxHeight = \"0px\";\r\n          tab.style.padding = \"0 20px\";\r\n          tab.style.display = \"block\";\r\n        }\r\n      });\r\n    }); */\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const callbackBtn = document.querySelectorAll(\".callback-btn\");\r\n  const modalCallback = document.querySelector(\".modal-callback\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  callbackBtn.forEach((elem) => {\r\n    elem.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      modalCallback.style.display = \"block\";\r\n      modalOverlay.style.display = \"block\";\r\n    });\r\n  });\r\n\r\n  body.addEventListener(\"click\", (e) => {\r\n    if (\r\n      e.target.closest(\".modal-close\") ||\r\n      e.target.classList.contains(\"modal-overlay\")\r\n    ) {\r\n      modalCallback.style.display = \"none\";\r\n      modalOverlay.style.display = \"none\";\r\n    }\r\n\r\n    if (\r\n      e.target.matches(\"a[href='#feedback'\") ||\r\n      e.target.closest(\".fancyboxModal\")\r\n    ) {\r\n      modalCallback.style.display = \"block\";\r\n      modalOverlay.style.display = \"block\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const inputs = form.querySelectorAll(\"input[type='text']\");\r\n\r\n  const inputName = form.querySelector(\"input[name='fio']\");\r\n  const inputTel = form.querySelector(\"input[name='tel']\");\r\n\r\n  const regexpText = /[^а-яА-я- ]/;\r\n  const regexpTel = /[^\\d+]/;\r\n\r\n  const message = {\r\n    loading: \"Зашрузка...\",\r\n    success: \"Спасибо! С вами свяжутся!\",\r\n    failure: \"Что-то пошло не так...\",\r\n  };\r\n\r\n  let namelVal;\r\n  let telVal;\r\n\r\n  const validateName = (name) => {\r\n    let reg = /^([А-Яа-я]{1}[А-Яа-я ]{1,})$/;\r\n    return reg.test(String(name));\r\n  };\r\n\r\n  const validateTel = (tel) => {\r\n    let reg = /^([\\+]{0,1}[\\d]{6,16})$/;\r\n    return reg.test(String(tel));\r\n  };\r\n\r\n  const clearInputs = () => {\r\n    inputs.forEach((elem) => {\r\n      elem.value = \"\";\r\n    });\r\n  };\r\n\r\n  const postData = async (url, data) => {\r\n    document.querySelector(\".status\").textContent = message.loading;\r\n\r\n    let res = await fetch(url, {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    });\r\n\r\n    return await res.json();\r\n  };\r\n\r\n  inputName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n    namelVal = inputName.value;\r\n    inputName.classList.remove(\"error\");\r\n  });\r\n\r\n  inputTel.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n    telVal = inputTel.value;\r\n    inputTel.classList.remove(\"error\");\r\n  });\r\n\r\n  try {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!validateName(namelVal)) {\r\n        inputName.classList.add(\"error\");\r\n      }\r\n\r\n      if (!validateTel(telVal)) {\r\n        inputTel.classList.add(\"error\");\r\n      }\r\n\r\n      const statusMess = document.createElement(\"div\");\r\n      statusMess.classList.add(\"status\");\r\n      form.append(statusMess);\r\n\r\n      const formData = new FormData(form);\r\n      const formBody = {};\r\n\r\n      formData.forEach((val, key) => {\r\n        formBody[key] = val;\r\n      });\r\n\r\n      if (\r\n        inputName.classList.contains(\"error\") ||\r\n        inputTel.classList.contains(\"error\")\r\n      ) {\r\n        statusMess.textContent = message.failure;\r\n        setTimeout(() => {\r\n          statusMess.remove();\r\n        }, 5000);\r\n      } else {\r\n        postData(\r\n          /* \"dist/server.php\" */ \"https://jsonplaceholder.typicode.com/posts\",\r\n          formBody\r\n        )\r\n          .then((res) => {\r\n            statusMess.textContent = message.success;\r\n          })\r\n          .catch((error) => {\r\n            statusMess.textContent = message.failure;\r\n          })\r\n          .finally(() => {\r\n            clearInputs();\r\n            setTimeout(() => {\r\n              statusMess.remove();\r\n            }, 5000);\r\n          });\r\n      }\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sendForm1.js":
/*!******************************!*\
  !*** ./modules/sendForm1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm1 = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const inputs = form.querySelectorAll(\"input[type='text']\");\r\n\r\n  const inputName = form.querySelector(\"input[name='fio']\");\r\n  const inputTel = form.querySelector(\"input[name='tel']\");\r\n\r\n  const regexpText = /[^а-яА-я- ]/;\r\n  const regexpTel = /[^\\d+]/;\r\n\r\n  let namelVal;\r\n  let telVal;\r\n\r\n  const message = {\r\n    loading: \"Зашрузка...\",\r\n    success: \"Спасибо! С вами свяжутся!\",\r\n    failure: \"Что-то пошло не так...\",\r\n  };\r\n\r\n  const validateName = (name) => {\r\n    let reg = /^([А-Яа-я]{1}[А-Яа-я ]{1,})$/;\r\n    return reg.test(String(name));\r\n  };\r\n\r\n  const validateTel = (tel) => {\r\n    let reg = /^([\\+]{0,1}[\\d]{6,16})$/;\r\n    return reg.test(String(tel));\r\n  };\r\n\r\n  const clearInputs = () => {\r\n    inputs.forEach((elem) => {\r\n      elem.value = \"\";\r\n    });\r\n  };\r\n\r\n  const postData = async (url, data) => {\r\n    document.querySelector(\".status\").textContent = message.loading;\r\n\r\n    let res = await fetch(url, {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    });\r\n\r\n    return await res.json();\r\n  };\r\n\r\n  inputName.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpText, \"\");\r\n    namelVal = inputName.value;\r\n    inputName.classList.remove(\"error\");\r\n  });\r\n\r\n  inputTel.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regexpTel, \"\");\r\n    telVal = inputTel.value;\r\n    inputTel.classList.remove(\"error\");\r\n  });\r\n\r\n  inputName.addEventListener(\"invalid\", (e) => {\r\n    e.preventDefault();\r\n    if (!validateName(namelVal)) {\r\n      inputName.classList.add(\"error\");\r\n      inputName.setCustomValidity(\"Ошибка в телефоне\");\r\n    }\r\n  });\r\n\r\n  inputTel.addEventListener(\"invalid\", (e) => {\r\n    e.preventDefault();\r\n    if (!validateTel(telVal)) {\r\n      inputTel.classList.add(\"error\");\r\n      inputName.setCustomValidity(\"Ошибка в имени\");\r\n    }\r\n  });\r\n\r\n  try {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      const statusMess = document.createElement(\"div\");\r\n      statusMess.classList.add(\"status\");\r\n      form.append(statusMess);\r\n\r\n      const formData = new FormData(form);\r\n      const formBody = {};\r\n\r\n      formData.forEach((val, key) => {\r\n        formBody[key] = val;\r\n      });\r\n\r\n      if (\r\n        inputName.classList.contains(\"error\") ||\r\n        inputTel.classList.contains(\"error\")\r\n      ) {\r\n        statusMess.textContent = message.failure;\r\n        setTimeout(() => {\r\n          statusMess.remove();\r\n        }, 5000);\r\n      } else {\r\n        postData(\"https://jsonplaceholder.typicode.com/posts\", formBody)\r\n          .then((res) => {\r\n            statusMess.textContent = message.success;\r\n          })\r\n          .catch((error) => {\r\n            statusMess.textContent = message.failure;\r\n          })\r\n          .finally(() => {\r\n            clearInputs();\r\n            setTimeout(() => {\r\n              statusMess.remove();\r\n            }, 5000);\r\n          });\r\n      }\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm1);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm1.js?");

/***/ }),

/***/ "./modules/slider-services.js":
/*!************************************!*\
  !*** ./modules/slider-services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderServices = () => {\r\n  const servicesCarousel = document.querySelector(\".services-carousel\");\r\n  const servicesElements = document.querySelector(\".services-elements\");\r\n  const servicesItems = servicesCarousel.querySelectorAll(\".col-md-4\");\r\n  const servicesArrow = document.querySelector(\".services-arrow\");\r\n\r\n  let sumItems = 3;\r\n  let offset = 0;\r\n  let offsetWidth;\r\n  let sliderStop;\r\n\r\n  servicesCarousel.style.display = \"flex\";\r\n  servicesCarousel.style.position = \"relative\";\r\n  servicesCarousel.style.transition = \"all 0.3s ease 0s\";\r\n  servicesCarousel.style.left = \"0px\";\r\n  servicesElements.style.overflow = \"hidden\";\r\n\r\n  servicesItems.forEach((item) => {\r\n    item.style.minWidth = \"33.333%\";\r\n    offsetWidth = item.offsetWidth;\r\n\r\n    if (document.documentElement.clientWidth <= 992) {\r\n      item.style.minWidth = \"50%\";\r\n      offsetWidth = item.offsetWidth;\r\n      sumItems = 2;\r\n    }\r\n\r\n    if (document.documentElement.clientWidth <= 576) {\r\n      item.style.minWidth = \"100%\";\r\n      offsetWidth = item.offsetWidth;\r\n      sumItems = 1;\r\n    }\r\n  });\r\n\r\n  const prevSlide = (elem) => {\r\n    elem.style.left = -offset + \"px\";\r\n  };\r\n\r\n  const nextSlide = (elem) => {\r\n    elem.style.left = -offset + \"px\";\r\n  };\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    servicesItems.forEach((item) => {\r\n      item.style.minWidth = \"33.333%\";\r\n      offsetWidth = item.offsetWidth;\r\n\r\n      if (document.documentElement.clientWidth <= 992) {\r\n        item.style.minWidth = \"50%\";\r\n        offsetWidth = item.offsetWidth;\r\n        sumItems = 2;\r\n      }\r\n\r\n      if (document.documentElement.clientWidth <= 576) {\r\n        item.style.minWidth = \"100%\";\r\n        offsetWidth = item.offsetWidth;\r\n        sumItems = 1;\r\n      }\r\n    });\r\n  });\r\n\r\n  sliderStop = (servicesItems.length - sumItems) * offsetWidth;\r\n\r\n  servicesArrow.addEventListener(\"click\", (e) => {\r\n    if (e.target.matches(\".arrow-left\")) {\r\n      offset -= +offsetWidth;\r\n\r\n      if (offset < 0) {\r\n        offset = sliderStop;\r\n      }\r\n\r\n      prevSlide(servicesCarousel);\r\n    } else if (e.target.matches(\".arrow-right\")) {\r\n      offset += +offsetWidth;\r\n\r\n      if (offset > sliderStop) {\r\n        offset = 0;\r\n      }\r\n\r\n      nextSlide(servicesCarousel);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\r\n\n\n//# sourceURL=webpack:///./modules/slider-services.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".top-slider\");\r\n  const sliderItems = sliderBlock.querySelectorAll(\".item\");\r\n  const sliderTable = sliderBlock.querySelectorAll(\".table\");\r\n\r\n  const portfolioDots = document.querySelector(\".slick-dots\");\r\n  const newArrDots = [];\r\n\r\n  let currentIndex = 0;\r\n  let dots;\r\n\r\n  const createDots = () => {\r\n    for (let i = 0; i < sliderItems.length; i++) {\r\n      const newDot = document.createElement(\"li\");\r\n      newDot.classList.add(\"dot\");\r\n      newArrDots[i] = newDot;\r\n      portfolioDots.append(newArrDots[i]);\r\n    }\r\n    newArrDots[0].classList.add(\"slick-active\");\r\n    dots = document.querySelectorAll(\".dot\");\r\n\r\n    dots.forEach((dot, index) => {\r\n      dot.addEventListener(\"click\", () => {\r\n        currentIndex = index;\r\n        sliderMove();\r\n      });\r\n    });\r\n  };\r\n\r\n  const sliderMove = () => {\r\n    if (currentIndex < sliderItems.length) {\r\n      sliderItems.forEach((item, index) => {\r\n        item.style.order = \"0\";\r\n        item.style.opacity = \"0\";\r\n        sliderTable[index].classList.remove(\"active\");\r\n      });\r\n    } else {\r\n      currentIndex = 0;\r\n\r\n      sliderItems.forEach((item, index) => {\r\n        item.style.order = \"0\";\r\n        item.style.opacity = \"0\";\r\n        sliderTable[index].classList.remove(\"active\");\r\n      });\r\n    }\r\n\r\n    sliderItems[currentIndex].style.opacity = \"1\";\r\n    sliderItems[currentIndex].style.order = \"-1\";\r\n    sliderTable[currentIndex].classList.add(\"active\");\r\n    dots.forEach((dot) => {\r\n      dot.classList.remove(\"slick-active\");\r\n    });\r\n    dots[currentIndex].classList.add(\"slick-active\");\r\n    currentIndex++;\r\n  };\r\n\r\n  portfolioDots.style.zIndex = \"15\";\r\n  sliderBlock.style.display = \"flex\";\r\n  sliderBlock.style.flexDirection = \"column\";\r\n\r\n  sliderItems.forEach((item) => {\r\n    item.style.minHeight = sliderBlock.clientHeight + \"px\";\r\n    item.style.opacity = \"0\";\r\n    item.style.transition = \"all .5s\";\r\n  });\r\n\r\n  setInterval(() => {\r\n    sliderMove();\r\n  }, 3000);\r\n\r\n  createDots();\r\n  sliderMove();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const menuBtnAll = document.querySelectorAll(\".top-menu a\");\r\n  const btnScrollTop = document.querySelector(\".up\");\r\n\r\n  btnScrollTop.style.display = \"none\";\r\n\r\n  menuBtnAll.forEach((elem) => {\r\n    elem.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n\r\n      const section = document.querySelector(elem.getAttribute(\"href\"));\r\n\r\n      if (section) {\r\n        section.scrollIntoView({\r\n          behavior: \"smooth\",\r\n          block: \"start\",\r\n          inline: \"center\",\r\n        });\r\n      }\r\n    });\r\n  });\r\n\r\n  window.addEventListener(\"scroll\", () => {\r\n    let scrennHeight = document.documentElement.clientHeight;\r\n    let coords = window.pageYOffset;\r\n\r\n    if (scrennHeight > coords) {\r\n      btnScrollTop.style.display = \"none\";\r\n    } else if (scrennHeight < coords) {\r\n      btnScrollTop.style.display = \"block\";\r\n    }\r\n  });\r\n\r\n  btnScrollTop.addEventListener(\"click\", () => {\r\n    const html = document.querySelector(\"html\");\r\n    html.style.scrollBehavior = \"smooth\";\r\n    document.documentElement.scrollTop = 0;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;