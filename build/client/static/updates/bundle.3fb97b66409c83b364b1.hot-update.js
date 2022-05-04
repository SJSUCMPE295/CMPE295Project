webpackHotUpdate("bundle",{

/***/ "./src/shared/components/dashboard/Statistics.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/dashboard/Statistics.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Money */ "./node_modules/@material-ui/icons/Money.js");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/colors/index.js");
/* harmony import */ var _material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/InsertChartOutlined */ "./node_modules/@material-ui/icons/InsertChartOutlined.js");
/* harmony import */ var _material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PeopleOutlined */ "./node_modules/@material-ui/icons/PeopleOutlined.js");
/* harmony import */ var _material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AutoAwesomeMosaic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AutoAwesomeMosaic */ "./node_modules/@material-ui/icons/AutoAwesomeMosaic.js");
/* harmony import */ var _material_ui_icons_AutoAwesomeMosaic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AutoAwesomeMosaic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_dashboard_HealthNews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/dashboard/HealthNews */ "./src/shared/components/dashboard/HealthNews.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/json */ "./src/shared/utils/json.ts");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
















var Statistics = function(param1) {
    var userProfileReducer = param1.userProfileReducer, props = param1.props;
    var UserId = userProfileReducer.id; //'6225e61bf81d2541a4000bc9'//userProfileReducer.id;
    console.log(UserId);
    //const [loading, setLoading] = useState(true);
    var ref = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), data = ref[0], setData = ref[1];
    var ref1 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), error1 = ref1[0], setError = ref1[1];
    //'617f2fb40583ba49a0091425';
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function() {
        // if (typeof myVar !== 'undefined'
        var token = localStorage.getItem("token");
        // set the with credentials to true
        axios__WEBPACK_IMPORTED_MODULE_13___default.a.defaults.withCredentials = true;
        axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/api/home", {
            params: {
                user: UserId
            }
        }, {
            headers: {
                authtoken: token
            }
        }).then(function(response) {
            console.log(response.data);
            setData(response === null || response === void 0 ? void 0 : response.data);
        }, function(error) {
            console.log(error);
            setError(error);
        });
    //.finally(()=> {setLoading(false); })
    }, []);
    //if (loading) return "Loading...."
    //if (error) return "Error"
    var resourcename = [];
    var resourcesku = [];
    var transactiontype = [];
    var transactioncount = [];
    var totalusertrans = 0;
    var totalresources = 0;
    var usertransactions = {};
    var userappointments = {};
    var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
    if (data != null) {
        var resources = data.resources;
        resources.forEach(function(element) {
            resourcename.push(element._id);
            resourcesku.push(element.resource_SKU);
        });
        totalresources = resourcesku.reduce(function(result, number) {
            return result + number;
        });
        usertransactions = data.usertransactions;
        if (usertransactions.length > 0) {
            usertransactions.forEach(function(element) {
                transactiontype.push(element._id);
                transactioncount.push(element.count);
            });
            totalusertrans = transactioncount.reduce(function(result, number) {
                return result + number;
            });
        }
        userappointments = data === null || data === void 0 ? void 0 : data.userappointments;
    }
    var data_donut = {
        datasets: [
            {
                data: transactioncount,
                backgroundColor: [
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[500],
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].orange[600]
                ],
                borderWidth: 8,
                borderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].common.white,
                hoverBorderColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].common.white
            }, 
        ],
        labels: transactiontype
    };
    var options_donut = {
        animation: false,
        cutoutPercentage: 80,
        layout: {
            padding: 0
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: "index",
            titleFontColor: theme.palette.text.primary
        }
    };
    var datab = {
        datasets: [
            {
                backgroundColor: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["colors"].indigo[500],
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: resourcesku,
                label: "Quantity available",
                maxBarThickness: 13
            }, 
        ],
        labels: resourcename
    };
    var options = {
        animation: false,
        cornerRadius: 20,
        layout: {
            padding: 0
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: {
                ticks: {
                    Color: theme.palette.text.secondary
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [
                        2
                    ],
                    borderDashOffset: [
                        2
                    ],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [
                        2
                    ],
                    zeroLineBorderDashOffset: [
                        2
                    ],
                    zeroLineColor: theme.palette.divider
                }
            }
        },
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: "index",
            titleFontColor: theme.palette.text.primary
        }
    };
    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0), 2), page = ref2[0], setPage = ref2[1];
    var ref3 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(8), 2), rowsPerPage = ref3[0], setRowsPerPage = ref3[1];
    var handleChangePage = function(event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 3,
        sm: 6,
        xl: 3,
        xs: 12
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({
        sx: {
            height: "100%"
        }
    }, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 3,
        sx: {
            justifyContent: "space-between"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        gutterBottom: true,
        variant: "h6"
    }, "TOTAL TRANSACTIONS"), data != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textPrimary",
        variant: "h3"
    }, data.transactions) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        sx: {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["red"][600],
            height: 56,
            width: 56
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_7___default.a, null)))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            pt: 2,
            display: "flex",
            alignItems: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        sx: {
            color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["green"][900],
            mr: 1
        },
        variant: "body2"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        variant: "caption"
    }))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 3,
        sm: 6,
        xl: 3,
        xs: 12
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({
        sx: {
            height: "100%"
        }
    }, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 3,
        sx: {
            justifyContent: "space-between"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        gutterBottom: true,
        variant: "h6"
    }, "RESOURCES"), data != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textPrimary",
        variant: "h3"
    }, totalresources) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        sx: {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["orange"][600],
            height: 56,
            width: 56
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, null))))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 3,
        sm: 6,
        xl: 3,
        xs: 12
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 3,
        sx: {
            justifyContent: "space-between"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        gutterBottom: true,
        variant: "h6"
    }, "TOTAL USERS"), data != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textPrimary",
        variant: "h3"
    }, data.users) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        sx: {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["green"][600],
            height: 56,
            width: 56
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PeopleOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, null)))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            alignItems: "center",
            display: "flex",
            pt: 2
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "body2",
        sx: {
            color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["green"][900],
            mr: 1
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        variant: "caption"
    }))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 3,
        sm: 6,
        xl: 3,
        xs: 12
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, props, {
        sx: {
            height: "100%"
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 3,
        sx: {
            justifyContent: "space-between"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textSecondary",
        gutterBottom: true,
        variant: "h6"
    }, "SERVICES"), data != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textPrimary",
        variant: "h3"
    }, data.services.length) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        sx: {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["indigo"][600],
            height: 56,
            width: 56
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AutoAwesomeMosaic__WEBPACK_IMPORTED_MODULE_11___default.a, null))))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        align: "left",
        direction: "row",
        item: true,
        container: true,
        spacing: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 9,
        md: 12,
        xl: 9,
        xs: 12
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        paddingBottom: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
        /*action={
                    <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
                        Medical
                    </Button>
                }*/ title: "Available Resources"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            height: 400,
            position: "relative"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
        data: datab,
        options: options
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            display: "flex",
            justifyContent: "flex-end",
            p: 2
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        href: "/app/gethelp",
        color: "primary",
        endIcon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, null),
        size: "small",
        variant: "text"
    }, "VIEW ALL")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
        title: "Available Services"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            minWidth: 800
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, "Service Name"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, "Category"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableSortLabel"], null, "Available Date")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, "Zip Code"))), data != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null, data.services.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function(service) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
            hover: true,
            key: service._id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, service.Service_Name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, service.Category), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, moment__WEBPACK_IMPORTED_MODULE_3___default()(service.availableDate).format("MM/DD/YYYY")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], null, service.Zipcode));
    })) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TablePagination"], {
        rowsPerPageOptions: [
            8,
            16,
            24
        ],
        component: "div",
        count: data === null || data === void 0 ? void 0 : data.services.length,
        rowsPerPage: rowsPerPage,
        page: page,
        onPageChange: handleChangePage,
        onRowsPerPageChange: handleChangeRowsPerPage
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            display: "flex",
            justifyContent: "flex-end",
            p: 2
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        href: "/app/gethelp",
        color: "primary",
        endIcon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, null),
        size: "small",
        variant: "text"
    }, "View all"))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        lg: 3,
        md: 12,
        xl: 3,
        xs: 12
    }, UserId != "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        paddingBottom: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
        title: "My Activity"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "h6"
    }, "Total Transactions : ", totalusertrans), data && usertransactions.length > 0 ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            height: 300,
            position: "relative"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Doughnut"], {
        data: data_donut,
        options: options_donut
    })) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
            //height: 300,
            position: "relative"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "h6"
    }, "Upcoming Appointments"), data != null ? userappointments.length > 0 ? userappointments.map(function(param) {
        var doctor_name = param.doctor_name, AppointmentDetails = param.AppointmentDetails, time = param.time, _id = param._id;
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            color: "textPrimary",
            variant: "text",
            key: _id
        }, "You have an appointment with", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, doctor_name), " at", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, Object(utils_json__WEBPACK_IMPORTED_MODULE_14__["prettyDate"])(time)));
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "textPrimary",
        variant: "h7"
    }, "You do not have any appointment scheduled.") : null)))) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        style: {
            maxHeight: "100vh",
            overflow: "auto"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_HealthNews__WEBPACK_IMPORTED_MODULE_12__["default"], null)))));
};
var mapStateToProps = function(param) {
    var userProfileReducer = param.userProfileReducer;
    return {
        userProfileReducer: userProfileReducer
    };
};
var mapDispatchToProps = {};
var ConnectedStatistics = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Statistics);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedStatistics); //export default Statistics;


/***/ }),

/***/ "./src/shared/components/givehelp/CountryData.json":
/*!*********************************************************!*\
  !*** ./src/shared/components/givehelp/CountryData.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1 684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1 264\",\"code\":\"AI\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1 242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1 246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1 441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+537\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1 767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1 849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1 473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1 671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1 876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+7 7\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1 670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1 939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1 868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1 649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States of America\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"},{\"name\":\"land Islands\",\"dial_code\":\"\",\"code\":\"AX\"},{\"name\":\"Antarctica\",\"dial_code\":null,\"code\":\"AQ\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Congo, The Democratic Republic of the\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Iran, Islamic Republic of\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Korea, Democratic People's Republic of\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Lao People's Democratic Republic\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia, The Former Yugoslav Republic of\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Micronesia, Federated States of\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova, Republic of\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Réunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Saint Barthélemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1 869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1 758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1 784\",\"code\":\"VC\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan, Province of China\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tanzania, United Republic of\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Venezuela, Bolivarian Republic of\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1 284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1 340\",\"code\":\"VI\"}]");

/***/ }),

/***/ "./src/shared/components/mytransactions/CountryData.json":
/*!***************************************************************!*\
  !*** ./src/shared/components/mytransactions/CountryData.json ***!
  \***************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1 684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1 264\",\"code\":\"AI\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1 242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1 246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1 441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+537\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1 767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1 849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1 473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1 671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1 876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+7 7\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1 670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1 939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1 868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1 649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"},{\"name\":\"land Islands\",\"dial_code\":\"\",\"code\":\"AX\"},{\"name\":\"Antarctica\",\"dial_code\":null,\"code\":\"AQ\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Congo, The Democratic Republic of the\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Iran, Islamic Republic of\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Korea, Democratic People's Republic of\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Lao People's Democratic Republic\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia, The Former Yugoslav Republic of\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Micronesia, Federated States of\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova, Republic of\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Réunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Saint Barthélemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1 869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1 758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1 784\",\"code\":\"VC\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan, Province of China\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tanzania, United Republic of\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Venezuela, Bolivarian Republic of\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1 284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1 340\",\"code\":\"VI\"}]");

/***/ }),

/***/ "./src/shared/components/mytransactions/ManageTransactionsCard.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/components/mytransactions/ManageTransactionsCard.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CountryData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CountryData.json */ "./src/shared/components/mytransactions/CountryData.json");
var _CountryData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./CountryData.json */ "./src/shared/components/mytransactions/CountryData.json", 1);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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

/*global google*/ 










