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

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst core = [2, 4, 6, 8, 12, 16, 24, 32, 40, 56, 72, 96, 120];\nconst coreAmplified = core.map(e => e * 2);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  spacing: core,\n  sizes: coreAmplified,\n  fontSizes: coreAmplified,\n  breakpoints: [\"40em\", \"64em\", \"120em\"],\n  fonts: {\n    body: \"system-ui, sans-serif\",\n    heading: '\"Avenir Next\", sans-serif',\n    monospace: \"Menlo, monospace\"\n  },\n  colors: {\n    text: \"#000\",\n    background: \"beige\",\n    primary: \"#33e\"\n  },\n  styles: {\n    root: {\n      bg: \"background\",\n      \"-webkit-font-smoothing\": \"antialiased\",\n      \"-moz-osx-font-smoothing\": \"grayscale\",\n      fontFamily: \"monospace\"\n    },\n    link: {\n      color: \"inherit\",\n      textDecoration: \"underline\",\n      \"&:hover\": {\n        textDecoration: \"none\"\n      }\n    },\n    h1: {\n      fontSize: 7\n    },\n    a: {\n      variant: \"styles.link\"\n    }\n  }\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEdBQTdDLENBQWI7QUFDQSxNQUFNQyxhQUFhLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFVQyxDQUFELElBQU9BLENBQUMsR0FBRyxDQUFwQixDQUF0QjtBQUNBLCtEQUFlO0FBQ2JDLEVBQUFBLE9BQU8sRUFBRUosSUFESTtBQUViSyxFQUFBQSxLQUFLLEVBQUVKLGFBRk07QUFHYkssRUFBQUEsU0FBUyxFQUFFTCxhQUhFO0FBSWJNLEVBQUFBLFdBQVcsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLENBSkE7QUFLYkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRSx1QkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUUsMkJBRko7QUFHTEMsSUFBQUEsU0FBUyxFQUFFO0FBSE4sR0FMTTtBQVViQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFLE1BREE7QUFFTkMsSUFBQUEsVUFBVSxFQUFFLE9BRk47QUFHTkMsSUFBQUEsT0FBTyxFQUFFO0FBSEgsR0FWSztBQWViQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLEVBQUUsRUFBRSxZQURBO0FBRUosZ0NBQTBCLGFBRnRCO0FBR0osaUNBQTJCLFdBSHZCO0FBSUpDLE1BQUFBLFVBQVUsRUFBRTtBQUpSLEtBREE7QUFPTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLE1BQUFBLGNBQWMsRUFBRSxXQUZaO0FBR0osaUJBQVc7QUFBRUEsUUFBQUEsY0FBYyxFQUFFO0FBQWxCO0FBSFAsS0FQQTtBQVlOQyxJQUFBQSxFQUFFLEVBQUU7QUFDRkMsTUFBQUEsUUFBUSxFQUFFO0FBRFIsS0FaRTtBQWVOQyxJQUFBQSxDQUFDLEVBQUU7QUFDREMsTUFBQUEsT0FBTyxFQUFFO0FBRFI7QUFmRztBQWZLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLmpzP2FmYTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29yZSA9IFsyLCA0LCA2LCA4LCAxMiwgMTYsIDI0LCAzMiwgNDAsIDU2LCA3MiwgOTYsIDEyMF07XG5jb25zdCBjb3JlQW1wbGlmaWVkID0gY29yZS5tYXAoKGUpID0+IGUgKiAyKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3BhY2luZzogY29yZSxcbiAgc2l6ZXM6IGNvcmVBbXBsaWZpZWQsXG4gIGZvbnRTaXplczogY29yZUFtcGxpZmllZCxcbiAgYnJlYWtwb2ludHM6IFtcIjQwZW1cIiwgXCI2NGVtXCIsIFwiMTIwZW1cIl0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIixcbiAgICBoZWFkaW5nOiAnXCJBdmVuaXIgTmV4dFwiLCBzYW5zLXNlcmlmJyxcbiAgICBtb25vc3BhY2U6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiBcIiMwMDBcIixcbiAgICBiYWNrZ3JvdW5kOiBcImJlaWdlXCIsXG4gICAgcHJpbWFyeTogXCIjMzNlXCIsXG4gIH0sXG4gIHN0eWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJnOiBcImJhY2tncm91bmRcIixcbiAgICAgIFwiLXdlYmtpdC1mb250LXNtb290aGluZ1wiOiBcImFudGlhbGlhc2VkXCIsXG4gICAgICBcIi1tb3otb3N4LWZvbnQtc21vb3RoaW5nXCI6IFwiZ3JheXNjYWxlXCIsXG4gICAgICBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgICBcIiY6aG92ZXJcIjogeyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfSxcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogNyxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIHZhcmlhbnQ6IFwic3R5bGVzLmxpbmtcIixcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJjb3JlIiwiY29yZUFtcGxpZmllZCIsIm1hcCIsImUiLCJzcGFjaW5nIiwic2l6ZXMiLCJmb250U2l6ZXMiLCJicmVha3BvaW50cyIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vc3BhY2UiLCJjb2xvcnMiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJzdHlsZXMiLCJyb290IiwiYmciLCJmb250RmFtaWx5IiwibGluayIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJoMSIsImZvbnRTaXplIiwiYSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme.js\n");

/***/ })

});