(this["webpackJsonpharrypotter"] = this["webpackJsonpharrypotter"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/styles/index.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/styles/index.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../font/HarryPotter.ttf */ "./src/font/HarryPotter.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../font/HarryPotter.eot */ "./src/font/HarryPotter.eot");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../font/HarryPotter.woff */ "./src/font/HarryPotter.woff");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "\n\n@font-face {\n  font-family: 'HarryPotter';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff');\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default, TwoContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoContainer", function() { return TwoContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Characters */ "./src/components/Characters.js");
/* harmony import */ var _components_CharacterDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CharacterDetail */ "./src/components/CharacterDetail.js");
/* harmony import */ var _components_Spells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Spells */ "./src/components/Spells.js");
/* harmony import */ var _components_Houses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Houses */ "./src/components/Houses.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_HouseDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/HouseDetail */ "./src/components/HouseDetail.js");
/* harmony import */ var _components_SpellDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SpellDetail */ "./src/components/SpellDetail.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/styles/index.css */ "./src/components/styles/index.css");
/* harmony import */ var _components_styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_styles_appStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/styles/appStyle */ "./src/components/styles/appStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/App.js";














function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "APP Harry Potter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_appStyle__WEBPACK_IMPORTED_MODULE_12__["AppContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_Home__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Houses",
    component: _components_Houses__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Houses/:id",
    component: _components_HouseDetail__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TwoContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Spells",
    component: _components_Spells__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Spells/:id",
    component: _components_SpellDetail__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TwoContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Characters",
    component: _components_Characters__WEBPACK_IMPORTED_MODULE_3__["Characters"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Characters/:id",
    component: _components_CharacterDetail__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);
const TwoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  justify-content: center;
`;

/***/ }),

/***/ "./src/components/CharacterDetail.js":
/*!*******************************************!*\
  !*** ./src/components/CharacterDetail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/charactersStyle */ "./src/components/styles/charactersStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/CharacterDetail.js";



class CharacterDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      character: []
    };

    this.fetchCharacter = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getCharacterByIdSrv"])(this.props.match.params.id);
      this.setState({
        character: data
      });
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchCharacter();
    }
  }

  render() {
    const {
      character: {
        name,
        patronus,
        role,
        species,
        house,
        wand,
        bloodStatus,
        school,
        alias,
        boggart
      }
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["BlocData"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["DetailTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, "alias :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, alias), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, "role :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, "patronus :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, patronus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, "house :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, house), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, "school :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, school), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, "species :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, species), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, "wand :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, wand), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, "boggart :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, boggart), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, "blood status :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, bloodStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./src/components/Characters.js":
/*!**************************************!*\
  !*** ./src/components/Characters.js ***!
  \**************************************/
/*! exports provided: Characters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Characters", function() { return Characters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_housesStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/housesStyle */ "./src/components/styles/housesStyle.js");
/* harmony import */ var _styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/charactersStyle */ "./src/components/styles/charactersStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/Characters.js";






const Characters = () => {
  const [characters, setCharacters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchCharacters = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getCharactersSrv"])(page);
      setCharacters(data);
      setIsLoading(true);
    };

    fetchCharacters();
  }, [page]);

  const changePage = pageNumber => {
    setPage(page + pageNumber);
  };

  const notLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["LoadingTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "loading..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["LoadingImg"], {
    src: `/image/wait.gif`,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["CharactersContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["CharactersBloc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["CharacterTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "All characters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ContainerData"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, !isLoading ? notLoading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["BlocData"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, characters.map((result, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_3__["DesignLinkHouseDetail"], {
    to: `/characters/${result._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["TextSimple"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, result.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ButtonBloc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: changePage.bind(null, -1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ImgLinkBtn"], {
    src: `/image/left.svg`,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: changePage.bind(null, 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ImgLinkBtn"], {
    src: `/image/right.svg`,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }))))));
};

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/headerStyle */ "./src/components/styles/headerStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/Header.js";



const Header = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["MenuBlocPicture"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["MenuPicture"], {
    src: `/image/4houses.png`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["MenuBlocLink"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
    to: "/Houses",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Houses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
    to: "/Characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Characters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
    to: "/Spells",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Spells")));
};

/***/ }),

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

