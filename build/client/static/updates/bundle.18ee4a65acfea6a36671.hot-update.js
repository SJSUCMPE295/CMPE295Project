webpackHotUpdate("bundle",{

/***/ "./src/shared/pages/MedicalAssistance/MedicalAssistance.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/pages/MedicalAssistance/MedicalAssistance.tsx ***!
  \******************************************************************/
/*! exports provided: DoctorSchedule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSchedule", function() { return DoctorSchedule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/actions */ "./src/shared/store/actions.ts");
/* harmony import */ var utils_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/json */ "./src/shared/utils/json.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}







var columns = [
    {
        field: "time",
        headerName: "Time",
        flex: 1,
        valueGetter: function(params) {
            return Object(utils_json__WEBPACK_IMPORTED_MODULE_6__["prettyDate"])(params === null || params === void 0 ? void 0 : params.value);
        }
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        flex: 1,
        valueGetter: function(params) {
            var user = params.getValue(params === null || params === void 0 ? void 0 : params.id, "user");
            return "".concat((user === null || user === void 0 ? void 0 : user.firstName) || "", " ").concat((user === null || user === void 0 ? void 0 : user.lastName) || "");
        }
    },
    {
        field: "state",
        headerName: "State",
        flex: 1,
        valueGetter: function(params) {
            var ref, ref1;
            return (ref = params.getValue(params === null || params === void 0 ? void 0 : params.id, "user")) === null || ref === void 0 ? void 0 : (ref1 = ref.address) === null || ref1 === void 0 ? void 0 : ref1.state;
        }
    },
    {
        field: "gender",
        headerName: "Gender",
        flex: 1,
        valueGetter: function(params) {
            var ref, ref2;
            return (ref = params.getValue(params === null || params === void 0 ? void 0 : params.id, "user")) === null || ref === void 0 ? void 0 : (ref2 = ref.userMetaData) === null || ref2 === void 0 ? void 0 : ref2.gender;
        }
    },
    {
        field: "notes",
        headerName: "notes",
        flex: 1
    }, 
];
var DoctorSchedule = function(props) {
    var ref11, ref3, ref4, ref5, ref6;
    var ref7 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), open = ref7[0], setOpen = ref7[1];
    var ref8 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), activeUser = ref8[0], setActiveUser = ref8[1];
    var ref9 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](""), 2), successAlert = ref9[0], setSuccessAlert = ref9[1];
    var ref10 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), available = ref10[0], setAvailable = ref10[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function() {
        (props === null || props === void 0 ? void 0 : props.id) && props.getProfileData({
            id: props === null || props === void 0 ? void 0 : props.id
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function() {
        var ref;
        setAvailable(!!(props === null || props === void 0 ? void 0 : (ref = props.doctor) === null || ref === void 0 ? void 0 : ref.availability));
    }, [
        props === null || props === void 0 ? void 0 : (ref11 = props.doctor) === null || ref11 === void 0 ? void 0 : ref11.availability
    ]);
    var handleClickOpen = function() {
        setOpen(true);
    };
    var handleRowClick = function(param) {
        var row = param.row;
        setActiveUser(row);
    };
    var setSuccessAlertWithTimer = function(msg) {
        setSuccessAlert(msg);
        setTimeout(function() {
            setSuccessAlert("");
        }, 6000);
    };
    var handleClose = function() {
        setActiveUser(null);
        setOpen(false);
    };
    var handleToggleAvailability = function(e, checked) {
        setAvailable(checked);
    };
    var handleSubmitActiveUser = function(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        var formProps = Object(utils_json__WEBPACK_IMPORTED_MODULE_6__["objectWithBoolean"])(Object.fromEntries(formData));
        console.log(formProps, activeUser);
    };
    var handleSubmit = function(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        var formProps = Object(utils_json__WEBPACK_IMPORTED_MODULE_6__["objectWithBoolean"])(Object.fromEntries(formData));
        if (!(formProps === null || formProps === void 0 ? void 0 : formProps.available)) {
            formProps.availability = "";
        }
        console.log(formProps);
        Object(store_actions__WEBPACK_IMPORTED_MODULE_5__["setDoctorsAvailability"])(_objectSpread({}, formProps, {
            id: props === null || props === void 0 ? void 0 : props.id
        })).then(function(data) {
            setAvailable(formProps === null || formProps === void 0 ? void 0 : formProps.availability);
            setSuccessAlertWithTimer("Updated Availability");
            (props === null || props === void 0 ? void 0 : props.id) && props.getProfileData({
                id: props === null || props === void 0 ? void 0 : props.id
            });
            setOpen(false);
        }).catch(function(err) {
            console.log("Db issue");
        });
    };
    var DataTable = function(param) {
        var rows = param.rows;
        if (rows) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
                style: {
                    height: "100vh",
                    width: "100%"
                }
            }, !rows.length ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                sx: {
                    mt: 2,
                    mb: 1
                }
            }, "No Appointments") : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_3__["DataGrid"], {
                rows: rows,
                columns: columns,
                pageSize: 15,
                disableSelectionOnClick: true,
                onRowClick: handleRowClick
            }));
        }
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            sx: {
                mt: 2,
                mb: 1
            }
        }, "Loading");
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "WeCare")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            backgroundColor: "background.default",
            minHeight: "100vh",
            py: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        maxWidth: false
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "primary",
        variant: "contained",
        onClick: handleClickOpen
    }, "Update Availibility")), successAlert && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
        severity: "success"
    }, successAlert), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            pt: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DataTable, {
        rows: props === null || props === void 0 ? void 0 : props.appointments
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
        open: !!activeUser,
        onClose: handleClose,
        fullWidth: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
        className: "",
        noValidate: true,
        onSubmit: handleSubmitActiveUser
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, activeUser === null || activeUser === void 0 ? void 0 : (ref3 = activeUser.user) === null || ref3 === void 0 ? void 0 : ref3.firstName), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], null, "Notes"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            my: 2
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextareaAutosize"], {
        id: "datetime-local",
        minRows: 10,
        defaultValue: activeUser === null || activeUser === void 0 ? void 0 : (ref4 = activeUser.user) === null || ref4 === void 0 ? void 0 : ref4.notes,
        className: "full-width"
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: handleClose
    }, "Cancel"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "submit"
    }, "Save Details")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
        open: open,
        onClose: handleClose
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
        className: "",
        noValidate: true,
        onSubmit: handleSubmit
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, "Provide Medical Assistance"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
        control: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
            defaultChecked: available,
            onChange: handleToggleAvailability,
            name: "available",
            value: "true"
        }),
        label: "Available"
    }), available && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], null, "Set up your availability"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            my: 2
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        id: "datetime-local",
        name: "availability",
        label: "To",
        type: "datetime-local",
        defaultValue: (props === null || props === void 0 ? void 0 : (ref5 = props.doctor) === null || ref5 === void 0 ? void 0 : ref5.availability) && Object(utils_json__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(props === null || props === void 0 ? void 0 : (ref6 = props.doctor) === null || ref6 === void 0 ? void 0 : ref6.availability) || "2017-06-04T10:30",
        className: "mb-2",
        InputLabelProps: {
            shrink: true
        }
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: handleClose
    }, "Cancel"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "submit"
    }, "Save Details")))));
};
var mapStateToProps = function(param) {
    var userProfileReducer = param.userProfileReducer;
    return _objectSpread({}, userProfileReducer);
};
var mapDispatchToProps = {
    setGetHelp: store_actions__WEBPACK_IMPORTED_MODULE_5__["setGetHelp"],
    getProfileData: store_actions__WEBPACK_IMPORTED_MODULE_5__["getProfileData"]
};
var ConnectedDoctorSchedule = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedDoctorSchedule);


