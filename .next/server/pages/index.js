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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HomePage = ()=>{\n    const { 0: productList , 1: setproductList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch('api/avo').then((response)=>response.json()\n        ).then(({ data , length  })=>{\n            // type data = object;\n            setproductList(data);\n            console.log(data);\n        });\n        return ()=>{\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: \"Platzi and Next.js\"\n            }),\n            productList.map((data, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\julio\\\\Desktop\\\\Next-js-Practice\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 43\n                    },\n                    __self: undefined,\n                    children: data.name\n                }, key)\n            )\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBSWxELEtBQUssQ0FBQ0csUUFBUSxPQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSUgsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakRELGdEQUFTLEtBQU8sQ0FBQztRQUNmSyxNQUFNLENBQ0hDLEtBQUssQ0FBQyxDQUFTLFVBQ2ZDLElBQUksRUFBQ0MsUUFBUSxHQUFJQSxRQUFRLENBQUNDLElBQUk7VUFDOUJGLElBQUksRUFBRSxDQUFDRyxDQUFBQSxJQUFJLEdBQUVDLE1BQU0sR0FBQyxHQUNuQixDQUFDO1lBQ0MsRUFBc0I7WUFDdEJQLGNBQWMsQ0FBQ00sSUFBSTtZQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7UUFDbEIsQ0FBQztRQUVILE1BQU0sS0FBSyxDQUFDO1FBRVosQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNISSxDQUFHOzs7Ozs7OztpRkFDREEsQ0FBRzs7Ozs7OzswQkFBQyxDQUFrQjs7WUFFbkJYLFdBQVcsQ0FBQ1ksR0FBRyxFQUFFTCxJQUFJLEVBQUVNLEdBQUcsd0VBQU9GLENBQUc7Ozs7Ozs7OEJBQWFKLElBQUksQ0FBQ08sSUFBSTttQkFBaEJELEdBQUc7Ozs7QUFJdkQsQ0FBQztBQUVELGlFQUFlZCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV4dFByYWN0aWNlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0cHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKCdhcGkvYXZvJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoe2RhdGEsIGxlbmd0aH0pPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyB0eXBlIGRhdGEgPSBvYmplY3Q7XHJcbiAgICAgICAgICBzZXRwcm9kdWN0TGlzdChkYXRhKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgcmV0dXJuICgpPT57XHJcblxyXG4gICAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlBsYXR6aSBhbmQgTmV4dC5qczwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0Lm1hcCgoZGF0YSwga2V5KSA9PiAoPGRpdiBrZXk9e2tleX0+eyBkYXRhLm5hbWV9PC9kaXY+KSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZVBhZ2UiLCJwcm9kdWN0TGlzdCIsInNldHByb2R1Y3RMaXN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJrZXkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();