var getStates = __webpack_require__(/*! country-state-picker */ "./node_modules/country-state-picker/lib/index.js").getStates;
var getCode = __webpack_require__(/*! country-list */ "./node_modules/country-list/country-list.js").getCode;
var metadata = {
    contentType: "image/jpeg"
};
var ManageTransactionsCard = function(param1) {
    var userProfileReducer = param1.userProfileReducer, props = param1.props;
    var token1 = typeof window !== "undefined" && window.localStorage.getItem("token") || null;
    // set the with credentials to true
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
    var ref43 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), givedata = ref43[0], setGiveData = ref43[1];
    var ref1 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), getdata = ref1[0], setGetData = ref1[1];
    var ref2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), error1 = ref2[0], setError = ref2[1];
    var ref3 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), service1 = ref3[0], setService = ref3[1];
    var UserId = userProfileReducer.id;
    var ref4 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), check = ref4[0], setCheck = ref4[1];
    var userId = userProfileReducer.id;
    var ref5 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), resourceName = ref5[0], setResourceName = ref5[1];
    var ref6 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), category = ref6[0], setCategory = ref6[1];
    var ref7 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), description = ref7[0], setDescription = ref7[1];
    var ref8 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), phoneNum = ref8[0], setPhoneNum = ref8[1];
    var ref9 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("+1"), 2), dialCode = ref9[0], setDialCode = ref9[1];
    var ref10 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), address1 = ref10[0], setAddress = ref10[1];
    var ref11 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2), sku = ref11[0], setSku = ref11[1];
    var ref12 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), city = ref12[0], setCity = ref12[1];
    var ref13 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), state = ref13[0], setState = ref13[1];
    var ref14 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), zipcode = ref14[0], setZipcode = ref14[1];
    var ref15 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("United States of America"), 2), country = ref15[0], setCountry = ref15[1];
    var ref16 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_CountryData_json__WEBPACK_IMPORTED_MODULE_11__), 2), countryNames = ref16[0], setCountryNames = ref16[1];
    var ref17 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("us"), 2), code1 = ref17[0], setCode = ref17[1];
    var ref18 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""), 2), showErrorMsg = ref18[0], setShowErrorMsg = ref18[1];
    var storage = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["getStorage"])();
    var ref19 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), image = ref19[0], setImage = ref19[1];
    var ref20 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), url1 = ref20[0], setUrl = ref20[1];
    var ref21 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("Upload Resource Pic"), 2), fileUploadTitle = ref21[0], setFileUploadTitle = ref21[1];
    var ref22 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), findImage = ref22[0], setFindImage = ref22[1];
    var ref23 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), resourceNameError = ref23[0], setResourceNameError = ref23[1];
    var ref24 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), availabilityError = ref24[0], setAvailabilityError = ref24[1];
    var ref25 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), categoryError = ref25[0], setCategoryError = ref25[1];
    var ref26 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), descriptionError = ref26[0], setDescriptionError = ref26[1];
    var ref27 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), phoneNumError = ref27[0], setPhoneNumError = ref27[1];
    var ref28 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), addressError = ref28[0], setAddressError = ref28[1];
    var ref29 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), skuError = ref29[0], setSkuError = ref29[1];
    var ref30 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), cityError = ref30[0], setCityError = ref30[1];
    var ref31 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), stateError = ref31[0], setStateError = ref31[1];
    var ref32 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), zipcodeError = ref32[0], setZipcodeError = ref32[1];
    var ref33 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), countryError = ref33[0], setCountryError = ref33[1];
    var ref34 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""), 2), serviceName = ref34[0], setServiceName = ref34[1];
    var ref35 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()), 2), availability = ref35[0], setAvailability = ref35[1];
    var ref36 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), datePickerIsOpen = ref36[0], togglePicker = ref36[1];
    var validateFormResource = function() {
        if (resourceName === "" || resourceName === null) {
            setResourceNameError("Please enter resource name");
            return false;
        } else if (category === "" || category === null) {
            setCategoryError("Please enter a category");
            return false;
        } else if (sku.toString() === "0" || sku === null) {
            setSkuError("Please enter valid quantity");
            return false;
        } else if (sku < 0) {
            setSkuError("Please enter a valid quantity");
            return false;
        } else if (description === "" || description === null) {
            setDescriptionError("Please enter description of resource");
            return false;
        } else if (address1 === "" || address1 === null) {
            setAddressError("Please enter a valid address");
            return false;
        } else if (city === "" || city === null) {
            setCityError("Please enter your city of residence");
            return false;
        } else if (state === "" || city === null) {
            setCityError("Please enter your state of residence");
            return false;
        } else if (country === "" || country === null) {
            setCountryError("Please enter your country of residence");
            return false;
        } else if (zipcode === null || zipcode === "") {
            setZipcodeError("Please enter your zipcode");
            return false;
        } else if (zipcode.toString().length != 5) {
            setZipcodeError("Please enter a valid zipcode!");
            return false;
        } else if (phoneNum === "" || phoneNum === null) {
            setPhoneNumError("Please enter your contact number");
            return false;
        } else if (phoneNum.toString().length != 10) {
            setPhoneNumError("Please enter a valid phone number!");
            return false;
        } else {
            return true;
        }
    };
    var validateForm = function() {
        if (serviceName === "" || serviceName === null) {
            setServiceNameError("Please enter service name");
            return false;
        } else if (availability.getTime() < today.getTime()) {
            setAvailabilityError("Please select a valid date!");
        } else if (category === "" || category === null) {
            setCategoryError("Please enter a category");
            return false;
        } else if (description === "" || description === null) {
            setDescriptionError("Please enter description of service");
            return false;
        } else if (address1 === "" || address1 === null) {
            setAddressError("Please enter a valid address");
            return false;
        } else if (city === "" || city === null) {
            setCityError("Please enter your city of residence");
            return false;
        } else if (state === "" || city === null) {
            setCityError("Please enter your state of residence");
            return false;
        } else if (country === "" || country === null) {
            setCountryError("Please enter your country of residence");
            return false;
        } else if (zipcode === null || zipcode === "") {
            setZipcodeError("Please enter your zipcode");
            return false;
        } else if (zipcode.toString().length != 5) {
            setZipcodeError("Please enter a valid zipcode!");
            return false;
        } else if (phoneNum === "" || phoneNum === null) {
            setPhoneNumError("Please enter your contact number");
            return false;
        } else if (phoneNum.toString().length != 10) {
            setPhoneNumError("Please enter a valid phone number!");
            return false;
        } else {
            return true;
        }
    };
    i18n_iso_countries__WEBPACK_IMPORTED_MODULE_10___default.a.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json"));
    var countryObj = i18n_iso_countries__WEBPACK_IMPORTED_MODULE_10___default.a.getNames("en", {
        select: "official"
    });
    var countryArray = Object.entries(countryObj).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
        return {
            label: key,
            value: value
        };
    });
    var handleNameChange = function(e) {
        console.log(e.target.value);
        setResourceNameError("");
        setResourceName(e.target.value);
    };
    var handleServiceNameChange = function(e) {
        console.log(e.target.value);
        setServiceName(e.target.value);
    };
    var handleImageUpload = function(event) {
        console.log("Reached upload image task");
        var file = event.target.files[0];
        if (file == null || !file) {
            console.log("No image");
            setShowErrorMsg("Error: No image available");
            setFindImage(false);
        } else {
            setImage(file);
            setFindImage(true);
            console.log(file);
            var storageRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["ref"])(storage, "/".concat(userProfileReducer.userName, "/resources/").concat(file.name));
            Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["uploadBytes"])(storageRef, file).then(function(snapshot) {
                console.log("Uploaded a blob or file!", snapshot.metadata);
                setFileUploadTitle(snapshot.metadata.name);
                setFindImage(true);
                setShowErrorMsg("Image Uploaded successfully to firebase!");
                Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["getDownloadURL"])(storageRef).then(function(url) {
                    console.log(url);
                    setUrl(url);
                    console.log("url", url);
                }).catch(function(error) {
                    switch(error.code){
                        case "storage/object-not-found":
                            setUrl("");
                            break;
                    }
                });
            });
        }
    };
    var handleImageChange = function(e) {
        console.log("Reached image change");
        if (!findImage) {
            console.log("Image upload failed!");
            alert("Image upload failed! Please try again");
        } else {
            console.log("Image uploaded successfully");
            alert("Image uploaded to firebase!");
        }
    };
    var handleSetCheck = function(e) {
        setAddressError("");
        setCityError("");
        setStateError("");
        setCountryError("");
        setZipcodeError("");
        setPhoneNumError("");
        setCheck(!check);
        if (!check) {
            var _address = userProfileReducer.address, address = _address === void 0 ? {} : _address, _profile = userProfileReducer.profile, profile = _profile === void 0 ? {} : _profile;
            var obj = countryNames.find(function(param) {
                var code = param.code;
                return code === getCode(address.country);
            });
            setAddress(address.location);
            setCity(address.city);
            setCountry(address.country);
            setZipcode(address.zipCode);
            setState(address.state);
            setCode(getCode(address.country));
            setDialCode(obj.dial_code);
            setPhoneNum(profile.phoneNumber);
        } else {
            setAddress("");
            setCity("");
            setCountry("");
            setZipcode("");
            setState("");
            setPhoneNum("");
        }
    };
    var handleCategoryChange = function(e) {
        setCategoryError("");
        setCategory(e.target.value);
    };
    var handleDescriptionChange = function(e) {
        setDescriptionError("");
        setDescription(e.target.value);
    };
    var handlePhoneNumChange = function(e) {
        setPhoneNumError("");
        setPhoneNum(e.target.value);
    };
    var handleAddressChange = function(e) {
        setAddressError("");
        setAddress(e.target.value);
    };
    var handleSkuChange = function(e) {
        setSkuError("");
        setSku(e.target.value);
    };
    var handleCityChange = function(e) {
        setCityError("");
        setCity(e.target.value);
    };
    var handleStateChange = function(e) {
        setStateError("");
        setState(e.target.value);
    };
    var handleZipcodeChange = function(e) {
        setZipcodeError("");
        setZipcode(e.target.value);
    };
    var handleCountryChange = function(e) {
        setCountryError("");
        setCountry(e.target.value);
        var obj = countryNames.find(function(param) {
            var name = param.name;
            return name === e.target.value;
        });
        setCode(getCode(e.target.value));
        setDialCode(obj.dial_code);
    };
    var stateObj = getStates(code1.toLowerCase());
    var stateArray = Object.entries(stateObj).map(function(param) {
        var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
        return {
            label: value,
            value: value
        };
    });
    var handleSubmit = function() {
        var _ref = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
            var token, isValid;
            return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        e.preventDefault();
                        token = localStorage.getItem("token");
                        // set the with credentials to true
                        axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
                        if ((service1 === null || service1 === void 0 ? void 0 : service1.type) == "resource") {
                            isValid = validateFormResource();
                            console.log(isValid);
                            if (isValid) {
                                axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/gethelp/update_resource", {
                                    id: service1 === null || service1 === void 0 ? void 0 : service1._id,
                                    UserId: userProfileReducer.id,
                                    Resource_Name: resourceName,
                                    Category: category,
                                    Description: description,
                                    Phone_Number: phoneNum,
                                    Address: address1,
                                    SKU: sku,
                                    City: city,
                                    State: state,
                                    Zipcode: zipcode,
                                    Country: country,
                                    ImageUrl: url1
                                }, {
                                    headers: {
                                        authtoken: token
                                    }
                                }).then(function(response) {
                                    //history.push('/app/mytransactions');
                                    //setOpenresource(false);
                                    handleTransactionSearch();
                                // history.push('/app/mytransactions');
                                //.filter((m) => m.Availability != 'false')
                                }, function(error) {
                                    alert("Failed to upload resource data! Please try again.");
                                    //console.log("Failed to upload resource data! Please try again.");
                                    console.log(error);
                                    setError(error);
                                });
                            }
                        } else {
                            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/gethelp/update_service", {
                                id: service1 === null || service1 === void 0 ? void 0 : service1._id,
                                UserId: userProfileReducer.id,
                                Service_Name: serviceName,
                                Category: category,
                                Description: description,
                                Phone_Number: phoneNum,
                                Address: address1,
                                availableDate: availability,
                                City: city,
                                State: state,
                                Zipcode: zipcode,
                                Country: country,
                                ImageUrl: url1
                            }, {
                                headers: {
                                    authtoken: token
                                }
                            }).then(function(response) {
                                //history.push('/app/mytransactions');
                                //setOpenresource(false);
                                handleTransactionSearch();
                            //handleTransactionSearch();
                            //history.push('/app/mytransactions');
                            //.filter((m) => m.Availability != 'false')
                            }, function(error) {
                                console.log("Failed to upload resource data! Please try again.");
                                console.log(error);
                                setError(error);
                            });
                        }
                    case 4:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        return function handleSubmit(e) {
            return _ref.apply(this, arguments);
        };
    }();
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function() {
        handleTransactionSearch();
    }, []);
    var ref37 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), openresource = ref37[0], setOpenresource = ref37[1];
    var ref38 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false), 2), openservice = ref38[0], setOpenservice = ref38[1];
    var handleTransactionSearch = function() {
        var token = localStorage.getItem("token");
        // set the with credentials to true
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/gethelp/search/userid", {
            params: {
                userid: userProfileReducer.id
            }
        }, {
            headers: {
                authtoken: token
            }
        }).then(function(response) {
            var ref46, ref44, ref45;
            console.log(response === null || response === void 0 ? void 0 : (ref46 = response.data) === null || ref46 === void 0 ? void 0 : ref46.resources);
            setGiveData(response === null || response === void 0 ? void 0 : (ref44 = response.data) === null || ref44 === void 0 ? void 0 : ref44.resources.filter(function(m) {
                return m.Availability != "false";
            }));
            setGetData(response === null || response === void 0 ? void 0 : (ref45 = response.data) === null || ref45 === void 0 ? void 0 : ref45.getresources);
            setOpenresource(false);
            setOpenservice(false);
        //.filter((m) => m.Availability != 'false')
        }, function(error) {
            console.log(error);
            setError(error);
        });
    };
    var handleEdit = function(service) {
        setService(service);
        if ((service === null || service === void 0 ? void 0 : service.type) == "resource") {
            setOpenresource(true);
            setSku(service === null || service === void 0 ? void 0 : service.SKU);
            setResourceName(service === null || service === void 0 ? void 0 : service.Name);
        } else {
            setOpenservice(true);
            setServiceName(service === null || service === void 0 ? void 0 : service.Name);
            setAvailability(new Date(new Date(service === null || service === void 0 ? void 0 : service.availableDate).toISOString()));
        }
        setAddress(service === null || service === void 0 ? void 0 : service.Address);
        setCity(service === null || service === void 0 ? void 0 : service.City);
        setCountry(service === null || service === void 0 ? void 0 : service.Country);
        setZipcode(service === null || service === void 0 ? void 0 : service.Zipcode);
        setState(service === null || service === void 0 ? void 0 : service.State);
        setPhoneNum(service === null || service === void 0 ? void 0 : service.Phone_Number);
        setCategory(service === null || service === void 0 ? void 0 : service.Category);
        setDescription(service === null || service === void 0 ? void 0 : service.Description);
        setUrl(service === null || service === void 0 ? void 0 : service.ImageUrl);
    };
    var handleImageUploadService = function(event) {
        console.log("Reached upload image task");
        var file = event.target.files[0];
        if (file == null || !file) {
            console.log("No image");
            setShowErrorMsg("Error: No image available");
        } else {
            setImage(file);
            console.log(file);
            var storageRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["ref"])(storage, "/".concat(userProfileReducer.userName, "/services/").concat(file.name));
            Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["uploadBytes"])(storageRef, file).then(function(snapshot) {
                console.log("Uploaded a blob or file!", snapshot.metadata);
                setFileUploadTitle(snapshot.metadata.name);
                setFindImage(true);
                setShowErrorMsg("Image Uploaded successfully to firebase!");
                Object(firebase_storage__WEBPACK_IMPORTED_MODULE_7__["getDownloadURL"])(storageRef).then(function(url) {
                    console.log(url);
                    setUrl(url);
                    console.log("url", url);
                    setFindImage(true);
                }).catch(function(error) {
                    switch(error.code){
                        case "storage/object-not-found":
                            setUrl("");
                            setFindImage(false);
                            break;
                    }
                });
            });
        }
    };
    var handleAvailabilityChange = function(date) {
        setAvailability(date);
    };
    var handleTogglePicker = function(e) {
        togglePicker(!datePickerIsOpen);
    };
    var handleCancel = function() {
        setOpenresource(false);
        setOpenservice(false);
    //history.push('/app/mytransactions');
    };
    var handleDelete = function(service) {
        console.log(service._id);
        var token = localStorage.getItem("token");
        // set the with credentials to true
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/gethelp/delete/id", {
            id: service._id,
            type: service.type
        }).then(function(response) {
            console.log(response);
            //window.location.reload();
            handleTransactionSearch();
        }, function(error) {
            console.log(error);
            setError(error);
        });
    };
    //Pagination gethelp
    var ref39 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0), 2), page = ref39[0], setPage = ref39[1];
    var ref40 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5), 2), rowsPerPage = ref40[0], setRowsPerPage = ref40[1];
    var ref41 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0), 2), pageGive = ref41[0], setPageGive = ref41[1];
    var ref42 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5), 2), rowsPerPageGive = ref42[0], setRowsPerPageGive = ref42[1];
    var handleChangePage = function(event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    //pagination Givehelp data
    var handleChangePageGive = function(event, newPage) {
        setPageGive(newPage);
    };
    var handleChangeRowsPerPageGive = function(event) {
        setRowsPerPageGive(parseInt(event.target.value, 10));
        setPageGive(0);
    };
    // Avoid a layout jump when reaching the last page with empty rows.
    var emptyRows = page > 0 ? Math.max(0, (1 + page) * 5 - (getdata === null || getdata === void 0 ? void 0 : getdata.length)) : 0;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 2
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
        title: "GiveHelp Transactions",
        titleTypographyProps: {
            variant: "h4"
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        sx: {
            minWidth: 800
        }
    }, givedata != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Name"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Type"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Description"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Available Quantity"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "AvailableDate"), " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Address"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Phone Number"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Edit"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Delete"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], null, givedata === null || givedata === void 0 ? void 0 : givedata.slice(pageGive * rowsPerPageGive, pageGive * rowsPerPageGive + rowsPerPageGive).map(function(service) {
        /*#__PURE__*/ return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            hover: true,
            key: service._id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "center"
        }, (service === null || service === void 0 ? void 0 : service.ImageUrl) === "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/images/avatars/resource.png",
            height: "75"
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: service.ImageUrl,
            height: "75"
        }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), service.Name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.type), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.Description), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.SKU), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.type === "resource" ? service.availableDate : moment__WEBPACK_IMPORTED_MODULE_2___default()(service.availableDate).format("MM/DD/YYYY")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.Address + ", " + service.City + ", " + service.State + ", " + service.Country + ", " + service.Zipcode), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.Phone_Number), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
            to: "/app/mytransactions",
            onClick: function() {
                return handleEdit(service);
            }
        }, "Edit")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
            to: "/app/mytransactions",
            onClick: function() {
                return handleDelete(service);
            }
        }, "Delete")));
    }))) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], null, "You do not have any GiveHelp Transactions."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TablePagination"], {
        rowsPerPageOptions: [
            5,
            10,
            25
        ],
        component: "div",
        count: givedata === null || givedata === void 0 ? void 0 : givedata.length,
        rowsPerPage: rowsPerPageGive,
        page: pageGive,
        onPageChange: handleChangePageGive,
        onRowsPerPageChange: handleChangeRowsPerPageGive
    })), " ")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
        title: "GetHelp Transactions",
        titleTypographyProps: {
            variant: "h4"
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        sx: {
            minWidth: 800
        }
    }, getdata != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableHead"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Name"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Type"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Description"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Quantity"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "AvailableDate"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "Address"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "PhoneNumber"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, "TransactionDate"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], null, getdata === null || getdata === void 0 ? void 0 : getdata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function(service) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            hover: true,
            key: service._id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "center"
        }, service.ImageUrl === "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: "/static/images/avatars/resource.png",
            height: "75"
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: service.ImageUrl,
            height: "75"
        }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), service.Name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.type), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.Description), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.SKU), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.type === "resource" ? service.availableDate : moment__WEBPACK_IMPORTED_MODULE_2___default()(service.availableDate).format("MM/DD/YYYY")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.address), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, service.Phone_Number), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, moment__WEBPACK_IMPORTED_MODULE_2___default()(service.Date).format("MM/DD/YYYY")));
    }))) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], null, "You do not have any GetHelp Transactions."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TablePagination"], {
        rowsPerPageOptions: [
            5,
            10,
            25
        ],
        component: "div",
        count: getdata === null || getdata === void 0 ? void 0 : getdata.length,
        rowsPerPage: rowsPerPage,
        page: page,
        onPageChange: handleChangePage,
        onRowsPerPageChange: handleChangeRowsPerPage
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
        open: openresource,
        fullWidth: true,
        maxWidth: "xl",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", _extends({
        autoComplete: "off",
        noValidate: true
    }, props, {
        method: "POST"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        sx: {
            height: 750,
            width: 900,
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
        sx: {
            display: "flex",
            justifyContent: "flex-start"
        },
        title: "Edit Give Help Transaction"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        },
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        style: {
            display: "flex",
            alignSelf: "center"
        }
    }, url1 === "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/images/avatars/resource.png",
        width: "200",
        height: "150"
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: url1,
        width: "200",
        height: "150"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        direction: "row",
        rowSpacing: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        onChange: handleImageUpload
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "primary",
        variant: "contained",
        size: "medium",
        onClick: handleImageChange
    }, "Update Image")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "filled-basic",
        label: "Type",
        variant: "filled",
        sx: {
            m: 1,
            width: "50ch"
        },
        value: "Resource"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, resourceNameError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        label: "Resource Name",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Name,
        onChange: handleNameChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        },
        helperText: "Mask, Oxygen Cylinder, Sanitizer etc."
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, categoryError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "Category Name",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Category,
        onChange: handleCategoryChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, skuError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-number",
        label: "Quantity",
        type: "number",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.SKU,
        onChange: handleSkuChange,
        sx: {
            m: 1,
            width: "50ch"
        },
        helperText: "Quanity should be greater than 0",
        InputLabelProps: {
            shrink: true
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, descriptionError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "outlined-decsription-input",
        label: "Description",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Description,
        onChange: handleDescriptionChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "106ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, addressError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "Address",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Address,
        onChange: handleAddressChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, cityError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "City",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.City,
        onChange: handleCityChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, stateError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        label: "Select State",
        name: "state",
        onChange: handleStateChange,
        required: true,
        select: true,
        SelectProps: {
            native: true
        },
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.State,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }, stateArray.map(function(option) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: option.label,
            value: option.value
        }, option.value);
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, countryError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        label: "Select Country",
        name: "country",
        onChange: handleCountryChange,
        required: true,
        select: true,
        SelectProps: {
            native: true
        },
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Country,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }, countryArray.map(function(option) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: option.label,
            value: option.value
        }, option.value);
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, zipcodeError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required-input",
        label: "Zipcode",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Zipcode,
        onChange: handleZipcodeChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 1
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "outlined-read-only-input",
        sx: {
            m: 1
        },
        value: dialCode,
        style: {
            width: 70
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, phoneNumError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required-input",
        label: "Phone Number",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Phone_Number,
        onChange: handlePhoneNumChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        },
        zIndex: 1,
        paddingTop: 3,
        style: {
            display: "flex",
            alignItems: "right",
            justifyContent: "right"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
        to: "/app/mytransactions",
        onClick: handleCancel,
        color: "primary",
        size: "medium",
        variant: "contained"
    }, " ", "Cancel"), "\xa0\xa0\xa0", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
        to: "/app/mytransactions",
        color: "primary",
        variant: "contained",
        onClick: handleSubmit,
        size: "medium"
    }, "Update"))))))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
        open: openservice,
        fullWidth: true,
        maxWidth: "xl",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", _extends({
        autoComplete: "off",
        noValidate: true
    }, props, {
        method: "POST"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        sx: {
            height: 750,
            width: 900,
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
        sx: {
            display: "flex",
            justifyContent: "flex-start"
        },
        title: "Edit Give Help Transaction"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        },
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        style: {
            display: "flex",
            alignSelf: "center"
        }
    }, url1 === "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/images/avatars/resource.png",
        width: "200",
        height: "150"
    }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: url1,
        width: "200",
        height: "150"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        direction: "row",
        rowSpacing: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        onChange: handleImageUploadService
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "primary",
        variant: "contained",
        size: "medium",
        onClick: handleImageChange
    }, "Update Image")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "filled-basic",
        label: "Type",
        variant: "filled",
        sx: {
            m: 1,
            width: "50ch"
        },
        value: "Service"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "Service Name",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Name,
        onChange: handleServiceNameChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        },
        helperText: "Car pool, Accomodation etc. "
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, categoryError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "Category Name",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Category,
        onChange: handleCategoryChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4,
        alignItems: "right"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "primary",
        variant: "contained",
        onClick: handleTogglePicker,
        size: "small"
    }, "Select Availability"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {
        popperProps: {
            positionFixed: true
        },
        selected: availability,
        onChange: handleAvailabilityChange,
        // todayButton={"Today"}
        open: datePickerIsOpen,
        onClickOutside: handleTogglePicker,
        showOverlay: true,
        confirmBtnText: "OK",
        cancelBtnText: "Cancel"
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 1,
        columnSpacing: {
            xs: 3,
            sm: 9,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 4
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, descriptionError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "outlined-decsription-input",
        label: "Description",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Description,
        onChange: handleDescriptionChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "106ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, addressError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "Address",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Address,
        onChange: handleAddressChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, cityError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required",
        label: "City",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.City,
        onChange: handleCityChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, stateError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        label: "State",
        name: "state",
        onChange: handleStateChange,
        required: true,
        select: true,
        SelectProps: {
            native: true
        },
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.State,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }, stateArray.map(function(option) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: option.label,
            value: option.value
        }, option.value);
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, countryError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        label: "Country",
        name: "country",
        onChange: handleCountryChange,
        required: true,
        select: true,
        SelectProps: {
            native: true
        },
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Country,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }, countryArray.map(function(option) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            key: option.label,
            value: option.value
        }, option.value);
    })))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, zipcodeError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required-input",
        label: "Zipcode",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Zipcode,
        onChange: handleZipcodeChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 1
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        id: "outlined-read-only-input",
        sx: {
            m: 1
        },
        value: dialCode,
        style: {
            width: 70
        }
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, phoneNumError), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        required: true,
        id: "outlined-required-input",
        label: "Phone Number",
        defaultValue: service1 === null || service1 === void 0 ? void 0 : service1.Phone_Number,
        onChange: handlePhoneNumChange,
        variant: "outlined",
        sx: {
            m: 1,
            width: "50ch"
        }
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        rowSpacing: 4,
        columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
        },
        zIndex: 1,
        paddingTop: 3,
        style: {
            display: "flex",
            alignItems: "right",
            justifyContent: "right"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
        to: "/app/mytransactions",
        onClick: handleCancel,
        color: "primary",
        size: "medium",
        variant: "contained"
    }, " ", "Cancel"), "\xa0\xa0\xa0", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
        to: "/app/mytransactions",
        color: "primary",
        variant: "contained",
        onClick: handleSubmit,
        size: "medium"
    }, "Update"))))))))));
};
var mapStateToProps = function(param) {
    var userProfileReducer = param.userProfileReducer;
    return {
        userProfileReducer: userProfileReducer
    };
};
var mapDispatchToProps = {};
var ConnectedManageTransactionsCard = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ManageTransactionsCard);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedManageTransactionsCard);


