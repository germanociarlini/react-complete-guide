webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Layout.js":
false,

/***/ "./components/layout/Layout.module.css":
false,

/***/ "./components/layout/MainNavigation.js":
false,

/***/ "./components/layout/MainNavigation.module.css":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "N:\\Dev\\01-starting-setup\\01-starting-setup\\17-nextjs-big\\pages\\index.js",
    _this = undefined;


var DUMMY_QUESTS = [{
  id: "1",
  title: "Fisherman's Fiend",
  image: "https://cdna.artstation.com/p/assets/images/images/017/908/210/medium/daniel-choo-lagiacrus-monster-hunter-tyvik.jpg?1557815007",
  address: "Deserted Island (D)",
  description: "Hunt a Lagiacrus."
}, {
  id: "2",
  title: "Leading the Charge",
  image: "https://i.pinimg.com/originals/6d/f4/34/6df434a41c48ff2afc977bbb99de5c6c.jpg",
  address: "Sandy Plains (D)",
  description: "Hunt a Barroth."
}, {
  id: "3",
  title: "The Lost Expedition",
  image: "https://1.bp.blogspot.com/-dzV3u4ZM4eI/W7DRPUH0lyI/AAAAAAAABJY/UzCBUOSU5a83roe1LUg-Q069Q0J_lbnwACLcBGAs/w1200-h630-p-k-no-nu/monsterhunter-1538313849079-4433.jpg",
  address: "Tundra (N)",
  description: "Hunt a Barioth."
}];

var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: DUMMY_QUESTS
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfUVVFU1RTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxtQkFGVDtBQUdFQyxPQUFLLEVBQ0gsaUlBSko7QUFLRUMsU0FBTyxFQUFFLHFCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRG1CLEVBU25CO0FBQ0VKLElBQUUsRUFBRSxHQUROO0FBRUVDLE9BQUssRUFBRSxvQkFGVDtBQUdFQyxPQUFLLEVBQ0gsOEVBSko7QUFLRUMsU0FBTyxFQUFFLGtCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG1CLEVBaUJuQjtBQUNFSixJQUFFLEVBQUUsR0FETjtBQUVFQyxPQUFLLEVBQUUscUJBRlQ7QUFHRUMsT0FBSyxFQUNILG1LQUpKO0FBS0VDLFNBQU8sRUFBRSxZQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBakJtQixDQUFyQjs7QUEyQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRU47QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTU0sSTtBQUlTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YTQ4MzUzMDg5NDRjY2UyNmI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9RVUVTVFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgdGl0bGU6IFwiRmlzaGVybWFuJ3MgRmllbmRcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY2RuYS5hcnRzdGF0aW9uLmNvbS9wL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzLzAxNy85MDgvMjEwL21lZGl1bS9kYW5pZWwtY2hvby1sYWdpYWNydXMtbW9uc3Rlci1odW50ZXItdHl2aWsuanBnPzE1NTc4MTUwMDdcIixcclxuICAgIGFkZHJlc3M6IFwiRGVzZXJ0ZWQgSXNsYW5kIChEKVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSHVudCBhIExhZ2lhY3J1cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjJcIixcclxuICAgIHRpdGxlOiBcIkxlYWRpbmcgdGhlIENoYXJnZVwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzZkL2Y0LzM0LzZkZjQzNGE0MWM0OGZmMmFmYzk3N2JiYjk5ZGU1YzZjLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTYW5keSBQbGFpbnMgKEQpXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJIdW50IGEgQmFycm90aC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjNcIixcclxuICAgIHRpdGxlOiBcIlRoZSBMb3N0IEV4cGVkaXRpb25cIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLWR6VjN1NFpNNGVJL1c3RFJQVUgwbHlJL0FBQUFBQUFBQkpZL1V6Q0JVT1NVNWE4M3JvZTFMVWctUTA2OVEwSl9sYm53QUNMY0JHQXMvdzEyMDAtaDYzMC1wLWstbm8tbnUvbW9uc3Rlcmh1bnRlci0xNTM4MzEzODQ5MDc5LTQ0MzMuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlR1bmRyYSAoTilcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkh1bnQgYSBCYXJpb3RoLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtEVU1NWV9RVUVTVFN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==