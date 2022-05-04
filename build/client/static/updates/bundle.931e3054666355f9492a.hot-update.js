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
    var ref10, ref3, ref4, ref5;
    var ref6 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), open = ref6[0], setOpen = ref6[1];
    var ref7 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), activeUser = ref7[0], setActiveUser = ref7[1];
    var ref8 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](""), 2), successAlert = ref8[0], setSuccessAlert = ref8[1];
    var ref9 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), available = ref9[0], setAvailable = ref9[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function() {
        (props === null || props === void 0 ? void 0 : props.id) && props.getProfileData({
            id: props === null || props === void 0 ? void 0 : props.id
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function() {
        var ref;
        setAvailable(!!(props === null || props === void 0 ? void 0 : (ref = props.doctor) === null || ref === void 0 ? void 0 : ref.availability));
    }, [
        props === null || props === void 0 ? void 0 : (ref10 = props.doctor) === null || ref10 === void 0 ? void 0 : ref10.availability
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
        Object(store_actions__WEBPACK_IMPORTED_MODULE_5__["setAppointment"])(activeUser === null || activeUser === void 0 ? void 0 : activeUser.id, formProps).then(function(data) {
            setSuccessAlertWithTimer("Updated");
            (props === null || props === void 0 ? void 0 : props.id) && props.getProfileData({
                id: props === null || props === void 0 ? void 0 : props.id
            });
            handleClose(false);
        }).catch(function(err) {
            console.log("Db issue");
        });
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
        name: "notes",
        minRows: 10,
        defaultValue: activeUser === null || activeUser === void 0 ? void 0 : activeUser.notes,
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
        defaultValue: (props === null || props === void 0 ? void 0 : (ref4 = props.doctor) === null || ref4 === void 0 ? void 0 : ref4.availability) && Object(utils_json__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(props === null || props === void 0 ? void 0 : (ref5 = props.doctor) === null || ref5 === void 0 ? void 0 : ref5.availability) || "2017-06-04T10:30",
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuOTMxZTMwNTQ2NjYzNTVmOTQ5MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvTWVkaWNhbEFzc2lzdGFuY2UvTWVkaWNhbEFzc2lzdGFuY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XG5pbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLFxuICAgIERpYWxvZyxcbiAgICBEaWFsb2dBY3Rpb25zLFxuICAgIERpYWxvZ0NvbnRlbnQsXG4gICAgRGlhbG9nQ29udGVudFRleHQsXG4gICAgRGlhbG9nVGl0bGUsXG4gICAgVGV4dEZpZWxkLFxuICAgIFRleHRhcmVhQXV0b3NpemUsXG4gICAgVHlwb2dyYXBoeSxcbiAgICBTd2l0Y2gsXG4gICAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgICBBbGVydCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICAgIGdldEFsbERvY3RvcnNBcHBvaW50bWVudHMsXG4gICAgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSxcbiAgICBzZXRHZXRIZWxwLFxuICAgIGdldFByb2ZpbGVEYXRhLFxuICAgIHNldEFwcG9pbnRtZW50LFxufSBmcm9tICdzdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IG9iamVjdFdpdGhCb29sZWFuLCBmb3JtYXREYXRlLCBwcmV0dHlEYXRlIH0gZnJvbSAndXRpbHMvanNvbic7XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgICBmaWVsZDogJ3RpbWUnLFxuICAgICAgICBoZWFkZXJOYW1lOiAnVGltZScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwcmV0dHlEYXRlKHBhcmFtcz8udmFsdWUpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaWVsZDogJ2Z1bGxOYW1lJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ0Z1bGwgbmFtZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBjb2x1bW4gaGFzIGEgdmFsdWUgZ2V0dGVyIGFuZCBpcyBub3Qgc29ydGFibGUuJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHBhcmFtcy5nZXRWYWx1ZShwYXJhbXM/LmlkLCAndXNlcicpO1xuICAgICAgICAgICAgcmV0dXJuIGAke3VzZXI/LmZpcnN0TmFtZSB8fCAnJ30gJHt1c2VyPy5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaWVsZDogJ3N0YXRlJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ1N0YXRlJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHBhcmFtcy5nZXRWYWx1ZShwYXJhbXM/LmlkLCAndXNlcicpPy5hZGRyZXNzPy5zdGF0ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdnZW5kZXInLFxuICAgICAgICBoZWFkZXJOYW1lOiAnR2VuZGVyJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHBhcmFtcy5nZXRWYWx1ZShwYXJhbXM/LmlkLCAndXNlcicpPy51c2VyTWV0YURhdGE/LmdlbmRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdub3RlcycsXG4gICAgICAgIGhlYWRlck5hbWU6ICdub3RlcycsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEb2N0b3JTY2hlZHVsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYWN0aXZlVXNlciwgc2V0QWN0aXZlVXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VjY2Vzc0FsZXJ0LCBzZXRTdWNjZXNzQWxlcnRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthdmFpbGFibGUsIHNldEF2YWlsYWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJvcHM/LmlkICYmIHByb3BzLmdldFByb2ZpbGVEYXRhKHsgaWQ6IHByb3BzPy5pZCB9KTtcbiAgICB9LCBbXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QXZhaWxhYmxlKCEhcHJvcHM/LmRvY3Rvcj8uYXZhaWxhYmlsaXR5KTtcbiAgICB9LCBbcHJvcHM/LmRvY3Rvcj8uYXZhaWxhYmlsaXR5XSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUm93Q2xpY2sgPSAoeyByb3cgfSkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVVc2VyKHJvdyk7XG4gICAgfTtcbiAgICBjb25zdCBzZXRTdWNjZXNzQWxlcnRXaXRoVGltZXIgPSAobXNnKSA9PiB7XG4gICAgICAgIHNldFN1Y2Nlc3NBbGVydChtc2cpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NBbGVydCgnJyk7XG4gICAgICAgIH0sIDYwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZVVzZXIobnVsbCk7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlQXZhaWxhYmlsaXR5ID0gKGUsIGNoZWNrZWQpID0+IHtcbiAgICAgICAgc2V0QXZhaWxhYmxlKGNoZWNrZWQpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0QWN0aXZlVXNlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgICBjb25zdCBmb3JtUHJvcHMgPSBvYmplY3RXaXRoQm9vbGVhbihPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybVByb3BzLCBhY3RpdmVVc2VyKTtcbiAgICAgICAgc2V0QXBwb2ludG1lbnQoYWN0aXZlVXNlcj8uaWQsIGZvcm1Qcm9wcylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3VjY2Vzc0FsZXJ0V2l0aFRpbWVyKCdVcGRhdGVkJyk7XG4gICAgICAgICAgICAgICAgcHJvcHM/LmlkICYmIHByb3BzLmdldFByb2ZpbGVEYXRhKHsgaWQ6IHByb3BzPy5pZCB9KTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZShmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGIgaXNzdWUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IG9iamVjdFdpdGhCb29sZWFuKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSkpO1xuICAgICAgICBpZiAoIWZvcm1Qcm9wcz8uYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBmb3JtUHJvcHMuYXZhaWxhYmlsaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZm9ybVByb3BzKTtcbiAgICAgICAgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSh7IC4uLmZvcm1Qcm9wcywgaWQ6IHByb3BzPy5pZCB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGUoZm9ybVByb3BzPy5hdmFpbGFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NBbGVydFdpdGhUaW1lcignVXBkYXRlZCBBdmFpbGFiaWxpdHknKTtcbiAgICAgICAgICAgICAgICBwcm9wcz8uaWQgJiYgcHJvcHMuZ2V0UHJvZmlsZURhdGEoeyBpZDogcHJvcHM/LmlkIH0pO1xuICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RiIGlzc3VlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IERhdGFUYWJsZSA9ICh7IHJvd3MgfSkgPT4ge1xuICAgICAgICBpZiAocm93cykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgeyFyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG10OiAyLCBtYjogMSB9fT5ObyBBcHBvaW50bWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dDbGljaz17aGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PkxvYWRpbmc8L1R5cG9ncmFwaHk+O1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldlQ2FyZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIEF2YWlsaWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc0FsZXJ0ICYmIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj57c3VjY2Vzc0FsZXJ0fTwvQWxlcnQ+fVxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSByb3dzPXtwcm9wcz8uYXBwb2ludG1lbnRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXshIWFjdGl2ZVVzZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0QWN0aXZlVXNlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57YWN0aXZlVXNlcj8udXNlcj8uZmlyc3ROYW1lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pk5vdGVzPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3M9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGl2ZVVzZXI/Lm5vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+UHJvdmlkZSBNZWRpY2FsIEFzc2lzdGFuY2U8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlQXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlNldCB1cCB5b3VyIGF2YWlsYWJpbGl0eTwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHM/LmRvY3Rvcj8uYXZhaWxhYmlsaXR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlKHByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDE3LTA2LTA0VDEwOjMwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyUHJvZmlsZVJlZHVjZXIgfSkgPT4gKHtcbiAgICAuLi51c2VyUHJvZmlsZVJlZHVjZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXRHZXRIZWxwLCBnZXRQcm9maWxlRGF0YSB9O1xuXG5jb25zdCBDb25uZWN0ZWREb2N0b3JTY2hlZHVsZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvY3RvclNjaGVkdWxlKTtcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZERvY3RvclNjaGVkdWxlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=