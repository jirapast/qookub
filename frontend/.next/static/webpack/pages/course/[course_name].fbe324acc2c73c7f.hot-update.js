"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/course/[course_name]",{

/***/ "./components/CourseItem.js":
/*!**********************************!*\
  !*** ./components/CourseItem.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CourseItem(param) {\n    var course = param.course;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            Object.values(course).map(function(value, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: value.section_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\components\\\\CourseItem.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\components\\\\CourseItem.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\components\\\\CourseItem.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"//////////////////////////////////////\"\n            }, void 0, false),\n            course.map(function(x) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            x.section_name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\components\\\\CourseItem.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false);\n            })\n        ]\n    }, void 0, true);\n};\n_c = CourseItem;\nvar _c;\n$RefreshReg$(_c, \"CourseItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdXJzZUl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0g7QUFFWCxTQUFTRSxVQUFVLENBQUMsS0FBVSxFQUFFO1FBQVosTUFBUSxHQUFSLEtBQVUsQ0FBUkMsTUFBTTs7SUFFM0MscUJBQ0k7O1lBQ01DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixNQUFNLENBQUMsQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFLO2dCQUMxQyxxQkFDSSw4REFBQ0MsS0FBRzs7c0NBQ0EsOERBQUNDLElBQUU7c0NBQUVILEtBQUssQ0FBQ0ksWUFBWTs7Ozs7aUNBQU07c0NBRTdCLDhEQUFDQyxJQUFFOzs7O2lDQUFHOzttQkFIQUosS0FBSzs7Ozt5QkFJVCxDQUNSO2FBQ0wsQ0FBQzswQkFDRjswQkFBRSx3Q0FBc0M7NkJBQUc7WUFDekNMLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLFNBQUNPLENBQUM7cUNBQ2Y7OEJBQ0ksNEVBQUNDLEdBQUM7OzRCQUFHRCxDQUFDLENBQUNGLFlBQVk7NEJBQUMsR0FBQzs7Ozs7OzZCQUFJO2lDQUMxQjthQUNGLENBQUM7O29CQUNILENBQ047Q0FDQTtBQXJCdUJULEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3Vyc2VJdGVtLmpzP2MyYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZUl0ZW0oeyBjb3Vyc2UgfSkge1xyXG5cclxucmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICB7IE9iamVjdC52YWx1ZXMoY291cnNlKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3ZhbHVlLnNlY3Rpb25fbmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDw+Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy88Lz5cclxuICAgICAgICB7IGNvdXJzZS5tYXAoKHgpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD57IHguc2VjdGlvbl9uYW1lfSA8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSkgfVxyXG4gICAgPC8+XHJcbilcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJDb3Vyc2VJdGVtIiwiY291cnNlIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwidmFsdWUiLCJpbmRleCIsImRpdiIsImgyIiwic2VjdGlvbl9uYW1lIiwiaHIiLCJ4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CourseItem.js\n"));

/***/ })

});