/***/ }),

/***/ "./src/components/HouseDetail.js":
/*!***************************************!*\
  !*** ./src/components/HouseDetail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HouseDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/housesStyle */ "./src/components/styles/housesStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/HouseDetail.js";



class HouseDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      house: []
    };

    this.fetchHouseById = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getHouseById"])(this.props.match.params.id);
      this.setState({
        house: data
      });
    };
  }

  componentDidMount() {
    this.fetchHouseById();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchHouseById();
    }
  }

  render() {
    const {
      house
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseDetailContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, house.map(({
      mascot,
      colors,
      members,
      headOfHouse,
      houseGhost,
      founder,
      values,
      school
    }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseBloc"], {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["BlocDetailInfo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Mascot:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, " ", mascot), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, "headOfHouse:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, " ", headOfHouse), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "houseGhost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, " ", houseGhost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, "founder:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, founder, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, "school:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, school), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, "values of house:"), values.map((element, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 23
      }
    }, element)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, "colors of house:"), colors.map((element, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }, element))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["BlocDetailInfo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DetailHouseTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, "members of house:"), members.map((element, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLinkHouseDetail"], {
      to: `/characters/${element._id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 23
      }
    }, element.name))))))));
  }

}

/***/ }),

/***/ "./src/components/Houses.js":
/*!**********************************!*\
  !*** ./src/components/Houses.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spells; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/housesStyle */ "./src/components/styles/housesStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/Houses.js";



class Spells extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      houses: []
    };

    this.fetchHouse = async id => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getHousesSrv"])(id);
      this.setState({
        houses: data
      });
    };
  }

  componentDidMount() {
    this.fetchHouse();
  }

  render() {
    // const { houses } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HousesTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "Magic Houses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HousesBloc"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
      to: `/houses/5a05e2b252f721a3cf2ea33f`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseImg"], {
      src: `/image/griffon.png`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
      to: `/houses/5a05da69d45bd0a11bd5e06f`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseImg"], {
      src: `/image/rav.png`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
      to: `/houses/5a05dc8cd45bd0a11bd5e071`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseImg"], {
      src: `/image/slytherin.png`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["DesignLink"], {
      to: `/houses/5a05dc58d45bd0a11bd5e070`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_2__["HouseImg"], {
      src: `/image/pouff.png`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }))));
  }

}

/***/ }),

/***/ "./src/components/SpellDetail.js":
/*!***************************************!*\
  !*** ./src/components/SpellDetail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spells; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/charactersStyle */ "./src/components/styles/charactersStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/SpellDetail.js";



class Spells extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      spell: []
    };

    this.fetchSpell = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_1__["getSpellsDetailSrv"])(this.props.match.params.id);
      this.setState({
        spell: data
      });
    };
  }

  componentDidMount() {
    this.fetchSpell();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchSpell();
    }
  }

  render() {
    const {
      spell
    } = this.state;
    console.log(this.state);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `/image/wand.png`,
      alt: "",
      style: {
        width: '40%',
        height: '60%',
        margin: ' auto 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["BlocData"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["DetailTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, "Spell Detail"), spell.map((element, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, " Name of spell : "), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, " ", element.spell), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, " Type of spell :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, " ", element.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailSub"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, " Effect :"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, " ", element.effect))))));
  }

}

/***/ }),

/***/ "./src/components/Spells.js":
/*!**********************************!*\
  !*** ./src/components/Spells.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spells; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _service_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data */ "./src/service/data.js");
/* harmony import */ var _styles_housesStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/housesStyle */ "./src/components/styles/housesStyle.js");
/* harmony import */ var _styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/charactersStyle */ "./src/components/styles/charactersStyle.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/components/Spells.js";





class Spells extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      spells: [],
      page: 1,
      isLoading: false
    };

    this.fetchSpell = async () => {
      const data = await Object(_service_data__WEBPACK_IMPORTED_MODULE_2__["getSpellsSrv"])(this.state.page);
      this.setState({
        spells: data,
        isLoading: true
      });
    };

    this.changePage = pageNumber => {
      this.setState(({
        page
      }) => ({
        page: page + pageNumber
      }));
    };
  }

  componentDidMount() {
    this.fetchSpell();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchSpell();
    }
  }

  render() {
    const {
      spells,
      isLoading
    } = this.state;
    const notLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["Loading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["LoadingTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, "loading..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["LoadingImg"], {
      src: `/image/magic.gif`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["CharactersContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["CharacterTitle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, "All Spells"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ContainerData"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, !isLoading ? notLoading : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["BlocData"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, spells.map(({
      spell,
      _id
    }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_housesStyle__WEBPACK_IMPORTED_MODULE_3__["DesignLinkHouseDetail"], {
      key: i,
      to: `/Spells/${_id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["TextSimple"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, spell)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ButtonBloc"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.changePage.bind(null, -1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ImgLinkBtn"], {
      src: `/image/left.svg`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.changePage.bind(null, 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_charactersStyle__WEBPACK_IMPORTED_MODULE_4__["ImgLinkBtn"], {
      src: `/image/right.svg`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }))))));
  }

}

