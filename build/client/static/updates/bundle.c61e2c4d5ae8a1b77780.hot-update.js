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
            setOpen(false);
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


/***/ }),

/***/ "./src/shared/store/actions.ts":
/*!*************************************!*\
  !*** ./src/shared/store/actions.ts ***!
  \*************************************/
/*! exports provided: setLocale, setGetHelp, updateUserProfile, updateUserProfileDoctorData, signUp, loginApi, getHome, getAllDoctorsAppointments, getAvailableDoctors, setDoctorsAvailability, setAppointment, createAppointment, getHelp, giveHelp, getServiceById, getResourcesById, getProfile, profileUpdate, getProfileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return setLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGetHelp", function() { return setGetHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserProfile", function() { return updateUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserProfileDoctorData", function() { return updateUserProfileDoctorData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginApi", function() { return loginApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDoctorsAppointments", function() { return getAllDoctorsAppointments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableDoctors", function() { return getAvailableDoctors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDoctorsAvailability", function() { return setDoctorsAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppointment", function() { return setAppointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAppointment", function() { return createAppointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelp", function() { return getHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveHelp", function() { return giveHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceById", function() { return getServiceById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourcesById", function() { return getResourcesById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUpdate", function() { return profileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileData", function() { return getProfileData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/action-types */ "./src/shared/store/constants/action-types.ts");