/***/ }),

/***/ "./src/shared/pages/GetHelp/GetHelp.tsx":
/*!**********************************************!*\
  !*** ./src/shared/pages/GetHelp/GetHelp.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Radio */ "./node_modules/@mui/material/Radio/index.js");
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/RadioGroup */ "./node_modules/@mui/material/RadioGroup/index.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
/*global google*/ 











var containerStyle = {
    width: "570px",
    height: "770px"
};
var center = {
    lat: 37.3184,
    lng: -121.8381589
};
var GetHelp = function(param) {
    var userProfileReducer = param.userProfileReducer, props = param.props;
    var location1 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"])();
    var UserId = userProfileReducer === null || userProfileReducer === void 0 ? void 0 : userProfileReducer.id;
    //console.log(UserId);
    var ref17 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), error1 = ref17[0], setError = ref17[1];
    var ref1 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), CityError = ref1[0], setCityError = ref1[1];
    var ref2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), name = ref2[0], setName = ref2[1];
    var ref3 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), city1 = ref3[0], setCity = ref3[1];
    var ref4 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("45"), 2), miles = ref4[0], setMiles = ref4[1];
    var ref5 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), currentloc = ref5[0], setCurrentloc = ref5[1];
    var ref6 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), directions = ref6[0], setDirections = ref6[1];
    var ref7 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("all"), 2), datafilter = ref7[0], setDataFilter = ref7[1];
    var ref8 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), data = ref8[0], setData = ref8[1];
    var ignoreStat = false;
    var origin = {};
    var ref9 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), UserCompleteAddress = ref9[0], setUserCompleteAddress = ref9[1];
    ////Pagination code
    var ref10 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), 2), page = ref10[0], setPage = ref10[1];
    var ref11 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), count = ref11[0], setCount = ref11[1];
    var ref12 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), totalitem = ref12[0], setTotalItem = ref12[1];
    var ref13 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4), 2), pageSize = ref13[0], setPageSize = ref13[1];
    var pageSizes = [
        4,
        8,
        16
    ];
    var handlePageChange = function(event, newPage) {
        setPage(newPage);
    };
    var handlePageSizeChange = function(event) {
        setPageSize(event.target.value);
        setPage(1);
    };
    var handleChangeName = function(event) {
        setName(event.target.value);
    };
    var handleChangeCity = function(event) {
        setCityError("");
        setCity(event.target.value);
    };
    var handleChangeMiles = function(event) {
        setMiles(event.target.value);
    };
    var handlePageLoad = function() {
        var token = localStorage.getItem("token");
        // set the with credentials to true
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.withCredentials = true;
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/gethelp", {
            params: {
                name: name,
                miles: miles,
                city: "",
                datafilter: datafilter,
                user_location: UserCompleteAddress
            }
        }, {
            headers: {
                authtoken: token
            }
        }).then(function(response) {
            var ref, ref15, ref16;
            ignoreStat = true;
            setData(response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.resources);
            setDirections(null);
            setTotalItem(Object.keys(response === null || response === void 0 ? void 0 : (ref15 = response.data) === null || ref15 === void 0 ? void 0 : ref15.resources).length);
            setCount(Math.ceil(Object.keys(response === null || response === void 0 ? void 0 : (ref16 = response.data) === null || ref16 === void 0 ? void 0 : ref16.resources).length / pageSize));
            setPage(1);
        }, function(error) {
            console.log(error);
            setError(error);
        });
    };
    var handleSearch = function(event) {
        event.preventDefault();
        setData(null);
        setTotalItem(0);
        if (miles != "" && city1 == "") {
            setCityError("Please enter a city to search");
            setData(null);
            setDirections(null);
            setTotalItem(0);
            setCount(0);
            setPage(1);
        } else {
            setCityError("");
            var token = localStorage.getItem("token");
            // set the with credentials to true
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.withCredentials = true;
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/gethelp", {
                params: {
                    name: name,
                    miles: miles,
                    city: city1,
                    datafilter: datafilter,
                    user_location: UserCompleteAddress
                }
            }, {
                headers: {
                    authtoken: token
                }
            }).then(function(response) {
                var ref, ref18, ref19;
                setData(response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.resources);
                setDirections(null);
                setTotalItem(Object.keys(response === null || response === void 0 ? void 0 : (ref18 = response.data) === null || ref18 === void 0 ? void 0 : ref18.resources).length);
                setCount(Math.ceil(Object.keys(response === null || response === void 0 ? void 0 : (ref19 = response.data) === null || ref19 === void 0 ? void 0 : ref19.resources).length / pageSize));
                setPage(1);
            }, function(error) {
                console.log(error);
                setError(error);
            });
        }
    };
    var isLoaded = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["useJsApiLoader"])({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw"
    }).isLoaded;
    var getCurrentUserLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log("position",position);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            var location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            setCurrentloc(location);
            currentloc = location;
            console.log(currentloc);
            var geocoder = new google.maps.Geocoder(), latitude = position.coords.latitude, longitude = position.coords.longitude, city = "", state = "";
            geocoder.geocode({
                location: {
                    lat: latitude,
                    lng: longitude
                }
            }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    ignoreStat = true;
                    results.forEach(function(element) {
                        element.address_components.forEach(function(element2) {
                            element2.types.forEach(function(element3) {
                                switch(element3){
                                    case "administrative_area_level_1":
                                        state = element2.long_name;
                                        break;
                                    case "locality":
                                        city = element2.long_name;
                                        break;
                                }
                            });
                        });
                    });
                    setUserCompleteAddress(results[0].formatted_address);
                    UserCompleteAddress = results[0].formatted_address;
                    setCity(city + ", " + state);
                    handlePageLoad();
                }
            });
        });
    };
    var ref14 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), map1 = ref14[0], setMap = ref14[1];
    var onLoad = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function callback(map) {
        var bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        if (ignoreStat == false) {
            getCurrentUserLocation();
        }
    }, []);
    var onUnmount = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function callback(map) {
        setMap(null);
    }, []);
    //function that is calling the directions service
    var getDirections = function(resource) {
        var directionsService = new google.maps.DirectionsService();
        var destination = resource.address;
        if (origin !== null && destination !== null) {
            directionsService.route({
                origin: currentloc,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            }, function(result, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    //changing the state of directions to the result of direction service
                    setDirections(null);
                    setDirections(result); //setShow(true);
                } else {
                    console.error("error fetching directions ".concat(result));
                }
            });
        }
    };
    var handleRadioChange = function(event) {
        setDataFilter(event.target.value);
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GetHelp | WeCare")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        maxWidth: false
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            mt: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            display: "flex",
            maxWidth: 1200
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            maxWidth: 700
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        row: true,
        defaultValue: "all",
        value: datafilter,
        onChange: handleRadioChange
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "all",
        control: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        label: "All"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "resources",
        control: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        label: "Resources"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "services",
        control: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        label: "Services"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        style: {
            width: 600
        },
        InputProps: {
            startAdornment: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
                position: "start"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["SvgIcon"], {
                fontSize: "small",
                color: "action"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["Search"], null)))
        },
        placeholder: "Search resource/service",
        value: name,
        variant: "outlined",
        onChange: handleChangeName
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        style: {
            width: 300
        },
        //fullWidth
        InputProps: {
            startAdornment: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
                position: "start"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["SvgIcon"], {
                fontSize: "small",
                color: "action"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["Navigation"], null)))
        },
        placeholder: "Search within City",
        helperText: "Search within City",
        value: city1,
        variant: "outlined",
        onChange: handleChangeCity
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " "), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        style: {
            width: 300
        },
        //fullWidth
        InputProps: {
            startAdornment: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
                position: "start"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["SvgIcon"], {
                fontSize: "small",
                color: "action"
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_8__["Globe"], null)))
        },
        placeholder: "Search within miles",
        helperText: "Search within miles",
        value: miles,
        variant: "outlined",
        onChange: handleChangeMiles
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
            color: "red"
        }
    }, CityError)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            display: "flex",
            width: 200,
            alignItems: "center"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\xa0\xa0\xa0\xa0\xa0\xa0\xa0", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        style: {
            width: 150,
            height: 50
        },
        color: "primary",
        variant: "contained",
        onClick: handleSearch
    }, "Search"))))))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        container: true,
        spacing: 2
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        sx: {
            pt: 3
        }
    }, data != null && datafilter != null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        container: true,
        spacing: 2
    }, (pageSize > 0 ? data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize) : data).map(function(resource) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            item: true,
            xs: 6,
            key: resource._id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], null, resource.ImageUrl != "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardMedia"], {
            component: "img",
            height: "140",
            src: resource.ImageUrl,
            alt: resource.Name
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardMedia"], {
            component: "img",
            height: "140",
            alt: resource.Name,
            image: "/static/images/avatars/resource.png"
        }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
            gutterBottom: true,
            variant: "h5",
            component: "div"
        }, resource.Name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
            variant: "body2",
            color: "text.secondary"
        }, resource.Description), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
            variant: "body2",
            color: "text.secondary"
        }, resource.type != "resource" ? "Available on " + moment__WEBPACK_IMPORTED_MODULE_2___default()(resource.availableDate).format("MM/DD/YYYY") : resource.SKU + " item(s) available"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
            variant: "body2",
            color: "text.secondary"
        }, resource.distance + "miles"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
            variant: "body2",
            color: "text.secondary"
        }, resource.address, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            style: {
                marginLeft: "none",
                textTransform: "none"
            },
            onClick: function() {
                return getDirections(resource);
            }
        }, "Direction"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActions"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
            style: {
                marginLeft: "auto"
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            size: "large",
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"],
            to: "/app/gethelp/:".concat(resource._id, "/:").concat(resource.type, "/:gethelpitem")
        }, "Reserve")))));
    })) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Total Items: ", totalitem, " \xa0\xa0", "Items per Page: ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: handlePageSizeChange,
        value: pageSize
    }, pageSizes.map(function(size) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            key: size,
            value: size
        }, size);
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Pagination"], {
        count: count,
        page: page,
        variant: "outlined",
        shape: "rounded",
        onChange: handlePageChange
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 6
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        paddingTop: 3
    }, isLoaded ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["GoogleMap"], {
        mapContainerStyle: containerStyle,
        center: currentloc,
        zoom: 13,
        onLoad: onLoad,
        onUnmount: onUnmount
    }, currentloc !== null && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
        title: "Your current location",
        key: "marker_1",
        position: currentloc
    }), data != null && directions == null ? data.map(function(resource) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
            title: resource.markertitle,
            key: resource._id,
            position: resource.location
        });
    }) : null, directions !== null && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_10__["DirectionsRenderer"], {
        directions: directions,
        defaultOptions: {
            suppressMarkers: false
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))))));
};
var mapStateToProps = function(param) {
    var userProfileReducer = param.userProfileReducer;
    return {
        userProfileReducer: userProfileReducer
    };
};
var mapDispatchToProps = {};
var ConnectedGetHelp = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(GetHelp);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(ConnectedGetHelp));


/***/ }),

