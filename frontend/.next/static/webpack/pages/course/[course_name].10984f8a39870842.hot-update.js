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

/***/ "./utils/sample_data.js":
/*!******************************!*\
  !*** ./utils/sample_data.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar data = {\n    admin: [\n        {\n            name: \"admin1\",\n            email: \"admin1@email.com\",\n            password: \"666666\",\n            role: \"super_admin\"\n        },\n        {\n            name: \"admin2\",\n            email: \"admin2@email.com\",\n            password: \"666666\",\n            role: \"admin\"\n        }, \n    ],\n    students: [\n        {\n            name: \"jojo\",\n            email: \"jojo@example.com\",\n            password: \"123456\",\n            role: \"student\",\n            course_list: [\n                \"bitcoin 101\",\n                \"basic robotics\",\n                \"how to sushi\"\n            ],\n            pending_list: [\n                {\n                    ref_id: 1,\n                    course_name: \"chess for newbies\"\n                },\n                {\n                    ref_id: 2,\n                    course_name: \"unseen africa\"\n                }\n            ]\n        },\n        {\n            name: \"yoyo\",\n            email: \"yoyo@example.com\",\n            password: \"123456\",\n            role: \"student\",\n            course_list: [\n                \"bitcoin 101\"\n            ],\n            pending_list: []\n        },\n        {\n            name: \"coco\",\n            email: \"coco@example.com\",\n            password: \"123456\",\n            role: \"student\",\n            course_list: [\n                \"basic robotics\"\n            ],\n            pending_list: []\n        }, \n    ],\n    teachers: [\n        {\n            name: \"dang\",\n            email: \"dang@example.com\",\n            password: \"123456\",\n            role: \"teacher\",\n            course_list: [\n                \"bitcoin 101\",\n                \"dapp 101\",\n                \"unseen africa\",\n                \"chess for newbies\"\n            ],\n            pending_list: [\n                {\n                    ref_id: 1,\n                    course_name: \"blockchain for everyone\"\n                }\n            ]\n        },\n        {\n            name: \"wanchai\",\n            email: \"wanchai@example.com\",\n            password: \"123456\",\n            role: \"teacher\",\n            course_list: [\n                \"basic robotics\",\n                \"how to sushi\"\n            ],\n            pending_list: []\n        }, \n    ],\n    courses: [\n        {\n            course_name: \"bitcoin_101\",\n            tag: \"fintech\",\n            teacher: \"dang\",\n            section: [\n                {\n                    section_name: \"what is money\",\n                    chapter: [\n                        \"what when why\",\n                        \"money origin\"\n                    ]\n                },\n                {\n                    section_name: \"type of money\",\n                    chapter: [\n                        \"creatable money\",\n                        \"non-creatable money\"\n                    ]\n                },\n                {\n                    section_name: \"about satoshi\",\n                    chapter: [\n                        \"who is who\",\n                        \"satoshi nakamoto\"\n                    ]\n                }, \n            ]\n        },\n        {\n            course_name: \"basic robotics\",\n            teacher: \"wanchai\",\n            section: [\n                {\n                    section_name: \"machatronics\",\n                    chapter: [\n                        \"electrical machine\",\n                        \"machanical machine\"\n                    ]\n                },\n                {\n                    section_name: \"the modern robot\",\n                    chapter: [\n                        \"robot car\",\n                        \"3d printer\"\n                    ]\n                }, \n            ]\n        }, \n    ],\n    tags: [\n        \"fintech\",\n        \"robotics\",\n        \"chess\"\n    ]\n};\n// metadata\n// to config uuid as id \n// teacher.course_list => validated course \n// teacher.pending_list => validating course that waiting for validator and then for earnest money (being withdrawable when it over than minimum of student enroll)\n// student.course_list => purchased course\n// student.pending_list => purchasing course\n// student.pending_list.ref_id => paypal refference id\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zYW1wbGVfZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBTUEsSUFBSSxHQUFHO0lBQ1RDLEtBQUssRUFBRTtRQUNIO1lBQUNDLElBQUksRUFBRSxRQUFRO1lBQUVDLEtBQUssRUFBRSxrQkFBa0I7WUFBRUMsUUFBUSxFQUFFLFFBQVE7WUFBRUMsSUFBSSxFQUFFLGFBQWE7U0FBQztRQUNwRjtZQUFDSCxJQUFJLEVBQUUsUUFBUTtZQUFFQyxLQUFLLEVBQUUsa0JBQWtCO1lBQUVDLFFBQVEsRUFBRSxRQUFRO1lBQUVDLElBQUksRUFBRSxPQUFPO1NBQUM7S0FDakY7SUFDREMsUUFBUSxFQUFFO1FBQ047WUFBQ0osSUFBSSxFQUFFLE1BQU07WUFBRUMsS0FBSyxFQUFFLGtCQUFrQjtZQUFFQyxRQUFRLEVBQUUsUUFBUTtZQUFFQyxJQUFJLEVBQUUsU0FBUztZQUFFRSxXQUFXLEVBQUU7Z0JBQUMsYUFBYTtnQkFBRSxnQkFBZ0I7Z0JBQUUsY0FBYzthQUFDO1lBQUVDLFlBQVksRUFBRTtnQkFBQztvQkFBQ0MsTUFBTSxFQUFFLENBQUM7b0JBQUVDLFdBQVcsRUFBRSxtQkFBbUI7aUJBQUM7Z0JBQUU7b0JBQUNELE1BQU0sRUFBRSxDQUFDO29CQUFFQyxXQUFXLEVBQUUsZUFBZTtpQkFBQzthQUFDO1NBQUM7UUFDeFA7WUFBQ1IsSUFBSSxFQUFFLE1BQU07WUFBRUMsS0FBSyxFQUFFLGtCQUFrQjtZQUFFQyxRQUFRLEVBQUUsUUFBUTtZQUFFQyxJQUFJLEVBQUUsU0FBUztZQUFFRSxXQUFXLEVBQUU7Z0JBQUMsYUFBYTthQUFDO1lBQUVDLFlBQVksRUFBRSxFQUFFO1NBQUM7UUFDOUg7WUFBQ04sSUFBSSxFQUFFLE1BQU07WUFBRUMsS0FBSyxFQUFFLGtCQUFrQjtZQUFFQyxRQUFRLEVBQUUsUUFBUTtZQUFFQyxJQUFJLEVBQUUsU0FBUztZQUFFRSxXQUFXLEVBQUU7Z0JBQUMsZ0JBQWdCO2FBQUM7WUFBRUMsWUFBWSxFQUFFLEVBQUU7U0FBQztLQUNwSTtJQUNERyxRQUFRLEVBQUU7UUFDTjtZQUFDVCxJQUFJLEVBQUUsTUFBTTtZQUFFQyxLQUFLLEVBQUUsa0JBQWtCO1lBQUVDLFFBQVEsRUFBRSxRQUFRO1lBQUVDLElBQUksRUFBRSxTQUFTO1lBQUVFLFdBQVcsRUFBRTtnQkFBQyxhQUFhO2dCQUFFLFVBQVU7Z0JBQUUsZUFBZTtnQkFBRSxtQkFBbUI7YUFBQztZQUFFQyxZQUFZLEVBQUU7Z0JBQUM7b0JBQUNDLE1BQU0sRUFBRSxDQUFDO29CQUFFQyxXQUFXLEVBQUMseUJBQXlCO2lCQUFDO2FBQUM7U0FBQztRQUNsTztZQUFDUixJQUFJLEVBQUUsU0FBUztZQUFFQyxLQUFLLEVBQUUscUJBQXFCO1lBQUVDLFFBQVEsRUFBRSxRQUFRO1lBQUVDLElBQUksRUFBRSxTQUFTO1lBQUVFLFdBQVcsRUFBRTtnQkFBQyxnQkFBZ0I7Z0JBQUUsY0FBYzthQUFDO1lBQUVDLFlBQVksRUFBRSxFQUFFO1NBQUM7S0FDMUo7SUFDREksT0FBTyxFQUFFO1FBQ0w7WUFBQ0YsV0FBVyxFQUFFLGFBQWE7WUFBRUcsR0FBRyxFQUFFLFNBQVM7WUFBRUMsT0FBTyxFQUFFLE1BQU07WUFDMURDLE9BQU8sRUFBRTtnQkFDUDtvQkFBQ0MsWUFBWSxFQUFFLGVBQWU7b0JBQUVDLE9BQU8sRUFBRTt3QkFBQyxlQUFlO3dCQUFFLGNBQWM7cUJBQUM7aUJBQUM7Z0JBQzNFO29CQUFDRCxZQUFZLEVBQUUsZUFBZTtvQkFBRUMsT0FBTyxFQUFFO3dCQUFDLGlCQUFpQjt3QkFBRSxxQkFBcUI7cUJBQUM7aUJBQUM7Z0JBQ3BGO29CQUFDRCxZQUFZLEVBQUUsZUFBZTtvQkFBRUMsT0FBTyxFQUFFO3dCQUFDLFlBQVk7d0JBQUUsa0JBQWtCO3FCQUFDO2lCQUFDO2FBQy9FO1NBQUM7UUFDRjtZQUFDUCxXQUFXLEVBQUUsZ0JBQWdCO1lBQUVJLE9BQU8sRUFBRSxTQUFTO1lBQ2hEQyxPQUFPLEVBQUU7Z0JBQ1A7b0JBQUNDLFlBQVksRUFBRSxjQUFjO29CQUFFQyxPQUFPLEVBQUU7d0JBQUMsb0JBQW9CO3dCQUFFLG9CQUFvQjtxQkFBQztpQkFBQztnQkFDckY7b0JBQUNELFlBQVksRUFBRSxrQkFBa0I7b0JBQUVDLE9BQU8sRUFBRTt3QkFBQyxXQUFXO3dCQUFFLFlBQVk7cUJBQUM7aUJBQUM7YUFDM0U7U0FBQztLQUNMO0lBQ0RDLElBQUksRUFBRTtRQUFDLFNBQVM7UUFBRSxVQUFVO1FBQUUsT0FBTztLQUFDO0NBQ3pDO0FBRUQsV0FBVztBQUNYLHdCQUF3QjtBQUN4QiwyQ0FBMkM7QUFDM0MsbUtBQW1LO0FBQ25LLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsc0RBQXNEO0FBRXRELCtEQUFlbEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9zYW1wbGVfZGF0YS5qcz9hYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XHJcbiAgICBhZG1pbjogW1xyXG4gICAgICAgIHtuYW1lOiBcImFkbWluMVwiLCBlbWFpbDogXCJhZG1pbjFAZW1haWwuY29tXCIsIHBhc3N3b3JkOiBcIjY2NjY2NlwiLCByb2xlOiBcInN1cGVyX2FkbWluXCJ9LFxyXG4gICAgICAgIHtuYW1lOiBcImFkbWluMlwiLCBlbWFpbDogXCJhZG1pbjJAZW1haWwuY29tXCIsIHBhc3N3b3JkOiBcIjY2NjY2NlwiLCByb2xlOiBcImFkbWluXCJ9LFxyXG4gICAgXSxcclxuICAgIHN0dWRlbnRzOiBbXHJcbiAgICAgICAge25hbWU6IFwiam9qb1wiLCBlbWFpbDogXCJqb2pvQGV4YW1wbGUuY29tXCIsIHBhc3N3b3JkOiBcIjEyMzQ1NlwiLCByb2xlOiBcInN0dWRlbnRcIiwgY291cnNlX2xpc3Q6IFtcImJpdGNvaW4gMTAxXCIsIFwiYmFzaWMgcm9ib3RpY3NcIiwgXCJob3cgdG8gc3VzaGlcIl0sIHBlbmRpbmdfbGlzdDogW3tyZWZfaWQ6IDEsIGNvdXJzZV9uYW1lOiBcImNoZXNzIGZvciBuZXdiaWVzXCJ9LCB7cmVmX2lkOiAyLCBjb3Vyc2VfbmFtZTogXCJ1bnNlZW4gYWZyaWNhXCJ9XX0sXHJcbiAgICAgICAge25hbWU6IFwieW95b1wiLCBlbWFpbDogXCJ5b3lvQGV4YW1wbGUuY29tXCIsIHBhc3N3b3JkOiBcIjEyMzQ1NlwiLCByb2xlOiBcInN0dWRlbnRcIiwgY291cnNlX2xpc3Q6IFtcImJpdGNvaW4gMTAxXCJdLCBwZW5kaW5nX2xpc3Q6IFtdfSxcclxuICAgICAgICB7bmFtZTogXCJjb2NvXCIsIGVtYWlsOiBcImNvY29AZXhhbXBsZS5jb21cIiwgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIHJvbGU6IFwic3R1ZGVudFwiLCBjb3Vyc2VfbGlzdDogW1wiYmFzaWMgcm9ib3RpY3NcIl0sIHBlbmRpbmdfbGlzdDogW119LFxyXG4gICAgXSxcclxuICAgIHRlYWNoZXJzOiBbXHJcbiAgICAgICAge25hbWU6IFwiZGFuZ1wiLCBlbWFpbDogXCJkYW5nQGV4YW1wbGUuY29tXCIsIHBhc3N3b3JkOiBcIjEyMzQ1NlwiLCByb2xlOiBcInRlYWNoZXJcIiwgY291cnNlX2xpc3Q6IFtcImJpdGNvaW4gMTAxXCIsIFwiZGFwcCAxMDFcIiwgXCJ1bnNlZW4gYWZyaWNhXCIsIFwiY2hlc3MgZm9yIG5ld2JpZXNcIl0sIHBlbmRpbmdfbGlzdDogW3tyZWZfaWQ6IDEsIGNvdXJzZV9uYW1lOlwiYmxvY2tjaGFpbiBmb3IgZXZlcnlvbmVcIn1dfSxcclxuICAgICAgICB7bmFtZTogXCJ3YW5jaGFpXCIsIGVtYWlsOiBcIndhbmNoYWlAZXhhbXBsZS5jb21cIiwgcGFzc3dvcmQ6IFwiMTIzNDU2XCIsIHJvbGU6IFwidGVhY2hlclwiLCBjb3Vyc2VfbGlzdDogW1wiYmFzaWMgcm9ib3RpY3NcIiwgXCJob3cgdG8gc3VzaGlcIl0sIHBlbmRpbmdfbGlzdDogW119LFxyXG4gICAgXSxcclxuICAgIGNvdXJzZXM6IFtcclxuICAgICAgICB7Y291cnNlX25hbWU6IFwiYml0Y29pbl8xMDFcIiwgdGFnOiBcImZpbnRlY2hcIiwgdGVhY2hlcjogXCJkYW5nXCIsIFxyXG4gICAgICAgICAgc2VjdGlvbjogW1xyXG4gICAgICAgICAgICB7c2VjdGlvbl9uYW1lOiBcIndoYXQgaXMgbW9uZXlcIiwgY2hhcHRlcjogW1wid2hhdCB3aGVuIHdoeVwiLCBcIm1vbmV5IG9yaWdpblwiXX0sXHJcbiAgICAgICAgICAgIHtzZWN0aW9uX25hbWU6IFwidHlwZSBvZiBtb25leVwiLCBjaGFwdGVyOiBbXCJjcmVhdGFibGUgbW9uZXlcIiwgXCJub24tY3JlYXRhYmxlIG1vbmV5XCJdfSxcclxuICAgICAgICAgICAge3NlY3Rpb25fbmFtZTogXCJhYm91dCBzYXRvc2hpXCIsIGNoYXB0ZXI6IFtcIndobyBpcyB3aG9cIiwgXCJzYXRvc2hpIG5ha2Ftb3RvXCJdfSxcclxuICAgICAgICBdfSxcclxuICAgICAgICB7Y291cnNlX25hbWU6IFwiYmFzaWMgcm9ib3RpY3NcIiwgdGVhY2hlcjogXCJ3YW5jaGFpXCIsIFxyXG4gICAgICAgICAgc2VjdGlvbjogW1xyXG4gICAgICAgICAgICB7c2VjdGlvbl9uYW1lOiBcIm1hY2hhdHJvbmljc1wiLCBjaGFwdGVyOiBbXCJlbGVjdHJpY2FsIG1hY2hpbmVcIiwgXCJtYWNoYW5pY2FsIG1hY2hpbmVcIl19LFxyXG4gICAgICAgICAgICB7c2VjdGlvbl9uYW1lOiBcInRoZSBtb2Rlcm4gcm9ib3RcIiwgY2hhcHRlcjogW1wicm9ib3QgY2FyXCIsIFwiM2QgcHJpbnRlclwiXX0sXHJcbiAgICAgICAgXX0sXHJcbiAgICBdLFxyXG4gICAgdGFnczogW1wiZmludGVjaFwiLCBcInJvYm90aWNzXCIsIFwiY2hlc3NcIl1cclxufVxyXG5cclxuLy8gbWV0YWRhdGFcclxuLy8gdG8gY29uZmlnIHV1aWQgYXMgaWQgXHJcbi8vIHRlYWNoZXIuY291cnNlX2xpc3QgPT4gdmFsaWRhdGVkIGNvdXJzZSBcclxuLy8gdGVhY2hlci5wZW5kaW5nX2xpc3QgPT4gdmFsaWRhdGluZyBjb3Vyc2UgdGhhdCB3YWl0aW5nIGZvciB2YWxpZGF0b3IgYW5kIHRoZW4gZm9yIGVhcm5lc3QgbW9uZXkgKGJlaW5nIHdpdGhkcmF3YWJsZSB3aGVuIGl0IG92ZXIgdGhhbiBtaW5pbXVtIG9mIHN0dWRlbnQgZW5yb2xsKVxyXG4vLyBzdHVkZW50LmNvdXJzZV9saXN0ID0+IHB1cmNoYXNlZCBjb3Vyc2VcclxuLy8gc3R1ZGVudC5wZW5kaW5nX2xpc3QgPT4gcHVyY2hhc2luZyBjb3Vyc2VcclxuLy8gc3R1ZGVudC5wZW5kaW5nX2xpc3QucmVmX2lkID0+IHBheXBhbCByZWZmZXJlbmNlIGlkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhXHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiYWRtaW4iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJzdHVkZW50cyIsImNvdXJzZV9saXN0IiwicGVuZGluZ19saXN0IiwicmVmX2lkIiwiY291cnNlX25hbWUiLCJ0ZWFjaGVycyIsImNvdXJzZXMiLCJ0YWciLCJ0ZWFjaGVyIiwic2VjdGlvbiIsInNlY3Rpb25fbmFtZSIsImNoYXB0ZXIiLCJ0YWdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/sample_data.js\n"));

/***/ })

});