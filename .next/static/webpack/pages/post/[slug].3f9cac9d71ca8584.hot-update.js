"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].js":
/*!**********************************!*\
  !*** ./src/pages/post/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ \"./src/client.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.esm.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"min\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this));\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post === null || post === void 0 ? void 0 : post.title\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this));\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0M7QUFDYztBQUNIOztTQUV0Q0csTUFBTSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixNQUFNLENBQUNGLHdEQUFlLENBQUNGLGtEQUFNLEVBQUVLLEtBQUssQ0FBQ0QsTUFBTTtBQUM3QyxDQUFDO0FBRUQsR0FBSyxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsS0FBSyxFQUFFLENBQUM7UUFDTkYsS0FBSyxFQUFFLFFBQVEsUUFBTyxDQUFDO2dCQUFiRyxLQUFLLFNBQUxBLEtBQUs7Z0JBQ1JBLEdBQVk7WUFBakIsRUFBRSxJQUFHQSxLQUFLLGFBQUxBLEtBQUssS0FBTEEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLElBQUksQ0FBSkEsQ0FBWSxJQUFaQSxHQUFZLEdBQVpBLEtBQUssQ0FBRUMsS0FBSyxjQUFaRCxHQUFZLEtBQVpBLElBQUksQ0FBSkEsQ0FBWSxHQUFaQSxJQUFJLENBQUpBLENBQVksR0FBWkEsR0FBWSxDQUFFRSxJQUFJLEdBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDO1lBQ0QsTUFBTSw2RUFDSEMsQ0FBRztnQkFDRkMsR0FBRyxFQUFFSixLQUFLLENBQUNJLEdBQUcsSUFBSSxDQUFHO2dCQUNyQkMsT0FBTyxFQUFDLENBQU07Z0JBQ2RDLEdBQUcsRUFBRVgsTUFBTSxDQUFDSyxLQUFLLEVBQ2RPLEtBQUssQ0FBQyxHQUFHLEVBQ1RDLE1BQU0sQ0FBQyxHQUFHLEVBQ1ZDLEdBQUcsQ0FBQyxDQUFLLE1BQ1RDLElBQUksQ0FBQyxDQUFROzs7Ozs7UUFHdEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJO0lBQ2xCLEdBQUssVUFNREEsSUFBSSxDQUxOQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsQ0FBZSxpQ0FLckJELElBQUksQ0FKTkUsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLENBQWMsdUJBQ3JCQyxVQUFVLEdBR1JILElBQUksQ0FITkcsVUFBVSxFQUNWQyxXQUFXLEdBRVRKLElBQUksQ0FGTkksV0FBVyxVQUVUSixJQUFJLENBRE5LLElBQUksRUFBSkEsSUFBSSxzQkFBRyxDQUFDLENBQUM7SUFFWCxNQUFNLDZFQUNIQyxDQUFPOzt3RkFDTEMsQ0FBRTswQkFBRVAsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFFQyxLQUFLOzs7Ozs7d0ZBQ2ZwQiw2REFBWTtnQkFBQ08sS0FBSyxFQUFFaUIsSUFBSTtnQkFBRUcsVUFBVSxFQUFFdEIsWUFBWTs7Ozs7Ozs7Ozs7O0FBR3pELENBQUM7S0FkS2EsSUFBSTs7QUEyQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10uanM/ZThjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSlcbiAgICAgICAgICAgIC53aWR0aCgzMjApXG4gICAgICAgICAgICAuaGVpZ2h0KDI0MClcbiAgICAgICAgICAgIC5maXQoXCJtaW5cIilcbiAgICAgICAgICAgIC5hdXRvKFwiZm9ybWF0XCIpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXSxcbiAgfSA9IHBvc3Q7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3Bvc3Q/LnRpdGxlfTwvaDE+XG4gICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtib2R5fSBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9IC8+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucGFyYW1zO1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGBcbiAgICAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF1cbiAgYCxcbiAgICB7IHNsdWcgfVxuICApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiUG9ydGFibGVUZXh0IiwiaW1hZ2VVcmxCdWlsZGVyIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].js\n");

/***/ })

});