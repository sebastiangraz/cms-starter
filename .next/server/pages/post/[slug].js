"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"rvinztqt\",\n  // you can find this in sanity.json\n  dataset: \"production\",\n  // or the name you chose in step 1\n  useCdn: false // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxpRUFBZUEscURBQVksQ0FBQztBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsRUFBQUEsT0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLEVBQUFBLE1BQU0sRUFBRSxLQUhrQixDQUdYOztBQUhXLENBQUQsQ0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXMtc3RhcnRlci8uL3NyYy9jbGllbnQuanM/NGI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQuanNcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogXCJydmluenRxdFwiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IGZhbHNlLCAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXG59KTtcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client.js\n");

/***/ }),

/***/ "./src/pages/post/[slug].js":
/*!**********************************!*\
  !*** ./src/pages/post/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client.js */ \"./src/client.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_portabletext_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui/jsx-dev-runtime */ \"theme-ui/jsx-dev-runtime\");\n/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\";\n\n/** @jsxImportSource theme-ui */\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).image(source);\n}\n\nconst ptComponents = {\n  types: {\n    image: ({\n      value\n    }) => {\n      var _value$asset;\n\n      if (!(value !== null && value !== void 0 && (_value$asset = value.asset) !== null && _value$asset !== void 0 && _value$asset._ref)) {\n        return null;\n      }\n\n      return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n        style: {\n          width: 400\n        },\n        alt: value.alt || \" \",\n        loading: \"lazy\",\n        src: urlFor(value).width(800).fit(\"clip\").auto(\"format\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined);\n    }\n  }\n};\n\nconst Post = ({\n  post\n}) => {\n  const {\n    title = \"Missing title\",\n    name = \"Missing name\",\n    categories,\n    authorImage,\n    body = []\n  } = post;\n  return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    sx: {\n      variant: \"layout.row\"\n    },\n    children: (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"article\", {\n      children: [(0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: post === null || post === void 0 ? void 0 : post.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_1__.PortableText, {\n        value: body,\n        components: ptComponents\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  const paths = await _client_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n  return {\n    paths: paths.map(slug => ({\n      params: {\n        slug\n      }\n    })),\n    fallback: true\n  };\n}\nasync function getStaticProps(context) {\n  // It's important to default the slug so that it doesn't return \"undefined\"\n  const {\n    slug = \"\"\n  } = context.params;\n  const post = await _client_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`\n    *[_type == \"post\" && slug.current == $slug][0]\n  `, {\n    slug\n  });\n  return {\n    props: {\n      post\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNHLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3RCLFNBQU9GLHdEQUFlLENBQUNGLGtEQUFELENBQWYsQ0FBd0JLLEtBQXhCLENBQThCRCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEYsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRUcsTUFBQUE7QUFBRixLQUFELEtBQWU7QUFBQTs7QUFDcEIsVUFBSSxFQUFDQSxLQUFELGFBQUNBLEtBQUQsK0JBQUNBLEtBQUssQ0FBRUMsS0FBUix5Q0FBQyxhQUFjQyxJQUFmLENBQUosRUFBeUI7QUFDdkIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFDRTtBQUNFLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQURUO0FBRUUsV0FBRyxFQUFFSCxLQUFLLENBQUNJLEdBQU4sSUFBYSxHQUZwQjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsV0FBRyxFQUFFVCxNQUFNLENBQUNLLEtBQUQsQ0FBTixDQUNGRyxLQURFLENBQ0ksR0FESixFQUVGRSxHQUZFLENBRUUsTUFGRixFQUdGQyxJQUhFLENBR0csUUFISDtBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFXRDtBQWhCSTtBQURZLENBQXJCOztBQXFCQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBYztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLEtBQUssR0FBRyxlQURKO0FBRUpDLElBQUFBLElBQUksR0FBRyxjQUZIO0FBR0pDLElBQUFBLFVBSEk7QUFJSkMsSUFBQUEsV0FKSTtBQUtKQyxJQUFBQSxJQUFJLEdBQUc7QUFMSCxNQU1GTCxJQU5KO0FBT0EsU0FDRTtBQUFLLE1BQUUsRUFBRTtBQUFFTSxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFUO0FBQUEsY0FDRTtBQUFBLGlCQUNFO0FBQUEsa0JBQUtOLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxpRUFBQyw2REFBRDtBQUFjLGFBQUssRUFBRUksSUFBckI7QUFBMkIsa0JBQVUsRUFBRWY7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQWhCRDs7QUFrQk8sZUFBZWlCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsS0FBSyxHQUFHLE1BQU14Qix3REFBQSxDQUNqQiw0REFEaUIsQ0FBcEI7QUFJQSxTQUFPO0FBQ0x3QixJQUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0UsR0FBTixDQUFXQyxJQUFELEtBQVc7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUVELFFBQUFBO0FBQUY7QUFBVixLQUFYLENBQVYsQ0FERjtBQUVMRSxJQUFBQSxRQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QztBQUNBLFFBQU07QUFBRUosSUFBQUEsSUFBSSxHQUFHO0FBQVQsTUFBZ0JJLE9BQU8sQ0FBQ0gsTUFBOUI7QUFDQSxRQUFNWixJQUFJLEdBQUcsTUFBTWhCLHdEQUFBLENBQ2hCO0FBQ0w7QUFDQSxHQUhxQixFQUlqQjtBQUFFMkIsSUFBQUE7QUFBRixHQUppQixDQUFuQjtBQU1BLFNBQU87QUFDTEssSUFBQUEsS0FBSyxFQUFFO0FBQ0xoQixNQUFBQTtBQURLO0FBREYsR0FBUDtBQUtEO0FBRUQsaUVBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbXMtc3RhcnRlci8uL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS5qcz9lOGM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIHRoZW1lLXVpICovXG5cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0MDAgfX1cbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpXG4gICAgICAgICAgICAud2lkdGgoODAwKVxuICAgICAgICAgICAgLmZpdChcImNsaXBcIilcbiAgICAgICAgICAgIC5hdXRvKFwiZm9ybWF0XCIpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXSxcbiAgfSA9IHBvc3Q7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzeD17eyB2YXJpYW50OiBcImxheW91dC5yb3dcIiB9fT5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDE+e3Bvc3Q/LnRpdGxlfTwvaDE+XG4gICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdXG4gIGAsXG4gICAgeyBzbHVnIH1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIlBvcnRhYmxlVGV4dCIsImltYWdlVXJsQnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsIndpZHRoIiwiYWx0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsInZhcmlhbnQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].js\n");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@portabletext/react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "theme-ui/jsx-dev-runtime":
/*!*******************************************!*\
  !*** external "theme-ui/jsx-dev-runtime" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("theme-ui/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();