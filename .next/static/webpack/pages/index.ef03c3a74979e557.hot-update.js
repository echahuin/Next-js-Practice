"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Card/Card */ \"./components/Card/Card.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), productList = ref[0], setproductList = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.fetch('api/avo').then(function(response) {\n            return response.json();\n        }).then(function(param) {\n            var data = param.data, length = param.length;\n            // type data = object;\n            setproductList(data);\n            console.log(data);\n        });\n        return function() {\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Platzi and Next.js\"\n            }),\n            productList.map(function(data, key) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    data: data,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 43\n                    },\n                    __self: _this1\n                }, key);\n            })\n        ]\n    }));\n};\n_s(HomePage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Q7QUFFVjs7O0FBR3hDLEdBQUssQ0FBQ0ksUUFBUSxHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFDdEIsR0FBSyxDQUFpQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUExQ0csV0FBVyxHQUFvQkgsR0FBWSxLQUE5QkksY0FBYyxHQUFJSixHQUFZO0lBRWxERCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZNLE1BQU0sQ0FDSEMsS0FBSyxDQUFDLENBQVMsVUFDZkMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQyxRQUFRRyxRQUNaLENBQUM7Z0JBREtDLElBQUksU0FBSkEsSUFBSSxFQUFFRCxNQUFNLFNBQU5BLE1BQU07WUFFaEIsRUFBc0I7WUFDdEJOLGNBQWMsQ0FBQ08sSUFBSTtZQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7UUFDbEIsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUNaLEdBRGdCLENBQUM7UUFFWixDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hHLENBQUc7Ozs7Ozs7O2lGQUNEQSxDQUFHOzs7Ozs7OzBCQUFDLENBQWtCOztZQUVuQlgsV0FBVyxDQUFDWSxHQUFHLENBQUMsUUFBUSxDQUFQSixJQUFJLEVBQUVLLEdBQUc7OEJBQU0sTUFBTUEsQ0FBQUEsc0RBQUFBLENBQUxmLDZEQUFJO29CQUFXVSxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7bUJBQWZLLEdBQUc7Ozs7QUFJeEQsQ0FBQztHQTNCS2QsUUFBUTtLQUFSQSxRQUFRO0FBNkJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQGNvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IENhcmQgZnJvbSAnQGNvbXBvbmVudHMvQ2FyZC9DYXJkJ1xyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0cHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKCdhcGkvYXZvJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoe2RhdGEsIGxlbmd0aH0pPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyB0eXBlIGRhdGEgPSBvYmplY3Q7XHJcbiAgICAgICAgICBzZXRwcm9kdWN0TGlzdChkYXRhKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgcmV0dXJuICgpPT57XHJcblxyXG4gICAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlBsYXR6aSBhbmQgTmV4dC5qczwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0Lm1hcCgoZGF0YSwga2V5KSA9PiAoPENhcmQga2V5PXtrZXl9IGRhdGE9e2RhdGF9IC8+KSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkhvbWVQYWdlIiwicHJvZHVjdExpc3QiLCJzZXRwcm9kdWN0TGlzdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImxlbmd0aCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});