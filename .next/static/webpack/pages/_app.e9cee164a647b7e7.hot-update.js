"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui/jsx-dev-runtime */ \"./node_modules/theme-ui/jsx-dev-runtime/dist/theme-ui-jsx-dev-runtime.esm.js\");\nvar _jsxFileName = \"/Users/graz/d/cms-starter/src/components/nav.js\";\n\n\nconst navStyle = {\n  borderBottom: \"1px solid\"\n};\nconst navWrapper = {\n  height: 8,\n  justifyContent: \"space-between\",\n  display: \"flex\",\n  alignItems: \"center\",\n  width: \"100%\",\n  variant: \"layout.row\"\n};\nconst linkGroup = {\n  \"> * + *\": {\n    pl: 3\n  }\n};\n\nconst Nav = () => {\n  return (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n    sx: navStyle,\n    children: (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      sx: navWrapper,\n      children: [(0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        children: \"Logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        sx: linkGroup,\n        children: [(0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: \"/\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, undefined), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: \"/about\",\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined), (0,theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: \"/blog\",\n          children: \"Blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsWUFBWSxFQUFFO0FBREMsQ0FBakI7QUFHQSxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLEVBQUFBLE1BQU0sRUFBRSxDQURTO0FBRWpCQyxFQUFBQSxjQUFjLEVBQUUsZUFGQztBQUdqQkMsRUFBQUEsT0FBTyxFQUFFLE1BSFE7QUFJakJDLEVBQUFBLFVBQVUsRUFBRSxRQUpLO0FBS2pCQyxFQUFBQSxLQUFLLEVBQUUsTUFMVTtBQU1qQkMsRUFBQUEsT0FBTyxFQUFFO0FBTlEsQ0FBbkI7QUFRQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEIsYUFBVztBQUNUQyxJQUFBQSxFQUFFLEVBQUU7QUFESztBQURLLENBQWxCOztBQUtBLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFNBQ0U7QUFBSyxNQUFFLEVBQUVYLFFBQVQ7QUFBQSxjQUNFO0FBQUssUUFBRSxFQUFFRSxVQUFUO0FBQUEsaUJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFLLFVBQUUsRUFBRU8sU0FBVDtBQUFBLG1CQUNFLGlFQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRSxpRUFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0UsaUVBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FiRDs7S0FBTUU7QUFlTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXYuanM/M2JhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IG5hdlN0eWxlID0ge1xuICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkXCIsXG59O1xuY29uc3QgbmF2V3JhcHBlciA9IHtcbiAgaGVpZ2h0OiA4LFxuICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIHZhcmlhbnQ6IFwibGF5b3V0LnJvd1wiLFxufTtcbmNvbnN0IGxpbmtHcm91cCA9IHtcbiAgXCI+ICogKyAqXCI6IHtcbiAgICBwbDogMyxcbiAgfSxcbn07XG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBzeD17bmF2U3R5bGV9PlxuICAgICAgPGRpdiBzeD17bmF2V3JhcHBlcn0+XG4gICAgICAgIDxzcGFuPkxvZ288L3NwYW4+XG4gICAgICAgIDxkaXYgc3g9e2xpbmtHcm91cH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5CbG9nPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJuYXZTdHlsZSIsImJvcmRlckJvdHRvbSIsIm5hdldyYXBwZXIiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJ2YXJpYW50IiwibGlua0dyb3VwIiwicGwiLCJOYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/nav.js\n");

/***/ })

});