var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    withCredentials: true
});
api.interceptors.request.use(function(config) {
    config.headers.authtoken = typeof window !== "undefined" && window.localStorage.getItem("token") || null;
    return config;
});
var setLocale = function(locale) {
    return {
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SETLOCALE"],
        payload: locale
    };
};
var setGetHelp = function() {
    var payload = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SETGETHELP"],
        payload: payload
    };
};
var updateUserProfile = function(payload) {
    var ref;
    return {
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["updateUser"],
        payload: (payload === null || payload === void 0 ? void 0 : (ref = payload.data) === null || ref === void 0 ? void 0 : ref.data) || (payload === null || payload === void 0 ? void 0 : payload.data) || payload || {}
    };
};
var updateUserProfileDoctorData = function() {
    var payload = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SETDOCTORDATA"],
        payload: payload
    };
};
var jsonToQueryString = function() {
    var json = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var str = Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    }).join("&");
    return str ? "?" + str : "";
};
/* api */ var signUp = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.post("/api/signup", data);
};
var loginApi = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.post("/api/login", data);
};
var getHome = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.get("/api/listing" + jsonToQueryString(data));
};
var getAllDoctorsAppointments = function(id) {
    var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return api.get("/api/appointments/doctors/".concat(id).concat(jsonToQueryString(data)));
};
var getAvailableDoctors = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.get("/api/appointments/doctors" + jsonToQueryString(data));
};
var setDoctorsAvailability = function(data) {
    return api.post("/api/appointments/doctors/".concat((data === null || data === void 0 ? void 0 : data.userId) || (data === null || data === void 0 ? void 0 : data.id)), data);
};
var setAppointment = function(id, data) {
    return api.put("/api/appointments/".concat(id), data);
};
var createAppointment = function(data) {
    return api.post("/api/appointments", data);
};
var getHelp = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.get("/api/gethelp" + jsonToQueryString(data));
};
var giveHelp = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.post("/api/gethelp", data);
};
var getServiceById = function(id) {
    var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return api.get("/api/gethelp/services/".concat(id).concat(jsonToQueryString(data)));
};
var getResourcesById = function(id) {
    var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return api.get("/api/gethelp/resources/".concat(id).concat(jsonToQueryString(data)));
};
var getProfile = function(data) {
    return api.get("/api/user/".concat((data === null || data === void 0 ? void 0 : data.userId) || (data === null || data === void 0 ? void 0 : data.id)).concat(jsonToQueryString(data)));
};
var profileUpdate = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return api.put("/api/user", data);
};
/* Thunk Actions */ var getProfileData = function() {
    var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return function(dispatch) {
        getProfile(data).then(function(r) {
            dispatch(updateUserProfile(r));
        });
    };
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuYzYxZTJjNGQ1YWU4YTFiNzc3ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvTWVkaWNhbEFzc2lzdGFuY2UvTWVkaWNhbEFzc2lzdGFuY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3RvcmUvYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuaW1wb3J0IHtcbiAgICBCb3gsXG4gICAgQnV0dG9uLFxuICAgIENvbnRhaW5lcixcbiAgICBEaWFsb2csXG4gICAgRGlhbG9nQWN0aW9ucyxcbiAgICBEaWFsb2dDb250ZW50LFxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxuICAgIERpYWxvZ1RpdGxlLFxuICAgIFRleHRGaWVsZCxcbiAgICBUZXh0YXJlYUF1dG9zaXplLFxuICAgIFR5cG9ncmFwaHksXG4gICAgU3dpdGNoLFxuICAgIEZvcm1Db250cm9sTGFiZWwsXG4gICAgQWxlcnQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgICBnZXRBbGxEb2N0b3JzQXBwb2ludG1lbnRzLFxuICAgIHNldERvY3RvcnNBdmFpbGFiaWxpdHksXG4gICAgc2V0R2V0SGVscCxcbiAgICBnZXRQcm9maWxlRGF0YSxcbiAgICBzZXRBcHBvaW50bWVudCxcbn0gZnJvbSAnc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBvYmplY3RXaXRoQm9vbGVhbiwgZm9ybWF0RGF0ZSwgcHJldHR5RGF0ZSB9IGZyb20gJ3V0aWxzL2pzb24nO1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgICAgZmllbGQ6ICd0aW1lJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ1RpbWUnLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcHJldHR5RGF0ZShwYXJhbXM/LnZhbHVlKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdmdWxsTmFtZScsXG4gICAgICAgIGhlYWRlck5hbWU6ICdGdWxsIG5hbWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgY29sdW1uIGhhcyBhIHZhbHVlIGdldHRlciBhbmQgaXMgbm90IHNvcnRhYmxlLicsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKTtcbiAgICAgICAgICAgIHJldHVybiBgJHt1c2VyPy5maXJzdE5hbWUgfHwgJyd9ICR7dXNlcj8ubGFzdE5hbWUgfHwgJyd9YDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmllbGQ6ICdzdGF0ZScsXG4gICAgICAgIGhlYWRlck5hbWU6ICdTdGF0ZScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKT8uYWRkcmVzcz8uc3RhdGUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnZ2VuZGVyJyxcbiAgICAgICAgaGVhZGVyTmFtZTogJ0dlbmRlcicsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMuZ2V0VmFsdWUocGFyYW1zPy5pZCwgJ3VzZXInKT8udXNlck1ldGFEYXRhPy5nZW5kZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZpZWxkOiAnbm90ZXMnLFxuICAgICAgICBoZWFkZXJOYW1lOiAnbm90ZXMnLFxuICAgICAgICBmbGV4OiAxLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRG9jdG9yU2NoZWR1bGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZVVzZXIsIHNldEFjdGl2ZVVzZXJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1Y2Nlc3NBbGVydCwgc2V0U3VjY2Vzc0FsZXJ0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYXZhaWxhYmxlLCBzZXRBdmFpbGFibGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb3BzPy5pZCAmJiBwcm9wcy5nZXRQcm9maWxlRGF0YSh7IGlkOiBwcm9wcz8uaWQgfSk7XG4gICAgfSwgW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEF2YWlsYWJsZSghIXByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSk7XG4gICAgfSwgW3Byb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJvd0NsaWNrID0gKHsgcm93IH0pID0+IHtcbiAgICAgICAgc2V0QWN0aXZlVXNlcihyb3cpO1xuICAgIH07XG4gICAgY29uc3Qgc2V0U3VjY2Vzc0FsZXJ0V2l0aFRpbWVyID0gKG1zZykgPT4ge1xuICAgICAgICBzZXRTdWNjZXNzQWxlcnQobXNnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWNjZXNzQWxlcnQoJycpO1xuICAgICAgICB9LCA2MDAwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVVc2VyKG51bGwpO1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUF2YWlsYWJpbGl0eSA9IChlLCBjaGVja2VkKSA9PiB7XG4gICAgICAgIHNldEF2YWlsYWJsZShjaGVja2VkKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdEFjdGl2ZVVzZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gb2JqZWN0V2l0aEJvb2xlYW4oT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1Qcm9wcywgYWN0aXZlVXNlcik7XG4gICAgICAgIHNldEFwcG9pbnRtZW50KGFjdGl2ZVVzZXI/LmlkLCBmb3JtUHJvcHMpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NBbGVydFdpdGhUaW1lcignVXBkYXRlZCcpO1xuICAgICAgICAgICAgICAgIHByb3BzPy5pZCAmJiBwcm9wcy5nZXRQcm9maWxlRGF0YSh7IGlkOiBwcm9wcz8uaWQgfSk7XG4gICAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGIgaXNzdWUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IG9iamVjdFdpdGhCb29sZWFuKE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSkpO1xuICAgICAgICBpZiAoIWZvcm1Qcm9wcz8uYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBmb3JtUHJvcHMuYXZhaWxhYmlsaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZm9ybVByb3BzKTtcbiAgICAgICAgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSh7IC4uLmZvcm1Qcm9wcywgaWQ6IHByb3BzPy5pZCB9KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBdmFpbGFibGUoZm9ybVByb3BzPy5hdmFpbGFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3NBbGVydFdpdGhUaW1lcignVXBkYXRlZCBBdmFpbGFiaWxpdHknKTtcbiAgICAgICAgICAgICAgICBwcm9wcz8uaWQgJiYgcHJvcHMuZ2V0UHJvZmlsZURhdGEoeyBpZDogcHJvcHM/LmlkIH0pO1xuICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RiIGlzc3VlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IERhdGFUYWJsZSA9ICh7IHJvd3MgfSkgPT4ge1xuICAgICAgICBpZiAocm93cykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgeyFyb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG10OiAyLCBtYjogMSB9fT5ObyBBcHBvaW50bWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dDbGljaz17aGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PkxvYWRpbmc8L1R5cG9ncmFwaHk+O1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldlQ2FyZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIEF2YWlsaWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc0FsZXJ0ICYmIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIj57c3VjY2Vzc0FsZXJ0fTwvQWxlcnQ+fVxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZSByb3dzPXtwcm9wcz8uYXBwb2ludG1lbnRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXshIWFjdGl2ZVVzZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiXCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0QWN0aXZlVXNlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57YWN0aXZlVXNlcj8udXNlcj8uZmlyc3ROYW1lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0Pk5vdGVzPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3M9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGl2ZVVzZXI/Lm5vdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+UHJvdmlkZSBNZWRpY2FsIEFzc2lzdGFuY2U8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlQXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlNldCB1cCB5b3VyIGF2YWlsYWJpbGl0eTwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbXk6IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YWlsYWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHM/LmRvY3Rvcj8uYXZhaWxhYmlsaXR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREYXRlKHByb3BzPy5kb2N0b3I/LmF2YWlsYWJpbGl0eSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDE3LTA2LTA0VDEwOjMwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyUHJvZmlsZVJlZHVjZXIgfSkgPT4gKHtcbiAgICAuLi51c2VyUHJvZmlsZVJlZHVjZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzZXRHZXRIZWxwLCBnZXRQcm9maWxlRGF0YSB9O1xuXG5jb25zdCBDb25uZWN0ZWREb2N0b3JTY2hlZHVsZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvY3RvclNjaGVkdWxlKTtcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RlZERvY3RvclNjaGVkdWxlO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL3VzZXIvdHlwZXMnO1xuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcbmFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKGNvbmZpZykgPT4ge1xuICAgIGNvbmZpZy5oZWFkZXJzLmF1dGh0b2tlbiA9XG4gICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHx8IG51bGw7XG4gICAgcmV0dXJuIGNvbmZpZztcbn0pO1xuZXhwb3J0IGNvbnN0IHNldExvY2FsZSA9IChsb2NhbGU6IExvY2FsZSkgPT4gKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRMT0NBTEUsXG4gICAgcGF5bG9hZDogbG9jYWxlLFxufSk7XG5leHBvcnQgY29uc3Qgc2V0R2V0SGVscCA9IChwYXlsb2FkID0ge30pID0+ICh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUR0VUSEVMUCxcbiAgICBwYXlsb2FkLFxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclByb2ZpbGUgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy51cGRhdGVVc2VyLFxuICAgIHBheWxvYWQ6IHBheWxvYWQ/LmRhdGE/LmRhdGEgfHwgcGF5bG9hZD8uZGF0YSB8fCBwYXlsb2FkIHx8IHt9LFxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclByb2ZpbGVEb2N0b3JEYXRhID0gKHBheWxvYWQgPSB7fSkgPT4gKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRET0NUT1JEQVRBLFxuICAgIHBheWxvYWQsXG59KTtcbmNvbnN0IGpzb25Ub1F1ZXJ5U3RyaW5nID0gKGpzb24gPSB7fSkgPT4ge1xuICAgIGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGpzb24pXG4gICAgICAgIC5tYXAoKGtleSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoanNvbltrZXldKSlcbiAgICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gc3RyID8gJz8nICsgc3RyIDogJyc7XG59O1xuXG4vKiBhcGkgKi9cbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZGF0YSA9IHt9KSA9PiBhcGkucG9zdCgnL2FwaS9zaWdudXAnLCBkYXRhKTtcbmV4cG9ydCBjb25zdCBsb2dpbkFwaSA9IChkYXRhID0ge30pID0+IGFwaS5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XG5leHBvcnQgY29uc3QgZ2V0SG9tZSA9IChkYXRhID0ge30pID0+IGFwaS5nZXQoJy9hcGkvbGlzdGluZycgKyBqc29uVG9RdWVyeVN0cmluZyhkYXRhKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxEb2N0b3JzQXBwb2ludG1lbnRzID0gKGlkLCBkYXRhID0ge30pID0+XG4gICAgYXBpLmdldChgL2FwaS9hcHBvaW50bWVudHMvZG9jdG9ycy8ke2lkfSR7anNvblRvUXVlcnlTdHJpbmcoZGF0YSl9YCk7XG5leHBvcnQgY29uc3QgZ2V0QXZhaWxhYmxlRG9jdG9ycyA9IChkYXRhID0ge30pID0+XG4gICAgYXBpLmdldCgnL2FwaS9hcHBvaW50bWVudHMvZG9jdG9ycycgKyBqc29uVG9RdWVyeVN0cmluZyhkYXRhKSk7XG5leHBvcnQgY29uc3Qgc2V0RG9jdG9yc0F2YWlsYWJpbGl0eSA9IChkYXRhKSA9PlxuICAgIGFwaS5wb3N0KGAvYXBpL2FwcG9pbnRtZW50cy9kb2N0b3JzLyR7ZGF0YT8udXNlcklkIHx8IGRhdGE/LmlkfWAsIGRhdGEpO1xuZXhwb3J0IGNvbnN0IHNldEFwcG9pbnRtZW50ID0gKGlkLCBkYXRhKSA9PiBhcGkucHV0KGAvYXBpL2FwcG9pbnRtZW50cy8ke2lkfWAsIGRhdGEpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcG9pbnRtZW50ID0gKGRhdGEpID0+IGFwaS5wb3N0KCcvYXBpL2FwcG9pbnRtZW50cycsIGRhdGEpO1xuZXhwb3J0IGNvbnN0IGdldEhlbHAgPSAoZGF0YSA9IHt9KSA9PiBhcGkuZ2V0KCcvYXBpL2dldGhlbHAnICsganNvblRvUXVlcnlTdHJpbmcoZGF0YSkpO1xuZXhwb3J0IGNvbnN0IGdpdmVIZWxwID0gKGRhdGEgPSB7fSkgPT4gYXBpLnBvc3QoJy9hcGkvZ2V0aGVscCcsIGRhdGEpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZpY2VCeUlkID0gKGlkLCBkYXRhID0ge30pID0+XG4gICAgYXBpLmdldChgL2FwaS9nZXRoZWxwL3NlcnZpY2VzLyR7aWR9JHtqc29uVG9RdWVyeVN0cmluZyhkYXRhKX1gKTtcbmV4cG9ydCBjb25zdCBnZXRSZXNvdXJjZXNCeUlkID0gKGlkLCBkYXRhID0ge30pID0+XG4gICAgYXBpLmdldChgL2FwaS9nZXRoZWxwL3Jlc291cmNlcy8ke2lkfSR7anNvblRvUXVlcnlTdHJpbmcoZGF0YSl9YCk7XG5leHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IChkYXRhKSA9PlxuICAgIGFwaS5nZXQoYC9hcGkvdXNlci8ke2RhdGE/LnVzZXJJZCB8fCBkYXRhPy5pZH0ke2pzb25Ub1F1ZXJ5U3RyaW5nKGRhdGEpfWApO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVVcGRhdGUgPSAoZGF0YSA9IHt9KSA9PiBhcGkucHV0KCcvYXBpL3VzZXInLCBkYXRhKTtcbi8qIFRodW5rIEFjdGlvbnMgKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlRGF0YSA9IChkYXRhID0ge30pID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIGdldFByb2ZpbGUoZGF0YSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlVXNlclByb2ZpbGUocikpO1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==