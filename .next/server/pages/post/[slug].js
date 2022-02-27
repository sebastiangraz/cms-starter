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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"rvinztqt\",\n    dataset: \"production\",\n    useCdn: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQVk7QUFDNkI7QUFFekMsaUVBQWVBLHFEQUFZLENBQUMsQ0FBQztJQUMzQkMsU0FBUyxFQUFFLENBQVU7SUFDckJDLE9BQU8sRUFBRSxDQUFZO0lBQ3JCQyxNQUFNLEVBQUUsS0FBSztBQUNmLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY21zLXN0YXJ0ZXIvLi9zcmMvY2xpZW50LmpzPzRiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwicnZpbnp0cXRcIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiBmYWxzZSwgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSk7XG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client.js\n");

/***/ }),

/***/ "./src/pages/post/[slug].js":
/*!**********************************!*\
  !*** ./src/pages/post/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ \"./src/client.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    width: 400\n                },\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(800).fit(\"clip\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined));\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[] ,  } = post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post === null || post === void 0 ? void 0 : post.title\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/graz/d/cms-starter/src/pages/post/[slug].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getStaticPaths() {\n    const paths = await _client_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`\n    *[_type == \"post\" && slug.current == $slug][0]\n  `, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Ntcy1zdGFydGVyLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLmpzP2U4YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNDAwIH19XG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKVxuICAgICAgICAgICAgLndpZHRoKDgwMClcbiAgICAgICAgICAgIC5maXQoXCJjbGlwXCIpXG4gICAgICAgICAgICAuYXV0byhcImZvcm1hdFwiKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBib2R5ID0gW10sXG4gIH0gPSBwb3N0O1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPntwb3N0Py50aXRsZX08L2gxPlxuICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17Ym9keX0gY29tcG9uZW50cz17cHRDb21wb25lbnRzfSAvPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdXG4gIGAsXG4gICAgeyBzbHVnIH1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIlBvcnRhYmxlVGV4dCIsImltYWdlVXJsQnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsInN0eWxlIiwid2lkdGgiLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsImNvbXBvbmVudHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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