/***/ }),

/***/ "./src/shared/pages/Register/Register.css":
/*!************************************************!*\
  !*** ./src/shared/pages/Register/Register.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1651689686249
      var cssReload = __webpack_require__(/*! ../../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/shared/styles.css":
/*!*******************************!*\
  !*** ./src/shared/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1651689685731
      var cssReload = __webpack_require__(/*! ../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "?0757":
false,

/***/ "?467f":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuMThlZTRhNjVhY2ZlYTZhMzY2NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvTWVkaWNhbEFzc2lzdGFuY2UvTWVkaWNhbEFzc2lzdGFuY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvUmVnaXN0ZXIvUmVnaXN0ZXIuY3NzPzRkYzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdHlsZXMuY3NzPzI4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcbmltcG9ydCB7XG4gICAgQm94LFxuICAgIEJ1dHRvbixcbiAgICBDb250YWluZXIsXG4gICAgRGlhbG9nLFxuICAgIERpYWxvZ0FjdGlvbnMsXG4gICAgRGlhbG9nQ29udGVudCxcbiAgICBEaWFsb2dDb250ZW50VGV4dCxcbiAgICBEaWFsb2dUaXRsZSxcbiAgICBUZXh0RmllbGQsXG4gICAgVGV4dGFyZWFBdXRvc2l6ZSxcbiAgICBUeXBvZ3JhcGh5LFxuICAgIFN3aXRjaCxcbiAgICBGb3JtQ29udHJvbExhYmVsLFxuICAgIEFsZXJ0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9kYXRhLWdyaWQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gICAgZ2V0QWxsRG9jdG9yc0FwcG9pbnRtZW50cyxcbiAgICBzZXREb2N0b3JzQXZhaWxhYmlsaXR5LFxuICAgIHNldEdldEhlbHAsXG4gICAgZ2V0UHJvZmlsZURhdGEsXG59IGZyb20gJ3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgb2JqZWN0V2l0aEJvb2xlYW4sIGZvcm1hdERhdGUsIHByZXR0eURhdGUgfSBmcm9tIFwidXRpbHMvanNvblwiO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgICAgZmllbGQ6ICd0aW1lJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ1RpbWUnLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcHJldHR5RGF0ZShwYXJhbXM/LnZhbHVlKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdmdWxsTmFtZScsXG4gICAgICAgIGhlYWRlck5hbWU6ICdGdWxsIG5hbWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgY29sdW1uIGhhcyBhIHZhbHVlIGdldHRlciBhbmQgaXMgbm90IHNvcnRhYmxlLicsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKTtcbiAgICAgICAgICAgIHJldHVybiBgJHt1c2VyPy5maXJzdE5hbWUgfHwgJyd9ICR7dXNlcj8ubGFzdE5hbWUgfHwgJyd9YDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdzdGF0ZScsXG4gICAgICAgIGhlYWRlck5hbWU6ICdTdGF0ZScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKT8uYWRkcmVzcz8uc3RhdGUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ0dlbmRlcicsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKT8udXNlck1ldGFEYXRhPy5nZW5kZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnbm90ZXMnLFxuICAgICAgICBoZWFkZXJOYW1lOiAnbm90ZXMnLFxuICAgICAgICBmbGV4OiAxLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRG9jdG9yU2NoZWR1bGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZVVzZXIsIHNldEFjdGl2ZVVzZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1Y2Nlc3NBbGVydCwgc2V0U3VjY2Vzc0FsZXJ0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXZhaWxhYmxlLCBzZXRBdmFpbGFibGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb3BzPy5pZCAmJiBwcm9wcy5nZXRQcm9maWxlRGF0YSh7IGlkOiBwcm9wcz8uaWQgfSk7XG4gICAgfSwgW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEF2YWlsYWJsZSghIXByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSk7XG4gICAgfSwgW3Byb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJvd0NsaWNrID0gKHsgcm93IH0pID0+IHtcbiAgICAgICAgc2V0QWN0aXZlVXNlcihyb3cpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0U3VjY2Vzc0FsZXJ0V2l0aFRpbWVyID0gKG1zZykgPT4ge1xuICAgICAgICBzZXRTdWNjZXNzQWxlcnQobXNnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWNjZXNzQWxlcnQoJycpO1xuICAgICAgICB9LCA2MDAwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVVc2VyKG51bGwpO1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUF2YWlsYWJpbGl0eSA9IChlLCBjaGVja2VkKSA9PiB7XG4gICAgICAgIHNldEF2YWlsYWJsZShjaGVja2VkKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdEFjdGl2ZVVzZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gb2JqZWN0V2l0aEJvb2xlYW4oT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1Qcm9wcywgYWN0aXZlVXNlcik7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gb2JqZWN0V2l0aEJvb2xlYW4oT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSk7XG4gICAgICAgIGlmICghZm9ybVByb3BzPy5hdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGZvcm1Qcm9wcy5hdmFpbGFiaWxpdHkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtUHJvcHMpO1xuICAgICAgICBzZXREb2N0b3JzQXZhaWxhYmlsaXR5KHsgLi4uZm9ybVByb3BzLCBpZDogcHJvcHM/LmlkIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEF2YWlsYWJsZShmb3JtUHJvcHM/LmF2YWlsYWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgc2V0U3VjY2Vzc0FsZXJ0V2l0aFRpbWVyKCdVcGRhdGVkIEF2YWlsYWJpbGl0eScpO1xuICAgICAgICAgICAgICAgIHByb3BzPy5pZCAmJiBwcm9wcy5nZXRQcm9maWxlRGF0YSh7IGlkOiBwcm9wcz8uaWQgfSk7XG4gICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGIgaXNzdWUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgRGF0YVRhYmxlID0gKHsgcm93cyB9KSA9PiB7XG4gICAgICAgIGlmIChyb3dzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICB7IXJvd3MubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19Pk5vIEFwcG9pbnRtZW50czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVNlbGVjdGlvbk9uQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvd0NsaWNrPXtoYW5kbGVSb3dDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBzeD17eyBtdDogMiwgbWI6IDEgfX0+TG9hZGluZzwvVHlwb2dyYXBoeT47XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+V2VDYXJlPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQuZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICAgICAgcHk6IDMsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgQXZhaWxpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzQWxlcnQgJiYgPEFsZXJ0IHNldmVyaXR5PVwic3VjY2Vzc1wiPntzdWNjZXNzQWxlcnR9PC9BbGVydD59XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgcHQ6IDMgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlIHJvd3M9e3Byb3BzPy5hcHBvaW50bWVudHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49eyEhYWN0aXZlVXNlcn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRBY3RpdmVVc2VyfT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+e2FjdGl2ZVVzZXI/LnVzZXI/LmZpcnN0TmFtZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+Tm90ZXM8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBteTogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUm93cz17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aXZlVXNlcj8udXNlcj8ubm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIERldGFpbHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+UHJvdmlkZSBNZWRpY2FsIEFzc2lzdGFuY2U8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlQXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlNldCB1cCB5b3VyIGF2YWlsYWJpbGl0eTwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHM/LmRvY3Rvcj8uYXZhaWxhYmlsaXR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlKHByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDE3LTA2LTA0VDEwOjMwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyUHJvZmlsZVJlZHVjZXIgfSkgPT4gKHtcbiAgICAuLi51c2VyUHJvZmlsZVJlZHVjZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXRHZXRIZWxwLCBnZXRQcm9maWxlRGF0YSB9O1xuXG5jb25zdCBDb25uZWN0ZWREb2N0b3JTY2hlZHVsZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvY3RvclNjaGVkdWxlKTtcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZERvY3RvclNjaGVkdWxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1MTY4OTY4NjI0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjUxNjg5Njg1NzMxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9