/***/ }),

/***/ "./src/components/styles/appStyle.js":
/*!*******************************************!*\
  !*** ./src/components/styles/appStyle.js ***!
  \*******************************************/
/*! exports provided: AppContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContent", function() { return AppContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mediaQuerries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaQuerries */ "./src/components/styles/mediaQuerries.js");


const AppContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url(${`/image/poudlard.jpg`});
  background-repeat: repeat-x;
  background-size: cover;
  min-height: 83vh;
  min-width: 100vw;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL}) {
    min-height: 90vh;
    min-width: 100vw;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileM}) {
    min-height: 100vh;
    min-width: 110vw;
  }
`;

/***/ }),

/***/ "./src/components/styles/charactersStyle.js":
/*!**************************************************!*\
  !*** ./src/components/styles/charactersStyle.js ***!
  \**************************************************/
/*! exports provided: CharactersContainer, CharactersBloc, ContainerData, BlocData, ButtonBloc, ImgLinkBtn, TextSimple, Loading, LoadingTitle, LoadingImg, CharacterDetailContainer, CharacterDetailBloc, CharacterTitle, DetailTitle, CharacterDetailSub, CharacterDetailText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersContainer", function() { return CharactersContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersBloc", function() { return CharactersBloc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerData", function() { return ContainerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocData", function() { return BlocData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBloc", function() { return ButtonBloc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLinkBtn", function() { return ImgLinkBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSimple", function() { return TextSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingTitle", function() { return LoadingTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingImg", function() { return LoadingImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailContainer", function() { return CharacterDetailContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailBloc", function() { return CharacterDetailBloc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterTitle", function() { return CharacterTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTitle", function() { return DetailTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailSub", function() { return CharacterDetailSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailText", function() { return CharacterDetailText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./src/components/styles/colors.js");
/* harmony import */ var _mediaQuerries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediaQuerries */ "./src/components/styles/mediaQuerries.js");




const CharactersContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 30px;
`;
const CharactersBloc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  align-items: center;
  display: flex;
  flex-direction: column;
`; // export const CharactersTitle = styled.div`
//   font-family: 'HarryPotter';
//   font-size: 30px;
// `;

