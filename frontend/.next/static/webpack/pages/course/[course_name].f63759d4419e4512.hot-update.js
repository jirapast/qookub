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

/***/ "./pages/course/[course_name].js":
/*!***************************************!*\
  !*** ./pages/course/[course_name].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CourseItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CourseItem */ \"./components/CourseItem.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_sample_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/sample_data */ \"./utils/sample_data.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CourseScreen() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query;\n    var course_name = query.course_name;\n    var course = _utils_sample_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].courses.find(function(x) {\n        return x.course_name === course_name;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            course_name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: JSON.stringify(course, null, 4)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\pages\\\\course\\\\[course_name].js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                course: course\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narat\\\\OneDrive\\\\Documents\\\\GitHub\\\\qookub\\\\frontend\\\\pages\\\\course\\\\[course_name].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(CourseScreen, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CourseScreen;\nvar _c;\n$RefreshReg$(_c, \"CourseScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV9uYW1lXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkM7QUFDUTtBQUN4QjtBQUNXO0FBQ2Q7QUFDaUI7O0FBRTVCLFNBQVNNLFlBQVksR0FBRzs7SUFDbkMsSUFBTSxLQUFPLEdBQUtILHNEQUFTLEVBQUUsQ0FBckJJLEtBQUs7SUFDYixJQUFNLFdBQWEsR0FBS0EsS0FBSyxDQUFyQkMsV0FBVztJQUNuQixJQUFNQyxNQUFNLEdBQUdKLHVFQUFpQixDQUFDLFNBQUNPLENBQUM7ZUFBS0EsQ0FBQyxDQUFDSixXQUFXLEtBQUtBLFdBQVc7S0FBQSxDQUFDO0lBRXRFLHFCQUNJOztZQUNNQSxXQUFXOzBCQUNiLDhEQUFDSyxNQUFJOzBCQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Ozs7O29CQUFROzBCQUM5Qyw4REFBQ1IsOERBQVU7Z0JBQUNRLE1BQU0sRUFBSUEsTUFBTTs7Ozs7b0JBQUc7O29CQUNoQyxDQUNOO0NBQ0o7R0FadUJILFlBQVk7O1FBQ2RILGtEQUFTOzs7QUFEUEcsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb3Vyc2UvW2NvdXJzZV9uYW1lXS5qcz9iNGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ291cnNlSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvdXJzZUl0ZW0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3V0aWxzL3NhbXBsZV9kYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZVNjcmVlbigpIHtcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjb3Vyc2VfbmFtZSB9ID0gcXVlcnk7XHJcbiAgICBjb25zdCBjb3Vyc2UgPSBkYXRhLmNvdXJzZXMuZmluZCgoeCkgPT4geC5jb3Vyc2VfbmFtZSA9PT0gY291cnNlX25hbWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyBjb3Vyc2VfbmFtZSB9XHJcbiAgICAgICAgICAgIDxzcGFuPntKU09OLnN0cmluZ2lmeShjb3Vyc2UsIG51bGwsIDQpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPENvdXJzZUl0ZW0gY291cnNlID0ge2NvdXJzZX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJDb3Vyc2VJdGVtIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiZGF0YSIsIkNvdXJzZVNjcmVlbiIsInF1ZXJ5IiwiY291cnNlX25hbWUiLCJjb3Vyc2UiLCJjb3Vyc2VzIiwiZmluZCIsIngiLCJzcGFuIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/course/[course_name].js\n"));

/***/ })

});