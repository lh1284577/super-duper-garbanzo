!
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    l = n(336),
    u = r(l),
    c = n(506),
    d = r(c),
    f = n(535),
    p = n(1570),
    h = r(p),
    m = n(1573),
    g = n(1619),
    y = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, Object.getPrototypeOf(t).call(this, e));
            return n.state = {
                showModal: !1
            },
            n
        }
        return i(t, e),
        s(t, [{
            key: "showModal",
            value: function() {
                this.setState({
                    showModal: !0
                })
            }
        },
        {
            key: "closeModal",
            value: function() {
                this.setState({
                    showModal: !1
                })
            }
        },
        {
            key: "renderBody",
            value: function() {
                if (this.props.isComponent) {
                    var e = this.props.manual;
                    return u["default"].createElement("div", {
                        className: "markdown-body"
                    },
                    u["default"].createElement(e, this.props.extraProps))
                }
                return u["default"].createElement("div", {
                    className: "markdown-body"
                },
                u["default"].createElement(h["default"], {
                    data: g("./" + this.props.slug + ".md")
                }))
            }
        },
        {
            key: "renderModal",
            value: function() {
                return u["default"].createElement(f.Modal, {
                    show: this.state.showModal,
                    bsSize: "lg",
                    onHide: this.closeModal.bind(this)
                },
                u["default"].createElement(f.Modal.Header, {
                    closeButton: !0
                },
                u["default"].createElement(f.Modal.Title, null, u["default"].createElement("i", {
                    className: d["default"].getApplicationIconClassList(this.props.slug),
                    style: {
                        fontSize: "18px"
                    }
                }), " ", this.props.name)), u["default"].createElement(f.Modal.Body, null, this.renderBody()))
            }
        },
        {
            key: "render",
            value: function() {
                return u["default"].createElement("div", {
                    className: "platform_service_wrapper",
                    onClick: this.showModal.bind(this)
                },
                u["default"].createElement("i", {
                    className: "iconfont icon-setting"
                },
                ""), u["default"].createElement("div", {
                    className: "platform_service"
                },
                u["default"].createElement("img", {
                    alt: "logo",
                    src: m("./" + this.props.slug + ".png")
                })), u["default"].createElement("div", {
                    className: "service_add"
                },
                this.props.name), this.renderModal())
            }
        }]),
        t
    } (u["default"].Component);
    y.propTypes = {
        isComponent: u["default"].PropTypes.bool,
        name: u["default"].PropTypes.string.isRequired,
        slug: u["default"].PropTypes.string.isRequired,
        extraProps: u["default"].PropTypes.object,
        manual: u["default"].PropTypes.func
    },
    y.displayName = "ServiceItem",
    t["default"] = y,
    e.exports = t["default"]
}
