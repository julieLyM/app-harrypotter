webpackHotUpdate("main",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/homeStyle */ "./src/components/styles/homeStyle.js");
/* harmony import */ var _styles_charactersStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/charactersStyle */ "./src/components/styles/charactersStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/Home.js";




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      hats: [],
      isLoading: false
    };

    this.fetchHat = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getHatSrv"])();
      this.setState({
        hats: data
      });
    };

    this.onClicked = async () => {
      await this.fetchHat();
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hats === null) {
      this.onClicked();
    }
  }

  render() {
    const {
      hats
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, "Harry Potter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_3__["BlocData"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["HomeTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "Clic which houses are you in ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["HomeImg"], {
      src: `/image/hat.png`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["HomeButton"], {
      onClick: this.onClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, "clic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_homeStyle__WEBPACK_IMPORTED_MODULE_2__["HomeTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, hats)));
  }

}

/***/ })

})
//# sourceMappingURL=main.0d5ac1623daeb63e8d48.hot-update.js.map