/***/ "./src/shared/pages/GetHelpItem/GetHelpItem.tsx":
/*!******************************************************!*\
  !*** ./src/shared/pages/GetHelpItem/GetHelpItem.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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










Object(_emailjs_browser__WEBPACK_IMPORTED_MODULE_6__["init"])("Tf7lGE0yewFvOLxah");
var GetHelpItem = function(param) {
    var userProfileReducer = param.userProfileReducer, props = param.props;
    var _$param = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"])();
    var location1 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useLocation"])();
    var user_email = userProfileReducer === null || userProfileReducer === void 0 ? void 0 : userProfileReducer.userName; //"abc@gmail.com";//change
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
    var ref16 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}), 2), resource1 = ref16[0], setResource = ref16[1];
    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
        lat: 37.3184,
        lng: -121.8381589
    }), 2), currentloc = ref1[0], setCurrentloc = ref1[1];
    var ref2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), data = ref2[0], setData = ref2[1];
    var ref3 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), error1 = ref3[0], setError = ref3[1];
    var ref4 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), errorText = ref4[0], setErrorText = ref4[1];
    var ref5 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), directions = ref5[0], setDirections = ref5[1];
    var ref6 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), open = ref6[0], setOpen = ref6[1];
    var ref7 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), quantity = ref7[0], setQuantity = ref7[1];
    var ref8 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), pagetype = ref8[0], setPageType = ref8[1];
    var ignoreStat = false;
    var ref9 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), 2), UserCompleteAddress = ref9[0], setUserCompleteAddress = ref9[1];
    var containerStyle = {
        width: "1125px",
        height: "450px"
    };
    var center = {
        lat: 37.3184,
        lng: -121.8381589
    };
    //change start
    var UserId = userProfileReducer === null || userProfileReducer === void 0 ? void 0 : userProfileReducer.id; //'6225e61bf81d2541a4000bc9';
    var id;
    var item_type;
    // let pagetype;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function() {
        var ref, ref11, ref12, ref13, ref14, ref15;
        id = _$param === null || _$param === void 0 ? void 0 : (ref = _$param.id) === null || ref === void 0 ? void 0 : ref.substring((_$param === null || _$param === void 0 ? void 0 : (ref11 = _$param.id) === null || ref11 === void 0 ? void 0 : ref11.indexOf(":")) + 1);
        item_type = (_$param === null || _$param === void 0 ? void 0 : (ref12 = _$param.type) === null || ref12 === void 0 ? void 0 : ref12.substring((_$param === null || _$param === void 0 ? void 0 : (ref13 = _$param.type) === null || ref13 === void 0 ? void 0 : ref13.indexOf(":")) + 1)) + "s";
        pagetype = _$param === null || _$param === void 0 ? void 0 : (ref14 = _$param.pagetype) === null || ref14 === void 0 ? void 0 : ref14.substring((_$param === null || _$param === void 0 ? void 0 : (ref15 = _$param.pagetype) === null || ref15 === void 0 ? void 0 : ref15.indexOf(":")) + 1);
        //console.log(pagetype);
        setPageType(pagetype);
    }, []);
    var handlepageload = function() {
        var token = localStorage.getItem("token");
        // set the with credentials to true
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/gethelp/search", {
            params: {
                item_type: item_type,
                id: id,
                user_location: UserCompleteAddress
            }
        }, {
            headers: {
                authtoken: token
            }
        }).then(function(response) {
            var ref, ref17, ref18;
            ignoreStat = true;
            if ((response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.resources[0].type) == "resource") {
                var ref19;
                setQuantity(response === null || response === void 0 ? void 0 : (ref19 = response.data) === null || ref19 === void 0 ? void 0 : ref19.resources[0].SKU);
            }
            setData(response === null || response === void 0 ? void 0 : (ref17 = response.data) === null || ref17 === void 0 ? void 0 : ref17.resources);
            //setCity(response.data.user_currentcity);
            //setCurrentloc(response?.data?.user_currentaddress);
            getDirections(response === null || response === void 0 ? void 0 : (ref18 = response.data) === null || ref18 === void 0 ? void 0 : ref18.resources[0]);
        }, function(error) {
            console.log(error);
            setError(error);
        });
    };
    var isLoaded = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__["useJsApiLoader"])({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw"
    }).isLoaded;
    var ref10 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), map1 = ref10[0], setMap = ref10[1];
    var onLoad = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function callback(map) {
        var bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        if (ignoreStat == false) {
            getCurrentUserLocation();
        }
    }, []);
    var onUnmount = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function callback(map) {
        setMap(null);
    }, []);
    var getCurrentUserLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log("position",position);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            var location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            setCurrentloc(location);
            currentloc = location;
            console.log(currentloc);
            var geocoder = new google.maps.Geocoder(), latitude = position.coords.latitude, longitude = position.coords.longitude, city = "", state = "";
            geocoder.geocode({
                location: {
                    lat: latitude,
                    lng: longitude
                }
            }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    ignoreStat = true;
                    results.forEach(function(element) {
                        element.address_components.forEach(function(element2) {
                            element2.types.forEach(function(element3) {
                                switch(element3){
                                    case "administrative_area_level_1":
                                        state = element2.long_name;
                                        break;
                                    case "locality":
                                        city = element2.long_name;
                                        break;
                                }
                            });
                        });
                    });
                    setUserCompleteAddress(results[0].formatted_address);
                    UserCompleteAddress = results[0].formatted_address;
                    //setCity(city+", "+state);
                    handlepageload();
                }
            });
        });
    };
    //function that is calling the directions service
    var getDirections = function(resource) {
        var directionsService = new google.maps.DirectionsService();
        var destination = resource.address;
        //let origin="2239 McLaughlin Ave,San Jose,95122"
        // console.log(destination);
        // console.log(currentloc);
        if (origin !== null && destination !== null) {
            directionsService.route({
                origin: currentloc,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            }, function(result, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    //changing the state of directions to the result of direction service
                    setDirections(null);
                    setDirections(result); //setShow(true);
                } else {
                    console.error("error fetching directions ".concat(result));
                }
            });
        }
    };
    var handleItemQuantityChange = function(event) {
        if (1 < event.target.value && event.target.value > data[0].SKU) {
            setErrorText("Quantity should be between 1 and " + data[0].SKU);
        } else {
            setErrorText("");
            setQuantity(event.target.value);
        }
    };
    ////Email
    var state1 = {
        feedback: "",
        name: "Name",
        to_email: "snehathomasdiv@gmail.com",
        subject: "Subject"
    };
    var sendEmail = function(templateId, variables) {
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_6__["default"].send("service_wgfnh0b", templateId, variables).then(function(res) {
            console.log("Email successfully sent!");
        }).catch(function(err) {
            return console.error("Oh well, you failed. Here some thoughts on the error that occured:", err);
        });
    };
    var handleConfirm = function(event) {
        if (errorText === "") {
            var resource = data[0];
            ///email to victim
            var resource_email_quantity = resource.type == "resource" ? quantity : moment__WEBPACK_IMPORTED_MODULE_3___default()(resource.availableDate).format("MM-DD-YYYY");
            var qua_date = resource.type == "resource" ? "Quantity" : "Available Date";
            var email_subject = resource.type == "resource" ? "Resource reservation details" : "Service reservation details";
            var to_user_email = userProfileReducer.userName; //change later state.to_email;
            var url = "http://localhost:8500" + "/app/gethelp/:" + resource._id + "/:" + resource.type + "/:email" + resource_email_quantity;
            console.log(url);
            //serverUrl+'app/gethelp/:'+resource._id+'/:resource';console.log(url);console.log(location.pathname);
            var templateId = "template_v9fkqmy";
            sendEmail(templateId, {
                resource_name: resource.Name,
                resource_description: resource.Description,
                resource_address: resource.address,
                resource_quantity: resource_email_quantity,
                qua_date: qua_date,
                owner_name: resource.owner_name,
                phone_num: resource.Phone_Number,
                from_name: state1.name,
                to_name: userProfileReducer.firstName + " " + userProfileReducer.lastName,
                subject: email_subject,
                to_email: to_user_email,
                url: url
            });
            //email to owner
            sendEmail("template_znup9ah", {
                resource_name: resource.Name,
                resource_description: resource.Description,
                resource_address: resource.address,
                resource_quantity: resource_email_quantity,
                qua_date: qua_date,
                victim_name: userProfileReducer.firstName + " " + userProfileReducer.lastName,
                victim_phone_num: userProfileReducer.profile.phoneNumber,
                from_name: state1.name,
                to_name: resource.owner_name,
                subject: state1.subject,
                to_email: resource.owner_email
            });
            if (quantity == null) {
                setQuantity(data[0].SKU);
            }
            var token = localStorage.getItem("token");
            // set the with credentials to true
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.withCredentials = true;
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/gethelp", {
                resource: data[0],
                user_id: UserId,
                quantity: quantity
            }, {
                headers: {
                    authtoken: token
                }
            }).then(function(response) {
                //handleSearch(event);
                setOpen(true);
            //history.push('/app/gethelp') ;
            }, function(error) {
                console.log(error);
                setError(error);
            });
        } else {
            setErrorText("Maximum available Quantity is " + data[0].SKU + ". Please update Quantity between 1 and " + data[0].SKU + " before confirming the reservation.");
        }
    };
    var handleClose = function(event) {
        setOpen(false);
        history.push("/app/gethelp");
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GetHelpItem | WeCare")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        sx: {
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        maxWidth: false
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({}, props), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
        sx: {
            display: "flex",
            justifyContent: "flex-start"
        },
        titleTypographyProps: {
            variant: "h2"
        },
        title: "GetHelp Reservation"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 2
    }, data != null ? data.map(function(resource) {
        /*#__PURE__*/ return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            item: true,
            key: resource._id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            sx: {
                display: "flex"
            },
            style: {
                border: "none",
                boxShadow: "none"
            }
        }, resource.ImageUrl != "" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
            component: "img",
            height: "475",
            src: resource.ImageUrl,
            alt: resource.Name,
            sx: {
                width: 400
            }
        }) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
            component: "img",
            height: "475",
            alt: resource.Name,
            sx: {
                width: 400
            },
            image: "/static/images/avatars/resource.png"
        }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableContainer"], {
            component: _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"]
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Table"], {
            sx: {
                minWidth: 650
            },
            "aria-label": "simple table"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableBody"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "1",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Name")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.Name)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "2",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", resource.type == "resource" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Quantity") : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Available date")), (pagetype === null || pagetype === void 0 ? void 0 : pagetype.substring(0, 5)) != "email" ? resource.type == "resource" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
            id: "standard-number",
            type: "number",
            InputLabelProps: {
                shrink: true,
                style: {
                    color: "blue"
                }
            },
            InputProps: {
                inputProps: {
                    type: "number",
                    min: 1
                }
            },
            variant: "standard",
            defaultValue: resource.SKU,
            error: errorText.length === 0 ? false : true,
            helperText: errorText.length === 0 ? "Update required quantity" : errorText,
            sx: {
                width: "41ch"
            },
            onChange: handleItemQuantityChange
        })) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, ":", moment__WEBPACK_IMPORTED_MODULE_3___default()(resource.availableDate).format("MM/DD/YYYY")) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], null, ":", pagetype === null || pagetype === void 0 ? void 0 : pagetype.substring(5, pagetype.length))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "3",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Description")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.Description)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "6",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Owner Name")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.owner_name)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "4",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Address")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.address)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "5",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Distance")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.distance, " ", "miles")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "7",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Phone Number")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.Phone_Number)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
            key: "8",
            sx: {
                "&:last-child td, &:last-child th": {
                    border: 0
                }
            }
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            component: "th",
            scope: "row"
        }, " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Email")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TableCell"], {
            align: "left"
        }, ":", resource.owner_email))))))));
    }) : null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        paddingTop: 3
    }, isLoaded ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__["GoogleMap"], {
        mapContainerStyle: containerStyle,
        center: currentloc,
        zoom: 13,
        onLoad: onLoad,
        onUnmount: onUnmount
    }, directions !== null && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__["DirectionsRenderer"], {
        directions: directions,
        defaultOptions: {
            suppressMarkers: true
        }
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)) : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActions"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        style: {
            marginLeft: "auto"
        }
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
        to: "/app/gethelp",
        color: "primary",
        variant: "contained",
        size: "medium"
    }, "Cancel"), "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0", (pagetype === null || pagetype === void 0 ? void 0 : pagetype.substring(0, 5)) != "email" ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "primary",
        variant: "contained",
        size: "medium",
        onClick: handleConfirm
    }, "Confirm") : null)))), " ")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
        id: "alert-dialog-description"
    }, "Reservation details were successfully send to ", user_email, ".")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: handleClose,
        autoFocus: true
    }, "CLOSE"))));
};
// export default withRouter(GetHelpItem);
var mapStateToProps = function(param) {
    var userProfileReducer = param.userProfileReducer;
    return {
        userProfileReducer: userProfileReducer
    };
};
var mapDispatchToProps = {};
var ConnectedGetHelpItem = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(GetHelpItem);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(ConnectedGetHelpItem)); //export default GetHelpItem;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuM2ZiOTdiNjY0MDljODNiMzY0YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9kYXNoYm9hcmQvU3RhdGlzdGljcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL215dHJhbnNhY3Rpb25zL01hbmFnZVRyYW5zYWN0aW9uc0NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvR2V0SGVscC9HZXRIZWxwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3BhZ2VzL0dldEhlbHBJdGVtL0dldEhlbHBJdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgICBBdmF0YXIsXG4gICAgQm94LFxuICAgIENhcmQsXG4gICAgQ2FyZENvbnRlbnQsXG4gICAgR3JpZCxcbiAgICBUeXBvZ3JhcGh5LFxuICAgIEJ1dHRvbixcbiAgICBDYXJkSGVhZGVyLFxuICAgIERpdmlkZXIsXG4gICAgdXNlVGhlbWUsXG4gICAgY29sb3JzLFxuICAgIENoaXAsXG4gICAgVGFibGUsXG4gICAgVGFibGVCb2R5LFxuICAgIFRhYmxlQ2VsbCxcbiAgICBUYWJsZUhlYWQsXG4gICAgVGFibGVSb3csXG4gICAgVGFibGVTb3J0TGFiZWwsXG4gICAgVG9vbHRpcCxcbiAgICBUYWJsZVBhZ2luYXRpb24sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodCc7XG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IEFycm93VXB3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmQnO1xuaW1wb3J0IE1vbmV5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXknO1xuaW1wb3J0IHsgcmVkLCBncmVlbiwgb3JhbmdlLCBpbmRpZ28gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuaW1wb3J0IEluc2VydENoYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0Q2hhcnRPdXRsaW5lZCc7XG5pbXBvcnQgUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlT3V0bGluZWQnO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCBBdXRvQXdlc29tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0F1dG9Bd2Vzb21lTW9zYWljJztcbmltcG9ydCBIZWFsdGhOZXdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0hlYWx0aE5ld3MnO1xuaW1wb3J0IFZlcmlmaWVkVXNlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlcic7XG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIHByZXR0eURhdGUgfSBmcm9tICd1dGlscy9qc29uJztcbmNvbnN0IFN0YXRpc3RpY3M6IEZ1bmN0aW9uQ29tcG9uZW50PGFueT4gPSAoeyB1c2VyUHJvZmlsZVJlZHVjZXIsIHByb3BzIH0pID0+IHtcbiAgICBjb25zdCBVc2VySWQgPSB1c2VyUHJvZmlsZVJlZHVjZXIuaWQ7IC8vJzYyMjVlNjFiZjgxZDI1NDFhNDAwMGJjOScvL3VzZXJQcm9maWxlUmVkdWNlci5pZDtcbiAgICBjb25zb2xlLmxvZyhVc2VySWQpO1xuICAgIC8vY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyc2MTdmMmZiNDA1ODNiYTQ5YTAwOTE0MjUnO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGlmICh0eXBlb2YgbXlWYXIgIT09ICd1bmRlZmluZWQnXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIC8vIHNldCB0aGUgd2l0aCBjcmVkZW50aWFscyB0byB0cnVlXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgICAgICcvYXBpL2hvbWUnLFxuICAgICAgICAgICAgICAgIHsgcGFyYW1zOiB7IHVzZXI6IFVzZXJJZCB9IH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRodG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZT8uZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgLy8uZmluYWxseSgoKT0+IHtzZXRMb2FkaW5nKGZhbHNlKTsgfSlcbiAgICB9LCBbXSk7XG4gICAgLy9pZiAobG9hZGluZykgcmV0dXJuIFwiTG9hZGluZy4uLi5cIlxuICAgIC8vaWYgKGVycm9yKSByZXR1cm4gXCJFcnJvclwiXG4gICAgbGV0IHJlc291cmNlbmFtZSA9IFtdO1xuICAgIGxldCByZXNvdXJjZXNrdSA9IFtdO1xuICAgIGxldCB0cmFuc2FjdGlvbnR5cGUgPSBbXTtcbiAgICBsZXQgdHJhbnNhY3Rpb25jb3VudCA9IFtdO1xuICAgIGxldCB0b3RhbHVzZXJ0cmFucyA9IDA7XG4gICAgbGV0IHRvdGFscmVzb3VyY2VzID0gMDtcbiAgICBsZXQgdXNlcnRyYW5zYWN0aW9ucyA9IHt9O1xuICAgIGxldCB1c2VyYXBwb2ludG1lbnRzID0ge307XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gZGF0YS5yZXNvdXJjZXM7XG5cbiAgICAgICAgcmVzb3VyY2VzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHJlc291cmNlbmFtZS5wdXNoKGVsZW1lbnQuX2lkKTtcbiAgICAgICAgICAgIHJlc291cmNlc2t1LnB1c2goZWxlbWVudC5yZXNvdXJjZV9TS1UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG90YWxyZXNvdXJjZXMgPSByZXNvdXJjZXNrdS5yZWR1Y2UoKHJlc3VsdCwgbnVtYmVyKSA9PiByZXN1bHQgKyBudW1iZXIpO1xuXG4gICAgICAgIHVzZXJ0cmFuc2FjdGlvbnMgPSBkYXRhLnVzZXJ0cmFuc2FjdGlvbnM7XG4gICAgICAgIGlmICh1c2VydHJhbnNhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHVzZXJ0cmFuc2FjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9udHlwZS5wdXNoKGVsZW1lbnQuX2lkKTtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbmNvdW50LnB1c2goZWxlbWVudC5jb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvdGFsdXNlcnRyYW5zID0gdHJhbnNhY3Rpb25jb3VudC5yZWR1Y2UoKHJlc3VsdCwgbnVtYmVyKSA9PiByZXN1bHQgKyBudW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIHVzZXJhcHBvaW50bWVudHMgPSBkYXRhPy51c2VyYXBwb2ludG1lbnRzO1xuICAgIH1cbiAgICBjb25zdCBkYXRhX2RvbnV0ID0ge1xuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IHRyYW5zYWN0aW9uY291bnQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbY29sb3JzLmluZGlnb1s1MDBdLCBjb2xvcnMub3JhbmdlWzYwMF1dLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiA4LFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuY29tbW9uLndoaXRlLFxuICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IGNvbG9ycy5jb21tb24ud2hpdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsYWJlbHM6IHRyYW5zYWN0aW9udHlwZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9uc19kb251dCA9IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsXG4gICAgICAgIGxheW91dDogeyBwYWRkaW5nOiAwIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib2R5Rm9udENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvb3RlckZvbnRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgICAgdGl0bGVGb250Q29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhYiA9IHtcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5pbmRpZ29bNTAwXSxcbiAgICAgICAgICAgICAgICBiYXJQZXJjZW50YWdlOiAwLjUsXG4gICAgICAgICAgICAgICAgYmFyVGhpY2tuZXNzOiAxMixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlQZXJjZW50YWdlOiAwLjUsXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzb3VyY2Vza3UsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdRdWFudGl0eSBhdmFpbGFibGUnLFxuICAgICAgICAgICAgICAgIG1heEJhclRoaWNrbmVzczogMTMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsYWJlbHM6IHJlc291cmNlbmFtZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgY29ybmVyUmFkaXVzOiAyMCxcbiAgICAgICAgbGF5b3V0OiB7IHBhZGRpbmc6IDAgfSxcbiAgICAgICAgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHhBeGVzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB5QXhlczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcbiAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgICAgICBib2R5Rm9udENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvb3RlckZvbnRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgICAgdGl0bGVGb250Q29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoOCk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XG4gICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFJvd3NQZXJQYWdlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgICAgICAgc2V0UGFnZSgwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30gc209ezZ9IHhsPXszfSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IGhlaWdodDogJzEwMCUnIH19IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBzeD17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPVEFMIFRSQU5TQUNUSU9OU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFByaW1hcnlcIiB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50cmFuc2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcmVkWzYwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW5bOTAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgdmFyaWFudD1cImNhcHRpb25cIj48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXszfSBzbT17Nn0geGw9ezN9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgaGVpZ2h0OiAnMTAwJScgfX0gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN4PXt7IGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVTT1VSQ0VTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFByaW1hcnlcIiB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxyZXNvdXJjZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogb3JhbmdlWzYwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5zZXJ0Q2hhcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXszfSBzbT17Nn0geGw9ezN9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPENhcmQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN4PXt7IGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9UQUwgVVNFUlNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAhPSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIHZhcmlhbnQ9XCJoM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnVzZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyZWVuWzYwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVvcGxlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuWzkwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjYXB0aW9uXCI+PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30gc209ezZ9IHhsPXszfSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHsuLi5wcm9wc30gc3g9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBzeD17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFUlZJQ0VTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFByaW1hcnlcIiB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zZXJ2aWNlcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaW5kaWdvWzYwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b0F3ZXNvbWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBhbGlnbj1cImxlZnRcIiBkaXJlY3Rpb249XCJyb3dcIiBpdGVtIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs5fSBtZD17MTJ9IHhsPXs5fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHBhZGRpbmdCb3R0b209ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZW5kSWNvbj17PEFycm93RHJvcERvd25JY29uIC8+fSBzaXplPVwic21hbGxcIiB2YXJpYW50PVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNhbFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBdmFpbGFibGUgUmVzb3VyY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhciBkYXRhPXtkYXRhYn0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBwL2dldGhlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZJRVcgQUxMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwiQXZhaWxhYmxlIFNlcnZpY2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG1pbldpZHRoOiA4MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TZXJ2aWNlIE5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q2F0ZWdvcnk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsPkF2YWlsYWJsZSBEYXRlPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRhYmxlQ2VsbCBzb3J0RGlyZWN0aW9uPVwiZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBlbnRlckRlbGF5PXszMDB9IHRpdGxlPVwiU29ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU29ydExhYmVsIGFjdGl2ZSBkaXJlY3Rpb249XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlIERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVTb3J0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlppcCBDb2RlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlICogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHNlcnZpY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIGtleT17c2VydmljZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5TZXJ2aWNlX05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZS5hdmFpbGFibGVEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5mb3JtYXQoJ01NL0REL1lZWVknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS5aaXBjb2RlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbOCwgMTYsIDI0XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtkYXRhPy5zZXJ2aWNlcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93c1BlclBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBwL2dldGhlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxBcnJvd1JpZ2h0SWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBsZz17M30gbWQ9ezEyfSB4bD17M30geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAge1VzZXJJZCAhPSAnJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gcGFkZGluZ0JvdHRvbT17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCJNeSBBY3Rpdml0eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIFRyYW5zYWN0aW9ucyA6IHt0b3RhbHVzZXJ0cmFuc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIHVzZXJ0cmFuc2FjdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvdWdobnV0IGRhdGE9e2RhdGFfZG9udXR9IG9wdGlvbnM9e29wdGlvbnNfZG9udXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5VcGNvbWluZyBBcHBvaW50bWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmFwcG9pbnRtZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmFwcG9pbnRtZW50cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX25hbWU6IGRvY3Rvcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBvaW50bWVudERldGFpbHM6IEFwcG9pbnRtZW50RGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgYW4gYXBwb2ludG1lbnQgd2l0aHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57ZG9jdG9yX25hbWV9PC9iPiBhdHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57cHJldHR5RGF0ZSh0aW1lKX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgdmFyaWFudD1cImg3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGRvIG5vdCBoYXZlIGFueSBhcHBvaW50bWVudCBzY2hlZHVsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWx0aE5ld3MgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIHsvKjxHcmlkIGl0ZW0gbGc9ezR9IG1kPXs2fSB4bD17M30geHM9ezEyfT48L0dyaWQ+Ki99XG4gICAgICAgIDwvR3JpZD5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdXNlclByb2ZpbGVSZWR1Y2VyIH0pID0+ICh7XG4gICAgdXNlclByb2ZpbGVSZWR1Y2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHt9O1xuXG5jb25zdCBDb25uZWN0ZWRTdGF0aXN0aWNzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3RhdGlzdGljcyk7XG5leHBvcnQgZGVmYXVsdCBDb25uZWN0ZWRTdGF0aXN0aWNzO1xuLy9leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzO1xuIiwiLypnbG9iYWwgZ29vZ2xlKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gICAgQm94LFxuICAgIEdyaWQsXG4gICAgRm9ybUNvbnRyb2xMYWJlbCxcbiAgICBGb3JtR3JvdXAsXG4gICAgQ29udGFpbmVyLFxuICAgIFR5cG9ncmFwaHksXG4gICAgQ2FyZCxcbiAgICBDYXJkQ29udGVudCxcbiAgICBUZXh0RmllbGQsXG4gICAgRGl2aWRlcixcbiAgICBDYXJkSGVhZGVyLFxuICAgIFRhYmxlLFxuICAgIFRhYmxlQm9keSxcbiAgICBUYWJsZUNlbGwsXG4gICAgVGFibGVSb3csXG4gICAgVGFibGVIZWFkLFxuICAgIElucHV0QWRvcm5tZW50LFxuICAgIENhcmRBY3Rpb25zLFxuICAgIFN2Z0ljb24sXG4gICAgQnV0dG9uLFxuICAgIENhcmRNZWRpYSxcbiAgICBQYWdpbmF0aW9uLFxuICAgIERpYWxvZyxcbiAgICBEaWFsb2dBY3Rpb25zLFxuICAgIERpYWxvZ1RpdGxlLFxuICAgIERpYWxvZ0NvbnRlbnQsXG4gICAgVGFibGVQYWdpbmF0aW9uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlTG9jYXRpb24sIExpbmssIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgdXBsb2FkQnl0ZXMsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCAncmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzJztcbmltcG9ydCBjb3VudHJpZXMgZnJvbSAnaTE4bi1pc28tY291bnRyaWVzJztcbmNvbnN0IHsgZ2V0U3RhdGVzIH0gPSByZXF1aXJlKCdjb3VudHJ5LXN0YXRlLXBpY2tlcicpO1xuY29uc3QgeyBnZXRDb2RlIH0gPSByZXF1aXJlKCdjb3VudHJ5LWxpc3QnKTtcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tICcuL0NvdW50cnlEYXRhLmpzb24nO1xuY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgY29udGVudFR5cGU6ICdpbWFnZS9qcGVnJyxcbn07XG5jb25zdCBNYW5hZ2VUcmFuc2FjdGlvbnNDYXJkOiBGdW5jdGlvbkNvbXBvbmVudDxhbnk+ID0gKHsgdXNlclByb2ZpbGVSZWR1Y2VyLCBwcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB8fCBudWxsO1xuICAgIC8vIHNldCB0aGUgd2l0aCBjcmVkZW50aWFscyB0byB0cnVlXG4gICAgYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIGNvbnN0IFtnaXZlZGF0YSwgc2V0R2l2ZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2dldGRhdGEsIHNldEdldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2VydmljZSwgc2V0U2VydmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBVc2VySWQgPSB1c2VyUHJvZmlsZVJlZHVjZXIuaWQ7XG4gICAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdXNlcklkID0gdXNlclByb2ZpbGVSZWR1Y2VyLmlkO1xuICAgIGNvbnN0IFtyZXNvdXJjZU5hbWUsIHNldFJlc291cmNlTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bob25lTnVtLCBzZXRQaG9uZU51bV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBbZGlhbENvZGUsIHNldERpYWxDb2RlXSA9IHVzZVN0YXRlKCcrMScpO1xuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2t1LCBzZXRTa3VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt6aXBjb2RlLCBzZXRaaXBjb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCdVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EnKTtcbiAgICBjb25zdCBbY291bnRyeU5hbWVzLCBzZXRDb3VudHJ5TmFtZXNdID0gdXNlU3RhdGUoQ291bnRyeURhdGEpO1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCd1cycpO1xuICAgIGNvbnN0IFtzaG93RXJyb3JNc2csIHNldFNob3dFcnJvck1zZ10gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2ZpbGVVcGxvYWRUaXRsZSwgc2V0RmlsZVVwbG9hZFRpdGxlXSA9IFJlYWN0LnVzZVN0YXRlKCdVcGxvYWQgUmVzb3VyY2UgUGljJyk7XG4gICAgY29uc3QgW2ZpbmRJbWFnZSwgc2V0RmluZEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtyZXNvdXJjZU5hbWVFcnJvciwgc2V0UmVzb3VyY2VOYW1lRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthdmFpbGFiaWxpdHlFcnJvciwgc2V0QXZhaWxhYmlsaXR5RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjYXRlZ29yeUVycm9yLCBzZXRDYXRlZ29yeUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb25FcnJvciwgc2V0RGVzY3JpcHRpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bob25lTnVtRXJyb3IsIHNldFBob25lTnVtRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthZGRyZXNzRXJyb3IsIHNldEFkZHJlc3NFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NrdUVycm9yLCBzZXRTa3VFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NpdHlFcnJvciwgc2V0Q2l0eUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3RhdGVFcnJvciwgc2V0U3RhdGVFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3ppcGNvZGVFcnJvciwgc2V0WmlwY29kZUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY291bnRyeUVycm9yLCBzZXRDb3VudHJ5RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZXJ2aWNlTmFtZSwgc2V0U2VydmljZU5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthdmFpbGFiaWxpdHksIHNldEF2YWlsYWJpbGl0eV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBbZGF0ZVBpY2tlcklzT3BlbiwgdG9nZ2xlUGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBsZXQgdmFsaWRhdGVGb3JtUmVzb3VyY2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZXNvdXJjZU5hbWUgPT09ICcnIHx8IHJlc291cmNlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0UmVzb3VyY2VOYW1lRXJyb3IoJ1BsZWFzZSBlbnRlciByZXNvdXJjZSBuYW1lJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnkgPT09ICcnIHx8IGNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDYXRlZ29yeUVycm9yKCdQbGVhc2UgZW50ZXIgYSBjYXRlZ29yeScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNrdS50b1N0cmluZygpID09PSAnMCcgfHwgc2t1ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTa3VFcnJvcignUGxlYXNlIGVudGVyIHZhbGlkIHF1YW50aXR5Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc2t1IDwgMCkge1xuICAgICAgICAgICAgc2V0U2t1RXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHF1YW50aXR5Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24gPT09ICcnIHx8IGRlc2NyaXB0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbkVycm9yKCdQbGVhc2UgZW50ZXIgZGVzY3JpcHRpb24gb2YgcmVzb3VyY2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAnJyB8fCBhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRBZGRyZXNzRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaXR5ID09PSAnJyB8fCBjaXR5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDaXR5RXJyb3IoJ1BsZWFzZSBlbnRlciB5b3VyIGNpdHkgb2YgcmVzaWRlbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICcnIHx8IGNpdHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldENpdHlFcnJvcignUGxlYXNlIGVudGVyIHlvdXIgc3RhdGUgb2YgcmVzaWRlbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY291bnRyeSA9PT0gJycgfHwgY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q291bnRyeUVycm9yKCdQbGVhc2UgZW50ZXIgeW91ciBjb3VudHJ5IG9mIHJlc2lkZW5jZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHppcGNvZGUgPT09IG51bGwgfHwgemlwY29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHNldFppcGNvZGVFcnJvcignUGxlYXNlIGVudGVyIHlvdXIgemlwY29kZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHppcGNvZGUudG9TdHJpbmcoKS5sZW5ndGggIT0gNSkge1xuICAgICAgICAgICAgc2V0WmlwY29kZUVycm9yKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB6aXBjb2RlIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHBob25lTnVtID09PSAnJyB8fCBwaG9uZU51bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0UGhvbmVOdW1FcnJvcignUGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBudW1iZXInKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwaG9uZU51bS50b1N0cmluZygpLmxlbmd0aCAhPSAxMCkge1xuICAgICAgICAgICAgc2V0UGhvbmVOdW1FcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGlmIChzZXJ2aWNlTmFtZSA9PT0gJycgfHwgc2VydmljZU5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFNlcnZpY2VOYW1lRXJyb3IoJ1BsZWFzZSBlbnRlciBzZXJ2aWNlIG5hbWUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhdmFpbGFiaWxpdHkuZ2V0VGltZSgpIDwgdG9kYXkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBzZXRBdmFpbGFiaWxpdHlFcnJvcignUGxlYXNlIHNlbGVjdCBhIHZhbGlkIGRhdGUhJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnkgPT09ICcnIHx8IGNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDYXRlZ29yeUVycm9yKCdQbGVhc2UgZW50ZXIgYSBjYXRlZ29yeScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uID09PSAnJyB8fCBkZXNjcmlwdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0RGVzY3JpcHRpb25FcnJvcignUGxlYXNlIGVudGVyIGRlc2NyaXB0aW9uIG9mIHNlcnZpY2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGRyZXNzID09PSAnJyB8fCBhZGRyZXNzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRBZGRyZXNzRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaXR5ID09PSAnJyB8fCBjaXR5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDaXR5RXJyb3IoJ1BsZWFzZSBlbnRlciB5b3VyIGNpdHkgb2YgcmVzaWRlbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICcnIHx8IGNpdHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNldENpdHlFcnJvcignUGxlYXNlIGVudGVyIHlvdXIgc3RhdGUgb2YgcmVzaWRlbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY291bnRyeSA9PT0gJycgfHwgY291bnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q291bnRyeUVycm9yKCdQbGVhc2UgZW50ZXIgeW91ciBjb3VudHJ5IG9mIHJlc2lkZW5jZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHppcGNvZGUgPT09IG51bGwgfHwgemlwY29kZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHNldFppcGNvZGVFcnJvcignUGxlYXNlIGVudGVyIHlvdXIgemlwY29kZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHppcGNvZGUudG9TdHJpbmcoKS5sZW5ndGggIT0gNSkge1xuICAgICAgICAgICAgc2V0WmlwY29kZUVycm9yKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB6aXBjb2RlIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHBob25lTnVtID09PSAnJyB8fCBwaG9uZU51bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0UGhvbmVOdW1FcnJvcignUGxlYXNlIGVudGVyIHlvdXIgY29udGFjdCBudW1iZXInKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChwaG9uZU51bS50b1N0cmluZygpLmxlbmd0aCAhPSAxMCkge1xuICAgICAgICAgICAgc2V0UGhvbmVOdW1FcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcy9sYW5ncy9lbi5qc29uJykpO1xuICAgIGNvbnN0IGNvdW50cnlPYmogPSBjb3VudHJpZXMuZ2V0TmFtZXMoJ2VuJywgeyBzZWxlY3Q6ICdvZmZpY2lhbCcgfSk7XG4gICAgY29uc3QgY291bnRyeUFycmF5ID0gT2JqZWN0LmVudHJpZXMoY291bnRyeU9iaikubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBzZXRSZXNvdXJjZU5hbWVFcnJvcignJyk7XG4gICAgICAgIHNldFJlc291cmNlTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTZXJ2aWNlTmFtZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0U2VydmljZU5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhY2hlZCB1cGxvYWQgaW1hZ2UgdGFzaycpO1xuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKGZpbGUgPT0gbnVsbCB8fCAhZmlsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGltYWdlJyk7XG4gICAgICAgICAgICBzZXRTaG93RXJyb3JNc2coJ0Vycm9yOiBObyBpbWFnZSBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIHNldEZpbmRJbWFnZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJbWFnZShmaWxlKTtcbiAgICAgICAgICAgIHNldEZpbmRJbWFnZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihcbiAgICAgICAgICAgICAgICBzdG9yYWdlLFxuICAgICAgICAgICAgICAgIGAvJHt1c2VyUHJvZmlsZVJlZHVjZXIudXNlck5hbWV9L3Jlc291cmNlcy8ke2ZpbGUubmFtZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdXBsb2FkQnl0ZXMoc3RvcmFnZVJlZiwgZmlsZSkudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkZWQgYSBibG9iIG9yIGZpbGUhJywgc25hcHNob3QubWV0YWRhdGEpO1xuICAgICAgICAgICAgICAgIHNldEZpbGVVcGxvYWRUaXRsZShzbmFwc2hvdC5tZXRhZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBzZXRGaW5kSW1hZ2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0U2hvd0Vycm9yTXNnKCdJbWFnZSBVcGxvYWRlZCBzdWNjZXNzZnVsbHkgdG8gZmlyZWJhc2UhJyk7XG4gICAgICAgICAgICAgICAgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVybCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VybCcsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0b3JhZ2Uvb2JqZWN0LW5vdC1mb3VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVybCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlYWNoZWQgaW1hZ2UgY2hhbmdlJyk7XG4gICAgICAgIGlmICghZmluZEltYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgdXBsb2FkIGZhaWxlZCEnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdJbWFnZSB1cGxvYWQgZmFpbGVkISBQbGVhc2UgdHJ5IGFnYWluJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICBhbGVydCgnSW1hZ2UgdXBsb2FkZWQgdG8gZmlyZWJhc2UhJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2V0Q2hlY2sgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBZGRyZXNzRXJyb3IoJycpO1xuICAgICAgICBzZXRDaXR5RXJyb3IoJycpO1xuICAgICAgICBzZXRTdGF0ZUVycm9yKCcnKTtcbiAgICAgICAgc2V0Q291bnRyeUVycm9yKCcnKTtcbiAgICAgICAgc2V0WmlwY29kZUVycm9yKCcnKTtcbiAgICAgICAgc2V0UGhvbmVOdW1FcnJvcignJyk7XG4gICAgICAgIHNldENoZWNrKCFjaGVjayk7XG4gICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcyA9IHt9LCBwcm9maWxlID0ge30gfSA9IHVzZXJQcm9maWxlUmVkdWNlcjtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IGNvdW50cnlOYW1lcy5maW5kKCh7IGNvZGUgfSkgPT4gY29kZSA9PT0gZ2V0Q29kZShhZGRyZXNzLmNvdW50cnkpKTtcbiAgICAgICAgICAgIHNldEFkZHJlc3MoYWRkcmVzcy5sb2NhdGlvbik7XG4gICAgICAgICAgICBzZXRDaXR5KGFkZHJlc3MuY2l0eSk7XG4gICAgICAgICAgICBzZXRDb3VudHJ5KGFkZHJlc3MuY291bnRyeSk7XG4gICAgICAgICAgICBzZXRaaXBjb2RlKGFkZHJlc3MuemlwQ29kZSk7XG4gICAgICAgICAgICBzZXRTdGF0ZShhZGRyZXNzLnN0YXRlKTtcbiAgICAgICAgICAgIHNldENvZGUoZ2V0Q29kZShhZGRyZXNzLmNvdW50cnkpKTtcbiAgICAgICAgICAgIHNldERpYWxDb2RlKG9iai5kaWFsX2NvZGUpO1xuICAgICAgICAgICAgc2V0UGhvbmVOdW0ocHJvZmlsZS5waG9uZU51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRBZGRyZXNzKCcnKTtcbiAgICAgICAgICAgIHNldENpdHkoJycpO1xuICAgICAgICAgICAgc2V0Q291bnRyeSgnJyk7XG4gICAgICAgICAgICBzZXRaaXBjb2RlKCcnKTtcbiAgICAgICAgICAgIHNldFN0YXRlKCcnKTtcbiAgICAgICAgICAgIHNldFBob25lTnVtKCcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENhdGVnb3J5RXJyb3IoJycpO1xuICAgICAgICBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0RGVzY3JpcHRpb25FcnJvcignJyk7XG4gICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUGhvbmVOdW1DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQaG9uZU51bUVycm9yKCcnKTtcbiAgICAgICAgc2V0UGhvbmVOdW0oZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBZGRyZXNzQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QWRkcmVzc0Vycm9yKCcnKTtcbiAgICAgICAgc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNrdUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFNrdUVycm9yKCcnKTtcbiAgICAgICAgc2V0U2t1KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2l0eUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENpdHlFcnJvcignJyk7XG4gICAgICAgIHNldENpdHkoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFN0YXRlRXJyb3IoJycpO1xuICAgICAgICBzZXRTdGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVppcGNvZGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRaaXBjb2RlRXJyb3IoJycpO1xuICAgICAgICBzZXRaaXBjb2RlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ291bnRyeUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENvdW50cnlFcnJvcignJyk7XG4gICAgICAgIHNldENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBvYmogPSBjb3VudHJ5TmFtZXMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0Q29kZShnZXRDb2RlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIHNldERpYWxDb2RlKG9iai5kaWFsX2NvZGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0ZU9iaiA9IGdldFN0YXRlcyhjb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IHN0YXRlQXJyYXkgPSBPYmplY3QuZW50cmllcyhzdGF0ZU9iaikubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIC8vIHNldCB0aGUgd2l0aCBjcmVkZW50aWFscyB0byB0cnVlXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIGlmIChzZXJ2aWNlPy50eXBlID09ICdyZXNvdXJjZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZUZvcm1SZXNvdXJjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZCk7XG5cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2FwaS9nZXRoZWxwL3VwZGF0ZV9yZXNvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlcnZpY2U/Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySWQ6IHVzZXJQcm9maWxlUmVkdWNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNvdXJjZV9OYW1lOiByZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG9uZV9OdW1iZXI6IHBob25lTnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU0tVOiBza3UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTogY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWmlwY29kZTogemlwY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlVXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oaXN0b3J5LnB1c2goJy9hcHAvbXl0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldE9wZW5yZXNvdXJjZShmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2FjdGlvblNlYXJjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhpc3RvcnkucHVzaCgnL2FwcC9teXRyYW5zYWN0aW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLmZpbHRlcigobSkgPT4gbS5BdmFpbGFiaWxpdHkgIT0gJ2ZhbHNlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwbG9hZCByZXNvdXJjZSBkYXRhISBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGYWlsZWQgdG8gdXBsb2FkIHJlc291cmNlIGRhdGEhIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9nZXRoZWxwL3VwZGF0ZV9zZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlcnZpY2U/Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJZDogdXNlclByb2ZpbGVSZWR1Y2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZV9OYW1lOiBzZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lX051bWJlcjogcGhvbmVOdW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlRGF0ZTogYXZhaWxhYmlsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTogY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFppcGNvZGU6IHppcGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5OiBjb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VVcmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGh0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlzdG9yeS5wdXNoKCcvYXBwL215dHJhbnNhY3Rpb25zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NldE9wZW5yZXNvdXJjZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2FjdGlvblNlYXJjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGVUcmFuc2FjdGlvblNlYXJjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9oaXN0b3J5LnB1c2goJy9hcHAvbXl0cmFuc2FjdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLmZpbHRlcigobSkgPT4gbS5BdmFpbGFiaWxpdHkgIT0gJ2ZhbHNlJylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHVwbG9hZCByZXNvdXJjZSBkYXRhISBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaGFuZGxlVHJhbnNhY3Rpb25TZWFyY2goKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBbb3BlbnJlc291cmNlLCBzZXRPcGVucmVzb3VyY2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuc2VydmljZSwgc2V0T3BlbnNlcnZpY2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlVHJhbnNhY3Rpb25TZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIC8vIHNldCB0aGUgd2l0aCBjcmVkZW50aWFscyB0byB0cnVlXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgICAgICcvYXBpL2dldGhlbHAvc2VhcmNoL3VzZXJpZCcsXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgdXNlcmlkOiB1c2VyUHJvZmlsZVJlZHVjZXIuaWQgfSB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGE/LnJlc291cmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldEdpdmVEYXRhKHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXMuZmlsdGVyKChtKSA9PiBtLkF2YWlsYWJpbGl0eSAhPSAnZmFsc2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEdldERhdGEocmVzcG9uc2U/LmRhdGE/LmdldHJlc291cmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW5yZXNvdXJjZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW5zZXJ2aWNlKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLy5maWx0ZXIoKG0pID0+IG0uQXZhaWxhYmlsaXR5ICE9ICdmYWxzZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoc2VydmljZSkgPT4ge1xuICAgICAgICBzZXRTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgICBpZiAoc2VydmljZT8udHlwZSA9PSAncmVzb3VyY2UnKSB7XG4gICAgICAgICAgICBzZXRPcGVucmVzb3VyY2UodHJ1ZSk7XG4gICAgICAgICAgICBzZXRTa3Uoc2VydmljZT8uU0tVKTtcblxuICAgICAgICAgICAgc2V0UmVzb3VyY2VOYW1lKHNlcnZpY2U/Lk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0T3BlbnNlcnZpY2UodHJ1ZSk7XG4gICAgICAgICAgICBzZXRTZXJ2aWNlTmFtZShzZXJ2aWNlPy5OYW1lKTtcbiAgICAgICAgICAgIHNldEF2YWlsYWJpbGl0eShuZXcgRGF0ZShuZXcgRGF0ZShzZXJ2aWNlPy5hdmFpbGFibGVEYXRlKS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBZGRyZXNzKHNlcnZpY2U/LkFkZHJlc3MpO1xuICAgICAgICBzZXRDaXR5KHNlcnZpY2U/LkNpdHkpO1xuICAgICAgICBzZXRDb3VudHJ5KHNlcnZpY2U/LkNvdW50cnkpO1xuICAgICAgICBzZXRaaXBjb2RlKHNlcnZpY2U/LlppcGNvZGUpO1xuICAgICAgICBzZXRTdGF0ZShzZXJ2aWNlPy5TdGF0ZSk7XG4gICAgICAgIHNldFBob25lTnVtKHNlcnZpY2U/LlBob25lX051bWJlcik7XG5cbiAgICAgICAgc2V0Q2F0ZWdvcnkoc2VydmljZT8uQ2F0ZWdvcnkpO1xuICAgICAgICBzZXREZXNjcmlwdGlvbihzZXJ2aWNlPy5EZXNjcmlwdGlvbik7XG4gICAgICAgIHNldFVybChzZXJ2aWNlPy5JbWFnZVVybCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkU2VydmljZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhY2hlZCB1cGxvYWQgaW1hZ2UgdGFzaycpO1xuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKGZpbGUgPT0gbnVsbCB8fCAhZmlsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGltYWdlJyk7XG4gICAgICAgICAgICBzZXRTaG93RXJyb3JNc2coJ0Vycm9yOiBObyBpbWFnZSBhdmFpbGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEltYWdlKGZpbGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKFxuICAgICAgICAgICAgICAgIHN0b3JhZ2UsXG4gICAgICAgICAgICAgICAgYC8ke3VzZXJQcm9maWxlUmVkdWNlci51c2VyTmFtZX0vc2VydmljZXMvJHtmaWxlLm5hbWV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHVwbG9hZEJ5dGVzKHN0b3JhZ2VSZWYsIGZpbGUpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZGVkIGEgYmxvYiBvciBmaWxlIScsIHNuYXBzaG90Lm1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRGaWxlVXBsb2FkVGl0bGUoc25hcHNob3QubWV0YWRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0RmluZEltYWdlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldFNob3dFcnJvck1zZygnSW1hZ2UgVXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IHRvIGZpcmViYXNlIScpO1xuICAgICAgICAgICAgICAgIGdldERvd25sb2FkVVJMKHN0b3JhZ2VSZWYpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh1cmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmwodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cmwnLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmluZEltYWdlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdG9yYWdlL29iamVjdC1ub3QtZm91bmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaW5kSW1hZ2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBdmFpbGFiaWxpdHlDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBzZXRBdmFpbGFiaWxpdHkoZGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZVBpY2tlciA9IChlKSA9PiB7XG4gICAgICAgIHRvZ2dsZVBpY2tlcighZGF0ZVBpY2tlcklzT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgc2V0T3BlbnJlc291cmNlKGZhbHNlKTtcbiAgICAgICAgc2V0T3BlbnNlcnZpY2UoZmFsc2UpO1xuICAgICAgICAvL2hpc3RvcnkucHVzaCgnL2FwcC9teXRyYW5zYWN0aW9ucycpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHNlcnZpY2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2VydmljZS5faWQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAvLyBzZXQgdGhlIHdpdGggY3JlZGVudGlhbHMgdG8gdHJ1ZVxuICAgICAgICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2dldGhlbHAvZGVsZXRlL2lkJywgeyBpZDogc2VydmljZS5faWQsIHR5cGU6IHNlcnZpY2UudHlwZSB9KS50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZVRyYW5zYWN0aW9uU2VhcmNoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIC8vUGFnaW5hdGlvbiBnZXRoZWxwXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xuXG4gICAgY29uc3QgW3BhZ2VHaXZlLCBzZXRQYWdlR2l2ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcm93c1BlclBhZ2VHaXZlLCBzZXRSb3dzUGVyUGFnZUdpdmVdID0gUmVhY3QudXNlU3RhdGUoNSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xuICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRSb3dzUGVyUGFnZShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gICAgICAgIHNldFBhZ2UoMCk7XG4gICAgfTtcbiAgICAvL3BhZ2luYXRpb24gR2l2ZWhlbHAgZGF0YVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2VHaXZlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XG4gICAgICAgIHNldFBhZ2VHaXZlKG5ld1BhZ2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZUdpdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0Um93c1BlclBhZ2VHaXZlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgICAgICAgc2V0UGFnZUdpdmUoMCk7XG4gICAgfTtcblxuICAgIC8vIEF2b2lkIGEgbGF5b3V0IGp1bXAgd2hlbiByZWFjaGluZyB0aGUgbGFzdCBwYWdlIHdpdGggZW1wdHkgcm93cy5cbiAgICBjb25zdCBlbXB0eVJvd3MgPSBwYWdlID4gMCA/IE1hdGgubWF4KDAsICgxICsgcGFnZSkgKiA1IC0gZ2V0ZGF0YT8ubGVuZ3RoKSA6IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxDYXJkIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdpdmVIZWxwIFRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVR5cG9ncmFwaHlQcm9wcz17eyB2YXJpYW50OiAnaDQnIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgbWluV2lkdGg6IDgwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtnaXZlZGF0YSAhPSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlR5cGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BdmFpbGFibGUgUXVhbnRpdHk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkF2YWlsYWJsZURhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VGFibGVDZWxsIHNvcnREaXJlY3Rpb249XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGVudGVyRGVsYXk9ezMwMH0gdGl0bGU9XCJTb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVTb3J0TGFiZWwgYWN0aXZlIGRpcmVjdGlvbj1cImRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdmFpbGFibGUgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVNvcnRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4qL317JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QWRkcmVzczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UGhvbmUgTnVtYmVyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5FZGl0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZWxldGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dpdmVkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUdpdmUgKiByb3dzUGVyUGFnZUdpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VHaXZlICogcm93c1BlclBhZ2VHaXZlICsgcm93c1BlclBhZ2VHaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHNlcnZpY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIGtleT17c2VydmljZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlPy5JbWFnZVVybCA9PT0gJycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhcnMvcmVzb3VyY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjc1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VydmljZS5JbWFnZVVybH0gaGVpZ2h0PVwiNzVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS50eXBlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS5EZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3NlcnZpY2UuU0tVfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZS50eXBlID09PSAncmVzb3VyY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2VydmljZS5hdmFpbGFibGVEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW9tZW50KHNlcnZpY2UuYXZhaWxhYmxlRGF0ZSkuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTU0vREQvWVlZWSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLkFkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZS5DaXR5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuU3RhdGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZS5Db3VudHJ5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuWmlwY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS5QaG9uZV9OdW1iZXJ9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hcHAvbXl0cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KHNlcnZpY2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hcHAvbXl0cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoc2VydmljZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Zb3UgZG8gbm90IGhhdmUgYW55IEdpdmVIZWxwIFRyYW5zYWN0aW9ucy48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17Z2l2ZWRhdGE/Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2VHaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2VHaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlQ2hhbmdlUGFnZUdpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dzUGVyUGFnZUNoYW5nZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2VHaXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+eycgJ31cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxDYXJkIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldEhlbHAgVHJhbnNhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVHlwb2dyYXBoeVByb3BzPXt7IHZhcmlhbnQ6ICdoNCcgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtaW5XaWR0aDogODAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2dldGRhdGEgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UeXBlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNjcmlwdGlvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UXVhbnRpdHk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkF2YWlsYWJsZURhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkFkZHJlc3M8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBob25lTnVtYmVyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UcmFuc2FjdGlvbkRhdGU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0ZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgKiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIga2V5PXtzZXJ2aWNlLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UuSW1hZ2VVcmwgPT09ICcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXJzL3Jlc291cmNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlcnZpY2UuSW1hZ2VVcmx9IGhlaWdodD1cIjc1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3NlcnZpY2UudHlwZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3NlcnZpY2UuRGVzY3JpcHRpb259PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntzZXJ2aWNlLlNLVX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2UudHlwZSA9PT0gJ3Jlc291cmNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlcnZpY2UuYXZhaWxhYmxlRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1vbWVudChzZXJ2aWNlLmF2YWlsYWJsZURhdGUpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01NL0REL1lZWVknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS5hZGRyZXNzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57c2VydmljZS5QaG9uZV9OdW1iZXJ9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc2VydmljZS5EYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Zb3UgZG8gbm90IGhhdmUgYW55IEdldEhlbHAgVHJhbnNhY3Rpb25zLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtnZXRkYXRhPy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93c1BlclBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgIG9wZW49e29wZW5yZXNvdXJjZX1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgbm9WYWxpZGF0ZSB7Li4ucHJvcHN9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXQgR2l2ZSBIZWxwIFRyYW5zYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMywgc206IDksIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAzLCBzbTogOSwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduU2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cmwgPT09ICcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhcnMvcmVzb3VyY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsfSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiByb3dTcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZVVwbG9hZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMywgc206IDksIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiUmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntyZXNvdXJjZU5hbWVFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVzb3VyY2UgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/Lk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiTWFzaywgT3h5Z2VuIEN5bGluZGVyLCBTYW5pdGl6ZXIgZXRjLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNwYWNpbmc9e3sgeHM6IDMsIHNtOiA5LCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57Y2F0ZWdvcnlFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeSBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSwgd2lkdGg6ICc1MGNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pntza3VFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LlNLVX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTa3VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiUXVhbml0eSBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMywgc206IDksIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntkZXNjcmlwdGlvbkVycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWRlY3NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5EZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzEwNmNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNwYWNpbmc9e3sgeHM6IDEsIHNtOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57YWRkcmVzc0Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5BZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFkZHJlc3NDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSwgd2lkdGg6ICc1MGNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntjaXR5RXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LkNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2l0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNwYWNpbmc9e3sgeHM6IDEsIHNtOiAyLCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57c3RhdGVFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgU3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7IG5hdGl2ZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZUFycmF5Lm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5sYWJlbH0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LlN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2NvdW50cnlFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgQ291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ291bnRyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7IG5hdGl2ZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5Db3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnlBcnJheS5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24ubGFiZWx9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uQ291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ291bnRyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhY2luZz17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAxLCBzbTogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3ppcGNvZGVFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJaaXBjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uWmlwY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVaaXBjb2RlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlYWQtb25seS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlhbENvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNzAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57cGhvbmVOdW1FcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5QaG9uZV9OdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGhvbmVOdW1DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSwgd2lkdGg6ICc1MGNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhY2luZz17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAxLCBzbTogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcD17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2FwcC9teXRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2FwcC9teXRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVuc2VydmljZX1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cInhsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgbm9WYWxpZGF0ZSB7Li4ucHJvcHN9IG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVkaXQgR2l2ZSBIZWxwIFRyYW5zYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMywgc206IDksIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAzLCBzbTogOSwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduU2VsZjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cmwgPT09ICcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhcnMvcmVzb3VyY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsfSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiByb3dTcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZVVwbG9hZFNlcnZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltYWdlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlIEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNwYWNpbmc9e3sgeHM6IDMsIHNtOiA5LCBtZDogMyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZSBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXJ2aWNlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiQ2FyIHBvb2wsIEFjY29tb2RhdGlvbiBldGMuIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMywgc206IDksIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntjYXRlZ29yeUVycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5DYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXRlZ29yeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBhbGlnbkl0ZW1zPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlUGlja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IEF2YWlsYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17YXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUF2YWlsYWJpbGl0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZGF5QnV0dG9uPXtcIlRvZGF5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtkYXRlUGlja2VySXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e2hhbmRsZVRvZ2dsZVBpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPdmVybGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnRuVGV4dD1cIk9LXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ0blRleHQ9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAzLCBzbTogOSwgbWQ6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Rlc2NyaXB0aW9uRXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZGVjc3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnMTA2Y2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PnthZGRyZXNzRXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LkFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQWRkcmVzc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2NpdHlFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uQ2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaXR5Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntzdGF0ZUVycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17eyBuYXRpdmU6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSwgd2lkdGg6ICc1MGNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVBcnJheS5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24ubGFiZWx9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LlN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pntjb3VudHJ5RXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ291bnRyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdFByb3BzPXt7IG5hdGl2ZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXJ2aWNlPy5Db3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnlBcnJheS5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb24ubGFiZWx9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LkNvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvdW50cnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pnt6aXBjb2RlRXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWmlwY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NlcnZpY2U/LlppcGNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlWmlwY29kZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtOiAxLCB3aWR0aDogJzUwY2gnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWFkLW9ubHktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpYWxDb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDcwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3Bob25lTnVtRXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2VydmljZT8uUGhvbmVfTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBob25lTnVtQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnNTBjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYWNpbmc9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hcHAvbXl0cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9hcHAvbXl0cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvR3JpZD5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdXNlclByb2ZpbGVSZWR1Y2VyIH0pID0+ICh7XG4gICAgdXNlclByb2ZpbGVSZWR1Y2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHt9O1xuXG5jb25zdCBDb25uZWN0ZWRNYW5hZ2VUcmFuc2FjdGlvbnNDYXJkID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKE1hbmFnZVRyYW5zYWN0aW9uc0NhcmQpO1xuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGVkTWFuYWdlVHJhbnNhY3Rpb25zQ2FyZDtcbiIsIi8qZ2xvYmFsIGdvb2dsZSovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBSYWRpbyBmcm9tICdAbXVpL21hdGVyaWFsL1JhZGlvJztcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUmFkaW9Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gICAgQm94LFxuICAgIEdyaWQsXG4gICAgQ29udGFpbmVyLFxuICAgIFR5cG9ncmFwaHksXG4gICAgQ2FyZCxcbiAgICBDYXJkQ29udGVudCxcbiAgICBUZXh0RmllbGQsXG4gICAgRGl2aWRlcixcbiAgICBJbnB1dEFkb3JubWVudCxcbiAgICBDYXJkQWN0aW9ucyxcbiAgICBTdmdJY29uLFxuICAgIEJ1dHRvbixcbiAgICBDYXJkTWVkaWEsXG4gICAgUGFnaW5hdGlvbixcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBTZWFyY2ggYXMgU2VhcmNoSWNvbixcbiAgICBOYXZpZ2F0aW9uIGFzIE5hdmlnYXRpb25JY29uLFxuICAgIEdsb2JlIGFzIENpcmNsZUljb24sXG4gICAgQWxpZ25SaWdodCxcbn0gZnJvbSAncmVhY3QtZmVhdGhlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VKc0FwaUxvYWRlciwgTWFya2VyLCBEaXJlY3Rpb25zUmVuZGVyZXIgfSBmcm9tICdAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpJztcblxuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlTG9jYXRpb24sIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6ICc1NzBweCcsXG4gICAgaGVpZ2h0OiAnNzcwcHgnLFxufTtcblxuY29uc3QgY2VudGVyID0ge1xuICAgIGxhdDogMzcuMzE4NCxcbiAgICBsbmc6IC0xMjEuODM4MTU4OSxcbn07XG5jb25zdCBHZXRIZWxwOiBGdW5jdGlvbkNvbXBvbmVudDxhbnk+ID0gKHsgdXNlclByb2ZpbGVSZWR1Y2VyLCBwcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IFVzZXJJZCA9IHVzZXJQcm9maWxlUmVkdWNlcj8uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFVzZXJJZCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0NpdHlFcnJvciwgc2V0Q2l0eUVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttaWxlcywgc2V0TWlsZXNdID0gdXNlU3RhdGUoJzQ1Jyk7XG4gICAgY29uc3QgW2N1cnJlbnRsb2MsIHNldEN1cnJlbnRsb2NdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RpcmVjdGlvbnMsIHNldERpcmVjdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RhdGFmaWx0ZXIsIHNldERhdGFGaWx0ZXJdID0gUmVhY3QudXNlU3RhdGUoJ2FsbCcpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGxldCBpZ25vcmVTdGF0ID0gZmFsc2U7XG4gICAgbGV0IG9yaWdpbiA9IHt9O1xuICAgIGNvbnN0IFtVc2VyQ29tcGxldGVBZGRyZXNzLCBzZXRVc2VyQ29tcGxldGVBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8vL1BhZ2luYXRpb24gY29kZVxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3RvdGFsaXRlbSwgc2V0VG90YWxJdGVtXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoNCk7XG4gICAgbGV0IHBhZ2VTaXplcyA9IFs0LCA4LCAxNl07XG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xuICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUGFnZVNpemVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0UGFnZVNpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0UGFnZSgxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDaXR5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldENpdHlFcnJvcignJyk7XG4gICAgICAgIHNldENpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU1pbGVzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE1pbGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVQYWdlTG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgLy8gc2V0IHRoZSB3aXRoIGNyZWRlbnRpYWxzIHRvIHRydWVcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAgICAgJy9hcGkvZ2V0aGVscCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWxlczogbWlsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFmaWx0ZXI6IGRhdGFmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2xvY2F0aW9uOiBVc2VyQ29tcGxldGVBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRodG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVTdGF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZT8uZGF0YT8ucmVzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9ucyhudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbEl0ZW0oT2JqZWN0LmtleXMocmVzcG9uc2U/LmRhdGE/LnJlc291cmNlcykubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnQoTWF0aC5jZWlsKE9iamVjdC5rZXlzKHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXMpLmxlbmd0aCAvIHBhZ2VTaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhZ2UoMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldERhdGEobnVsbCk7XG4gICAgICAgIHNldFRvdGFsSXRlbSgwKTtcbiAgICAgICAgaWYgKG1pbGVzICE9ICcnICYmIGNpdHkgPT0gJycpIHtcbiAgICAgICAgICAgIHNldENpdHlFcnJvcignUGxlYXNlIGVudGVyIGEgY2l0eSB0byBzZWFyY2gnKTtcbiAgICAgICAgICAgIHNldERhdGEobnVsbCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb25zKG51bGwpO1xuXG4gICAgICAgICAgICBzZXRUb3RhbEl0ZW0oMCk7XG4gICAgICAgICAgICBzZXRDb3VudCgwKTtcbiAgICAgICAgICAgIHNldFBhZ2UoMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDaXR5RXJyb3IoJycpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgd2l0aCBjcmVkZW50aWFscyB0byB0cnVlXG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL2dldGhlbHAnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbGVzOiBtaWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFmaWx0ZXI6IGRhdGFmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9sb2NhdGlvbjogVXNlckNvbXBsZXRlQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRodG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9ucyhudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG90YWxJdGVtKE9iamVjdC5rZXlzKHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXMpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoT2JqZWN0LmtleXMocmVzcG9uc2U/LmRhdGE/LnJlc291cmNlcykubGVuZ3RoIC8gcGFnZVNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHsgaXNMb2FkZWQgfSA9IHVzZUpzQXBpTG9hZGVyKHtcbiAgICAgICAgaWQ6ICdnb29nbGUtbWFwLXNjcmlwdCcsXG4gICAgICAgIGdvb2dsZU1hcHNBcGlLZXk6ICdBSXphU3lDVzNPNlBRY3REeG9Tb1NOWVdWYTQ0blhjMXplNFYtTncnLFxuICAgIH0pO1xuICAgIGNvbnN0IGdldEN1cnJlbnRVc2VyTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicG9zaXRpb25cIixwb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTGF0aXR1ZGUgaXMgOicsIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9uZ2l0dWRlIGlzIDonLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHsgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSB9O1xuICAgICAgICAgICAgc2V0Q3VycmVudGxvYyhsb2NhdGlvbik7XG4gICAgICAgICAgICBjdXJyZW50bG9jID0gbG9jYXRpb247XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50bG9jKTtcbiAgICAgICAgICAgIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCAvL3N1YiBpbiB5b3VyIGxhdGl0dWRlXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSwgLy9zdWIgaW4geW91ciBsb25naXR1ZGVcbiAgICAgICAgICAgICAgICBjaXR5ID0gJycsXG4gICAgICAgICAgICAgICAgc3RhdGUgPSAnJztcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoXG4gICAgICAgICAgICAgICAgeyBsb2NhdGlvbjogeyBsYXQ6IGxhdGl0dWRlLCBsbmc6IGxvbmdpdHVkZSB9IH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlU3RhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZHJlc3NfY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Mi50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gZWxlbWVudDIubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsb2NhbGl0eSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHkgPSBlbGVtZW50Mi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckNvbXBsZXRlQWRkcmVzcyhyZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJDb21wbGV0ZUFkZHJlc3MgPSByZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2l0eShjaXR5ICsgJywgJyArIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2VMb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgb25Mb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgIG1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgICAgc2V0TWFwKG1hcCk7XG4gICAgICAgIGlmIChpZ25vcmVTdGF0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBnZXRDdXJyZW50VXNlckxvY2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblVubW91bnQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiBjYWxsYmFjayhtYXApIHtcbiAgICAgICAgc2V0TWFwKG51bGwpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vZnVuY3Rpb24gdGhhdCBpcyBjYWxsaW5nIHRoZSBkaXJlY3Rpb25zIHNlcnZpY2VcbiAgICBjb25zdCBnZXREaXJlY3Rpb25zID0gKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHJlc291cmNlLmFkZHJlc3M7XG4gICAgICAgIGlmIChvcmlnaW4gIT09IG51bGwgJiYgZGVzdGluYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBjdXJyZW50bG9jLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoYW5naW5nIHRoZSBzdGF0ZSBvZiBkaXJlY3Rpb25zIHRvIHRoZSByZXN1bHQgb2YgZGlyZWN0aW9uIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbnMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb25zKHJlc3VsdCk7IC8vc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGVycm9yIGZldGNoaW5nIGRpcmVjdGlvbnMgJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldERhdGFGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkdldEhlbHAgfCBXZUNhcmU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZC5kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IG10OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgbWF4V2lkdGg6IDEyMDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXhXaWR0aDogNzAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cImFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YWZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicmVzb3VyY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNvdXJjZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZXJ2aWNlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VydmljZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDYwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcmVzb3VyY2Uvc2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Z1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHdpdGhpbiBDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJTZWFyY2ggd2l0aGluIENpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB3aXRoaW4gbWlsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIlNlYXJjaCB3aXRoaW4gbWlsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21pbGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNaWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57Q2l0eUVycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAsIGhlaWdodDogNTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHB0OiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAhPSBudWxsICYmIGRhdGFmaWx0ZXIgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBhZ2VTaXplID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlIC0gMSkgKiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2UgLSAxKSAqIHBhZ2VTaXplICsgcGFnZVNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubWFwKChyZXNvdXJjZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBrZXk9e3Jlc291cmNlLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2UuSW1hZ2VVcmwgIT0gJycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXNvdXJjZS5JbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cmVzb3VyY2UuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cmVzb3VyY2UuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL3N0YXRpYy9pbWFnZXMvYXZhdGFycy9yZXNvdXJjZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlLk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlLkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNvdXJjZS50eXBlICE9ICdyZXNvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdBdmFpbGFibGUgb24gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UuYXZhaWxhYmxlRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5mb3JtYXQoJ01NL0REL1lZWVknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzb3VyY2UuU0tVICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgaXRlbShzKSBhdmFpbGFibGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNvdXJjZS5kaXN0YW5jZSArICdtaWxlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXREaXJlY3Rpb25zKHJlc291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FwcC9nZXRoZWxwLzoke3Jlc291cmNlLl9pZH0vOiR7cmVzb3VyY2UudHlwZX0vOmdldGhlbHBpdGVtYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNlcnZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydUb3RhbCBJdGVtczogJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsaXRlbX0gJm5ic3A7Jm5ic3A7eydJdGVtcyBwZXIgUGFnZTogJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlUGFnZVNpemVDaGFuZ2V9IHZhbHVlPXtwYWdlU2l6ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZVNpemVzLm1hcCgoc2l6ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzaXplfSB2YWx1ZT17c2l6ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZ1RvcD17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvYWRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXtjdXJyZW50bG9jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb209ezEzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5tb3VudD17b25Vbm1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50bG9jICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIGN1cnJlbnQgbG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwibWFya2VyXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2N1cnJlbnRsb2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAhPSBudWxsICYmIGRpcmVjdGlvbnMgPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEubWFwKChyZXNvdXJjZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cmVzb3VyY2UubWFya2VydGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jlc291cmNlLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtyZXNvdXJjZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENoaWxkIGNvbXBvbmVudHMsIHN1Y2ggYXMgbWFya2VycywgaW5mbyB3aW5kb3dzLCBldGMuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXJlY3Rpb25zICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpcmVjdGlvbnNSZW5kZXJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9ucz17ZGlyZWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hb29nbGVNYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHVzZXJQcm9maWxlUmVkdWNlciB9KSA9PiAoe1xuICAgIHVzZXJQcm9maWxlUmVkdWNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7fTtcblxuY29uc3QgQ29ubmVjdGVkR2V0SGVscCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdldEhlbHApO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb25uZWN0ZWRHZXRIZWxwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7XG4gICAgQm94LFxuICAgIEdyaWQsXG4gICAgQ29udGFpbmVyLFxuICAgIENhcmQsXG4gICAgQ2FyZEhlYWRlcixcbiAgICBDYXJkQ29udGVudCxcbiAgICBUZXh0RmllbGQsXG4gICAgQ2FyZEFjdGlvbnMsXG4gICAgRGl2aWRlcixcbiAgICBCdXR0b24sXG4gICAgQ2FyZE1lZGlhLFxuICAgIFRhYmxlLFxuICAgIFRhYmxlQm9keSxcbiAgICBUYWJsZUNlbGwsXG4gICAgRGlhbG9nLFxuICAgIERpYWxvZ0FjdGlvbnMsXG4gICAgRGlhbG9nQ29udGVudCxcbiAgICBEaWFsb2dDb250ZW50VGV4dCxcbiAgICBUYWJsZVJvdyxcbiAgICBUYWJsZUNvbnRhaW5lcixcbiAgICBQYXBlcixcbiAgICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XG5pbml0KCdUZjdsR0UweWV3RnZPTHhhaCcpO1xuXG5pbXBvcnQgc2VydmVyVXJsIGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgeyBHb29nbGVNYXAsIHVzZUpzQXBpTG9hZGVyLCBNYXJrZXIsIERpcmVjdGlvbnNSZW5kZXJlciB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknO1xuXG5pbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VMb2NhdGlvbiwgTGluaywgdXNlSGlzdG9yeSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCBHZXRIZWxwSXRlbTogRnVuY3Rpb25Db21wb25lbnQ8YW55PiA9ICh7IHVzZXJQcm9maWxlUmVkdWNlciwgcHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICAgIGNvbnN0IHVzZXJfZW1haWwgPSB1c2VyUHJvZmlsZVJlZHVjZXI/LnVzZXJOYW1lOyAvL1wiYWJjQGdtYWlsLmNvbVwiOy8vY2hhbmdlXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBbcmVzb3VyY2UsIHNldFJlc291cmNlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbY3VycmVudGxvYywgc2V0Q3VycmVudGxvY10gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxhdDogMzcuMzE4NCxcbiAgICAgICAgbG5nOiAtMTIxLjgzODE1ODksXG4gICAgfSk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkaXJlY3Rpb25zLCBzZXREaXJlY3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtwYWdldHlwZSwgc2V0UGFnZVR5cGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgbGV0IGlnbm9yZVN0YXQgPSBmYWxzZTtcbiAgICBjb25zdCBbVXNlckNvbXBsZXRlQWRkcmVzcywgc2V0VXNlckNvbXBsZXRlQWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMTI1cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0NTBweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgICAgbGF0OiAzNy4zMTg0LFxuICAgICAgICBsbmc6IC0xMjEuODM4MTU4OSxcbiAgICB9O1xuICAgIC8vY2hhbmdlIHN0YXJ0XG4gICAgY29uc3QgVXNlcklkID0gdXNlclByb2ZpbGVSZWR1Y2VyPy5pZDsgLy8nNjIyNWU2MWJmODFkMjU0MWE0MDAwYmM5JztcbiAgICBsZXQgaWQ7XG4gICAgbGV0IGl0ZW1fdHlwZTtcbiAgICAvLyBsZXQgcGFnZXR5cGU7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWQgPSBwYXJhbT8uaWQ/LnN1YnN0cmluZyhwYXJhbT8uaWQ/LmluZGV4T2YoJzonKSArIDEpO1xuICAgICAgICBpdGVtX3R5cGUgPSBwYXJhbT8udHlwZT8uc3Vic3RyaW5nKHBhcmFtPy50eXBlPy5pbmRleE9mKCc6JykgKyAxKSArICdzJztcbiAgICAgICAgcGFnZXR5cGUgPSBwYXJhbT8ucGFnZXR5cGU/LnN1YnN0cmluZyhwYXJhbT8ucGFnZXR5cGU/LmluZGV4T2YoJzonKSArIDEpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhZ2V0eXBlKTtcbiAgICAgICAgc2V0UGFnZVR5cGUocGFnZXR5cGUpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZXBhZ2Vsb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAvLyBzZXQgdGhlIHdpdGggY3JlZGVudGlhbHMgdG8gdHJ1ZVxuICAgICAgICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgICAgICcvYXBpL2dldGhlbHAvc2VhcmNoJyxcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBpdGVtX3R5cGU6IGl0ZW1fdHlwZSwgaWQ6IGlkLCB1c2VyX2xvY2F0aW9uOiBVc2VyQ29tcGxldGVBZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGh0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZVN0YXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LmRhdGE/LnJlc291cmNlc1swXS50eXBlID09ICdyZXNvdXJjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1YW50aXR5KHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXNbMF0uU0tVKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlPy5kYXRhPy5yZXNvdXJjZXMpO1xuICAgICAgICAgICAgICAgICAgICAvL3NldENpdHkocmVzcG9uc2UuZGF0YS51c2VyX2N1cnJlbnRjaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9zZXRDdXJyZW50bG9jKHJlc3BvbnNlPy5kYXRhPy51c2VyX2N1cnJlbnRhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RGlyZWN0aW9ucyhyZXNwb25zZT8uZGF0YT8ucmVzb3VyY2VzWzBdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGlzTG9hZGVkIH0gPSB1c2VKc0FwaUxvYWRlcih7XG4gICAgICAgIGlkOiAnZ29vZ2xlLW1hcC1zY3JpcHQnLFxuICAgICAgICBnb29nbGVNYXBzQXBpS2V5OiAnQUl6YVN5Q1czTzZQUWN0RHhvU29TTllXVmE0NG5YYzF6ZTRWLU53JyxcbiAgICB9KTtcblxuICAgIGNvbnN0IFttYXAsIHNldE1hcF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IG9uTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcCkge1xuICAgICAgICBjb25zdCBib3VuZHMgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgICBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICAgIHNldE1hcChtYXApO1xuICAgICAgICBpZiAoaWdub3JlU3RhdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZ2V0Q3VycmVudFVzZXJMb2NhdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25Vbm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgICAgIHNldE1hcChudWxsKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0Q3VycmVudFVzZXJMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwb3NpdGlvblwiLHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMYXRpdHVkZSBpcyA6JywgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb25naXR1ZGUgaXMgOicsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0geyBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlIH07XG4gICAgICAgICAgICBzZXRDdXJyZW50bG9jKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGN1cnJlbnRsb2MgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRsb2MpO1xuICAgICAgICAgICAgdmFyIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCksXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIC8vc3ViIGluIHlvdXIgbGF0aXR1ZGVcbiAgICAgICAgICAgICAgICBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLCAvL3N1YiBpbiB5b3VyIGxvbmdpdHVkZVxuICAgICAgICAgICAgICAgIGNpdHkgPSAnJyxcbiAgICAgICAgICAgICAgICBzdGF0ZSA9ICcnO1xuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZShcbiAgICAgICAgICAgICAgICB7IGxvY2F0aW9uOiB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH0gfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVTdGF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQyLnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBlbGVtZW50Mi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsaXR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2l0eSA9IGVsZW1lbnQyLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyQ29tcGxldGVBZGRyZXNzKHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckNvbXBsZXRlQWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NldENpdHkoY2l0eStcIiwgXCIrc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcGFnZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy9mdW5jdGlvbiB0aGF0IGlzIGNhbGxpbmcgdGhlIGRpcmVjdGlvbnMgc2VydmljZVxuICAgIGNvbnN0IGdldERpcmVjdGlvbnMgPSAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uID0gcmVzb3VyY2UuYWRkcmVzcztcbiAgICAgICAgLy9sZXQgb3JpZ2luPVwiMjIzOSBNY0xhdWdobGluIEF2ZSxTYW4gSm9zZSw5NTEyMlwiXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudGxvYyk7XG4gICAgICAgIGlmIChvcmlnaW4gIT09IG51bGwgJiYgZGVzdGluYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBjdXJyZW50bG9jLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoYW5naW5nIHRoZSBzdGF0ZSBvZiBkaXJlY3Rpb25zIHRvIHRoZSByZXN1bHQgb2YgZGlyZWN0aW9uIHNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbnMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb25zKHJlc3VsdCk7IC8vc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGVycm9yIGZldGNoaW5nIGRpcmVjdGlvbnMgJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUl0ZW1RdWFudGl0eUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoMSA8IGV2ZW50LnRhcmdldC52YWx1ZSAmJiBldmVudC50YXJnZXQudmFsdWUgPiBkYXRhWzBdLlNLVSkge1xuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KCdRdWFudGl0eSBzaG91bGQgYmUgYmV0d2VlbiAxIGFuZCAnICsgZGF0YVswXS5TS1UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3JUZXh0KCcnKTtcbiAgICAgICAgICAgIHNldFF1YW50aXR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8vL0VtYWlsXG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGZlZWRiYWNrOiAnJyxcbiAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICB0b19lbWFpbDogJ3NuZWhhdGhvbWFzZGl2QGdtYWlsLmNvbScsXG4gICAgICAgIHN1YmplY3Q6ICdTdWJqZWN0JyxcbiAgICB9O1xuICAgIGNvbnN0IHNlbmRFbWFpbCA9ICh0ZW1wbGF0ZUlkLCB2YXJpYWJsZXMpID0+IHtcbiAgICAgICAgZW1haWxqc1xuICAgICAgICAgICAgLnNlbmQoJ3NlcnZpY2Vfd2dmbmgwYicsIHRlbXBsYXRlSWQsIHZhcmlhYmxlcylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW1haWwgc3VjY2Vzc2Z1bGx5IHNlbnQhJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ09oIHdlbGwsIHlvdSBmYWlsZWQuIEhlcmUgc29tZSB0aG91Z2h0cyBvbiB0aGUgZXJyb3IgdGhhdCBvY2N1cmVkOicsXG4gICAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgIGxldCByZXNvdXJjZSA9IGRhdGFbMF07XG4gICAgICAgICAgICAvLy9lbWFpbCB0byB2aWN0aW1cbiAgICAgICAgICAgIGxldCByZXNvdXJjZV9lbWFpbF9xdWFudGl0eSA9XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UudHlwZSA9PSAncmVzb3VyY2UnXG4gICAgICAgICAgICAgICAgICAgID8gcXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQocmVzb3VyY2UuYXZhaWxhYmxlRGF0ZSkuZm9ybWF0KCdNTS1ERC1ZWVlZJyk7XG4gICAgICAgICAgICBsZXQgcXVhX2RhdGUgPSByZXNvdXJjZS50eXBlID09ICdyZXNvdXJjZScgPyAnUXVhbnRpdHknIDogJ0F2YWlsYWJsZSBEYXRlJztcbiAgICAgICAgICAgIGxldCBlbWFpbF9zdWJqZWN0ID1cbiAgICAgICAgICAgICAgICByZXNvdXJjZS50eXBlID09ICdyZXNvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgPyAnUmVzb3VyY2UgcmVzZXJ2YXRpb24gZGV0YWlscydcbiAgICAgICAgICAgICAgICAgICAgOiAnU2VydmljZSByZXNlcnZhdGlvbiBkZXRhaWxzJztcbiAgICAgICAgICAgIGxldCB0b191c2VyX2VtYWlsID0gdXNlclByb2ZpbGVSZWR1Y2VyLnVzZXJOYW1lOyAvL2NoYW5nZSBsYXRlciBzdGF0ZS50b19lbWFpbDtcbiAgICAgICAgICAgIGxldCB1cmwgPVxuICAgICAgICAgICAgICAgICdodHRwOi8vbG9jYWxob3N0Ojg1MDAnICtcbiAgICAgICAgICAgICAgICAnL2FwcC9nZXRoZWxwLzonICtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5faWQgK1xuICAgICAgICAgICAgICAgICcvOicgK1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnR5cGUgK1xuICAgICAgICAgICAgICAgICcvOmVtYWlsJyArXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VfZW1haWxfcXVhbnRpdHk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICAgICAgLy9zZXJ2ZXJVcmwrJ2FwcC9nZXRoZWxwLzonK3Jlc291cmNlLl9pZCsnLzpyZXNvdXJjZSc7Y29uc29sZS5sb2codXJsKTtjb25zb2xlLmxvZyhsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUlkID0gJ3RlbXBsYXRlX3Y5ZmtxbXknO1xuXG4gICAgICAgICAgICBzZW5kRW1haWwodGVtcGxhdGVJZCwge1xuICAgICAgICAgICAgICAgIHJlc291cmNlX25hbWU6IHJlc291cmNlLk5hbWUsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VfZGVzY3JpcHRpb246IHJlc291cmNlLkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHJlc291cmNlX2FkZHJlc3M6IHJlc291cmNlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VfcXVhbnRpdHk6IHJlc291cmNlX2VtYWlsX3F1YW50aXR5LFxuICAgICAgICAgICAgICAgIHF1YV9kYXRlOiBxdWFfZGF0ZSxcbiAgICAgICAgICAgICAgICBvd25lcl9uYW1lOiByZXNvdXJjZS5vd25lcl9uYW1lLFxuICAgICAgICAgICAgICAgIHBob25lX251bTogcmVzb3VyY2UuUGhvbmVfTnVtYmVyLFxuXG4gICAgICAgICAgICAgICAgZnJvbV9uYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIHRvX25hbWU6IHVzZXJQcm9maWxlUmVkdWNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyUHJvZmlsZVJlZHVjZXIubGFzdE5hbWUsIC8vJ0thdGFyaW5hIFNtaXRoJy8vXG4gICAgICAgICAgICAgICAgc3ViamVjdDogZW1haWxfc3ViamVjdCxcbiAgICAgICAgICAgICAgICB0b19lbWFpbDogdG9fdXNlcl9lbWFpbCxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9lbWFpbCB0byBvd25lclxuICAgICAgICAgICAgc2VuZEVtYWlsKCd0ZW1wbGF0ZV96bnVwOWFoJywge1xuICAgICAgICAgICAgICAgIHJlc291cmNlX25hbWU6IHJlc291cmNlLk5hbWUsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VfZGVzY3JpcHRpb246IHJlc291cmNlLkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHJlc291cmNlX2FkZHJlc3M6IHJlc291cmNlLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VfcXVhbnRpdHk6IHJlc291cmNlX2VtYWlsX3F1YW50aXR5LFxuICAgICAgICAgICAgICAgIHF1YV9kYXRlOiBxdWFfZGF0ZSxcbiAgICAgICAgICAgICAgICB2aWN0aW1fbmFtZTogdXNlclByb2ZpbGVSZWR1Y2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXJQcm9maWxlUmVkdWNlci5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICB2aWN0aW1fcGhvbmVfbnVtOiB1c2VyUHJvZmlsZVJlZHVjZXIucHJvZmlsZS5waG9uZU51bWJlcixcblxuICAgICAgICAgICAgICAgIGZyb21fbmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICB0b19uYW1lOiByZXNvdXJjZS5vd25lcl9uYW1lLCAvLydLYXRhcmluYSBTbWl0aCcvL1xuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN0YXRlLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdG9fZW1haWw6IHJlc291cmNlLm93bmVyX2VtYWlsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocXVhbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldFF1YW50aXR5KGRhdGFbMF0uU0tVKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIHdpdGggY3JlZGVudGlhbHMgdG8gdHJ1ZVxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL2dldGhlbHAnLFxuICAgICAgICAgICAgICAgICAgICB7IHJlc291cmNlOiBkYXRhWzBdLCB1c2VyX2lkOiBVc2VySWQsIHF1YW50aXR5OiBxdWFudGl0eSB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGVTZWFyY2goZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlzdG9yeS5wdXNoKCcvYXBwL2dldGhlbHAnKSA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yVGV4dChcbiAgICAgICAgICAgICAgICAnTWF4aW11bSBhdmFpbGFibGUgUXVhbnRpdHkgaXMgJyArXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbMF0uU0tVICtcbiAgICAgICAgICAgICAgICAgICAgJy4gUGxlYXNlIHVwZGF0ZSBRdWFudGl0eSBiZXR3ZWVuIDEgYW5kICcgK1xuICAgICAgICAgICAgICAgICAgICBkYXRhWzBdLlNLVSArXG4gICAgICAgICAgICAgICAgICAgICcgYmVmb3JlIGNvbmZpcm1pbmcgdGhlIHJlc2VydmF0aW9uLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICBoaXN0b3J5LnB1c2goJy9hcHAvZ2V0aGVscCcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R2V0SGVscEl0ZW0gfCBXZUNhcmU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZC5kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVUeXBvZ3JhcGh5UHJvcHM9e3sgdmFyaWFudDogJ2gyJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldEhlbHAgUmVzZXJ2YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEubWFwKChyZXNvdXJjZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtyZXNvdXJjZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6ICdub25lJywgYm94U2hhZG93OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlLkltYWdlVXJsICE9ICcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDc1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXNvdXJjZS5JbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyZXNvdXJjZS5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogNDAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jlc291cmNlLk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiA0MDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXJzL3Jlc291cmNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1pbldpZHRoOiA2NTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3JkZXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPk5hbWU8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOntyZXNvdXJjZS5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3JkZXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNvdXJjZS50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzb3VyY2UnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlF1YW50aXR5PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V0eXBlPy5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9ICdlbWFpbCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzb3VyY2UnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5TS1VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQubGVuZ3RoID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yVGV4dC5sZW5ndGggPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdVcGRhdGUgcmVxdWlyZWQgcXVhbnRpdHknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDFjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUl0ZW1RdWFudGl0eUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5hdmFpbGFibGVEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01NL0REL1lZWVknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZXR5cGU/LnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXR5cGUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm9yZGVyOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5EZXNjcmlwdGlvbjwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2UuRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+T3duZXIgTmFtZTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e3Jlc291cmNlLm93bmVyX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+QWRkcmVzczwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e3Jlc291cmNlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm9yZGVyOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5EaXN0YW5jZTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e3Jlc291cmNlLmRpc3RhbmNlfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+UGhvbmUgTnVtYmVyPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZS5QaG9uZV9OdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm9yZGVyOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5FbWFpbDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzb3VyY2Uub3duZXJfZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBwYWRkaW5nVG9wPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcj17Y3VycmVudGxvY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb209ezEzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVubW91bnQ9e29uVW5tb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENoaWxkIGNvbXBvbmVudHMsIHN1Y2ggYXMgbWFya2VycywgaW5mbyB3aW5kb3dzLCBldGMuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpcmVjdGlvbnMgIT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3Rpb25zUmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9ucz17ZGlyZWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR29vZ2xlTWFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXsnL2FwcC9nZXRoZWxwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdldHlwZT8uc3Vic3RyaW5nKDAsIDUpICE9ICdlbWFpbCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+eycgJ31cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNlcnZhdGlvbiBkZXRhaWxzIHdlcmUgc3VjY2Vzc2Z1bGx5IHNlbmQgdG8ge3VzZXJfZW1haWx9LlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gYXV0b0ZvY3VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ0xPU0VcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihHZXRIZWxwSXRlbSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHVzZXJQcm9maWxlUmVkdWNlciB9KSA9PiAoe1xuICAgIHVzZXJQcm9maWxlUmVkdWNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7fTtcblxuY29uc3QgQ29ubmVjdGVkR2V0SGVscEl0ZW0gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHZXRIZWxwSXRlbSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbm5lY3RlZEdldEhlbHBJdGVtKTtcbi8vZXhwb3J0IGRlZmF1bHQgR2V0SGVscEl0ZW07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUEwQkE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUE1RkE7OztBQTRGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFxQkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDaDhDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2a0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUxBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFXQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9