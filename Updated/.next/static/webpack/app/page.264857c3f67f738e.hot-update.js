"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"React Portfolio Website\",\n        description: \"Created My Portfolio website using Reactjs,Nextjs and Tailwind CSS\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"React To do List-Web app\",\n        description: \"Created A to do list using React,tailwind and Vite Config\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"E-commerce Application\",\n        description: \"Project 3 description\",\n        image: \"/images/projects/Amazon-clone.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sagni\\\\OneDrive\\\\Desktop\\\\Personal_Portfolio_Nextjs\\\\Updated\\\\src\\\\app\\\\components\\\\ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0E0QkQ7QUFFRCxNQUFNQyxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0gsS0FBS0ksT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNZ0IsTUFBTWYsNkNBQU1BLENBQUM7SUFDbkIsTUFBTWdCLFdBQVdaLHdEQUFTQSxDQUFDVyxLQUFLO1FBQUVFLE1BQU07SUFBSztJQUU3QyxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJMLE9BQU9LO0lBQ1Q7SUFFQSxNQUFNQyxtQkFBbUJmLGFBQWFnQixNQUFNLENBQUMsQ0FBQ0MsVUFDNUNBLFFBQVFaLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDYjtJQUd2QixNQUFNYyxlQUFlO1FBQ25CQyxTQUFTO1lBQUVDLEdBQUc7WUFBSUMsU0FBUztRQUFFO1FBQzdCQyxTQUFTO1lBQUVGLEdBQUc7WUFBR0MsU0FBUztRQUFFO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNFO1FBQVF2QixJQUFHOzswQkFDViw4REFBQ3dCO2dCQUFHQyxXQUFVOzBCQUErRDs7Ozs7OzBCQUc3RSw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDN0IsbURBQVVBO3dCQUNUK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUV0Qiw4REFBQ1IsbURBQVVBO3dCQUNUK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUV0Qiw4REFBQ1IsbURBQVVBO3dCQUNUK0IsU0FBU2Y7d0JBQ1RnQixNQUFLO3dCQUNMQyxZQUFZekIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQzBCO2dCQUFHckIsS0FBS0E7Z0JBQUtnQixXQUFVOzBCQUNyQlgsaUJBQWlCaUIsR0FBRyxDQUFDLENBQUNmLFNBQVNnQixzQkFDOUIsOERBQUNuQyxpREFBTUEsQ0FBQ29DLEVBQUU7d0JBRVJDLFVBQVVoQjt3QkFDVkMsU0FBUTt3QkFDUkcsU0FBU1osV0FBVyxZQUFZO3dCQUNoQ3lCLFlBQVk7NEJBQUVDLFVBQVU7NEJBQUtDLE9BQU9MLFFBQVE7d0JBQUk7a0NBRWhELDRFQUFDckMsb0RBQVdBOzRCQUVWTSxPQUFPZSxRQUFRZixLQUFLOzRCQUNwQkMsYUFBYWMsUUFBUWQsV0FBVzs0QkFDaENvQyxRQUFRdEIsUUFBUWIsS0FBSzs0QkFDckJFLFFBQVFXLFFBQVFYLE1BQU07NEJBQ3RCQyxZQUFZVSxRQUFRVixVQUFVOzJCQUx6QlUsUUFBUWhCLEVBQUU7Ozs7O3VCQVBaZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmpCO0dBOURNekI7O1FBR2FULG9EQUFTQTs7O0tBSHRCUztBQWdFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHNTZWN0aW9uLmpzeD8zNzBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcclxuaW1wb3J0IFByb2plY3RUYWcgZnJvbSBcIi4vUHJvamVjdFRhZ1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJSZWFjdCBQb3J0Zm9saW8gV2Vic2l0ZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlZCBNeSBQb3J0Zm9saW8gd2Vic2l0ZSB1c2luZyBSZWFjdGpzLE5leHRqcyBhbmQgVGFpbHdpbmQgQ1NTXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXHJcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiUmVhY3QgVG8gZG8gTGlzdC1XZWIgYXBwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGVkIEEgdG8gZG8gbGlzdCB1c2luZyBSZWFjdCx0YWlsd2luZCBhbmQgVml0ZSBDb25maWdcIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMi5wbmdcIixcclxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgZ2l0VXJsOiBcIi9cIixcclxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJFLWNvbW1lcmNlIEFwcGxpY2F0aW9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDMgZGVzY3JpcHRpb25cIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvQW1hem9uLWNsb25lLnBuZ1wiLFxyXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgcHJldmlld1VybDogXCIvXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogNCxcclxuICAvLyAgIHRpdGxlOiBcIkZvb2QgT3JkZXJpbmcgQXBwbGljYXRpb25cIixcclxuICAvLyAgIGRlc2NyaXB0aW9uOiBcIlByb2plY3QgNCBkZXNjcmlwdGlvblwiLFxyXG4gIC8vICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy80LnBuZ1wiLFxyXG4gIC8vICAgdGFnOiBbXCJBbGxcIiwgXCJNb2JpbGVcIl0sXHJcbiAgLy8gICBnaXRVcmw6IFwiL1wiLFxyXG4gIC8vICAgcHJldmlld1VybDogXCIvXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogNSxcclxuICAvLyAgIHRpdGxlOiBcIlJlYWN0IEZpcmViYXNlIFRlbXBsYXRlXCIsXHJcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJBdXRoZW50aWNhdGlvbiBhbmQgQ1JVRCBvcGVyYXRpb25zXCIsXHJcbiAgLy8gICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzUucG5nXCIsXHJcbiAgLy8gICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAvLyAgIGdpdFVybDogXCIvXCIsXHJcbiAgLy8gICBwcmV2aWV3VXJsOiBcIi9cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA2LFxyXG4gIC8vICAgdGl0bGU6IFwiRnVsbC1zdGFjayBSb2FkbWFwXCIsXHJcbiAgLy8gICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDUgZGVzY3JpcHRpb25cIixcclxuICAvLyAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNi5wbmdcIixcclxuICAvLyAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gIC8vICAgZ2l0VXJsOiBcIi9cIixcclxuICAvLyAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG4gIC8vIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFnQ2hhbmdlID0gKG5ld1RhZykgPT4ge1xyXG4gICAgc2V0VGFnKG5ld1RhZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XHJcbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xyXG4gICAgaW5pdGlhbDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxyXG4gICAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTQgbWItOCBtZDptYi0xMlwiPlxyXG4gICAgICAgIE15IFByb2plY3RzXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBweS02XCI+XHJcbiAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgIG5hbWU9XCJBbGxcIlxyXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgIG5hbWU9XCJXZWJcIlxyXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cclxuICAgICAgICAgIG5hbWU9XCJNb2JpbGVcIlxyXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIk1vYmlsZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XHJcbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG1vdGlvbi5saVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogaW5kZXggKiAwLjQgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxyXG4gICAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbW90aW9uLmxpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJnaXRVcmwiLCJwcmV2aWV3VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZWN0aW9uIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaW1nVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});