webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_mini_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/mini-section */ "./components/mini-section.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/calendar */ "./components/calendar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_animated_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/animated-text */ "./components/animated-text.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");





var _jsxFileName = "/home/dijalmasilva/Documents/Projects/Github/devops-conference/pages/index.js";











var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "logo",
          src: _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].logo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        backgroundImage: "url('/static/img/section-background/devops-background.png')",
        backdrop: true,
        alignCenter: true,
        firstSection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_calendar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dateStartEvent: _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].dateEventStart,
        dateFinishEvent: _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].dateEventFinish,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#inscription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Inscreva-se")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].about.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Cont\xE9udo sobre o evento")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Palestrantes",
        backgroundImage: "url('/static/img/section-background/dark-background.png')",
        backdrop: true,
        alignCenter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Cont\xE9udo com os palestrantes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Inscri\xE7\xF5es",
        id: "inscription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Per\xEDodo das inscri\xE7\xF5es: ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Link da inscri\xE7\xE3o: asoidjaosjd"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        alignCenter: true,
        backgroundImage: "url('/static/img/section-background/dark-background.png')",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "pulse",
        duration: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/icons/twitter-white.png",
        alt: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "follow-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://twitter.com/search?q=%23".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].hashTag),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_animated_text__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: _utils_config__WEBPACK_IMPORTED_MODULE_14__["default"].hashTag,
        className: "text-styled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2bb545538b703142c025.hot-update.js.map