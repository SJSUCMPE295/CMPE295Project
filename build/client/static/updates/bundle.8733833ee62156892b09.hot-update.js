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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuODczMzgzM2VlNjIxNTY4OTJiMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvTWVkaWNhbEFzc2lzdGFuY2UvTWVkaWNhbEFzc2lzdGFuY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XG5pbXBvcnQge1xuICAgIEJveCxcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLFxuICAgIERpYWxvZyxcbiAgICBEaWFsb2dBY3Rpb25zLFxuICAgIERpYWxvZ0NvbnRlbnQsXG4gICAgRGlhbG9nQ29udGVudFRleHQsXG4gICAgRGlhbG9nVGl0bGUsXG4gICAgVGV4dEZpZWxkLFxuICAgIFRleHRhcmVhQXV0b3NpemUsXG4gICAgVHlwb2dyYXBoeSxcbiAgICBTd2l0Y2gsXG4gICAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgICBBbGVydCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICAgIGdldEFsbERvY3RvcnNBcHBvaW50bWVudHMsXG4gICAgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSxcbiAgICBzZXRHZXRIZWxwLFxuICAgIGdldFByb2ZpbGVEYXRhLFxufSBmcm9tICdzdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IG9iamVjdFdpdGhCb29sZWFuLCBmb3JtYXREYXRlLCBwcmV0dHlEYXRlIH0gZnJvbSBcInV0aWxzL2pzb25cIjtcblxuY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICAgIGZpZWxkOiAndGltZScsXG4gICAgICAgIGhlYWRlck5hbWU6ICdUaW1lJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHByZXR0eURhdGUocGFyYW1zPy52YWx1ZSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnZnVsbE5hbWUnLFxuICAgICAgICBoZWFkZXJOYW1lOiAnRnVsbCBuYW1lJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS4nLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gcGFyYW1zLmdldFZhbHVlKHBhcmFtcz8uaWQsICd1c2VyJyk7XG4gICAgICAgICAgICByZXR1cm4gYCR7dXNlcj8uZmlyc3ROYW1lIHx8ICcnfSAke3VzZXI/Lmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnc3RhdGUnLFxuICAgICAgICBoZWFkZXJOYW1lOiAnU3RhdGUnLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcGFyYW1zLmdldFZhbHVlKHBhcmFtcz8uaWQsICd1c2VyJyk/LmFkZHJlc3M/LnN0YXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaWVsZDogJ2dlbmRlcicsXG4gICAgICAgIGhlYWRlck5hbWU6ICdHZW5kZXInLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcGFyYW1zLmdldFZhbHVlKHBhcmFtcz8uaWQsICd1c2VyJyk/LnVzZXJNZXRhRGF0YT8uZ2VuZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBmaWVsZDogJ25vdGVzJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ25vdGVzJyxcbiAgICAgICAgZmxleDogMSxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IERvY3RvclNjaGVkdWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthY3RpdmVVc2VyLCBzZXRBY3RpdmVVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdWNjZXNzQWxlcnQsIHNldFN1Y2Nlc3NBbGVydF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2F2YWlsYWJsZSwgc2V0QXZhaWxhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwcm9wcz8uaWQgJiYgcHJvcHMuZ2V0UHJvZmlsZURhdGEoeyBpZDogcHJvcHM/LmlkIH0pO1xuICAgIH0sIFtdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRBdmFpbGFibGUoISFwcm9wcz8uZG9jdG9yPy5hdmFpbGFiaWxpdHkpO1xuICAgIH0sIFtwcm9wcz8uZG9jdG9yPy5hdmFpbGFiaWxpdHldKTtcbiAgICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSb3dDbGljayA9ICh7IHJvdyB9KSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZVVzZXIocm93KTtcbiAgICB9O1xuICAgIGNvbnN0IHNldFN1Y2Nlc3NBbGVydFdpdGhUaW1lciA9IChtc2cpID0+IHtcbiAgICAgICAgc2V0U3VjY2Vzc0FsZXJ0KG1zZyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3VjY2Vzc0FsZXJ0KCcnKTtcbiAgICAgICAgfSwgNjAwMCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlVXNlcihudWxsKTtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVBdmFpbGFiaWxpdHkgPSAoZSwgY2hlY2tlZCkgPT4ge1xuICAgICAgICBzZXRBdmFpbGFibGUoY2hlY2tlZCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRBY3RpdmVVc2VyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IG9iamVjdFdpdGhCb29sZWFuKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtUHJvcHMsIGFjdGl2ZVVzZXIpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IG9iamVjdFdpdGhCb29sZWFuKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSkpO1xuICAgICAgICBpZiAoIWZvcm1Qcm9wcz8uYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBmb3JtUHJvcHMuYXZhaWxhYmlsaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZm9ybVByb3BzKTtcbiAgICAgICAgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSh7IC4uLmZvcm1Qcm9wcywgaWQ6IHByb3BzPy5pZCB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGUoZm9ybVByb3BzPy5hdmFpbGFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NBbGVydFdpdGhUaW1lcignVXBkYXRlZCBBdmFpbGFiaWxpdHknKTtcbiAgICAgICAgICAgICAgICBwcm9wcz8uaWQgJiYgcHJvcHMuZ2V0UHJvZmlsZURhdGEoeyBpZDogcHJvcHM/LmlkIH0pO1xuICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RiIGlzc3VlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IERhdGFUYWJsZSA9ICh7IHJvd3MgfSkgPT4ge1xuICAgICAgICBpZiAocm93cykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgeyFyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG10OiAyLCBtYjogMSB9fT5ObyBBcHBvaW50bWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dDbGljaz17aGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PkxvYWRpbmc8L1R5cG9ncmFwaHk+O1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldlQ2FyZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIEF2YWlsaWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc0FsZXJ0ICYmIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj57c3VjY2Vzc0FsZXJ0fTwvQWxlcnQ+fVxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSByb3dzPXtwcm9wcz8uYXBwb2ludG1lbnRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXshIWFjdGl2ZVVzZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0QWN0aXZlVXNlcn0+XG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPnthY3RpdmVVc2VyPy51c2VyPy5maXJzdE5hbWV9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pk5vdGVzPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3M9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGl2ZVVzZXI/Lm5vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBEZXRhaWxzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPlByb3ZpZGUgTWVkaWNhbCBBc3Npc3RhbmNlPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17YXZhaWxhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZ2dsZUF2YWlsYWJpbGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5TZXQgdXAgeW91ciBhdmFpbGFiaWxpdHk8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG15OiAyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdmFpbGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGF0ZShwcm9wcz8uZG9jdG9yPy5hdmFpbGFiaWxpdHkpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAxNy0wNi0wNFQxMDozMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIERldGFpbHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdXNlclByb2ZpbGVSZWR1Y2VyIH0pID0+ICh7XG4gICAgLi4udXNlclByb2ZpbGVSZWR1Y2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgc2V0R2V0SGVscCwgZ2V0UHJvZmlsZURhdGEgfTtcblxuY29uc3QgQ29ubmVjdGVkRG9jdG9yU2NoZWR1bGUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb2N0b3JTY2hlZHVsZSk7XG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWREb2N0b3JTY2hlZHVsZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==