const ContainerData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const BlocData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background: linear-gradient(45deg, #353839, #19325c, #60789e, #112038);
  background-size: 400%;
  background-position: 0 100%;
  animation: anim 10s infinite;
  margin: 10px;
  @keyframes anim {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  border-radius: 20px;
  padding: 5%;
  a {
    color: ${_colors__WEBPACK_IMPORTED_MODULE_2__["GOLD"]};
  }
`;
const ButtonBloc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-around;
  color: white;
`;
const ImgLinkBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 50px;
  height: 50px;
`;
const TextSimple = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 10px;
`;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
  margin: 10% auto;
  height: 180px;
  width: 280px;
  border-radius: 20px;
  background-color: black;
`;
const LoadingTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: rgb(242, 164, 18);
  text-transform: uppercase;
  font-size: 20px;
  margin: auto;
`;
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 250px;
`; /////////// character detail

const CharacterDetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #b4bfd1;
`;
const CharacterDetailBloc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background: ${_colors__WEBPACK_IMPORTED_MODULE_2__["DARK_GREY"]};
  border-radius: 50px;
  padding: 30px;
  color: white;
`;
const CharacterTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-family: 'HarryPotter';
  font-size: 44px;
  text-align: center;
`;
const DetailTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: white;
  font-family: 'HarryPotter';
  font-size: 34px;
  text-align: center;
`;
const CharacterDetailSub = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-size: 20px;
  text-align: center;
  color: ${_colors__WEBPACK_IMPORTED_MODULE_2__["GOLD"]};
  font-weight: 900;
  text-transform: uppercase;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    font-size: 16px;
  }
`;
const CharacterDetailText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-size: 20px;
  font-weight: 900;
`;

/***/ }),

/***/ "./src/components/styles/colors.js":
/*!*****************************************!*\
  !*** ./src/components/styles/colors.js ***!
  \*****************************************/
/*! exports provided: GOLD, DARK_GREY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOLD", function() { return GOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_GREY", function() { return DARK_GREY; });
const GOLD = '#f2a412';
const DARK_GREY = '#142540';

/***/ }),

/***/ "./src/components/styles/headerStyle.js":
/*!**********************************************!*\
  !*** ./src/components/styles/headerStyle.js ***!
  \**********************************************/
/*! exports provided: MenuContainer, MenuTitle, MenuBlocPicture, MenuPicture, MenuBlocLink, DesignLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTitle", function() { return MenuTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBlocPicture", function() { return MenuBlocPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPicture", function() { return MenuPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBlocLink", function() { return MenuBlocLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignLink", function() { return DesignLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/components/styles/colors.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mediaQuerries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediaQuerries */ "./src/components/styles/mediaQuerries.js");




const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-around;
  background-color: ${_colors__WEBPACK_IMPORTED_MODULE_1__["DARK_GREY"]};
  min-height: 15vh;
  min-width: 100vw;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileM}) {
    min-width: 110vw;
  }
`;
const MenuTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    font-size: 16px;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileM}) {
    font-size: 14px;
    text-align: center;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileS}) {
    font-size: 14px;
    text-align: center;
  }
`;
const MenuBlocPicture = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const MenuPicture = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 130px;
  height: 130px;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    width: 80px;
    height: 80px;
  }
`;
const MenuBlocLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  cursor: not-allowed;
  align-self: center;
  a {
    text-decoration: none;
  }
`;
const DesignLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  font-family: 'HarryPotter';
  font-size: 40px;
  margin: 0 18px;
  color: white;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    font-size: 24px;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileM}) {
    font-size: 24px;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileS}) {
    font-size: 18px;
  }
`;

/***/ }),

/***/ "./src/components/styles/homeStyle.js":
/*!********************************************!*\
  !*** ./src/components/styles/homeStyle.js ***!
  \********************************************/
/*! exports provided: HomeContainer, Title, HomeTitle, HomeButton, HomeImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTitle", function() { return HomeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeButton", function() { return HomeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImg", function() { return HomeImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mediaQuerries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaQuerries */ "./src/components/styles/mediaQuerries.js");


const HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL}) {
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  color: #f2a412;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL}) {
    font-size: 30px;
  }
`;
const HomeTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL}) {
    font-size: 20px;
  }
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileM}) {
    font-size: 18px;
  }
`;
const HomeButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  width: 100px;
`;
const HomeImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 200px;
  height: 230px;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL}) {
    width: 100px;
    height: 120px;
  }
`;

/***/ }),

/***/ "./src/components/styles/housesStyle.js":
/*!**********************************************!*\
  !*** ./src/components/styles/housesStyle.js ***!
  \**********************************************/
/*! exports provided: HouseContainer, HousesBloc, HousesTitle, HouseImg, DesignLink, HouseDetailContainer, DetailHouseBloc, BlocDetailInfo, DetailHouseTitle, DetailHouseText, DesignLinkHouseDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseContainer", function() { return HouseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesBloc", function() { return HousesBloc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesTitle", function() { return HousesTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseImg", function() { return HouseImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignLink", function() { return DesignLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailContainer", function() { return HouseDetailContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHouseBloc", function() { return DetailHouseBloc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocDetailInfo", function() { return BlocDetailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHouseTitle", function() { return DetailHouseTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHouseText", function() { return DetailHouseText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignLinkHouseDetail", function() { return DesignLinkHouseDetail; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/components/styles/colors.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mediaQuerries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediaQuerries */ "./src/components/styles/mediaQuerries.js");




const HouseContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HousesBloc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const HousesTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 34px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  text-align: center;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    font-size: 20px;
  }
`;
const HouseImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 130px;
  height: 150px;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    width: 100px;
    height: 120px;
  }
`;
const DesignLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  font-size: 26px;
  margin: 10px;
  font-weight: 900;
  color: ${_colors__WEBPACK_IMPORTED_MODULE_1__["GOLD"]};
  text-decoration: none;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
  a:hover {
    color: yellow;
  }
`; ////////////////////// house detail

const HouseDetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  align-items: center;
`;
const DetailHouseBloc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: center;
  border: solid black 2px;
  border-radius: 2%;
  width: 50%;
  @media (${_mediaQuerries__WEBPACK_IMPORTED_MODULE_3__["device"].mobileL}) {
    width: 100%;
  }
`;
const BlocDetailInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 300px;
  margin: 20px;
  text-align: center;
`;
const DetailHouseTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  color: ${_colors__WEBPACK_IMPORTED_MODULE_1__["GOLD"]};
  font-weight: 900;
  text-transform: uppercase;
`;
const DetailHouseText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-weight: 900;
`;
const DesignLinkHouseDetail = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  font-weight: 900;
  color: black;
  text-decoration: none;
  a {
    text-decoration: none;
  }
`;

/***/ }),

/***/ "./src/components/styles/index.css":
/*!*****************************************!*\
  !*** ./src/components/styles/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/styles/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/styles/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/styles/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/styles/mediaQuerries.js":
/*!************************************************!*\
  !*** ./src/components/styles/mediaQuerries.js ***!
  \************************************************/
/*! exports provided: size, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const device = {
  mobileS: `max-width: ${size.mobileS}`,
  mobileM: `max-width: ${size.mobileM}`,
  mobileL: `max-width: ${size.mobileL}`,
  tablet: `max-width: ${size.tablet}`,
  laptop: `max-width: ${size.laptop}`,
  laptopL: `max-width: ${size.laptopL}`,
  desktop: `max-width: ${size.desktop}`,
  desktopL: `max-width: ${size.desktop}`
};

/***/ }),

/***/ "./src/font/HarryPotter.eot":
/*!**********************************!*\
  !*** ./src/font/HarryPotter.eot ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HarryPotter.2b2cfb50.eot";

/***/ }),

/***/ "./src/font/HarryPotter.ttf":
/*!**********************************!*\
  !*** ./src/font/HarryPotter.ttf ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HarryPotter.0421d418.ttf";

/***/ }),

/***/ "./src/font/HarryPotter.woff":
/*!***********************************!*\
  !*** ./src/font/HarryPotter.woff ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HarryPotter.fc173926.woff";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/julie/Documents/stackerine/app-complete/harrypotter/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/service/data.js":
/*!*****************************!*\
  !*** ./src/service/data.js ***!
  \*****************************/
/*! exports provided: getCharactersSrv, getCharacterByIdSrv, getHousesSrv, getHouseById, getSpellsSrv, getSpellsDetailSrv, getHatSrv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharactersSrv", function() { return getCharactersSrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterByIdSrv", function() { return getCharacterByIdSrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHousesSrv", function() { return getHousesSrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHouseById", function() { return getHouseById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpellsSrv", function() { return getSpellsSrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpellsDetailSrv", function() { return getSpellsDetailSrv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHatSrv", function() { return getHatSrv; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getCharactersSrv(page) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/characters/`, {
    params: {
      page
    }
  });
  return data;
}
async function getCharacterByIdSrv(id) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/characters/${id}`);
  console.log(data);
  return data;
}
async function getHousesSrv() {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/houses/`);
  return data;
}
async function getHouseById(id) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/houses/${id}`);
  return data;
}
async function getSpellsSrv(page) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/spells/`, {
    params: {
      page
    }
  });
  return data;
}
async function getSpellsDetailSrv(id) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/spells/${id}`);
  return data;
}
async function getHatSrv() {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/v1/hats/`);
  return data;
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/harrypotter/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/harrypotter/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/julie/Documents/stackerine/app-complete/harrypotter/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map