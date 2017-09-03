if (function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function n(t) {
		var e = t.length,
			n = oe.type(t);
		return "function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}
	function i(t, e, n) {
		if (oe.isFunction(e)) return oe.grep(t, function(t, i) {
			return !!e.call(t, i, t) !== n
		});
		if (e.nodeType) return oe.grep(t, function(t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (fe.test(e)) return oe.filter(e, t, n);
			e = oe.filter(e, t)
		}
		return oe.grep(t, function(t) {
			return oe.inArray(t, e) >= 0 !== n
		})
	}
	function s(t, e) {
		do t = t[e];
		while (t && 1 !== t.nodeType);
		return t
	}
	function o(t) {
		var e = xe[t] = {};
		return oe.each(t.match(we) || [], function(t, n) {
			e[n] = !0
		}), e
	}
	function a() {
		ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (ge.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
	}
	function r() {
		(ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (a(), oe.ready())
	}
	function l(t, e, n) {
		if (void 0 === n && 1 === t.nodeType) {
			var i = "data-" + e.replace(_e, "-$1").toLowerCase();
			if (n = t.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n
				} catch (s) {}
				oe.data(t, e, n)
			} else n = void 0
		}
		return n
	}
	function c(t) {
		var e;
		for (e in t) if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}
	function h(t, e, n, i) {
		if (oe.acceptData(t)) {
			var s, o, a = oe.expando,
				r = t.nodeType,
				l = r ? oe.cache : t,
				c = r ? t[a] : t[a] && a;
			if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = r ? t[a] = X.pop() || oe.guid++ : a), l[c] || (l[c] = r ? {} : {
				toJSON: oe.noop
			}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = oe.extend(l[c], e) : l[c].data = oe.extend(l[c].data, e)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[oe.camelCase(e)] = n), "string" == typeof e ? (s = o[e], null == s && (s = o[oe.camelCase(e)])) : s = o, s
		}
	}
	function u(t, e, n) {
		if (oe.acceptData(t)) {
			var i, s, o = t.nodeType,
				a = o ? oe.cache : t,
				r = o ? t[oe.expando] : oe.expando;
			if (a[r]) {
				if (e && (i = n ? a[r] : a[r].data)) {
					oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in i ? e = [e] : (e = oe.camelCase(e), e = e in i ? [e] : e.split(" ")), s = e.length;
					for (; s--;) delete i[e[s]];
					if (n ? !c(i) : !oe.isEmptyObject(i)) return
				}(n || (delete a[r].data, c(a[r]))) && (o ? oe.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
			}
		}
	}
	function d() {
		return !0
	}
	function f() {
		return !1
	}
	function p() {
		try {
			return ge.activeElement
		} catch (t) {}
	}
	function g(t) {
		var e = He.split("|"),
			n = t.createDocumentFragment();
		if (n.createElement) for (; e.length;) n.createElement(e.pop());
		return n
	}
	function m(t, e) {
		var n, i, s = 0,
			o = typeof t.getElementsByTagName !== De ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== De ? t.querySelectorAll(e || "*") : void 0;
		if (!o) for (o = [], n = t.childNodes || t; null != (i = n[s]); s++)!e || oe.nodeName(i, e) ? o.push(i) : oe.merge(o, m(i, e));
		return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], o) : o
	}
	function v(t) {
		Ne.test(t.type) && (t.defaultChecked = t.checked)
	}
	function b(t, e) {
		return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}
	function y(t) {
		return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
	}
	function w(t) {
		var e = Xe.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}
	function x(t, e) {
		for (var n, i = 0; null != (n = t[i]); i++) oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"))
	}
	function C(t, e) {
		if (1 === e.nodeType && oe.hasData(t)) {
			var n, i, s, o = oe._data(t),
				a = oe._data(e, o),
				r = o.events;
			if (r) {
				delete a.handle, a.events = {};
				for (n in r) for (i = 0, s = r[n].length; s > i; i++) oe.event.add(e, n, r[n][i])
			}
			a.data && (a.data = oe.extend({}, a.data))
		}
	}
	function S(t, e) {
		var n, i, s;
		if (1 === e.nodeType) {
			if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[oe.expando]) {
				s = oe._data(e);
				for (i in s.events) oe.removeEvent(e, i, s.handle);
				e.removeAttribute(oe.expando)
			}
			"script" === n && e.text !== t.text ? (y(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ne.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}
	}
	function D(e, n) {
		var i = oe(n.createElement(e)).appendTo(n.body),
			s = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : oe.css(i[0], "display");
		return i.detach(), s
	}
	function k(t) {
		var e = ge,
			n = tn[t];
		return n || (n = D(t, e), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), n = D(t, e), Qe.detach()), tn[t] = n), n
	}
	function _(t, e) {
		return {
			get: function() {
				var n = t();
				if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}
	function T(t, e) {
		if (e in t) return e;
		for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, s = pn.length; s--;) if (e = pn[s] + n, e in t) return e;
		return i
	}
	function M(t, e) {
		for (var n, i, s, o = [], a = 0, r = t.length; r > a; a++) i = t[a], i.style && (o[a] = oe._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (o[a] = oe._data(i, "olddisplay", k(i.nodeName)))) : o[a] || (s = Ee(i), (n && "none" !== n || !s) && oe._data(i, "olddisplay", s ? n : oe.css(i, "display"))));
		for (a = 0; r > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
		return t
	}
	function E(t, e, n) {
		var i = hn.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}
	function F(t, e, n, i, s) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += oe.css(t, n + Me[o], !0, s)), i ? ("content" === n && (a -= oe.css(t, "padding" + Me[o], !0, s)), "margin" !== n && (a -= oe.css(t, "border" + Me[o] + "Width", !0, s))) : (a += oe.css(t, "padding" + Me[o], !0, s), "padding" !== n && (a += oe.css(t, "border" + Me[o] + "Width", !0, s)));
		return a
	}
	function N(t, e, n) {
		var i = !0,
			s = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = en(t),
			a = ie.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, o);
		if (0 >= s || null == s) {
			if (s = nn(t, e, o), (0 > s || null == s) && (s = t.style[e]), on.test(s)) return s;
			i = a && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
		}
		return s + F(t, e, n || (a ? "border" : "content"), i, o) + "px"
	}
	function A(t, e, n, i, s) {
		return new A.prototype.init(t, e, n, i, s)
	}
	function I() {
		return setTimeout(function() {
			gn = void 0
		}), gn = oe.now()
	}
	function L(t, e) {
		var n, i = {
			height: t
		},
			s = 0;
		for (e = e ? 1 : 0; 4 > s; s += 2 - e) n = Me[s], i["margin" + n] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}
	function P(t, e, n) {
		for (var i, s = (xn[e] || []).concat(xn["*"]), o = 0, a = s.length; a > o; o++) if (i = s[o].call(n, e, t)) return i
	}
	function O(t, e, n) {
		var i, s, o, a, r, l, c, h, u = this,
			d = {},
			f = t.style,
			p = t.nodeType && Ee(t),
			g = oe._data(t, "fxshow");
		n.queue || (r = oe._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
			r.unqueued || l()
		}), r.unqueued++, u.always(function() {
			u.always(function() {
				r.unqueued--, oe.queue(t, "fx").length || r.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(t, "display"), h = k(t.nodeName), "none" === c && (c = h), "inline" === c && "none" === oe.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== h ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (i in e) if (s = e[i], vn.exec(s)) {
			if (delete e[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
				if ("show" !== s || !g || void 0 === g[i]) continue;
				p = !0
			}
			d[i] = g && g[i] || oe.style(t, i)
		}
		if (!oe.isEmptyObject(d)) {
			g ? "hidden" in g && (p = g.hidden) : g = oe._data(t, "fxshow", {}), o && (g.hidden = !p), p ? oe(t).show() : u.done(function() {
				oe(t).hide()
			}), u.done(function() {
				var e;
				oe._removeData(t, "fxshow");
				for (e in d) oe.style(t, e, d[e])
			});
			for (i in d) a = P(p ? g[i] : 0, i, u), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}
	function H(t, e) {
		var n, i, s, o, a;
		for (n in t) if (i = oe.camelCase(n), s = e[i], o = t[n], oe.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = oe.cssHooks[i], a && "expand" in a) {
			o = a.expand(o), delete t[i];
			for (n in o) n in t || (t[n] = o[n], e[n] = s)
		} else e[i] = s
	}
	function R(t, e, n) {
		var i, s, o = 0,
			a = wn.length,
			r = oe.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var e = gn || I(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
				return r.notifyWith(t, [c, o, n]), 1 > o && l ? n : (r.resolveWith(t, [c]), !1)
			},
			c = r.promise({
				elem: t,
				props: oe.extend({}, e),
				opts: oe.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: gn || I(),
				duration: n.duration,
				tweens: [],
				createTween: function(e, n) {
					var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(e) {
					var n = 0,
						i = e ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; i > n; n++) c.tweens[n].run(1);
					return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
				}
			}),
			h = c.props;
		for (H(h, c.opts.specialEasing); a > o; o++) if (i = wn[o].call(c, t, h, c.opts)) return i;
		return oe.map(h, P, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	function z(t) {
		return function(e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, s = 0,
				o = e.toLowerCase().match(we) || [];
			if (oe.isFunction(n)) for (; i = o[s++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}
	function $(t, e, n, i) {
		function s(r) {
			var l;
			return o[r] = !0, oe.each(t[r] || [], function(t, r) {
				var c = r(e, n, i);
				return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
			}), l
		}
		var o = {},
			a = t === qn;
		return s(e.dataTypes[0]) || !o["*"] && s("*")
	}
	function j(t, e) {
		var n, i, s = oe.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
		return n && oe.extend(!0, t, n), t
	}
	function W(t, e, n) {
		for (var i, s, o, a, r = t.contents, l = t.dataTypes;
		"*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
		if (s) for (a in r) if (r[a] && r[a].test(s)) {
			l.unshift(a);
			break
		}
		if (l[0] in n) o = l[0];
		else {
			for (a in n) {
				if (!l[0] || t.converters[a + " " + l[0]]) {
					o = a;
					break
				}
				i || (i = a)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}
	function B(t, e, n, i) {
		var s, o, a, r, l, c = {},
			h = t.dataTypes.slice();
		if (h[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
		for (o = h.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (a = c[l + " " + o] || c["* " + o], !a) for (s in c) if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
				a === !0 ? a = c[s] : c[s] !== !0 && (o = r[0], h.unshift(r[1]));
				break
			}
			if (a !== !0) if (a && t["throws"]) e = a(e);
			else try {
				e = a(e)
			} catch (u) {
				return {
					state: "parsererror",
					error: a ? u : "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: e
		}
	}
	function U(t, e, n, i) {
		var s;
		if (oe.isArray(e)) oe.each(e, function(e, s) {
			n || Gn.test(t) ? i(t, s) : U(t + "[" + ("object" == typeof s ? e : "") + "]", s, n, i)
		});
		else if (n || "object" !== oe.type(e)) i(t, e);
		else for (s in e) U(t + "[" + s + "]", e[s], n, i)
	}
	function q() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {}
	}
	function Y() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}
	function V(t) {
		return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var X = [],
		G = X.slice,
		J = X.concat,
		K = X.push,
		Z = X.indexOf,
		Q = {},
		te = Q.toString,
		ee = Q.hasOwnProperty,
		ne = "".trim,
		ie = {},
		se = "1.11.0",
		oe = function(t, e) {
			return new oe.fn.init(t, e)
		},
		ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		re = /^-ms-/,
		le = /-([\da-z])/gi,
		ce = function(t, e) {
			return e.toUpperCase()
		};
	oe.fn = oe.prototype = {
		jquery: se,
		constructor: oe,
		selector: "",
		length: 0,
		toArray: function() {
			return G.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
		},
		pushStack: function(t) {
			var e = oe.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return oe.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(oe.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return this.pushStack(G.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: K,
		sort: X.sort,
		splice: X.splice
	}, oe.extend = oe.fn.extend = function() {
		var t, e, n, i, s, o, a = arguments[0] || {},
			r = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || oe.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++) if (null != (s = arguments[r])) for (i in s) t = a[i], n = s[i], a !== n && (c && n && (oe.isPlainObject(n) || (e = oe.isArray(n))) ? (e ? (e = !1, o = t && oe.isArray(t) ? t : []) : o = t && oe.isPlainObject(t) ? t : {}, a[i] = oe.extend(c, o, n)) : void 0 !== n && (a[i] = n));
		return a
	}, oe.extend({
		expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === oe.type(t)
		},
		isArray: Array.isArray ||
		function(t) {
			return "array" === oe.type(t)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		},
		isNumeric: function(t) {
			return t - parseFloat(t) >= 0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		isPlainObject: function(t) {
			var e;
			if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
			try {
				if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (ie.ownLast) for (e in t) return ee.call(t, e);
			for (e in t);
			return void 0 === e || ee.call(t, e)
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[te.call(t)] || "object" : typeof t
		},
		globalEval: function(e) {
			e && oe.trim(e) && (t.execScript ||
			function(e) {
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function(t) {
			return t.replace(re, "ms-").replace(le, ce)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, i) {
			var s, o = 0,
				a = t.length,
				r = n(t);
			if (i) {
				if (r) for (; a > o && (s = e.apply(t[o], i), s !== !1); o++);
				else for (o in t) if (s = e.apply(t[o], i), s === !1) break
			} else if (r) for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
			else for (o in t) if (s = e.call(t[o], o, t[o]), s === !1) break;
			return t
		},
		trim: ne && !ne.call("\ufeff\xa0") ?
		function(t) {
			return null == t ? "" : ne.call(t)
		} : function(t) {
			return null == t ? "" : (t + "").replace(ae, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
		},
		inArray: function(t, e, n) {
			var i;
			if (e) {
				if (Z) return Z.call(e, t, n);
				for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n
			}
			return -1
		},
		merge: function(t, e) {
			for (var n = +e.length, i = 0, s = t.length; n > i;) t[s++] = e[i++];
			if (n !== n) for (; void 0 !== e[i];) t[s++] = e[i++];
			return t.length = s, t
		},
		grep: function(t, e, n) {
			for (var i, s = [], o = 0, a = t.length, r = !n; a > o; o++) i = !e(t[o], o), i !== r && s.push(t[o]);
			return s
		},
		map: function(t, e, i) {
			var s, o = 0,
				a = t.length,
				r = n(t),
				l = [];
			if (r) for (; a > o; o++) s = e(t[o], o, i), null != s && l.push(s);
			else for (o in t) s = e(t[o], o, i), null != s && l.push(s);
			return J.apply([], l)
		},
		guid: 1,
		proxy: function(t, e) {
			var n, i, s;
			return "string" == typeof e && (s = t[e], e = t, t = s), oe.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
				return t.apply(e || this, n.concat(G.call(arguments)))
			}, i.guid = t.guid = t.guid || oe.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ie
	}), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		Q["[object " + e + "]"] = e.toLowerCase()
	});
	var he = function(t) {
			function e(t, e, n, i) {
				var s, o, a, r, l, c, u, p, g, m;
				if ((e ? e.ownerDocument || e : $) !== A && N(e), e = e || A, n = n || [], !t || "string" != typeof t) return n;
				if (1 !== (r = e.nodeType) && 9 !== r) return [];
				if (L && !i) {
					if (s = be.exec(t)) if (a = s[1]) {
						if (9 === r) {
							if (o = e.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && R(e, o) && o.id === a) return n.push(o), n
					} else {
						if (s[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
						if ((a = s[3]) && S.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(a)), n
					}
					if (S.qsa && (!P || !P.test(t))) {
						if (p = u = z, g = e, m = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
							for (c = d(t), (u = e.getAttribute("id")) ? p = u.replace(we, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
							g = ye.test(t) && h(e.parentNode) || e, m = c.join(",")
						}
						if (m) try {
							return Q.apply(n, g.querySelectorAll(m)), n
						} catch (v) {} finally {
							u || e.removeAttribute("id")
						}
					}
				}
				return x(t.replace(le, "$1"), e, n, i)
			}
			function n() {
				function t(n, i) {
					return e.push(n + " ") > D.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
				var e = [];
				return t
			}
			function i(t) {
				return t[z] = !0, t
			}
			function s(t) {
				var e = A.createElement("div");
				try {
					return !!t(e)
				} catch (n) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}
			function o(t, e) {
				for (var n = t.split("|"), i = t.length; i--;) D.attrHandle[n[i]] = e
			}
			function a(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
				if (i) return i;
				if (n) for (; n = n.nextSibling;) if (n === e) return -1;
				return t ? 1 : -1
			}
			function r(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return "input" === n && e.type === t
				}
			}
			function l(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}
			function c(t) {
				return i(function(e) {
					return e = +e, i(function(n, i) {
						for (var s, o = t([], n.length, e), a = o.length; a--;) n[s = o[a]] && (n[s] = !(i[s] = n[s]))
					})
				})
			}
			function h(t) {
				return t && typeof t.getElementsByTagName !== V && t
			}
			function u() {}
			function d(t, n) {
				var i, s, o, a, r, l, c, h = U[t + " "];
				if (h) return n ? 0 : h.slice(0);
				for (r = t, l = [], c = D.preFilter; r;) {
					(!i || (s = ce.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = he.exec(r)) && (i = s.shift(), o.push({
						value: i,
						type: s[0].replace(le, " ")
					}), r = r.slice(i.length));
					for (a in D.filter)!(s = pe[a].exec(r)) || c[a] && !(s = c[a](s)) || (i = s.shift(), o.push({
						value: i,
						type: a,
						matches: s
					}), r = r.slice(i.length));
					if (!i) break
				}
				return n ? r.length : r ? e.error(t) : U(t, l).slice(0)
			}
			function f(t) {
				for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
				return i
			}
			function p(t, e, n) {
				var i = e.dir,
					s = n && "parentNode" === i,
					o = W++;
				return e.first ?
				function(e, n, o) {
					for (; e = e[i];) if (1 === e.nodeType || s) return t(e, n, o)
				} : function(e, n, a) {
					var r, l, c = [j, o];
					if (a) {
						for (; e = e[i];) if ((1 === e.nodeType || s) && t(e, n, a)) return !0
					} else for (; e = e[i];) if (1 === e.nodeType || s) {
						if (l = e[z] || (e[z] = {}), (r = l[i]) && r[0] === j && r[1] === o) return c[2] = r[2];
						if (l[i] = c, c[2] = t(e, n, a)) return !0
					}
				}
			}
			function g(t) {
				return t.length > 1 ?
				function(e, n, i) {
					for (var s = t.length; s--;) if (!t[s](e, n, i)) return !1;
					return !0
				} : t[0]
			}
			function m(t, e, n, i, s) {
				for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (!n || n(o, i, s)) && (a.push(o), c && e.push(r));
				return a
			}
			function v(t, e, n, s, o, a) {
				return s && !s[z] && (s = v(s)), o && !o[z] && (o = v(o, a)), i(function(i, a, r, l) {
					var c, h, u, d = [],
						f = [],
						p = a.length,
						g = i || w(e || "*", r.nodeType ? [r] : r, []),
						v = !t || !i && e ? g : m(g, d, t, r, l),
						b = n ? o || (i ? t : p || s) ? [] : a : v;
					if (n && n(v, b, r, l), s) for (c = m(b, f), s(c, [], r, l), h = c.length; h--;)(u = c[h]) && (b[f[h]] = !(v[f[h]] = u));
					if (i) {
						if (o || t) {
							if (o) {
								for (c = [], h = b.length; h--;)(u = b[h]) && c.push(v[h] = u);
								o(null, b = [], c, l)
							}
							for (h = b.length; h--;)(u = b[h]) && (c = o ? ee.call(i, u) : d[h]) > -1 && (i[c] = !(a[c] = u))
						}
					} else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
				})
			}
			function b(t) {
				for (var e, n, i, s = t.length, o = D.relative[t[0].type], a = o || D.relative[" "], r = o ? 1 : 0, l = p(function(t) {
					return t === e
				}, a, !0), c = p(function(t) {
					return ee.call(e, t) > -1
				}, a, !0), h = [function(t, n, i) {
					return !o && (i || n !== M) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
				}]; s > r; r++) if (n = D.relative[t[r].type]) h = [p(g(h), n)];
				else {
					if (n = D.filter[t[r].type].apply(null, t[r].matches), n[z]) {
						for (i = ++r; s > i && !D.relative[t[i].type]; i++);
						return v(r > 1 && g(h), r > 1 && f(t.slice(0, r - 1).concat({
							value: " " === t[r - 2].type ? "*" : ""
						})).replace(le, "$1"), n, i > r && b(t.slice(r, i)), s > i && b(t = t.slice(i)), s > i && f(t))
					}
					h.push(n)
				}
				return g(h)
			}
			function y(t, n) {
				var s = n.length > 0,
					o = t.length > 0,
					a = function(i, a, r, l, c) {
						var h, u, d, f = 0,
							p = "0",
							g = i && [],
							v = [],
							b = M,
							y = i || o && D.find.TAG("*", c),
							w = j += null == b ? 1 : Math.random() || .1,
							x = y.length;
						for (c && (M = a !== A && a); p !== x && null != (h = y[p]); p++) {
							if (o && h) {
								for (u = 0; d = t[u++];) if (d(h, a, r)) {
									l.push(h);
									break
								}
								c && (j = w)
							}
							s && ((h = !d && h) && f--, i && g.push(h))
						}
						if (f += p, s && p !== f) {
							for (u = 0; d = n[u++];) d(g, v, a, r);
							if (i) {
								if (f > 0) for (; p--;) g[p] || v[p] || (v[p] = K.call(l));
								v = m(v)
							}
							Q.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
						}
						return c && (j = w, M = b), g
					};
				return s ? i(a) : a
			}
			function w(t, n, i) {
				for (var s = 0, o = n.length; o > s; s++) e(t, n[s], i);
				return i
			}
			function x(t, e, n, i) {
				var s, o, a, r, l, c = d(t);
				if (!i && 1 === c.length) {
					if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && S.getById && 9 === e.nodeType && L && D.relative[o[1].type]) {
						if (e = (D.find.ID(a.matches[0].replace(xe, Ce), e) || [])[0], !e) return n;
						t = t.slice(o.shift().value.length)
					}
					for (s = pe.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !D.relative[r = a.type]);) if ((l = D.find[r]) && (i = l(a.matches[0].replace(xe, Ce), ye.test(o[0].type) && h(e.parentNode) || e))) {
						if (o.splice(s, 1), t = i.length && f(o), !t) return Q.apply(n, i), n;
						break
					}
				}
				return T(t, c)(i, e, !L, n, ye.test(t) && h(e.parentNode) || e), n
			}
			var C, S, D, k, _, T, M, E, F, N, A, I, L, P, O, H, R, z = "sizzle" + -new Date,
				$ = t.document,
				j = 0,
				W = 0,
				B = n(),
				U = n(),
				q = n(),
				Y = function(t, e) {
					return t === e && (F = !0), 0
				},
				V = "undefined",
				X = 1 << 31,
				G = {}.hasOwnProperty,
				J = [],
				K = J.pop,
				Z = J.push,
				Q = J.push,
				te = J.slice,
				ee = J.indexOf ||
			function(t) {
				for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
				return -1
			}, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = se.replace("w", "w#"), ae = "\\[" + ie + "*(" + se + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ie + "*\\]", re = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ce = new RegExp("^" + ie + "*," + ie + "*"), he = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), de = new RegExp(re), fe = new RegExp("^" + oe + "$"), pe = {
				ID: new RegExp("^#(" + se + ")"),
				CLASS: new RegExp("^\\.(" + se + ")"),
				TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + ae),
				PSEUDO: new RegExp("^" + re),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ne + ")$", "i"),
				needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
			}, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ce = function(t, e, n) {
				var i = "0x" + e - 65536;
				return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			};
			try {
				Q.apply(J = te.call($.childNodes), $.childNodes), J[$.childNodes.length].nodeType
			} catch (Se) {
				Q = {
					apply: J.length ?
					function(t, e) {
						Z.apply(t, te.call(e))
					} : function(t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}
			S = e.support = {}, _ = e.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return e ? "HTML" !== e.nodeName : !1
			}, N = e.setDocument = function(t) {
				var e, n = t ? t.ownerDocument || t : $,
					i = n.defaultView;
				return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, I = n.documentElement, L = !_(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
					N()
				}, !1) : i.attachEvent && i.attachEvent("onunload", function() {
					N()
				})), S.attributes = s(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), S.getElementsByTagName = s(function(t) {
					return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
				}), S.getElementsByClassName = ve.test(n.getElementsByClassName) && s(function(t) {
					return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
				}), S.getById = s(function(t) {
					return I.appendChild(t).id = z, !n.getElementsByName || !n.getElementsByName(z).length
				}), S.getById ? (D.find.ID = function(t, e) {
					if (typeof e.getElementById !== V && L) {
						var n = e.getElementById(t);
						return n && n.parentNode ? [n] : []
					}
				}, D.filter.ID = function(t) {
					var e = t.replace(xe, Ce);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete D.find.ID, D.filter.ID = function(t) {
					var e = t.replace(xe, Ce);
					return function(t) {
						var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), D.find.TAG = S.getElementsByTagName ?
				function(t, e) {
					return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
				} : function(t, e) {
					var n, i = [],
						s = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = o[s++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, D.find.CLASS = S.getElementsByClassName &&
				function(t, e) {
					return typeof e.getElementsByClassName !== V && L ? e.getElementsByClassName(t) : void 0
				}, O = [], P = [], (S.qsa = ve.test(n.querySelectorAll)) && (s(function(t) {
					t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || P.push(":checked")
				}), s(function(t) {
					var e = n.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
				})), (S.matchesSelector = ve.test(H = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && s(function(t) {
					S.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), O.push("!=", re)
				}), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), e = ve.test(I.compareDocumentPosition), R = e || ve.test(I.contains) ?
				function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function(t, e) {
					if (e) for (; e = e.parentNode;) if (e === t) return !0;
					return !1
				}, Y = e ?
				function(t, e) {
					if (t === e) return F = !0, 0;
					var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !S.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === $ && R($, t) ? -1 : e === n || e.ownerDocument === $ && R($, e) ? 1 : E ? ee.call(E, t) - ee.call(E, e) : 0 : 4 & i ? -1 : 1)
				} : function(t, e) {
					if (t === e) return F = !0, 0;
					var i, s = 0,
						o = t.parentNode,
						r = e.parentNode,
						l = [t],
						c = [e];
					if (!o || !r) return t === n ? -1 : e === n ? 1 : o ? -1 : r ? 1 : E ? ee.call(E, t) - ee.call(E, e) : 0;
					if (o === r) return a(t, e);
					for (i = t; i = i.parentNode;) l.unshift(i);
					for (i = e; i = i.parentNode;) c.unshift(i);
					for (; l[s] === c[s];) s++;
					return s ? a(l[s], c[s]) : l[s] === $ ? -1 : c[s] === $ ? 1 : 0
				}, n) : A
			}, e.matches = function(t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function(t, n) {
				if ((t.ownerDocument || t) !== A && N(t), n = n.replace(ue, "='$1']"), !(!S.matchesSelector || !L || O && O.test(n) || P && P.test(n))) try {
					var i = H.call(t, n);
					if (i || S.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (s) {}
				return e(n, A, null, [t]).length > 0
			}, e.contains = function(t, e) {
				return (t.ownerDocument || t) !== A && N(t), R(t, e)
			}, e.attr = function(t, e) {
				(t.ownerDocument || t) !== A && N(t);
				var n = D.attrHandle[e.toLowerCase()],
					i = n && G.call(D.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
				return void 0 !== i ? i : S.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, e.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function(t) {
				var e, n = [],
					i = 0,
					s = 0;
				if (F = !S.detectDuplicates, E = !S.sortStable && t.slice(0), t.sort(Y), F) {
					for (; e = t[s++];) e === t[s] && (i = n.push(s));
					for (; i--;) t.splice(n[i], 1)
				}
				return E = null, t
			}, k = e.getText = function(t) {
				var e, n = "",
					i = 0,
					s = t.nodeType;
				if (s) {
					if (1 === s || 9 === s || 11 === s) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
					} else if (3 === s || 4 === s) return t.nodeValue
				} else for (; e = t[i++];) n += k(e);
				return n
			}, D = e.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: pe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(t) {
						return t[1] = t[1].replace(xe, Ce), t[3] = (t[4] || t[5] || "").replace(xe, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[5] && t[2];
						return pe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && de.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(xe, Ce).toLowerCase();
						return "*" === t ?
						function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = B[t + " "];
						return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && B(t, function(t) {
							return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, n, i) {
						return function(s) {
							var o = e.attr(s, t);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(t, e, n, i, s) {
						var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							r = "of-type" === e;
						return 1 === i && 0 === s ?
						function(t) {
							return !!t.parentNode
						} : function(e, n, l) {
							var c, h, u, d, f, p, g = o !== a ? "nextSibling" : "previousSibling",
								m = e.parentNode,
								v = r && e.nodeName.toLowerCase(),
								b = !l && !r;
							if (m) {
								if (o) {
									for (; g;) {
										for (u = e; u = u[g];) if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
										p = g = "only" === t && !p && "nextSibling"
									}
									return !0
								}
								if (p = [a ? m.firstChild : m.lastChild], a && b) {
									for (h = m[z] || (m[z] = {}), c = h[t] || [], f = c[0] === j && c[1], d = c[0] === j && c[2], u = f && m.childNodes[f]; u = ++f && u && u[g] || (d = f = 0) || p.pop();) if (1 === u.nodeType && ++d && u === e) {
										h[t] = [j, f, d];
										break
									}
								} else if (b && (c = (e[z] || (e[z] = {}))[t]) && c[0] === j) d = c[1];
								else for (;
								(u = ++f && u && u[g] || (d = f = 0) || p.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (b && ((u[z] || (u[z] = {}))[t] = [j, d]), u !== e)););
								return d -= s, d === i || d % i === 0 && d / i >= 0
							}
						}
					},
					PSEUDO: function(t, n) {
						var s, o = D.pseudos[t] || D.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return o[z] ? o(n) : o.length > 1 ? (s = [t, t, "", n], D.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
							for (var i, s = o(t, n), a = s.length; a--;) i = ee.call(t, s[a]), t[i] = !(e[i] = s[a])
						}) : function(t) {
							return o(t, 0, s)
						}) : o
					}
				},
				pseudos: {
					not: i(function(t) {
						var e = [],
							n = [],
							s = T(t.replace(le, "$1"));
						return s[z] ? i(function(t, e, n, i) {
							for (var o, a = s(t, null, i, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
						}) : function(t, i, o) {
							return e[0] = t, s(e, null, o, n), !n.pop()
						}
					}),
					has: i(function(t) {
						return function(n) {
							return e(t, n).length > 0
						}
					}),
					contains: i(function(t) {
						return function(e) {
							return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
						}
					}),
					lang: i(function(t) {
						return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, Ce).toLowerCase(), function(e) {
							var n;
							do
							if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
							while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
					}),
					target: function(e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					},
					root: function(t) {
						return t === I
					},
					focus: function(t) {
						return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return t.disabled === !1
					},
					disabled: function(t) {
						return t.disabled === !0
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !! t.checked || "option" === e && !! t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !D.pseudos.empty(t)
					},
					header: function(t) {
						return me.test(t.nodeName)
					},
					input: function(t) {
						return ge.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: c(function() {
						return [0]
					}),
					last: c(function(t, e) {
						return [e - 1]
					}),
					eq: c(function(t, e, n) {
						return [0 > n ? n + e : n]
					}),
					even: c(function(t, e) {
						for (var n = 0; e > n; n += 2) t.push(n);
						return t
					}),
					odd: c(function(t, e) {
						for (var n = 1; e > n; n += 2) t.push(n);
						return t
					}),
					lt: c(function(t, e, n) {
						for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
						return t
					}),
					gt: c(function(t, e, n) {
						for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}, D.pseudos.nth = D.pseudos.eq;
			for (C in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) D.pseudos[C] = r(C);
			for (C in {
				submit: !0,
				reset: !0
			}) D.pseudos[C] = l(C);
			return u.prototype = D.filters = D.pseudos, D.setFilters = new u, T = e.compile = function(t, e) {
				var n, i = [],
					s = [],
					o = q[t + " "];
				if (!o) {
					for (e || (e = d(t)), n = e.length; n--;) o = b(e[n]), o[z] ? i.push(o) : s.push(o);
					o = q(t, y(s, i))
				}
				return o
			}, S.sortStable = z.split("").sort(Y).join("") === z, S.detectDuplicates = !! F, N(), S.sortDetached = s(function(t) {
				return 1 & t.compareDocumentPosition(A.createElement("div"))
			}), s(function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), S.attributes && s(function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || o("value", function(t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), s(function(t) {
				return null == t.getAttribute("disabled")
			}) || o(ne, function(t, e, n) {
				var i;
				return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}), e
		}(t);
	oe.find = he, oe.expr = he.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = he.uniqueSort, oe.text = he.getText, oe.isXMLDoc = he.isXML, oe.contains = he.contains;
	var ue = oe.expr.match.needsContext,
		de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		fe = /^.[^:#\[\.,]*$/;
	oe.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, oe.fn.extend({
		find: function(t) {
			var e, n = [],
				i = this,
				s = i.length;
			if ("string" != typeof t) return this.pushStack(oe(t).filter(function() {
				for (e = 0; s > e; e++) if (oe.contains(i[e], this)) return !0
			}));
			for (e = 0; s > e; e++) oe.find(t, i[e], n);
			return n = this.pushStack(s > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		},
		filter: function(t) {
			return this.pushStack(i(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(i(this, t || [], !0))
		},
		is: function(t) {
			return !!i(this, "string" == typeof t && ue.test(t) ? oe(t) : t || [], !1).length
		}
	});
	var pe, ge = t.document,
		me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ve = oe.fn.init = function(t, e) {
			var n, i;
			if (!t) return this;
			if ("string" == typeof t) {
				if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
				if (n[1]) {
					if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ge, !0)), de.test(n[1]) && oe.isPlainObject(e)) for (n in e) oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
					return this
				}
				if (i = ge.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return pe.find(t);
					this.length = 1, this[0] = i
				}
				return this.context = ge, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
		};
	ve.prototype = oe.fn, pe = oe(ge);
	var be = /^(?:parents|prev(?:Until|All))/,
		ye = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	oe.extend({
		dir: function(t, e, n) {
			for (var i = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === n || 1 !== s.nodeType || !oe(s).is(n));) 1 === s.nodeType && i.push(s), s = s[e];
			return i
		},
		sibling: function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), oe.fn.extend({
		has: function(t) {
			var e, n = oe(t, this),
				i = n.length;
			return this.filter(function() {
				for (e = 0; i > e; e++) if (oe.contains(this, n[e])) return !0
			})
		},
		closest: function(t, e) {
			for (var n, i = 0, s = this.length, o = [], a = ue.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; s > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? oe.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), oe.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return oe.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return oe.dir(t, "parentNode", n)
		},
		next: function(t) {
			return s(t, "nextSibling")
		},
		prev: function(t) {
			return s(t, "previousSibling")
		},
		nextAll: function(t) {
			return oe.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return oe.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return oe.dir(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return oe.dir(t, "previousSibling", n)
		},
		siblings: function(t) {
			return oe.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return oe.sibling(t.firstChild)
		},
		contents: function(t) {
			return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
		}
	}, function(t, e) {
		oe.fn[t] = function(n, i) {
			var s = oe.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = oe.filter(i, s)), this.length > 1 && (ye[t] || (s = oe.unique(s)), be.test(t) && (s = s.reverse())), this.pushStack(s)
		}
	});
	var we = /\S+/g,
		xe = {};
	oe.Callbacks = function(t) {
		t = "string" == typeof t ? xe[t] || o(t) : oe.extend({}, t);
		var e, n, i, s, a, r, l = [],
			c = !t.once && [],
			h = function(o) {
				for (n = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++) if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
					n = !1;
					break
				}
				e = !1, l && (c ? c.length && h(c.shift()) : n ? l = [] : u.disable())
			},
			u = {
				add: function() {
					if (l) {
						var i = l.length;
						!
						function o(e) {
							oe.each(e, function(e, n) {
								var i = oe.type(n);
								"function" === i ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), e ? s = l.length : n && (r = i, h(n))
					}
					return this
				},
				remove: function() {
					return l && oe.each(arguments, function(t, n) {
						for (var i;
						(i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (s >= i && s--, a >= i && a--)
					}), this
				},
				has: function(t) {
					return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], s = 0, this
				},
				disable: function() {
					return l = c = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return c = void 0, n || u.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(t, n) {
					return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : h(n)), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return u
	}, oe.extend({
		Deferred: function(t) {
			var e = [
				["resolve", "done", oe.Callbacks("once memory"), "resolved"],
				["reject", "fail", oe.Callbacks("once memory"), "rejected"],
				["notify", "progress", oe.Callbacks("memory")]
			],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return oe.Deferred(function(n) {
							oe.each(e, function(e, o) {
								var a = oe.isFunction(t[e]) && t[e];
								s[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? oe.extend(t, i) : i
					}
				},
				s = {};
			return i.pipe = i.then, oe.each(e, function(t, o) {
				var a = o[2],
					r = o[3];
				i[o[1]] = a.add, r && a.add(function() {
					n = r
				}, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
					return s[o[0] + "With"](this === s ? i : this, arguments), this
				}, s[o[0] + "With"] = a.fireWith
			}), i.promise(s), t && t.call(s, s), s
		},
		when: function(t) {
			var e, n, i, s = 0,
				o = G.call(arguments),
				a = o.length,
				r = 1 !== a || t && oe.isFunction(t.promise) ? a : 0,
				l = 1 === r ? t : oe.Deferred(),
				c = function(t, n, i) {
					return function(s) {
						n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : s, i === e ? l.notifyWith(n, i) : --r || l.resolveWith(n, i)
					}
				};
			if (a > 1) for (e = new Array(a), n = new Array(a), i = new Array(a); a > s; s++) o[s] && oe.isFunction(o[s].promise) ? o[s].promise().done(c(s, i, o)).fail(l.reject).progress(c(s, n, e)) : --r;
			return r || l.resolveWith(i, o), l.promise()
		}
	});
	var Ce;
	oe.fn.ready = function(t) {
		return oe.ready.promise().done(t), this
	}, oe.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? oe.readyWait++ : oe.ready(!0)
		},
		ready: function(t) {
			if (t === !0 ? !--oe.readyWait : !oe.isReady) {
				if (!ge.body) return setTimeout(oe.ready);
				oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (Ce.resolveWith(ge, [oe]), oe.fn.trigger && oe(ge).trigger("ready").off("ready"))
			}
		}
	}), oe.ready.promise = function(e) {
		if (!Ce) if (Ce = oe.Deferred(), "complete" === ge.readyState) setTimeout(oe.ready);
		else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
		else {
			ge.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
			var n = !1;
			try {
				n = null == t.frameElement && ge.documentElement
			} catch (i) {}
			n && n.doScroll && !
			function s() {
				if (!oe.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return setTimeout(s, 50)
					}
					a(), oe.ready()
				}
			}()
		}
		return Ce.promise(e)
	};
	var Se, De = "undefined";
	for (Se in oe(ie)) break;
	ie.ownLast = "0" !== Se, ie.inlineBlockNeedsLayout = !1, oe(function() {
		var t, e, n = ge.getElementsByTagName("body")[0];
		n && (t = ge.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = ge.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== De && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
	}), function() {
		var t = ge.createElement("div");
		if (null == ie.deleteExpando) {
			ie.deleteExpando = !0;
			try {
				delete t.test
			} catch (e) {
				ie.deleteExpando = !1
			}
		}
		t = null
	}(), oe.acceptData = function(t) {
		var e = oe.noData[(t.nodeName + " ").toLowerCase()],
			n = +t.nodeType || 1;
		return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
	};
	var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		_e = /([A-Z])/g;
	oe.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(t) {
			return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !! t && !c(t)
		},
		data: function(t, e, n) {
			return h(t, e, n)
		},
		removeData: function(t, e) {
			return u(t, e)
		},
		_data: function(t, e, n) {
			return h(t, e, n, !0)
		},
		_removeData: function(t, e) {
			return u(t, e, !0)
		}
	}), oe.fn.extend({
		data: function(t, e) {
			var n, i, s, o = this[0],
				a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (s = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
					for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, s[i]));
					oe._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof t ? this.each(function() {
				oe.data(this, t)
			}) : arguments.length > 1 ? this.each(function() {
				oe.data(this, t, e)
			}) : o ? l(o, t, oe.data(o, t)) : void 0
		},
		removeData: function(t) {
			return this.each(function() {
				oe.removeData(this, t)
			})
		}
	}), oe.extend({
		queue: function(t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = oe._data(t, e), n && (!i || oe.isArray(n) ? i = oe._data(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = oe.queue(t, e),
				i = n.length,
				s = n.shift(),
				o = oe._queueHooks(t, e),
				a = function() {
					oe.dequeue(t, e)
				};
			"inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return oe._data(t, n) || oe._data(t, n, {
				empty: oe.Callbacks("once memory").add(function() {
					oe._removeData(t, e + "queue"), oe._removeData(t, n)
				})
			})
		}
	}), oe.fn.extend({
		queue: function(t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var n = oe.queue(this, t, e);
				oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				oe.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, i = 1,
				s = oe.Deferred(),
				o = this,
				a = this.length,
				r = function() {
					--i || s.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = oe._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(r));
			return r(), s.promise(e)
		}
	});
	var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Me = ["Top", "Right", "Bottom", "Left"],
		Ee = function(t, e) {
			return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
		},
		Fe = oe.access = function(t, e, n, i, s, o, a) {
			var r = 0,
				l = t.length,
				c = null == n;
			if ("object" === oe.type(n)) {
				s = !0;
				for (r in n) oe.access(t, e, r, n[r], !0, o, a)
			} else if (void 0 !== i && (s = !0, oe.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
				return c.call(oe(t), n)
			})), e)) for (; l > r; r++) e(t[r], n, a ? i : i.call(t[r], r, e(t[r], n)));
			return s ? t : c ? e.call(t) : l ? e(t[0], n) : o
		},
		Ne = /^(?:checkbox|radio)$/i;
	!
	function() {
		var t = ge.createDocumentFragment(),
			e = ge.createElement("div"),
			n = ge.createElement("input");
		if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !! e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
			ie.noCloneEvent = !1
		}), e.cloneNode(!0).click()), null == ie.deleteExpando) {
			ie.deleteExpando = !0;
			try {
				delete e.test
			} catch (i) {
				ie.deleteExpando = !1
			}
		}
		t = e = n = null
	}(), function() {
		var e, n, i = ge.createElement("div");
		for (e in {
			submit: !0,
			change: !0,
			focusin: !0
		}) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Ae = /^(?:input|select|textarea)$/i,
		Ie = /^key/,
		Le = /^(?:mouse|contextmenu)|click/,
		Pe = /^(?:focusinfocus|focusoutblur)$/,
		Oe = /^([^.]*)(?:\.(.+)|)$/;
	oe.event = {
		global: {},
		add: function(t, e, n, i, s) {
			var o, a, r, l, c, h, u, d, f, p, g, m = oe._data(t);
			if (m) {
				for (n.handler && (l = n, n = l.handler, s = l.selector), n.guid || (n.guid = oe.guid++), (a = m.events) || (a = m.events = {}), (h = m.handle) || (h = m.handle = function(t) {
					return typeof oe === De || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(h.elem, arguments)
				}, h.elem = t), e = (e || "").match(we) || [""], r = e.length; r--;) o = Oe.exec(e[r]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f && (c = oe.event.special[f] || {}, f = (s ? c.delegateType : c.bindType) || f, c = oe.event.special[f] || {}, u = oe.extend({
					type: f,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: s,
					needsContext: s && oe.expr.match.needsContext.test(s),
					namespace: p.join(".")
				}, l), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, c.setup && c.setup.call(t, i, p, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), oe.event.global[f] = !0);
				t = null
			}
		},
		remove: function(t, e, n, i, s) {
			var o, a, r, l, c, h, u, d, f, p, g, m = oe.hasData(t) && oe._data(t);
			if (m && (h = m.events)) {
				for (e = (e || "").match(we) || [""], c = e.length; c--;) if (r = Oe.exec(e[c]) || [], f = g = r[1], p = (r[2] || "").split(".").sort(), f) {
					for (u = oe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, d = h[f] || [], r = r[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !s && g !== a.origType || n && n.guid !== a.guid || r && !r.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(t, a));
					l && !d.length && (u.teardown && u.teardown.call(t, p, m.handle) !== !1 || oe.removeEvent(t, f, m.handle), delete h[f])
				} else for (f in h) oe.event.remove(t, f + e[c], n, i, !0);
				oe.isEmptyObject(h) && (delete m.handle, oe._removeData(t, "events"))
			}
		},
		trigger: function(e, n, i, s) {
			var o, a, r, l, c, h, u, d = [i || ge],
				f = ee.call(e, "type") ? e.type : e,
				p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
			if (r = h = i = i || ge, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[oe.expando] ? e : new oe.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), c = oe.event.special[f] || {}, s || !c.trigger || c.trigger.apply(i, n) !== !1)) {
				if (!s && !c.noBubble && !oe.isWindow(i)) {
					for (l = c.delegateType || f, Pe.test(l + f) || (r = r.parentNode); r; r = r.parentNode) d.push(r), h = r;
					h === (i.ownerDocument || ge) && d.push(h.defaultView || h.parentWindow || t)
				}
				for (u = 0;
				(r = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || f, o = (oe._data(r, "events") || {})[e.type] && oe._data(r, "handle"), o && o.apply(r, n), o = a && r[a], o && o.apply && oe.acceptData(r) && (e.result = o.apply(r, n), e.result === !1 && e.preventDefault());
				if (e.type = f, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), n) === !1) && oe.acceptData(i) && a && i[f] && !oe.isWindow(i)) {
					h = i[a], h && (i[a] = null), oe.event.triggered = f;
					try {
						i[f]()
					} catch (g) {}
					oe.event.triggered = void 0, h && (i[a] = h)
				}
				return e.result
			}
		},
		dispatch: function(t) {
			t = oe.event.fix(t);
			var e, n, i, s, o, a = [],
				r = G.call(arguments),
				l = (oe._data(this, "events") || {})[t.type] || [],
				c = oe.event.special[t.type] || {};
			if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
				for (a = oe.event.handlers.call(this, t, l), e = 0;
				(s = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, o = 0;
				(i = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, r), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var n, i, s, o, a = [],
				r = e.delegateCount,
				l = t.target;
			if (r && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
				for (s = [], o = 0; r > o; o++) i = e[o], n = i.selector + " ", void 0 === s[n] && (s[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), s[n] && s.push(i);
				s.length && a.push({
					elem: l,
					handlers: s
				})
			}
			return r < e.length && a.push({
				elem: this,
				handlers: e.slice(r)
			}), a
		},
		fix: function(t) {
			if (t[oe.expando]) return t;
			var e, n, i, s = t.type,
				o = t,
				a = this.fixHooks[s];
			for (a || (this.fixHooks[s] = a = Le.test(s) ? this.mouseHooks : Ie.test(s) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new oe.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
			return t.target || (t.target = o.srcElement || ge), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, a.filter ? a.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var n, i, s, o = e.button,
					a = e.fromElement;
				return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ge, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== p() && this.focus) try {
						return this.focus(), !1
					} catch (t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === p() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return oe.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, n, i) {
			var s = oe.extend(new oe.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? oe.event.trigger(s, null, e) : oe.event.dispatch.call(e, s), s.isDefaultPrevented() && n.preventDefault()
		}
	}, oe.removeEvent = ge.removeEventListener ?
	function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	} : function(t, e, n) {
		var i = "on" + e;
		t.detachEvent && (typeof t[i] === De && (t[i] = null), t.detachEvent(i, n))
	}, oe.Event = function(t, e) {
		return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? d : f) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
	}, oe.Event.prototype = {
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = d, this.stopPropagation()
		}
	}, oe.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(t, e) {
		oe.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var n, i = this,
					s = t.relatedTarget,
					o = t.handleObj;
				return (!s || s !== i && !oe.contains(i, s)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), ie.submitBubbles || (oe.event.special.submit = {
		setup: function() {
			return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(t) {
				var e = t.target,
					n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
				n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(t) {
					t._submit_bubble = !0
				}), oe._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function() {
			return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
		}
	}), ie.changeBubbles || (oe.event.special.change = {
		setup: function() {
			return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), oe.event.add(this, "click._change", function(t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
			})), !1) : void oe.event.add(this, "beforeactivate._change", function(t) {
				var e = t.target;
				Ae.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function(t) {
					!this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
				}), oe._data(e, "changeBubbles", !0))
			})
		},
		handle: function(t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return oe.event.remove(this, "._change"), !Ae.test(this.nodeName)
		}
	}), ie.focusinBubbles || oe.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var n = function(t) {
				oe.event.simulate(e, t.target, oe.event.fix(t), !0)
			};
		oe.event.special[e] = {
			setup: function() {
				var i = this.ownerDocument || this,
					s = oe._data(i, e);
				s || i.addEventListener(t, n, !0), oe._data(i, e, (s || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					s = oe._data(i, e) - 1;
				s ? oe._data(i, e, s) : (i.removeEventListener(t, n, !0), oe._removeData(i, e))
			}
		}
	}), oe.fn.extend({
		on: function(t, e, n, i, s) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (n = n || e, e = void 0);
				for (o in t) this.on(o, e, n, t[o], s);
				return this
			}
			if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
			else if (!i) return this;
			return 1 === s && (a = i, i = function(t) {
				return oe().off(t), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function() {
				oe.event.add(this, t, i, n, e)
			})
		},
		one: function(t, e, n, i) {
			return this.on(t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, s;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (s in t) this.off(s, e, t[s]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
				oe.event.remove(this, t, n, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				oe.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			return n ? oe.event.trigger(t, e, n, !0) : void 0
		}
	});
	var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Re = / jQuery\d+="(?:null|\d+)"/g,
		ze = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
		$e = /^\s+/,
		je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		We = /<([\w:]+)/,
		Be = /<tbody/i,
		Ue = /<|&#?\w+;/,
		qe = /<(?:script|style|link)/i,
		Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ve = /^$|\/(?:java|ecma)script/i,
		Xe = /^true\/(.*)/,
		Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Je = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Ke = g(ge),
		Ze = Ke.appendChild(ge.createElement("div"));
	Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, oe.extend({
		clone: function(t, e, n) {
			var i, s, o, a, r, l = oe.contains(t.ownerDocument, t);
			if (ie.html5Clone || oe.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(o = Ze.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t))) for (i = m(o), r = m(t), a = 0; null != (s = r[a]); ++a) i[a] && S(s, i[a]);
			if (e) if (n) for (r = r || m(t), i = i || m(o), a = 0; null != (s = r[a]); a++) C(s, i[a]);
			else C(t, o);
			return i = m(o, "script"), i.length > 0 && x(i, !l && m(t, "script")), i = r = s = null, o
		},
		buildFragment: function(t, e, n, i) {
			for (var s, o, a, r, l, c, h, u = t.length, d = g(e), f = [], p = 0; u > p; p++) if (o = t[p], o || 0 === o) if ("object" === oe.type(o)) oe.merge(f, o.nodeType ? [o] : o);
			else if (Ue.test(o)) {
				for (r = r || d.appendChild(e.createElement("div")), l = (We.exec(o) || ["", ""])[1].toLowerCase(), h = Je[l] || Je._default, r.innerHTML = h[1] + o.replace(je, "<$1></$2>") + h[2], s = h[0]; s--;) r = r.lastChild;
				if (!ie.leadingWhitespace && $e.test(o) && f.push(e.createTextNode($e.exec(o)[0])), !ie.tbody) for (o = "table" !== l || Be.test(o) ? "<table>" !== h[1] || Be.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;) oe.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (oe.merge(f, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
				r = d.lastChild
			} else f.push(e.createTextNode(o));
			for (r && d.removeChild(r), ie.appendChecked || oe.grep(m(f, "input"), v), p = 0; o = f[p++];) if ((!i || -1 === oe.inArray(o, i)) && (a = oe.contains(o.ownerDocument, o), r = m(d.appendChild(o), "script"), a && x(r), n)) for (s = 0; o = r[s++];) Ve.test(o.type || "") && n.push(o);
			return r = null, d
		},
		cleanData: function(t, e) {
			for (var n, i, s, o, a = 0, r = oe.expando, l = oe.cache, c = ie.deleteExpando, h = oe.event.special; null != (n = t[a]); a++) if ((e || oe.acceptData(n)) && (s = n[r], o = s && l[s])) {
				if (o.events) for (i in o.events) h[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
				l[s] && (delete l[s], c ? delete n[r] : typeof n.removeAttribute !== De ? n.removeAttribute(r) : n[r] = null, X.push(s))
			}
		}
	}), oe.fn.extend({
		text: function(t) {
			return Fe(this, function(t) {
				return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(t))
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = b(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = b(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var n, i = t ? oe.filter(t, this) : this, s = 0; null != (n = i[s]); s++) e || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && oe.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && oe.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return oe.clone(this, t, e)
			})
		},
		html: function(t) {
			return Fe(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Re, "") : void 0;
				if (!("string" != typeof t || qe.test(t) || !ie.htmlSerialize && ze.test(t) || !ie.leadingWhitespace && $e.test(t) || Je[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(je, "<$1></$2>");
					try {
						for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(m(e, !1)), e.innerHTML = t);
						e = 0
					} catch (s) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, oe.cleanData(m(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = J.apply([], t);
			var n, i, s, o, a, r, l = 0,
				c = this.length,
				h = this,
				u = c - 1,
				d = t[0],
				f = oe.isFunction(d);
			if (f || c > 1 && "string" == typeof d && !ie.checkClone && Ye.test(d)) return this.each(function(n) {
				var i = h.eq(n);
				f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
			});
			if (c && (r = oe.buildFragment(t, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
				for (o = oe.map(m(r, "script"), y), s = o.length; c > l; l++) i = r, l !== u && (i = oe.clone(i, !0, !0), s && oe.merge(o, m(i, "script"))), e.call(this[l], i, l);
				if (s) for (a = o[o.length - 1].ownerDocument, oe.map(o, w), l = 0; s > l; l++) i = o[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ge, "")));
				r = n = null
			}
			return this
		}
	}), oe.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		oe.fn[t] = function(t) {
			for (var n, i = 0, s = [], o = oe(t), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), oe(o[i])[e](n), K.apply(s, n.get());
			return this.pushStack(s)
		}
	});
	var Qe, tn = {};
	!
	function() {
		var t, e, n = ge.createElement("div"),
			i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
		n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !! t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
			var t, n, s, o;
			if (null == e) {
				if (t = ge.getElementsByTagName("body")[0], !t) return;
				o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = ge.createElement("div"), s = ge.createElement("div"), t.appendChild(n).appendChild(s), e = !1, typeof s.style.zoom !== De && (s.style.cssText = i + ";width:1px;padding:1px;zoom:1", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", e = 3 !== s.offsetWidth), t.removeChild(n), t = n = s = null
			}
			return e
		}
	}();
	var en, nn, sn = /^margin/,
		on = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
		an = /^(top|right|bottom|left)$/;
	t.getComputedStyle ? (en = function(t) {
		return t.ownerDocument.defaultView.getComputedStyle(t, null)
	}, nn = function(t, e, n) {
		var i, s, o, a, r = t.style;
		return n = n || en(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || oe.contains(t.ownerDocument, t) || (a = oe.style(t, e)), on.test(a) && sn.test(e) && (i = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = n.width, r.width = i, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
	}) : ge.documentElement.currentStyle && (en = function(t) {
		return t.currentStyle
	}, nn = function(t, e, n) {
		var i, s, o, a, r = t.style;
		return n = n || en(t), a = n ? n[e] : void 0, null == a && r && r[e] && (a = r[e]), on.test(a) && !an.test(e) && (i = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = i, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
	}), function() {
		function e() {
			var e, n, i = ge.getElementsByTagName("body")[0];
			i && (e = ge.createElement("div"), n = ge.createElement("div"), e.style.cssText = c, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", oe.swap(i, null != i.style.zoom ? {
				zoom: 1
			} : {}, function() {
				s = 4 === n.offsetWidth
			}), o = !0, a = !1, r = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(n, null) || {}).top, o = "4px" === (t.getComputedStyle(n, null) || {
				width: "4px"
			}).width), i.removeChild(e), n = i = null)
		}
		var n, i, s, o, a, r, l = ge.createElement("div"),
			c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
			h = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
		l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !! n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, oe.extend(ie, {
			reliableHiddenOffsets: function() {
				if (null != i) return i;
				var t, e, n, s = ge.createElement("div"),
					o = ge.getElementsByTagName("body")[0];
				if (o) return s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = ge.createElement("div"), t.style.cssText = c, o.appendChild(t).appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = s.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, o.removeChild(t), s = o = null, i
			},
			boxSizing: function() {
				return null == s && e(), s
			},
			boxSizingReliable: function() {
				return null == o && e(), o
			},
			pixelPosition: function() {
				return null == a && e(), a
			},
			reliableMarginRight: function() {
				var e, n, i, s;
				if (null == r && t.getComputedStyle) {
					if (e = ge.getElementsByTagName("body")[0], !e) return;
					n = ge.createElement("div"), i = ge.createElement("div"), n.style.cssText = c, e.appendChild(n).appendChild(i), s = i.appendChild(ge.createElement("div")), s.style.cssText = i.style.cssText = h, s.style.marginRight = s.style.width = "0", i.style.width = "1px", r = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(n)
				}
				return r
			}
		})
	}(), oe.swap = function(t, e, n, i) {
		var s, o, a = {};
		for (o in e) a[o] = t.style[o], t.style[o] = e[o];
		s = n.apply(t, i || []);
		for (o in e) t.style[o] = a[o];
		return s
	};
	var rn = /alpha\([^)]*\)/i,
		ln = /opacity\s*=\s*([^)]*)/,
		cn = /^(none|table(?!-c[ea]).+)/,
		hn = new RegExp("^(" + Te + ")(.*)$", "i"),
		un = new RegExp("^([+-])=(" + Te + ")", "i"),
		dn = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		fn = {
			letterSpacing: 0,
			fontWeight: 400
		},
		pn = ["Webkit", "O", "Moz", "ms"];
	oe.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = nn(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ie.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var s, o, a, r = oe.camelCase(e),
					l = t.style;
				if (e = oe.cssProps[r] || (oe.cssProps[r] = T(l, r)), a = oe.cssHooks[e] || oe.cssHooks[r], void 0 === n) return a && "get" in a && void 0 !== (s = a.get(t, !1, i)) ? s : l[e];
				if (o = typeof n, "string" === o && (s = un.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(oe.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || oe.cssNumber[r] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
					l[e] = "", l[e] = n
				} catch (c) {}
			}
		},
		css: function(t, e, n, i) {
			var s, o, a, r = oe.camelCase(e);
			return e = oe.cssProps[r] || (oe.cssProps[r] = T(t.style, r)), a = oe.cssHooks[e] || oe.cssHooks[r], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = nn(t, e, i)), "normal" === o && e in fn && (o = fn[e]), "" === n || n ? (s = parseFloat(o), n === !0 || oe.isNumeric(s) ? s || 0 : o) : o
		}
	}), oe.each(["height", "width"], function(t, e) {
		oe.cssHooks[e] = {
			get: function(t, n, i) {
				return n ? 0 === t.offsetWidth && cn.test(oe.css(t, "display")) ? oe.swap(t, dn, function() {
					return N(t, e, i)
				}) : N(t, e, i) : void 0
			},
			set: function(t, n, i) {
				var s = i && en(t);
				return E(t, n, i ? F(t, e, i, ie.boxSizing() && "border-box" === oe.css(t, "boxSizing", !1, s), s) : 0)
			}
		}
	}), ie.opacity || (oe.cssHooks.opacity = {
		get: function(t, e) {
			return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function(t, e) {
			var n = t.style,
				i = t.currentStyle,
				s = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(o.replace(rn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = rn.test(o) ? o.replace(rn, s) : o + " " + s)
		}
	}), oe.cssHooks.marginRight = _(ie.reliableMarginRight, function(t, e) {
		return e ? oe.swap(t, {
			display: "inline-block"
		}, nn, [t, "marginRight"]) : void 0
	}), oe.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		oe.cssHooks[t + e] = {
			expand: function(n) {
				for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[t + Me[i] + e] = o[i] || o[i - 2] || o[0];
				return s
			}
		}, sn.test(t) || (oe.cssHooks[t + e].set = E)
	}), oe.fn.extend({
		css: function(t, e) {
			return Fe(this, function(t, e, n) {
				var i, s, o = {},
					a = 0;
				if (oe.isArray(e)) {
					for (i = en(t), s = e.length; s > a; a++) o[e[a]] = oe.css(t, e[a], !1, i);
					return o
				}
				return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return M(this, !0)
		},
		hide: function() {
			return M(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				Ee(this) ? oe(this).show() : oe(this).hide()
			})
		}
	}), oe.Tween = A, A.prototype = {
		constructor: A,
		init: function(t, e, n, i, s, o) {
			this.elem = t, this.prop = n, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = A.propHooks[this.prop];
			return t && t.get ? t.get(this) : A.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = A.propHooks[this.prop];
			return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
		}
	}, A.prototype.init.prototype = A.prototype, A.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, oe.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, oe.fx = A.prototype.init, oe.fx.step = {};
	var gn, mn, vn = /^(?:toggle|show|hide)$/,
		bn = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
		yn = /queueHooks$/,
		wn = [O],
		xn = {
			"*": [function(t, e) {
				var n = this.createTween(t, e),
					i = n.cur(),
					s = bn.exec(e),
					o = s && s[3] || (oe.cssNumber[t] ? "" : "px"),
					a = (oe.cssNumber[t] || "px" !== o && +i) && bn.exec(oe.css(n.elem, t)),
					r = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], s = s || [], a = +i || 1;
					do r = r || ".5", a /= r, oe.style(n.elem, t, a + o);
					while (r !== (r = n.cur() / i) && 1 !== r && --l)
				}
				return s && (a = n.start = +a || +i || 0, n.unit = o, n.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), n
			}]
		};
	oe.Animation = oe.extend(R, {
		tweener: function(t, e) {
			oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var n, i = 0, s = t.length; s > i; i++) n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
		},
		prefilter: function(t, e) {
			e ? wn.unshift(t) : wn.push(t)
		}
	}), oe.speed = function(t, e, n) {
		var i = t && "object" == typeof t ? oe.extend({}, t) : {
			complete: n || !n && e || oe.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !oe.isFunction(e) && e
		};
		return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
		}, i
	}, oe.fn.extend({
		fadeTo: function(t, e, n, i) {
			return this.filter(Ee).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function(t, e, n, i) {
			var s = oe.isEmptyObject(t),
				o = oe.speed(e, n, i),
				a = function() {
					var e = R(this, oe.extend({}, t), o);
					(s || oe._data(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(t, e, n) {
			var i = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
			return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
				var e = !0,
					s = null != t && t + "queueHooks",
					o = oe.timers,
					a = oe._data(this);
				if (s) a[s] && a[s].stop && i(a[s]);
				else for (s in a) a[s] && a[s].stop && yn.test(s) && i(a[s]);
				for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(n), e = !1, o.splice(s, 1));
				(e || !n) && oe.dequeue(this, t)
			})
		},
		finish: function(t) {
			return t !== !1 && (t = t || "fx"), this.each(function() {
				var e, n = oe._data(this),
					i = n[t + "queue"],
					s = n[t + "queueHooks"],
					o = oe.timers,
					a = i ? i.length : 0;
				for (n.finish = !0, oe.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
				delete n.finish
			})
		}
	}), oe.each(["toggle", "show", "hide"], function(t, e) {
		var n = oe.fn[e];
		oe.fn[e] = function(t, i, s) {
			return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, s)
		}
	}), oe.each({
		slideDown: L("show"),
		slideUp: L("hide"),
		slideToggle: L("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, e) {
		oe.fn[t] = function(t, n, i) {
			return this.animate(e, t, n, i)
		}
	}), oe.timers = [], oe.fx.tick = function() {
		var t, e = oe.timers,
			n = 0;
		for (gn = oe.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
		e.length || oe.fx.stop(), gn = void 0
	}, oe.fx.timer = function(t) {
		oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
	}, oe.fx.interval = 13, oe.fx.start = function() {
		mn || (mn = setInterval(oe.fx.tick, oe.fx.interval))
	}, oe.fx.stop = function() {
		clearInterval(mn), mn = null
	}, oe.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, oe.fn.delay = function(t, e) {
		return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
			var i = setTimeout(e, t);
			n.stop = function() {
				clearTimeout(i)
			}
		})
	}, function() {
		var t, e, n, i, s = ge.createElement("div");
		s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = s.getElementsByTagName("a")[0], n = ge.createElement("select"), i = n.appendChild(ge.createElement("option")), e = s.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== s.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !! e.value, ie.optSelected = i.selected, ie.enctype = !! ge.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = ge.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = s = null
	}();
	var Cn = /\r/g;
	oe.fn.extend({
		val: function(t) {
			var e, n, i, s = this[0]; {
				if (arguments.length) return i = oe.isFunction(t), this.each(function(n) {
					var s;
					1 === this.nodeType && (s = i ? t.call(this, n, oe(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : oe.isArray(s) && (s = oe.map(s, function(t) {
						return null == t ? "" : t + ""
					})), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
				});
				if (s) return e = oe.valHooks[s.type] || oe.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(Cn, "") : null == n ? "" : n)
			}
		}
	}), oe.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = oe.find.attr(t, "value");
					return null != e ? e : oe.text(t)
				}
			},
			select: {
				get: function(t) {
					for (var e, n, i = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : i.length, l = 0 > s ? r : o ? s : 0; r > l; l++) if (n = i[l], !(!n.selected && l !== s || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
						if (e = oe(n).val(), o) return e;
						a.push(e)
					}
					return a
				},
				set: function(t, e) {
					for (var n, i, s = t.options, o = oe.makeArray(e), a = s.length; a--;) if (i = s[a], oe.inArray(oe.valHooks.option.get(i), o) >= 0) try {
						i.selected = n = !0
					} catch (r) {
						i.scrollHeight
					} else i.selected = !1;
					return n || (t.selectedIndex = -1), s
				}
			}
		}
	}), oe.each(["radio", "checkbox"], function() {
		oe.valHooks[this] = {
			set: function(t, e) {
				return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
			}
		}, ie.checkOn || (oe.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var Sn, Dn, kn = oe.expr.attrHandle,
		_n = /^(?:checked|selected)$/i,
		Tn = ie.getSetAttribute,
		Mn = ie.input;
	oe.fn.extend({
		attr: function(t, e) {
			return Fe(this, oe.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				oe.removeAttr(this, t)
			})
		}
	}), oe.extend({
		attr: function(t, e, n) {
			var i, s, o = t.nodeType;
			if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === De ? oe.prop(t, e, n) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? Dn : Sn)), void 0 === n ? i && "get" in i && null !== (s = i.get(t, e)) ? s : (s = oe.find.attr(t, e), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(t, n, e)) ? s : (t.setAttribute(e, n + ""), n) : void oe.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var n, i, s = 0,
				o = e && e.match(we);
			if (o && 1 === t.nodeType) for (; n = o[s++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Mn && Tn || !_n.test(n) ? t[i] = !1 : t[oe.camelCase("default-" + n)] = t[i] = !1 : oe.attr(t, n, ""), t.removeAttribute(Tn ? n : i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!ie.radioValue && "radio" === e && oe.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), Dn = {
		set: function(t, e, n) {
			return e === !1 ? oe.removeAttr(t, n) : Mn && Tn || !_n.test(n) ? t.setAttribute(!Tn && oe.propFix[n] || n, n) : t[oe.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var n = kn[e] || oe.find.attr;
		kn[e] = Mn && Tn || !_n.test(e) ?
		function(t, e, i) {
			var s, o;
			return i || (o = kn[e], kn[e] = s, s = null != n(t, e, i) ? e.toLowerCase() : null, kn[e] = o), s
		} : function(t, e, n) {
			return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}), Mn && Tn || (oe.attrHooks.value = {
		set: function(t, e, n) {
			return oe.nodeName(t, "input") ? void(t.defaultValue = e) : Sn && Sn.set(t, e, n)
		}
	}), Tn || (Sn = {
		set: function(t, e, n) {
			var i = t.getAttributeNode(n);
			return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
		}
	}, kn.id = kn.name = kn.coords = function(t, e, n) {
		var i;
		return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
	}, oe.valHooks.button = {
		get: function(t, e) {
			var n = t.getAttributeNode(e);
			return n && n.specified ? n.value : void 0
		},
		set: Sn.set
	}, oe.attrHooks.contenteditable = {
		set: function(t, e, n) {
			Sn.set(t, "" === e ? !1 : e, n)
		}
	}, oe.each(["width", "height"], function(t, e) {
		oe.attrHooks[e] = {
			set: function(t, n) {
				return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
			}
		}
	})), ie.style || (oe.attrHooks.style = {
		get: function(t) {
			return t.style.cssText || void 0
		},
		set: function(t, e) {
			return t.style.cssText = e + ""
		}
	});
	var En = /^(?:input|select|textarea|button|object)$/i,
		Fn = /^(?:a|area)$/i;
	oe.fn.extend({
		prop: function(t, e) {
			return Fe(this, oe.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return t = oe.propFix[t] || t, this.each(function() {
				try {
					this[t] = void 0, delete this[t]
				} catch (e) {}
			})
		}
	}), oe.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, n) {
			var i, s, o, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !oe.isXMLDoc(t), o && (e = oe.propFix[e] || e, s = oe.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = oe.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : En.test(t.nodeName) || Fn.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), ie.hrefNormalized || oe.each(["href", "src"], function(t, e) {
		oe.propHooks[e] = {
			get: function(t) {
				return t.getAttribute(e, 4)
			}
		}
	}), ie.optSelected || (oe.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		oe.propFix[this.toLowerCase()] = this
	}), ie.enctype || (oe.propFix.enctype = "encoding");
	var Nn = /[\t\r\n\f]/g;
	oe.fn.extend({
		addClass: function(t) {
			var e, n, i, s, o, a, r = 0,
				l = this.length,
				c = "string" == typeof t && t;
			if (oe.isFunction(t)) return this.each(function(e) {
				oe(this).addClass(t.call(this, e, this.className))
			});
			if (c) for (e = (t || "").match(we) || []; l > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : " ")) {
				for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
				a = oe.trim(i), n.className !== a && (n.className = a)
			}
			return this
		},
		removeClass: function(t) {
			var e, n, i, s, o, a, r = 0,
				l = this.length,
				c = 0 === arguments.length || "string" == typeof t && t;
			if (oe.isFunction(t)) return this.each(function(e) {
				oe(this).removeClass(t.call(this, e, this.className))
			});
			if (c) for (e = (t || "").match(we) || []; l > r; r++) if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : "")) {
				for (o = 0; s = e[o++];) for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
				a = t ? oe.trim(i) : "", n.className !== a && (n.className = a)
			}
			return this
		},
		toggleClass: function(t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ?
			function(n) {
				oe(this).toggleClass(t.call(this, n, this.className, e), e)
			} : function() {
				if ("string" === n) for (var e, i = 0, s = oe(this), o = t.match(we) || []; e = o[i++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
				else(n === De || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nn, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		oe.fn[e] = function(t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), oe.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var An = oe.now(),
		In = /\?/,
		Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	oe.parseJSON = function(e) {
		if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
		var n, i = null,
			s = oe.trim(e + "");
		return s && !oe.trim(s.replace(Ln, function(t, e, s, o) {
			return n && e && (i = 0), 0 === i ? t : (n = s || e, i += !o - !s, "")
		})) ? Function("return " + s)() : oe.error("Invalid JSON: " + e)
	}, oe.parseXML = function(e) {
		var n, i;
		if (!e || "string" != typeof e) return null;
		try {
			t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
		} catch (s) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
	};
	var Pn, On, Hn = /#.*$/,
		Rn = /([?&])_=[^&]*/,
		zn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		$n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		jn = /^(?:GET|HEAD)$/,
		Wn = /^\/\//,
		Bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Un = {},
		qn = {},
		Yn = "*/".concat("*");
	try {
		On = location.href
	} catch (Vn) {
		On = ge.createElement("a"), On.href = "", On = On.href
	}
	Pn = Bn.exec(On.toLowerCase()) || [], oe.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: On,
			type: "GET",
			isLocal: $n.test(Pn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Yn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": oe.parseJSON,
				"text xml": oe.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? j(j(t, oe.ajaxSettings), e) : j(oe.ajaxSettings, t)
		},
		ajaxPrefilter: z(Un),
		ajaxTransport: z(qn),
		ajax: function(t, e) {
			function n(t, e, n, i) {
				var s, h, v, b, w, C = e;
				2 !== y && (y = 2, r && clearTimeout(r), c = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (b = W(u, x, n)), b = B(u, b, x, s), s ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === u.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, h = b.data, v = b.error, s = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", s ? p.resolveWith(d, [h, C, x]) : p.rejectWith(d, [x, C, v]), x.statusCode(m), m = void 0, l && f.trigger(s ? "ajaxSuccess" : "ajaxError", [x, u, s ? h : v]), g.fireWith(d, [x, C]), l && (f.trigger("ajaxComplete", [x, u]), --oe.active || oe.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var i, s, o, a, r, l, c, h, u = oe.ajaxSetup({}, e),
				d = u.context || u,
				f = u.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
				p = oe.Deferred(),
				g = oe.Callbacks("once memory"),
				m = u.statusCode || {},
				v = {},
				b = {},
				y = 0,
				w = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === y) {
							if (!h) for (h = {}; e = zn.exec(a);) h[e[1].toLowerCase()] = e[2];
							e = h[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === y ? a : null
					},
					setRequestHeader: function(t, e) {
						var n = t.toLowerCase();
						return y || (t = b[n] = b[n] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return y || (u.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t) if (2 > y) for (e in t) m[e] = [m[e], t[e]];
						else x.always(t[x.status]);
						return this
					},
					abort: function(t) {
						var e = t || w;
						return c && c.abort(e), n(0, e), this
					}
				};
			if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || On) + "").replace(Hn, "").replace(Wn, Pn[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = oe.trim(u.dataType || "*").toLowerCase().match(we) || [""], null == u.crossDomain && (i = Bn.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Pn[1] && i[2] === Pn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = oe.param(u.data, u.traditional)), $(Un, u, e, x), 2 === y) return x;
			l = u.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !jn.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (In.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Rn.test(o) ? o.replace(Rn, "$1_=" + An++) : o + (In.test(o) ? "&" : "?") + "_=" + An++)), u.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Yn + "; q=0.01" : "") : u.accepts["*"]);
			for (s in u.headers) x.setRequestHeader(s, u.headers[s]);
			if (u.beforeSend && (u.beforeSend.call(d, x, u) === !1 || 2 === y)) return x.abort();
			w = "abort";
			for (s in {
				success: 1,
				error: 1,
				complete: 1
			}) x[s](u[s]);
			if (c = $(qn, u, e, x)) {
				x.readyState = 1, l && f.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
					x.abort("timeout")
				}, u.timeout));
				try {
					y = 1, c.send(v, n)
				} catch (C) {
					if (!(2 > y)) throw C;
					n(-1, C)
				}
			} else n(-1, "No Transport");
			return x
		},
		getJSON: function(t, e, n) {
			return oe.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return oe.get(t, void 0, e, "script")
		}
	}), oe.each(["get", "post"], function(t, e) {
		oe[e] = function(t, n, i, s) {
			return oe.isFunction(n) && (s = s || i, i = n, n = void 0), oe.ajax({
				url: t,
				type: e,
				dataType: s,
				data: n,
				success: i
			})
		}
	}), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		oe.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), oe._evalUrl = function(t) {
		return oe.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, oe.fn.extend({
		wrapAll: function(t) {
			if (oe.isFunction(t)) return this.each(function(e) {
				oe(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return this.each(oe.isFunction(t) ?
			function(e) {
				oe(this).wrapInner(t.call(this, e))
			} : function() {
				var e = oe(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = oe.isFunction(t);
			return this.each(function(n) {
				oe(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
			}).end()
		}
	}), oe.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
	}, oe.expr.filters.visible = function(t) {
		return !oe.expr.filters.hidden(t)
	};
	var Xn = /%20/g,
		Gn = /\[\]$/,
		Jn = /\r?\n/g,
		Kn = /^(?:submit|button|image|reset|file)$/i,
		Zn = /^(?:input|select|textarea|keygen)/i;
	oe.param = function(t, e) {
		var n, i = [],
			s = function(t, e) {
				e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function() {
			s(this.name, this.value)
		});
		else for (n in t) U(n, t[n], e, s);
		return i.join("&").replace(Xn, "+")
	}, oe.fn.extend({
		serialize: function() {
			return oe.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = oe.prop(this, "elements");
				return t ? oe.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !oe(this).is(":disabled") && Zn.test(this.nodeName) && !Kn.test(t) && (this.checked || !Ne.test(t))
			}).map(function(t, e) {
				var n = oe(this).val();
				return null == n ? null : oe.isArray(n) ? oe.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Jn, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Jn, "\r\n")
				}
			}).get()
		}
	}), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
	function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || Y()
	} : q;
	var Qn = 0,
		ti = {},
		ei = oe.ajaxSettings.xhr();
	t.ActiveXObject && oe(t).on("unload", function() {
		for (var t in ti) ti[t](void 0, !0)
	}), ie.cors = !! ei && "withCredentials" in ei, ei = ie.ajax = !! ei, ei && oe.ajaxTransport(function(t) {
		if (!t.crossDomain || ie.cors) {
			var e;
			return {
				send: function(n, i) {
					var s, o = t.xhr(),
						a = ++Qn;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (s in n) void 0 !== n[s] && o.setRequestHeader(s, n[s] + "");
					o.send(t.hasContent && t.data || null), e = function(n, s) {
						var r, l, c;
						if (e && (s || 4 === o.readyState)) if (delete ti[a], e = void 0, o.onreadystatechange = oe.noop, s) 4 !== o.readyState && o.abort();
						else {
							c = {}, r = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
							try {
								l = o.statusText
							} catch (h) {
								l = ""
							}
							r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
						}
						c && i(r, l, c, o.getAllResponseHeaders())
					}, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = ti[a] = e : e()
				},
				abort: function() {
					e && e(void 0, !0)
				}
			}
		}
	}), oe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return oe.globalEval(t), t
			}
		}
	}), oe.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), oe.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var e, n = ge.head || oe("head")[0] || ge.documentElement;
			return {
				send: function(i, s) {
					e = ge.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
						(n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || s(200, "success"))
					}, n.insertBefore(e, n.firstChild)
				},
				abort: function() {
					e && e.onload(void 0, !0)
				}
			}
		}
	});
	var ni = [],
		ii = /(=)\?(?=&|$)|\?\?/;
	oe.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = ni.pop() || oe.expando + "_" + An++;
			return this[t] = !0, t
		}
	}), oe.ajaxPrefilter("json jsonp", function(e, n, i) {
		var s, o, a, r = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
		return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ii, "$1" + s) : e.jsonp !== !1 && (e.url += (In.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
			return a || oe.error(s + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
			a = arguments
		}, i.always(function() {
			t[s] = o, e[s] && (e.jsonpCallback = n.jsonpCallback, ni.push(s)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), oe.parseHTML = function(t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || ge;
		var i = de.exec(t),
			s = !n && [];
		return i ? [e.createElement(i[1])] : (i = oe.buildFragment([t], e, s), s && s.length && oe(s).remove(), oe.merge([], i.childNodes))
	};
	var si = oe.fn.load;
	oe.fn.load = function(t, e, n) {
		if ("string" != typeof t && si) return si.apply(this, arguments);
		var i, s, o, a = this,
			r = t.indexOf(" ");
		return r >= 0 && (i = t.slice(r, t.length), t = t.slice(0, r)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && oe.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			s = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
		}).complete(n &&
		function(t, e) {
			a.each(n, s || [t.responseText, e, t])
		}), this
	}, oe.expr.filters.animated = function(t) {
		return oe.grep(oe.timers, function(e) {
			return t === e.elem
		}).length
	};
	var oi = t.document.documentElement;
	oe.offset = {
		setOffset: function(t, e, n) {
			var i, s, o, a, r, l, c, h = oe.css(t, "position"),
				u = oe(t),
				d = {};
			"static" === h && (t.style.position = "relative"), r = u.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), c = ("absolute" === h || "fixed" === h) && oe.inArray("auto", [o, l]) > -1, c ? (i = u.position(), a = i.top, s = i.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, r)), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, oe.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				oe.offset.setOffset(this, t, e)
			});
			var e, n, i = {
				top: 0,
				left: 0
			},
				s = this[0],
				o = s && s.ownerDocument;
			if (o) return e = o.documentElement, oe.contains(e, s) ? (typeof s.getBoundingClientRect !== De && (i = s.getBoundingClientRect()), n = V(o), {
				top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : i
		},
		position: function() {
			if (this[0]) {
				var t, e, n = {
					top: 0,
					left: 0
				},
					i = this[0];
				return "fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), n.left += oe.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - oe.css(i, "marginTop", !0),
					left: e.left - n.left - oe.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");) t = t.offsetParent;
				return t || oi
			})
		}
	}), oe.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e) {
		var n = /Y/.test(e);
		oe.fn[t] = function(i) {
			return Fe(this, function(t, i, s) {
				var o = V(t);
				return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? oe(o).scrollLeft() : s, n ? s : oe(o).scrollTop()) : t[i] = s)
			}, t, i, arguments.length, null)
		}
	}), oe.each(["top", "left"], function(t, e) {
		oe.cssHooks[e] = _(ie.pixelPosition, function(t, n) {
			return n ? (n = nn(t, e), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0
		})
	}), oe.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		oe.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(n, i) {
			oe.fn[i] = function(i, s) {
				var o = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || s === !0 ? "margin" : "border");
				return Fe(this, function(e, n, i) {
					var s;
					return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === i ? oe.css(e, n, a) : oe.style(e, n, i, a)
				}, e, o ? i : void 0, o, null)
			}
		})
	}), oe.fn.size = function() {
		return this.length
	}, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return oe
	});
	var ai = t.jQuery,
		ri = t.$;
	return oe.noConflict = function(e) {
		return t.$ === oe && (t.$ = ri), e && t.jQuery === oe && (t.jQuery = ai), oe
	}, typeof e === De && (t.jQuery = t.$ = oe), oe
}), function(t, e) {
	t.rails !== e && t.error("jquery-ujs has already been loaded!");
	var n, i = t(document);
	t.rails = n = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
		buttonClickSelector: "button[data-remote]",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
		disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with]",
		CSRFProtection: function(e) {
			var n = t('meta[name="csrf-token"]').attr("content");
			n && e.setRequestHeader("X-CSRF-Token", n)
		},
		refreshCSRFTokens: function() {
			var e = t("meta[name=csrf-token]").attr("content"),
				n = t("meta[name=csrf-param]").attr("content");
			t('form input[name="' + n + '"]').val(e)
		},
		fire: function(e, n, i) {
			var s = t.Event(n);
			return e.trigger(s, i), s.result !== !1
		},
		confirm: function(t) {
			return confirm(t)
		},
		ajax: function(e) {
			return t.ajax(e)
		},
		href: function(t) {
			return t.attr("href")
		},
		handleRemote: function(i) {
			var s, o, a, r, l, c, h, u;
			if (n.fire(i, "ajax:before")) {
				if (r = i.data("cross-domain"), l = r === e ? null : r, c = i.data("with-credentials") || null, h = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
					s = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
					var d = i.data("ujs:submit-button");
					d && (a.push(d), i.data("ujs:submit-button", null))
				} else i.is(n.inputChangeSelector) ? (s = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (s = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (s = i.data("method"), o = n.href(i), a = i.data("params") || null);
				u = {
					type: s || "GET",
					data: a,
					dataType: h,
					beforeSend: function(t, s) {
						return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), n.fire(i, "ajax:beforeSend", [t, s])
					},
					success: function(t, e, n) {
						i.trigger("ajax:success", [t, e, n])
					},
					complete: function(t, e) {
						i.trigger("ajax:complete", [t, e])
					},
					error: function(t, e, n) {
						i.trigger("ajax:error", [t, e, n])
					},
					crossDomain: l
				}, c && (u.xhrFields = {
					withCredentials: c
				}), o && (u.url = o);
				var f = n.ajax(u);
				return i.trigger("ajax:send", f), f
			}
			return !1
		},
		handleMethod: function(i) {
			var s = n.href(i),
				o = i.data("method"),
				a = i.attr("target"),
				r = t("meta[name=csrf-token]").attr("content"),
				l = t("meta[name=csrf-param]").attr("content"),
				c = t('<form method="post" action="' + s + '"></form>'),
				h = '<input name="_method" value="' + o + '" type="hidden" />';
			l !== e && r !== e && (h += '<input name="' + l + '" value="' + r + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(h).appendTo("body"), c.submit()
		},
		disableFormElements: function(e) {
			e.find(n.disableSelector).each(function() {
				var e = t(this),
					n = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
			})
		},
		enableFormElements: function(e) {
			e.find(n.enableSelector).each(function() {
				var e = t(this),
					n = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
			})
		},
		allowAction: function(t) {
			var e, i = t.data("confirm"),
				s = !1;
			return i ? (n.fire(t, "confirm") && (s = n.confirm(i), e = n.fire(t, "confirm:complete", [s])), s && e) : !0
		},
		blankInputs: function(e, n, i) {
			var s, o, a = t(),
				r = n || "input,textarea",
				l = e.find(r);
			return l.each(function() {
				if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !i) {
					if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
					a = a.add(s)
				}
			}), a.length ? a : !1
		},
		nonBlankInputs: function(t, e) {
			return n.blankInputs(t, e, !0)
		},
		stopEverything: function(e) {
			return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
		},
		disableElement: function(t) {
			t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
				return n.stopEverything(t)
			})
		},
		enableElement: function(t) {
			t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
		}
	}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
		t.crossDomain || n.CSRFProtection(i)
	}), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
		n.enableElement(t(this))
	}), i.delegate(n.linkClickSelector, "click.rails", function(i) {
		var s = t(this),
			o = s.data("method"),
			a = s.data("params"),
			r = i.metaKey || i.ctrlKey;
		if (!n.allowAction(s)) return n.stopEverything(i);
		if (!r && s.is(n.linkDisableSelector) && n.disableElement(s), s.data("remote") !== e) {
			if (r && (!o || "GET" === o) && !a) return !0;
			var l = n.handleRemote(s);
			return l === !1 ? n.enableElement(s) : l.error(function() {
				n.enableElement(s)
			}), !1
		}
		return s.data("method") ? (n.handleMethod(s), !1) : void 0
	}), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
		var i = t(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
	}), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
		var i = t(this);
		return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
	}), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
		var s = t(this),
			o = s.data("remote") !== e,
			a = n.blankInputs(s, n.requiredInputSelector),
			r = n.nonBlankInputs(s, n.fileInputSelector);
		if (!n.allowAction(s)) return n.stopEverything(i);
		if (a && s.attr("novalidate") == e && n.fire(s, "ajax:aborted:required", [a])) return n.stopEverything(i);
		if (o) {
			if (r) {
				setTimeout(function() {
					n.disableFormElements(s)
				}, 13);
				var l = n.fire(s, "ajax:aborted:file", [r]);
				return l || setTimeout(function() {
					n.enableFormElements(s)
				}, 13), l
			}
			return n.handleRemote(s), !1
		}
		setTimeout(function() {
			n.disableFormElements(s)
		}, 13)
	}), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
		var i = t(this);
		if (!n.allowAction(i)) return n.stopEverything(e);
		var s = i.attr("name"),
			o = s ? {
				name: s,
				value: i.val()
			} : null;
		i.closest("form").data("ujs:submit-button", o)
	}), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
		this == e.target && n.disableFormElements(t(this))
	}), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
		this == e.target && n.enableFormElements(t(this))
	}), t(function() {
		n.refreshCSRFTokens()
	}))
}(jQuery), function() {
	var t, e, n, i, s, o, a, r, l, c, h, u, d, f, p, g, m, v, b, y, w, x, C, S, D, k, _, T, M, E, F, N, A, I, L, P, O, H, R, z, $, j, W, B, U, q, Y, V, X, G = [].indexOf ||
	function(t) {
		for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
		return -1
	}, J = {}.hasOwnProperty, K = function(t, e) {
		function n() {
			this.constructor = t
		}
		for (var i in e) J.call(e, i) && (t[i] = e[i]);
		return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
	}, Z = [].slice;
	M = {}, u = 10, B = !1, g = null, T = null, L = null, p = null, V = null, y = function(t) {
		var e;
		return t = new n(t), z(), h(), P(t), B && (e = U(t.absolute)) ? (w(e), x(t)) : x(t, W)
	}, U = function(t) {
		var e;
		return e = M[t], e && !e.transitionCacheDisabled ? e : void 0
	}, m = function(t) {
		return null == t && (t = !0), B = t
	}, x = function(t, e) {
		return null == e && (e = function() {
			return function() {}
		}(this)), q("page:fetch", {
			url: t.absolute
		}), null != V && V.abort(), V = new XMLHttpRequest, V.open("GET", t.withoutHashForIE10compatibility(), !0), V.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), V.setRequestHeader("X-XHR-Referer", L), V.onload = function() {
			var n;
			return q("page:receive"), (n = A()) ? (d.apply(null, b(n)), O(), e(), q("page:load")) : document.location.href = t.absolute
		}, V.onloadend = function() {
			return V = null
		}, V.onerror = function() {
			return document.location.href = t.absolute
		}, V.send()
	}, w = function(t) {
		return null != V && V.abort(), d(t.title, t.body), I(t), q("page:restore")
	}, h = function() {
		var t;
		return t = new n(g.url), M[t.absolute] = {
			url: t.relative,
			body: document.body,
			title: document.title,
			positionY: window.pageYOffset,
			positionX: window.pageXOffset,
			cachedAt: (new Date).getTime(),
			transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
		}, f(u)
	}, F = function(t) {
		return null == t && (t = u), /^[\d]+$/.test(t) ? u = parseInt(t) : void 0
	}, f = function(t) {
		var e, n, i, s, o, a;
		for (i = Object.keys(M), e = i.map(function(t) {
			return M[t].cachedAt
		}).sort(function(t, e) {
			return e - t
		}), a = [], s = 0, o = i.length; o > s; s++) n = i[s], M[n].cachedAt <= e[t] && (q("page:expire", M[n]), a.push(delete M[n]));
		return a
	}, d = function(e, n, i, s) {
		return document.title = e, document.documentElement.replaceChild(n, document.body), null != i && t.update(i), s && v(), g = window.history.state, q("page:change"), q("page:update")
	}, v = function() {
		var t, e, n, i, s, o, a, r, l, c, h, u;
		for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, l = o.length; l > a; a++) if (s = o[a], "" === (h = s.type) || "text/javascript" === h) {
			for (e = document.createElement("script"), u = s.attributes, r = 0, c = u.length; c > r; r++) t = u[r], e.setAttribute(t.name, t.value);
			e.appendChild(document.createTextNode(s.innerHTML)), i = s.parentNode, n = s.nextSibling, i.removeChild(s), i.insertBefore(e, n)
		}
	}, $ = function(t) {
		return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
	}, P = function(t) {
		return (t = new n(t)).absolute !== L ? window.history.pushState({
			turbolinks: !0,
			url: t.absolute
		}, "", t.absolute) : void 0
	}, O = function() {
		var t, e;
		return (t = V.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(g, "", t.href + e)) : void 0
	}, z = function() {
		return L = document.location.href
	}, R = function() {
		return window.history.replaceState({
			turbolinks: !0,
			url: document.location.href
		}, "", document.location.href)
	}, H = function() {
		return g = window.history.state
	}, I = function(t) {
		return window.scrollTo(t.positionX, t.positionY)
	}, W = function() {
		return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
	}, N = function(t) {
		var e, n;
		return e = (null != (n = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
	}, q = function(t, e) {
		var n;
		return n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
	}, E = function() {
		return !q("page:before-change")
	}, A = function() {
		var t, e, n, i, s, o;
		return e = function() {
			var t;
			return 400 <= (t = V.status) && 600 > t
		}, o = function() {
			return V.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
		}, i = function(t) {
			var e, n, i, s, o;
			for (s = t.head.childNodes, o = [], n = 0, i = s.length; i > n; n++) e = s[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && o.push(e.getAttribute("src") || e.getAttribute("href"));
			return o
		}, t = function(t) {
			var e;
			return T || (T = i(document)), e = i(t), e.length !== T.length || s(e, T).length !== T.length
		}, s = function(t, e) {
			var n, i, s, o, a;
			for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), a = [], i = 0, s = t.length; s > i; i++) n = t[i], G.call(e, n) >= 0 && a.push(n);
			return a
		}, !e() && o() && (n = p(V.responseText), n && !t(n)) ? n : void 0
	}, b = function(e) {
		var n;
		return n = e.querySelector("title"), [null != n ? n.textContent : void 0, $(e.body), t.get(e).token, "runScripts"]
	}, t = {
		get: function(t) {
			var e;
			return null == t && (t = document), {
				node: e = t.querySelector('meta[name="csrf-token"]'),
				token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
			}
		},
		update: function(t) {
			var e;
			return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
		}
	}, s = function() {
		var t, e, n, i, s, o;
		e = function(t) {
			return (new DOMParser).parseFromString(t, "text/html")
		}, t = function(t) {
			var e;
			return e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, e
		}, n = function(t) {
			var e;
			return e = document.implementation.createHTMLDocument(""), e.open("replace"), e.write(t), e.close(), e
		};
		try {
			if (window.DOMParser) return s = e("<html><body><p>test"), e
		} catch (a) {
			return i = a, s = t("<html><body><p>test"), t
		} finally {
			if (1 !== (null != s && null != (o = s.body) ? o.childNodes.length : void 0)) return n
		}
	}, n = function() {
		function t(e) {
			return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
		}
		return t.prototype.withoutHash = function() {
			return this.href.replace(this.hash, "")
		}, t.prototype.withoutHashForIE10compatibility = function() {
			return this.withoutHash()
		}, t.prototype.hasNoHash = function() {
			return 0 === this.hash.length
		}, t.prototype._parse = function() {
			var t;
			return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
		}, t
	}(), i = function(t) {
		function e(t) {
			return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, void e.__super__.constructor.apply(this, arguments))
		}
		return K(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function() {
			var t, n, i, s;
			for (n = 1 <= arguments.length ? Z.call(arguments, 0) : [], i = 0, s = n.length; s > i; i++) t = n[i], e.HTML_EXTENSIONS.push(t);
			return e.HTML_EXTENSIONS
		}, e.prototype.shouldIgnore = function() {
			return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
		}, e.prototype._crossOrigin = function() {
			return this.origin !== (new n).origin
		}, e.prototype._anchored = function() {
			var t;
			return (this.hash && this.withoutHash()) === (t = new n).withoutHash() || this.href === t.href + "#"
		}, e.prototype._nonHtml = function() {
			return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
		}, e.prototype._optOut = function() {
			var t, e;
			for (e = this.link; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
			return t
		}, e.prototype._target = function() {
			return 0 !== this.link.target.length
		}, e
	}(n), e = function() {
		function t(t) {
			this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (E() || Y(this.link.href), this.event.preventDefault()))
		}
		return t.installHandlerLast = function(e) {
			return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
		}, t.handle = function(e) {
			return new t(e)
		}, t.prototype._extractLink = function() {
			var t;
			for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
			return "A" === t.nodeName && 0 !== t.href.length ? this.link = new i(t) : void 0
		}, t.prototype._validForTurbolinks = function() {
			return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
		}, t.prototype._nonStandardClick = function() {
			return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
		}, t
	}(), c = function(t) {
		return setTimeout(t, 500)
	}, D = function() {
		return document.addEventListener("DOMContentLoaded", function() {
			return q("page:change"), q("page:update")
		}, !0)
	}, _ = function() {
		return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(t, e) {
			return jQuery.trim(e.responseText) ? q("page:update") : void 0
		}) : void 0
	}, k = function(t) {
		var e, i;
		return (null != (i = t.state) ? i.turbolinks : void 0) ? (e = M[new n(t.state.url).absolute]) ? (h(), w(e)) : Y(t.target.location.href) : void 0
	}, S = function() {
		return R(), H(), p = s(), document.addEventListener("click", e.installHandlerLast, !0), c(function() {
			return window.addEventListener("popstate", k, !1)
		})
	}, C = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), r = window.history && window.history.pushState && window.history.replaceState && C, o = !navigator.userAgent.match(/CriOS\//), j = "GET" === (X = N("request_method")) || "" === X, l = r && o && j, a = document.addEventListener && document.createEvent, a && (D(), _()), l ? (Y = y, S()) : Y = function(t) {
		return document.location.href = t
	}, this.Turbolinks = {
		visit: Y,
		pagesCached: F,
		enableTransitionCache: m,
		allowLinkExtensions: i.allowExtensions,
		supported: l
	}
}.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var n in e) if (void 0 !== t.style[n]) return {
			end: e[n]
		};
		return !1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var n = !1,
			i = this;
		t(this).one(t.support.transition.end, function() {
			n = !0
		});
		var s = function() {
				n || t(i).trigger(t.support.transition.end)
			};
		return setTimeout(s, e), this
	}, t(function() {
		t.support.transition = e()
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = '[data-dismiss="alert"]',
		n = function(n) {
			t(n).on("click", e, this.close)
		};
	n.prototype.close = function(e) {
		function n() {
			o.trigger("closed.bs.alert").remove()
		}
		var i = t(this),
			s = i.attr("data-target");
		s || (s = i.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
		var o = t(s);
		e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
	};
	var i = t.fn.alert;
	t.fn.alert = function(e) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.alert");
			s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i)
		})
	}, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
		return t.fn.alert = i, this
	}, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery), +
function(t) {
	"use strict";
	var e = function(n, i) {
			this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
		};
	e.DEFAULTS = {
		loadingText: "loading..."
	}, e.prototype.setState = function(e) {
		var n = "disabled",
			i = this.$element,
			s = i.is("input") ? "val" : "html",
			o = i.data();
		e += "Text", o.resetText || i.data("resetText", i[s]()), i[s](o[e] || this.options[e]), setTimeout(t.proxy(function() {
			"loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
		}, this), 0)
	}, e.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		t && this.$element.toggleClass("active")
	};
	var n = t.fn.button;
	t.fn.button = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.button"),
				o = "object" == typeof n && n;
			s || i.data("bs.button", s = new e(this, o)), "toggle" == n ? s.toggle() : n && s.setState(n)
		})
	}, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
		return t.fn.button = n, this
	}, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
		var n = t(e.target);
		n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = function(e, n) {
			this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
		};
	e.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, e.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, e.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, e.prototype.to = function(e) {
		var n = this,
			i = this.getActiveIndex();
		return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			n.to(e)
		}) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
	}, e.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, e.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, e.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, e.prototype.slide = function(e, n) {
		var i = this.$element.find(".item.active"),
			s = n || i[e](),
			o = this.interval,
			a = "next" == e ? "left" : "right",
			r = "next" == e ? "first" : "last",
			l = this;
		if (!s.length) {
			if (!this.options.wrap) return;
			s = this.$element.find(".item")[r]()
		}
		if (s.hasClass("active")) return this.sliding = !1;
		var c = t.Event("slide.bs.carousel", {
			relatedTarget: s[0],
			direction: a
		});
		return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
			var e = t(l.$indicators.children()[l.getActiveIndex()]);
			e && e.addClass("active")
		})), t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, i.addClass(a), s.addClass(a), i.one(t.support.transition.end, function() {
			s.removeClass([e, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
				l.$element.trigger("slid.bs.carousel")
			}, 0)
		}).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
	};
	var n = t.fn.carousel;
	t.fn.carousel = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.carousel"),
				o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
				a = "string" == typeof n ? n : o.slide;
			s || i.data("bs.carousel", s = new e(this, o)), "number" == typeof n ? s.to(n) : a ? s[a]() : o.interval && s.pause().cycle()
		})
	}, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
		return t.fn.carousel = n, this
	}, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
		var n, i = t(this),
			s = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
			o = t.extend({}, s.data(), i.data()),
			a = i.attr("data-slide-to");
		a && (o.interval = !1), s.carousel(o), (a = i.attr("data-slide-to")) && s.data("bs.carousel").to(a), e.preventDefault()
	}), t(window).on("load", function() {
		t('[data-ride="carousel"]').each(function() {
			var e = t(this);
			e.carousel(e.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = function(n, i) {
			this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
		};
	e.DEFAULTS = {
		toggle: !0
	}, e.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, e.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e = t.Event("show.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var n = this.$parent && this.$parent.find("> .panel > .in");
				if (n && n.length) {
					var i = n.data("bs.collapse");
					if (i && i.transitioning) return;
					n.collapse("hide"), i || n.data("bs.collapse", null)
				}
				var s = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
				var o = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[s]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
				if (!t.support.transition) return o.call(this);
				var a = t.camelCase(["scroll", s].join("-"));
				this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
			}
		}
	}, e.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var n = this.dimension();
				this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var i = function() {
						this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
					};
				return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
			}
		}
	}, e.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var n = t.fn.collapse;
	t.fn.collapse = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.collapse"),
				o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
			!s && o.toggle && "show" == n && (n = !n), s || i.data("bs.collapse", s = new e(this, o)), "string" == typeof n && s[n]()
		})
	}, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
		return t.fn.collapse = n, this
	}, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
		var n, i = t(this),
			s = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
			o = t(s),
			a = o.data("bs.collapse"),
			r = a ? "toggle" : i.data(),
			l = i.attr("data-parent"),
			c = l && t(l);
		a && a.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(r)
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		t(i).remove(), t(s).each(function() {
			var i = n(t(this)),
				s = {
					relatedTarget: this
				};
			i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", s))
		})
	}
	function n(e) {
		var n = e.attr("data-target");
		n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
		var i = n && t(n);
		return i && i.length ? i : e.parent()
	}
	var i = ".dropdown-backdrop",
		s = "[data-toggle=dropdown]",
		o = function(e) {
			t(e).on("click.bs.dropdown", this.toggle)
		};
	o.prototype.toggle = function(i) {
		var s = t(this);
		if (!s.is(".disabled, :disabled")) {
			var o = n(s),
				a = o.hasClass("open");
			if (e(), !a) {
				"ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
				var r = {
					relatedTarget: this
				};
				if (o.trigger(i = t.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
				o.toggleClass("open").trigger("shown.bs.dropdown", r), s.focus()
			}
			return !1
		}
	}, o.prototype.keydown = function(e) {
		if (/(38|40|27)/.test(e.keyCode)) {
			var i = t(this);
			if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
				var o = n(i),
					a = o.hasClass("open");
				if (!a || a && 27 == e.keyCode) return 27 == e.which && o.find(s).focus(), i.click();
				var r = " li:not(.divider):visible a",
					l = o.find("[role=menu]" + r + ", [role=listbox]" + r);
				if (l.length) {
					var c = l.index(l.filter(":focus"));
					38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).focus()
				}
			}
		}
	};
	var a = t.fn.dropdown;
	t.fn.dropdown = function(e) {
		return this.each(function() {
			var n = t(this),
				i = n.data("bs.dropdown");
			i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
		})
	}, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = a, this
	}, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ", [role=menu], [role=listbox]", o.prototype.keydown)
}(jQuery), +
function(t) {
	"use strict";
	var e = function(e, n) {
			this.options = n, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};
	e.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, e.prototype.toggle = function(t) {
		return this[this.isShown ? "hide" : "show"](t)
	}, e.prototype.show = function(e) {
		var n = this,
			i = t.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
			var i = t.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
			var s = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function() {
				n.$element.focus().trigger(s)
			}).emulateTransitionEnd(300) : n.$element.focus().trigger(s)
		}))
	}, e.prototype.hide = function(e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, e.prototype.enforceFocus = function() {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
		}, this))
	}, e.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, e.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
		})
	}, e.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, e.prototype.backdrop = function(e) {
		var n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var i = t.support.transition && n;
			if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
				t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
		} else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
	};
	var n = t.fn.modal;
	t.fn.modal = function(n, i) {
		return this.each(function() {
			var s = t(this),
				o = s.data("bs.modal"),
				a = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof n && n);
			o || s.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](i) : a.show && o.show(i)
		})
	}, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
		return t.fn.modal = n, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
		var n = t(this),
			i = n.attr("href"),
			s = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
			o = s.data("bs.modal") ? "toggle" : t.extend({
				remote: !/#/.test(i) && i
			}, s.data(), n.data());
		n.is("a") && e.preventDefault(), s.modal(o, this).one("hide", function() {
			n.is(":visible") && n.focus()
		})
	}), t(document).on("show.bs.modal", ".modal", function() {
		t(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		t(document.body).removeClass("modal-open")
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = function(t, e) {
			this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
		};
	e.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, e.prototype.init = function(e, n, i) {
		this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
		for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
			var a = s[o];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter" : "focusin",
					l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, e.prototype.getDefaults = function() {
		return e.DEFAULTS
	}, e.prototype.getOptions = function(e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, e.prototype.getDelegateOptions = function() {
		var e = {},
			n = this.getDefaults();
		return this._options && t.each(this._options, function(t, i) {
			n[t] != i && (e[t] = i)
		}), e
	}, e.prototype.enter = function(e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
			"in" == n.hoverState && n.show()
		}, n.options.delay.show)) : n.show()
	}, e.prototype.leave = function(e) {
		var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
			"out" == n.hoverState && n.hide()
		}, n.options.delay.hide)) : n.hide()
	}, e.prototype.show = function() {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(e), e.isDefaultPrevented()) return;
			var n = this,
				i = this.tip();
			this.setContent(), this.options.animation && i.addClass("fade");
			var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
				o = /\s?auto?\s?/i,
				a = o.test(s);
			a && (s = s.replace(o, "") || "top"), i.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(s), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
			var r = this.getPosition(),
				l = i[0].offsetWidth,
				c = i[0].offsetHeight;
			if (a) {
				var h = this.$element.parent(),
					u = s,
					d = document.documentElement.scrollTop || document.body.scrollTop,
					f = "body" == this.options.container ? window.innerWidth : h.outerWidth(),
					p = "body" == this.options.container ? window.innerHeight : h.outerHeight(),
					g = "body" == this.options.container ? 0 : h.offset().left;
				s = "bottom" == s && r.top + r.height + c - d > p ? "top" : "top" == s && r.top - d - c < 0 ? "bottom" : "right" == s && r.right + l > f ? "left" : "left" == s && r.left - l < g ? "right" : s, i.removeClass(u).addClass(s)
			}
			var m = this.getCalculatedOffset(s, r, l, c);
			this.applyPlacement(m, s), this.hoverState = null;
			var v = function() {
					n.$element.trigger("shown.bs." + n.type)
				};
			t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, v).emulateTransitionEnd(150) : v()
		}
	}, e.prototype.applyPlacement = function(e, n) {
		var i, s = this.tip(),
			o = s[0].offsetWidth,
			a = s[0].offsetHeight,
			r = parseInt(s.css("margin-top"), 10),
			l = parseInt(s.css("margin-left"), 10);
		isNaN(r) && (r = 0), isNaN(l) && (l = 0), e.top = e.top + r, e.left = e.left + l, t.offset.setOffset(s[0], t.extend({
			using: function(t) {
				s.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, e), 0), s.addClass("in");
		var c = s[0].offsetWidth,
			h = s[0].offsetHeight;
		if ("top" == n && h != a && (i = !0, e.top = e.top + a - h), /bottom|top/.test(n)) {
			var u = 0;
			e.left < 0 && (u = -2 * e.left, e.left = 0, s.offset(e), c = s[0].offsetWidth, h = s[0].offsetHeight), this.replaceArrow(u - o + c, c, "left")
		} else this.replaceArrow(h - a, h, "top");
		i && s.offset(e)
	}, e.prototype.replaceArrow = function(t, e, n) {
		this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
	}, e.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, e.prototype.hide = function() {
		function e() {
			"in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
		}
		var n = this,
			i = this.tip(),
			s = t.Event("hide.bs." + this.type);
		return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
	}, e.prototype.fixTitle = function() {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, e.prototype.hasContent = function() {
		return this.getTitle()
	}, e.prototype.getPosition = function() {
		var e = this.$element[0];
		return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
			width: e.offsetWidth,
			height: e.offsetHeight
		}, this.$element.offset())
	}, e.prototype.getCalculatedOffset = function(t, e, n, i) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - n / 2
		} : "top" == t ? {
			top: e.top - i,
			left: e.left + e.width / 2 - n / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - i / 2,
			left: e.left - n
		} : {
			top: e.top + e.height / 2 - i / 2,
			left: e.left + e.width
		}
	}, e.prototype.getTitle = function() {
		var t, e = this.$element,
			n = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
	}, e.prototype.tip = function() {
		return this.$tip = this.$tip || t(this.options.template)
	}, e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, e.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, e.prototype.enable = function() {
		this.enabled = !0
	}, e.prototype.disable = function() {
		this.enabled = !1
	}, e.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, e.prototype.toggle = function(e) {
		var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
	}, e.prototype.destroy = function() {
		clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var n = t.fn.tooltip;
	t.fn.tooltip = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.tooltip"),
				o = "object" == typeof n && n;
			(s || "destroy" != n) && (s || i.data("bs.tooltip", s = new e(this, o)), "string" == typeof n && s[n]())
		})
	}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = n, this
	}
}(jQuery), +
function(t) {
	"use strict";
	var e = function(t, e) {
			this.init("popover", t, e)
		};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
		return e.DEFAULTS
	}, e.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle(),
			n = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, e.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, e.prototype.getContent = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, e.prototype.tip = function() {
		return this.$tip || (this.$tip = t(this.options.template)), this.$tip
	};
	var n = t.fn.popover;
	t.fn.popover = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.popover"),
				o = "object" == typeof n && n;
			(s || "destroy" != n) && (s || i.data("bs.popover", s = new e(this, o)), "string" == typeof n && s[n]())
		})
	}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
		return t.fn.popover = n, this
	}
}(jQuery), +
function(t) {
	"use strict";

	function e(n, i) {
		var s, o = t.proxy(this.process, this);
		this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (s = t(n).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
	}
	e.DEFAULTS = {
		offset: 10
	}, e.prototype.refresh = function() {
		var e = this.$element[0] == window ? "offset" : "position";
		this.offsets = t([]), this.targets = t([]);
		var n = this;
		this.$body.find(this.selector).map(function() {
			var i = t(this),
				s = i.data("target") || i.attr("href"),
				o = /^#./.test(s) && t(s);
			return o && o.length && o.is(":visible") && [
				[o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), s]
			] || null
		}).sort(function(t, e) {
			return t[0] - e[0]
		}).each(function() {
			n.offsets.push(this[0]), n.targets.push(this[1])
		})
	}, e.prototype.process = function() {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			i = n - this.$scrollElement.height(),
			s = this.offsets,
			o = this.targets,
			a = this.activeTarget;
		if (e >= i) return a != (t = o.last()[0]) && this.activate(t);
		if (a && e <= s[0]) return a != (t = o[0]) && this.activate(t);
		for (t = s.length; t--;) a != o[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(o[t])
	}, e.prototype.activate = function(e) {
		this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
		var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			i = t(n).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
	};
	var n = t.fn.scrollspy;
	t.fn.scrollspy = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.scrollspy"),
				o = "object" == typeof n && n;
			s || i.data("bs.scrollspy", s = new e(this, o)), "string" == typeof n && s[n]()
		})
	}, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
		return t.fn.scrollspy = n, this
	}, t(window).on("load", function() {
		t('[data-spy="scroll"]').each(function() {
			var e = t(this);
			e.scrollspy(e.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = function(e) {
			this.element = t(e)
		};
	e.prototype.show = function() {
		var e = this.element,
			n = e.closest("ul:not(.dropdown-menu)"),
			i = e.data("target");
		if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var s = n.find(".active:last a")[0],
				o = t.Event("show.bs.tab", {
					relatedTarget: s
				});
			if (e.trigger(o), !o.isDefaultPrevented()) {
				var a = t(i);
				this.activate(e.parent("li"), n), this.activate(a, a.parent(), function() {
					e.trigger({
						type: "shown.bs.tab",
						relatedTarget: s
					})
				})
			}
		}
	}, e.prototype.activate = function(e, n, i) {
		function s() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
		}
		var o = n.find("> .active"),
			a = i && t.support.transition && o.hasClass("fade");
		a ? o.one(t.support.transition.end, s).emulateTransitionEnd(150) : s(), o.removeClass("in")
	};
	var n = t.fn.tab;
	t.fn.tab = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.tab");
			s || i.data("bs.tab", s = new e(this)), "string" == typeof n && s[n]()
		})
	}, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
		return t.fn.tab = n, this
	}, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
		e.preventDefault(), t(this).tab("show")
	})
}(jQuery), +
function(t) {
	"use strict";
	var e = function(n, i) {
			this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
		};
	e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
		offset: 0
	}, e.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(e.RESET).addClass("affix");
		var t = this.$window.scrollTop(),
			n = this.$element.offset();
		return this.pinnedOffset = n.top - t
	}, e.prototype.checkPositionWithEventLoop = function() {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, e.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var n = t(document).height(),
				i = this.$window.scrollTop(),
				s = this.$element.offset(),
				o = this.options.offset,
				a = o.top,
				r = o.bottom;
			"top" == this.affixed && (s.top += i), "object" != typeof o && (r = a = o), "function" == typeof a && (a = o.top(this.$element)), "function" == typeof r && (r = o.bottom(this.$element));
			var l = null != this.unpin && i + this.unpin <= s.top ? !1 : null != r && s.top + this.$element.height() >= n - r ? "bottom" : null != a && a >= i ? "top" : !1;
			if (this.affixed !== l) {
				this.unpin && this.$element.css("top", "");
				var c = "affix" + (l ? "-" + l : ""),
					h = t.Event(c + ".bs.affix");
				this.$element.trigger(h), h.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
					top: n - r - this.$element.height()
				}))
			}
		}
	};
	var n = t.fn.affix;
	t.fn.affix = function(n) {
		return this.each(function() {
			var i = t(this),
				s = i.data("bs.affix"),
				o = "object" == typeof n && n;
			s || i.data("bs.affix", s = new e(this, o)), "string" == typeof n && s[n]()
		})
	}, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
		return t.fn.affix = n, this
	}, t(window).on("load", function() {
		t('[data-spy="affix"]').each(function() {
			var e = t(this),
				n = e.data();
			n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
		})
	})
}(jQuery), function(t) {
	t.color = {}, t.color.make = function(e, n, i, s) {
		var o = {};
		return o.r = e || 0, o.g = n || 0, o.b = i || 0, o.a = null != s ? s : 1, o.add = function(t, e) {
			for (var n = 0; n < t.length; ++n) o[t.charAt(n)] += e;
			return o.normalize()
		}, o.scale = function(t, e) {
			for (var n = 0; n < t.length; ++n) o[t.charAt(n)] *= e;
			return o.normalize()
		}, o.toString = function() {
			return o.a >= 1 ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
		}, o.normalize = function() {
			function t(t, e, n) {
				return t > e ? t : e > n ? n : e
			}
			return o.r = t(0, parseInt(o.r), 255), o.g = t(0, parseInt(o.g), 255), o.b = t(0, parseInt(o.b), 255), o.a = t(0, o.a, 1), o
		}, o.clone = function() {
			return t.color.make(o.r, o.b, o.g, o.a)
		}, o.normalize()
	}, t.color.extract = function(e, n) {
		var i;
		do {
			if (i = e.css(n).toLowerCase(), "" != i && "transparent" != i) break;
			e = e.parent()
		} while (e.length && !t.nodeName(e.get(0), "body"));
		return "rgba(0, 0, 0, 0)" == i && (i = "transparent"), t.color.parse(i)
	}, t.color.parse = function(n) {
		var i, s = t.color.make;
		if (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return s(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
		if (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return s(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4]));
		if (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return s(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]));
		if (i = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return s(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]), parseFloat(i[4]));
		if (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return s(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16));
		if (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return s(parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16));
		var o = t.trim(n).toLowerCase();
		return "transparent" == o ? s(255, 255, 255, 0) : (i = e[o] || [0, 0, 0], s(i[0], i[1], i[2]))
	};
	var e = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0]
	}
}(jQuery), function(t) {
	function e(e, n) {
		var i = n.children("." + e)[0];
		if (null == i && (i = document.createElement("canvas"), i.className = e, t(i).css({
			direction: "ltr",
			position: "absolute",
			left: 0,
			top: 0
		}).appendTo(n), !i.getContext)) {
			if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
			i = window.G_vmlCanvasManager.initElement(i)
		}
		this.element = i;
		var s = this.context = i.getContext("2d"),
			o = window.devicePixelRatio || 1,
			a = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
		this.pixelRatio = o / a, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
	}
	function n(n, s, o, a) {
		function r(t, e) {
			e = [me].concat(e);
			for (var n = 0; n < t.length; ++n) t[n].apply(this, e)
		}
		function l() {
			for (var n = {
				Canvas: e
			}, i = 0; i < a.length; ++i) {
				var s = a[i];
				s.init(me, n), s.options && t.extend(!0, se, s.options)
			}
		}
		function c(e) {
			t.extend(!0, se, e), e && e.colors && (se.colors = e.colors), null == se.xaxis.color && (se.xaxis.color = t.color.parse(se.grid.color).scale("a", .22).toString()), null == se.yaxis.color && (se.yaxis.color = t.color.parse(se.grid.color).scale("a", .22).toString()), null == se.xaxis.tickColor && (se.xaxis.tickColor = se.grid.tickColor || se.xaxis.color), null == se.yaxis.tickColor && (se.yaxis.tickColor = se.grid.tickColor || se.yaxis.color), null == se.grid.borderColor && (se.grid.borderColor = se.grid.color), null == se.grid.tickColor && (se.grid.tickColor = t.color.parse(se.grid.color).scale("a", .22).toString());
			var i, s, o, a = n.css("font-size"),
				l = a ? +a.replace("px", "") : 13,
				c = {
					style: n.css("font-style"),
					size: Math.round(.8 * l),
					variant: n.css("font-variant"),
					weight: n.css("font-weight"),
					family: n.css("font-family")
				};
			for (o = se.xaxes.length || 1, i = 0; o > i; ++i) s = se.xaxes[i], s && !s.tickColor && (s.tickColor = s.color), s = t.extend(!0, {}, se.xaxis, s), se.xaxes[i] = s, s.font && (s.font = t.extend({}, c, s.font), s.font.color || (s.font.color = s.color), s.font.lineHeight || (s.font.lineHeight = Math.round(1.15 * s.font.size)));
			for (o = se.yaxes.length || 1, i = 0; o > i; ++i) s = se.yaxes[i], s && !s.tickColor && (s.tickColor = s.color), s = t.extend(!0, {}, se.yaxis, s), se.yaxes[i] = s, s.font && (s.font = t.extend({}, c, s.font), s.font.color || (s.font.color = s.color), s.font.lineHeight || (s.font.lineHeight = Math.round(1.15 * s.font.size)));
			for (se.xaxis.noTicks && null == se.xaxis.ticks && (se.xaxis.ticks = se.xaxis.noTicks), se.yaxis.noTicks && null == se.yaxis.ticks && (se.yaxis.ticks = se.yaxis.noTicks), se.x2axis && (se.xaxes[1] = t.extend(!0, {}, se.xaxis, se.x2axis), se.xaxes[1].position = "top"), se.y2axis && (se.yaxes[1] = t.extend(!0, {}, se.yaxis, se.y2axis), se.yaxes[1].position = "right"), se.grid.coloredAreas && (se.grid.markings = se.grid.coloredAreas), se.grid.coloredAreasColor && (se.grid.markingsColor = se.grid.coloredAreasColor), se.lines && t.extend(!0, se.series.lines, se.lines), se.points && t.extend(!0, se.series.points, se.points), se.bars && t.extend(!0, se.series.bars, se.bars), null != se.shadowSize && (se.series.shadowSize = se.shadowSize), null != se.highlightColor && (se.series.highlightColor = se.highlightColor), i = 0; i < se.xaxes.length; ++i) m(he, i + 1).options = se.xaxes[i];
			for (i = 0; i < se.yaxes.length; ++i) m(ue, i + 1).options = se.yaxes[i];
			for (var h in ge) se.hooks[h] && se.hooks[h].length && (ge[h] = ge[h].concat(se.hooks[h]));
			r(ge.processOptions, [se])
		}
		function h(t) {
			ie = u(t), v(), b()
		}
		function u(e) {
			for (var n = [], i = 0; i < e.length; ++i) {
				var s = t.extend(!0, {}, se.series);
				null != e[i].data ? (s.data = e[i].data, delete e[i].data, t.extend(!0, s, e[i]), e[i].data = s.data) : s.data = e[i], n.push(s)
			}
			return n
		}
		function d(t, e) {
			var n = t[e + "axis"];
			return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
		}
		function f() {
			return t.grep(he.concat(ue), function(t) {
				return t
			})
		}
		function p(t) {
			var e, n, i = {};
			for (e = 0; e < he.length; ++e) n = he[e], n && n.used && (i["x" + n.n] = n.c2p(t.left));
			for (e = 0; e < ue.length; ++e) n = ue[e], n && n.used && (i["y" + n.n] = n.c2p(t.top));
			return void 0 !== i.x1 && (i.x = i.x1), void 0 !== i.y1 && (i.y = i.y1), i
		}
		function g(t) {
			var e, n, i, s = {};
			for (e = 0; e < he.length; ++e) if (n = he[e], n && n.used && (i = "x" + n.n, null == t[i] && 1 == n.n && (i = "x"), null != t[i])) {
				s.left = n.p2c(t[i]);
				break
			}
			for (e = 0; e < ue.length; ++e) if (n = ue[e], n && n.used && (i = "y" + n.n, null == t[i] && 1 == n.n && (i = "y"), null != t[i])) {
				s.top = n.p2c(t[i]);
				break
			}
			return s
		}
		function m(e, n) {
			return e[n - 1] || (e[n - 1] = {
				n: n,
				direction: e == he ? "x" : "y",
				options: t.extend(!0, {}, e == he ? se.xaxis : se.yaxis)
			}), e[n - 1]
		}
		function v() {
			var e, n = ie.length,
				i = -1;
			for (e = 0; e < ie.length; ++e) {
				var s = ie[e].color;
				null != s && (n--, "number" == typeof s && s > i && (i = s))
			}
			i >= n && (n = i + 1);
			var o, a = [],
				r = se.colors,
				l = r.length,
				c = 0;
			for (e = 0; n > e; e++) o = t.color.parse(r[e % l] || "#666"), e % l == 0 && e && (c = c >= 0 ? .5 > c ? -c - .2 : 0 : -c), a[e] = o.scale("rgb", 1 + c);
			var h, u = 0;
			for (e = 0; e < ie.length; ++e) {
				if (h = ie[e], null == h.color ? (h.color = a[u].toString(), ++u) : "number" == typeof h.color && (h.color = a[h.color].toString()), null == h.lines.show) {
					var f, p = !0;
					for (f in h) if (h[f] && h[f].show) {
						p = !1;
						break
					}
					p && (h.lines.show = !0)
				}
				null == h.lines.zero && (h.lines.zero = !! h.lines.fill), h.xaxis = m(he, d(h, "x")), h.yaxis = m(ue, d(h, "y"))
			}
		}
		function b() {
			function e(t, e, n) {
				e < t.datamin && e != -b && (t.datamin = e), n > t.datamax && n != b && (t.datamax = n)
			}
			var n, i, s, o, a, l, c, h, u, d, p, g, m = Number.POSITIVE_INFINITY,
				v = Number.NEGATIVE_INFINITY,
				b = Number.MAX_VALUE;
			for (t.each(f(), function(t, e) {
				e.datamin = m, e.datamax = v, e.used = !1
			}), n = 0; n < ie.length; ++n) a = ie[n], a.datapoints = {
				points: []
			}, r(ge.processRawData, [a, a.data, a.datapoints]);
			for (n = 0; n < ie.length; ++n) {
				if (a = ie[n], p = a.data, g = a.datapoints.format, !g) {
					if (g = [], g.push({
						x: !0,
						number: !0,
						required: !0
					}), g.push({
						y: !0,
						number: !0,
						required: !0
					}), a.bars.show || a.lines.show && a.lines.fill) {
						var y = !! (a.bars.show && a.bars.zero || a.lines.show && a.lines.zero);
						g.push({
							y: !0,
							number: !0,
							required: !1,
							defaultValue: 0,
							autoscale: y
						}), a.bars.horizontal && (delete g[g.length - 1].y, g[g.length - 1].x = !0)
					}
					a.datapoints.format = g
				}
				if (null == a.datapoints.pointsize) {
					a.datapoints.pointsize = g.length, c = a.datapoints.pointsize, l = a.datapoints.points;
					var w = a.lines.show && a.lines.steps;
					for (a.xaxis.used = a.yaxis.used = !0, i = s = 0; i < p.length; ++i, s += c) {
						d = p[i];
						var x = null == d;
						if (!x) for (o = 0; c > o; ++o) h = d[o], u = g[o], u && (u.number && null != h && (h = +h, isNaN(h) ? h = null : 1 / 0 == h ? h = b : h == -1 / 0 && (h = -b)), null == h && (u.required && (x = !0), null != u.defaultValue && (h = u.defaultValue))), l[s + o] = h;
						if (x) for (o = 0; c > o; ++o) h = l[s + o], null != h && (u = g[o], u.autoscale !== !1 && (u.x && e(a.xaxis, h, h), u.y && e(a.yaxis, h, h))), l[s + o] = null;
						else if (w && s > 0 && null != l[s - c] && l[s - c] != l[s] && l[s - c + 1] != l[s + 1]) {
							for (o = 0; c > o; ++o) l[s + c + o] = l[s + o];
							l[s + 1] = l[s - c + 1], s += c
						}
					}
				}
			}
			for (n = 0; n < ie.length; ++n) a = ie[n], r(ge.processDatapoints, [a, a.datapoints]);
			for (n = 0; n < ie.length; ++n) {
				a = ie[n], l = a.datapoints.points, c = a.datapoints.pointsize, g = a.datapoints.format;
				var C = m,
					S = m,
					D = v,
					k = v;
				for (i = 0; i < l.length; i += c) if (null != l[i]) for (o = 0; c > o; ++o) h = l[i + o], u = g[o], u && u.autoscale !== !1 && h != b && h != -b && (u.x && (C > h && (C = h), h > D && (D = h)), u.y && (S > h && (S = h), h > k && (k = h)));
				if (a.bars.show) {
					var _;
					switch (a.bars.align) {
					case "left":
						_ = 0;
						break;
					case "right":
						_ = -a.bars.barWidth;
						break;
					default:
						_ = -a.bars.barWidth / 2
					}
					a.bars.horizontal ? (S += _, k += _ + a.bars.barWidth) : (C += _, D += _ + a.bars.barWidth)
				}
				e(a.xaxis, C, D), e(a.yaxis, S, k)
			}
			t.each(f(), function(t, e) {
				e.datamin == m && (e.datamin = null), e.datamax == v && (e.datamax = null)
			})
		}
		function y() {
			n.css("padding", 0).children().filter(function() {
				return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
			}).remove(), "static" == n.css("position") && n.css("position", "relative"), oe = new e("flot-base", n), ae = new e("flot-overlay", n), le = oe.context, ce = ae.context, re = t(ae.element).unbind();
			var i = n.data("plot");
			i && (i.shutdown(), ae.clear()), n.data("plot", me)
		}
		function w() {
			se.grid.hoverable && (re.mousemove(q), re.bind("mouseleave", Y)), se.grid.clickable && re.click(V), r(ge.bindEvents, [re])
		}
		function x() {
			be && clearTimeout(be), re.unbind("mousemove", q), re.unbind("mouseleave", Y), re.unbind("click", V), r(ge.shutdown, [re])
		}
		function C(t) {
			function e(t) {
				return t
			}
			var n, i, s = t.options.transform || e,
				o = t.options.inverseTransform;
			"x" == t.direction ? (n = t.scale = fe / Math.abs(s(t.max) - s(t.min)), i = Math.min(s(t.max), s(t.min))) : (n = t.scale = pe / Math.abs(s(t.max) - s(t.min)), n = -n, i = Math.max(s(t.max), s(t.min))), t.p2c = s == e ?
			function(t) {
				return (t - i) * n
			} : function(t) {
				return (s(t) - i) * n
			}, t.c2p = o ?
			function(t) {
				return o(i + t / n)
			} : function(t) {
				return i + t / n
			}
		}
		function S(t) {
			for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, s = e.labelHeight || 0, o = i || ("x" == t.direction ? Math.floor(oe.width / (n.length || 1)) : null), a = t.direction + "Axis " + t.direction + t.n + "Axis", r = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + a, l = e.font || "flot-tick-label tickLabel", c = 0; c < n.length; ++c) {
				var h = n[c];
				if (h.label) {
					var u = oe.getTextInfo(r, h.label, l, null, o);
					i = Math.max(i, u.width), s = Math.max(s, u.height)
				}
			}
			t.labelWidth = e.labelWidth || i, t.labelHeight = e.labelHeight || s
		}
		function D(e) {
			var n = e.labelWidth,
				i = e.labelHeight,
				s = e.options.position,
				o = "x" === e.direction,
				a = e.options.tickLength,
				r = se.grid.axisMargin,
				l = se.grid.labelMargin,
				c = !0,
				h = !0,
				u = !0,
				d = !1;
			t.each(o ? he : ue, function(t, n) {
				n && n.reserveSpace && (n === e ? d = !0 : n.options.position === s && (d ? h = !1 : c = !1), d || (u = !1))
			}), h && (r = 0), null == a && (a = u ? "full" : 5), isNaN(+a) || (l += +a), o ? (i += l, "bottom" == s ? (de.bottom += i + r, e.box = {
				top: oe.height - de.bottom,
				height: i
			}) : (e.box = {
				top: de.top + r,
				height: i
			}, de.top += i + r)) : (n += l, "left" == s ? (e.box = {
				left: de.left + r,
				width: n
			}, de.left += n + r) : (de.right += n + r, e.box = {
				left: oe.width - de.right,
				width: n
			})), e.position = s, e.tickLength = a, e.box.padding = l, e.innermost = c
		}
		function k(t) {
			"x" == t.direction ? (t.box.left = de.left - t.labelWidth / 2, t.box.width = oe.width - de.left - de.right + t.labelWidth) : (t.box.top = de.top - t.labelHeight / 2, t.box.height = oe.height - de.bottom - de.top + t.labelHeight)
		}
		function _() {
			var e, n = se.grid.minBorderMargin;
			if (null == n) for (n = 0, e = 0; e < ie.length; ++e) n = Math.max(n, 2 * (ie[e].points.radius + ie[e].points.lineWidth / 2));
			var i = {
				left: n,
				right: n,
				top: n,
				bottom: n
			};
			t.each(f(), function(t, e) {
				if (e.reserveSpace && e.ticks && e.ticks.length) {
					var n = e.ticks[e.ticks.length - 1];
					"x" === e.direction ? (i.left = Math.max(i.left, e.labelWidth / 2), n.v <= e.max && (i.right = Math.max(i.right, e.labelWidth / 2))) : (i.bottom = Math.max(i.bottom, e.labelHeight / 2), n.v <= e.max && (i.top = Math.max(i.top, e.labelHeight / 2)))
				}
			}), de.left = Math.ceil(Math.max(i.left, de.left)), de.right = Math.ceil(Math.max(i.right, de.right)), de.top = Math.ceil(Math.max(i.top, de.top)), de.bottom = Math.ceil(Math.max(i.bottom, de.bottom))
		}
		function T() {
			var e, n = f(),
				i = se.grid.show;
			for (var s in de) {
				var o = se.grid.margin || 0;
				de[s] = "number" == typeof o ? o : o[s] || 0
			}
			r(ge.processOffset, [de]);
			for (var s in de) de[s] += "object" == typeof se.grid.borderWidth ? i ? se.grid.borderWidth[s] : 0 : i ? se.grid.borderWidth : 0;
			if (t.each(n, function(t, e) {
				e.show = e.options.show, null == e.show && (e.show = e.used), e.reserveSpace = e.show || e.options.reserveSpace, M(e)
			}), i) {
				var a = t.grep(n, function(t) {
					return t.reserveSpace
				});
				for (t.each(a, function(t, e) {
					E(e), F(e), N(e, e.ticks), S(e)
				}), e = a.length - 1; e >= 0; --e) D(a[e]);
				_(), t.each(a, function(t, e) {
					k(e)
				})
			}
			fe = oe.width - de.left - de.right, pe = oe.height - de.bottom - de.top, t.each(n, function(t, e) {
				C(e)
			}), i && O(), B()
		}
		function M(t) {
			var e = t.options,
				n = +(null != e.min ? e.min : t.datamin),
				i = +(null != e.max ? e.max : t.datamax),
				s = i - n;
			if (0 == s) {
				var o = 0 == i ? 1 : .01;
				null == e.min && (n -= o), (null == e.max || null != e.min) && (i += o)
			} else {
				var a = e.autoscaleMargin;
				null != a && (null == e.min && (n -= s * a, 0 > n && null != t.datamin && t.datamin >= 0 && (n = 0)), null == e.max && (i += s * a, i > 0 && null != t.datamax && t.datamax <= 0 && (i = 0)))
			}
			t.min = n, t.max = i
		}
		function E(e) {
			var n, s = e.options;
			n = "number" == typeof s.ticks && s.ticks > 0 ? s.ticks : .3 * Math.sqrt("x" == e.direction ? oe.width : oe.height);
			var o = (e.max - e.min) / n,
				a = -Math.floor(Math.log(o) / Math.LN10),
				r = s.tickDecimals;
			null != r && a > r && (a = r);
			var l, c = Math.pow(10, -a),
				h = o / c;
			if (1.5 > h ? l = 1 : 3 > h ? (l = 2, h > 2.25 && (null == r || r >= a + 1) && (l = 2.5, ++a)) : l = 7.5 > h ? 5 : 10, l *= c, null != s.minTickSize && l < s.minTickSize && (l = s.minTickSize), e.delta = o, e.tickDecimals = Math.max(0, null != r ? r : a), e.tickSize = s.tickSize || l, "time" == s.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
			if (e.tickGenerator || (e.tickGenerator = function(t) {
				var e, n = [],
					s = i(t.min, t.tickSize),
					o = 0,
					a = Number.NaN;
				do e = a, a = s + o * t.tickSize, n.push(a), ++o;
				while (a < t.max && a != e);
				return n
			}, e.tickFormatter = function(t, e) {
				var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
					i = "" + Math.round(t * n) / n;
				if (null != e.tickDecimals) {
					var s = i.indexOf("."),
						o = -1 == s ? 0 : i.length - s - 1;
					if (o < e.tickDecimals) return (o ? i : i + ".") + ("" + n).substr(1, e.tickDecimals - o)
				}
				return i
			}), t.isFunction(s.tickFormatter) && (e.tickFormatter = function(t, e) {
				return "" + s.tickFormatter(t, e)
			}), null != s.alignTicksWithAxis) {
				var u = ("x" == e.direction ? he : ue)[s.alignTicksWithAxis - 1];
				if (u && u.used && u != e) {
					var d = e.tickGenerator(e);
					if (d.length > 0 && (null == s.min && (e.min = Math.min(e.min, d[0])), null == s.max && d.length > 1 && (e.max = Math.max(e.max, d[d.length - 1]))), e.tickGenerator = function(t) {
						var e, n, i = [];
						for (n = 0; n < u.ticks.length; ++n) e = (u.ticks[n].v - u.min) / (u.max - u.min), e = t.min + e * (t.max - t.min), i.push(e);
						return i
					}, !e.mode && null == s.tickDecimals) {
						var f = Math.max(0, -Math.floor(Math.log(e.delta) / Math.LN10) + 1),
							p = e.tickGenerator(e);
						p.length > 1 && /\..*0$/.test((p[1] - p[0]).toFixed(f)) || (e.tickDecimals = f)
					}
				}
			}
		}
		function F(e) {
			var n = e.options.ticks,
				i = [];
			null == n || "number" == typeof n && n > 0 ? i = e.tickGenerator(e) : n && (i = t.isFunction(n) ? n(e) : n);
			var s, o;
			for (e.ticks = [], s = 0; s < i.length; ++s) {
				var a = null,
					r = i[s];
				"object" == typeof r ? (o = +r[0], r.length > 1 && (a = r[1])) : o = +r, null == a && (a = e.tickFormatter(o, e)), isNaN(o) || e.ticks.push({
					v: o,
					label: a
				})
			}
		}
		function N(t, e) {
			t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
		}
		function A() {
			oe.clear(), r(ge.drawBackground, [le]);
			var t = se.grid;
			t.show && t.backgroundColor && L(), t.show && !t.aboveData && P();
			for (var e = 0; e < ie.length; ++e) r(ge.drawSeries, [le, ie[e]]), H(ie[e]);
			r(ge.draw, [le]), t.show && t.aboveData && P(), oe.render(), G()
		}
		function I(t, e) {
			for (var n, i, s, o, a = f(), r = 0; r < a.length; ++r) if (n = a[r], n.direction == e && (o = e + n.n + "axis", t[o] || 1 != n.n || (o = e + "axis"), t[o])) {
				i = t[o].from, s = t[o].to;
				break
			}
			if (t[o] || (n = "x" == e ? he[0] : ue[0], i = t[e + "1"], s = t[e + "2"]), null != i && null != s && i > s) {
				var l = i;
				i = s, s = l
			}
			return {
				from: i,
				to: s,
				axis: n
			}
		}
		function L() {
			le.save(), le.translate(de.left, de.top), le.fillStyle = ne(se.grid.backgroundColor, pe, 0, "rgba(255, 255, 255, 0)"), le.fillRect(0, 0, fe, pe), le.restore()
		}
		function P() {
			var e, n, i, s;
			le.save(), le.translate(de.left, de.top);
			var o = se.grid.markings;
			if (o) for (t.isFunction(o) && (n = me.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, o = o(n)), e = 0; e < o.length; ++e) {
				var a = o[e],
					r = I(a, "x"),
					l = I(a, "y");
				null == r.from && (r.from = r.axis.min), null == r.to && (r.to = r.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), r.to < r.axis.min || r.from > r.axis.max || l.to < l.axis.min || l.from > l.axis.max || (r.from = Math.max(r.from, r.axis.min), r.to = Math.min(r.to, r.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), (r.from != r.to || l.from != l.to) && (r.from = r.axis.p2c(r.from), r.to = r.axis.p2c(r.to), l.from = l.axis.p2c(l.from), l.to = l.axis.p2c(l.to), r.from == r.to || l.from == l.to ? (le.beginPath(), le.strokeStyle = a.color || se.grid.markingsColor, le.lineWidth = a.lineWidth || se.grid.markingsLineWidth, le.moveTo(r.from, l.from), le.lineTo(r.to, l.to), le.stroke()) : (le.fillStyle = a.color || se.grid.markingsColor, le.fillRect(r.from, l.to, r.to - r.from, l.from - l.to))))
			}
			n = f(), i = se.grid.borderWidth;
			for (var c = 0; c < n.length; ++c) {
				var h, u, d, p, g = n[c],
					m = g.box,
					v = g.tickLength;
				if (g.show && 0 != g.ticks.length) {
					for (le.lineWidth = 1, "x" == g.direction ? (h = 0, u = "full" == v ? "top" == g.position ? 0 : pe : m.top - de.top + ("top" == g.position ? m.height : 0)) : (u = 0, h = "full" == v ? "left" == g.position ? 0 : fe : m.left - de.left + ("left" == g.position ? m.width : 0)), g.innermost || (le.strokeStyle = g.options.color, le.beginPath(), d = p = 0, "x" == g.direction ? d = fe + 1 : p = pe + 1, 1 == le.lineWidth && ("x" == g.direction ? u = Math.floor(u) + .5 : h = Math.floor(h) + .5), le.moveTo(h, u), le.lineTo(h + d, u + p), le.stroke()), le.strokeStyle = g.options.tickColor, le.beginPath(), e = 0; e < g.ticks.length; ++e) {
						var b = g.ticks[e].v;
						d = p = 0, isNaN(b) || b < g.min || b > g.max || "full" == v && ("object" == typeof i && i[g.position] > 0 || i > 0) && (b == g.min || b == g.max) || ("x" == g.direction ? (h = g.p2c(b), p = "full" == v ? -pe : v, "top" == g.position && (p = -p)) : (u = g.p2c(b), d = "full" == v ? -fe : v, "left" == g.position && (d = -d)), 1 == le.lineWidth && ("x" == g.direction ? h = Math.floor(h) + .5 : u = Math.floor(u) + .5), le.moveTo(h, u), le.lineTo(h + d, u + p))
					}
					le.stroke()
				}
			}
			i && (s = se.grid.borderColor, "object" == typeof i || "object" == typeof s ? ("object" != typeof i && (i = {
				top: i,
				right: i,
				bottom: i,
				left: i
			}), "object" != typeof s && (s = {
				top: s,
				right: s,
				bottom: s,
				left: s
			}), i.top > 0 && (le.strokeStyle = s.top, le.lineWidth = i.top, le.beginPath(), le.moveTo(0 - i.left, 0 - i.top / 2), le.lineTo(fe, 0 - i.top / 2), le.stroke()), i.right > 0 && (le.strokeStyle = s.right, le.lineWidth = i.right, le.beginPath(), le.moveTo(fe + i.right / 2, 0 - i.top), le.lineTo(fe + i.right / 2, pe), le.stroke()), i.bottom > 0 && (le.strokeStyle = s.bottom, le.lineWidth = i.bottom, le.beginPath(), le.moveTo(fe + i.right, pe + i.bottom / 2), le.lineTo(0, pe + i.bottom / 2), le.stroke()), i.left > 0 && (le.strokeStyle = s.left, le.lineWidth = i.left, le.beginPath(), le.moveTo(0 - i.left / 2, pe + i.bottom), le.lineTo(0 - i.left / 2, 0), le.stroke())) : (le.lineWidth = i, le.strokeStyle = se.grid.borderColor, le.strokeRect(-i / 2, -i / 2, fe + i, pe + i))), le.restore()
		}
		function O() {
			t.each(f(), function(t, e) {
				var n, i, s, o, a, r = e.box,
					l = e.direction + "Axis " + e.direction + e.n + "Axis",
					c = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
					h = e.options.font || "flot-tick-label tickLabel";
				if (oe.removeText(c), e.show && 0 != e.ticks.length) for (var u = 0; u < e.ticks.length; ++u) n = e.ticks[u], !n.label || n.v < e.min || n.v > e.max || ("x" == e.direction ? (o = "center", i = de.left + e.p2c(n.v), "bottom" == e.position ? s = r.top + r.padding : (s = r.top + r.height - r.padding, a = "bottom")) : (a = "middle", s = de.top + e.p2c(n.v), "left" == e.position ? (i = r.left + r.width - r.padding, o = "right") : i = r.left + r.padding), oe.addText(c, i, s, n.label, h, null, null, o, a))
			})
		}
		function H(t) {
			t.lines.show && R(t), t.bars.show && j(t), t.points.show && z(t)
		}
		function R(t) {
			function e(t, e, n, i, s) {
				var o = t.points,
					a = t.pointsize,
					r = null,
					l = null;
				le.beginPath();
				for (var c = a; c < o.length; c += a) {
					var h = o[c - a],
						u = o[c - a + 1],
						d = o[c],
						f = o[c + 1];
					if (null != h && null != d) {
						if (f >= u && u < s.min) {
							if (f < s.min) continue;
							h = (s.min - u) / (f - u) * (d - h) + h, u = s.min
						} else if (u >= f && f < s.min) {
							if (u < s.min) continue;
							d = (s.min - u) / (f - u) * (d - h) + h, f = s.min
						}
						if (u >= f && u > s.max) {
							if (f > s.max) continue;
							h = (s.max - u) / (f - u) * (d - h) + h, u = s.max
						} else if (f >= u && f > s.max) {
							if (u > s.max) continue;
							d = (s.max - u) / (f - u) * (d - h) + h, f = s.max
						}
						if (d >= h && h < i.min) {
							if (d < i.min) continue;
							u = (i.min - h) / (d - h) * (f - u) + u, h = i.min
						} else if (h >= d && d < i.min) {
							if (h < i.min) continue;
							f = (i.min - h) / (d - h) * (f - u) + u, d = i.min
						}
						if (h >= d && h > i.max) {
							if (d > i.max) continue;
							u = (i.max - h) / (d - h) * (f - u) + u, h = i.max
						} else if (d >= h && d > i.max) {
							if (h > i.max) continue;
							f = (i.max - h) / (d - h) * (f - u) + u, d = i.max
						}(h != r || u != l) && le.moveTo(i.p2c(h) + e, s.p2c(u) + n), r = d, l = f, le.lineTo(i.p2c(d) + e, s.p2c(f) + n)
					}
				}
				le.stroke()
			}
			function n(t, e, n) {
				for (var i = t.points, s = t.pointsize, o = Math.min(Math.max(0, n.min), n.max), a = 0, r = !1, l = 1, c = 0, h = 0;;) {
					if (s > 0 && a > i.length + s) break;
					a += s;
					var u = i[a - s],
						d = i[a - s + l],
						f = i[a],
						p = i[a + l];
					if (r) {
						if (s > 0 && null != u && null == f) {
							h = a, s = -s, l = 2;
							continue
						}
						if (0 > s && a == c + s) {
							le.fill(), r = !1, s = -s, l = 1, a = c = h + s;
							continue
						}
					}
					if (null != u && null != f) {
						if (f >= u && u < e.min) {
							if (f < e.min) continue;
							d = (e.min - u) / (f - u) * (p - d) + d, u = e.min
						} else if (u >= f && f < e.min) {
							if (u < e.min) continue;
							p = (e.min - u) / (f - u) * (p - d) + d, f = e.min
						}
						if (u >= f && u > e.max) {
							if (f > e.max) continue;
							d = (e.max - u) / (f - u) * (p - d) + d, u = e.max
						} else if (f >= u && f > e.max) {
							if (u > e.max) continue;
							p = (e.max - u) / (f - u) * (p - d) + d, f = e.max
						}
						if (r || (le.beginPath(), le.moveTo(e.p2c(u), n.p2c(o)), r = !0), d >= n.max && p >= n.max) le.lineTo(e.p2c(u), n.p2c(n.max)), le.lineTo(e.p2c(f), n.p2c(n.max));
						else if (d <= n.min && p <= n.min) le.lineTo(e.p2c(u), n.p2c(n.min)), le.lineTo(e.p2c(f), n.p2c(n.min));
						else {
							var g = u,
								m = f;
							p >= d && d < n.min && p >= n.min ? (u = (n.min - d) / (p - d) * (f - u) + u, d = n.min) : d >= p && p < n.min && d >= n.min && (f = (n.min - d) / (p - d) * (f - u) + u, p = n.min), d >= p && d > n.max && p <= n.max ? (u = (n.max - d) / (p - d) * (f - u) + u, d = n.max) : p >= d && p > n.max && d <= n.max && (f = (n.max - d) / (p - d) * (f - u) + u, p = n.max), u != g && le.lineTo(e.p2c(g), n.p2c(d)), le.lineTo(e.p2c(u), n.p2c(d)), le.lineTo(e.p2c(f), n.p2c(p)), f != m && (le.lineTo(e.p2c(f), n.p2c(p)), le.lineTo(e.p2c(m), n.p2c(p)))
						}
					}
				}
			}
			le.save(), le.translate(de.left, de.top), le.lineJoin = "round";
			var i = t.lines.lineWidth,
				s = t.shadowSize;
			if (i > 0 && s > 0) {
				le.lineWidth = s, le.strokeStyle = "rgba(0,0,0,0.1)";
				var o = Math.PI / 18;
				e(t.datapoints, Math.sin(o) * (i / 2 + s / 2), Math.cos(o) * (i / 2 + s / 2), t.xaxis, t.yaxis), le.lineWidth = s / 2, e(t.datapoints, Math.sin(o) * (i / 2 + s / 4), Math.cos(o) * (i / 2 + s / 4), t.xaxis, t.yaxis)
			}
			le.lineWidth = i, le.strokeStyle = t.color;
			var a = W(t.lines, t.color, 0, pe);
			a && (le.fillStyle = a, n(t.datapoints, t.xaxis, t.yaxis)), i > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), le.restore()
		}
		function z(t) {
			function e(t, e, n, i, s, o, a, r) {
				for (var l = t.points, c = t.pointsize, h = 0; h < l.length; h += c) {
					var u = l[h],
						d = l[h + 1];
					null == u || u < o.min || u > o.max || d < a.min || d > a.max || (le.beginPath(), u = o.p2c(u), d = a.p2c(d) + i, "circle" == r ? le.arc(u, d, e, 0, s ? Math.PI : 2 * Math.PI, !1) : r(le, u, d, e, s), le.closePath(), n && (le.fillStyle = n, le.fill()), le.stroke())
				}
			}
			le.save(), le.translate(de.left, de.top);
			var n = t.points.lineWidth,
				i = t.shadowSize,
				s = t.points.radius,
				o = t.points.symbol;
			if (0 == n && (n = 1e-4), n > 0 && i > 0) {
				var a = i / 2;
				le.lineWidth = a, le.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, s, null, a + a / 2, !0, t.xaxis, t.yaxis, o), le.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, s, null, a / 2, !0, t.xaxis, t.yaxis, o)
			}
			le.lineWidth = n, le.strokeStyle = t.color, e(t.datapoints, s, W(t.points, t.color), 0, !1, t.xaxis, t.yaxis, o), le.restore()
		}
		function $(t, e, n, i, s, o, a, r, l, c, h) {
			var u, d, f, p, g, m, v, b, y;
			c ? (b = m = v = !0, g = !1, u = n, d = t, p = e + i, f = e + s, u > d && (y = d, d = u, u = y, g = !0, m = !1)) : (g = m = v = !0, b = !1, u = t + i, d = t + s, f = n, p = e, f > p && (y = p, p = f, f = y, b = !0, v = !1)), d < a.min || u > a.max || p < r.min || f > r.max || (u < a.min && (u = a.min, g = !1), d > a.max && (d = a.max, m = !1), f < r.min && (f = r.min, b = !1), p > r.max && (p = r.max, v = !1), u = a.p2c(u), f = r.p2c(f), d = a.p2c(d), p = r.p2c(p), o && (l.fillStyle = o(f, p), l.fillRect(u, p, d - u, f - p)), h > 0 && (g || m || v || b) && (l.beginPath(), l.moveTo(u, f), g ? l.lineTo(u, p) : l.moveTo(u, p), v ? l.lineTo(d, p) : l.moveTo(d, p), m ? l.lineTo(d, f) : l.moveTo(d, f), b ? l.lineTo(u, f) : l.moveTo(u, f), l.stroke()))
		}
		function j(t) {
			function e(e, n, i, s, o, a) {
				for (var r = e.points, l = e.pointsize, c = 0; c < r.length; c += l) null != r[c] && $(r[c], r[c + 1], r[c + 2], n, i, s, o, a, le, t.bars.horizontal, t.bars.lineWidth)
			}
			le.save(), le.translate(de.left, de.top), le.lineWidth = t.bars.lineWidth, le.strokeStyle = t.color;
			var n;
			switch (t.bars.align) {
			case "left":
				n = 0;
				break;
			case "right":
				n = -t.bars.barWidth;
				break;
			default:
				n = -t.bars.barWidth / 2
			}
			var i = t.bars.fill ?
			function(e, n) {
				return W(t.bars, t.color, e, n)
			} : null;
			e(t.datapoints, n, n + t.bars.barWidth, i, t.xaxis, t.yaxis), le.restore()
		}
		function W(e, n, i, s) {
			var o = e.fill;
			if (!o) return null;
			if (e.fillColor) return ne(e.fillColor, i, s, n);
			var a = t.color.parse(n);
			return a.a = "number" == typeof o ? o : .4, a.normalize(), a.toString()
		}
		function B() {
			if (null != se.legend.container ? t(se.legend.container).html("") : n.find(".legend").remove(), se.legend.show) {
				for (var e, i, s = [], o = [], a = !1, r = se.legend.labelFormatter, l = 0; l < ie.length; ++l) e = ie[l], e.label && (i = r ? r(e.label, e) : e.label, i && o.push({
					label: i,
					color: e.color
				}));
				if (se.legend.sorted) if (t.isFunction(se.legend.sorted)) o.sort(se.legend.sorted);
				else if ("reverse" == se.legend.sorted) o.reverse();
				else {
					var c = "descending" != se.legend.sorted;
					o.sort(function(t, e) {
						return t.label == e.label ? 0 : t.label < e.label != c ? 1 : -1
					})
				}
				for (var l = 0; l < o.length; ++l) {
					var h = o[l];
					l % se.legend.noColumns == 0 && (a && s.push("</tr>"), s.push("<tr>"), a = !0), s.push('<td class="legendColorBox"><div style="border:1px solid ' + se.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + h.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + h.label + "</td>")
				}
				if (a && s.push("</tr>"), 0 != s.length) {
					var u = '<table style="font-size:smaller;color:' + se.grid.color + '">' + s.join("") + "</table>";
					if (null != se.legend.container) t(se.legend.container).html(u);
					else {
						var d = "",
							f = se.legend.position,
							p = se.legend.margin;
						null == p[0] && (p = [p, p]), "n" == f.charAt(0) ? d += "top:" + (p[1] + de.top) + "px;" : "s" == f.charAt(0) && (d += "bottom:" + (p[1] + de.bottom) + "px;"), "e" == f.charAt(1) ? d += "right:" + (p[0] + de.right) + "px;" : "w" == f.charAt(1) && (d += "left:" + (p[0] + de.left) + "px;");
						var g = t('<div class="legend">' + u.replace('style="', 'style="position:absolute;' + d + ";") + "</div>").appendTo(n);
						if (0 != se.legend.backgroundOpacity) {
							var m = se.legend.backgroundColor;
							null == m && (m = se.grid.backgroundColor, m = m && "string" == typeof m ? t.color.parse(m) : t.color.extract(g, "background-color"), m.a = 1, m = m.toString());
							var v = g.children();
							t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + d + "background-color:" + m + ';"> </div>').prependTo(g).css("opacity", se.legend.backgroundOpacity)
						}
					}
				}
			}
		}
		function U(t, e, n) {
			var i, s, o, a = se.grid.mouseActiveRadius,
				r = a * a + 1,
				l = null;
			for (i = ie.length - 1; i >= 0; --i) if (n(ie[i])) {
				var c = ie[i],
					h = c.xaxis,
					u = c.yaxis,
					d = c.datapoints.points,
					f = h.c2p(t),
					p = u.c2p(e),
					g = a / h.scale,
					m = a / u.scale;
				if (o = c.datapoints.pointsize, h.options.inverseTransform && (g = Number.MAX_VALUE), u.options.inverseTransform && (m = Number.MAX_VALUE), c.lines.show || c.points.show) for (s = 0; s < d.length; s += o) {
					var v = d[s],
						b = d[s + 1];
					if (null != v && !(v - f > g || -g > v - f || b - p > m || -m > b - p)) {
						var y = Math.abs(h.p2c(v) - t),
							w = Math.abs(u.p2c(b) - e),
							x = y * y + w * w;
						r > x && (r = x, l = [i, s / o])
					}
				}
				if (c.bars.show && !l) {
					var C, S;
					switch (c.bars.align) {
					case "left":
						C = 0;
						break;
					case "right":
						C = -c.bars.barWidth;
						break;
					default:
						C = -c.bars.barWidth / 2
					}
					for (S = C + c.bars.barWidth, s = 0; s < d.length; s += o) {
						var v = d[s],
							b = d[s + 1],
							D = d[s + 2];
						null != v && (ie[i].bars.horizontal ? f <= Math.max(D, v) && f >= Math.min(D, v) && p >= b + C && b + S >= p : f >= v + C && v + S >= f && p >= Math.min(D, b) && p <= Math.max(D, b)) && (l = [i, s / o])
					}
				}
			}
			return l ? (i = l[0], s = l[1], o = ie[i].datapoints.pointsize, {
				datapoint: ie[i].datapoints.points.slice(s * o, (s + 1) * o),
				dataIndex: s,
				series: ie[i],
				seriesIndex: i
			}) : null
		}
		function q(t) {
			se.grid.hoverable && X("plothover", t, function(t) {
				return 0 != t.hoverable
			})
		}
		function Y(t) {
			se.grid.hoverable && X("plothover", t, function() {
				return !1
			})
		}
		function V(t) {
			X("plotclick", t, function(t) {
				return 0 != t.clickable
			})
		}
		function X(t, e, i) {
			var s = re.offset(),
				o = e.pageX - s.left - de.left,
				a = e.pageY - s.top - de.top,
				r = p({
					left: o,
					top: a
				});
			r.pageX = e.pageX, r.pageY = e.pageY;
			var l = U(o, a, i);
			if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + s.left + de.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + s.top + de.top, 10)), se.grid.autoHighlight) {
				for (var c = 0; c < ve.length; ++c) {
					var h = ve[c];
					h.auto != t || l && h.series == l.series && h.point[0] == l.datapoint[0] && h.point[1] == l.datapoint[1] || Z(h.series, h.point)
				}
				l && K(l.series, l.datapoint, t)
			}
			n.trigger(t, [r, l])
		}
		function G() {
			var t = se.interaction.redrawOverlayInterval;
			return -1 == t ? void J() : void(be || (be = setTimeout(J, t)))
		}
		function J() {
			be = null, ce.save(), ae.clear(), ce.translate(de.left, de.top);
			var t, e;
			for (t = 0; t < ve.length; ++t) e = ve[t], e.series.bars.show ? ee(e.series, e.point) : te(e.series, e.point);
			ce.restore(), r(ge.drawOverlay, [ce])
		}
		function K(t, e, n) {
			if ("number" == typeof t && (t = ie[t]), "number" == typeof e) {
				var i = t.datapoints.pointsize;
				e = t.datapoints.points.slice(i * e, i * (e + 1))
			}
			var s = Q(t, e); - 1 == s ? (ve.push({
				series: t,
				point: e,
				auto: n
			}), G()) : n || (ve[s].auto = !1)
		}
		function Z(t, e) {
			if (null == t && null == e) return ve = [], void G();
			if ("number" == typeof t && (t = ie[t]), "number" == typeof e) {
				var n = t.datapoints.pointsize;
				e = t.datapoints.points.slice(n * e, n * (e + 1))
			}
			var i = Q(t, e); - 1 != i && (ve.splice(i, 1), G())
		}
		function Q(t, e) {
			for (var n = 0; n < ve.length; ++n) {
				var i = ve[n];
				if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1]) return n
			}
			return -1
		}
		function te(e, n) {
			var i = n[0],
				s = n[1],
				o = e.xaxis,
				a = e.yaxis,
				r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
			if (!(i < o.min || i > o.max || s < a.min || s > a.max)) {
				var l = e.points.radius + e.points.lineWidth / 2;
				ce.lineWidth = l, ce.strokeStyle = r;
				var c = 1.5 * l;
				i = o.p2c(i), s = a.p2c(s), ce.beginPath(), "circle" == e.points.symbol ? ce.arc(i, s, c, 0, 2 * Math.PI, !1) : e.points.symbol(ce, i, s, c, !1), ce.closePath(), ce.stroke()
			}
		}
		function ee(e, n) {
			var i, s = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
				o = s;
			switch (e.bars.align) {
			case "left":
				i = 0;
				break;
			case "right":
				i = -e.bars.barWidth;
				break;
			default:
				i = -e.bars.barWidth / 2
			}
			ce.lineWidth = e.bars.lineWidth, ce.strokeStyle = s, $(n[0], n[1], n[2] || 0, i, i + e.bars.barWidth, function() {
				return o
			}, e.xaxis, e.yaxis, ce, e.bars.horizontal, e.bars.lineWidth)
		}
		function ne(e, n, i, s) {
			if ("string" == typeof e) return e;
			for (var o = le.createLinearGradient(0, i, 0, n), a = 0, r = e.colors.length; r > a; ++a) {
				var l = e.colors[a];
				if ("string" != typeof l) {
					var c = t.color.parse(s);
					null != l.brightness && (c = c.scale("rgb", l.brightness)), null != l.opacity && (c.a *= l.opacity), l = c.toString()
				}
				o.addColorStop(a / (r - 1), l)
			}
			return o
		}
		var ie = [],
			se = {
				colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
				legend: {
					show: !0,
					noColumns: 1,
					labelFormatter: null,
					labelBoxBorderColor: "#ccc",
					container: null,
					position: "ne",
					margin: 5,
					backgroundColor: null,
					backgroundOpacity: .85,
					sorted: null
				},
				xaxis: {
					show: null,
					position: "bottom",
					mode: null,
					font: null,
					color: null,
					tickColor: null,
					transform: null,
					inverseTransform: null,
					min: null,
					max: null,
					autoscaleMargin: null,
					ticks: null,
					tickFormatter: null,
					labelWidth: null,
					labelHeight: null,
					reserveSpace: null,
					tickLength: null,
					alignTicksWithAxis: null,
					tickDecimals: null,
					tickSize: null,
					minTickSize: null
				},
				yaxis: {
					autoscaleMargin: .02,
					position: "left"
				},
				xaxes: [],
				yaxes: [],
				series: {
					points: {
						show: !1,
						radius: 3,
						lineWidth: 2,
						fill: !0,
						fillColor: "#ffffff",
						symbol: "circle"
					},
					lines: {
						lineWidth: 2,
						fill: !1,
						fillColor: null,
						steps: !1
					},
					bars: {
						show: !1,
						lineWidth: 2,
						barWidth: 1,
						fill: !0,
						fillColor: null,
						align: "left",
						horizontal: !1,
						zero: !0
					},
					shadowSize: 3,
					highlightColor: null
				},
				grid: {
					show: !0,
					aboveData: !1,
					color: "#545454",
					backgroundColor: null,
					borderColor: null,
					tickColor: null,
					margin: 0,
					labelMargin: 5,
					axisMargin: 8,
					borderWidth: 2,
					minBorderMargin: null,
					markings: null,
					markingsColor: "#f4f4f4",
					markingsLineWidth: 2,
					clickable: !1,
					hoverable: !1,
					autoHighlight: !0,
					mouseActiveRadius: 10
				},
				interaction: {
					redrawOverlayInterval: 1e3 / 60
				},
				hooks: {}
			},
			oe = null,
			ae = null,
			re = null,
			le = null,
			ce = null,
			he = [],
			ue = [],
			de = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			},
			fe = 0,
			pe = 0,
			ge = {
				processOptions: [],
				processRawData: [],
				processDatapoints: [],
				processOffset: [],
				drawBackground: [],
				drawSeries: [],
				draw: [],
				bindEvents: [],
				drawOverlay: [],
				shutdown: []
			},
			me = this;
		me.setData = h, me.setupGrid = T, me.draw = A, me.getPlaceholder = function() {
			return n
		}, me.getCanvas = function() {
			return oe.element
		}, me.getPlotOffset = function() {
			return de
		}, me.width = function() {
			return fe
		}, me.height = function() {
			return pe
		}, me.offset = function() {
			var t = re.offset();
			return t.left += de.left, t.top += de.top, t
		}, me.getData = function() {
			return ie
		}, me.getAxes = function() {
			var e = {};
			return t.each(he.concat(ue), function(t, n) {
				n && (e[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
			}), e
		}, me.getXAxes = function() {
			return he
		}, me.getYAxes = function() {
			return ue
		}, me.c2p = p, me.p2c = g, me.getOptions = function() {
			return se
		}, me.highlight = K, me.unhighlight = Z, me.triggerRedrawOverlay = G, me.pointOffset = function(t) {
			return {
				left: parseInt(he[d(t, "x") - 1].p2c(+t.x) + de.left, 10),
				top: parseInt(ue[d(t, "y") - 1].p2c(+t.y) + de.top, 10)
			}
		}, me.shutdown = x, me.destroy = function() {
			x(), n.removeData("plot").empty(), ie = [], se = null, oe = null, ae = null, re = null, le = null, ce = null, he = [], ue = [], ge = null, ve = [], me = null
		}, me.resize = function() {
			var t = n.width(),
				e = n.height();
			oe.resize(t, e), ae.resize(t, e)
		}, me.hooks = ge, l(me), c(o), y(), h(s), T(), A(), w();
		var ve = [],
			be = null
	}
	function i(t, e) {
		return e * Math.floor(t / e)
	}
	var s = Object.prototype.hasOwnProperty;
	e.prototype.resize = function(t, e) {
		if (0 >= t || 0 >= e) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
		var n = this.element,
			i = this.context,
			s = this.pixelRatio;
		this.width != t && (n.width = t * s, n.style.width = t + "px", this.width = t), this.height != e && (n.height = e * s, n.style.height = e + "px", this.height = e), i.restore(), i.save(), i.scale(s, s)
	}, e.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height)
	}, e.prototype.render = function() {
		var t = this._textCache;
		for (var e in t) if (s.call(t, e)) {
			var n = this.getTextLayer(e),
				i = t[e];
			n.hide();
			for (var o in i) if (s.call(i, o)) {
				var a = i[o];
				for (var r in a) if (s.call(a, r)) {
					for (var l, c = a[r].positions, h = 0; l = c[h]; h++) l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (c.splice(h--, 1), l.rendered && l.element.detach());
					0 == c.length && delete a[r]
				}
			}
			n.show()
		}
	}, e.prototype.getTextLayer = function(e) {
		var n = this.text[e];
		return null == n && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			"font-size": "smaller",
			color: "#545454"
		}).insertAfter(this.element)), n = this.text[e] = t("<div></div>").addClass(e).css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		}).appendTo(this.textContainer)), n
	}, e.prototype.getTextInfo = function(e, n, i, s, o) {
		var a, r, l, c;
		if (n = "" + n, a = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i, r = this._textCache[e], null == r && (r = this._textCache[e] = {}), l = r[a], null == l && (l = r[a] = {}), c = l[n], null == c) {
			var h = t("<div></div>").html(n).css({
				position: "absolute",
				"max-width": o,
				top: -9999
			}).appendTo(this.getTextLayer(e));
			"object" == typeof i ? h.css({
				font: a,
				color: i.color
			}) : "string" == typeof i && h.addClass(i), c = l[n] = {
				width: h.outerWidth(!0),
				height: h.outerHeight(!0),
				element: h,
				positions: []
			}, h.detach()
		}
		return c
	}, e.prototype.addText = function(t, e, n, i, s, o, a, r, l) {
		var c = this.getTextInfo(t, i, s, o, a),
			h = c.positions;
		"center" == r ? e -= c.width / 2 : "right" == r && (e -= c.width), "middle" == l ? n -= c.height / 2 : "bottom" == l && (n -= c.height);
		for (var u, d = 0; u = h[d]; d++) if (u.x == e && u.y == n) return void(u.active = !0);
		u = {
			active: !0,
			rendered: !1,
			element: h.length ? c.element.clone() : c.element,
			x: e,
			y: n
		}, h.push(u), u.element.css({
			top: Math.round(n),
			left: Math.round(e),
			"text-align": r
		})
	}, e.prototype.removeText = function(t, e, n, i, o, a) {
		if (null == i) {
			var r = this._textCache[t];
			if (null != r) for (var l in r) if (s.call(r, l)) {
				var c = r[l];
				for (var h in c) if (s.call(c, h)) for (var u, d = c[h].positions, f = 0; u = d[f]; f++) u.active = !1
			}
		} else for (var u, d = this.getTextInfo(t, i, o, a).positions, f = 0; u = d[f]; f++) u.x == e && u.y == n && (u.active = !1)
	}, t.plot = function(e, i, s) {
		var o = new n(t(e), i, s, t.plot.plugins);
		return o
	}, t.plot.version = "0.8.2", t.plot.plugins = [], t.fn.plot = function(e, n) {
		return this.each(function() {
			t.plot(this, e, n)
		})
	}
}(jQuery), function(t) {
	function e(t, e) {
		return e * Math.floor(t / e)
	}
	function n(t, e, n, i) {
		if ("function" == typeof t.strftime) return t.strftime(e);
		var s = function(t, e) {
				return t = "" + t, e = "" + (null == e ? "0" : e), 1 == t.length ? e + t : t
			},
			o = [],
			a = !1,
			r = t.getHours(),
			l = 12 > r;
		null == n && (n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == i && (i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
		var c;
		c = r > 12 ? r - 12 : 0 == r ? 12 : r;
		for (var h = 0; h < e.length; ++h) {
			var u = e.charAt(h);
			if (a) {
				switch (u) {
				case "a":
					u = "" + i[t.getDay()];
					break;
				case "b":
					u = "" + n[t.getMonth()];
					break;
				case "d":
					u = s(t.getDate());
					break;
				case "e":
					u = s(t.getDate(), " ");
					break;
				case "h":
				case "H":
					u = s(r);
					break;
				case "I":
					u = s(c);
					break;
				case "l":
					u = s(c, " ");
					break;
				case "m":
					u = s(t.getMonth() + 1);
					break;
				case "M":
					u = s(t.getMinutes());
					break;
				case "q":
					u = "" + (Math.floor(t.getMonth() / 3) + 1);
					break;
				case "S":
					u = s(t.getSeconds());
					break;
				case "y":
					u = s(t.getFullYear() % 100);
					break;
				case "Y":
					u = "" + t.getFullYear();
					break;
				case "p":
					u = l ? "am" : "pm";
					break;
				case "P":
					u = l ? "AM" : "PM";
					break;
				case "w":
					u = "" + t.getDay()
				}
				o.push(u), a = !1
			} else "%" == u ? a = !0 : o.push(u)
		}
		return o.join("")
	}
	function i(t) {
		function e(t, e, n, i) {
			t[e] = function() {
				return n[i].apply(n, arguments)
			}
		}
		var n = {
			date: t
		};
		void 0 != t.strftime && e(n, "strftime", t, "strftime"), e(n, "getTime", t, "getTime"), e(n, "setTime", t, "setTime");
		for (var i = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], s = 0; s < i.length; s++) e(n, "get" + i[s], t, "getUTC" + i[s]), e(n, "set" + i[s], t, "setUTC" + i[s]);
		return n
	}
	function s(t, e) {
		if ("browser" == e.timezone) return new Date(t);
		if (e.timezone && "utc" != e.timezone) {
			if ("undefined" != typeof timezoneJS && "undefined" != typeof timezoneJS.Date) {
				var n = new timezoneJS.Date;
				return n.setTimezone(e.timezone), n.setTime(t), n
			}
			return i(new Date(t))
		}
		return i(new Date(t))
	}
	function o(i) {
		i.hooks.processOptions.push(function(i) {
			t.each(i.getAxes(), function(t, i) {
				var o = i.options;
				"time" == o.mode && (i.tickGenerator = function(t) {
					var n = [],
						i = s(t.min, o),
						a = 0,
						l = o.tickSize && "quarter" === o.tickSize[1] || o.minTickSize && "quarter" === o.minTickSize[1] ? h : c;
					null != o.minTickSize && (a = "number" == typeof o.tickSize ? o.tickSize : o.minTickSize[0] * r[o.minTickSize[1]]);
					for (var u = 0; u < l.length - 1 && !(t.delta < (l[u][0] * r[l[u][1]] + l[u + 1][0] * r[l[u + 1][1]]) / 2 && l[u][0] * r[l[u][1]] >= a); ++u);
					var d = l[u][0],
						f = l[u][1];
					if ("year" == f) {
						if (null != o.minTickSize && "year" == o.minTickSize[1]) d = Math.floor(o.minTickSize[0]);
						else {
							var p = Math.pow(10, Math.floor(Math.log(t.delta / r.year) / Math.LN10)),
								g = t.delta / r.year / p;
							d = 1.5 > g ? 1 : 3 > g ? 2 : 7.5 > g ? 5 : 10, d *= p
						}
						1 > d && (d = 1)
					}
					t.tickSize = o.tickSize || [d, f];
					var m = t.tickSize[0];
					f = t.tickSize[1];
					var v = m * r[f];
					"second" == f ? i.setSeconds(e(i.getSeconds(), m)) : "minute" == f ? i.setMinutes(e(i.getMinutes(), m)) : "hour" == f ? i.setHours(e(i.getHours(), m)) : "month" == f ? i.setMonth(e(i.getMonth(), m)) : "quarter" == f ? i.setMonth(3 * e(i.getMonth() / 3, m)) : "year" == f && i.setFullYear(e(i.getFullYear(), m)), i.setMilliseconds(0), v >= r.minute && i.setSeconds(0), v >= r.hour && i.setMinutes(0), v >= r.day && i.setHours(0), v >= 4 * r.day && i.setDate(1), v >= 2 * r.month && i.setMonth(e(i.getMonth(), 3)), v >= 2 * r.quarter && i.setMonth(e(i.getMonth(), 6)), v >= r.year && i.setMonth(0);
					var b, y = 0,
						w = Number.NaN;
					do
					if (b = w, w = i.getTime(), n.push(w), "month" == f || "quarter" == f) if (1 > m) {
						i.setDate(1);
						var x = i.getTime();
						i.setMonth(i.getMonth() + ("quarter" == f ? 3 : 1));
						var C = i.getTime();
						i.setTime(w + y * r.hour + (C - x) * m), y = i.getHours(), i.setHours(0)
					} else i.setMonth(i.getMonth() + m * ("quarter" == f ? 3 : 1));
					else "year" == f ? i.setFullYear(i.getFullYear() + m) : i.setTime(w + v);
					while (w < t.max && w != b);
					return n
				}, i.tickFormatter = function(t, e) {
					var i = s(t, e.options);
					if (null != o.timeformat) return n(i, o.timeformat, o.monthNames, o.dayNames);
					var a, l = e.options.tickSize && "quarter" == e.options.tickSize[1] || e.options.minTickSize && "quarter" == e.options.minTickSize[1],
						c = e.tickSize[0] * r[e.tickSize[1]],
						h = e.max - e.min,
						u = o.twelveHourClock ? " %p" : "",
						d = o.twelveHourClock ? "%I" : "%H";
					a = c < r.minute ? d + ":%M:%S" + u : c < r.day ? h < 2 * r.day ? d + ":%M" + u : "%b %d " + d + ":%M" + u : c < r.month ? "%b %d" : l && c < r.quarter || !l && c < r.year ? h < r.year ? "%b" : "%b %Y" : l && c < r.year ? h < r.year ? "Q%q" : "Q%q %Y" : "%Y";
					var f = n(i, a, o.monthNames, o.dayNames);
					return f
				})
			})
		})
	}
	var a = {
		xaxis: {
			timezone: null,
			timeformat: null,
			twelveHourClock: !1,
			monthNames: null
		}
	},
		r = {
			second: 1e3,
			minute: 6e4,
			hour: 36e5,
			day: 864e5,
			month: 2592e6,
			quarter: 7776e6,
			year: 525949.2 * 60 * 1e3
		},
		l = [
			[1, "second"],
			[2, "second"],
			[5, "second"],
			[10, "second"],
			[30, "second"],
			[1, "minute"],
			[2, "minute"],
			[5, "minute"],
			[10, "minute"],
			[30, "minute"],
			[1, "hour"],
			[2, "hour"],
			[4, "hour"],
			[8, "hour"],
			[12, "hour"],
			[1, "day"],
			[2, "day"],
			[3, "day"],
			[.25, "month"],
			[.5, "month"],
			[1, "month"],
			[2, "month"]
		],
		c = l.concat([
			[3, "month"],
			[6, "month"],
			[1, "year"]
		]),
		h = l.concat([
			[1, "quarter"],
			[2, "quarter"],
			[1, "year"]
		]);
	t.plot.plugins.push({
		init: o,
		options: a,
		name: "time",
		version: "1.0"
	}), t.plot.formatDate = n
}(jQuery), function(t) {
	function e(t, e, n, i) {
		var s = "categories" == e.xaxis.options.mode,
			o = "categories" == e.yaxis.options.mode;
		if (s || o) {
			var a = i.format;
			if (!a) {
				var r = e;
				if (a = [], a.push({
					x: !0,
					number: !0,
					required: !0
				}), a.push({
					y: !0,
					number: !0,
					required: !0
				}), r.bars.show || r.lines.show && r.lines.fill) {
					var l = !! (r.bars.show && r.bars.zero || r.lines.show && r.lines.zero);
					a.push({
						y: !0,
						number: !0,
						required: !1,
						defaultValue: 0,
						autoscale: l
					}), r.bars.horizontal && (delete a[a.length - 1].y, a[a.length - 1].x = !0)
				}
				i.format = a
			}
			for (var c = 0; c < a.length; ++c) a[c].x && s && (a[c].number = !1), a[c].y && o && (a[c].number = !1)
		}
	}
	function n(t) {
		var e = -1;
		for (var n in t) t[n] > e && (e = t[n]);
		return e + 1
	}
	function i(t) {
		var e = [];
		for (var n in t.categories) {
			var i = t.categories[n];
			i >= t.min && i <= t.max && e.push([i, n])
		}
		return e.sort(function(t, e) {
			return t[0] - e[0]
		}), e
	}
	function s(e, n, s) {
		if ("categories" == e[n].options.mode) {
			if (!e[n].categories) {
				var a = {},
					r = e[n].options.categories || {};
				if (t.isArray(r)) for (var l = 0; l < r.length; ++l) a[r[l]] = l;
				else for (var c in r) a[c] = r[c];
				e[n].categories = a
			}
			e[n].options.ticks || (e[n].options.ticks = i), o(s, n, e[n].categories)
		}
	}
	function o(t, e, i) {
		for (var s = t.points, o = t.pointsize, a = t.format, r = e.charAt(0), l = n(i), c = 0; c < s.length; c += o) if (null != s[c]) for (var h = 0; o > h; ++h) {
			var u = s[c + h];
			null != u && a[h][r] && (u in i || (i[u] = l, ++l), s[c + h] = i[u])
		}
	}
	function a(t, e, n) {
		s(e, "xaxis", n), s(e, "yaxis", n)
	}
	function r(t) {
		t.hooks.processRawData.push(e), t.hooks.processDatapoints.push(a)
	}
	var l = {
		xaxis: {
			categories: null
		},
		yaxis: {
			categories: null
		}
	};
	t.plot.plugins.push({
		init: r,
		options: l,
		name: "categories",
		version: "1.0"
	})
}(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
	if (void 0 === this || null === this) throw new TypeError('"this" is null or not defined');
	var n = this.length >>> 0;
	for (e = +e || 0, 1 / 0 === Math.abs(e) && (e = 0), 0 > e && (e += n, 0 > e && (e = 0)); n > e; e++) if (this[e] === t) return e;
	return -1
}), function(t) {
	var e = {
		tooltip: !1,
		tooltipOpts: {
			content: "%s | X: %x | Y: %y",
			xDateFormat: null,
			yDateFormat: null,
			monthNames: null,
			dayNames: null,
			shifts: {
				x: 10,
				y: 20
			},
			defaultTheme: !0,
			onHover: function() {}
		}
	},
		n = function(t) {
			this.tipPosition = {
				x: 0,
				y: 0
			}, this.init(t)
		};
	n.prototype.init = function(e) {
		function n(t) {
			var e = {};
			e.x = t.pageX, e.y = t.pageY, s.updateTooltipPosition(e)
		}
		function i(t, e, n) {
			var i = s.getDomElement();
			if (n) {
				var o;
				o = s.stringFormat(s.tooltipOptions.content, n), i.html(o), s.updateTooltipPosition({
					x: e.pageX,
					y: e.pageY
				}), i.css({
					left: s.tipPosition.x + s.tooltipOptions.shifts.x,
					top: s.tipPosition.y + s.tooltipOptions.shifts.y
				}).show(), "function" == typeof s.tooltipOptions.onHover && s.tooltipOptions.onHover(n, i)
			} else i.hide().html("")
		}
		var s = this,
			o = t.plot.plugins.length;
		if (this.plotPlugins = [], o) for (var a = 0; o > a; a++) this.plotPlugins.push(t.plot.plugins[a].name);
		e.hooks.bindEvents.push(function(e, o) {
			if (s.plotOptions = e.getOptions(), s.plotOptions.tooltip !== !1 && "undefined" != typeof s.plotOptions.tooltip) {
				s.tooltipOptions = s.plotOptions.tooltipOpts; {
					s.getDomElement()
				}
				t(e.getPlaceholder()).bind("plothover", i), t(o).bind("mousemove", n)
			}
		}), e.hooks.shutdown.push(function(e, s) {
			t(e.getPlaceholder()).unbind("plothover", i), t(s).unbind("mousemove", n)
		})
	}, n.prototype.getDomElement = function() {
		var e;
		return t("#flotTip").length > 0 ? e = t("#flotTip") : (e = t("<div />").attr("id", "flotTip"), e.appendTo("body").hide().css({
			position: "absolute"
		}), this.tooltipOptions.defaultTheme && e.css({
			background: "#fff",
			"z-index": "1040",
			padding: "0.4em 0.6em",
			"border-radius": "0.5em",
			"font-size": "0.8em",
			border: "1px solid #111",
			display: "none",
			"white-space": "nowrap"
		})), e
	}, n.prototype.updateTooltipPosition = function(e) {
		var n = t("#flotTip").outerWidth() + this.tooltipOptions.shifts.x,
			i = t("#flotTip").outerHeight() + this.tooltipOptions.shifts.y;
		e.x - t(window).scrollLeft() > t(window).innerWidth() - n && (e.x -= n), e.y - t(window).scrollTop() > t(window).innerHeight() - i && (e.y -= i), this.tipPosition.x = e.x, this.tipPosition.y = e.y
	}, n.prototype.stringFormat = function(t, e) {
		var n, i, s = /%p\.{0,1}(\d{0,})/,
			o = /%s/,
			a = /%lx/,
			r = /%ly/,
			l = /%x\.{0,1}(\d{0,})/,
			c = /%y\.{0,1}(\d{0,})/,
			h = "%x",
			u = "%y";
		if ("undefined" != typeof e.series.threshold ? (n = e.datapoint[0], i = e.datapoint[1]) : (n = e.series.data[e.dataIndex][0], i = e.series.data[e.dataIndex][1]), null === e.series.label && e.series.originSeries && (e.series.label = e.series.originSeries.label), "function" == typeof t && (t = t(e.series.label, n, i, e)), "undefined" != typeof e.series.percent && (t = this.adjustValPrecision(s, t, e.series.percent)), t = "undefined" != typeof e.series.label ? t.replace(o, e.series.label) : t.replace(o, ""), t = this.hasAxisLabel("xaxis", e) ? t.replace(a, e.series.xaxis.options.axisLabel) : t.replace(a, ""), t = this.hasAxisLabel("yaxis", e) ? t.replace(r, e.series.yaxis.options.axisLabel) : t.replace(r, ""), this.isTimeMode("xaxis", e) && this.isXDateFormat(e) && (t = t.replace(l, this.timestampToDate(n, this.tooltipOptions.xDateFormat))), this.isTimeMode("yaxis", e) && this.isYDateFormat(e) && (t = t.replace(c, this.timestampToDate(i, this.tooltipOptions.yDateFormat))), "number" == typeof n && (t = this.adjustValPrecision(l, t, n)), "number" == typeof i && (t = this.adjustValPrecision(c, t, i)), "undefined" != typeof e.series.xaxis.ticks) {
			var d;
			d = this.hasRotatedXAxisTicks(e) ? "rotatedTicks" : "ticks";
			var f = e.dataIndex + e.seriesIndex;
			e.series.xaxis[d].length > f && !this.isTimeMode("xaxis", e) && (t = t.replace(l, e.series.xaxis[d][f].label))
		}
		if ("undefined" != typeof e.series.yaxis.ticks) for (var p in e.series.yaxis.ticks) if (e.series.yaxis.ticks.hasOwnProperty(p)) {
			var g = this.isCategoriesMode("yaxis", e) ? e.series.yaxis.ticks[p].label : e.series.yaxis.ticks[p].v;
			g === i && (t = t.replace(c, e.series.yaxis.ticks[p].label))
		}
		return "undefined" != typeof e.series.xaxis.tickFormatter && (t = t.replace(h, e.series.xaxis.tickFormatter(n, e.series.xaxis).replace(/\$/g, "$$"))), "undefined" != typeof e.series.yaxis.tickFormatter && (t = t.replace(u, e.series.yaxis.tickFormatter(i, e.series.yaxis).replace(/\$/g, "$$"))), t
	}, n.prototype.isTimeMode = function(t, e) {
		return "undefined" != typeof e.series[t].options.mode && "time" === e.series[t].options.mode
	}, n.prototype.isXDateFormat = function() {
		return "undefined" != typeof this.tooltipOptions.xDateFormat && null !== this.tooltipOptions.xDateFormat
	}, n.prototype.isYDateFormat = function() {
		return "undefined" != typeof this.tooltipOptions.yDateFormat && null !== this.tooltipOptions.yDateFormat
	}, n.prototype.isCategoriesMode = function(t, e) {
		return "undefined" != typeof e.series[t].options.mode && "categories" === e.series[t].options.mode
	}, n.prototype.timestampToDate = function(e, n) {
		var i = new Date(1 * e);
		return t.plot.formatDate(i, n, this.tooltipOptions.monthNames, this.tooltipOptions.dayNames)
	}, n.prototype.adjustValPrecision = function(t, e, n) {
		var i, s = e.match(t);
		return null !== s && "" !== RegExp.$1 && (i = RegExp.$1, n = n.toFixed(i), e = e.replace(t, n)), e
	}, n.prototype.hasAxisLabel = function(t, e) {
		return -1 !== this.plotPlugins.indexOf("axisLabels") && "undefined" != typeof e.series[t].options.axisLabel && e.series[t].options.axisLabel.length > 0
	}, n.prototype.hasRotatedXAxisTicks = function(e) {
		return 1 === t.grep(t.plot.plugins, function(t) {
			return "tickRotor" === t.name
		}).length && "undefined" != typeof e.series.xaxis.rotatedTicks
	};
	var i = function(t) {
			new n(t)
		};
	t.plot.plugins.push({
		init: i,
		options: e,
		name: "tooltip",
		version: "0.6.7"
	})
}(jQuery), function() {
	var t, e = window.Messenger;
	t = window.Messenger = function() {
		return t._call.apply(this, arguments)
	}, window.Messenger.noConflict = function() {
		return window.Messenger = e, t
	}
}(), window.Messenger._ = function() {
	if (window._) return window._;
	var t = Array.prototype,
		e = Object.prototype,
		n = Function.prototype,
		i = (t.push, t.slice),
		s = (t.concat, e.toString);
	e.hasOwnProperty;
	var o = t.forEach,
		a = (t.map, t.reduce, t.reduceRight, t.filter),
		r = (t.every, t.some, t.indexOf, t.lastIndexOf, Array.isArray, Object.keys),
		l = n.bind,
		c = {},
		h = {},
		u = c.each = c.forEach = function(t, e, n) {
			if (null != t) if (o && t.forEach === o) t.forEach(e, n);
			else if (t.length === +t.length) {
				for (var i = 0, s = t.length; s > i; i++) if (e.call(n, t[i], i, t) === h) return
			} else for (var a in t) if (c.has(t, a) && e.call(n, t[a], a, t) === h) return
		};
	c.result = function(t, e) {
		if (null == t) return null;
		var n = t[e];
		return c.isFunction(n) ? n.call(t) : n
	}, c.once = function(t) {
		var e, n = !1;
		return function() {
			return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
		}
	};
	var d = 0;
	return c.uniqueId = function(t) {
		var e = ++d + "";
		return t ? t + e : e
	}, c.filter = c.select = function(t, e, n) {
		var i = [];
		return null == t ? i : a && t.filter === a ? t.filter(e, n) : (u(t, function(t, s, o) {
			e.call(n, t, s, o) && (i[i.length] = t)
		}), i)
	}, u(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
		c["is" + t] = function(e) {
			return s.call(e) == "[object " + t + "]"
		}
	}), c.defaults = function(t) {
		return u(i.call(arguments, 1), function(e) {
			if (e) for (var n in e) null == t[n] && (t[n] = e[n])
		}), t
	}, c.extend = function(t) {
		return u(i.call(arguments, 1), function(e) {
			if (e) for (var n in e) t[n] = e[n]
		}), t
	}, c.keys = r ||
	function(t) {
		if (t !== Object(t)) throw new TypeError("Invalid object");
		var e = [];
		for (var n in t) c.has(t, n) && (e[e.length] = n);
		return e
	}, c.bind = function(t, e) {
		if (t.bind === l && l) return l.apply(t, i.call(arguments, 1));
		var n = i.call(arguments, 2);
		return function() {
			return t.apply(e, n.concat(i.call(arguments)))
		}
	}, c.isObject = function(t) {
		return t === Object(t)
	}, c
}(), window.Messenger.Events = function() {
	if (window.Backbone && Backbone.Events) return Backbone.Events;
	var t = function() {
			var t = /\s+/,
				e = function(e, n, i, s) {
					if (!i) return !0;
					if ("object" == typeof i) for (var o in i) e[n].apply(e, [o, i[o]].concat(s));
					else {
						if (!t.test(i)) return !0;
						for (var a = i.split(t), r = 0, l = a.length; l > r; r++) e[n].apply(e, [a[r]].concat(s))
					}
				},
				n = function(t, e) {
					var n, i = -1,
						s = t.length;
					switch (e.length) {
					case 0:
						for (; s > ++i;)(n = t[i]).callback.call(n.ctx);
						return;
					case 1:
						for (; s > ++i;)(n = t[i]).callback.call(n.ctx, e[0]);
						return;
					case 2:
						for (; s > ++i;)(n = t[i]).callback.call(n.ctx, e[0], e[1]);
						return;
					case 3:
						for (; s > ++i;)(n = t[i]).callback.call(n.ctx, e[0], e[1], e[2]);
						return;
					default:
						for (; s > ++i;)(n = t[i]).callback.apply(n.ctx, e)
					}
				},
				i = {
					on: function(t, n, i) {
						if (!e(this, "on", t, [n, i]) || !n) return this;
						this._events || (this._events = {});
						var s = this._events[t] || (this._events[t] = []);
						return s.push({
							callback: n,
							context: i,
							ctx: i || this
						}), this
					},
					once: function(t, n, i) {
						if (!e(this, "once", t, [n, i]) || !n) return this;
						var s = this,
							o = _.once(function() {
								s.off(t, o), n.apply(this, arguments)
							});
						return o._callback = n, this.on(t, o, i), this
					},
					off: function(t, n, i) {
						var s, o, a, r, l, c, h, u;
						if (!this._events || !e(this, "off", t, [n, i])) return this;
						if (!t && !n && !i) return this._events = {}, this;
						for (r = t ? [t] : _.keys(this._events), l = 0, c = r.length; c > l; l++) if (t = r[l], s = this._events[t]) {
							if (a = [], n || i) for (h = 0, u = s.length; u > h; h++) o = s[h], (n && n !== o.callback && n !== o.callback._callback || i && i !== o.context) && a.push(o);
							this._events[t] = a
						}
						return this
					},
					trigger: function(t) {
						if (!this._events) return this;
						var i = Array.prototype.slice.call(arguments, 1);
						if (!e(this, "trigger", t, i)) return this;
						var s = this._events[t],
							o = this._events.all;
						return s && n(s, i), o && n(o, arguments), this
					},
					listenTo: function(t, e, n) {
						var i = this._listeners || (this._listeners = {}),
							s = t._listenerId || (t._listenerId = _.uniqueId("l"));
						return i[s] = t, t.on(e, "object" == typeof e ? this : n, this), this
					},
					stopListening: function(t, e, n) {
						var i = this._listeners;
						if (i) {
							if (t) t.off(e, "object" == typeof e ? this : n, this), e || n || delete i[t._listenerId];
							else {
								"object" == typeof e && (n = this);
								for (var s in i) i[s].off(e, n, this);
								this._listeners = {}
							}
							return this
						}
					}
				};
			return i.bind = i.on, i.unbind = i.off, i
		};
	return t()
}(), function() {
	var t, e, n, i, s, o, a, r, l, c, h, u = {}.hasOwnProperty,
		d = function(t, e) {
			function n() {
				this.constructor = t
			}
			for (var i in e) u.call(e, i) && (t[i] = e[i]);
			return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
		},
		f = [].slice,
		p = [].indexOf ||
	function(t) {
		for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
		return -1
	};
	t = jQuery, o = null != (l = window._) ? l : window.Messenger._, i = null != (c = "undefined" != typeof Backbone && null !== Backbone ? Backbone.Events : void 0) ? c : window.Messenger.Events, n = function() {
		function e(e) {
			t.extend(this, i), o.isObject(e) && (e.el && this.setElement(e.el), this.model = e.model), this.initialize.apply(this, arguments)
		}
		return e.prototype.setElement = function(e) {
			return this.$el = t(e), this.el = this.$el[0]
		}, e.prototype.delegateEvents = function(t) {
			var e, n, i, s, a, r, l;
			if (t || (t = o.result(this, "events"))) {
				this.undelegateEvents(), e = /^(\S+)\s*(.*)$/, l = [];
				for (i in t) {
					if (a = t[i], o.isFunction(a) || (a = this[t[i]]), !a) throw Error('Method "' + t[i] + '" does not exist');
					s = i.match(e), n = s[1], r = s[2], a = o.bind(a, this), n += ".delegateEvents" + this.cid, l.push("" === r ? this.jqon(n, a) : this.jqon(n, r, a))
				}
				return l
			}
		}, e.prototype.jqon = function(t, e, n) {
			var i;
			return null != this.$el.on ? (i = this.$el).on.apply(i, arguments) : (null == n && (n = e, e = void 0), null != e ? this.$el.delegate(e, t, n) : this.$el.bind(t, n))
		}, e.prototype.jqoff = function(t) {
			var e;
			return null != this.$el.off ? (e = this.$el).off.apply(e, arguments) : (this.$el.undelegate(), this.$el.unbind(t))
		}, e.prototype.undelegateEvents = function() {
			return this.jqoff(".delegateEvents" + this.cid)
		}, e.prototype.remove = function() {
			return this.undelegateEvents(), this.$el.remove()
		}, e
	}(), a = function(e) {
		function n() {
			return n.__super__.constructor.apply(this, arguments)
		}
		return d(n, e), n.prototype.defaults = {
			hideAfter: 10,
			scroll: !0,
			closeButtonText: "&times;"
		}, n.prototype.initialize = function(e) {
			return null == e && (e = {}), this.shown = !1, this.rendered = !1, this.messenger = e.messenger, this.options = t.extend({}, this.options, e, this.defaults)
		}, n.prototype.show = function() {
			var t;
			return this.rendered || this.render(), this.$message.removeClass("messenger-hidden"), t = this.shown, this.shown = !0, t ? void 0 : this.trigger("show")
		}, n.prototype.hide = function() {
			var t;
			return this.rendered ? (this.$message.addClass("messenger-hidden"), t = this.shown, this.shown = !1, t ? this.trigger("hide") : void 0) : void 0
		}, n.prototype.cancel = function() {
			return this.hide()
		}, n.prototype.update = function(e) {
			var n, i = this;
			return o.isString(e) && (e = {
				message: e
			}), t.extend(this.options, e), this.lastUpdate = new Date, this.rendered = !1, this.events = null != (n = this.options.events) ? n : {}, this.render(), this.actionsToEvents(), this.delegateEvents(), this.checkClickable(), this.options.hideAfter ? (this.$message.addClass("messenger-will-hide-after"), null != this._hideTimeout && clearTimeout(this._hideTimeout), this._hideTimeout = setTimeout(function() {
				return i.hide()
			}, 1e3 * this.options.hideAfter)) : this.$message.removeClass("messenger-will-hide-after"), this.options.hideOnNavigate ? (this.$message.addClass("messenger-will-hide-on-navigate"), null != ("undefined" != typeof Backbone && null !== Backbone ? Backbone.history : void 0) && Backbone.history.on("route", function() {
				return i.hide()
			})) : this.$message.removeClass("messenger-will-hide-on-navigate"), this.trigger("update", this)
		}, n.prototype.scrollTo = function() {
			return this.options.scroll ? t.scrollTo(this.$el, {
				duration: 400,
				offset: {
					left: 0,
					top: -20
				}
			}) : void 0
		}, n.prototype.timeSinceUpdate = function() {
			return this.lastUpdate ? new Date - this.lastUpdate : null
		}, n.prototype.actionsToEvents = function() {
			var t, e, n, i, s = this;
			n = this.options.actions, i = [];
			for (e in n) t = n[e], i.push(this.events['click [data-action="' + e + '"] a'] = function(t) {
				return function(n) {
					return n.preventDefault(), n.stopPropagation(), s.trigger("action:" + e, t, n), t.action.call(s, n, s)
				}
			}(t));
			return i
		}, n.prototype.checkClickable = function() {
			var t, e, n, i;
			n = this.events, i = [];
			for (e in n) t = n[e], i.push("click" === e ? this.$message.addClass("messenger-clickable") : void 0);
			return i
		}, n.prototype.undelegateEvents = function() {
			var t;
			return n.__super__.undelegateEvents.apply(this, arguments), null != (t = this.$message) ? t.removeClass("messenger-clickable") : void 0
		}, n.prototype.parseActions = function() {
			var e, n, i, s, o, a;
			n = [], o = this.options.actions;
			for (s in o) e = o[s], i = t.extend({}, e), i.name = s, null == (a = i.label) && (i.label = s), n.push(i);
			return n
		}, n.prototype.template = function(e) {
			var n, i, s, o, a, r, l, c, h, u, d = this;
			for (a = t("<div class='messenger-message message alert " + e.type + " message-" + e.type + " alert-" + e.type + "'>"), e.showCloseButton && (s = t('<button type="button" class="messenger-close" data-dismiss="alert">'), s.html(e.closeButtonText), s.click(function() {
				return d.cancel(), !0
			}), a.append(s)), r = t('<div class="messenger-message-inner">' + e.message + "</div>"), a.append(r), e.actions.length && (i = t('<div class="messenger-actions">')), u = e.actions, c = 0, h = u.length; h > c; c++) l = u[c], n = t("<span>"), n.attr("data-action", "" + l.name), o = t("<a>"), o.html(l.label), n.append(t('<span class="messenger-phrase">')), n.append(o), i.append(n);
			return a.append(i), a
		}, n.prototype.render = function() {
			var e;
			return this.rendered ? void 0 : (this._hasSlot || (this.setElement(this.messenger._reserveMessageSlot(this)), this._hasSlot = !0), e = t.extend({}, this.options, {
				actions: this.parseActions()
			}), this.$message = t(this.template(e)), this.$el.html(this.$message), this.shown = !0, this.rendered = !0, this.trigger("render"))
		}, n
	}(n), s = function(t) {
		function e() {
			return e.__super__.constructor.apply(this, arguments)
		}
		return d(e, t), e.prototype.initialize = function() {
			return e.__super__.initialize.apply(this, arguments), this._timers = {}
		}, e.prototype.cancel = function() {
			return this.clearTimers(), this.hide(), null != this._actionInstance && null != this._actionInstance.abort ? this._actionInstance.abort() : void 0
		}, e.prototype.clearTimers = function() {
			var t, e, n, i;
			n = this._timers;
			for (t in n) e = n[t], clearTimeout(e);
			return this._timers = {}, null != (i = this.$message) ? i.removeClass("messenger-retry-soon messenger-retry-later") : void 0
		}, e.prototype.render = function() {
			var t, n, i, s;
			e.__super__.render.apply(this, arguments), this.clearTimers(), i = this.options.actions, s = [];
			for (n in i) t = i[n], s.push(t.auto ? this.startCountdown(n, t) : void 0);
			return s
		}, e.prototype.renderPhrase = function(t, e) {
			var n;
			return n = t.phrase.replace("TIME", this.formatTime(e))
		}, e.prototype.formatTime = function(t) {
			var e;
			return e = function(t, e) {
				return t = Math.floor(t), 1 !== t && (e += "s"), "in " + t + " " + e
			}, 0 === Math.floor(t) ? "now..." : 60 > t ? e(t, "second") : (t /= 60, 60 > t ? e(t, "minute") : (t /= 60, e(t, "hour")))
		}, e.prototype.startCountdown = function(t, e) {
			var n, i, s, o, a = this;
			return null == this._timers[t] ? (n = this.$message.find("[data-action='" + t + "'] .messenger-phrase"), i = null != (o = e.delay) ? o : 3, 10 >= i ? (this.$message.removeClass("messenger-retry-later"), this.$message.addClass("messenger-retry-soon")) : (this.$message.removeClass("messenger-retry-soon"), this.$message.addClass("messenger-retry-later")), (s = function() {
				var o;
				return n.text(a.renderPhrase(e, i)), i > 0 ? (o = Math.min(i, 1), i -= o, a._timers[t] = setTimeout(s, 1e3 * o)) : (a.$message.removeClass("messenger-retry-soon messenger-retry-later"), delete a._timers[t], e.action())
			})()) : void 0
		}, e
	}(a), r = function(e) {
		function n() {
			return n.__super__.constructor.apply(this, arguments)
		}
		return d(n, e), n.prototype.tagName = "ul", n.prototype.className = "messenger", n.prototype.messageDefaults = {
			type: "info"
		}, n.prototype.initialize = function(e) {
			return this.options = null != e ? e : {}, this.history = [], this.messageDefaults = t.extend({}, this.messageDefaults, this.options.messageDefaults)
		}, n.prototype.render = function() {
			return this.updateMessageSlotClasses()
		}, n.prototype.findById = function(t) {
			return o.filter(this.history, function(e) {
				return e.msg.options.id === t
			})
		}, n.prototype._reserveMessageSlot = function(e) {
			var n, i, s = this;
			for (n = t("<li>"), n.addClass("messenger-message-slot"), this.$el.prepend(n), this.history.push({
				msg: e,
				$slot: n
			}), this._enforceIdConstraint(e), e.on("update", function() {
				return s._enforceIdConstraint(e)
			}); this.options.maxMessages && this.history.length > this.options.maxMessages;) i = this.history.shift(), i.msg.remove(), i.$slot.remove();
			return n
		}, n.prototype._enforceIdConstraint = function(t) {
			var e, n, i, s, o;
			if (null != t.options.id) for (o = this.history, n = 0, i = o.length; i > n; n++) if (e = o[n], s = e.msg, null != s.options.id && s.options.id === t.options.id && t !== s) {
				if (t.options.singleton) return void t.hide();
				s.hide()
			}
		}, n.prototype.newMessage = function(t) {
			var e, n, i, o, r = this;
			return null == t && (t = {}), t.messenger = this, a = null != (n = null != (i = Messenger.themes[null != (o = t.theme) ? o : this.options.theme]) ? i.Message : void 0) ? n : s, e = new a(t), e.on("show", function() {
				return t.scrollTo && "fixed" !== r.$el.css("position") ? e.scrollTo() : void 0
			}), e.on("hide show render", this.updateMessageSlotClasses, this), e
		}, n.prototype.updateMessageSlotClasses = function() {
			var t, e, n, i, s, o, a;
			for (i = !0, e = null, t = !1, a = this.history, s = 0, o = a.length; o > s; s++) n = a[s], n.$slot.removeClass("messenger-first messenger-last messenger-shown"), n.msg.shown && n.msg.rendered && (n.$slot.addClass("messenger-shown"), t = !0, e = n, i && (i = !1, n.$slot.addClass("messenger-first")));
			return null != e && e.$slot.addClass("messenger-last"), this.$el["" + (t ? "remove" : "add") + "Class"]("messenger-empty")
		}, n.prototype.hideAll = function() {
			var t, e, n, i, s;
			for (i = this.history, s = [], e = 0, n = i.length; n > e; e++) t = i[e], s.push(t.msg.hide());
			return s
		}, n.prototype.post = function(e) {
			var n;
			return o.isString(e) && (e = {
				message: e
			}), e = t.extend(!0, {}, this.messageDefaults, e), n = this.newMessage(e), n.update(e), n
		}, n
	}(n), e = function(e) {
		function n() {
			return n.__super__.constructor.apply(this, arguments)
		}
		return d(n, e), n.prototype.doDefaults = {
			progressMessage: null,
			successMessage: null,
			errorMessage: "Error connecting to the server.",
			showSuccessWithoutError: !0,
			retry: {
				auto: !0,
				allow: !0
			},
			action: t.ajax
		}, n.prototype.hookBackboneAjax = function(e) {
			var n, i = this;
			if (null == e && (e = {}), null == window.Backbone) throw "Expected Backbone to be defined";
			return e = o.defaults(e, {
				id: "BACKBONE_ACTION",
				errorMessage: !1,
				successMessage: "Request completed successfully.",
				showSuccessWithoutError: !1
			}), n = function(t) {
				var n;
				return n = o.extend({}, e, t.messenger), i["do"](n, t)
			}, null != Backbone.ajax ? (Backbone.ajax._withoutMessenger && (Backbone.ajax = Backbone.ajax._withoutMessenger), (null == e.action || e.action === this.doDefaults.action) && (e.action = Backbone.ajax), n._withoutMessenger = Backbone.ajax, Backbone.ajax = n) : Backbone.sync = o.wrap(Backbone.sync, function() {
				var e, i, s;
				return s = arguments[0], e = arguments.length >= 2 ? f.call(arguments, 1) : [], i = t.ajax, t.ajax = n, s.call.apply(s, [this].concat(f.call(e))), t.ajax = i
			})
		}, n.prototype._getHandlerResponse = function(t) {
			return t === !1 ? !1 : t === !0 || null == t ? !0 : t
		}, n.prototype._parseEvents = function(t) {
			var e, n, i, s, o, a, r;
			null == t && (t = {}), o = {};
			for (s in t) i = t[s], n = s.indexOf(" "), a = s.substring(0, n), e = s.substring(n + 1), null == (r = o[a]) && (o[a] = {}), o[a][e] = i;
			return o
		}, n.prototype._normalizeResponse = function() {
			var t, e, n, i, s, a, r;
			for (n = arguments.length >= 1 ? f.call(arguments, 0) : [], i = null, s = null, t = null, a = 0, r = n.length; r > a; a++) e = n[a], "success" === e || "timeout" === e || "abort" === e ? i = e : null != (null != e ? e.readyState : void 0) && null != (null != e ? e.responseText : void 0) ? s = e : o.isObject(e) && (t = e);
			return [i, t, s]
		}, n.prototype.run = function() {
			var e, n, i, s, a, r, l, c, h, u, d, g = this;
			if (r = arguments[0], h = arguments[1], e = arguments.length >= 3 ? f.call(arguments, 2) : [], null == h && (h = {}), r = t.extend(!0, {}, this.messageDefaults, this.doDefaults, null != r ? r : {}), n = this._parseEvents(r.events), i = function(t, e) {
				var n;
				return n = r[t + "Message"], o.isFunction(n) ? n.call(g, t, e) : n
			}, l = null != (d = r.messageInstance) ? d : this.newMessage(r), null != r.id && (l.options.id = r.id), null != r.progressMessage && l.update(t.extend({}, r, {
				message: i("progress", null),
				type: "info"
			})), a = {}, o.each(["error", "success"], function(s) {
				var c;
				return c = h[s], a[s] = function() {
					var a, u, d, m, v, b, y, w, x, C, S, D, k, _, T;
					return b = arguments.length >= 1 ? f.call(arguments, 0) : [], x = g._normalizeResponse.apply(g, b), v = x[0], a = x[1], w = x[2], "success" === s && null == l.errorCount && r.showSuccessWithoutError === !1 && (r.successMessage = null), "error" === s && (null == (C = r.errorCount) && (r.errorCount = 0), r.errorCount += 1), d = r.returnsPromise ? b[0] : "function" == typeof c ? c.apply(null, b) : void 0, y = g._getHandlerResponse(d), o.isString(y) && (y = {
						message: y
					}), "error" !== s || 0 !== (null != w ? w.status : void 0) && "abort" !== v ? "error" === s && null != r.ignoredErrorCodes && (S = null != w ? w.status : void 0, p.call(r.ignoredErrorCodes, S) >= 0) ? void l.hide() : (u = {
						message: i(s, w),
						type: s,
						events: null != (D = n[s]) ? D : {},
						hideOnNavigate: "success" === s
					}, m = t.extend({}, r, u, y), "number" == typeof(null != (k = m.retry) ? k.allow : void 0) && m.retry.allow--, "error" === s && (null != w ? w.status : void 0) >= 500 && (null != (_ = m.retry) ? _.allow : void 0) ? (null == m.retry.delay && (m.retry.delay = 4 > m.errorCount ? 10 : 300), m.hideAfter && (null == (T = m._hideAfter) && (m._hideAfter = m.hideAfter), m.hideAfter = m._hideAfter + m.retry.delay), m._retryActions = !0, m.actions = {
						retry: {
							label: "retry now",
							phrase: "Retrying TIME",
							auto: m.retry.auto,
							delay: m.retry.delay,
							action: function() {
								return m.messageInstance = l, setTimeout(function() {
									return g["do"].apply(g, [m, h].concat(f.call(e)))
								}, 0)
							}
						},
						cancel: {
							action: function() {
								return l.cancel()
							}
						}
					}) : m._retryActions && (delete m.actions.retry, delete m.actions.cancel, delete r._retryActions), l.update(m), y && m.message ? (Messenger(o.extend({}, g.options, {
						instance: g
					})), l.show()) : l.hide()) : void l.hide()
				}
			}), !r.returnsPromise) for (u in a) s = a[u], c = h[u], h[u] = s;
			return l._actionInstance = r.action.apply(r, [h].concat(f.call(e))), r.returnsPromise && l._actionInstance.then(a.success, a.error), l
		}, n.prototype["do"] = n.prototype.run, n.prototype.ajax = function() {
			var e, n;
			return n = arguments[0], e = arguments.length >= 2 ? f.call(arguments, 1) : [], n.action = t.ajax, this.run.apply(this, [n].concat(f.call(e)))
		}, n.prototype.expectPromise = function(t, e) {
			return e = o.extend({}, e, {
				action: t,
				returnsPromise: !0
			}), this.run(e)
		}, n.prototype.error = function(t) {
			return null == t && (t = {}), "string" == typeof t && (t = {
				message: t
			}), t.type = "error", this.post(t)
		}, n.prototype.info = function(t) {
			return null == t && (t = {}), "string" == typeof t && (t = {
				message: t
			}), t.type = "info", this.post(t)
		}, n.prototype.success = function(t) {
			return null == t && (t = {}), "string" == typeof t && (t = {
				message: t
			}), t.type = "success", this.post(t)
		}, n
	}(r), t.fn.messenger = function() {
		var n, i, s, a, l, c, h, u;
		return s = arguments[0], i = arguments.length >= 2 ? f.call(arguments, 1) : [], null == s && (s = {}), n = this, null != s && o.isString(s) ? (u = n.data("messenger"))[s].apply(u, i) : (l = s, null == n.data("messenger") && (r = null != (c = null != (h = Messenger.themes[l.theme]) ? h.Messenger : void 0) ? c : e, n.data("messenger", a = new r(t.extend({
			el: n
		}, l))), a.render()), n.data("messenger"))
	}, window.Messenger._call = function(e) {
		var n, i, s, o, a, r, l, c, h, u, d;
		if (r = {
			extraClasses: "messenger-fixed messenger-on-bottom messenger-on-right",
			theme: "future",
			maxMessages: 9,
			parentLocations: ["body"]
		}, e = t.extend(r, t._messengerDefaults, Messenger.options, e), null != e.theme && (e.extraClasses += " messenger-theme-" + e.theme), l = e.instance || Messenger.instance, null == e.instance) {
			for (h = e.parentLocations, i = null, s = null, u = 0, d = h.length; d > u; u++) if (c = h[u], i = t(c), i.length) {
				o = c;
				break
			}
			l ? t(l._location).is(t(o)) || (l.$el.detach(), i.prepend(l.$el)) : (n = t("<ul>"), i.prepend(n), l = n.messenger(e), l._location = o, Messenger.instance = l)
		}
		return null != l._addedClasses && l.$el.removeClass(l._addedClasses), l.$el.addClass(a = "" + l.className + " " + e.extraClasses), l._addedClasses = a, l
	}, t.extend(Messenger, {
		Message: s,
		Messenger: e,
		themes: null != (h = Messenger.themes) ? h : {}
	}), t.globalMessenger = window.Messenger = Messenger
}.call(this), function() {
	var t, e, n, i = {}.hasOwnProperty,
		s = function(t, e) {
			function n() {
				this.constructor = t
			}
			for (var s in e) i.call(e, s) && (t[s] = e[s]);
			return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
		};
	t = jQuery, n = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>', e = function(e) {
		function i() {
			return i.__super__.constructor.apply(this, arguments)
		}
		return s(i, e), i.prototype.template = function() {
			var e;
			return e = i.__super__.template.apply(this, arguments), e.append(t(n)), e
		}, i
	}(window.Messenger.Message), window.Messenger.themes.flat = {
		Message: e
	}
}.call(this), function(t) {
	function e() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}
	function n(t, e) {
		return function(n) {
			return h(t.call(this, n), e)
		}
	}
	function i(t, e) {
		return function(n) {
			return this.lang().ordinal(t.call(this, n), e)
		}
	}
	function s() {}
	function o(t) {
		C(t), r(this, t)
	}
	function a(t) {
		var e = m(t),
			n = e.year || 0,
			i = e.month || 0,
			s = e.week || 0,
			o = e.day || 0,
			a = e.hour || 0,
			r = e.minute || 0,
			l = e.second || 0,
			c = e.millisecond || 0;
		this._milliseconds = +c + 1e3 * l + 6e4 * r + 36e5 * a, this._days = +o + 7 * s, this._months = +i + 12 * n, this._data = {}, this._bubble()
	}
	function r(t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
	}
	function l(t) {
		var e, n = {};
		for (e in t) t.hasOwnProperty(e) && me.hasOwnProperty(e) && (n[e] = t[e]);
		return n
	}
	function c(t) {
		return 0 > t ? Math.ceil(t) : Math.floor(t)
	}
	function h(t, e, n) {
		for (var i = "" + Math.abs(t), s = t >= 0; i.length < e;) i = "0" + i;
		return (s ? n ? "+" : "" : "-") + i
	}
	function u(t, e, n, i) {
		var s, o, a = e._milliseconds,
			r = e._days,
			l = e._months;
		a && t._d.setTime(+t._d + a * n), (r || l) && (s = t.minute(), o = t.hour()), r && t.date(t.date() + r * n), l && t.month(t.month() + l * n), a && !i && ie.updateOffset(t), (r || l) && (t.minute(s), t.hour(o))
	}
	function d(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	function f(t) {
		return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
	}
	function p(t, e, n) {
		var i, s = Math.min(t.length, e.length),
			o = Math.abs(t.length - e.length),
			a = 0;
		for (i = 0; s > i; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && a++;
		return a + o
	}
	function g(t) {
		if (t) {
			var e = t.toLowerCase().replace(/(.)s$/, "$1");
			t = qe[t] || Ye[e] || e
		}
		return t
	}
	function m(t) {
		var e, n, i = {};
		for (n in t) t.hasOwnProperty(n) && (e = g(n), e && (i[e] = t[n]));
		return i
	}
	function v(e) {
		var n, i;
		if (0 === e.indexOf("week")) n = 7, i = "day";
		else {
			if (0 !== e.indexOf("month")) return;
			n = 12, i = "month"
		}
		ie[e] = function(s, o) {
			var a, r, l = ie.fn._lang[e],
				c = [];
			if ("number" == typeof s && (o = s, s = t), r = function(t) {
				var e = ie().utc().set(i, t);
				return l.call(ie.fn._lang, e, s || "")
			}, null != o) return r(o);
			for (a = 0; n > a; a++) c.push(r(a));
			return c
		}
	}
	function b(t) {
		var e = +t,
			n = 0;
		return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
	}
	function y(t, e) {
		return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
	}
	function w(t) {
		return x(t) ? 366 : 365
	}
	function x(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}
	function C(t) {
		var e;
		t._a && -2 === t._pf.overflow && (e = t._a[ce] < 0 || t._a[ce] > 11 ? ce : t._a[he] < 1 || t._a[he] > y(t._a[le], t._a[ce]) ? he : t._a[ue] < 0 || t._a[ue] > 23 ? ue : t._a[de] < 0 || t._a[de] > 59 ? de : t._a[fe] < 0 || t._a[fe] > 59 ? fe : t._a[pe] < 0 || t._a[pe] > 999 ? pe : -1, t._pf._overflowDayOfYear && (le > e || e > he) && (e = he), t._pf.overflow = e)
	}
	function S(t) {
		return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
	}
	function D(t) {
		return t ? t.toLowerCase().replace("_", "-") : t
	}
	function k(t, e) {
		return e._isUTC ? ie(t).zone(e._offset || 0) : ie(t).local()
	}
	function _(t, e) {
		return e.abbr = t, ge[t] || (ge[t] = new s), ge[t].set(e), ge[t]
	}
	function T(t) {
		delete ge[t]
	}
	function M(t) {
		var e, n, i, s, o = 0,
			a = function(t) {
				if (!ge[t] && ve) try {
					require("./lang/" + t)
				} catch (e) {}
				return ge[t]
			};
		if (!t) return ie.fn._lang;
		if (!d(t)) {
			if (n = a(t)) return n;
			t = [t]
		}
		for (; o < t.length;) {
			for (s = D(t[o]).split("-"), e = s.length, i = D(t[o + 1]), i = i ? i.split("-") : null; e > 0;) {
				if (n = a(s.slice(0, e).join("-"))) return n;
				if (i && i.length >= e && p(s, i, !0) >= e - 1) break;
				e--
			}
			o++
		}
		return ie.fn._lang
	}
	function E(t) {
		return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}
	function F(t) {
		var e, n, i = t.match(xe);
		for (e = 0, n = i.length; n > e; e++) i[e] = Je[i[e]] ? Je[i[e]] : E(i[e]);
		return function(s) {
			var o = "";
			for (e = 0; n > e; e++) o += i[e] instanceof Function ? i[e].call(s, t) : i[e];
			return o
		}
	}
	function N(t, e) {
		return t.isValid() ? (e = A(e, t.lang()), Ve[e] || (Ve[e] = F(e)), Ve[e](t)) : t.lang().invalidDate()
	}
	function A(t, e) {
		function n(t) {
			return e.longDateFormat(t) || t
		}
		var i = 5;
		for (Ce.lastIndex = 0; i >= 0 && Ce.test(t);) t = t.replace(Ce, n), Ce.lastIndex = 0, i -= 1;
		return t
	}
	function I(t, e) {
		var n, i = e._strict;
		switch (t) {
		case "DDDD":
			return Le;
		case "YYYY":
		case "GGGG":
		case "gggg":
			return i ? Pe : ke;
		case "Y":
		case "G":
		case "g":
			return He;
		case "YYYYYY":
		case "YYYYY":
		case "GGGGG":
		case "ggggg":
			return i ? Oe : _e;
		case "S":
			if (i) return Ae;
		case "SS":
			if (i) return Ie;
		case "SSS":
			if (i) return Le;
		case "DDD":
			return De;
		case "MMM":
		case "MMMM":
		case "dd":
		case "ddd":
		case "dddd":
			return Me;
		case "a":
		case "A":
			return M(e._l)._meridiemParse;
		case "X":
			return Ne;
		case "Z":
		case "ZZ":
			return Ee;
		case "T":
			return Fe;
		case "SSSS":
			return Te;
		case "MM":
		case "DD":
		case "YY":
		case "GG":
		case "gg":
		case "HH":
		case "hh":
		case "mm":
		case "ss":
		case "ww":
		case "WW":
			return i ? Ie : Se;
		case "M":
		case "D":
		case "d":
		case "H":
		case "h":
		case "m":
		case "s":
		case "w":
		case "W":
		case "e":
		case "E":
			return Se;
		default:
			return n = new RegExp(j($(t.replace("\\", "")), "i"))
		}
	}
	function L(t) {
		t = t || "";
		var e = t.match(Ee) || [],
			n = e[e.length - 1] || [],
			i = (n + "").match(We) || ["-", 0, 0],
			s = +(60 * i[1]) + b(i[2]);
		return "+" === i[0] ? -s : s
	}
	function P(t, e, n) {
		var i, s = n._a;
		switch (t) {
		case "M":
		case "MM":
			null != e && (s[ce] = b(e) - 1);
			break;
		case "MMM":
		case "MMMM":
			i = M(n._l).monthsParse(e), null != i ? s[ce] = i : n._pf.invalidMonth = e;
			break;
		case "D":
		case "DD":
			null != e && (s[he] = b(e));
			break;
		case "DDD":
		case "DDDD":
			null != e && (n._dayOfYear = b(e));
			break;
		case "YY":
			s[le] = b(e) + (b(e) > 68 ? 1900 : 2e3);
			break;
		case "YYYY":
		case "YYYYY":
		case "YYYYYY":
			s[le] = b(e);
			break;
		case "a":
		case "A":
			n._isPm = M(n._l).isPM(e);
			break;
		case "H":
		case "HH":
		case "h":
		case "hh":
			s[ue] = b(e);
			break;
		case "m":
		case "mm":
			s[de] = b(e);
			break;
		case "s":
		case "ss":
			s[fe] = b(e);
			break;
		case "S":
		case "SS":
		case "SSS":
		case "SSSS":
			s[pe] = b(1e3 * ("0." + e));
			break;
		case "X":
			n._d = new Date(1e3 * parseFloat(e));
			break;
		case "Z":
		case "ZZ":
			n._useUTC = !0, n._tzm = L(e);
			break;
		case "w":
		case "ww":
		case "W":
		case "WW":
		case "d":
		case "dd":
		case "ddd":
		case "dddd":
		case "e":
		case "E":
			t = t.substr(0, 1);
		case "gg":
		case "gggg":
		case "GG":
		case "GGGG":
		case "GGGGG":
			t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = e)
		}
	}
	function O(t) {
		var e, n, i, s, o, a, r, l, c, h, u = [];
		if (!t._d) {
			for (i = R(t), t._w && null == t._a[he] && null == t._a[ce] && (o = function(e) {
				var n = parseInt(e, 10);
				return e ? e.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == t._a[le] ? ie().weekYear() : t._a[le]
			}, a = t._w, null != a.GG || null != a.W || null != a.E ? r = K(o(a.GG), a.W || 1, a.E, 4, 1) : (l = M(t._l), c = null != a.d ? V(a.d, l) : null != a.e ? parseInt(a.e, 10) + l._week.dow : 0, h = parseInt(a.w, 10) || 1, null != a.d && c < l._week.dow && h++, r = K(o(a.gg), h, c, l._week.doy, l._week.dow)), t._a[le] = r.year, t._dayOfYear = r.dayOfYear), t._dayOfYear && (s = null == t._a[le] ? i[le] : t._a[le], t._dayOfYear > w(s) && (t._pf._overflowDayOfYear = !0), n = Y(s, 0, t._dayOfYear), t._a[ce] = n.getUTCMonth(), t._a[he] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = u[e] = i[e];
			for (; 7 > e; e++) t._a[e] = u[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			u[ue] += b((t._tzm || 0) / 60), u[de] += b((t._tzm || 0) % 60), t._d = (t._useUTC ? Y : q).apply(null, u)
		}
	}
	function H(t) {
		var e;
		t._d || (e = m(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], O(t))
	}
	function R(t) {
		var e = new Date;
		return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
	}
	function z(t) {
		t._a = [], t._pf.empty = !0;
		var e, n, i, s, o, a = M(t._l),
			r = "" + t._i,
			l = r.length,
			c = 0;
		for (i = A(t._f, a).match(xe) || [], e = 0; e < i.length; e++) s = i[e], n = (r.match(I(s, t)) || [])[0], n && (o = r.substr(0, r.indexOf(n)), o.length > 0 && t._pf.unusedInput.push(o), r = r.slice(r.indexOf(n) + n.length), c += n.length), Je[s] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(s), P(s, n, t)) : t._strict && !n && t._pf.unusedTokens.push(s);
		t._pf.charsLeftOver = l - c, r.length > 0 && t._pf.unusedInput.push(r), t._isPm && t._a[ue] < 12 && (t._a[ue] += 12), t._isPm === !1 && 12 === t._a[ue] && (t._a[ue] = 0), O(t), C(t)
	}
	function $(t) {
		return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, s) {
			return e || n || i || s
		})
	}
	function j(t) {
		return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}
	function W(t) {
		var n, i, s, o, a;
		if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
		for (o = 0; o < t._f.length; o++) a = 0, n = r({}, t), n._pf = e(), n._f = t._f[o], z(n), S(n) && (a += n._pf.charsLeftOver, a += 10 * n._pf.unusedTokens.length, n._pf.score = a, (null == s || s > a) && (s = a, i = n));
		r(t, i || n)
	}
	function B(t) {
		var e, n, i = t._i,
			s = Re.exec(i);
		if (s) {
			for (t._pf.iso = !0, e = 0, n = $e.length; n > e; e++) if ($e[e][1].exec(i)) {
				t._f = $e[e][0] + (s[6] || " ");
				break
			}
			for (e = 0, n = je.length; n > e; e++) if (je[e][1].exec(i)) {
				t._f += je[e][0];
				break
			}
			i.match(Ee) && (t._f += "Z"), z(t)
		} else t._d = new Date(i)
	}
	function U(e) {
		var n = e._i,
			i = be.exec(n);
		n === t ? e._d = new Date : i ? e._d = new Date(+i[1]) : "string" == typeof n ? B(e) : d(n) ? (e._a = n.slice(0), O(e)) : f(n) ? e._d = new Date(+n) : "object" == typeof n ? H(e) : e._d = new Date(n)
	}
	function q(t, e, n, i, s, o, a) {
		var r = new Date(t, e, n, i, s, o, a);
		return 1970 > t && r.setFullYear(t), r
	}
	function Y(t) {
		var e = new Date(Date.UTC.apply(null, arguments));
		return 1970 > t && e.setUTCFullYear(t), e
	}
	function V(t, e) {
		if ("string" == typeof t) if (isNaN(t)) {
			if (t = e.weekdaysParse(t), "number" != typeof t) return null
		} else t = parseInt(t, 10);
		return t
	}
	function X(t, e, n, i, s) {
		return s.relativeTime(e || 1, !! n, t, i)
	}
	function G(t, e, n) {
		var i = re(Math.abs(t) / 1e3),
			s = re(i / 60),
			o = re(s / 60),
			a = re(o / 24),
			r = re(a / 365),
			l = 45 > i && ["s", i] || 1 === s && ["m"] || 45 > s && ["mm", s] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", re(a / 30)] || 1 === r && ["y"] || ["yy", r];
		return l[2] = e, l[3] = t > 0, l[4] = n, X.apply({}, l)
	}
	function J(t, e, n) {
		var i, s = n - e,
			o = n - t.day();
		return o > s && (o -= 7), s - 7 > o && (o += 7), i = ie(t).add("d", o), {
			week: Math.ceil(i.dayOfYear() / 7),
			year: i.year()
		}
	}
	function K(t, e, n, i, s) {
		var o, a, r = Y(t, 0, 1).getUTCDay();
		return n = null != n ? n : s, o = s - r + (r > i ? 7 : 0) - (s > r ? 7 : 0), a = 7 * (e - 1) + (n - s) + o + 1, {
			year: a > 0 ? t : t - 1,
			dayOfYear: a > 0 ? a : w(t - 1) + a
		}
	}
	function Z(t) {
		var e = t._i,
			n = t._f;
		return null === e ? ie.invalid({
			nullInput: !0
		}) : ("string" == typeof e && (t._i = e = M().preparse(e)), ie.isMoment(e) ? (t = l(e), t._d = new Date(+e._d)) : n ? d(n) ? W(t) : z(t) : U(t), new o(t))
	}
	function Q(t, e) {
		ie.fn[t] = ie.fn[t + "s"] = function(t) {
			var n = this._isUTC ? "UTC" : "";
			return null != t ? (this._d["set" + n + e](t), ie.updateOffset(this), this) : this._d["get" + n + e]()
		}
	}
	function te(t) {
		ie.duration.fn[t] = function() {
			return this._data[t]
		}
	}
	function ee(t, e) {
		ie.duration.fn["as" + t] = function() {
			return +this / e
		}
	}
	function ne(t) {
		var e = !1,
			n = ie;
		"undefined" == typeof ender && (t ? (ae.moment = function() {
			return !e && console && console.warn && (e = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), n.apply(null, arguments)
		}, r(ae.moment, n)) : ae.moment = ie)
	}
	for (var ie, se, oe = "2.5.1", ae = this, re = Math.round, le = 0, ce = 1, he = 2, ue = 3, de = 4, fe = 5, pe = 6, ge = {}, me = {
		_isAMomentObject: null,
		_i: null,
		_f: null,
		_l: null,
		_strict: null,
		_isUTC: null,
		_offset: null,
		_pf: null,
		_lang: null
	}, ve = "undefined" != typeof module && module.exports && "undefined" != typeof require, be = /^\/?Date\((\-?\d+)/i, ye = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, we = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, xe = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Ce = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Se = /\d\d?/, De = /\d{1,3}/, ke = /\d{1,4}/, _e = /[+\-]?\d{1,6}/, Te = /\d+/, Me = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ee = /Z|[\+\-]\d\d:?\d\d/gi, Fe = /T/i, Ne = /[\+\-]?\d+(\.\d{1,3})?/, Ae = /\d/, Ie = /\d\d/, Le = /\d{3}/, Pe = /\d{4}/, Oe = /[+-]?\d{6}/, He = /[+-]?\d+/, Re = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ze = "YYYY-MM-DDTHH:mm:ssZ", $e = [
		["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
		["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
		["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
		["GGGG-[W]WW", /\d{4}-W\d{2}/],
		["YYYY-DDD", /\d{4}-\d{3}/]
	], je = [
		["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
		["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
		["HH:mm", /(T| )\d\d:\d\d/],
		["HH", /(T| )\d\d/]
	], We = /([\+\-]|\d\d)/gi, Be = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Ue = {
		Milliseconds: 1,
		Seconds: 1e3,
		Minutes: 6e4,
		Hours: 36e5,
		Days: 864e5,
		Months: 2592e6,
		Years: 31536e6
	}, qe = {
		ms: "millisecond",
		s: "second",
		m: "minute",
		h: "hour",
		d: "day",
		D: "date",
		w: "week",
		W: "isoWeek",
		M: "month",
		y: "year",
		DDD: "dayOfYear",
		e: "weekday",
		E: "isoWeekday",
		gg: "weekYear",
		GG: "isoWeekYear"
	}, Ye = {
		dayofyear: "dayOfYear",
		isoweekday: "isoWeekday",
		isoweek: "isoWeek",
		weekyear: "weekYear",
		isoweekyear: "isoWeekYear"
	}, Ve = {}, Xe = "DDD w W M D d".split(" "), Ge = "M D H h m s w W".split(" "), Je = {
		M: function() {
			return this.month() + 1
		},
		MMM: function(t) {
			return this.lang().monthsShort(this, t)
		},
		MMMM: function(t) {
			return this.lang().months(this, t)
		},
		D: function() {
			return this.date()
		},
		DDD: function() {
			return this.dayOfYear()
		},
		d: function() {
			return this.day()
		},
		dd: function(t) {
			return this.lang().weekdaysMin(this, t)
		},
		ddd: function(t) {
			return this.lang().weekdaysShort(this, t)
		},
		dddd: function(t) {
			return this.lang().weekdays(this, t)
		},
		w: function() {
			return this.week()
		},
		W: function() {
			return this.isoWeek()
		},
		YY: function() {
			return h(this.year() % 100, 2)
		},
		YYYY: function() {
			return h(this.year(), 4)
		},
		YYYYY: function() {
			return h(this.year(), 5)
		},
		YYYYYY: function() {
			var t = this.year(),
				e = t >= 0 ? "+" : "-";
			return e + h(Math.abs(t), 6)
		},
		gg: function() {
			return h(this.weekYear() % 100, 2)
		},
		gggg: function() {
			return h(this.weekYear(), 4)
		},
		ggggg: function() {
			return h(this.weekYear(), 5)
		},
		GG: function() {
			return h(this.isoWeekYear() % 100, 2)
		},
		GGGG: function() {
			return h(this.isoWeekYear(), 4)
		},
		GGGGG: function() {
			return h(this.isoWeekYear(), 5)
		},
		e: function() {
			return this.weekday()
		},
		E: function() {
			return this.isoWeekday()
		},
		a: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !0)
		},
		A: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !1)
		},
		H: function() {
			return this.hours()
		},
		h: function() {
			return this.hours() % 12 || 12
		},
		m: function() {
			return this.minutes()
		},
		s: function() {
			return this.seconds()
		},
		S: function() {
			return b(this.milliseconds() / 100)
		},
		SS: function() {
			return h(b(this.milliseconds() / 10), 2)
		},
		SSS: function() {
			return h(this.milliseconds(), 3)
		},
		SSSS: function() {
			return h(this.milliseconds(), 3)
		},
		Z: function() {
			var t = -this.zone(),
				e = "+";
			return 0 > t && (t = -t, e = "-"), e + h(b(t / 60), 2) + ":" + h(b(t) % 60, 2)
		},
		ZZ: function() {
			var t = -this.zone(),
				e = "+";
			return 0 > t && (t = -t, e = "-"), e + h(b(t / 60), 2) + h(b(t) % 60, 2)
		},
		z: function() {
			return this.zoneAbbr()
		},
		zz: function() {
			return this.zoneName()
		},
		X: function() {
			return this.unix()
		},
		Q: function() {
			return this.quarter()
		}
	}, Ke = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Xe.length;) se = Xe.pop(), Je[se + "o"] = i(Je[se], se);
	for (; Ge.length;) se = Ge.pop(), Je[se + se] = n(Je[se], 2);
	for (Je.DDDD = n(Je.DDD, 3), r(s.prototype, {
		set: function(t) {
			var e, n;
			for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
		},
		_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months: function(t) {
			return this._months[t.month()]
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function(t) {
			return this._monthsShort[t.month()]
		},
		monthsParse: function(t) {
			var e, n, i;
			for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++) if (this._monthsParse[e] || (n = ie.utc([2e3, e]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function(t) {
			return this._weekdays[t.day()]
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function(t) {
			return this._weekdaysShort[t.day()]
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function(t) {
			return this._weekdaysMin[t.day()]
		},
		weekdaysParse: function(t) {
			var e, n, i;
			for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = ie([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
		},
		_longDateFormat: {
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D YYYY",
			LLL: "MMMM D YYYY LT",
			LLLL: "dddd, MMMM D YYYY LT"
		},
		longDateFormat: function(t) {
			var e = this._longDateFormat[t];
			return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
				return t.slice(1)
			}), this._longDateFormat[t] = e), e
		},
		isPM: function(t) {
			return "p" === (t + "").toLowerCase().charAt(0)
		},
		_meridiemParse: /[ap]\.?m?\.?/i,
		meridiem: function(t, e, n) {
			return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
		},
		_calendar: {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		calendar: function(t, e) {
			var n = this._calendar[t];
			return "function" == typeof n ? n.apply(e) : n
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function(t, e, n, i) {
			var s = this._relativeTime[n];
			return "function" == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t)
		},
		pastFuture: function(t, e) {
			var n = this._relativeTime[t > 0 ? "future" : "past"];
			return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
		},
		ordinal: function(t) {
			return this._ordinal.replace("%d", t)
		},
		_ordinal: "%d",
		preparse: function(t) {
			return t
		},
		postformat: function(t) {
			return t
		},
		week: function(t) {
			return J(t, this._week.dow, this._week.doy).week
		},
		_week: {
			dow: 0,
			doy: 6
		},
		_invalidDate: "Invalid date",
		invalidDate: function() {
			return this._invalidDate
		}
	}), ie = function(n, i, s, o) {
		var a;
		return "boolean" == typeof s && (o = s, s = t), a = {}, a._isAMomentObject = !0, a._i = n, a._f = i, a._l = s, a._strict = o, a._isUTC = !1, a._pf = e(), Z(a)
	}, ie.utc = function(n, i, s, o) {
		var a;
		return "boolean" == typeof s && (o = s, s = t), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = s, a._i = n, a._f = i, a._strict = o, a._pf = e(), Z(a).utc()
	}, ie.unix = function(t) {
		return ie(1e3 * t)
	}, ie.duration = function(t, e) {
		var n, i, s, o = t,
			r = null;
		return ie.isDuration(t) ? o = {
			ms: t._milliseconds,
			d: t._days,
			M: t._months
		} : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = ye.exec(t)) ? (n = "-" === r[1] ? -1 : 1, o = {
			y: 0,
			d: b(r[he]) * n,
			h: b(r[ue]) * n,
			m: b(r[de]) * n,
			s: b(r[fe]) * n,
			ms: b(r[pe]) * n
		}) : (r = we.exec(t)) && (n = "-" === r[1] ? -1 : 1, s = function(t) {
			var e = t && parseFloat(t.replace(",", "."));
			return (isNaN(e) ? 0 : e) * n
		}, o = {
			y: s(r[2]),
			M: s(r[3]),
			d: s(r[4]),
			h: s(r[5]),
			m: s(r[6]),
			s: s(r[7]),
			w: s(r[8])
		}), i = new a(o), ie.isDuration(t) && t.hasOwnProperty("_lang") && (i._lang = t._lang), i
	}, ie.version = oe, ie.defaultFormat = ze, ie.updateOffset = function() {}, ie.lang = function(t, e) {
		var n;
		return t ? (e ? _(D(t), e) : null === e ? (T(t), t = "en") : ge[t] || M(t), n = ie.duration.fn._lang = ie.fn._lang = M(t), n._abbr) : ie.fn._lang._abbr
	}, ie.langData = function(t) {
		return t && t._lang && t._lang._abbr && (t = t._lang._abbr), M(t)
	}, ie.isMoment = function(t) {
		return t instanceof o || null != t && t.hasOwnProperty("_isAMomentObject")
	}, ie.isDuration = function(t) {
		return t instanceof a
	}, se = Ke.length - 1; se >= 0; --se) v(Ke[se]);
	for (ie.normalizeUnits = function(t) {
		return g(t)
	}, ie.invalid = function(t) {
		var e = ie.utc(0 / 0);
		return null != t ? r(e._pf, t) : e._pf.userInvalidated = !0, e
	}, ie.parseZone = function(t) {
		return ie(t).parseZone()
	}, r(ie.fn = o.prototype, {
		clone: function() {
			return ie(this)
		},
		valueOf: function() {
			return +this._d + 6e4 * (this._offset || 0)
		},
		unix: function() {
			return Math.floor(+this / 1e3)
		},
		toString: function() {
			return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		},
		toDate: function() {
			return this._offset ? new Date(+this) : this._d
		},
		toISOString: function() {
			var t = ie(this).utc();
			return 0 < t.year() && t.year() <= 9999 ? N(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		},
		toArray: function() {
			var t = this;
			return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
		},
		isValid: function() {
			return S(this)
		},
		isDSTShifted: function() {
			return this._a ? this.isValid() && p(this._a, (this._isUTC ? ie.utc(this._a) : ie(this._a)).toArray()) > 0 : !1
		},
		parsingFlags: function() {
			return r({}, this._pf)
		},
		invalidAt: function() {
			return this._pf.overflow
		},
		utc: function() {
			return this.zone(0)
		},
		local: function() {
			return this.zone(0), this._isUTC = !1, this
		},
		format: function(t) {
			var e = N(this, t || ie.defaultFormat);
			return this.lang().postformat(e)
		},
		add: function(t, e) {
			var n;
			return n = "string" == typeof t ? ie.duration(+e, t) : ie.duration(t, e), u(this, n, 1), this
		},
		subtract: function(t, e) {
			var n;
			return n = "string" == typeof t ? ie.duration(+e, t) : ie.duration(t, e), u(this, n, -1), this
		},
		diff: function(t, e, n) {
			var i, s, o = k(t, this),
				a = 6e4 * (this.zone() - o.zone());
			return e = g(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), s = 12 * (this.year() - o.year()) + (this.month() - o.month()), s += (this - ie(this).startOf("month") - (o - ie(o).startOf("month"))) / i, s -= 6e4 * (this.zone() - ie(this).startOf("month").zone() - (o.zone() - ie(o).startOf("month").zone())) / i, "year" === e && (s /= 12)) : (i = this - o, s = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i), n ? s : c(s)
		},
		from: function(t, e) {
			return ie.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
		},
		fromNow: function(t) {
			return this.from(ie(), t)
		},
		calendar: function() {
			var t = k(ie(), this).startOf("day"),
				e = this.diff(t, "days", !0),
				n = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
			return this.format(this.lang().calendar(n, this))
		},
		isLeapYear: function() {
			return x(this.year())
		},
		isDST: function() {
			return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
		},
		day: function(t) {
			var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != t ? (t = V(t, this.lang()), this.add({
				d: t - e
			})) : e
		},
		month: function(t) {
			var e, n = this._isUTC ? "UTC" : "";
			return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), ie.updateOffset(this), this) : this._d["get" + n + "Month"]()
		},
		startOf: function(t) {
			switch (t = g(t)) {
			case "year":
				this.month(0);
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
			}
			return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), this
		},
		endOf: function(t) {
			return t = g(t), this.startOf(t).add("isoWeek" === t ? "week" : t, 1).subtract("ms", 1)
		},
		isAfter: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +ie(t).startOf(e)
		},
		isBefore: function(t, e) {
			return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +ie(t).startOf(e)
		},
		isSame: function(t, e) {
			return e = e || "ms", +this.clone().startOf(e) === +k(t, this).startOf(e)
		},
		min: function(t) {
			return t = ie.apply(null, arguments), this > t ? this : t
		},
		max: function(t) {
			return t = ie.apply(null, arguments), t > this ? this : t
		},
		zone: function(t) {
			var e = this._offset || 0;
			return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = L(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && u(this, ie.duration(e - t, "m"), 1, !0), this)
		},
		zoneAbbr: function() {
			return this._isUTC ? "UTC" : ""
		},
		zoneName: function() {
			return this._isUTC ? "Coordinated Universal Time" : ""
		},
		parseZone: function() {
			return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
		},
		hasAlignedHourOffset: function(t) {
			return t = t ? ie(t).zone() : 0, (this.zone() - t) % 60 === 0
		},
		daysInMonth: function() {
			return y(this.year(), this.month())
		},
		dayOfYear: function(t) {
			var e = re((ie(this).startOf("day") - ie(this).startOf("year")) / 864e5) + 1;
			return null == t ? e : this.add("d", t - e)
		},
		quarter: function() {
			return Math.ceil((this.month() + 1) / 3)
		},
		weekYear: function(t) {
			var e = J(this, this.lang()._week.dow, this.lang()._week.doy).year;
			return null == t ? e : this.add("y", t - e)
		},
		isoWeekYear: function(t) {
			var e = J(this, 1, 4).year;
			return null == t ? e : this.add("y", t - e)
		},
		week: function(t) {
			var e = this.lang().week(this);
			return null == t ? e : this.add("d", 7 * (t - e))
		},
		isoWeek: function(t) {
			var e = J(this, 1, 4).week;
			return null == t ? e : this.add("d", 7 * (t - e))
		},
		weekday: function(t) {
			var e = (this.day() + 7 - this.lang()._week.dow) % 7;
			return null == t ? e : this.add("d", t - e)
		},
		isoWeekday: function(t) {
			return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
		},
		get: function(t) {
			return t = g(t), this[t]()
		},
		set: function(t, e) {
			return t = g(t), "function" == typeof this[t] && this[t](e), this
		},
		lang: function(e) {
			return e === t ? this._lang : (this._lang = M(e), this)
		}
	}), se = 0; se < Be.length; se++) Q(Be[se].toLowerCase().replace(/s$/, ""), Be[se]);
	Q("year", "FullYear"), ie.fn.days = ie.fn.day, ie.fn.months = ie.fn.month, ie.fn.weeks = ie.fn.week, ie.fn.isoWeeks = ie.fn.isoWeek, ie.fn.toJSON = ie.fn.toISOString, r(ie.duration.fn = a.prototype, {
		_bubble: function() {
			var t, e, n, i, s = this._milliseconds,
				o = this._days,
				a = this._months,
				r = this._data;
			r.milliseconds = s % 1e3, t = c(s / 1e3), r.seconds = t % 60, e = c(t / 60), r.minutes = e % 60, n = c(e / 60), r.hours = n % 24, o += c(n / 24), r.days = o % 30, a += c(o / 30), r.months = a % 12, i = c(a / 12), r.years = i
		},
		weeks: function() {
			return c(this.days() / 7)
		},
		valueOf: function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
		},
		humanize: function(t) {
			var e = +this,
				n = G(e, !t, this.lang());
			return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
		},
		add: function(t, e) {
			var n = ie.duration(t, e);
			return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
		},
		subtract: function(t, e) {
			var n = ie.duration(t, e);
			return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
		},
		get: function(t) {
			return t = g(t), this[t.toLowerCase() + "s"]()
		},
		as: function(t) {
			return t = g(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
		},
		lang: ie.fn.lang,
		toIsoString: function() {
			var t = Math.abs(this.years()),
				e = Math.abs(this.months()),
				n = Math.abs(this.days()),
				i = Math.abs(this.hours()),
				s = Math.abs(this.minutes()),
				o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || s || o ? "T" : "") + (i ? i + "H" : "") + (s ? s + "M" : "") + (o ? o + "S" : "") : "P0D"
		}
	});
	for (se in Ue) Ue.hasOwnProperty(se) && (ee(se, Ue[se]), te(se.toLowerCase()));
	ee("Weeks", 6048e5), ie.duration.fn.asMonths = function() {
		return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, ie.lang("en", {
		ordinal: function(t) {
			var e = t % 10,
				n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
			return t + n
		}
	}), ve ? (module.exports = ie, ne(!0)) : "function" == typeof define && define.amd ? define("moment", function(e, n, i) {
		return i.config && i.config() && i.config().noGlobal !== !0 && ne(i.config().noGlobal === t), ie
	}) : ne()
}.call(this), function(t, e) {
	function n() {
		return new Date(Date.UTC.apply(Date, arguments))
	}
	function i() {
		var t = new Date;
		return n(t.getFullYear(), t.getMonth(), t.getDate())
	}
	function s(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	function o(e, n) {
		function i(t, e) {
			return e.toLowerCase()
		}
		var s, o = t(e).data(),
			a = {},
			r = new RegExp("^" + n.toLowerCase() + "([A-Z])");
		n = new RegExp("^" + n.toLowerCase());
		for (var l in o) n.test(l) && (s = l.replace(r, i), a[s] = o[l]);
		return a
	}
	function a(e) {
		var n = {};
		if (p[e] || (e = e.split("-")[0], p[e])) {
			var i = p[e];
			return t.each(f, function(t, e) {
				e in i && (n[e] = i[e])
			}), n
		}
	}
	var r = t(window),
		l = function() {
			var e = {
				get: function(t) {
					return this.slice(t)[0]
				},
				contains: function(t) {
					for (var e = t && t.valueOf(), n = 0, i = this.length; i > n; n++) if (this[n].valueOf() === e) return n;
					return -1
				},
				remove: function(t) {
					this.splice(t, 1)
				},
				replace: function(e) {
					e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
				},
				clear: function() {
					this.splice(0)
				},
				copy: function() {
					var t = new l;
					return t.replace(this), t
				}
			};
			return function() {
				var n = [];
				return n.push.apply(n, arguments), t.extend(n, e), n
			}
		}(),
		c = function(e, n) {
			this.dates = new l, this.viewDate = i(), this.focusDate = null, this._process_options(n), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(g.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(t, e) {
				return parseInt(e) + 1
			}), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
		};
	c.prototype = {
		constructor: c,
		_process_options: function(e) {
			this._o = t.extend({}, this._o, e);
			var n = this.o = t.extend({}, this._o),
				i = n.language;
			switch (p[i] || (i = i.split("-")[0], p[i] || (i = d.language)), n.language = i, n.startView) {
			case 2:
			case "decade":
				n.startView = 2;
				break;
			case 1:
			case "year":
				n.startView = 1;
				break;
			default:
				n.startView = 0
			}
			switch (n.minViewMode) {
			case 1:
			case "months":
				n.minViewMode = 1;
				break;
			case 2:
			case "years":
				n.minViewMode = 2;
				break;
			default:
				n.minViewMode = 0
			}
			n.startView = Math.max(n.startView, n.minViewMode), n.multidate !== !0 && (n.multidate = Number(n.multidate) || !1, n.multidate = n.multidate !== !1 ? Math.max(0, n.multidate) : 1), n.multidateSeparator = String(n.multidateSeparator), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
			var s = g.parseFormat(n.format);
			n.startDate !== -1 / 0 && (n.startDate = n.startDate ? n.startDate instanceof Date ? this._local_to_utc(this._zero_time(n.startDate)) : g.parseDate(n.startDate, s, n.language) : -1 / 0), 1 / 0 !== n.endDate && (n.endDate = n.endDate ? n.endDate instanceof Date ? this._local_to_utc(this._zero_time(n.endDate)) : g.parseDate(n.endDate, s, n.language) : 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
				return parseInt(t, 10)
			});
			var o = String(n.orientation).toLowerCase().split(/\s+/g),
				a = n.orientation.toLowerCase();
			if (o = t.grep(o, function(t) {
				return /^auto|left|right|top|bottom$/.test(t)
			}), n.orientation = {
				x: "auto",
				y: "auto"
			}, a && "auto" !== a) if (1 === o.length) switch (o[0]) {
			case "top":
			case "bottom":
				n.orientation.y = o[0];
				break;
			case "left":
			case "right":
				n.orientation.x = o[0]
			} else a = t.grep(o, function(t) {
				return /^left|right$/.test(t)
			}), n.orientation.x = a[0] || "auto", a = t.grep(o, function(t) {
				return /^top|bottom$/.test(t)
			}), n.orientation.y = a[0] || "auto";
			else;
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(t) {
			for (var n, i, s, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (i = e, s = t[o][1]) : 3 === t[o].length && (i = t[o][1], s = t[o][2]), n.on(s, i)
		},
		_unapplyEvents: function(t) {
			for (var n, i, s, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (s = e, i = t[o][1]) : 3 === t[o].length && (s = t[o][1], i = t[o][2]), n.off(i, s)
		},
		_buildEvents: function() {
			this.isInput ? this._events = [
				[this.element,
				{
					focus: t.proxy(this.show, this),
					keyup: t.proxy(function(e) {
						-1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
					}, this),
					keydown: t.proxy(this.keydown, this)
				}]
			] : this.component && this.hasInput ? this._events = [
				[this.element.find("input"),
				{
					focus: t.proxy(this.show, this),
					keyup: t.proxy(function(e) {
						-1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
					}, this),
					keydown: t.proxy(this.keydown, this)
				}],
				[this.component,
				{
					click: t.proxy(this.show, this)
				}]
			] : this.element.is("div") ? this.isInline = !0 : this._events = [
				[this.element,
				{
					click: t.proxy(this.show, this)
				}]
			], this._events.push([this.element, "*",
			{
				blur: t.proxy(function(t) {
					this._focused_from = t.target
				}, this)
			}], [this.element,
			{
				blur: t.proxy(function(t) {
					this._focused_from = t.target
				}, this)
			}]), this._secondaryEvents = [
				[this.picker,
				{
					click: t.proxy(this.click, this)
				}],
				[t(window),
				{
					resize: t.proxy(this.place, this)
				}],
				[t(document),
				{
					"mousedown touchstart": t.proxy(function(t) {
						this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
					}, this)
				}]
			]
		},
		_attachEvents: function() {
			this._detachEvents(), this._applyEvents(this._events)
		},
		_detachEvents: function() {
			this._unapplyEvents(this._events)
		},
		_attachSecondaryEvents: function() {
			this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
		},
		_detachSecondaryEvents: function() {
			this._unapplyEvents(this._secondaryEvents)
		},
		_trigger: function(e, n) {
			var i = n || this.dates.get(-1),
				s = this._utc_to_local(i);
			this.element.trigger({
				type: e,
				date: s,
				dates: t.map(this.dates, this._utc_to_local),
				format: t.proxy(function(t, e) {
					0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
					var n = this.dates.get(t);
					return g.formatDate(n, e, this.o.language)
				}, this)
			})
		},
		show: function() {
			this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
		},
		hide: function() {
			this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
		},
		remove: function() {
			this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
		},
		_utc_to_local: function(t) {
			return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
		},
		_local_to_utc: function(t) {
			return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
		},
		_zero_time: function(t) {
			return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
		},
		_zero_utc_time: function(t) {
			return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
		},
		getDates: function() {
			return t.map(this.dates, this._utc_to_local)
		},
		getUTCDates: function() {
			return t.map(this.dates, function(t) {
				return new Date(t)
			})
		},
		getDate: function() {
			return this._utc_to_local(this.getUTCDate())
		},
		getUTCDate: function() {
			return new Date(this.dates.get(-1))
		},
		setDates: function() {
			var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, e), this._trigger("changeDate"), this.setValue()
		},
		setUTCDates: function() {
			var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
		},
		setDate: s("setDates"),
		setUTCDate: s("setUTCDates"),
		setValue: function() {
			var t = this.getFormattedDate();
			this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
		},
		getFormattedDate: function(n) {
			n === e && (n = this.o.format);
			var i = this.o.language;
			return t.map(this.dates, function(t) {
				return g.formatDate(t, n, i)
			}).join(this.o.multidateSeparator)
		},
		setStartDate: function(t) {
			this._process_options({
				startDate: t
			}), this.update(), this.updateNavArrows()
		},
		setEndDate: function(t) {
			this._process_options({
				endDate: t
			}), this.update(), this.updateNavArrows()
		},
		setDaysOfWeekDisabled: function(t) {
			this._process_options({
				daysOfWeekDisabled: t
			}), this.update(), this.updateNavArrows()
		},
		place: function() {
			if (!this.isInline) {
				var e = this.picker.outerWidth(),
					n = this.picker.outerHeight(),
					i = 10,
					s = r.width(),
					o = r.height(),
					a = r.scrollTop(),
					l = parseInt(this.element.parents().filter(function() {
						return "auto" !== t(this).css("z-index")
					}).first().css("z-index")) + 10,
					c = this.component ? this.component.parent().offset() : this.element.offset(),
					h = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
					u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
					d = c.left,
					f = c.top;
				this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - u)) : (this.picker.addClass("datepicker-orient-left"), c.left < 0 ? d -= c.left - i : c.left + e > s && (d = s - e - i));
				var p, g, m = this.o.orientation.y;
				"auto" === m && (p = -a + c.top - n, g = a + o - (c.top + h + n), m = Math.max(p, g) === g ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f += h : f -= n + parseInt(this.picker.css("padding-top")), this.picker.css({
					top: f,
					left: d,
					zIndex: l
				})
			}
		},
		_allow_update: !0,
		update: function() {
			if (this._allow_update) {
				var e = this.dates.copy(),
					n = [],
					i = !1;
				arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
					e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
				}, this)), i = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy(function(t) {
					return g.parseDate(t, this.o.format, this.o.language)
				}, this)), n = t.grep(n, t.proxy(function(t) {
					return t < this.o.startDate || t > this.o.endDate || !t
				}, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), i ? this.setValue() : n.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill()
			}
		},
		fillDow: function() {
			var t = this.o.weekStart,
				e = "<tr>";
			if (this.o.calendarWeeks) {
				var n = '<th class="cw">&nbsp;</th>';
				e += n, this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
			}
			for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + p[this.o.language].daysMin[t++ % 7] + "</th>";
			e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
		},
		fillMonths: function() {
			for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + p[this.o.language].monthsShort[e++] + "</span>";
			this.picker.find(".datepicker-months td").html(t)
		},
		setRange: function(e) {
			e && e.length ? this.range = t.map(e, function(t) {
				return t.valueOf()
			}) : delete this.range, this.fill()
		},
		getClassNames: function(e) {
			var n = [],
				i = this.viewDate.getUTCFullYear(),
				s = this.viewDate.getUTCMonth(),
				o = new Date;
			return e.getUTCFullYear() < i || e.getUTCFullYear() === i && e.getUTCMonth() < s ? n.push("old") : (e.getUTCFullYear() > i || e.getUTCFullYear() === i && e.getUTCMonth() > s) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && n.push("today"), -1 !== this.dates.contains(e) && n.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected")), n
		},
		fill: function() {
			var i, s = new Date(this.viewDate),
				o = s.getUTCFullYear(),
				a = s.getUTCMonth(),
				r = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
				l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
				c = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
				h = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
				u = p[this.o.language].today || p.en.today || "",
				d = p[this.o.language].clear || p.en.clear || "";
			this.picker.find(".datepicker-days thead th.datepicker-switch").text(p[this.o.language].months[a] + " " + o), this.picker.find("tfoot th.today").text(u).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(d).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
			var f = n(o, a - 1, 28),
				m = g.getDaysInMonth(f.getUTCFullYear(), f.getUTCMonth());
			f.setUTCDate(m), f.setUTCDate(m - (f.getUTCDay() - this.o.weekStart + 7) % 7);
			var v = new Date(f);
			v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
			for (var b, y = []; f.valueOf() < v;) {
				if (f.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
					var w = new Date(+f + (this.o.weekStart - f.getUTCDay() - 7) % 7 * 864e5),
						x = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
						C = new Date(Number(C = n(x.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
						S = (x - C) / 864e5 / 7 + 1;
					y.push('<td class="cw">' + S + "</td>")
				}
				if (b = this.getClassNames(f), b.push("day"), this.o.beforeShowDay !== t.noop) {
					var D = this.o.beforeShowDay(this._utc_to_local(f));
					D === e ? D = {} : "boolean" == typeof D ? D = {
						enabled: D
					} : "string" == typeof D && (D = {
						classes: D
					}), D.enabled === !1 && b.push("disabled"), D.classes && (b = b.concat(D.classes.split(/\s+/))), D.tooltip && (i = D.tooltip)
				}
				b = t.unique(b), y.push('<td class="' + b.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + f.getUTCDate() + "</td>"), f.getUTCDay() === this.o.weekEnd && y.push("</tr>"), f.setUTCDate(f.getUTCDate() + 1)
			}
			this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
			var k = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");
			t.each(this.dates, function(t, e) {
				e.getUTCFullYear() === o && k.eq(e.getUTCMonth()).addClass("active")
			}), (r > o || o > c) && k.addClass("disabled"), o === r && k.slice(0, l).addClass("disabled"), o === c && k.slice(h + 1).addClass("disabled"), y = "", o = 10 * parseInt(o / 10, 10);
			var _ = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");
			o -= 1;
			for (var T, M = t.map(this.dates, function(t) {
				return t.getUTCFullYear()
			}), E = -1; 11 > E; E++) T = ["year"], -1 === E ? T.push("old") : 10 === E && T.push("new"), -1 !== t.inArray(o, M) && T.push("active"), (r > o || o > c) && T.push("disabled"), y += '<span class="' + T.join(" ") + '">' + o + "</span>", o += 1;
			_.html(y)
		},
		updateNavArrows: function() {
			if (this._allow_update) {
				var t = new Date(this.viewDate),
					e = t.getUTCFullYear(),
					n = t.getUTCMonth();
				switch (this.viewMode) {
				case 0:
					this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? {
						visibility: "hidden"
					} : {
						visibility: "visible"
					}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? {
						visibility: "hidden"
					} : {
						visibility: "visible"
					});
					break;
				case 1:
				case 2:
					this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? {
						visibility: "hidden"
					} : {
						visibility: "visible"
					}), this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? {
						visibility: "hidden"
					} : {
						visibility: "visible"
					})
				}
			}
		},
		click: function(e) {
			e.preventDefault();
			var i, s, o, a = t(e.target).closest("span, td, th");
			if (1 === a.length) switch (a[0].nodeName.toLowerCase()) {
			case "th":
				switch (a[0].className) {
				case "datepicker-switch":
					this.showMode(1);
					break;
				case "prev":
				case "next":
					var r = g.modes[this.viewMode].navStep * ("prev" === a[0].className ? -1 : 1);
					switch (this.viewMode) {
					case 0:
						this.viewDate = this.moveMonth(this.viewDate, r), this._trigger("changeMonth", this.viewDate);
						break;
					case 1:
					case 2:
						this.viewDate = this.moveYear(this.viewDate, r), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
					}
					this.fill();
					break;
				case "today":
					var l = new Date;
					l = n(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0), this.showMode(-2);
					var c = "linked" === this.o.todayBtn ? null : "view";
					this._setDate(l, c);
					break;
				case "clear":
					var h;
					this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
				}
				break;
			case "span":
				a.is(".disabled") || (this.viewDate.setUTCDate(1), a.is(".month") ? (o = 1, s = a.parent().find("span").index(a), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(n(i, s, o))) : (o = 1, s = 0, i = parseInt(a.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(i, s, o))), this.showMode(-1), this.fill());
				break;
			case "td":
				a.is(".day") && !a.is(".disabled") && (o = parseInt(a.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), a.is(".old") ? 0 === s ? (s = 11, i -= 1) : s -= 1 : a.is(".new") && (11 === s ? (s = 0, i += 1) : s += 1), this._setDate(n(i, s, o)))
			}
			this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
		},
		_toggle_multidate: function(t) {
			var e = this.dates.contains(t);
			if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
		},
		_setDate: function(t, e) {
			e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
			var n;
			this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || e && "date" !== e || this.hide()
		},
		moveMonth: function(t, n) {
			if (!t) return e;
			if (!n) return t;
			var i, s, o = new Date(t.valueOf()),
				a = o.getUTCDate(),
				r = o.getUTCMonth(),
				l = Math.abs(n);
			if (n = n > 0 ? 1 : -1, 1 === l) s = -1 === n ?
			function() {
				return o.getUTCMonth() === r
			} : function() {
				return o.getUTCMonth() !== i
			}, i = r + n, o.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
			else {
				for (var c = 0; l > c; c++) o = this.moveMonth(o, n);
				i = o.getUTCMonth(), o.setUTCDate(a), s = function() {
					return i !== o.getUTCMonth()
				}
			}
			for (; s();) o.setUTCDate(--a), o.setUTCMonth(i);
			return o
		},
		moveYear: function(t, e) {
			return this.moveMonth(t, 12 * e)
		},
		dateWithinRange: function(t) {
			return t >= this.o.startDate && t <= this.o.endDate
		},
		keydown: function(t) {
			if (this.picker.is(":not(:visible)")) return void(27 === t.keyCode && this.show());
			var e, n, s, o = !1,
				a = this.focusDate || this.viewDate;
			switch (t.keyCode) {
			case 27:
				this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
				break;
			case 37:
			case 39:
				if (!this.o.keyboardNavigation) break;
				e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), e), s = this.moveYear(a, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), e), s = this.moveMonth(a, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + e), s = new Date(a), s.setUTCDate(a.getUTCDate() + e)), this.dateWithinRange(n) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
				break;
			case 38:
			case 40:
				if (!this.o.keyboardNavigation) break;
				e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), e), s = this.moveYear(a, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), e), s = this.moveMonth(a, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + 7 * e), s = new Date(a), s.setUTCDate(a.getUTCDate() + 7 * e)), this.dateWithinRange(n) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
				break;
			case 32:
				break;
			case 13:
				a = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(a), o = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
				break;
			case 9:
				this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
			}
			if (o) {
				this._trigger(this.dates.length ? "changeDate" : "clearDate");
				var r;
				this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change()
			}
		},
		showMode: function(t) {
			t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
		}
	};
	var h = function(e, n) {
			this.element = t(e), this.inputs = t.map(n.inputs, function(t) {
				return t.jquery ? t[0] : t
			}), delete n.inputs, t(this.inputs).datepicker(n).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
				return t(e).data("datepicker")
			}), this.updateDates()
		};
	h.prototype = {
		updateDates: function() {
			this.dates = t.map(this.pickers, function(t) {
				return t.getUTCDate()
			}), this.updateRanges()
		},
		updateRanges: function() {
			var e = t.map(this.dates, function(t) {
				return t.valueOf()
			});
			t.each(this.pickers, function(t, n) {
				n.setRange(e)
			})
		},
		dateUpdated: function(e) {
			if (!this.updating) {
				this.updating = !0;
				var n = t(e.target).data("datepicker"),
					i = n.getUTCDate(),
					s = t.inArray(e.target, this.inputs),
					o = this.inputs.length;
				if (-1 !== s) {
					if (t.each(this.pickers, function(t, e) {
						e.getUTCDate() || e.setUTCDate(i)
					}), i < this.dates[s]) for (; s >= 0 && i < this.dates[s];) this.pickers[s--].setUTCDate(i);
					else if (i > this.dates[s]) for (; o > s && i > this.dates[s];) this.pickers[s++].setUTCDate(i);
					this.updateDates(), delete this.updating
				}
			}
		},
		remove: function() {
			t.map(this.pickers, function(t) {
				t.remove()
			}), delete this.element.data().datepicker
		}
	};
	var u = t.fn.datepicker;
	t.fn.datepicker = function(n) {
		var i = Array.apply(null, arguments);
		i.shift();
		var s;
		return this.each(function() {
			var r = t(this),
				l = r.data("datepicker"),
				u = "object" == typeof n && n;
			if (!l) {
				var f = o(this, "date"),
					p = t.extend({}, d, f, u),
					g = a(p.language),
					m = t.extend({}, d, g, f, u);
				if (r.is(".input-daterange") || m.inputs) {
					var v = {
						inputs: m.inputs || r.find("input").toArray()
					};
					r.data("datepicker", l = new h(this, t.extend(m, v)))
				} else r.data("datepicker", l = new c(this, m))
			}
			return "string" == typeof n && "function" == typeof l[n] && (s = l[n].apply(l, i), s !== e) ? !1 : void 0
		}), s !== e ? s : this
	};
	var d = t.fn.datepicker.defaults = {
		autoclose: !1,
		beforeShowDay: t.noop,
		calendarWeeks: !1,
		clearBtn: !1,
		daysOfWeekDisabled: [],
		endDate: 1 / 0,
		forceParse: !0,
		format: "mm/dd/yyyy",
		keyboardNavigation: !0,
		language: "en",
		minViewMode: 0,
		multidate: !1,
		multidateSeparator: ",",
		orientation: "auto",
		rtl: !1,
		startDate: -1 / 0,
		startView: 0,
		todayBtn: !1,
		todayHighlight: !1,
		weekStart: 0
	},
		f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
	t.fn.datepicker.Constructor = c;
	var p = t.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	},
		g = {
			modes: [{
				clsName: "days",
				navFnc: "Month",
				navStep: 1
			}, {
				clsName: "months",
				navFnc: "FullYear",
				navStep: 1
			}, {
				clsName: "years",
				navFnc: "FullYear",
				navStep: 10
			}],
			isLeapYear: function(t) {
				return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
			},
			getDaysInMonth: function(t, e) {
				return [31, g.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
			},
			validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
			nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
			parseFormat: function(t) {
				var e = t.replace(this.validParts, "\x00").split("\x00"),
					n = t.match(this.validParts);
				if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
				return {
					separators: e,
					parts: n
				}
			},
			parseDate: function(i, s, o) {
				function a() {
					var t = this.slice(0, d[h].length),
						e = d[h].slice(0, t.length);
					return t === e
				}
				if (!i) return e;
				if (i instanceof Date) return i;
				"string" == typeof s && (s = g.parseFormat(s));
				var r, l, h, u = /([\-+]\d+)([dmwy])/,
					d = i.match(/([\-+]\d+)([dmwy])/g);
				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
					for (i = new Date, h = 0; h < d.length; h++) switch (r = u.exec(d[h]), l = parseInt(r[1]), r[2]) {
					case "d":
						i.setUTCDate(i.getUTCDate() + l);
						break;
					case "m":
						i = c.prototype.moveMonth.call(c.prototype, i, l);
						break;
					case "w":
						i.setUTCDate(i.getUTCDate() + 7 * l);
						break;
					case "y":
						i = c.prototype.moveYear.call(c.prototype, i, l)
					}
					return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
				}
				d = i && i.match(this.nonpunctuation) || [], i = new Date;
				var f, m, v = {},
					b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
					y = {
						yyyy: function(t, e) {
							return t.setUTCFullYear(e)
						},
						yy: function(t, e) {
							return t.setUTCFullYear(2e3 + e)
						},
						m: function(t, e) {
							if (isNaN(t)) return t;
							for (e -= 1; 0 > e;) e += 12;
							for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
							return t
						},
						d: function(t, e) {
							return t.setUTCDate(e)
						}
					};
				y.M = y.MM = y.mm = y.m, y.dd = y.d, i = n(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
				var w = s.parts.slice();
				if (d.length !== w.length && (w = t(w).filter(function(e, n) {
					return -1 !== t.inArray(n, b)
				}).toArray()), d.length === w.length) {
					var x;
					for (h = 0, x = w.length; x > h; h++) {
						if (f = parseInt(d[h], 10), r = w[h], isNaN(f)) switch (r) {
						case "MM":
							m = t(p[o].months).filter(a), f = t.inArray(m[0], p[o].months) + 1;
							break;
						case "M":
							m = t(p[o].monthsShort).filter(a), f = t.inArray(m[0], p[o].monthsShort) + 1
						}
						v[r] = f
					}
					var C, S;
					for (h = 0; h < b.length; h++) S = b[h], S in v && !isNaN(v[S]) && (C = new Date(i), y[S](C, v[S]), isNaN(C) || (i = C))
				}
				return i
			},
			formatDate: function(e, n, i) {
				if (!e) return "";
				"string" == typeof n && (n = g.parseFormat(n));
				var s = {
					d: e.getUTCDate(),
					D: p[i].daysShort[e.getUTCDay()],
					DD: p[i].days[e.getUTCDay()],
					m: e.getUTCMonth() + 1,
					M: p[i].monthsShort[e.getUTCMonth()],
					MM: p[i].months[e.getUTCMonth()],
					yy: e.getUTCFullYear().toString().substring(2),
					yyyy: e.getUTCFullYear()
				};
				s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
				for (var o = t.extend([], n.separators), a = 0, r = n.parts.length; r >= a; a++) o.length && e.push(o.shift()), e.push(s[n.parts[a]]);
				return e.join("")
			},
			headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
			footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
		};
	g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function() {
		return t.fn.datepicker = u, this
	}, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
		var n = t(this);
		n.data("datepicker") || (e.preventDefault(), n.datepicker("show"))
	}), t(function() {
		t('[data-provide="datepicker-inline"]').datepicker()
	})
}(window.jQuery), !
function(t, e) {
	var n = function(e, n, i) {
			this.parentEl = "body", this.element = t(e);
			var s = '<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input"><label for="daterangepicker_start"></label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /></div><div class="daterangepicker_end_input"><label for="daterangepicker_end"></label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /></div><button class="applyBtn" disabled="disabled"></button>&nbsp;<button class="cancelBtn"></button></div></div></div>';
			("object" != typeof n || null === n) && (n = {}), this.parentEl = t("object" == typeof n && n.parentEl && t(n.parentEl).length ? n.parentEl : this.parentEl), this.container = t(s).appendTo(this.parentEl), this.setOptions(n, i);
			var o = this.container;
			t.each(this.buttonClasses, function(t, e) {
				o.find("button").addClass(e)
			}), this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel), this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", t.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", t.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", t.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", t.proxy(this.enterDate, this)).on("mouseleave.daterangepicker", "td.available", t.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", t.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", t.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.ampmselect", t.proxy(this.updateTime, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", t.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", t.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", t.proxy(this.showCalendars, this)).on("click.daterangepicker", "li", t.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", t.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", t.proxy(this.updateFormInputs, this)), this.element.is("input") ? this.element.on({
				"click.daterangepicker": t.proxy(this.show, this),
				"focus.daterangepicker": t.proxy(this.show, this),
				"keyup.daterangepicker": t.proxy(this.updateFromControl, this)
			}) : this.element.on("click.daterangepicker", t.proxy(this.toggle, this))
		};
	n.prototype = {
		constructor: n,
		setOptions: function(n, i) {
			if (this.startDate = e().startOf("day"), this.endDate = e().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.timePicker = !1, this.timePickerIncrement = 30, this.timePicker12Hour = !0, this.singleDatePicker = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.buttonClasses = ["btn", "btn-small"], this.applyClass = "btn-success", this.cancelClass = "btn-default", this.format = "MM/DD/YYYY", this.separator = " - ", this.locale = {
				applyLabel: "Apply",
				cancelLabel: "Cancel",
				fromLabel: "From",
				toLabel: "To",
				weekLabel: "W",
				customRangeLabel: "Custom Range",
				daysOfWeek: e()._lang._weekdaysMin.slice(),
				monthNames: e()._lang._monthsShort.slice(),
				firstDay: 0
			}, this.cb = function() {}, "string" == typeof n.format && (this.format = n.format), "string" == typeof n.separator && (this.separator = n.separator), "string" == typeof n.startDate && (this.startDate = e(n.startDate, this.format)), "string" == typeof n.endDate && (this.endDate = e(n.endDate, this.format)), "string" == typeof n.minDate && (this.minDate = e(n.minDate, this.format)), "string" == typeof n.maxDate && (this.maxDate = e(n.maxDate, this.format)), "object" == typeof n.startDate && (this.startDate = e(n.startDate)), "object" == typeof n.endDate && (this.endDate = e(n.endDate)), "object" == typeof n.minDate && (this.minDate = e(n.minDate)), "object" == typeof n.maxDate && (this.maxDate = e(n.maxDate)), "string" == typeof n.applyClass && (this.applyClass = n.applyClass), "string" == typeof n.cancelClass && (this.cancelClass = n.cancelClass), "object" == typeof n.dateLimit && (this.dateLimit = n.dateLimit), "object" == typeof n.locale) {
				if ("object" == typeof n.locale.daysOfWeek && (this.locale.daysOfWeek = n.locale.daysOfWeek.slice()), "object" == typeof n.locale.monthNames && (this.locale.monthNames = n.locale.monthNames.slice()), "number" == typeof n.locale.firstDay) {
					this.locale.firstDay = n.locale.firstDay;
					for (var s = n.locale.firstDay; s > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--
				}
				"string" == typeof n.locale.applyLabel && (this.locale.applyLabel = n.locale.applyLabel), "string" == typeof n.locale.cancelLabel && (this.locale.cancelLabel = n.locale.cancelLabel), "string" == typeof n.locale.fromLabel && (this.locale.fromLabel = n.locale.fromLabel), "string" == typeof n.locale.toLabel && (this.locale.toLabel = n.locale.toLabel), "string" == typeof n.locale.weekLabel && (this.locale.weekLabel = n.locale.weekLabel), "string" == typeof n.locale.customRangeLabel && (this.locale.customRangeLabel = n.locale.customRangeLabel)
			}
			"string" == typeof n.opens && (this.opens = n.opens), "boolean" == typeof n.showWeekNumbers && (this.showWeekNumbers = n.showWeekNumbers), "string" == typeof n.buttonClasses && (this.buttonClasses = [n.buttonClasses]), "object" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses), "boolean" == typeof n.showDropdowns && (this.showDropdowns = n.showDropdowns), "boolean" == typeof n.singleDatePicker && (this.singleDatePicker = n.singleDatePicker), "boolean" == typeof n.timePicker && (this.timePicker = n.timePicker), "number" == typeof n.timePickerIncrement && (this.timePickerIncrement = n.timePickerIncrement), "boolean" == typeof n.timePicker12Hour && (this.timePicker12Hour = n.timePicker12Hour);
			var o, a, r;
			if ("undefined" == typeof n.startDate && "undefined" == typeof n.endDate && t(this.element).is("input[type=text]")) {
				var l = t(this.element).val(),
					c = l.split(this.separator);
				o = a = null, 2 == c.length ? (o = e(c[0], this.format), a = e(c[1], this.format)) : this.singleDatePicker && (o = e(l, this.format), a = e(l, this.format)), null !== o && null !== a && (this.startDate = o, this.endDate = a)
			}
			if ("object" == typeof n.ranges) {
				for (r in n.ranges) o = e(n.ranges[r][0]), a = e(n.ranges[r][1]), this.minDate && o.isBefore(this.minDate) && (o = e(this.minDate)), this.maxDate && a.isAfter(this.maxDate) && (a = e(this.maxDate)), this.minDate && a.isBefore(this.minDate) || this.maxDate && o.isAfter(this.maxDate) || (this.ranges[r] = [o, a]);
				var h = "<ul>";
				for (r in this.ranges) h += "<li>" + r + "</li>";
				h += "<li>" + this.locale.customRangeLabel + "</li>", h += "</ul>", this.container.find(".ranges ul").remove(), this.container.find(".ranges").prepend(h)
			}
			if ("function" == typeof i && (this.cb = i), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day")), this.singleDatePicker ? (this.opens = "right", this.container.find(".calendar.right").show(), this.container.find(".calendar.left").hide(), this.container.find(".ranges").hide(), this.container.find(".calendar.right").hasClass("single") || this.container.find(".calendar.right").addClass("single")) : (this.container.find(".calendar.right").removeClass("single"), this.container.find(".ranges").show()), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.oldChosenLabel = this.chosenLabel, this.leftCalendar = {
				month: e([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute()]),
				calendar: []
			}, this.rightCalendar = {
				month: e([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()]),
				calendar: []
			}, "right" == this.opens) {
				var u = this.container.find(".calendar.left"),
					d = this.container.find(".calendar.right");
				u.removeClass("left").addClass("right"), d.removeClass("right").addClass("left")
			}
			"undefined" != typeof n.ranges || this.singleDatePicker || this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.updateView(), this.updateCalendars()
		},
		setStartDate: function(t) {
			"string" == typeof t && (this.startDate = e(t, this.format)), "object" == typeof t && (this.startDate = e(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.oldStartDate = this.startDate.clone(), this.updateView(), this.updateCalendars()
		},
		setEndDate: function(t) {
			"string" == typeof t && (this.endDate = e(t, this.format)), "object" == typeof t && (this.endDate = e(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.oldEndDate = this.endDate.clone(), this.updateView(), this.updateCalendars()
		},
		updateView: function() {
			this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateFormInputs()
		},
		updateFormInputs: function() {
			this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)), this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)), this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
		},
		updateFromControl: function() {
			if (this.element.is("input") && this.element.val().length) {
				var t = this.element.val().split(this.separator),
					n = null,
					i = null;
				2 === t.length && (n = e(t[0], this.format), i = e(t[1], this.format)), (this.singleDatePicker || null === n || null === i) && (n = e(this.element.val(), this.format), i = n), i.isBefore(n) || (this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.startDate = n, this.endDate = i, this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.updateCalendars())
			}
		},
		notify: function() {
			this.updateView(), this.cb(this.startDate, this.endDate, this.chosenLabel)
		},
		move: function() {
			var e = {
				top: 0,
				left: 0
			};
			this.parentEl.is("body") || (e = {
				top: this.parentEl.offset().top - this.parentEl.scrollTop(),
				left: this.parentEl.offset().left - this.parentEl.scrollLeft()
			}), "left" == this.opens ? (this.container.css({
				top: this.element.offset().top + this.element.outerHeight() - e.top,
				right: t(window).width() - this.element.offset().left - this.element.outerWidth() - e.left,
				left: "auto"
			}), this.container.offset().left < 0 && this.container.css({
				right: "auto",
				left: 9
			})) : (this.container.css({
				top: this.element.offset().top + this.element.outerHeight() - e.top,
				left: this.element.offset().left - e.left,
				right: "auto"
			}), this.container.offset().left + this.container.outerWidth() > t(window).width() && this.container.css({
				left: "auto",
				right: 0
			}))
		},
		toggle: function() {
			this.element.hasClass("active") ? this.hide() : this.show()
		},
		show: function() {
			this.element.addClass("active"), this.container.show(), this.move(), t(document).on("click.daterangepicker", t.proxy(this.outsideClick, this)), t(document).on("click.daterangepicker", "[data-toggle=dropdown]", t.proxy(this.outsideClick, this)), this.element.trigger("show.daterangepicker", this)
		},
		outsideClick: function(e) {
			var n = t(e.target);
			n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-date").length || this.hide()
		},
		hide: function() {
			t(document).off("click.daterangepicker", this.outsideClick), this.element.removeClass("active"), this.container.hide(), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.element.trigger("hide.daterangepicker", this)
		},
		enterRange: function(t) {
			var e = t.target.innerHTML;
			if (e == this.locale.customRangeLabel) this.updateView();
			else {
				var n = this.ranges[e];
				this.container.find("input[name=daterangepicker_start]").val(n[0].format(this.format)), this.container.find("input[name=daterangepicker_end]").val(n[1].format(this.format))
			}
		},
		showCalendars: function() {
			this.container.addClass("show-calendar"), this.move()
		},
		hideCalendars: function() {
			this.container.removeClass("show-calendar")
		},
		updateInputText: function() {
			this.element.is("input") && !this.singleDatePicker ? this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format)) : this.element.is("input") && this.element.val(this.startDate.format(this.format))
		},
		clickRange: function(t) {
			var e = t.target.innerHTML;
			if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
			else {
				var n = this.ranges[e];
				this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()), this.updateCalendars(), this.updateInputText(), this.hideCalendars(), this.hide(), this.element.trigger("apply.daterangepicker", this)
			}
		},
		clickPrev: function(e) {
			var n = t(e.target).parents(".calendar");
			n.hasClass("left") ? this.leftCalendar.month.subtract("month", 1) : this.rightCalendar.month.subtract("month", 1), this.updateCalendars()
		},
		clickNext: function(e) {
			var n = t(e.target).parents(".calendar");
			n.hasClass("left") ? this.leftCalendar.month.add("month", 1) : this.rightCalendar.month.add("month", 1), this.updateCalendars()
		},
		enterDate: function(e) {
			var n = t(e.target).attr("data-title"),
				i = n.substr(1, 1),
				s = n.substr(3, 1),
				o = t(e.target).parents(".calendar");
			o.hasClass("left") ? this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[i][s].format(this.format)) : this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[i][s].format(this.format))
		},
		clickDate: function(n) {
			var i, s, o = t(n.target).attr("data-title"),
				a = o.substr(1, 1),
				r = o.substr(3, 1),
				l = t(n.target).parents(".calendar");
			if (l.hasClass("left")) {
				if (i = this.leftCalendar.calendar[a][r], s = this.endDate, "object" == typeof this.dateLimit) {
					var c = e(i).add(this.dateLimit).startOf("day");
					s.isAfter(c) && (s = c)
				}
			} else if (i = this.startDate, s = this.rightCalendar.calendar[a][r], "object" == typeof this.dateLimit) {
				var h = e(s).subtract(this.dateLimit).startOf("day");
				i.isBefore(h) && (i = h)
			}
			if (this.singleDatePicker && l.hasClass("left") ? s = i.clone() : this.singleDatePicker && l.hasClass("right") && (i = s.clone()), l.find("td").removeClass("active"), i.isSame(s) || i.isBefore(s)) t(n.target).addClass("active"), this.startDate = i, this.endDate = s, this.chosenLabel = this.locale.customRangeLabel;
			else if (i.isAfter(s)) {
				t(n.target).addClass("active");
				var u = this.endDate.diff(this.startDate);
				this.startDate = i, this.endDate = e(i).add("ms", u), this.chosenLabel = this.locale.customRangeLabel
			}
			this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()), this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateCalendars(), this.timePicker || s.endOf("day"), this.singleDatePicker && this.clickApply()
		},
		clickApply: function() {
			this.updateInputText(), this.hide(), this.element.trigger("apply.daterangepicker", this)
		},
		clickCancel: function() {
			this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.chosenLabel = this.oldChosenLabel, this.updateView(), this.updateCalendars(), this.hide(), this.element.trigger("cancel.daterangepicker", this)
		},
		updateMonthYear: function(e) {
			var n = t(e.target).closest(".calendar").hasClass("left"),
				i = n ? "left" : "right",
				s = this.container.find(".calendar." + i),
				o = parseInt(s.find(".monthselect").val(), 10),
				a = s.find(".yearselect").val();
			this[i + "Calendar"].month.month(o).year(a), this.updateCalendars()
		},
		updateTime: function(e) {
			var n = t(e.target).closest(".calendar").hasClass("left"),
				i = n ? "left" : "right",
				s = this.container.find(".calendar." + i),
				o = parseInt(s.find(".hourselect").val(), 10),
				a = parseInt(s.find(".minuteselect").val(), 10);
			if (this.timePicker12Hour) {
				var r = s.find(".ampmselect").val();
				"PM" === r && 12 > o && (o += 12), "AM" === r && 12 === o && (o = 0)
			}
			if (n) {
				var l = this.startDate.clone();
				l.hour(o), l.minute(a), this.startDate = l, this.leftCalendar.month.hour(o).minute(a)
			} else {
				var c = this.endDate.clone();
				c.hour(o), c.minute(a), this.endDate = c, this.rightCalendar.month.hour(o).minute(a)
			}
			this.updateCalendars()
		},
		updateCalendars: function() {
			this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), "left"), this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), "right"), this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate)), this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate)), this.container.find(".ranges li").removeClass("active");
			var t = !0,
				e = 0;
			for (var n in this.ranges) this.timePicker ? this.startDate.isSame(this.ranges[n][0]) && this.endDate.isSame(this.ranges[n][1]) && (t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html()) : this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD") && (t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html()), e++;
			t && (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html())
		},
		buildCalendar: function(t, n, i, s) {
			var o, a = e([n, t, 1]),
				r = e(a).subtract("month", 1).month(),
				l = e(a).subtract("month", 1).year(),
				c = e([l, r]).daysInMonth(),
				h = a.day(),
				u = [];
			for (o = 0; 6 > o; o++) u[o] = [];
			var d = c - h + this.locale.firstDay + 1;
			d > c && (d -= 7), h == this.locale.firstDay && (d = c - 6);
			var f, p, g = e([l, r, d, 12, s]);
			for (o = 0, f = 0, p = 0; 42 > o; o++, f++, g = e(g).add("hour", 24)) o > 0 && f % 7 === 0 && (f = 0, p++), u[p][f] = g.clone().hour(i), g.hour(12);
			return u
		},
		renderDropdowns: function(t, e, n) {
			for (var i = t.month(), s = '<select class="monthselect">', o = !1, a = !1, r = 0; 12 > r; r++)(!o || r >= e.month()) && (!a || r <= n.month()) && (s += "<option value='" + r + "'" + (r === i ? " selected='selected'" : "") + ">" + this.locale.monthNames[r] + "</option>");
			s += "</select>";
			for (var l = t.year(), c = n && n.year() || l + 5, h = e && e.year() || l - 50, u = '<select class="yearselect">', d = h; c >= d; d++) u += '<option value="' + d + '"' + (d === l ? ' selected="selected"' : "") + ">" + d + "</option>";
			return u += "</select>", s + u
		},
		renderCalendar: function(e, n, i, s) {
			var o = '<div class="calendar-date">';
			o += '<table class="table-condensed">', o += "<thead>", o += "<tr>", this.showWeekNumbers && (o += "<th></th>"), o += !i || i.isBefore(e[1][1]) ? '<th class="prev available"><i class="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>' : "<th></th>";
			var a = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
			this.showDropdowns && (a = this.renderDropdowns(e[1][1], i, s)), o += '<th colspan="5" class="month">' + a + "</th>", o += !s || s.isAfter(e[1][1]) ? '<th class="next available"><i class="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>' : "<th></th>", o += "</tr>", o += "<tr>", this.showWeekNumbers && (o += '<th class="week">' + this.locale.weekLabel + "</th>"), t.each(this.locale.daysOfWeek, function(t, e) {
				o += "<th>" + e + "</th>"
			}), o += "</tr>", o += "</thead>", o += "<tbody>";
			for (var r = 0; 6 > r; r++) {
				o += "<tr>", this.showWeekNumbers && (o += '<td class="week">' + e[r][0].week() + "</td>");
				for (var l = 0; 7 > l; l++) {
					var c = "available ";
					c += e[r][l].month() == e[1][1].month() ? "" : "off", i && e[r][l].isBefore(i) || s && e[r][l].isAfter(s) ? c = " off disabled " : e[r][l].format("YYYY-MM-DD") == n.format("YYYY-MM-DD") ? (c += " active ", e[r][l].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && (c += " start-date "), e[r][l].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && (c += " end-date ")) : e[r][l] >= this.startDate && e[r][l] <= this.endDate && (c += " in-range ", e[r][l].isSame(this.startDate) && (c += " start-date "), e[r][l].isSame(this.endDate) && (c += " end-date "));
					var h = "r" + r + "c" + l;
					o += '<td class="' + c.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + h + '">' + e[r][l].date() + "</td>"
				}
				o += "</tr>"
			}
			o += "</tbody>", o += "</table>", o += "</div>";
			var u;
			if (this.timePicker) {
				o += '<div class="calendar-time">', o += '<select class="hourselect">';
				var d = 0,
					f = 23,
					p = n.hour();
				for (this.timePicker12Hour && (d = 1, f = 12, p >= 12 && (p -= 12), 0 === p && (p = 12)), u = d; f >= u; u++) o += u == p ? '<option value="' + u + '" selected="selected">' + u + "</option>" : '<option value="' + u + '">' + u + "</option>";
				for (o += "</select> : ", o += '<select class="minuteselect">', u = 0; 60 > u; u += this.timePickerIncrement) {
					var g = u;
					10 > g && (g = "0" + g), o += u == n.minute() ? '<option value="' + u + '" selected="selected">' + g + "</option>" : '<option value="' + u + '">' + g + "</option>"
				}
				o += "</select> ", this.timePicker12Hour && (o += '<select class="ampmselect">', o += n.hour() >= 12 ? '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>' : '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>', o += "</select>"), o += "</div>"
			}
			return o
		},
		remove: function() {
			this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData("daterangepicker")
		}
	}, t.fn.daterangepicker = function(e, i) {
		return this.each(function() {
			var s = t(this);
			s.data("daterangepicker") && s.data("daterangepicker").remove(), s.data("daterangepicker", new n(s, e, i))
		}), this
	}
}(window.jQuery, window.moment), function() {
	var t = [].slice;
	!
	function(e, n) {
		"use strict";
		var i;
		return i = function() {
			function t(t, n) {
				null == n && (n = {}), this.$element = e(t), this.options = e.extend({}, e.fn.bootstrapSwitch.defaults, n, {
					state: this.$element.is(":checked"),
					size: this.$element.data("size"),
					animate: this.$element.data("animate"),
					disabled: this.$element.is(":disabled"),
					readonly: this.$element.is("[readonly]"),
					onColor: this.$element.data("on-color"),
					offColor: this.$element.data("off-color"),
					onText: this.$element.data("on-text"),
					offText: this.$element.data("off-text"),
					labelText: this.$element.data("label-text"),
					baseClass: this.$element.data("base-class"),
					wrapperClass: this.$element.data("wrapper-class")
				}), this.$wrapper = e("<div>", {
					"class": function(t) {
						return function() {
							var e;
							return e = ["" + t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)), e.push(t.options.state ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), null != t.options.size && e.push("" + t.options.baseClass + "-" + t.options.size), t.options.animate && e.push("" + t.options.baseClass + "-animate"), t.options.disabled && e.push("" + t.options.baseClass + "-disabled"), t.options.readonly && e.push("" + t.options.baseClass + "-readonly"), t.$element.attr("id") && e.push("" + t.options.baseClass + "-id-" + t.$element.attr("id")), e.join(" ")
						}
					}(this)()
				}), this.$container = e("<div>", {
					"class": "" + this.options.baseClass + "-container"
				}), this.$on = e("<span>", {
					html: this.options.onText,
					"class": "" + this.options.baseClass + "-handle-on " + this.options.baseClass + "-" + this.options.onColor
				}), this.$off = e("<span>", {
					html: this.options.offText,
					"class": "" + this.options.baseClass + "-handle-off " + this.options.baseClass + "-" + this.options.offColor
				}), this.$label = e("<label>", {
					"for": this.$element.attr("id"),
					html: this.options.labelText,
					"class": "" + this.options.baseClass + "-label"
				}), this.$element.on("init.bootstrapSwitch", function(e) {
					return function() {
						return e.options.onInit.apply(t, arguments)
					}
				}(this)), this.$element.on("switchChange.bootstrapSwitch", function(e) {
					return function() {
						return e.options.onSwitchChange.apply(t, arguments)
					}
				}(this)), this.$container = this.$element.wrap(this.$container).parent(), this.$wrapper = this.$container.wrap(this.$wrapper).parent(), this.$element.before(this.$on).before(this.$label).before(this.$off).trigger("init.bootstrapSwitch"), this._elementHandlers(), this._handleHandlers(), this._labelHandlers(), this._formHandler()
			}
			return t.prototype._constructor = t, t.prototype.state = function(t, e) {
				return "undefined" == typeof t ? this.options.state : this.options.disabled || this.options.readonly ? this.$element : (t = !! t, this.$element.prop("checked", t).trigger("change.bootstrapSwitch", e), this.$element)
			}, t.prototype.toggleState = function(t) {
				return this.options.disabled || this.options.readonly ? this.$element : this.$element.prop("checked", !this.options.state).trigger("change.bootstrapSwitch", t)
			}, t.prototype.size = function(t) {
				return "undefined" == typeof t ? this.options.size : (null != this.options.size && this.$wrapper.removeClass("" + this.options.baseClass + "-" + this.options.size), t && this.$wrapper.addClass("" + this.options.baseClass + "-" + t), this.options.size = t, this.$element)
			}, t.prototype.animate = function(t) {
				return "undefined" == typeof t ? this.options.animate : (t = !! t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-animate"), this.options.animate = t, this.$element)
			}, t.prototype.disabled = function(t) {
				return "undefined" == typeof t ? this.options.disabled : (t = !! t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-disabled"), this.$element.prop("disabled", t), this.options.disabled = t, this.$element)
			}, t.prototype.toggleDisabled = function() {
				return this.$element.prop("disabled", !this.options.disabled), this.$wrapper.toggleClass("" + this.options.baseClass + "-disabled"), this.options.disabled = !this.options.disabled, this.$element
			}, t.prototype.readonly = function(t) {
				return "undefined" == typeof t ? this.options.readonly : (t = !! t, this.$wrapper[t ? "addClass" : "removeClass"]("" + this.options.baseClass + "-readonly"), this.$element.prop("readonly", t), this.options.readonly = t, this.$element)
			}, t.prototype.toggleReadonly = function() {
				return this.$element.prop("readonly", !this.options.readonly), this.$wrapper.toggleClass("" + this.options.baseClass + "-readonly"), this.options.readonly = !this.options.readonly, this.$element
			}, t.prototype.onColor = function(t) {
				var e;
				return e = this.options.onColor, "undefined" == typeof t ? e : (null != e && this.$on.removeClass("" + this.options.baseClass + "-" + e), this.$on.addClass("" + this.options.baseClass + "-" + t), this.options.onColor = t, this.$element)
			}, t.prototype.offColor = function(t) {
				var e;
				return e = this.options.offColor, "undefined" == typeof t ? e : (null != e && this.$off.removeClass("" + this.options.baseClass + "-" + e), this.$off.addClass("" + this.options.baseClass + "-" + t), this.options.offColor = t, this.$element)
			}, t.prototype.onText = function(t) {
				return "undefined" == typeof t ? this.options.onText : (this.$on.html(t), this.options.onText = t, this.$element)
			}, t.prototype.offText = function(t) {
				return "undefined" == typeof t ? this.options.offText : (this.$off.html(t), this.options.offText = t, this.$element)
			}, t.prototype.labelText = function(t) {
				return "undefined" == typeof t ? this.options.labelText : (this.$label.html(t), this.options.labelText = t, this.$element)
			}, t.prototype.baseClass = function() {
				return this.options.baseClass
			}, t.prototype.wrapperClass = function(t) {
				return "undefined" == typeof t ? this.options.wrapperClass : (t || (t = e.fn.bootstrapSwitch.defaults.wrapperClass), this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")), this.$wrapper.addClass(this._getClasses(t).join(" ")), this.options.wrapperClass = t, this.$element)
			}, t.prototype.destroy = function() {
				var t;
				return t = this.$element.closest("form"), t.length && t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"), this.$container.children().not(this.$element).remove(), this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"), this.$element
			}, t.prototype._elementHandlers = function() {
				return this.$element.on({
					"change.bootstrapSwitch": function(t) {
						return function(n, i) {
							var s;
							return n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), s = t.$element.is(":checked"), s !== t.options.state ? (t.options.state = s, t.$wrapper.removeClass(s ? "" + t.options.baseClass + "-off" : "" + t.options.baseClass + "-on").addClass(s ? "" + t.options.baseClass + "-on" : "" + t.options.baseClass + "-off"), i ? void 0 : (t.$element.is(":radio") && e("[name='" + t.$element.attr("name") + "']").not(t.$element).prop("checked", !1).trigger("change.bootstrapSwitch", !0), t.$element.trigger("switchChange.bootstrapSwitch", [s]))) : void 0
						}
					}(this),
					"focus.bootstrapSwitch": function(t) {
						return function(e) {
							return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.$wrapper.addClass("" + t.options.baseClass + "-focused")
						}
					}(this),
					"blur.bootstrapSwitch": function(t) {
						return function(e) {
							return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.$wrapper.removeClass("" + t.options.baseClass + "-focused")
						}
					}(this),
					"keydown.bootstrapSwitch": function(t) {
						return function(e) {
							if (e.which && !t.options.disabled && !t.options.readonly) switch (e.which) {
							case 32:
								return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.toggleState();
							case 37:
								return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.state(!1);
							case 39:
								return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t.state(!0)
							}
						}
					}(this)
				})
			}, t.prototype._handleHandlers = function() {
				return this.$on.on("click.bootstrapSwitch", function(t) {
					return function() {
						return t.state(!1), t.$element.trigger("focus.bootstrapSwitch")
					}
				}(this)), this.$off.on("click.bootstrapSwitch", function(t) {
					return function() {
						return t.state(!0), t.$element.trigger("focus.bootstrapSwitch")
					}
				}(this))
			}, t.prototype._labelHandlers = function() {
				return this.$label.on({
					"mousemove.bootstrapSwitch touchmove.bootstrapSwitch": function(t) {
						return function(e) {
							var n, i, s, o;
							return t.drag ? (e.preventDefault(), i = e.pageX || e.originalEvent.touches[0].pageX, s = (i - t.$wrapper.offset().left) / t.$wrapper.width() * 100, n = 25, o = 75, n > s ? s = n : s > o && (s = o), t.$container.css("margin-left", "" + (s - o) + "%"), t.$element.trigger("focus.bootstrapSwitch")) : void 0
						}
					}(this),
					"mousedown.bootstrapSwitch touchstart.bootstrapSwitch": function(t) {
						return function(e) {
							return t.drag || t.options.disabled || t.options.readonly ? void 0 : (e.preventDefault(), t.drag = !0, t.options.animate && t.$wrapper.removeClass("" + t.options.baseClass + "-animate"), t.$element.trigger("focus.bootstrapSwitch"))
						}
					}(this),
					"mouseup.bootstrapSwitch touchend.bootstrapSwitch": function(t) {
						return function(e) {
							return t.drag ? (e.preventDefault(), t.drag = !1, t.$element.prop("checked", parseInt(t.$container.css("margin-left"), 10) > -(t.$container.width() / 6)).trigger("change.bootstrapSwitch"), t.$container.css("margin-left", ""), t.options.animate ? t.$wrapper.addClass("" + t.options.baseClass + "-animate") : void 0) : void 0
						}
					}(this),
					"mouseleave.bootstrapSwitch": function(t) {
						return function() {
							return t.$label.trigger("mouseup.bootstrapSwitch")
						}
					}(this)
				})
			}, t.prototype._formHandler = function() {
				var t;
				return t = this.$element.closest("form"), t.data("bootstrap-switch") ? void 0 : t.on("reset.bootstrapSwitch", function() {
					return n.setTimeout(function() {
						return t.find("input").filter(function() {
							return e(this).data("bootstrap-switch")
						}).each(function() {
							return e(this).bootstrapSwitch("state", this.checked)
						})
					}, 1)
				}).data("bootstrap-switch", !0)
			}, t.prototype._getClasses = function(t) {
				var n, i, s, o;
				if (!e.isArray(t)) return ["" + this.options.baseClass + "-" + t];
				for (i = [], s = 0, o = t.length; o > s; s++) n = t[s], i.push("" + this.options.baseClass + "-" + n);
				return i
			}, t
		}(), e.fn.bootstrapSwitch = function() {
			var n, s, o;
			return s = arguments[0], n = 2 <= arguments.length ? t.call(arguments, 1) : [], o = this, this.each(function() {
				var t, a;
				return t = e(this), a = t.data("bootstrap-switch"), a || t.data("bootstrap-switch", a = new i(this, s)), "string" == typeof s ? o = a[s].apply(a, n) : void 0
			}), o
		}, e.fn.bootstrapSwitch.Constructor = i, e.fn.bootstrapSwitch.defaults = {
			state: !0,
			size: null,
			animate: !0,
			disabled: !1,
			readonly: !1,
			onColor: "primary",
			offColor: "default",
			onText: "ON",
			offText: "OFF",
			labelText: "&nbsp;",
			baseClass: "bootstrap-switch",
			wrapperClass: "wrapper",
			onInit: function() {},
			onSwitchChange: function() {}
		}
	}(window.jQuery, window)
}.call(this), function(t, e) {
	function n(e) {
		t.extend(!0, be, e)
	}
	function i(n, i, c) {
		function h(t) {
			Z ? (D(), S(), A(), y(t)) : u()
		}
		function u() {
			Q = i.theme ? "ui" : "fc", n.addClass("fc"), n.addClass(i.isRTL ? "fc-rtl" : "fc-ltr"), i.theme && n.addClass("ui-widget"), Z = t("<div class='fc-content' style='position:relative'/>").prependTo(n), J = new s(G, i), K = J.render(), K && n.prepend(K), b(i.defaultView), t(window).resize(_), v() || f()
		}
		function f() {
			setTimeout(function() {
				!te.start && v() && y()
			}, 0)
		}
		function p() {
			t(window).unbind("resize", _), J.destroy(), Z.remove(), n.removeClass("fc fc-rtl ui-widget")
		}
		function g() {
			return 0 !== re.offsetWidth
		}
		function v() {
			return 0 !== t("body")[0].offsetWidth
		}
		function b(e) {
			if (!te || e != te.name) {
				he++, L();
				var n, i = te;
				i ? ((i.beforeHide || j)(), $(Z, Z.height()), i.element.hide()) : $(Z, 1), Z.css("overflow", "hidden"), te = le[e], te ? te.element.show() : te = le[e] = new xe[e](n = ie = t("<div class='fc-view fc-view-" + e + "' style='position:absolute'/>").appendTo(Z), G), i && J.deactivateButton(i.name), J.activateButton(e), y(), Z.css("overflow", ""), i && $(Z, 1), n || (te.afterShow || j)(), he--
			}
		}
		function y(t) {
			if (g()) {
				he++, L(), ne === e && D();
				var i = !1;
				!te.start || t || te.start > ue || ue >= te.end ? (te.render(ue, t || 0), k(!0), i = !0) : te.sizeDirty ? (te.clearEvents(), k(), i = !0) : te.eventsDirty && (te.clearEvents(), i = !0), te.sizeDirty = !1, te.eventsDirty = !1, T(i), ee = n.outerWidth(), J.updateTitle(te.title);
				var s = new Date;
				s >= te.start && te.end > s ? J.disableButton("today") : J.enableButton("today"), he--, te.trigger("viewDisplay", re)
			}
		}
		function C() {
			S(), g() && (D(), k(), L(), te.clearEvents(), te.renderEvents(de), te.sizeDirty = !1)
		}
		function S() {
			t.each(le, function(t, e) {
				e.sizeDirty = !0
			})
		}
		function D() {
			ne = i.contentHeight ? i.contentHeight : i.height ? i.height - (K ? K.height() : 0) - O(Z) : Math.round(Z.width() / Math.max(i.aspectRatio, .5))
		}
		function k(t) {
			he++, te.setHeight(ne, t), ie && (ie.css("position", "relative"), ie = null), te.setWidth(Z.width(), t), he--
		}
		function _() {
			if (!he) if (te.start) {
				var t = ++ce;
				setTimeout(function() {
					t == ce && !he && g() && ee != (ee = n.outerWidth()) && (he++, C(), te.trigger("windowResize", re), he--)
				}, 200)
			} else f()
		}
		function T(t) {
			!i.lazyFetching || oe(te.visStart, te.visEnd) ? M() : t && N()
		}
		function M() {
			ae(te.visStart, te.visEnd)
		}
		function E(t) {
			de = t, N()
		}
		function F(t) {
			N(t)
		}
		function N(t) {
			A(), g() && (te.clearEvents(), te.renderEvents(de, t), te.eventsDirty = !1)
		}
		function A() {
			t.each(le, function(t, e) {
				e.eventsDirty = !0
			})
		}
		function I(t, n, i) {
			te.select(t, n, i === e ? !0 : i)
		}
		function L() {
			te && te.unselect()
		}
		function P() {
			y(-1)
		}
		function H() {
			y(1)
		}
		function R() {
			a(ue, -1), y()
		}
		function z() {
			a(ue, 1), y()
		}
		function W() {
			ue = new Date, y()
		}
		function B(t, e, n) {
			t instanceof Date ? ue = d(t) : m(ue, t, e, n), y()
		}
		function U(t, n, i) {
			t !== e && a(ue, t), n !== e && r(ue, n), i !== e && l(ue, i), y()
		}
		function q() {
			return d(ue)
		}
		function Y() {
			return te
		}
		function V(t, n) {
			return n === e ? i[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (i[t] = n, C()), e)
		}
		function X(t, n) {
			return i[t] ? i[t].apply(n || re, Array.prototype.slice.call(arguments, 2)) : e
		}
		var G = this;
		G.options = i, G.render = h, G.destroy = p, G.refetchEvents = M, G.reportEvents = E, G.reportEventChange = F, G.rerenderEvents = N, G.changeView = b, G.select = I, G.unselect = L, G.prev = P, G.next = H, G.prevYear = R, G.nextYear = z, G.today = W, G.gotoDate = B, G.incrementDate = U, G.formatDate = function(t, e) {
			return w(t, e, i)
		}, G.formatDates = function(t, e, n) {
			return x(t, e, n, i)
		}, G.getDate = q, G.getView = Y, G.option = V, G.trigger = X, o.call(G, i, c);
		var J, K, Z, Q, te, ee, ne, ie, se, oe = G.isFetchNeeded,
			ae = G.fetchEvents,
			re = n[0],
			le = {},
			ce = 0,
			he = 0,
			ue = new Date,
			de = [];
		m(ue, i.year, i.month, i.date), i.droppable && t(document).bind("dragstart", function(e, n) {
			var s = e.target,
				o = t(s);
			if (!o.parents(".fc").length) {
				var a = i.dropAccept;
				(t.isFunction(a) ? a.call(s, o) : o.is(a)) && (se = s, te.dragStart(se, e, n))
			}
		}).bind("dragstop", function(t, e) {
			se && (te.dragStop(se, t, e), se = null)
		})
	}
	function s(n, i) {
		function s() {
			f = i.theme ? "ui" : "fc";
			var n = i.header;
			return n ? p = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(a("left")).append(a("center")).append(a("right"))) : e
		}
		function o() {
			p.remove()
		}
		function a(e) {
			var s = t("<td class='fc-header-" + e + "'/>"),
				o = i.header[e];
			return o && t.each(o.split(" "), function(e) {
				e > 0 && s.append("<span class='fc-header-space'/>");
				var o;
				t.each(this.split(","), function(e, a) {
					if ("title" == a) s.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), o && o.addClass(f + "-corner-right"), o = null;
					else {
						var r;
						if (n[a] ? r = n[a] : xe[a] && (r = function() {
							h.removeClass(f + "-state-hover"), n.changeView(a)
						}), r) {
							var l = i.theme ? q(i.buttonIcons, a) : null,
								c = q(i.buttonText, a),
								h = t("<span class='fc-button fc-button-" + a + " " + f + "-state-default'>" + (l ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + l + "'/></span>" : c) + "</span>").click(function() {
									h.hasClass(f + "-state-disabled") || r()
								}).mousedown(function() {
									h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
								}).mouseup(function() {
									h.removeClass(f + "-state-down")
								}).hover(function() {
									h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
								}, function() {
									h.removeClass(f + "-state-hover").removeClass(f + "-state-down")
								}).appendTo(s);
							X(h), o || h.addClass(f + "-corner-left"), o = h
						}
					}
				}), o && o.addClass(f + "-corner-right")
			}), s
		}
		function r(t) {
			p.find("h2").html(t)
		}
		function l(t) {
			p.find("span.fc-button-" + t).addClass(f + "-state-active")
		}
		function c(t) {
			p.find("span.fc-button-" + t).removeClass(f + "-state-active")
		}
		function h(t) {
			p.find("span.fc-button-" + t).addClass(f + "-state-disabled")
		}
		function u(t) {
			p.find("span.fc-button-" + t).removeClass(f + "-state-disabled")
		}
		var d = this;
		d.render = s, d.destroy = o, d.updateTitle = r, d.activateButton = l, d.deactivateButton = c, d.disableButton = h, d.enableButton = u;
		var f, p = t([])
	}
	function o(n, i) {
		function s(t, e) {
			return !D || D > t || e > k
		}
		function o(t, e) {
			D = t, k = e, L = [];
			var n = ++N,
				i = F.length;
			A = i;
			for (var s = 0; i > s; s++) a(F[s], n)
		}
		function a(e, i) {
			r(e, function(s) {
				if (i == N) {
					if (s) {
						n.eventDataTransform && (s = t.map(s, n.eventDataTransform)), e.eventDataTransform && (s = t.map(s, e.eventDataTransform));
						for (var o = 0; s.length > o; o++) s[o].source = e, y(s[o]);
						L = L.concat(s)
					}
					A--, A || M(L)
				}
			})
		}
		function r(i, s) {
			var o, a, l = we.sourceFetchers;
			for (o = 0; l.length > o; o++) {
				if (a = l[o](i, D, k, s), a === !0) return;
				if ("object" == typeof a) return r(a, s), e
			}
			var c = i.events;
			if (c) t.isFunction(c) ? (m(), c(d(D), d(k), function(t) {
				s(t), b()
			})) : t.isArray(c) ? s(c) : s();
			else {
				var h = i.url;
				if (h) {
					var u = i.success,
						f = i.error,
						p = i.complete,
						g = t.extend({}, i.data || {}),
						v = Q(i.startParam, n.startParam),
						y = Q(i.endParam, n.endParam);
					v && (g[v] = Math.round(+D / 1e3)), y && (g[y] = Math.round(+k / 1e3)), m(), t.ajax(t.extend({}, Ce, i, {
						data: g,
						success: function(e) {
							e = e || [];
							var n = Z(u, this, arguments);
							t.isArray(n) && (e = n), s(e)
						},
						error: function() {
							Z(f, this, arguments), s()
						},
						complete: function() {
							Z(p, this, arguments), b()
						}
					}))
				} else s()
			}
		}
		function l(t) {
			t = c(t), t && (A++, a(t, N))
		}
		function c(n) {
			return t.isFunction(n) || t.isArray(n) ? n = {
				events: n
			} : "string" == typeof n && (n = {
				url: n
			}), "object" == typeof n ? (w(n), F.push(n), n) : e
		}
		function h(e) {
			F = t.grep(F, function(t) {
				return !x(t, e)
			}), L = t.grep(L, function(t) {
				return !x(t.source, e)
			}), M(L)
		}
		function u(t) {
			var e, n, i = L.length,
				s = T().defaultEventEnd,
				o = t.start - t._start,
				a = t.end ? t.end - (t._end || s(t)) : 0;
			for (e = 0; i > e; e++) n = L[e], n._id == t._id && n != t && (n.start = new Date(+n.start + o), n.end = t.end ? new Date(n.end ? +n.end + a : +s(n) + a) : null, n.title = t.title, n.url = t.url, n.allDay = t.allDay, n.className = t.className, n.editable = t.editable, n.color = t.color, n.backgroudColor = t.backgroudColor, n.borderColor = t.borderColor, n.textColor = t.textColor, y(n));
			y(t), M(L)
		}
		function f(t, e) {
			y(t), t.source || (e && (E.events.push(t), t.source = E), L.push(t)), M(L)
		}
		function p(e) {
			if (e) {
				if (!t.isFunction(e)) {
					var n = e + "";
					e = function(t) {
						return t._id == n
					}
				}
				L = t.grep(L, e, !0);
				for (var i = 0; F.length > i; i++) t.isArray(F[i].events) && (F[i].events = t.grep(F[i].events, e, !0))
			} else {
				L = [];
				for (var i = 0; F.length > i; i++) t.isArray(F[i].events) && (F[i].events = [])
			}
			M(L)
		}
		function g(e) {
			return t.isFunction(e) ? t.grep(L, e) : e ? (e += "", t.grep(L, function(t) {
				return t._id == e
			})) : L
		}
		function m() {
			I++ || _("loading", null, !0)
		}
		function b() {
			--I || _("loading", null, !1)
		}
		function y(t) {
			var i = t.source || {},
				s = Q(i.ignoreTimezone, n.ignoreTimezone);
			t._id = t._id || (t.id === e ? "_fc" + Se++ : t.id + ""), t.date && (t.start || (t.start = t.date), delete t.date), t._start = d(t.start = v(t.start, s)), t.end = v(t.end, s), t.end && t.end <= t.start && (t.end = null), t._end = t.end ? d(t.end) : null, t.allDay === e && (t.allDay = Q(i.allDayDefault, n.allDayDefault)), t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = []
		}
		function w(t) {
			t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = [];
			for (var e = we.sourceNormalizers, n = 0; e.length > n; n++) e[n](t)
		}
		function x(t, e) {
			return t && e && C(t) == C(e)
		}
		function C(t) {
			return ("object" == typeof t ? t.events || t.url : "") || t
		}
		var S = this;
		S.isFetchNeeded = s, S.fetchEvents = o, S.addEventSource = l, S.removeEventSource = h, S.updateEvent = u, S.renderEvent = f, S.removeEvents = p, S.clientEvents = g, S.normalizeEvent = y;
		for (var D, k, _ = S.trigger, T = S.getView, M = S.reportEvents, E = {
			events: []
		}, F = [E], N = 0, A = 0, I = 0, L = [], P = 0; i.length > P; P++) c(i[P])
	}
	function a(t, e, n) {
		return t.setFullYear(t.getFullYear() + e), n || u(t), t
	}
	function r(t, e, n) {
		if (+t) {
			var i = t.getMonth() + e,
				s = d(t);
			for (s.setDate(1), s.setMonth(i), t.setMonth(i), n || u(t); t.getMonth() != s.getMonth();) t.setDate(t.getDate() + (s > t ? 1 : -1))
		}
		return t
	}
	function l(t, e, n) {
		if (+t) {
			var i = t.getDate() + e,
				s = d(t);
			s.setHours(9), s.setDate(i), t.setDate(i), n || u(t), c(t, s)
		}
		return t
	}
	function c(t, e) {
		if (+t) for (; t.getDate() != e.getDate();) t.setTime(+t + (e > t ? 1 : -1) * _e)
	}
	function h(t, e) {
		return t.setMinutes(t.getMinutes() + e), t
	}
	function u(t) {
		return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
	}
	function d(t, e) {
		return e ? u(new Date(+t)) : new Date(+t)
	}
	function f() {
		var t, e = 0;
		do t = new Date(1970, e++, 1);
		while (t.getHours());
		return t
	}
	function p(t, e, n) {
		for (e = e || 1; !t.getDay() || n && 1 == t.getDay() || !n && 6 == t.getDay();) l(t, e);
		return t
	}
	function g(t, e) {
		return Math.round((d(t, !0) - d(e, !0)) / ke)
	}
	function m(t, n, i, s) {
		n !== e && n != t.getFullYear() && (t.setDate(1), t.setMonth(0), t.setFullYear(n)), i !== e && i != t.getMonth() && (t.setDate(1), t.setMonth(i)), s !== e && t.setDate(s)
	}
	function v(t, n) {
		return "object" == typeof t ? t : "number" == typeof t ? new Date(1e3 * t) : "string" == typeof t ? t.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(t)) : (n === e && (n = !0), b(t, n) || (t ? new Date(t) : null)) : null
	}
	function b(t, e) {
		var n = t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
		if (!n) return null;
		var i = new Date(n[1], 0, 1);
		if (e || !n[13]) {
			var s = new Date(n[1], 0, 1, 9, 0);
			n[3] && (i.setMonth(n[3] - 1), s.setMonth(n[3] - 1)), n[5] && (i.setDate(n[5]), s.setDate(n[5])), c(i, s), n[7] && i.setHours(n[7]), n[8] && i.setMinutes(n[8]), n[10] && i.setSeconds(n[10]), n[12] && i.setMilliseconds(1e3 * Number("0." + n[12])), c(i, s)
		} else if (i.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), i.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
			var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
			o *= "-" == n[15] ? 1 : -1, i = new Date(+i + 6e4 * o)
		}
		return i
	}
	function y(t) {
		if ("number" == typeof t) return 60 * t;
		if ("object" == typeof t) return 60 * t.getHours() + t.getMinutes();
		var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
		if (e) {
			var n = parseInt(e[1], 10);
			return e[3] && (n %= 12, "p" == e[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (e[2] ? parseInt(e[2], 10) : 0)
		}
	}
	function w(t, e, n) {
		return x(t, null, e, n)
	}
	function x(t, e, n, i) {
		i = i || be;
		var s, o, a, r, l = t,
			c = e,
			h = n.length,
			u = "";
		for (s = 0; h > s; s++) if (o = n.charAt(s), "'" == o) {
			for (a = s + 1; h > a; a++) if ("'" == n.charAt(a)) {
				l && (u += a == s + 1 ? "'" : n.substring(s + 1, a), s = a);
				break
			}
		} else if ("(" == o) {
			for (a = s + 1; h > a; a++) if (")" == n.charAt(a)) {
				var d = w(l, n.substring(s + 1, a), i);
				parseInt(d.replace(/\D/, ""), 10) && (u += d), s = a;
				break
			}
		} else if ("[" == o) {
			for (a = s + 1; h > a; a++) if ("]" == n.charAt(a)) {
				var f = n.substring(s + 1, a),
					d = w(l, f, i);
				d != w(c, f, i) && (u += d), s = a;
				break
			}
		} else if ("{" == o) l = e, c = t;
		else if ("}" == o) l = t, c = e;
		else {
			for (a = h; a > s; a--) if (r = Me[n.substring(s, a)]) {
				l && (u += r(l, i)), s = a - 1;
				break
			}
			a == s && l && (u += o)
		}
		return u
	}
	function C(t) {
		var e, n = new Date(t.getTime());
		return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
	}
	function S(t) {
		return t.end ? D(t.end, t.allDay) : l(d(t.start), 1)
	}
	function D(t, e) {
		return t = d(t), e || t.getHours() || t.getMinutes() ? l(t, 1) : u(t)
	}
	function k(t, e) {
		return 100 * (e.msLength - t.msLength) + (t.event.start - e.event.start)
	}
	function _(t, e) {
		return t.end > e.start && t.start < e.end
	}
	function T(t, e, n, i) {
		var s, o, a, r, l, c, h, u, f = [],
			p = t.length;
		for (s = 0; p > s; s++) o = t[s], a = o.start, r = e[s], r > n && i > a && (n > a ? (l = d(n), h = !1) : (l = a, h = !0), r > i ? (c = d(i), u = !1) : (c = r, u = !0), f.push({
			event: o,
			start: l,
			end: c,
			isStart: h,
			isEnd: u,
			msLength: c - l
		}));
		return f.sort(k)
	}
	function M(t) {
		var e, n, i, s, o, a = [],
			r = t.length;
		for (e = 0; r > e; e++) {
			for (n = t[e], i = 0;;) {
				if (s = !1, a[i]) for (o = 0; a[i].length > o; o++) if (_(a[i][o], n)) {
					s = !0;
					break
				}
				if (!s) break;
				i++
			}
			a[i] ? a[i].push(n) : a[i] = [n]
		}
		return a
	}
	function E(n, i, s) {
		n.unbind("mouseover").mouseover(function(n) {
			for (var o, a, r, l = n.target; l != this;) o = l, l = l.parentNode;
			(a = o._fci) !== e && (o._fci = e, r = i[a], s(r.event, r.element, r), t(n.target).trigger(n)), n.stopPropagation()
		})
	}
	function F(e, n, i) {
		for (var s, o = 0; e.length > o; o++) s = t(e[o]), s.width(Math.max(0, n - A(s, i)))
	}
	function N(e, n, i) {
		for (var s, o = 0; e.length > o; o++) s = t(e[o]), s.height(Math.max(0, n - O(s, i)))
	}
	function A(t, e) {
		return I(t) + P(t) + (e ? L(t) : 0)
	}
	function I(e) {
		return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
	}
	function L(e) {
		return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
	}
	function P(e) {
		return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
	}
	function O(t, e) {
		return H(t) + z(t) + (e ? R(t) : 0)
	}
	function H(e) {
		return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
	}
	function R(e) {
		return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
	}
	function z(e) {
		return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
	}
	function $(t, e) {
		e = "number" == typeof e ? e + "px" : e, t.each(function(t, n) {
			n.style.cssText += ";min-height:" + e + ";_height:" + e
		})
	}
	function j() {}
	function W(t, e) {
		return t - e
	}
	function B(t) {
		return Math.max.apply(Math, t)
	}
	function U(t) {
		return (10 > t ? "0" : "") + t
	}
	function q(t, n) {
		if (t[n] !== e) return t[n];
		for (var i, s = n.split(/(?=[A-Z])/), o = s.length - 1; o >= 0; o--) if (i = t[s[o].toLowerCase()], i !== e) return i;
		return t[""]
	}
	function Y(t) {
		return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
	}
	function V(t) {
		return t.id + "/" + t.className + "/" + t.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, "")
	}
	function X(t) {
		t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
			return !1
		})
	}
	function G(t) {
		t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
	}
	function J(t, e) {
		t.each(function(t, n) {
			n.className = n.className.replace(/^fc-\w*/, "fc-" + De[e.getDay()])
		})
	}
	function K(t, e) {
		var n = t.source || {},
			i = t.color,
			s = n.color,
			o = e("eventColor"),
			a = t.backgroundColor || i || n.backgroundColor || s || e("eventBackgroundColor") || o,
			r = t.borderColor || i || n.borderColor || s || e("eventBorderColor") || o,
			l = t.textColor || n.textColor || e("eventTextColor"),
			c = [];
		return a && c.push("background-color:" + a), r && c.push("border-color:" + r), l && c.push("color:" + l), c.join(";")
	}
	function Z(e, n, i) {
		if (t.isFunction(e) && (e = [e]), e) {
			var s, o;
			for (s = 0; e.length > s; s++) o = e[s].apply(n, i) || o;
			return o
		}
	}
	function Q() {
		for (var t = 0; arguments.length > t; t++) if (arguments[t] !== e) return arguments[t]
	}
	function te(t, e) {
		function n(t, e) {
			e && (r(t, e), t.setDate(1));
			var n = d(t, !0);
			n.setDate(1);
			var c = r(d(n), 1),
				h = d(n),
				u = d(c),
				f = s("firstDay"),
				g = s("weekends") ? 0 : 1;
			g && (p(h), p(u, -1, !0)), l(h, -((h.getDay() - Math.max(f, g) + 7) % 7)), l(u, (7 - u.getDay() + Math.max(f, g)) % 7);
			var m = Math.round((u - h) / (7 * ke));
			"fixed" == s("weekMode") && (l(u, 7 * (6 - m)), m = 6), i.title = a(n, s("titleFormat")), i.start = n, i.end = c, i.visStart = h, i.visEnd = u, o(m, g ? 5 : 7, !0)
		}
		var i = this;
		i.render = n, ie.call(i, t, e, "month");
		var s = i.opt,
			o = i.renderBasic,
			a = e.formatDate
	}
	function ee(t, e) {
		function n(t, e) {
			e && l(t, 7 * e);
			var n = l(d(t), -((t.getDay() - s("firstDay") + 7) % 7)),
				r = l(d(n), 7),
				c = d(n),
				h = d(r),
				u = s("weekends");
			u || (p(c), p(h, -1, !0)), i.title = a(c, l(d(h), -1), s("titleFormat")), i.start = n, i.end = r, i.visStart = c, i.visEnd = h, o(1, u ? 7 : 5, !1)
		}
		var i = this;
		i.render = n, ie.call(i, t, e, "basicWeek");
		var s = i.opt,
			o = i.renderBasic,
			a = e.formatDates
	}
	function ne(t, e) {
		function n(t, e) {
			e && (l(t, e), s("weekends") || p(t, 0 > e ? -1 : 1)), i.title = a(t, s("titleFormat")), i.start = i.visStart = d(t, !0), i.end = i.visEnd = l(d(i.start), 1), o(1, 1, !1)
		}
		var i = this;
		i.render = n, ie.call(i, t, e, "basicDay");
		var s = i.opt,
			o = i.renderBasic,
			a = e.formatDate
	}
	function ie(e, n, i) {
		function s(t, e, n) {
			ne = t, ie = e, o();
			var i = !U;
			i ? a() : Te(), r(n)
		}
		function o() {
			le = ke("isRTL"), le ? (ce = -1, ue = ie - 1) : (ce = 1, ue = 0), me = ke("firstDay"), be = ke("weekends") ? 0 : 1, ye = ke("theme") ? "ui" : "fc", we = ke("columnFormat"), xe = ke("weekNumbers"), Ce = ke("weekNumberTitle"), Se = "iso" != ke("weekNumberCalculation") ? "w" : "W"
		}
		function a() {
			K = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)
		}
		function r(n) {
			var i, s, o, a, r = "",
				l = ye + "-widget-header",
				c = ye + "-widget-content",
				h = z.start.getMonth(),
				d = u(new Date);
			for (r += "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", xe && (r += "<th class='fc-week-number " + l + "'/>"), i = 0; ie > i; i++) o = N(0, i), r += "<th class='fc-day-header fc-" + De[o.getDay()] + " " + l + "'/>";
			for (r += "</tr></thead><tbody>", i = 0; ne > i; i++) {
				for (r += "<tr class='fc-week'>", xe && (r += "<td class='fc-week-number " + c + "'><div/></td>"), s = 0; ie > s; s++) o = N(i, s), a = ["fc-day", "fc-" + De[o.getDay()], c], o.getMonth() != h && a.push("fc-other-month"), +o == +d && (a.push("fc-today"), a.push(ye + "-state-highlight")), r += "<td class='" + a.join(" ") + "' data-date='" + Ne(o, "yyyy-MM-dd") + "'><div>", n && (r += "<div class='fc-day-number'>" + o.getDate() + "</div>"), r += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
				r += "</tr>"
			}
			r += "</tbody></table>", H(), j && j.remove(), j = t(r).appendTo(e), W = j.find("thead"), B = W.find(".fc-day-header"), U = j.find("tbody"), q = U.find("tr"), Y = U.find(".fc-day"), V = q.find("td:first-child"), J = q.eq(0).find(".fc-day-content > div"), G(W.add(W.find("tr"))), G(q), q.eq(0).addClass("fc-first"), q.filter(":last").addClass("fc-last"), xe && W.find(".fc-week-number").text(Ce), B.each(function(e, n) {
				var i = A(e);
				t(n).text(Ne(i, we))
			}), xe && U.find(".fc-week-number > div").each(function(e, n) {
				var i = N(e, 0);
				t(n).text(Ne(i, Se))
			}), Y.each(function(e, n) {
				var i = A(e);
				_e("dayRender", z, i, t(n))
			}), f(Y)
		}
		function c(e) {
			Q = e;
			var n, i, s, o = Q - W.height();
			"variable" == ke("weekMode") ? n = i = Math.floor(o / (1 == ne ? 2 : 6)) : (n = Math.floor(o / ne), i = o - n * (ne - 1)), V.each(function(e, o) {
				ne > e && (s = t(o), $(s.find("> div"), (e == ne - 1 ? i : n) - O(s)))
			}), R()
		}
		function h(t) {
			Z = t, re.clear(), ee = 0, xe && (ee = W.find("th.fc-week-number").outerWidth()), te = Math.floor((Z - ee) / ie), F(B.slice(0, -1), te)
		}
		function f(t) {
			t.click(p).mousedown(Fe)
		}
		function p(e) {
			if (!ke("selectable")) {
				var n = b(t(this).data("date"));
				_e("dayClick", this, n, !0, e)
			}
		}
		function m(t, e, n) {
			n && oe.build();
			for (var i = d(z.visStart), s = l(d(i), ie), o = 0; ne > o; o++) {
				var a = new Date(Math.max(i, t)),
					r = new Date(Math.min(s, e));
				if (r > a) {
					var c, h;
					le ? (c = g(r, i) * ce + ue + 1, h = g(a, i) * ce + ue + 1) : (c = g(a, i), h = g(r, i)), f(v(o, c, o, h - 1))
				}
				l(i, 7), l(s, 7)
			}
		}
		function v(t, n, i, s) {
			var o = oe.rect(t, n, i, s, e);
			return Me(o, e)
		}
		function y(t) {
			return d(t)
		}
		function w(t, e) {
			m(t, l(d(e), 1), !0)
		}
		function x() {
			Ee()
		}
		function C(t, e, n) {
			var i = M(t),
				s = Y[i.row * ie + i.col];
			_e("dayClick", s, t, e, n)
		}
		function S(t, e) {
			ae.start(function(t) {
				Ee(), t && v(t.row, t.col, t.row, t.col)
			}, e)
		}
		function D(t, e, n) {
			var i = ae.stop();
			if (Ee(), i) {
				var s = E(i);
				_e("drop", t, s, !0, e, n)
			}
		}
		function k(t) {
			return d(t.start)
		}
		function _(t) {
			return re.left(t)
		}
		function T(t) {
			return re.right(t)
		}
		function M(t) {
			return {
				row: Math.floor(g(t, z.visStart) / 7),
				col: I(t.getDay())
			}
		}
		function E(t) {
			return N(t.row, t.col)
		}
		function N(t, e) {
			return l(d(z.visStart), 7 * t + e * ce + ue)
		}
		function A(t) {
			return N(Math.floor(t / ie), t % ie)
		}
		function I(t) {
			return (t - Math.max(me, be) + ie) % ie * ce + ue
		}
		function L(t) {
			return q.eq(t)
		}
		function P() {
			var t = 0;
			return xe && (t += ee), {
				left: t,
				right: Z
			}
		}
		function H() {
			$(e, e.height())
		}
		function R() {
			$(e, 1)
		}
		var z = this;
		z.renderBasic = s, z.setHeight = c, z.setWidth = h, z.renderDayOverlay = m, z.defaultSelectionEnd = y, z.renderSelection = w, z.clearSelection = x, z.reportDayClick = C, z.dragStart = S, z.dragStop = D, z.defaultEventEnd = k, z.getHoverListener = function() {
			return ae
		}, z.colContentLeft = _, z.colContentRight = T, z.dayOfWeekCol = I, z.dateCell = M, z.cellDate = E, z.cellIsAllDay = function() {
			return !0
		}, z.allDayRow = L, z.allDayBounds = P, z.getRowCnt = function() {
			return ne
		}, z.getColCnt = function() {
			return ie
		}, z.getColWidth = function() {
			return te
		}, z.getDaySegmentContainer = function() {
			return K
		}, he.call(z, e, n, i), fe.call(z), de.call(z), se.call(z);
		var j, W, B, U, q, Y, V, J, K, Z, Q, te, ee, ne, ie, oe, ae, re, le, ce, ue, me, be, ye, we, xe, Ce, Se, ke = z.opt,
			_e = z.trigger,
			Te = z.clearEvents,
			Me = z.renderOverlay,
			Ee = z.clearOverlays,
			Fe = z.daySelectionMousedown,
			Ne = n.formatDate;
		X(e.addClass("fc-grid")), oe = new pe(function(e, n) {
			var i, s, o;
			B.each(function(e, a) {
				i = t(a), s = i.offset().left, e && (o[1] = s), o = [s], n[e] = o
			}), o[1] = s + i.outerWidth(), q.each(function(n, a) {
				ne > n && (i = t(a), s = i.offset().top, n && (o[1] = s), o = [s], e[n] = o)
			}), o[1] = s + i.outerHeight()
		}), ae = new ge(oe), re = new ve(function(t) {
			return J.eq(t)
		})
	}
	function se() {
		function e(t, e) {
			f(t), _(i(t), e), c("eventAfterAllRender")
		}
		function n() {
			p(), y().empty()
		}
		function i(e) {
			var n, i, s, o, r, c, h = D(),
				u = k(),
				f = d(a.visStart),
				p = l(d(f), u),
				g = t.map(e, S),
				m = [];
			for (n = 0; h > n; n++) {
				for (i = M(T(e, g, f, p)), s = 0; i.length > s; s++) for (o = i[s], r = 0; o.length > r; r++) c = o[r], c.row = n, c.level = s, m.push(c);
				l(f, 7), l(p, 7)
			}
			return m
		}
		function s(t, e, n) {
			h(t) && o(t, e), n.isEnd && u(t) && E(t, e, n), g(t, e)
		}
		function o(t, e) {
			var n, i = w();
			e.draggable({
				zIndex: 9,
				delay: 50,
				opacity: r("dragOpacity"),
				revertDuration: r("dragRevertDuration"),
				start: function(s, o) {
					c("eventDragStart", e, t, s, o), v(t, e), i.start(function(i, s, o, a) {
						e.draggable("option", "revert", !i || !o && !a), C(), i ? (n = 7 * o + a * (r("isRTL") ? -1 : 1), x(l(d(t.start), n), l(S(t), n))) : n = 0
					}, s, "drag")
				},
				stop: function(s, o) {
					i.stop(), C(), c("eventDragStop", e, t, s, o), n ? b(this, t, n, 0, t.allDay, s, o) : (e.css("filter", ""), m(t, e))
				}
			})
		}
		var a = this;
		a.renderEvents = e, a.compileDaySegs = i, a.clearEvents = n, a.bindDaySeg = s, ue.call(a);
		var r = a.opt,
			c = a.trigger,
			h = a.isEventDraggable,
			u = a.isEventResizable,
			f = a.reportEvents,
			p = a.reportEventClear,
			g = a.eventElementHandlers,
			m = a.showEvents,
			v = a.hideEvents,
			b = a.eventDrop,
			y = a.getDaySegmentContainer,
			w = a.getHoverListener,
			x = a.renderDayOverlay,
			C = a.clearOverlays,
			D = a.getRowCnt,
			k = a.getColCnt,
			_ = a.renderDaySegs,
			E = a.resizableDayEvent
	}
	function oe(t, e) {
		function n(t, e) {
			e && l(t, 7 * e);
			var n = l(d(t), -((t.getDay() - s("firstDay") + 7) % 7)),
				r = l(d(n), 7),
				c = d(n),
				h = d(r),
				u = s("weekends");
			u || (p(c), p(h, -1, !0)), i.title = a(c, l(d(h), -1), s("titleFormat")), i.start = n, i.end = r, i.visStart = c, i.visEnd = h, o(u ? 7 : 5)
		}
		var i = this;
		i.render = n, re.call(i, t, e, "agendaWeek");
		var s = i.opt,
			o = i.renderAgenda,
			a = e.formatDates
	}
	function ae(t, e) {
		function n(t, e) {
			e && (l(t, e), s("weekends") || p(t, 0 > e ? -1 : 1));
			var n = d(t, !0),
				r = l(d(n), 1);
			i.title = a(t, s("titleFormat")), i.start = i.visStart = n, i.end = i.visEnd = r, o(1)
		}
		var i = this;
		i.render = n, re.call(i, t, e, "agendaDay");
		var s = i.opt,
			o = i.renderAgenda,
			a = e.formatDate
	}
	function re(n, i, s) {
		function o(t) {
			Oe = t, a(), te ? nn() : r(), c()
		}
		function a() {
			We = tn("theme") ? "ui" : "fc", Ue = tn("weekends") ? 0 : 1, Be = tn("firstDay"), (qe = tn("isRTL")) ? (Ye = -1, Ve = Oe - 1) : (Ye = 1, Ve = 0), Xe = y(tn("minTime")), Ge = y(tn("maxTime")), Je = tn("columnFormat"), Ke = tn("weekNumbers"), Ze = tn("weekNumberTitle"), Qe = "iso" != tn("weekNumberCalculation") ? "w" : "W", Ie = tn("snapMinutes") || tn("slotMinutes")
		}
		function r() {
			var e, i, s, o, a, r = We + "-widget-header",
				l = We + "-widget-content",
				c = 0 == tn("slotMinutes") % 15;
			for (e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>", e += Ke ? "<th class='fc-agenda-axis fc-week-number " + r + "'/>" : "<th class='fc-agenda-axis " + r + "'>&nbsp;</th>", i = 0; Oe > i; i++) e += "<th class='fc- fc-col" + i + " " + r + "'/>";
			for (e += "<th class='fc-agenda-gutter " + r + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + r + "'>&nbsp;</th>", i = 0; Oe > i; i++) e += "<td class='fc- fc-col" + i + " " + l + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
			for (e += "<td class='fc-agenda-gutter " + l + "'>&nbsp;</td></tr></tbody></table>", te = t(e).appendTo(n), ee = te.find("thead"), ne = ee.find("th").slice(1, -1), ie = te.find("tbody"), se = ie.find("td").slice(0, -1), oe = se.find("div.fc-day-content div"), ae = se.eq(0), re = ae.find("> div"), G(ee.add(ee.find("tr"))), G(ie.add(ie.find("tr"))), De = ee.find("th:first"), ke = te.find(".fc-agenda-gutter"), ce = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), tn("allDaySlot") ? (ue = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ce), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + r + " fc-agenda-axis'>" + tn("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + r + " fc-agenda-gutter'>&nbsp;</th></tr></table>", me = t(e).appendTo(ce), be = me.find("tr"), x(be.find("td")), De = De.add(me.find("th:first")), ke = ke.add(me.find("th.fc-agenda-gutter")), ce.append("<div class='fc-agenda-divider " + r + "'><div class='fc-agenda-divider-inner'/></div>")) : ue = t([]), ye = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ce), we = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(ye), xe = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", s = f(), o = h(d(s), Ge), h(s, Xe), He = 0, i = 0; o > s; i++) a = s.getMinutes(), e += "<tr class='fc-slot" + i + " " + (a ? "fc-minor" : "") + "'><th class='fc-agenda-axis " + r + "'>" + (c && a ? "&nbsp;" : hn(s, tn("axisFormat"))) + "</th><td class='" + l + "'><div style='position:relative'>&nbsp;</div></td></tr>", h(s, tn("slotMinutes")), He++;
			e += "</tbody></table>", Ce = t(e).appendTo(we), Se = Ce.find("div:first"), C(Ce.find("td")), De = De.add(Ce.find("th:first"))
		}
		function c() {
			var t, e, n, i, s = u(new Date);
			if (Ke) {
				var o = hn(I(0), Qe);
				qe ? o += Ze : o = Ze + o, ee.find(".fc-week-number").text(o)
			}
			for (t = 0; Oe > t; t++) i = I(t), e = ne.eq(t), e.html(hn(i, Je)), n = se.eq(t), +i == +s ? n.addClass(We + "-state-highlight fc-today") : n.removeClass(We + "-state-highlight fc-today"), J(e.add(n), i)
		}
		function p(t, n) {
			t === e && (t = Me), Me = t, un = {};
			var i = ie.position().top,
				s = ye.position().top,
				o = Math.min(t - i, Ce.height() + s + 1);
			re.height(o - O(ae)), ce.css("top", i), ye.height(o - s - 1), Ae = Se.height() + 1, Le = tn("slotMinutes") / Ie, Pe = Ae / Le, n && v()
		}
		function m(e) {
			Te = e, $e.clear(), Ee = 0, F(De.width("").each(function(e, n) {
				Ee = Math.max(Ee, t(n).outerWidth())
			}), Ee);
			var n = ye[0].clientWidth;
			Ne = ye.width() - n, Ne ? (F(ke, Ne), ke.show().prev().removeClass("fc-last")) : ke.hide().prev().addClass("fc-last"), Fe = Math.floor((n - Ee) / Oe), F(ne.slice(0, -1), Fe)
		}
		function v() {
			function t() {
				ye.scrollTop(i)
			}
			var e = f(),
				n = d(e);
			n.setHours(tn("firstHour"));
			var i = H(e, n) + 1;
			t(), setTimeout(t, 0)
		}
		function b() {
			je = ye.scrollTop()
		}
		function w() {
			ye.scrollTop(je)
		}
		function x(t) {
			t.click(S).mousedown(ln)
		}
		function C(t) {
			t.click(S).mousedown(Y)
		}
		function S(t) {
			if (!tn("selectable")) {
				var e = Math.min(Oe - 1, Math.floor((t.pageX - te.offset().left - Ee) / Fe)),
					n = I(e),
					i = this.parentNode.className.match(/fc-slot(\d+)/);
				if (i) {
					var s = parseInt(i[1]) * tn("slotMinutes"),
						o = Math.floor(s / 60);
					n.setHours(o), n.setMinutes(s % 60 + Xe), en("dayClick", se[e], n, !1, t)
				} else en("dayClick", se[e], n, !0, t)
			}
		}
		function D(t, e, n) {
			n && Re.build();
			var i, s, o = d(Q.visStart);
			qe ? (i = g(e, o) * Ye + Ve + 1, s = g(t, o) * Ye + Ve + 1) : (i = g(t, o), s = g(e, o)), i = Math.max(0, i), s = Math.min(Oe, s), s > i && x(k(0, i, 0, s - 1))
		}
		function k(t, e, n, i) {
			var s = Re.rect(t, e, n, i, ce);
			return sn(s, ce)
		}
		function _(t, e) {
			for (var n = d(Q.visStart), i = l(d(n), 1), s = 0; Oe > s; s++) {
				var o = new Date(Math.max(n, t)),
					a = new Date(Math.min(i, e));
				if (a > o) {
					var r = s * Ye + Ve,
						c = Re.rect(0, r, 0, r, we),
						h = H(n, o),
						u = H(n, a);
					c.top = h, c.height = u - h, C(sn(c, we))
				}
				l(n, 1), l(i, 1)
			}
		}
		function T(t) {
			return $e.left(t)
		}
		function M(t) {
			return $e.right(t)
		}
		function E(t) {
			return {
				row: Math.floor(g(t, Q.visStart) / 7),
				col: P(t.getDay())
			}
		}
		function A(t) {
			var e = I(t.col),
				n = t.row;
			return tn("allDaySlot") && n--, n >= 0 && h(e, Xe + n * Ie), e
		}
		function I(t) {
			return l(d(Q.visStart), t * Ye + Ve)
		}
		function L(t) {
			return tn("allDaySlot") && !t.row
		}
		function P(t) {
			return (t - Math.max(Be, Ue) + Oe) % Oe * Ye + Ve
		}
		function H(t, n) {
			if (t = d(t, !0), h(d(t), Xe) > n) return 0;
			if (n >= h(d(t), Ge)) return Ce.height();
			var i = tn("slotMinutes"),
				s = 60 * n.getHours() + n.getMinutes() - Xe,
				o = Math.floor(s / i),
				a = un[o];
			return a === e && (a = un[o] = Ce.find("tr:eq(" + o + ") td div")[0].offsetTop), Math.max(0, Math.round(a - 1 + Ae * (s % i / i)))
		}
		function R() {
			return {
				left: Ee,
				right: Te - Ne
			}
		}
		function z() {
			return be
		}
		function $(t) {
			var e = d(t.start);
			return t.allDay ? e : h(e, tn("defaultEventMinutes"))
		}
		function j(t, e) {
			return e ? d(t) : h(d(t), tn("slotMinutes"))
		}
		function B(t, e, n) {
			n ? tn("allDaySlot") && D(t, l(d(e), 1), !0) : U(t, e)
		}
		function U(e, n) {
			var i = tn("selectHelper");
			if (Re.build(), i) {
				var s = g(e, Q.visStart) * Ye + Ve;
				if (s >= 0 && Oe > s) {
					var o = Re.rect(0, s, 0, s, we),
						a = H(e, e),
						r = H(e, n);
					if (r > a) {
						if (o.top = a, o.height = r - a, o.left += 2, o.width -= 5, t.isFunction(i)) {
							var l = i(e, n);
							l && (o.position = "absolute", o.zIndex = 8, _e = t(l).css(o).appendTo(we))
						} else o.isStart = !0, o.isEnd = !0, _e = t(cn({
							title: "",
							start: e,
							end: n,
							className: ["fc-select-helper"],
							editable: !1
						}, o)), _e.css("opacity", tn("dragOpacity"));
						_e && (C(_e), we.append(_e), F(_e, o.width, !0), N(_e, o.height, !0))
					}
				}
			} else _(e, n)
		}
		function q() {
			on(), _e && (_e.remove(), _e = null)
		}
		function Y(e) {
			if (1 == e.which && tn("selectable")) {
				rn(e);
				var n;
				ze.start(function(t, e) {
					if (q(), t && t.col == e.col && !L(t)) {
						var i = A(e),
							s = A(t);
						n = [i, h(d(i), Ie), s, h(d(s), Ie)].sort(W), U(n[0], n[3])
					} else n = null
				}, e), t(document).one("mouseup", function(t) {
					ze.stop(), n && (+n[0] == +n[1] && V(n[0], !1, t), an(n[0], n[3], !1, t))
				})
			}
		}
		function V(t, e, n) {
			en("dayClick", se[P(t.getDay())], t, e, n)
		}
		function K(t, e) {
			ze.start(function(t) {
				if (on(), t) if (L(t)) k(t.row, t.col, t.row, t.col);
				else {
					var e = A(t),
						n = h(d(e), tn("defaultEventMinutes"));
					_(e, n)
				}
			}, e)
		}
		function Z(t, e, n) {
			var i = ze.stop();
			on(), i && en("drop", t, A(i), L(i), e, n)
		}
		var Q = this;
		Q.renderAgenda = o, Q.setWidth = m, Q.setHeight = p, Q.beforeHide = b, Q.afterShow = w, Q.defaultEventEnd = $, Q.timePosition = H, Q.dayOfWeekCol = P, Q.dateCell = E, Q.cellDate = A, Q.cellIsAllDay = L, Q.allDayRow = z, Q.allDayBounds = R, Q.getHoverListener = function() {
			return ze
		}, Q.colContentLeft = T, Q.colContentRight = M, Q.getDaySegmentContainer = function() {
			return ue
		}, Q.getSlotSegmentContainer = function() {
			return xe
		}, Q.getMinMinute = function() {
			return Xe
		}, Q.getMaxMinute = function() {
			return Ge
		}, Q.getBodyContent = function() {
			return we
		}, Q.getRowCnt = function() {
			return 1
		}, Q.getColCnt = function() {
			return Oe
		}, Q.getColWidth = function() {
			return Fe
		}, Q.getSnapHeight = function() {
			return Pe
		}, Q.getSnapMinutes = function() {
			return Ie
		}, Q.defaultSelectionEnd = j, Q.renderDayOverlay = D, Q.renderSelection = B, Q.clearSelection = q, Q.reportDayClick = V, Q.dragStart = K, Q.dragStop = Z, he.call(Q, n, i, s), fe.call(Q), de.call(Q), le.call(Q);
		var te, ee, ne, ie, se, oe, ae, re, ce, ue, me, be, ye, we, xe, Ce, Se, De, ke, _e, Te, Me, Ee, Fe, Ne, Ae, Ie, Le, Pe, Oe, He, Re, ze, $e, je, We, Be, Ue, qe, Ye, Ve, Xe, Ge, Je, Ke, Ze, Qe, tn = Q.opt,
			en = Q.trigger,
			nn = Q.clearEvents,
			sn = Q.renderOverlay,
			on = Q.clearOverlays,
			an = Q.reportSelection,
			rn = Q.unselect,
			ln = Q.daySelectionMousedown,
			cn = Q.slotSegHtml,
			hn = i.formatDate,
			un = {};
		X(n.addClass("fc-agenda")), Re = new pe(function(e, n) {
			function i(t) {
				return Math.max(l, Math.min(c, t))
			}
			var s, o, a;
			ne.each(function(e, i) {
				s = t(i), o = s.offset().left, e && (a[1] = o), a = [o], n[e] = a
			}), a[1] = o + s.outerWidth(), tn("allDaySlot") && (s = be, o = s.offset().top, e[0] = [o, o + s.outerHeight()]);
			for (var r = we.offset().top, l = ye.offset().top, c = l + ye.outerHeight(), h = 0; He * Le > h; h++) e.push([i(r + Pe * h), i(r + Pe * (h + 1))])
		}), ze = new ge(Re), $e = new ve(function(t) {
			return oe.eq(t)
		})
	}
	function le() {
		function n(t, e) {
			D(t);
			var n, i = t.length,
				a = [],
				l = [];
			for (n = 0; i > n; n++) t[n].allDay ? a.push(t[n]) : l.push(t[n]);
			b("allDaySlot") && (W(s(a), e), F()), r(o(l), e), y("eventAfterAllRender")
		}
		function i() {
			k(), I().empty(), L().empty()
		}
		function s(e) {
			var n, i, s, o, a = M(T(e, t.map(e, S), v.visStart, v.visEnd)),
				r = a.length,
				l = [];
			for (n = 0; r > n; n++) for (i = a[n], s = 0; i.length > s; s++) o = i[s], o.row = 0, o.level = n, l.push(o);
			return l
		}
		function o(e) {
			var n, i, s, o, r, c, u = U(),
				f = R(),
				p = H(),
				g = h(d(v.visStart), f),
				m = t.map(e, a),
				b = [];
			for (n = 0; u > n; n++) {
				for (i = M(T(e, m, g, h(d(g), p - f))), ce(i), s = 0; i.length > s; s++) for (o = i[s], r = 0; o.length > r; r++) c = o[r], c.col = n, c.level = s, b.push(c);
				l(g, 1, !0)
			}
			return b
		}
		function a(t) {
			return t.end ? d(t.end) : h(d(t.start), b("defaultEventMinutes"))
		}
		function r(n, i) {
			var s, o, a, r, l, h, u, d, p, g, m, v, w, x, C, S, D, k, _, T, M, F, N = n.length,
				I = "",
				P = {},
				H = {},
				R = L(),
				W = U();
			for ((T = b("isRTL")) ? (M = -1, F = W - 1) : (M = 1, F = 0), s = 0; N > s; s++) o = n[s], a = o.event, r = z(o.start, o.start), l = z(o.start, o.end), h = o.col, u = o.level, d = o.forward || 0, p = $(h * M + F), g = j(h * M + F) - p, g = Math.min(g - 6, .95 * g), m = u ? g / (u + d + 1) : d ? 2 * (g / (d + 1) - 6) : g, v = p + g / (u + d + 1) * u * M + (T ? g - m : 0), o.top = r, o.left = v, o.outerWidth = m, o.outerHeight = l - r, I += c(a, o);
			for (R[0].innerHTML = I, w = R.children(), s = 0; N > s; s++) o = n[s], a = o.event, x = t(w[s]), C = y("eventRender", a, a, x), C === !1 ? x.remove() : (C && C !== !0 && (x.remove(), x = t(C).css({
				position: "absolute",
				top: o.top,
				left: o.left
			}).appendTo(R)), o.element = x, a._id === i ? f(a, x, o) : x[0]._fci = s, Z(a, x));
			for (E(R, n, f), s = 0; N > s; s++) o = n[s], (x = o.element) && (D = P[S = o.key = V(x[0])], o.vsides = D === e ? P[S] = O(x, !0) : D, D = H[S], o.hsides = D === e ? H[S] = A(x, !0) : D, k = x.find(".fc-event-title"), k.length && (o.contentTop = k[0].offsetTop));
			for (s = 0; N > s; s++) o = n[s], (x = o.element) && (x[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", _ = Math.max(0, o.outerHeight - o.vsides), x[0].style.height = _ + "px", a = o.event, o.contentTop !== e && 10 > _ - o.contentTop && (x.find("div.fc-event-time").text(ae(a.start, b("timeFormat")) + " - " + a.title), x.find("div.fc-event-title").remove()), y("eventAfterRender", a, a, x))
		}
		function c(t, e) {
			var n = "<",
				i = t.url,
				s = K(t, b),
				o = ["fc-event", "fc-event-vert"];
			return w(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += i ? "a href='" + Y(t.url) + "'" : "div", n += " class='" + o.join(" ") + "' style='position:absolute;z-index:8;top:" + e.top + "px;left:" + e.left + "px;" + s + "'><div class='fc-event-inner'><div class='fc-event-time'>" + Y(re(t.start, t.end, b("timeFormat"))) + "</div><div class='fc-event-title'>" + Y(t.title) + "</div></div><div class='fc-event-bg'></div>", e.isEnd && x(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (i ? "a" : "div") + ">"
		}
		function u(t, e, n) {
			w(t) && p(t, e, n.isStart), n.isEnd && x(t) && B(t, e, n), _(t, e)
		}
		function f(t, e, n) {
			var i = e.find("div.fc-event-time");
			w(t) && g(t, e, i), n.isEnd && x(t) && m(t, e, i), _(t, e)
		}
		function p(t, e, n) {
			function i() {
				r || (e.width(s).height("").draggable("option", "grid", null), r = !0)
			}
			var s, o, a, r = !0,
				c = b("isRTL") ? -1 : 1,
				h = P(),
				u = q(),
				f = X(),
				p = G(),
				g = R();
			e.draggable({
				zIndex: 9,
				opacity: b("dragOpacity", "month"),
				revertDuration: b("dragRevertDuration"),
				start: function(g, m) {
					y("eventDragStart", e, t, g, m), te(t, e), s = e.width(), h.start(function(s, h, g, m) {
						se(), s ? (o = !1, a = m * c, s.row ? n ? r && (e.width(u - 10), N(e, f * Math.round((t.end ? (t.end - t.start) / Te : b("defaultEventMinutes")) / p)), e.draggable("option", "grid", [u, 1]), r = !1) : o = !0 : (ie(l(d(t.start), a), l(S(t), a)), i()), o = o || r && !a) : (i(), o = !0), e.draggable("option", "revert", o)
					}, g, "drag")
				},
				stop: function(n, s) {
					if (h.stop(), se(), y("eventDragStop", e, t, n, s), o) i(), e.css("filter", ""), Q(t, e);
					else {
						var l = 0;
						r || (l = Math.round((e.offset().top - J().offset().top) / f) * p + g - (60 * t.start.getHours() + t.start.getMinutes())), ee(this, t, a, l, r, n, s)
					}
				}
			})
		}
		function g(t, e, n) {
			function i(e) {
				var i, s = h(d(t.start), e);
				t.end && (i = h(d(t.end), e)), n.text(re(s, i, b("timeFormat")))
			}
			function s() {
				u && (n.css("display", ""), e.draggable("option", "grid", [m, v]), u = !1)
			}
			var o, a, r, c, u = !1,
				f = b("isRTL") ? -1 : 1,
				p = P(),
				g = U(),
				m = q(),
				v = X(),
				w = G();
			e.draggable({
				zIndex: 9,
				scroll: !1,
				grid: [m, v],
				axis: 1 == g ? "y" : !1,
				opacity: b("dragOpacity"),
				revertDuration: b("dragRevertDuration"),
				start: function(i, h) {
					y("eventDragStart", e, t, i, h), te(t, e), o = e.position(), r = c = 0, p.start(function(i, o, r, c) {
						e.draggable("option", "revert", !i), se(), i && (a = c * f, b("allDaySlot") && !i.row ? (u || (u = !0, n.hide(), e.draggable("option", "grid", null)), ie(l(d(t.start), a), l(S(t), a))) : s())
					}, i, "drag")
				},
				drag: function(t, e) {
					r = Math.round((e.position.top - o.top) / v) * w, r != c && (u || i(r), c = r)
				},
				stop: function(n, l) {
					var c = p.stop();
					se(), y("eventDragStop", e, t, n, l), c && (a || r || u) ? ee(this, t, a, u ? 0 : r, u, n, l) : (s(), e.css("filter", ""), e.css(o), i(0), Q(t, e))
				}
			})
		}
		function m(t, e, n) {
			var i, s, o = X(),
				a = G();
			e.resizable({
				handles: {
					s: ".ui-resizable-handle"
				},
				grid: o,
				start: function(n, o) {
					i = s = 0, te(t, e), e.css("z-index", 9), y("eventResizeStart", this, t, n, o)
				},
				resize: function(r, l) {
					i = Math.round((Math.max(o, e.height()) - l.originalSize.height) / o), i != s && (n.text(re(t.start, i || t.end ? h(C(t), a * i) : null, b("timeFormat"))), s = i)
				},
				stop: function(n, s) {
					y("eventResizeStop", this, t, n, s), i ? ne(this, t, 0, a * i, n, s) : (e.css("z-index", 8), Q(t, e))
				}
			})
		}
		var v = this;
		v.renderEvents = n, v.compileDaySegs = s, v.clearEvents = i, v.slotSegHtml = c, v.bindDaySeg = u, ue.call(v);
		var b = v.opt,
			y = v.trigger,
			w = v.isEventDraggable,
			x = v.isEventResizable,
			C = v.eventEnd,
			D = v.reportEvents,
			k = v.reportEventClear,
			_ = v.eventElementHandlers,
			F = v.setHeight,
			I = v.getDaySegmentContainer,
			L = v.getSlotSegmentContainer,
			P = v.getHoverListener,
			H = v.getMaxMinute,
			R = v.getMinMinute,
			z = v.timePosition,
			$ = v.colContentLeft,
			j = v.colContentRight,
			W = v.renderDaySegs,
			B = v.resizableDayEvent,
			U = v.getColCnt,
			q = v.getColWidth,
			X = v.getSnapHeight,
			G = v.getSnapMinutes,
			J = v.getBodyContent,
			Z = v.reportEventElement,
			Q = v.showEvents,
			te = v.hideEvents,
			ee = v.eventDrop,
			ne = v.eventResize,
			ie = v.renderDayOverlay,
			se = v.clearOverlays,
			oe = v.calendar,
			ae = oe.formatDate,
			re = oe.formatDates
	}
	function ce(t) {
		var e, n, i, s, o, a;
		for (e = t.length - 1; e > 0; e--) for (s = t[e], n = 0; s.length > n; n++) for (o = s[n], i = 0; t[e - 1].length > i; i++) a = t[e - 1][i], _(o, a) && (a.forward = Math.max(a.forward || 0, (o.forward || 0) + 1))
	}
	function he(t, n, i) {
		function s(t, e) {
			var n = N[t];
			return "object" == typeof n ? q(n, e || i) : n
		}
		function o(t, e) {
			return n.trigger.apply(n, [t, e || D].concat(Array.prototype.slice.call(arguments, 2), [D]))
		}
		function a(t) {
			return c(t) && !s("disableDragging")
		}
		function r(t) {
			return c(t) && !s("disableResizing")
		}
		function c(t) {
			return Q(t.editable, (t.source || {}).editable, s("editable"))
		}
		function u(t) {
			M = {};
			var e, n, i = t.length;
			for (e = 0; i > e; e++) n = t[e], M[n._id] ? M[n._id].push(n) : M[n._id] = [n]
		}
		function f(t) {
			return t.end ? d(t.end) : k(t)
		}
		function p(t, e) {
			E.push(e), F[t._id] ? F[t._id].push(e) : F[t._id] = [e]
		}
		function g() {
			E = [], F = {}
		}
		function m(t, n) {
			n.click(function(i) {
				return n.hasClass("ui-draggable-dragging") || n.hasClass("ui-resizable-resizing") ? e : o("eventClick", this, t, i)
			}).hover(function(e) {
				o("eventMouseover", this, t, e)
			}, function(e) {
				o("eventMouseout", this, t, e)
			})
		}
		function v(t, e) {
			y(t, e, "show")
		}
		function b(t, e) {
			y(t, e, "hide")
		}
		function y(t, e, n) {
			var i, s = F[t._id],
				o = s.length;
			for (i = 0; o > i; i++) e && s[i][0] == e[0] || s[i][n]()
		}
		function w(t, e, n, i, s, a, r) {
			var l = e.allDay,
				c = e._id;
			C(M[c], n, i, s), o("eventDrop", t, e, n, i, s, function() {
				C(M[c], -n, -i, l), T(c)
			}, a, r), T(c)
		}
		function x(t, e, n, i, s, a) {
			var r = e._id;
			S(M[r], n, i), o("eventResize", t, e, n, i, function() {
				S(M[r], -n, -i), T(r)
			}, s, a), T(r)
		}
		function C(t, n, i, s) {
			i = i || 0;
			for (var o, a = t.length, r = 0; a > r; r++) o = t[r], s !== e && (o.allDay = s), h(l(o.start, n, !0), i), o.end && (o.end = h(l(o.end, n, !0), i)), _(o, N)
		}
		function S(t, e, n) {
			n = n || 0;
			for (var i, s = t.length, o = 0; s > o; o++) i = t[o], i.end = h(l(f(i), e, !0), n), _(i, N)
		}
		var D = this;
		D.element = t, D.calendar = n, D.name = i, D.opt = s, D.trigger = o, D.isEventDraggable = a, D.isEventResizable = r, D.reportEvents = u, D.eventEnd = f, D.reportEventElement = p, D.reportEventClear = g, D.eventElementHandlers = m, D.showEvents = v, D.hideEvents = b, D.eventDrop = w, D.eventResize = x;
		var k = D.defaultEventEnd,
			_ = n.normalizeEvent,
			T = n.reportEventChange,
			M = {},
			E = [],
			F = {},
			N = n.options
	}
	function ue() {
		function n(t, e) {
			var n, i, l, d, m, v, b, y, w = z(),
				x = T(),
				C = M(),
				S = 0,
				D = t.length;
			for (w[0].innerHTML = s(t), o(t, w.children()), a(t), r(t, w, e), c(t), h(t), u(t), n = f(), i = 0; x > i; i++) {
				for (l = 0, d = [], m = 0; C > m; m++) d[m] = 0;
				for (; D > S && (v = t[S]).row == i;) {
					for (b = B(d.slice(v.startCol, v.endCol)), v.top = b, b += v.outerHeight, y = v.startCol; v.endCol > y; y++) d[y] = b;
					S++
				}
				n[i].height(B(d))
			}
			g(t, p(n))
		}
		function i(e, n, i) {
			var a, r, l, d = t("<div/>"),
				m = z(),
				v = e.length;
			for (d[0].innerHTML = s(e), a = d.children(), m.append(a), o(e, a), c(e), h(e), u(e), g(e, p(f())), a = [], r = 0; v > r; r++) l = e[r].element, l && (e[r].row === n && l.css("top", i), a.push(l[0]));
			return t(a)
		}
		function s(t) {
			var e, n, i, s, o, a, r, l, c, h, u = b("isRTL"),
				d = t.length,
				f = N(),
				p = f.left,
				g = f.right,
				m = "";
			for (e = 0; d > e; e++) n = t[e], i = n.event, o = ["fc-event", "fc-event-hori"], w(i) && o.push("fc-event-draggable"), n.isStart && o.push("fc-event-start"), n.isEnd && o.push("fc-event-end"), u ? (a = P(n.end.getDay() - 1), r = P(n.start.getDay()), l = n.isEnd ? I(a) : p, c = n.isStart ? L(r) : g) : (a = P(n.start.getDay()), r = P(n.end.getDay() - 1), l = n.isStart ? I(a) : p, c = n.isEnd ? L(r) : g), o = o.concat(i.className), i.source && (o = o.concat(i.source.className || [])), s = i.url, h = K(i, b), m += s ? "<a href='" + Y(s) + "'" : "<div", m += " class='" + o.join(" ") + "' style='position:absolute;z-index:8;left:" + l + "px;" + h + "'><div class='fc-event-inner'>", !i.allDay && n.isStart && (m += "<span class='fc-event-time'>" + Y(j(i.start, i.end, b("timeFormat"))) + "</span>"), m += "<span class='fc-event-title'>" + Y(i.title) + "</span></div>", n.isEnd && x(i) && (m += "<div class='ui-resizable-handle ui-resizable-" + (u ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"), m += "</" + (s ? "a" : "div") + ">", n.left = l, n.outerWidth = c - l, n.startCol = a, n.endCol = r + 1;
			return m
		}
		function o(e, n) {
			var i, s, o, a, r, l = e.length;
			for (i = 0; l > i; i++) s = e[i], o = s.event, a = t(n[i]), r = y("eventRender", o, o, a), r === !1 ? a.remove() : (r && r !== !0 && (r = t(r).css({
				position: "absolute",
				left: s.left
			}), a.replaceWith(r), a = r), s.element = a)
		}
		function a(t) {
			var e, n, i, s = t.length;
			for (e = 0; s > e; e++) n = t[e], i = n.element, i && S(n.event, i)
		}
		function r(t, e, n) {
			var i, s, o, a, r = t.length;
			for (i = 0; r > i; i++) s = t[i], o = s.element, o && (a = s.event, a._id === n ? $(a, o, s) : o[0]._fci = i);
			E(e, t, $)
		}
		function c(t) {
			var n, i, s, o, a, r = t.length,
				l = {};
			for (n = 0; r > n; n++) i = t[n], s = i.element, s && (o = i.key = V(s[0]), a = l[o], a === e && (a = l[o] = A(s, !0)), i.hsides = a)
		}
		function h(t) {
			var e, n, i, s = t.length;
			for (e = 0; s > e; e++) n = t[e], i = n.element, i && (i[0].style.width = Math.max(0, n.outerWidth - n.hsides) + "px")
		}
		function u(t) {
			var n, i, s, o, a, r = t.length,
				l = {};
			for (n = 0; r > n; n++) i = t[n], s = i.element, s && (o = i.key, a = l[o], a === e && (a = l[o] = R(s)), i.outerHeight = s[0].offsetHeight + a)
		}
		function f() {
			var t, e = T(),
				n = [];
			for (t = 0; e > t; t++) n[t] = F(t).find("div.fc-day-content > div");
			return n
		}
		function p(t) {
			var e, n = t.length,
				i = [];
			for (e = 0; n > e; e++) i[e] = t[e][0].offsetTop;
			return i
		}
		function g(t, e) {
			var n, i, s, o, a = t.length;
			for (n = 0; a > n; n++) i = t[n], s = i.element, s && (s[0].style.top = e[i.row] + (i.top || 0) + "px", o = i.event, y("eventAfterRender", o, o, s))
		}
		function m(e, n, s) {
			var o = b("isRTL"),
				a = o ? "w" : "e",
				r = n.find(".ui-resizable-" + a),
				c = !1;
			X(n), n.mousedown(function(t) {
				t.preventDefault()
			}).click(function(t) {
				c && (t.preventDefault(), t.stopImmediatePropagation())
			}), r.mousedown(function(r) {
				function h(n) {
					y("eventResizeStop", this, e, n), t("body").css("cursor", ""), p.stop(), U(), u && _(this, e, u, 0, n), setTimeout(function() {
						c = !1
					}, 0)
				}
				if (1 == r.which) {
					c = !0;
					var u, f, p = v.getHoverListener(),
						g = T(),
						m = M(),
						b = o ? -1 : 1,
						w = o ? m - 1 : 0,
						x = n.css("top"),
						S = t.extend({}, e),
						E = O(e.start);
					q(), t("body").css("cursor", a + "-resize").one("mouseup", h), y("eventResizeStart", this, e, r), p.start(function(t, n) {
						if (t) {
							var r = Math.max(E.row, t.row),
								c = t.col;
							1 == g && (r = 0), r == E.row && (c = o ? Math.min(E.col, c) : Math.max(E.col, c)), u = 7 * r + c * b + w - (7 * n.row + n.col * b + w);
							var h = l(C(e), u, !0);
							if (u) {
								S.end = h;
								var p = f;
								f = i(H([S]), s.row, x), f.find("*").css("cursor", a + "-resize"), p && p.remove(), k(e)
							} else f && (D(e), f.remove(), f = null);
							U(), W(e.start, l(d(h), 1))
						}
					}, r)
				}
			})
		}
		var v = this;
		v.renderDaySegs = n, v.resizableDayEvent = m;
		var b = v.opt,
			y = v.trigger,
			w = v.isEventDraggable,
			x = v.isEventResizable,
			C = v.eventEnd,
			S = v.reportEventElement,
			D = v.showEvents,
			k = v.hideEvents,
			_ = v.eventResize,
			T = v.getRowCnt,
			M = v.getColCnt;
		v.getColWidth;
		var F = v.allDayRow,
			N = v.allDayBounds,
			I = v.colContentLeft,
			L = v.colContentRight,
			P = v.dayOfWeekCol,
			O = v.dateCell,
			H = v.compileDaySegs,
			z = v.getDaySegmentContainer,
			$ = v.bindDaySeg,
			j = v.calendar.formatDates,
			W = v.renderDayOverlay,
			U = v.clearOverlays,
			q = v.clearSelection
	}
	function de() {
		function e(t, e, s) {
			n(), e || (e = l(t, s)), c(t, e, s), i(t, e, s)
		}
		function n(t) {
			u && (u = !1, h(), r("unselect", null, t))
		}
		function i(t, e, n, i) {
			u = !0, r("select", null, t, e, n, i)
		}
		function s(e) {
			var s = o.cellDate,
				r = o.cellIsAllDay,
				l = o.getHoverListener(),
				u = o.reportDayClick;
			if (1 == e.which && a("selectable")) {
				n(e);
				var d;
				l.start(function(t, e) {
					h(), t && r(t) ? (d = [s(e), s(t)].sort(W), c(d[0], d[1], !0)) : d = null
				}, e), t(document).one("mouseup", function(t) {
					l.stop(), d && (+d[0] == +d[1] && u(d[0], !0, t), i(d[0], d[1], !0, t))
				})
			}
		}
		var o = this;
		o.select = e, o.unselect = n, o.reportSelection = i, o.daySelectionMousedown = s;
		var a = o.opt,
			r = o.trigger,
			l = o.defaultSelectionEnd,
			c = o.renderSelection,
			h = o.clearSelection,
			u = !1;
		a("selectable") && a("unselectAuto") && t(document).mousedown(function(e) {
			var i = a("unselectCancel");
			i && t(e.target).parents(i).length || n(e)
		})
	}
	function fe() {
		function e(e, n) {
			var i = o.shift();
			return i || (i = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), i[0].parentNode != n[0] && i.appendTo(n), s.push(i.css(e).show()), i
		}
		function n() {
			for (var t; t = s.shift();) o.push(t.hide().unbind())
		}
		var i = this;
		i.renderOverlay = e, i.clearOverlays = n;
		var s = [],
			o = []
	}
	function pe(t) {
		var e, n, i = this;
		i.build = function() {
			e = [], n = [], t(e, n)
		}, i.cell = function(t, i) {
			var s, o = e.length,
				a = n.length,
				r = -1,
				l = -1;
			for (s = 0; o > s; s++) if (i >= e[s][0] && e[s][1] > i) {
				r = s;
				break
			}
			for (s = 0; a > s; s++) if (t >= n[s][0] && n[s][1] > t) {
				l = s;
				break
			}
			return r >= 0 && l >= 0 ? {
				row: r,
				col: l
			} : null
		}, i.rect = function(t, i, s, o, a) {
			var r = a.offset();
			return {
				top: e[t][0] - r.top,
				left: n[i][0] - r.left,
				width: n[o][1] - n[i][0],
				height: e[s][1] - e[t][0]
			}
		}
	}
	function ge(e) {
		function n(t) {
			me(t);
			var n = e.cell(t.pageX, t.pageY);
			(!n != !a || n && (n.row != a.row || n.col != a.col)) && (n ? (o || (o = n), s(n, o, n.row - o.row, n.col - o.col)) : s(n, o), a = n)
		}
		var i, s, o, a, r = this;
		r.start = function(r, l, c) {
			s = r, o = a = null, e.build(), n(l), i = c || "mousemove", t(document).bind(i, n)
		}, r.stop = function() {
			return t(document).unbind(i, n), a
		}
	}
	function me(t) {
		t.pageX === e && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
	}
	function ve(t) {
		function n(e) {
			return s[e] = s[e] || t(e)
		}
		var i = this,
			s = {},
			o = {},
			a = {};
		i.left = function(t) {
			return o[t] = o[t] === e ? n(t).position().left : o[t]
		}, i.right = function(t) {
			return a[t] = a[t] === e ? i.left(t) + n(t).width() : a[t]
		}, i.clear = function() {
			s = {}, o = {}, a = {}
		}
	}
	var be = {
		defaultView: "month",
		aspectRatio: 1.35,
		header: {
			left: "title",
			center: "",
			right: "today prev,next"
		},
		weekends: !0,
		weekNumbers: !1,
		weekNumberCalculation: "iso",
		weekNumberTitle: "W",
		allDayDefault: !0,
		ignoreTimezone: !0,
		lazyFetching: !0,
		startParam: "start",
		endParam: "end",
		titleFormat: {
			month: "MMMM yyyy",
			week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
			day: "dddd, MMM d, yyyy"
		},
		columnFormat: {
			month: "ddd",
			week: "ddd M/d",
			day: "dddd M/d"
		},
		timeFormat: {
			"": "h(:mm)t"
		},
		isRTL: !1,
		firstDay: 0,
		monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		buttonText: {
			prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
			next: "<span class='fc-text-arrow'>&rsaquo;</span>",
			prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
			nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
			today: "today",
			month: "month",
			week: "week",
			day: "day"
		},
		theme: !1,
		buttonIcons: {
			prev: "circle-triangle-w",
			next: "circle-triangle-e"
		},
		unselectAuto: !0,
		dropAccept: "*"
	},
		ye = {
			header: {
				left: "next,prev today",
				center: "",
				right: "title"
			},
			buttonText: {
				prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
				next: "<span class='fc-text-arrow'>&lsaquo;</span>",
				prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
				nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
			},
			buttonIcons: {
				prev: "circle-triangle-e",
				next: "circle-triangle-w"
			}
		},
		we = t.fullCalendar = {
			version: "1.6.1"
		},
		xe = we.views = {};
	t.fn.fullCalendar = function(n) {
		if ("string" == typeof n) {
			var s, o = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var i = t.data(this, "fullCalendar");
				if (i && t.isFunction(i[n])) {
					var a = i[n].apply(i, o);
					s === e && (s = a), "destroy" == n && t.removeData(this, "fullCalendar")
				}
			}), s !== e ? s : this
		}
		var a = n.eventSources || [];
		return delete n.eventSources, n.events && (a.push(n.events), delete n.events), n = t.extend(!0, {}, be, n.isRTL || n.isRTL === e && be.isRTL ? ye : {}, n), this.each(function(e, s) {
			var o = t(s),
				r = new i(o, n, a);
			o.data("fullCalendar", r), r.render()
		}), this
	}, we.sourceNormalizers = [], we.sourceFetchers = [];
	var Ce = {
		dataType: "json",
		cache: !1
	},
		Se = 1;
	we.addDays = l, we.cloneDate = d, we.parseDate = v, we.parseISO8601 = b, we.parseTime = y, we.formatDate = w, we.formatDates = x;
	var De = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
		ke = 864e5,
		_e = 36e5,
		Te = 6e4,
		Me = {
			s: function(t) {
				return t.getSeconds()
			},
			ss: function(t) {
				return U(t.getSeconds())
			},
			m: function(t) {
				return t.getMinutes()
			},
			mm: function(t) {
				return U(t.getMinutes())
			},
			h: function(t) {
				return t.getHours() % 12 || 12
			},
			hh: function(t) {
				return U(t.getHours() % 12 || 12)
			},
			H: function(t) {
				return t.getHours()
			},
			HH: function(t) {
				return U(t.getHours())
			},
			d: function(t) {
				return t.getDate()
			},
			dd: function(t) {
				return U(t.getDate())
			},
			ddd: function(t, e) {
				return e.dayNamesShort[t.getDay()]
			},
			dddd: function(t, e) {
				return e.dayNames[t.getDay()]
			},
			M: function(t) {
				return t.getMonth() + 1
			},
			MM: function(t) {
				return U(t.getMonth() + 1)
			},
			MMM: function(t, e) {
				return e.monthNamesShort[t.getMonth()]
			},
			MMMM: function(t, e) {
				return e.monthNames[t.getMonth()]
			},
			yy: function(t) {
				return (t.getFullYear() + "").substring(2)
			},
			yyyy: function(t) {
				return t.getFullYear()
			},
			t: function(t) {
				return 12 > t.getHours() ? "a" : "p"
			},
			tt: function(t) {
				return 12 > t.getHours() ? "am" : "pm"
			},
			T: function(t) {
				return 12 > t.getHours() ? "A" : "P"
			},
			TT: function(t) {
				return 12 > t.getHours() ? "AM" : "PM"
			},
			u: function(t) {
				return w(t, "yyyy-MM-dd'T'HH:mm:ss'Z'")
			},
			S: function(t) {
				var e = t.getDate();
				return e > 10 && 20 > e ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
			},
			w: function(t, e) {
				return e.weekNumberCalculation(t)
			},
			W: function(t) {
				return C(t)
			}
		};
	we.dateFormatters = Me, we.applyAll = Z, xe.month = te, xe.basicWeek = ee, xe.basicDay = ne, n({
		weekMode: "fixed"
	}), xe.agendaWeek = oe, xe.agendaDay = ae, n({
		allDaySlot: !0,
		allDayText: "all-day",
		firstHour: 6,
		slotMinutes: 30,
		defaultEventMinutes: 120,
		axisFormat: "h(:mm)tt",
		timeFormat: {
			agenda: "h:mm{ - h:mm}"
		},
		dragOpacity: {
			agenda: .5
		},
		minTime: 0,
		maxTime: 24
	})
}(jQuery);
var hljs = new function() {
		function t(t) {
			return t.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
		}
		function e(t) {
			return t.nodeName.toLowerCase()
		}
		function n(t, e) {
			var n = t && t.exec(e);
			return n && 0 == n.index
		}
		function i(t) {
			return Array.prototype.map.call(t.childNodes, function(t) {
				return 3 == t.nodeType ? b.useBR ? t.nodeValue.replace(/\n/g, "") : t.nodeValue : "br" == e(t) ? "\n" : i(t)
			}).join("")
		}
		function s(t) {
			var e = (t.className + " " + (t.parentNode ? t.parentNode.className : "")).split(/\s+/);
			return e = e.map(function(t) {
				return t.replace(/^language-/, "")
			}), e.filter(function(t) {
				return v(t) || "no-highlight" == t
			})[0]
		}
		function o(t, e) {
			var n = {};
			for (var i in t) n[i] = t[i];
			if (e) for (var i in e) n[i] = e[i];
			return n
		}
		function a(t) {
			var n = [];
			return function i(t, s) {
				for (var o = t.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? s += o.nodeValue.length : "br" == e(o) ? s += 1 : 1 == o.nodeType && (n.push({
					event: "start",
					offset: s,
					node: o
				}), s = i(o, s), n.push({
					event: "stop",
					offset: s,
					node: o
				}));
				return s
			}(t, 0), n
		}
		function r(n, i, s) {
			function o() {
				return n.length && i.length ? n[0].offset != i[0].offset ? n[0].offset < i[0].offset ? n : i : "start" == i[0].event ? n : i : n.length ? n : i
			}
			function a(n) {
				function i(e) {
					return " " + e.nodeName + '="' + t(e.value) + '"'
				}
				h += "<" + e(n) + Array.prototype.map.call(n.attributes, i).join("") + ">"
			}
			function r(t) {
				h += "</" + e(t) + ">"
			}
			function l(t) {
				("start" == t.event ? a : r)(t.node)
			}
			for (var c = 0, h = "", u = []; n.length || i.length;) {
				var d = o();
				if (h += t(s.substr(c, d[0].offset - c)), c = d[0].offset, d == n) {
					u.reverse().forEach(r);
					do l(d.splice(0, 1)[0]), d = o();
					while (d == n && d.length && d[0].offset == c);
					u.reverse().forEach(a)
				} else "start" == d[0].event ? u.push(d[0].node) : u.pop(), l(d.splice(0, 1)[0])
			}
			return h + t(s.substr(c))
		}
		function l(t) {
			function e(t) {
				return t && t.source || t
			}
			function n(n, i) {
				return RegExp(e(n), "m" + (t.cI ? "i" : "") + (i ? "g" : ""))
			}
			function i(s, a) {
				function r(e, n) {
					t.cI && (n = n.toLowerCase()), n.split(" ").forEach(function(t) {
						var n = t.split("|");
						l[n[0]] = [e, n[1] ? Number(n[1]) : 1]
					})
				}
				if (!s.compiled) {
					if (s.compiled = !0, s.k = s.k || s.bK, s.k) {
						var l = {};
						"string" == typeof s.k ? r("keyword", s.k) : Object.keys(s.k).forEach(function(t) {
							r(t, s.k[t])
						}), s.k = l
					}
					s.lR = n(s.l || /\b[A-Za-z0-9_]+\b/, !0), a && (s.bK && (s.b = s.bK.split(" ").join("|")), s.b || (s.b = /\B|\b/), s.bR = n(s.b), s.e || s.eW || (s.e = /\B|\b/), s.e && (s.eR = n(s.e)), s.tE = e(s.e) || "", s.eW && a.tE && (s.tE += (s.e ? "|" : "") + a.tE)), s.i && (s.iR = n(s.i)), void 0 === s.r && (s.r = 1), s.c || (s.c = []);
					var c = [];
					s.c.forEach(function(t) {
						t.v ? t.v.forEach(function(e) {
							c.push(o(t, e))
						}) : c.push("self" == t ? s : t)
					}), s.c = c, s.c.forEach(function(t) {
						i(t, s)
					}), s.starts && i(s.starts, a);
					var h = s.c.map(function(t) {
						return t.bK ? "\\.?\\b(" + t.b + ")\\b\\.?" : t.b
					}).concat([s.tE]).concat([s.i]).map(e).filter(Boolean);
					s.t = h.length ? n(h.join("|"), !0) : {
						exec: function() {
							return null
						}
					}, s.continuation = {}
				}
			}
			i(t)
		}
		function c(e, i, s, o) {
			function a(t, e) {
				for (var i = 0; i < e.c.length; i++) if (n(e.c[i].bR, t)) return e.c[i]
			}
			function r(t, e) {
				return n(t.eR, e) ? t : t.eW ? r(t.parent, e) : void 0
			}
			function u(t, e) {
				return !s && n(e.iR, t)
			}
			function d(t, e) {
				var n = C.cI ? e[0].toLowerCase() : e[0];
				return t.k.hasOwnProperty(n) && t.k[n]
			}
			function f(t, e, n, i) {
				var s = i ? "" : b.classPrefix,
					o = '<span class="' + s,
					a = n ? "" : "</span>";
				return o += t + '">', o + e + a
			}
			function p() {
				var e = t(_);
				if (!S.k) return e;
				var n = "",
					i = 0;
				S.lR.lastIndex = 0;
				for (var s = S.lR.exec(e); s;) {
					n += e.substr(i, s.index - i);
					var o = d(S, s);
					o ? (T += o[1], n += f(o[0], s[0])) : n += s[0], i = S.lR.lastIndex, s = S.lR.exec(e)
				}
				return n + e.substr(i)
			}
			function g() {
				if (S.sL && !y[S.sL]) return t(_);
				var e = S.sL ? c(S.sL, _, !0, S.continuation.top) : h(_);
				return S.r > 0 && (T += e.r), "continuous" == S.subLanguageMode && (S.continuation.top = e.top), f(e.language, e.value, !1, !0)
			}
			function m() {
				return void 0 !== S.sL ? g() : p()
			}
			function w(e, n) {
				var i = e.cN ? f(e.cN, "", !0) : "";
				e.rB ? (D += i, _ = "") : e.eB ? (D += t(n) + i, _ = "") : (D += i, _ = n), S = Object.create(e, {
					parent: {
						value: S
					}
				})
			}
			function x(e, n) {
				if (_ += e, void 0 === n) return D += m(), 0;
				var i = a(n, S);
				if (i) return D += m(), w(i, n), i.rB ? 0 : n.length;
				var s = r(S, n);
				if (s) {
					var o = S;
					o.rE || o.eE || (_ += n), D += m();
					do S.cN && (D += "</span>"), T += S.r, S = S.parent;
					while (S != s.parent);
					return o.eE && (D += t(n)), _ = "", s.starts && w(s.starts, ""), o.rE ? 0 : n.length
				}
				if (u(n, S)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (S.cN || "<unnamed>") + '"');
				return _ += n, n.length || 1
			}
			var C = v(e);
			if (!C) throw new Error('Unknown language: "' + e + '"');
			l(C);
			for (var S = o || C, D = "", k = S; k != C; k = k.parent) k.cN && (D = f(k.cN, D, !0));
			var _ = "",
				T = 0;
			try {
				for (var M, E, F = 0;;) {
					if (S.t.lastIndex = F, M = S.t.exec(i), !M) break;
					E = x(i.substr(F, M.index - F), M[0]), F = M.index + E
				}
				x(i.substr(F));
				for (var k = S; k.parent; k = k.parent) k.cN && (D += "</span>");
				return {
					r: T,
					value: D,
					language: e,
					top: S
				}
			} catch (N) {
				if (-1 != N.message.indexOf("Illegal")) return {
					r: 0,
					value: t(i)
				};
				throw N
			}
		}
		function h(e, n) {
			n = n || b.languages || Object.keys(y);
			var i = {
				r: 0,
				value: t(e)
			},
				s = i;
			return n.forEach(function(t) {
				if (v(t)) {
					var n = c(t, e, !1);
					n.language = t, n.r > s.r && (s = n), n.r > i.r && (s = i, i = n)
				}
			}), s.language && (i.second_best = s), i
		}
		function u(t) {
			return b.tabReplace && (t = t.replace(/^((<[^>]+>|\t)+)/gm, function(t, e) {
				return e.replace(/\t/g, b.tabReplace)
			})), b.useBR && (t = t.replace(/\n/g, "<br>")), t
		}
		function d(t) {
			var e = i(t),
				n = s(t);
			if ("no-highlight" != n) {
				var o = n ? c(n, e, !0) : h(e),
					l = a(t);
				if (l.length) {
					var d = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
					d.innerHTML = o.value, o.value = r(l, a(d), e)
				}
				o.value = u(o.value), t.innerHTML = o.value, t.className += " hljs " + (!n && o.language || ""), t.result = {
					language: o.language,
					re: o.r
				}, o.second_best && (t.second_best = {
					language: o.second_best.language,
					re: o.second_best.r
				})
			}
		}
		function f(t) {
			b = o(b, t)
		}
		function p() {
			if (!p.called) {
				p.called = !0;
				var t = document.querySelectorAll("pre code");
				Array.prototype.forEach.call(t, d)
			}
		}
		function g() {
			addEventListener("DOMContentLoaded", p, !1), addEventListener("load", p, !1)
		}
		function m(t, e) {
			var n = y[t] = e(this);
			n.aliases && n.aliases.forEach(function(e) {
				w[e] = t
			})
		}
		function v(t) {
			return y[t] || y[w[t]]
		}
		var b = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
			y = {},
			w = {};
		this.highlight = c, this.highlightAuto = h, this.fixMarkup = u, this.highlightBlock = d, this.configure = f, this.initHighlighting = p, this.initHighlightingOnLoad = g, this.registerLanguage = m, this.getLanguage = v, this.inherit = o, this.IR = "[a-zA-Z][a-zA-Z0-9_]*", this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", this.NR = "\\b\\d+(\\.\\d+)?", this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", this.BNR = "\\b(0b[01]+)", this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", this.BE = {
			b: "\\\\[\\s\\S]",
			r: 0
		}, this.ASM = {
			cN: "string",
			b: "'",
			e: "'",
			i: "\\n",
			c: [this.BE]
		}, this.QSM = {
			cN: "string",
			b: '"',
			e: '"',
			i: "\\n",
			c: [this.BE]
		}, this.CLCM = {
			cN: "comment",
			b: "//",
			e: "$"
		}, this.CBLCLM = {
			cN: "comment",
			b: "/\\*",
			e: "\\*/"
		}, this.HCM = {
			cN: "comment",
			b: "#",
			e: "$"
		}, this.NM = {
			cN: "number",
			b: this.NR,
			r: 0
		}, this.CNM = {
			cN: "number",
			b: this.CNR,
			r: 0
		}, this.BNM = {
			cN: "number",
			b: this.BNR,
			r: 0
		}, this.REGEXP_MODE = {
			cN: "regexp",
			b: /\//,
			e: /\/[gim]*/,
			i: /\n/,
			c: [this.BE,
			{
				b: /\[/,
				e: /\]/,
				r: 0,
				c: [this.BE]
			}]
		}, this.TM = {
			cN: "title",
			b: this.IR,
			r: 0
		}, this.UTM = {
			cN: "title",
			b: this.UIR,
			r: 0
		}
	};
hljs.registerLanguage("bash", function(t) {
	var e = {
		cN: "variable",
		v: [{
			b: /\$[\w\d#@][\w\d_]*/
		}, {
			b: /\$\{(.*?)\}/
		}]
	},
		n = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [t.BE, e,
			{
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [t.BE]
			}]
		},
		i = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		l: /-?[a-z\.]+/,
		k: {
			keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
			literal: "true false",
			built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
			operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "shebang",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [t.inherit(t.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		},
		t.HCM, t.NM, n, i, e]
	}
}), hljs.registerLanguage("cs", function(t) {
	var e = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
	return {
		k: e,
		c: [{
			cN: "comment",
			b: "///",
			e: "$",
			rB: !0,
			c: [{
				cN: "xmlDocTag",
				b: "///|<!--|-->"
			}, {
				cN: "xmlDocTag",
				b: "</?",
				e: ">"
			}]
		},
		t.CLCM, t.CBLCLM,
		{
			cN: "preprocessor",
			b: "#",
			e: "$",
			k: "if else elif endif define undef warning error line region endregion pragma checksum"
		}, {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		},
		t.ASM, t.QSM, t.CNM,
		{
			bK: "protected public private internal",
			e: /[{;=]/,
			k: e,
			c: [{
				bK: "class namespace interface",
				starts: {
					c: [t.TM]
				}
			}, {
				b: t.IR + "\\s*\\(",
				rB: !0,
				c: [t.TM]
			}]
		}]
	}
}), hljs.registerLanguage("ruby", function(t) {
	var e = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
		n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
		i = {
			cN: "yardoctag",
			b: "@[A-Za-z]+"
		},
		s = {
			cN: "comment",
			v: [{
				b: "#",
				e: "$",
				c: [i]
			}, {
				b: "^\\=begin",
				e: "^\\=end",
				c: [i],
				r: 10
			}, {
				b: "^__END__",
				e: "\\n$"
			}]
		},
		o = {
			cN: "subst",
			b: "#\\{",
			e: "}",
			k: n
		},
		a = {
			cN: "string",
			c: [t.BE, o],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}, {
				b: "%[qw]?\\(",
				e: "\\)"
			}, {
				b: "%[qw]?\\[",
				e: "\\]"
			}, {
				b: "%[qw]?{",
				e: "}"
			}, {
				b: "%[qw]?<",
				e: ">",
				r: 10
			}, {
				b: "%[qw]?/",
				e: "/",
				r: 10
			}, {
				b: "%[qw]?%",
				e: "%",
				r: 10
			}, {
				b: "%[qw]?-",
				e: "-",
				r: 10
			}, {
				b: "%[qw]?\\|",
				e: "\\|",
				r: 10
			}, {
				b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
			}]
		},
		r = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			k: n
		},
		l = [a, s,
		{
			cN: "class",
			bK: "class module",
			e: "$|;",
			i: /=/,
			c: [t.inherit(t.TM, {
				b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
			}),
			{
				cN: "inheritance",
				b: "<\\s*",
				c: [{
					cN: "parent",
					b: "(" + t.IR + "::)?" + t.IR
				}]
			},
			s]
		}, {
			cN: "function",
			bK: "def",
			e: " |$|;",
			r: 0,
			c: [t.inherit(t.TM, {
				b: e
			}), r, s]
		}, {
			cN: "constant",
			b: "(::)?(\\b[A-Z]\\w*(::)?)+",
			r: 0
		}, {
			cN: "symbol",
			b: ":",
			c: [a,
			{
				b: e
			}],
			r: 0
		}, {
			cN: "symbol",
			b: t.UIR + "(\\!|\\?)?:",
			r: 0
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			cN: "variable",
			b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
		}, {
			b: "(" + t.RSR + ")\\s*",
			c: [s,
			{
				cN: "regexp",
				c: [t.BE, o],
				i: /\n/,
				v: [{
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r{",
					e: "}[a-z]*"
				}, {
					b: "%r\\(",
					e: "\\)[a-z]*"
				}, {
					b: "%r!",
					e: "![a-z]*"
				}, {
					b: "%r\\[",
					e: "\\][a-z]*"
				}]
			}],
			r: 0
		}];
	return o.c = l, r.c = l, {
		k: n,
		c: l
	}
}), hljs.registerLanguage("diff", function() {
	return {
		c: [{
			cN: "chunk",
			r: 10,
			v: [{
				b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
			}, {
				b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
			}, {
				b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
			}]
		}, {
			cN: "header",
			v: [{
				b: /Index: /,
				e: /$/
			}, {
				b: /=====/,
				e: /=====$/
			}, {
				b: /^\-\-\-/,
				e: /$/
			}, {
				b: /^\*{3} /,
				e: /$/
			}, {
				b: /^\+\+\+/,
				e: /$/
			}, {
				b: /\*{5}/,
				e: /\*{5}$/
			}]
		}, {
			cN: "addition",
			b: "^\\+",
			e: "$"
		}, {
			cN: "deletion",
			b: "^\\-",
			e: "$"
		}, {
			cN: "change",
			b: "^\\!",
			e: "$"
		}]
	}
}), hljs.registerLanguage("javascript", function(t) {
	return {
		aliases: ["js"],
		k: {
			keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
		},
		c: [{
			cN: "pi",
			b: /^\s*('|")use strict('|")/,
			r: 10
		},
		t.ASM, t.QSM, t.CLCM, t.CBLCLM, t.CNM,
		{
			b: "(" + t.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [t.CLCM, t.CBLCLM, t.REGEXP_MODE,
			{
				b: /</,
				e: />;/,
				r: 0,
				sL: "xml"
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			c: [t.inherit(t.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}),
			{
				cN: "params",
				b: /\(/,
				e: /\)/,
				c: [t.CLCM, t.CBLCLM],
				i: /["'\(]/
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		}, {
			b: "\\." + t.IR,
			r: 0
		}]
	}
}), hljs.registerLanguage("xml", function() {
	var t = "[A-Za-z0-9\\._:-]+",
		e = {
			b: /<\?(php)?(?!\w)/,
			e: /\?>/,
			sL: "php",
			subLanguageMode: "continuous"
		},
		n = {
			eW: !0,
			i: /</,
			r: 0,
			c: [e,
			{
				cN: "attribute",
				b: t,
				r: 0
			}, {
				b: "=",
				r: 0,
				c: [{
					cN: "value",
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s\/>]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html"],
		cI: !0,
		c: [{
			cN: "doctype",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, {
			cN: "comment",
			b: "<!--",
			e: "-->",
			r: 10
		}, {
			cN: "cdata",
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				title: "style"
			},
			c: [n],
			starts: {
				e: "</style>",
				rE: !0,
				sL: "css"
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				title: "script"
			},
			c: [n],
			starts: {
				e: "</script>",
				rE: !0,
				sL: "javascript"
			}
		}, {
			b: "<%",
			e: "%>",
			sL: "vbscript"
		},
		e,
		{
			cN: "pi",
			b: /<\?\w+/,
			e: /\?>/,
			r: 10
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "title",
				b: "[^ /><]+",
				r: 0
			},
			n]
		}]
	}
}), hljs.registerLanguage("markdown", function() {
	return {
		c: [{
			cN: "header",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "blockquote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "`.+?`"
			}, {
				b: "^( {4}|	)",
				e: "$",
				r: 0
			}]
		}, {
			cN: "horizontal_rule",
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "link_label",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link_url",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "link_reference",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: "^\\[.+\\]:",
			e: "$",
			rB: !0,
			c: [{
				cN: "link_reference",
				b: "\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}, {
				cN: "link_url",
				b: "\\s",
				e: "$"
			}]
		}]
	}
}), hljs.registerLanguage("css", function(t) {
	var e = "[a-zA-Z-][a-zA-Z0-9_-]*",
		n = {
			cN: "function",
			b: e + "\\(",
			e: "\\)",
			c: ["self", t.NM, t.ASM, t.QSM]
		};
	return {
		cI: !0,
		i: "[=/|']",
		c: [t.CBLCLM,
		{
			cN: "id",
			b: "\\#[A-Za-z0-9_-]+"
		}, {
			cN: "class",
			b: "\\.[A-Za-z0-9_-]+",
			r: 0
		}, {
			cN: "attr_selector",
			b: "\\[",
			e: "\\]",
			i: "$"
		}, {
			cN: "pseudo",
			b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
		}, {
			cN: "at_rule",
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			cN: "at_rule",
			b: "@",
			e: "[{;]",
			c: [{
				cN: "keyword",
				b: /\S+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [n, t.ASM, t.QSM, t.NM]
			}]
		}, {
			cN: "tag",
			b: e,
			r: 0
		}, {
			cN: "rules",
			b: "{",
			e: "}",
			i: "[^\\s]",
			r: 0,
			c: [t.CBLCLM,
			{
				cN: "rule",
				b: "[^\\s]",
				rB: !0,
				e: ";",
				eW: !0,
				c: [{
					cN: "attribute",
					b: "[A-Z\\_\\.\\-]+",
					e: ":",
					eE: !0,
					i: "[^\\s]",
					starts: {
						cN: "value",
						eW: !0,
						eE: !0,
						c: [n, t.NM, t.QSM, t.ASM, t.CBLCLM,
						{
							cN: "hexcolor",
							b: "#[0-9A-Fa-f]+"
						}, {
							cN: "important",
							b: "!important"
						}]
					}
				}]
			}]
		}]
	}
}), hljs.registerLanguage("http", function() {
	return {
		i: "\\S",
		c: [{
			cN: "status",
			b: "^HTTP/[0-9\\.]+",
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			cN: "request",
			b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				cN: "string",
				e: "$"
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: "",
				eW: !0
			}
		}]
	}
}), hljs.registerLanguage("java", function(t) {
	var e = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
	return {
		k: e,
		i: /<\//,
		c: [{
			cN: "javadoc",
			b: "/\\*\\*",
			e: "\\*/",
			c: [{
				cN: "javadoctag",
				b: "(^|\\s)@[A-Za-z]+"
			}],
			r: 10
		},
		t.CLCM, t.CBLCLM, t.ASM, t.QSM,
		{
			bK: "protected public private",
			e: /[{;=]/,
			k: e,
			c: [{
				cN: "class",
				bK: "class interface",
				eW: !0,
				i: /[:"<>]/,
				c: [{
					bK: "extends implements",
					r: 10
				},
				t.UTM]
			}, {
				b: t.UIR + "\\s*\\(",
				rB: !0,
				c: [t.UTM]
			}]
		},
		t.CNM,
		{
			cN: "annotation",
			b: "@[A-Za-z]+"
		}]
	}
}), hljs.registerLanguage("php", function(t) {
	var e = {
		cN: "variable",
		b: "\\$+[a-zA-Z_-\xff][a-zA-Z0-9_-\xff]*"
	},
		n = {
			cN: "preprocessor",
			b: /<\?(php)?|\?>/
		},
		i = {
			cN: "string",
			c: [t.BE, n],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			},
			t.inherit(t.ASM, {
				i: null
			}), t.inherit(t.QSM, {
				i: null
			})]
		},
		s = {
			v: [t.BNM, t.CNM]
		};
	return {
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [t.CLCM, t.HCM,
		{
			cN: "comment",
			b: "/\\*",
			e: "\\*/",
			c: [{
				cN: "phpdoc",
				b: "\\s@[A-Za-z]+"
			},
			n]
		}, {
			cN: "comment",
			b: "__halt_compiler.+?;",
			eW: !0,
			k: "__halt_compiler",
			l: t.UIR
		}, {
			cN: "string",
			b: "<<<['\"]?\\w+['\"]?$",
			e: "^\\w+;",
			c: [t.BE]
		},
		n, e,
		{
			cN: "function",
			bK: "function",
			e: /[;{]/,
			i: "\\$|\\[|%",
			c: [t.UTM,
			{
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", e, t.CBLCLM, i, s]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements",
				r: 10
			},
			t.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [t.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [t.UTM]
		}, {
			b: "=>"
		},
		i, s]
	}
}), hljs.registerLanguage("python", function(t) {
	var e = {
		cN: "prompt",
		b: /^(>>>|\.\.\.) /
	},
		n = {
			cN: "string",
			c: [t.BE],
			v: [{
				b: /(u|b)?r?'''/,
				e: /'''/,
				c: [e],
				r: 10
			}, {
				b: /(u|b)?r?"""/,
				e: /"""/,
				c: [e],
				r: 10
			}, {
				b: /(u|r|ur)'/,
				e: /'/,
				r: 10
			}, {
				b: /(u|r|ur)"/,
				e: /"/,
				r: 10
			}, {
				b: /(b|br)'/,
				e: /'/
			}, {
				b: /(b|br)"/,
				e: /"/
			},
			t.ASM, t.QSM]
		},
		i = {
			cN: "number",
			r: 0,
			v: [{
				b: t.BNR + "[lLjJ]?"
			}, {
				b: "\\b(0o[0-7]+)[lLjJ]?"
			}, {
				b: t.CNR + "[lLjJ]?"
			}]
		},
		s = {
			cN: "params",
			b: /\(/,
			e: /\)/,
			c: ["self", e, i, n]
		},
		o = {
			e: /:/,
			i: /[${=;\n]/,
			c: [t.UTM, s]
		};
	return {
		k: {
			keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
			built_in: "Ellipsis NotImplemented"
		},
		i: /(<\/|->|\?)/,
		c: [e, i, n, t.HCM, t.inherit(o, {
			cN: "function",
			bK: "def",
			r: 10
		}), t.inherit(o, {
			cN: "class",
			bK: "class"
		}),
		{
			cN: "decorator",
			b: /@/,
			e: /$/
		}, {
			b: /\b(print|exec)\(/
		}]
	}
}), hljs.registerLanguage("sql", function(t) {
	return {
		cI: !0,
		i: /[<>]/,
		c: [{
			cN: "operator",
			b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
			e: ";",
			eW: !0,
			k: {
				keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
				aggregate: "count sum min max avg"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [t.BE,
				{
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [t.BE,
				{
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [t.BE]
			},
			t.CNM]
		},
		t.CBLCLM,
		{
			cN: "comment",
			b: "--",
			e: "$"
		}]
	}
}), hljs.registerLanguage("ini", function(t) {
	return {
		cI: !0,
		i: /\S/,
		c: [{
			cN: "comment",
			b: ";",
			e: "$"
		}, {
			cN: "title",
			b: "^\\[",
			e: "\\]"
		}, {
			cN: "setting",
			b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
			e: "$",
			c: [{
				cN: "value",
				eW: !0,
				k: "on off true false yes no",
				c: [t.QSM, t.NM],
				r: 0
			}]
		}]
	}
}), hljs.registerLanguage("perl", function(t) {
	var e = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
		n = {
			cN: "subst",
			b: "[$@]\\{",
			e: "\\}",
			k: e
		},
		i = {
			b: "->{",
			e: "}"
		},
		s = {
			cN: "variable",
			v: [{
				b: /\$\d/
			}, {
				b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
			}, {
				b: /[\$\%\@\*][^\s\w{]/,
				r: 0
			}]
		},
		o = {
			cN: "comment",
			b: "^(__END__|__DATA__)",
			e: "\\n$",
			r: 5
		},
		a = [t.BE, n, s],
		r = [s, t.HCM, o,
		{
			cN: "comment",
			b: "^\\=\\w",
			e: "\\=cut",
			eW: !0
		},
		i,
		{
			cN: "string",
			c: a,
			v: [{
				b: "q[qwxr]?\\s*\\(",
				e: "\\)",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\[",
				e: "\\]",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\{",
				e: "\\}",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\|",
				e: "\\|",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\<",
				e: "\\>",
				r: 5
			}, {
				b: "qw\\s+q",
				e: "q",
				r: 5
			}, {
				b: "'",
				e: "'",
				c: [t.BE]
			}, {
				b: '"',
				e: '"'
			}, {
				b: "`",
				e: "`",
				c: [t.BE]
			}, {
				b: "{\\w+}",
				c: [],
				r: 0
			}, {
				b: "-?\\w+\\s*\\=\\>",
				c: [],
				r: 0
			}]
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\/\\/|" + t.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
			k: "split return print reverse grep",
			r: 0,
			c: [t.HCM, o,
			{
				cN: "regexp",
				b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
				r: 10
			}, {
				cN: "regexp",
				b: "(m|qr)?/",
				e: "/[a-z]*",
				c: [t.BE],
				r: 0
			}]
		}, {
			cN: "sub",
			bK: "sub",
			e: "(\\s*\\(.*?\\))?[;{]",
			r: 5
		}, {
			cN: "operator",
			b: "-\\w\\b",
			r: 0
		}];
	return n.c = r, i.c = r, {
		k: e,
		c: r
	}
}), hljs.registerLanguage("objectivec", function(t) {
	var e = {
		keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
		literal: "false true FALSE TRUE nil YES NO NULL",
		built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
	},
		n = /[a-zA-Z@][a-zA-Z0-9_]*/,
		i = "@interface @class @protocol @implementation";
	return {
		k: e,
		l: n,
		i: "</",
		c: [t.CLCM, t.CBLCLM, t.CNM, t.QSM,
		{
			cN: "string",
			b: "'",
			e: "[^\\\\]'",
			i: "[^\\\\][^']"
		}, {
			cN: "preprocessor",
			b: "#import",
			e: "$",
			c: [{
				cN: "title",
				b: '"',
				e: '"'
			}, {
				cN: "title",
				b: "<",
				e: ">"
			}]
		}, {
			cN: "preprocessor",
			b: "#",
			e: "$"
		}, {
			cN: "class",
			b: "(" + i.split(" ").join("|") + ")\\b",
			e: "({|$)",
			k: i,
			l: n,
			c: [t.UTM]
		}, {
			cN: "variable",
			b: "\\." + t.UIR,
			r: 0
		}]
	}
}), hljs.registerLanguage("coffeescript", function(t) {
	var e = {
		keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
		literal: "true false null undefined yes no on off",
		reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
		built_in: "npm require console print module exports global window document"
	},
		n = "[A-Za-z$_][0-9A-Za-z$_]*",
		i = t.inherit(t.TM, {
			b: n
		}),
		s = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: e
		},
		o = [t.BNM, t.inherit(t.CNM, {
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}),
		{
			cN: "string",
			v: [{
				b: /'''/,
				e: /'''/,
				c: [t.BE]
			}, {
				b: /'/,
				e: /'/,
				c: [t.BE]
			}, {
				b: /"""/,
				e: /"""/,
				c: [t.BE, s]
			}, {
				b: /"/,
				e: /"/,
				c: [t.BE, s]
			}]
		}, {
			cN: "regexp",
			v: [{
				b: "///",
				e: "///",
				c: [s, t.HCM]
			}, {
				b: "//[gim]*",
				r: 0
			}, {
				b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
			}]
		}, {
			cN: "property",
			b: "@" + n
		}, {
			b: "`",
			e: "`",
			eB: !0,
			eE: !0,
			sL: "javascript"
		}];
	return s.c = o, {
		k: e,
		c: o.concat([{
			cN: "comment",
			b: "###",
			e: "###"
		},
		t.HCM,
		{
			cN: "function",
			b: "(" + n + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
			e: "[-=]>",
			rB: !0,
			c: [i,
			{
				cN: "params",
				b: "\\(",
				rB: !0,
				c: [{
					b: /\(/,
					e: /\)/,
					k: e,
					c: ["self"].concat(o)
				}]
			}]
		}, {
			cN: "class",
			bK: "class",
			e: "$",
			i: /[:="\[\]]/,
			c: [{
				bK: "extends",
				eW: !0,
				i: /[:="\[\]]/,
				c: [i]
			},
			i]
		}, {
			cN: "attribute",
			b: n + ":",
			e: ":",
			rB: !0,
			eE: !0,
			r: 0
		}])
	}
}), hljs.registerLanguage("nginx", function(t) {
	var e = {
		cN: "variable",
		v: [{
			b: /\$\d+/
		}, {
			b: /\$\{/,
			e: /}/
		}, {
			b: "[\\$\\@]" + t.UIR
		}]
	},
		n = {
			eW: !0,
			l: "[a-z/_]+",
			k: {
				built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
			},
			r: 0,
			i: "=>",
			c: [t.HCM,
			{
				cN: "string",
				c: [t.BE, e],
				v: [{
					b: /"/,
					e: /"/
				}, {
					b: /'/,
					e: /'/
				}]
			}, {
				cN: "url",
				b: "([a-z]+):/",
				e: "\\s",
				eW: !0,
				eE: !0
			}, {
				cN: "regexp",
				c: [t.BE, e],
				v: [{
					b: "\\s\\^",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "~\\*?\\s+",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "\\*(\\.[a-z\\-]+)+"
				}, {
					b: "([a-z\\-]+\\.)+\\*"
				}]
			}, {
				cN: "number",
				b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
			}, {
				cN: "number",
				b: "\\b\\d+[kKmMgGdshdwy]*\\b",
				r: 0
			},
			e]
		};
	return {
		c: [t.HCM,
		{
			b: t.UIR + "\\s",
			e: ";|{",
			rB: !0,
			c: [t.inherit(t.UTM, {
				starts: n
			})],
			r: 0
		}],
		i: "[^\\s\\}]"
	}
}), hljs.registerLanguage("json", function(t) {
	var e = {
		literal: "true false null"
	},
		n = [t.QSM, t.CNM],
		i = {
			cN: "value",
			e: ",",
			eW: !0,
			eE: !0,
			c: n,
			k: e
		},
		s = {
			b: "{",
			e: "}",
			c: [{
				cN: "attribute",
				b: '\\s*"',
				e: '"\\s*:\\s*',
				eB: !0,
				eE: !0,
				c: [t.BE],
				i: "\\n",
				starts: i
			}],
			i: "\\S"
		},
		o = {
			b: "\\[",
			e: "\\]",
			c: [t.inherit(i, {
				cN: null
			})],
			i: "\\S"
		};
	return n.splice(n.length, 0, s, o), {
		c: n,
		k: e,
		i: "\\S"
	}
}), hljs.registerLanguage("apache", function(t) {
	var e = {
		cN: "number",
		b: "[\\$%]\\d+"
	};
	return {
		cI: !0,
		c: [t.HCM,
		{
			cN: "tag",
			b: "</?",
			e: ">"
		}, {
			cN: "keyword",
			b: /\w+/,
			r: 0,
			k: {
				common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
			},
			starts: {
				e: /$/,
				r: 0,
				k: {
					literal: "on off all"
				},
				c: [{
					cN: "sqbracket",
					b: "\\s\\[",
					e: "\\]$"
				}, {
					cN: "cbracket",
					b: "[\\$%]\\{",
					e: "\\}",
					c: ["self", e]
				},
				e, t.QSM]
			}
		}],
		i: /\S/
	}
}), hljs.registerLanguage("cpp", function(t) {
	var e = {
		keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
		built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
	};
	return {
		aliases: ["c"],
		k: e,
		i: "</",
		c: [t.CLCM, t.CBLCLM, t.QSM,
		{
			cN: "string",
			b: "'\\\\?.",
			e: "'",
			i: "."
		}, {
			cN: "number",
			b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
		},
		t.CNM,
		{
			cN: "preprocessor",
			b: "#",
			e: "$",
			c: [{
				b: "include\\s*<",
				e: ">",
				i: "\\n"
			},
			t.CLCM]
		}, {
			cN: "stl_container",
			b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
			e: ">",
			k: e,
			r: 10,
			c: ["self"]
		}]
	}
}), hljs.registerLanguage("makefile", function(t) {
	var e = {
		cN: "variable",
		b: /\$\(/,
		e: /\)/,
		c: [t.BE]
	};
	return {
		c: [t.HCM,
		{
			b: /^\w+\s*\W*=/,
			rB: !0,
			r: 0,
			starts: {
				cN: "constant",
				e: /\s*\W*=/,
				eE: !0,
				starts: {
					e: /$/,
					r: 0,
					c: [e]
				}
			}
		}, {
			cN: "title",
			b: /^[\w]+:\s*$/
		}, {
			cN: "phony",
			b: /^\.PHONY:/,
			e: /$/,
			k: ".PHONY",
			l: /[\.\w]+/
		}, {
			b: /^\t+/,
			e: /$/,
			c: [t.QSM, e]
		}]
	}
}), function() {
	function t() {}
	function e(t, e) {
		for (var n = t.length; n--;) if (t[n].listener === e) return n;
		return -1
	}
	function n(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	var i = t.prototype,
		s = this,
		o = s.EventEmitter;
	i.getListeners = function(t) {
		var e, n, i = this._getEvents();
		if ("object" == typeof t) {
			e = {};
			for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
		} else e = i[t] || (i[t] = []);
		return e
	}, i.flattenListeners = function(t) {
		var e, n = [];
		for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
		return n
	}, i.getListenersAsObject = function(t) {
		var e, n = this.getListeners(t);
		return n instanceof Array && (e = {}, e[t] = n), e || n
	}, i.addListener = function(t, n) {
		var i, s = this.getListenersAsObject(t),
			o = "object" == typeof n;
		for (i in s) s.hasOwnProperty(i) && -1 === e(s[i], n) && s[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function(t, e) {
		return this.addListener(t, {
			listener: e,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function(t) {
		return this.getListeners(t), this
	}, i.defineEvents = function(t) {
		for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
		return this
	}, i.removeListener = function(t, n) {
		var i, s, o = this.getListenersAsObject(t);
		for (s in o) o.hasOwnProperty(s) && (i = e(o[s], n), -1 !== i && o[s].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, i.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, i.manipulateListeners = function(t, e, n) {
		var i, s, o = t ? this.removeListener : this.addListener,
			a = t ? this.removeListeners : this.addListeners;
		if ("object" != typeof e || e instanceof RegExp) for (i = n.length; i--;) o.call(this, e, n[i]);
		else for (i in e) e.hasOwnProperty(i) && (s = e[i]) && ("function" == typeof s ? o.call(this, i, s) : a.call(this, i, s));
		return this
	}, i.removeEvent = function(t) {
		var e, n = typeof t,
			i = this._getEvents();
		if ("string" === n) delete i[t];
		else if ("object" === n) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
		var n, i, s, o, a = this.getListenersAsObject(t);
		for (s in a) if (a.hasOwnProperty(s)) for (i = a[s].length; i--;) n = a[s][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, i.setOnceReturnValue = function(t) {
		return this._onceReturnValue = t, this
	}, i._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function() {
		return this._events || (this._events = {})
	}, t.noConflict = function() {
		return s.EventEmitter = o, t
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
	function e(e) {
		var n = t.event;
		return n.target = n.target || n.srcElement || e, n
	}
	var n = document.documentElement,
		i = function() {};
	n.addEventListener ? i = function(t, e, n) {
		t.addEventListener(e, n, !1)
	} : n.attachEvent && (i = function(t, n, i) {
		t[n + i] = i.handleEvent ?
		function() {
			var n = e(t);
			i.handleEvent.call(i, n)
		} : function() {
			var n = e(t);
			i.call(t, n)
		}, t.attachEvent("on" + n, t[n + i])
	});
	var s = function() {};
	n.removeEventListener ? s = function(t, e, n) {
		t.removeEventListener(e, n, !1)
	} : n.detachEvent && (s = function(t, e, n) {
		t.detachEvent("on" + e, t[e + n]);
		try {
			delete t[e + n]
		} catch (i) {
			t[e + n] = void 0
		}
	});
	var o = {
		bind: i,
		unbind: s
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
}(this), function(t) {
	function e(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}
	function n(t) {
		return "[object Array]" === l.call(t)
	}
	function i(t) {
		var e = [];
		if (n(t)) e = t;
		else if ("number" == typeof t.length) for (var i = 0, s = t.length; s > i; i++) e.push(t[i]);
		else e.push(t);
		return e
	}
	function s(t, n) {
		function s(t, n, a) {
			if (!(this instanceof s)) return new s(t, n);
			"string" == typeof t && (t = document.querySelectorAll(t)), this.elements = i(t), this.options = e({}, this.options), "function" == typeof n ? a = n : e(this.options, n), a && this.on("always", a), this.getImages(), o && (this.jqDeferred = new o.Deferred);
			var r = this;
			setTimeout(function() {
				r.check()
			})
		}
		function l(t) {
			this.img = t
		}
		function c(t) {
			this.src = t, h[t] = this
		}
		s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
			this.images = [];
			for (var t = 0, e = this.elements.length; e > t; t++) {
				var n = this.elements[t];
				"IMG" === n.nodeName && this.addImage(n);
				for (var i = n.querySelectorAll("img"), s = 0, o = i.length; o > s; s++) {
					var a = i[s];
					this.addImage(a)
				}
			}
		}, s.prototype.addImage = function(t) {
			var e = new l(t);
			this.images.push(e)
		}, s.prototype.check = function() {
			function t(t, s) {
				return e.options.debug && r && a.log("confirm", t, s), e.progress(t), n++, n === i && e.complete(), !0
			}
			var e = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return void this.complete();
			for (var s = 0; i > s; s++) {
				var o = this.images[s];
				o.on("confirm", t), o.check()
			}
		}, s.prototype.progress = function(t) {
			this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
			var e = this;
			setTimeout(function() {
				e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify(e, t)
			})
		}, s.prototype.complete = function() {
			var t = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var e = this;
			setTimeout(function() {
				if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
					var n = e.hasAnyBroken ? "reject" : "resolve";
					e.jqDeferred[n](e)
				}
			})
		}, o && (o.fn.imagesLoaded = function(t, e) {
			var n = new s(this, t, e);
			return n.jqDeferred.promise(o(this))
		}), l.prototype = new t, l.prototype.check = function() {
			var t = h[this.img.src] || new c(this.img.src);
			if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
			if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			var e = this;
			t.on("confirm", function(t, n) {
				return e.confirm(t.isLoaded, n), !0
			}), t.check()
		}, l.prototype.confirm = function(t, e) {
			this.isLoaded = t, this.emit("confirm", this, e)
		};
		var h = {};
		return c.prototype = new t, c.prototype.check = function() {
			if (!this.isChecked) {
				var t = new Image;
				n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
			}
		}, c.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, c.prototype.onload = function(t) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(t)
		}, c.prototype.onerror = function(t) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
		}, c.prototype.confirm = function(t, e) {
			this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
		}, c.prototype.unbindProxyEvents = function(t) {
			n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
		}, s
	}
	var o = t.jQuery,
		a = t.console,
		r = "undefined" != typeof a,
		l = Object.prototype.toString;
	"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], s) : t.imagesLoaded = s(t.EventEmitter, t.eventie)
}(window), function(t, e) {
	function n(e, n) {
		var s, o, a, r = e.nodeName.toLowerCase();
		return "area" === r ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (a = t("img[usemap=#" + o + "]")[0], !! a && i(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || n : n) && i(e)
	}
	function i(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	var s = 0,
		o = /^ui-id-\d+$/;
	t.ui = t.ui || {}, t.extend(t.ui, {
		version: "1.10.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), t.fn.extend({
		focus: function(e) {
			return function(n, i) {
				return "number" == typeof n ? this.each(function() {
					var e = this;
					setTimeout(function() {
						t(e).focus(), i && i.call(e)
					}, n)
				}) : e.apply(this, arguments)
			}
		}(t.fn.focus),
		scrollParent: function() {
			var e;
			return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
		},
		zIndex: function(n) {
			if (n !== e) return this.css("zIndex", n);
			if (this.length) for (var i, s, o = t(this[0]); o.length && o[0] !== document;) {
				if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
				o = o.parent()
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++s)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				o.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.extend(t.expr[":"], {
		data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
			return function(n) {
				return !!t.data(n, e)
			}
		}) : function(e, n, i) {
			return !!t.data(e, i[3])
		},
		focusable: function(e) {
			return n(e, !isNaN(t.attr(e, "tabindex")))
		},
		tabbable: function(e) {
			var i = t.attr(e, "tabindex"),
				s = isNaN(i);
			return (s || i >= 0) && n(e, !s)
		}
	}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
		function s(e, n, i, s) {
			return t.each(o, function() {
				n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), n
		}
		var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			a = i.toLowerCase(),
			r = {
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};
		t.fn["inner" + i] = function(n) {
			return n === e ? r["inner" + i].call(this) : this.each(function() {
				t(this).css(a, s(this, n) + "px")
			})
		}, t.fn["outer" + i] = function(e, n) {
			return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
				t(this).css(a, s(this, e, !0, n) + "px")
			})
		}
	}), t.fn.addBack || (t.fn.addBack = function(t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
		return function(n) {
			return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
		}
	}(t.fn.removeData)), t.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
		disableSelection: function() {
			return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
				t.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), t.extend(t.ui, {
		plugin: {
			add: function(e, n, i) {
				var s, o = t.ui[e].prototype;
				for (s in i) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([n, i[s]])
			},
			call: function(t, e, n) {
				var i, s = t.plugins[e];
				if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (i = 0; s.length > i; i++) t.options[s[i][0]] && s[i][1].apply(t.element, n)
			}
		},
		hasScroll: function(e, n) {
			if ("hidden" === t(e).css("overflow")) return !1;
			var i = n && "left" === n ? "scrollLeft" : "scrollTop",
				s = !1;
			return e[i] > 0 ? !0 : (e[i] = 1, s = e[i] > 0, e[i] = 0, s)
		}
	})
}(jQuery), function(t, e) {
	var n = 0,
		i = Array.prototype.slice,
		s = t.cleanData;
	t.cleanData = function(e) {
		for (var n, i = 0; null != (n = e[i]); i++) try {
			t(n).triggerHandler("remove")
		} catch (o) {}
		s(e)
	}, t.widget = function(n, i, s) {
		var o, a, r, l, c = {},
			h = n.split(".")[0];
		n = n.split(".")[1], o = h + "-" + n, s || (s = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
			return !!t.data(e, o)
		}, t[h] = t[h] || {}, a = t[h][n], r = t[h][n] = function(t, n) {
			return this._createWidget ? (arguments.length && this._createWidget(t, n), e) : new r(t, n)
		}, t.extend(r, a, {
			version: s.version,
			_proto: t.extend({}, s),
			_childConstructors: []
		}), l = new i, l.options = t.widget.extend({}, l.options), t.each(s, function(n, s) {
			return t.isFunction(s) ? (c[n] = function() {
				var t = function() {
						return i.prototype[n].apply(this, arguments)
					},
					e = function(t) {
						return i.prototype[n].apply(this, t)
					};
				return function() {
					var n, i = this._super,
						o = this._superApply;
					return this._super = t, this._superApply = e, n = s.apply(this, arguments), this._super = i, this._superApply = o, n
				}
			}(), e) : (c[n] = s, e)
		}), r.prototype = t.widget.extend(l, {
			widgetEventPrefix: a ? l.widgetEventPrefix || n : n
		}, c, {
			constructor: r,
			namespace: h,
			widgetName: n,
			widgetFullName: o
		}), a ? (t.each(a._childConstructors, function(e, n) {
			var i = n.prototype;
			t.widget(i.namespace + "." + i.widgetName, r, n._proto)
		}), delete a._childConstructors) : i._childConstructors.push(r), t.widget.bridge(n, r)
	}, t.widget.extend = function(n) {
		for (var s, o, a = i.call(arguments, 1), r = 0, l = a.length; l > r; r++) for (s in a[r]) o = a[r][s], a[r].hasOwnProperty(s) && o !== e && (n[s] = t.isPlainObject(o) ? t.isPlainObject(n[s]) ? t.widget.extend({}, n[s], o) : t.widget.extend({}, o) : o);
		return n
	}, t.widget.bridge = function(n, s) {
		var o = s.prototype.widgetFullName || n;
		t.fn[n] = function(a) {
			var r = "string" == typeof a,
				l = i.call(arguments, 1),
				c = this;
			return a = !r && l.length ? t.widget.extend.apply(null, [a].concat(l)) : a, this.each(r ?
			function() {
				var i, s = t.data(this, o);
				return s ? t.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, l), i !== s && i !== e ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : e) : t.error("no such method '" + a + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
			} : function() {
				var e = t.data(this, o);
				e ? e.option(a || {})._init() : t.data(this, o, new s(a, this))
			}), c
		}
	}, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(e, i) {
			i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(t) {
					t.target === i && this.destroy()
				}
			}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function() {
			return this.element
		},
		option: function(n, i) {
			var s, o, a, r = n;
			if (0 === arguments.length) return t.widget.extend({}, this.options);
			if ("string" == typeof n) if (r = {}, s = n.split("."), n = s.shift(), s.length) {
				for (o = r[n] = t.widget.extend({}, this.options[n]), a = 0; s.length - 1 > a; a++) o[s[a]] = o[s[a]] || {}, o = o[s[a]];
				if (n = s.pop(), 1 === arguments.length) return o[n] === e ? null : o[n];
				o[n] = i
			} else {
				if (1 === arguments.length) return this.options[n] === e ? null : this.options[n];
				r[n] = i
			}
			return this._setOptions(r), this
		},
		_setOptions: function(t) {
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function(t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(n, i, s) {
			var o, a = this;
			"boolean" != typeof n && (s = i, i = n, n = !1), s ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, o = this.widget()), t.each(s, function(s, r) {
				function l() {
					return n || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
				}
				"string" != typeof r && (l.guid = r.guid = r.guid || l.guid || t.guid++);
				var c = s.match(/^(\w+)\s*(.*)$/),
					h = c[1] + a.eventNamespace,
					u = c[2];
				u ? o.delegate(u, h, l) : i.bind(h, l)
			})
		},
		_off: function(t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
		},
		_delay: function(t, e) {
			function n() {
				return ("string" == typeof t ? i[t] : t).apply(i, arguments)
			}
			var i = this;
			return setTimeout(n, e || 0)
		},
		_hoverable: function(e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function(e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function(e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(e, n, i) {
			var s, o, a = this.options[e];
			if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], o = n.originalEvent) for (s in o) s in n || (n[s] = o[s]);
			return this.element.trigger(n, i), !(t.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(e, n) {
		t.Widget.prototype["_" + e] = function(i, s, o) {
			"string" == typeof s && (s = {
				effect: s
			});
			var a, r = s ? s === !0 || "number" == typeof s ? n : s.effect || n : e;
			s = s || {}, "number" == typeof s && (s = {
				duration: s
			}), a = !t.isEmptyObject(s), s.complete = o, s.delay && i.delay(s.delay), a && t.effects && t.effects.effect[r] ? i[e](s) : r !== e && i[r] ? i[r](s.duration, s.easing, o) : i.queue(function(n) {
				t(this)[e](), o && o.call(i[0]), n()
			})
		}
	})
}(jQuery), function(t) {
	var e = !1;
	t(document).mouseup(function() {
		e = !1
	}), t.widget("ui.mouse", {
		version: "1.10.4",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function(t) {
				return e._mouseDown(t)
			}).bind("click." + this.widgetName, function(n) {
				return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(n) {
			if (!e) {
				this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
				var i = this,
					s = 1 === n.which,
					o = "string" == typeof this.options.cancel && n.target.nodeName ? t(n.target).closest(this.options.cancel).length : !1;
				return s && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
					return i._mouseMove(t)
				}, this._mouseUpDelegate = function(t) {
					return i._mouseUp(t)
				}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove: function(e) {
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function(e) {
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
		},
		_mouseDistanceMet: function(t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	})
}(jQuery), function(t) {
	t.widget("ui.draggable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function(e) {
			var n = this.options;
			return this.helper || n.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
				t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(t(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function(e) {
			var n = this.options;
			return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, this.offset.scroll = !1, t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_mouseDrag: function(e, n) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !n) {
				var i = this._uiHash();
				if (this._trigger("drag", e, i) === !1) return this._mouseUp({}), !1;
				this.position = i.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
		},
		_mouseStop: function(e) {
			var n = this,
				i = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				n._trigger("stop", e) !== !1 && n._clear()
			}) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp: function(e) {
			return t("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			}), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(e) {
			return this.options.handle ? !! t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper: function(e) {
			var n = this.options,
				i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
			return i.parents("body").length || i.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var t = this.element.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, n, i, s = this.options;
			return s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), n = t(s.containment), i = n[0], void(i && (e = "hidden" !== n.css("overflow"), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n))) : void(this.containment = null)
		},
		_convertPositionTo: function(e, n) {
			n || (n = this.position);
			var i = "absolute" === e ? 1 : -1,
				s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
			return this.offset.scroll || (this.offset.scroll = {
				top: s.scrollTop(),
				left: s.scrollLeft()
			}), {
				top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
				left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function(e) {
			var n, i, s, o, a = this.options,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				l = e.pageX,
				c = e.pageY;
			return this.offset.scroll || (this.offset.scroll = {
				top: r.scrollTop(),
				left: r.scrollLeft()
			}), this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (c = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (c = n[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, c = n ? s - this.offset.click.top >= n[1] || s - this.offset.click.top > n[3] ? s : s - this.offset.click.top >= n[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = n ? o - this.offset.click.left >= n[0] || o - this.offset.click.left > n[2] ? o : o - this.offset.click.left >= n[0] ? o - a.grid[0] : o + a.grid[0] : o)), {
				top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
				left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function(e, n, i) {
			return i = i || this._uiHash(), t.ui.plugin.call(this, e, [n, i]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, n, i)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), t.ui.plugin.add("draggable", "connectToSortable", {
		start: function(e, n) {
			var i = t(this).data("ui-draggable"),
				s = i.options,
				o = t.extend({}, n, {
					item: i.element
				});
			i.sortables = [], t(s.connectToSortable).each(function() {
				var n = t.data(this, "ui-sortable");
				n && !n.options.disabled && (i.sortables.push({
					instance: n,
					shouldRevert: n.options.revert
				}), n.refreshPositions(), n._trigger("activate", e, o))
			})
		},
		stop: function(e, n) {
			var i = t(this).data("ui-draggable"),
				s = t.extend({}, n, {
					item: i.element
				});
			t.each(i.sortables, function() {
				this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === i.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
			})
		},
		drag: function(e, n) {
			var i = t(this).data("ui-draggable"),
				s = this;
			t.each(i.sortables, function() {
				var o = !1,
					a = this;
				this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(i.sortables, function() {
					return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
				})), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
					return n.helper[0]
				}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", e), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", e), i.dropped = !1)
			})
		}
	}), t.ui.plugin.add("draggable", "cursor", {
		start: function() {
			var e = t("body"),
				n = t(this).data("ui-draggable").options;
			e.css("cursor") && (n._cursor = e.css("cursor")), e.css("cursor", n.cursor)
		},
		stop: function() {
			var e = t(this).data("ui-draggable").options;
			e._cursor && t("body").css("cursor", e._cursor)
		}
	}), t.ui.plugin.add("draggable", "opacity", {
		start: function(e, n) {
			var i = t(n.helper),
				s = t(this).data("ui-draggable").options;
			i.css("opacity") && (s._opacity = i.css("opacity")), i.css("opacity", s.opacity)
		},
		stop: function(e, n) {
			var i = t(this).data("ui-draggable").options;
			i._opacity && t(n.helper).css("opacity", i._opacity)
		}
	}), t.ui.plugin.add("draggable", "scroll", {
		start: function() {
			var e = t(this).data("ui-draggable");
			e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
		},
		drag: function(e) {
			var n = t(this).data("ui-draggable"),
				i = n.options,
				s = !1;
			n.scrollParent[0] !== document && "HTML" !== n.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = s = n.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = s = n.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = s = n.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = s = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
		}
	}), t.ui.plugin.add("draggable", "snap", {
		start: function() {
			var e = t(this).data("ui-draggable"),
				n = e.options;
			e.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
				var n = t(this),
					i = n.offset();
				this !== e.element[0] && e.snapElements.push({
					item: this,
					width: n.outerWidth(),
					height: n.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function(e, n) {
			var i, s, o, a, r, l, c, h, u, d, f = t(this).data("ui-draggable"),
				p = f.options,
				g = p.snapTolerance,
				m = n.offset.left,
				v = m + f.helperProportions.width,
				b = n.offset.top,
				y = b + f.helperProportions.height;
			for (u = f.snapElements.length - 1; u >= 0; u--) r = f.snapElements[u].left, l = r + f.snapElements[u].width, c = f.snapElements[u].top, h = c + f.snapElements[u].height, r - g > v || m > l + g || c - g > y || b > h + g || !t.contains(f.snapElements[u].item.ownerDocument, f.snapElements[u].item) ? (f.snapElements[u].snapping && f.options.snap.release && f.options.snap.release.call(f.element, e, t.extend(f._uiHash(), {
				snapItem: f.snapElements[u].item
			})), f.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (i = g >= Math.abs(c - y), s = g >= Math.abs(h - b), o = g >= Math.abs(r - v), a = g >= Math.abs(l - m), i && (n.position.top = f._convertPositionTo("relative", {
				top: c - f.helperProportions.height,
				left: 0
			}).top - f.margins.top), s && (n.position.top = f._convertPositionTo("relative", {
				top: h,
				left: 0
			}).top - f.margins.top), o && (n.position.left = f._convertPositionTo("relative", {
				top: 0,
				left: r - f.helperProportions.width
			}).left - f.margins.left), a && (n.position.left = f._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left - f.margins.left)), d = i || s || o || a, "outer" !== p.snapMode && (i = g >= Math.abs(c - b), s = g >= Math.abs(h - y), o = g >= Math.abs(r - m), a = g >= Math.abs(l - v), i && (n.position.top = f._convertPositionTo("relative", {
				top: c,
				left: 0
			}).top - f.margins.top), s && (n.position.top = f._convertPositionTo("relative", {
				top: h - f.helperProportions.height,
				left: 0
			}).top - f.margins.top), o && (n.position.left = f._convertPositionTo("relative", {
				top: 0,
				left: r
			}).left - f.margins.left), a && (n.position.left = f._convertPositionTo("relative", {
				top: 0,
				left: l - f.helperProportions.width
			}).left - f.margins.left)), !f.snapElements[u].snapping && (i || s || o || a || d) && f.options.snap.snap && f.options.snap.snap.call(f.element, e, t.extend(f._uiHash(), {
				snapItem: f.snapElements[u].item
			})), f.snapElements[u].snapping = i || s || o || a || d)
		}
	}), t.ui.plugin.add("draggable", "stack", {
		start: function() {
			var e, n = this.data("ui-draggable").options,
				i = t.makeArray(t(n.stack)).sort(function(e, n) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(n).css("zIndex"), 10) || 0)
				});
			i.length && (e = parseInt(t(i[0]).css("zIndex"), 10) || 0, t(i).each(function(n) {
				t(this).css("zIndex", e + n)
			}), this.css("zIndex", e + i.length))
		}
	}), t.ui.plugin.add("draggable", "zIndex", {
		start: function(e, n) {
			var i = t(n.helper),
				s = t(this).data("ui-draggable").options;
			i.css("zIndex") && (s._zIndex = i.css("zIndex")), i.css("zIndex", s.zIndex)
		},
		stop: function(e, n) {
			var i = t(this).data("ui-draggable").options;
			i._zIndex && t(n.helper).css("zIndex", i._zIndex)
		}
	})
}(jQuery), function(t) {
	function e(t, e, n) {
		return t > e && e + n > t
	}
	t.widget("ui.droppable", {
		version: "1.10.4",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var e, n = this.options,
				i = n.accept;
			this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function(t) {
				return t.is(i)
			}, this.proportions = function() {
				return arguments.length ? void(e = arguments[0]) : e ? e : e = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			}, t.ui.ddmanager.droppables[n.scope] = t.ui.ddmanager.droppables[n.scope] || [], t.ui.ddmanager.droppables[n.scope].push(this), n.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function() {
			for (var e = 0, n = t.ui.ddmanager.droppables[this.options.scope]; n.length > e; e++) n[e] === this && n.splice(e, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(e, n) {
			"accept" === e && (this.accept = t.isFunction(n) ? n : function(t) {
				return t.is(n)
			}), t.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(e) {
			var n = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", e, this.ui(n))
		},
		_deactivate: function(e) {
			var n = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", e, this.ui(n))
		},
		_over: function(e) {
			var n = t.ui.ddmanager.current;
			n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(n)))
		},
		_out: function(e) {
			var n = t.ui.ddmanager.current;
			n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(n)))
		},
		_drop: function(e, n) {
			var i = n || t.ui.ddmanager.current,
				s = !1;
			return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var e = t.data(this, "ui-droppable");
				return e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && t.ui.intersect(i, t.extend(e, {
					offset: e.element.offset()
				}), e.options.tolerance) ? (s = !0, !1) : void 0
			}), s ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(i)), this.element) : !1) : !1
		},
		ui: function(t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		}
	}), t.ui.intersect = function(t, n, i) {
		if (!n.offset) return !1;
		var s, o, a = (t.positionAbs || t.position.absolute).left,
			r = (t.positionAbs || t.position.absolute).top,
			l = a + t.helperProportions.width,
			c = r + t.helperProportions.height,
			h = n.offset.left,
			u = n.offset.top,
			d = h + n.proportions().width,
			f = u + n.proportions().height;
		switch (i) {
		case "fit":
			return a >= h && d >= l && r >= u && f >= c;
		case "intersect":
			return a + t.helperProportions.width / 2 > h && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && f > c - t.helperProportions.height / 2;
		case "pointer":
			return s = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(o, u, n.proportions().height) && e(s, h, n.proportions().width);
		case "touch":
			return (r >= u && f >= r || c >= u && f >= c || u > r && c > f) && (a >= h && d >= a || l >= h && d >= l || h > a && l > d);
		default:
			return !1
		}
	}, t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(e, n) {
			var i, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
				a = n ? n.type : null,
				r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t: for (i = 0; o.length > i; i++) if (!(o[i].options.disabled || e && !o[i].accept.call(o[i].element[0], e.currentItem || e.element))) {
				for (s = 0; r.length > s; s++) if (r[s] === o[i].element[0]) {
					o[i].proportions().height = 0;
					continue t
				}
				o[i].visible = "none" !== o[i].element.css("display"), o[i].visible && ("mousedown" === a && o[i]._activate.call(o[i], n), o[i].offset = o[i].element.offset(), o[i].proportions({
					width: o[i].element[0].offsetWidth,
					height: o[i].element[0].offsetHeight
				}))
			}
		},
		drop: function(e, n) {
			var i = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
			}), i
		},
		dragStart: function(e, n) {
			e.element.parentsUntil("body").bind("scroll.droppable", function() {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, n)
			})
		},
		drag: function(e, n) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, n), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var i, s, o, a = t.ui.intersect(e, this, this.options.tolerance),
						r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
					r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
						return t.data(this, "ui-droppable").options.scope === s
					}), o.length && (i = t.data(o[0], "ui-droppable"), i.greedyChild = "isover" === r)), i && "isover" === r && (i.isover = !1, i.isout = !0, i._out.call(i, n)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, n), i && "isout" === r && (i.isout = !1, i.isover = !0, i._over.call(i, n)))
				}
			})
		},
		dragStop: function(e, n) {
			e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, n)
		}
	}
}(jQuery), function(t) {
	function e(t) {
		return parseInt(t, 10) || 0
	}
	function n(t) {
		return !isNaN(parseInt(t, 10))
	}
	t.widget("ui.resizable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_create: function() {
			var e, n, i, s, o, a = this,
				r = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
				_aspectRatio: !! r.aspectRatio,
				aspectRatio: r.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
				marginLeft: this.originalElement.css("marginLeft"),
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom")
			}), this.originalElement.css({
				marginLeft: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0
			}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css({
				margin: this.originalElement.css("margin")
			}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			} : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, n = 0; e.length > n; n++) i = t.trim(e[n]), o = "ui-resizable-" + i, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
				zIndex: r.zIndex
			}), "se" === i && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(s);
			this._renderAxis = function(e) {
				var n, i, s, o;
				e = e || this.element;
				for (n in this.handles) this.handles[n].constructor === String && (this.handles[n] = t(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (i = t(this.handles[n], this.element), o = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[n]).length
			}, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
				a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = s && s[1] ? s[1] : "se")
			}), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
			}).mouseleave(function() {
				r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var e, n = function(e) {
					t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
			return this.elementIsWrapper && (n(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
		},
		_mouseCapture: function(e) {
			var n, i, s = !1;
			for (n in this.handles) i = t(this.handles[n])[0], (i === e.target || t.contains(i, e.target)) && (s = !0);
			return !this.options.disabled && s
		},
		_mouseStart: function(n) {
			var i, s, o, a = this.options,
				r = this.element.position(),
				l = this.element;
			return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
				position: "absolute",
				top: l.css("top"),
				left: l.css("left")
			}) : l.is(".ui-draggable") && l.css({
				position: "absolute",
				top: r.top,
				left: r.left
			}), this._renderProxy(), i = e(this.helper.css("left")), s = e(this.helper.css("top")), a.containment && (i += t(a.containment).scrollLeft() || 0, s += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: i,
				top: s
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: l.width(),
				height: l.height()
			}, this.originalSize = this._helper ? {
				width: l.outerWidth(),
				height: l.outerHeight()
			} : {
				width: l.width(),
				height: l.height()
			}, this.originalPosition = {
				left: i,
				top: s
			}, this.sizeDiff = {
				width: l.outerWidth() - l.width(),
				height: l.outerHeight() - l.height()
			}, this.originalMousePosition = {
				left: n.pageX,
				top: n.pageY
			}, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), l.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
		},
		_mouseDrag: function(e) {
			var n, i = this.helper,
				s = {},
				o = this.originalMousePosition,
				a = this.axis,
				r = this.position.top,
				l = this.position.left,
				c = this.size.width,
				h = this.size.height,
				u = e.pageX - o.left || 0,
				d = e.pageY - o.top || 0,
				f = this._change[a];
			return f ? (n = f.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (n = this._updateRatio(n, e)), n = this._respectSize(n, e), this._updateCache(n), this._propagate("resize", e), this.position.top !== r && (s.top = this.position.top + "px"), this.position.left !== l && (s.left = this.position.left + "px"), this.size.width !== c && (s.width = this.size.width + "px"), this.size.height !== h && (s.height = this.size.height + "px"), i.css(s), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || this._trigger("resize", e, this.ui()), !1) : !1
		},
		_mouseStop: function(e) {
			this.resizing = !1;
			var n, i, s, o, a, r, l, c = this.options,
				h = this;
			return this._helper && (n = this._proportionallyResizeElements, i = n.length && /textarea/i.test(n[0].nodeName), s = i && t.ui.hasScroll(n[0], "left") ? 0 : h.sizeDiff.height, o = i ? 0 : h.sizeDiff.width, a = {
				width: h.helper.width() - o,
				height: h.helper.height() - s
			}, r = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null, l = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null, c.animate || this.element.css(t.extend(a, {
				top: l,
				left: r
			})), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function(t) {
			var e, i, s, o, a, r = this.options;
			a = {
				minWidth: n(r.minWidth) ? r.minWidth : 0,
				maxWidth: n(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight: n(r.minHeight) ? r.minHeight : 0,
				maxHeight: n(r.maxHeight) ? r.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > o && (a.maxHeight = o)), this._vBoundaries = a
		},
		_updateCache: function(t) {
			this.offset = this.helper.offset(), n(t.left) && (this.position.left = t.left), n(t.top) && (this.position.top = t.top), n(t.height) && (this.size.height = t.height), n(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function(t) {
			var e = this.position,
				i = this.size,
				s = this.axis;
			return n(t.height) ? t.width = t.height * this.aspectRatio : n(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
		},
		_respectSize: function(t) {
			var e = this._vBoundaries,
				i = this.axis,
				s = n(t.width) && e.maxWidth && e.maxWidth < t.width,
				o = n(t.height) && e.maxHeight && e.maxHeight < t.height,
				a = n(t.width) && e.minWidth && e.minWidth > t.width,
				r = n(t.height) && e.minHeight && e.minHeight > t.height,
				l = this.originalPosition.left + this.originalSize.width,
				c = this.position.top + this.size.height,
				h = /sw|nw|w/.test(i),
				u = /nw|ne|n/.test(i);
			return a && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), a && h && (t.left = l - e.minWidth), s && h && (t.left = l - e.maxWidth), r && u && (t.top = c - e.minHeight), o && u && (t.top = c - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) {
				var t, e, n, i, s, o = this.helper || this.element;
				for (t = 0; this._proportionallyResizeElements.length > t; t++) {
					if (s = this._proportionallyResizeElements[t], !this.borderDif) for (this.borderDif = [], n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], i = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], e = 0; n.length > e; e++) this.borderDif[e] = (parseInt(n[e], 10) || 0) + (parseInt(i[e], 10) || 0);
					s.css({
						height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy: function() {
			var e = this.element,
				n = this.options;
			this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++n.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function(t, e) {
				var n = this.originalSize,
					i = this.originalPosition;
				return {
					left: i.left + e,
					width: n.width - e
				}
			},
			n: function(t, e, n) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					top: s.top + n,
					height: i.height - n
				}
			},
			s: function(t, e, n) {
				return {
					height: this.originalSize.height + n
				}
			},
			se: function(e, n, i) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, n, i]))
			},
			sw: function(e, n, i) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, n, i]))
			},
			ne: function(e, n, i) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, n, i]))
			},
			nw: function(e, n, i) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, n, i]))
			}
		},
		_propagate: function(e, n) {
			t.ui.plugin.call(this, e, [n, this.ui()]), "resize" !== e && this._trigger(e, n, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), t.ui.plugin.add("resizable", "animate", {
		stop: function(e) {
			var n = t(this).data("ui-resizable"),
				i = n.options,
				s = n._proportionallyResizeElements,
				o = s.length && /textarea/i.test(s[0].nodeName),
				a = o && t.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
				r = o ? 0 : n.sizeDiff.width,
				l = {
					width: n.size.width - r,
					height: n.size.height - a
				},
				c = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
				h = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
			n.element.animate(t.extend(l, h && c ? {
				top: h,
				left: c
			} : {}), {
				duration: i.animateDuration,
				easing: i.animateEasing,
				step: function() {
					var i = {
						width: parseInt(n.element.css("width"), 10),
						height: parseInt(n.element.css("height"), 10),
						top: parseInt(n.element.css("top"), 10),
						left: parseInt(n.element.css("left"), 10)
					};
					s && s.length && t(s[0]).css({
						width: i.width,
						height: i.height
					}), n._updateCache(i), n._propagate("resize", e)
				}
			})
		}
	}), t.ui.plugin.add("resizable", "containment", {
		start: function() {
			var n, i, s, o, a, r, l, c = t(this).data("ui-resizable"),
				h = c.options,
				u = c.element,
				d = h.containment,
				f = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
			f && (c.containerElement = t(f), /document/.test(d) || d === document ? (c.containerOffset = {
				left: 0,
				top: 0
			}, c.containerPosition = {
				left: 0,
				top: 0
			}, c.parentData = {
				element: t(document),
				left: 0,
				top: 0,
				width: t(document).width(),
				height: t(document).height() || document.body.parentNode.scrollHeight
			}) : (n = t(f), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
				i[t] = e(n.css("padding" + s))
			}), c.containerOffset = n.offset(), c.containerPosition = n.position(), c.containerSize = {
				height: n.innerHeight() - i[3],
				width: n.innerWidth() - i[1]
			}, s = c.containerOffset, o = c.containerSize.height, a = c.containerSize.width, r = t.ui.hasScroll(f, "left") ? f.scrollWidth : a, l = t.ui.hasScroll(f) ? f.scrollHeight : o, c.parentData = {
				element: f,
				left: s.left,
				top: s.top,
				width: r,
				height: l
			}))
		},
		resize: function(e) {
			var n, i, s, o, a = t(this).data("ui-resizable"),
				r = a.options,
				l = a.containerOffset,
				c = a.position,
				h = a._aspectRatio || e.shiftKey,
				u = {
					top: 0,
					left: 0
				},
				d = a.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (u = l), c.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), h && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? l.left : 0), c.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), h && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? l.top : 0), a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top, n = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width), i = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - l.top) + a.sizeDiff.height), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o && (n -= Math.abs(a.parentData.left)), n + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - n, h && (a.size.height = a.size.width / a.aspectRatio)), i + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - i, h && (a.size.width = a.size.height * a.aspectRatio))
		},
		stop: function() {
			var e = t(this).data("ui-resizable"),
				n = e.options,
				i = e.containerOffset,
				s = e.containerPosition,
				o = e.containerElement,
				a = t(e.helper),
				r = a.offset(),
				l = a.outerWidth() - e.sizeDiff.width,
				c = a.outerHeight() - e.sizeDiff.height;
			e._helper && !n.animate && /relative/.test(o.css("position")) && t(this).css({
				left: r.left - s.left - i.left,
				width: l,
				height: c
			}), e._helper && !n.animate && /static/.test(o.css("position")) && t(this).css({
				left: r.left - s.left - i.left,
				width: l,
				height: c
			})
		}
	}), t.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var e = t(this).data("ui-resizable"),
				n = e.options,
				i = function(e) {
					t(e).each(function() {
						var e = t(this);
						e.data("ui-resizable-alsoresize", {
							width: parseInt(e.width(), 10),
							height: parseInt(e.height(), 10),
							left: parseInt(e.css("left"), 10),
							top: parseInt(e.css("top"), 10)
						})
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.parentNode ? i(n.alsoResize) : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], i(n.alsoResize)) : t.each(n.alsoResize, function(t) {
				i(t)
			})
		},
		resize: function(e, n) {
			var i = t(this).data("ui-resizable"),
				s = i.options,
				o = i.originalSize,
				a = i.originalPosition,
				r = {
					height: i.size.height - o.height || 0,
					width: i.size.width - o.width || 0,
					top: i.position.top - a.top || 0,
					left: i.position.left - a.left || 0
				},
				l = function(e, i) {
					t(e).each(function() {
						var e = t(this),
							s = t(this).data("ui-resizable-alsoresize"),
							o = {},
							a = i && i.length ? i : e.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						t.each(a, function(t, e) {
							var n = (s[e] || 0) + (r[e] || 0);
							n && n >= 0 && (o[e] = n || null)
						}), e.css(o)
					})
				};
			"object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
				l(t, e)
			})
		},
		stop: function() {
			t(this).removeData("resizable-alsoresize")
		}
	}), t.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var e = t(this).data("ui-resizable"),
				n = e.options,
				i = e.size;
			e.ghost = e.originalElement.clone(), e.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: i.height,
				width: i.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), e.ghost.appendTo(e.helper)
		},
		resize: function() {
			var e = t(this).data("ui-resizable");
			e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function() {
			var e = t(this).data("ui-resizable");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}), t.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var e = t(this).data("ui-resizable"),
				n = e.options,
				i = e.size,
				s = e.originalSize,
				o = e.originalPosition,
				a = e.axis,
				r = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
				l = r[0] || 1,
				c = r[1] || 1,
				h = Math.round((i.width - s.width) / l) * l,
				u = Math.round((i.height - s.height) / c) * c,
				d = s.width + h,
				f = s.height + u,
				p = n.maxWidth && d > n.maxWidth,
				g = n.maxHeight && f > n.maxHeight,
				m = n.minWidth && n.minWidth > d,
				v = n.minHeight && n.minHeight > f;
			n.grid = r, m && (d += l), v && (f += c), p && (d -= l), g && (f -= c), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = f) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = f, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = f, e.position.left = o.left - h) : (f - c > 0 ? (e.size.height = f, e.position.top = o.top - u) : (e.size.height = c, e.position.top = o.top + s.height - c), d - l > 0 ? (e.size.width = d, e.position.left = o.left - h) : (e.size.width = l, e.position.left = o.left + s.width - l))
		}
	})
}(jQuery), function(t) {
	t.widget("ui.selectable", t.ui.mouse, {
		version: "1.10.4",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var e, n = this;
			this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
				e = t(n.options.filter, n.element[0]), e.addClass("ui-selectee"), e.each(function() {
					var e = t(this),
						n = e.offset();
					t.data(this, "selectable-item", {
						element: this,
						$element: e,
						left: n.left,
						top: n.top,
						right: n.left + e.outerWidth(),
						bottom: n.top + e.outerHeight(),
						startselected: !1,
						selected: e.hasClass("ui-selected"),
						selecting: e.hasClass("ui-selecting"),
						unselecting: e.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function(e) {
			var n = this,
				i = this.options;
			this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(i.filter, this.element[0]), this._trigger("start", e), t(i.appendTo).append(this.helper), this.helper.css({
				left: e.pageX,
				top: e.pageY,
				width: 0,
				height: 0
			}), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var i = t.data(this, "selectable-item");
				i.startselected = !0, e.metaKey || e.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
					unselecting: i.element
				}))
			}), t(e.target).parents().addBack().each(function() {
				var i, s = t.data(this, "selectable-item");
				return s ? (i = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), s.unselecting = !i, s.selecting = i, s.selected = i, i ? n._trigger("selecting", e, {
					selecting: s.element
				}) : n._trigger("unselecting", e, {
					unselecting: s.element
				}), !1) : void 0
			}))
		},
		_mouseDrag: function(e) {
			if (this.dragged = !0, !this.options.disabled) {
				var n, i = this,
					s = this.options,
					o = this.opos[0],
					a = this.opos[1],
					r = e.pageX,
					l = e.pageY;
				return o > r && (n = r, r = o, o = n), a > l && (n = l, l = a, a = n), this.helper.css({
					left: o,
					top: a,
					width: r - o,
					height: l - a
				}), this.selectees.each(function() {
					var n = t.data(this, "selectable-item"),
						c = !1;
					n && n.element !== i.element[0] && ("touch" === s.tolerance ? c = !(n.left > r || o > n.right || n.top > l || a > n.bottom) : "fit" === s.tolerance && (c = n.left > o && r > n.right && n.top > a && l > n.bottom), c ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, i._trigger("selecting", e, {
						selecting: n.element
					}))) : (n.selecting && ((e.metaKey || e.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), i._trigger("unselecting", e, {
						unselecting: n.element
					}))), n.selected && (e.metaKey || e.ctrlKey || n.startselected || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
						unselecting: n.element
					})))))
				}), !1
			}
		},
		_mouseStop: function(e) {
			var n = this;
			return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
				var i = t.data(this, "selectable-item");
				i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, n._trigger("unselected", e, {
					unselected: i.element
				})
			}), t(".ui-selecting", this.element[0]).each(function() {
				var i = t.data(this, "selectable-item");
				i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, n._trigger("selected", e, {
					selected: i.element
				})
			}), this._trigger("stop", e), this.helper.remove(), !1
		}
	})
}(jQuery), function(t) {
	function e(t, e, n) {
		return t > e && e + n > t
	}
	function n(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.10.4",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function() {
			var t = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || n(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function(e, n) {
			"disabled" === e ? (this.options[e] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function(e, n) {
			var i = null,
				s = !1,
				o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
				return t.data(this, o.widgetName + "-item") === o ? (i = t(this), !1) : void 0
			}), t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)), i && (!this.options.handle || n || (t(this.options.handle, i).find("*").addBack().each(function() {
				this === e.target && (s = !0)
			}), s)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
		},
		_mouseStart: function(e, n, i) {
			var s, o, a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function(e) {
			var n, i, s, o, a = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--) if (i = this.items[n], s = i.item[0], o = this._intersectsWithPointer(i), o && i.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
				if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
				this._rearrange(e, i), this._trigger("change", e, this._uiHash());
				break
			}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(e, n) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var i = this,
						s = this.placeholder.offset(),
						o = this.options.axis,
						a = {};
					o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
						i._clear(e)
					})
				} else this._clear(e, n);
				return !1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(e) {
			var n = this._getItemsAsjQuery(e && e.connected),
				i = [];
			return e = e || {}, t(n).each(function() {
				var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
			}), !i.length && e.key && i.push(e.key + "="), i.join("&")
		},
		toArray: function(e) {
			var n = this._getItemsAsjQuery(e && e.connected),
				i = [];
			return e = e || {}, n.each(function() {
				i.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), i
		},
		_intersectsWith: function(t) {
			var e = this.positionAbs.left,
				n = e + this.helperProportions.width,
				i = this.positionAbs.top,
				s = i + this.helperProportions.height,
				o = t.left,
				a = o + t.width,
				r = t.top,
				l = r + t.height,
				c = this.offset.click.top,
				h = this.offset.click.left,
				u = "x" === this.options.axis || i + c > r && l > i + c,
				d = "y" === this.options.axis || e + h > o && a > e + h,
				f = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : e + this.helperProportions.width / 2 > o && a > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function(t) {
			var n = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				i = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				s = n && i,
				o = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return s ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
		},
		_intersectsWithSides: function(t) {
			var n = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				i = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				s = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return this.floating && o ? "right" === o && i || "left" === o && !i : s && ("down" === s && n || "up" === s && !n)
		},
		_getDragVerticalDirection: function() {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function(t) {
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function() {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function(e) {
			function n() {
				r.push(this)
			}
			var i, s, o, a, r = [],
				l = [],
				c = this._connectWith();
			if (c && e) for (i = c.length - 1; i >= 0; i--) for (o = t(c[i]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
			return t(r)
		},
		_removeCurrentsFromItems: function() {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function(t) {
				for (var n = 0; e.length > n; n++) if (e[n] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(e) {
			this.items = [], this.containers = [this];
			var n, i, s, o, a, r, l, c, h = this.items,
				u = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				d = this._connectWith();
			if (d && this.ready) for (n = d.length - 1; n >= 0; n--) for (s = t(d[n]), i = s.length - 1; i >= 0; i--) o = t.data(s[i], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
				item: this.currentItem
			}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (n = u.length - 1; n >= 0; n--) for (a = u[n][1], r = u[n][0], i = 0, c = r.length; c > i; i++) l = t(r[i]), l.data(this.widgetName + "-item", a), h.push({
				item: l,
				instance: a,
				width: 0,
				height: 0,
				left: 0,
				top: 0
			})
		},
		refreshPositions: function(e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var n, i, s, o;
			for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = s.outerWidth(), i.height = s.outerHeight()), o = s.offset(), i.left = o.left, i.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
			return this
		},
		_createPlaceholder: function(e) {
			e = e || this;
			var n, i = e.options;
			i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
				element: function() {
					var i = e.currentItem[0].nodeName.toLowerCase(),
						s = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tr" === i ? e.currentItem.children().each(function() {
						t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
					}) : "img" === i && s.attr("src", e.currentItem.attr("src")), n || s.css("visibility", "hidden"), s
				},
				update: function(t, s) {
					(!n || i.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function(i) {
			var s, o, a, r, l, c, h, u, d, f, p = null,
				g = null;
			for (s = this.containers.length - 1; s >= 0; s--) if (!t.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
				if (p && t.contains(this.containers[s].element[0], p.element[0])) continue;
				p = this.containers[s], g = s
			} else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", i, this._uiHash(this)), this.containers[s].containerCache.over = 0);
			if (p) if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1);
			else {
				for (a = 1e4, r = null, f = p.floating || n(this.currentItem), l = f ? "left" : "top", c = f ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!f || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[l], d = !1, Math.abs(u - h) > Math.abs(u + this.items[o][c] - h) && (d = !0, u += this.items[o][c]), a > Math.abs(u - h) && (a = Math.abs(u - h), r = this.items[o], this.direction = d ? "up" : "down"));
				if (!r && !this.options.dropOnEmpty) return;
				if (this.currentContainer === this.containers[g]) return;
				r ? this._rearrange(i, r, null, !0) : this._rearrange(i, null, this.containers[g].element, !0), this._trigger("change", i, this._uiHash()), this.containers[g]._trigger("change", i, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1
			}
		},
		_createHelper: function(e) {
			var n = this.options,
				i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
			return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, n, i, s = this.options;
			"parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], n = t(s.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(e, n) {
			n || (n = this.position);
			var i = "absolute" === e ? 1 : -1,
				s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(s[0].tagName);
			return {
				top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * i,
				left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * i
			}
		},
		_generatePosition: function(e) {
			var n, i, s = this.options,
				o = e.pageX,
				a = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				l = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (n = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - s.grid[1] : n + s.grid[1] : n, i = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0] : i)), {
				top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function(t, e, n, i) {
			n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var s = this.counter;
			this._delay(function() {
				s === this.counter && this.refreshPositions(!i)
			})
		},
		_clear: function(t, e) {
			function n(t, e, n) {
				return function(i) {
					n._trigger(t, i, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var i, s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && s.push(function(t) {
				this._trigger("receive", t, this._uiHash(this.fromOutside))
			}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
				this._trigger("update", t, this._uiHash())
			}), this !== this.currentContainer && (e || (s.push(function(t) {
				this._trigger("remove", t, this._uiHash())
			}), s.push(function(t) {
				return function(e) {
					t._trigger("receive", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), s.push(function(t) {
				return function(e) {
					t._trigger("update", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (i = 0; s.length > i; i++) s[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function() {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(e) {
			var n = e || this;
			return {
				helper: n.helper,
				placeholder: n.placeholder || t([]),
				position: n.position,
				originalPosition: n.originalPosition,
				offset: n.positionAbs,
				item: n.currentItem,
				sender: e ? e.element : null
			}
		}
	})
}(jQuery), function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
	function e(t) {
		return r.raw ? t : encodeURIComponent(t)
	}
	function n(t) {
		return r.raw ? t : decodeURIComponent(t)
	}
	function i(t) {
		return e(r.json ? JSON.stringify(t) : String(t))
	}
	function s(t) {
		0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return t = decodeURIComponent(t.replace(a, " ")), r.json ? JSON.parse(t) : t
		} catch (e) {}
	}
	function o(e, n) {
		var i = r.raw ? e : s(e);
		return t.isFunction(n) ? n(i) : i
	}
	var a = /\+/g,
		r = t.cookie = function(s, a, l) {
			if (void 0 !== a && !t.isFunction(a)) {
				if (l = t.extend({}, r.defaults, l), "number" == typeof l.expires) {
					var c = l.expires,
						h = l.expires = new Date;
					h.setTime(+h + 864e5 * c)
				}
				return document.cookie = [e(s), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
			}
			for (var u = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, p = d.length; p > f; f++) {
				var g = d[f].split("="),
					m = n(g.shift()),
					v = g.join("=");
				if (s && s === m) {
					u = o(v, a);
					break
				}
				s || void 0 === (v = o(v)) || (u[m] = v)
			}
			return u
		};
	r.defaults = {}, t.removeCookie = function(e, n) {
		return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
			expires: -1
		})), !t.cookie(e))
	}
}), function(X, l, n) {
	var L = function(h) {
			var j = function(e) {
					function o(t, e) {
						var i = j.defaults.columns,
							s = t.aoColumns.length,
							i = h.extend({}, j.models.oColumn, i, {
								sSortingClass: t.oClasses.sSortable,
								sSortingClassJUI: t.oClasses.sSortJUI,
								nTh: e ? e : l.createElement("th"),
								sTitle: i.sTitle ? i.sTitle : e ? e.innerHTML : "",
								aDataSort: i.aDataSort ? i.aDataSort : [s],
								mData: i.mData ? i.oDefaults : s
							});
						t.aoColumns.push(i), t.aoPreSearchCols[s] === n || null === t.aoPreSearchCols[s] ? t.aoPreSearchCols[s] = h.extend({}, j.models.oSearch) : (i = t.aoPreSearchCols[s], i.bRegex === n && (i.bRegex = !0), i.bSmart === n && (i.bSmart = !0), i.bCaseInsensitive === n && (i.bCaseInsensitive = !0)), m(t, s, null)
					}
					function m(t, e, i) {
						var s = t.aoColumns[e];
						i !== n && null !== i && (i.mDataProp && !i.mData && (i.mData = i.mDataProp), i.sType !== n && (s.sType = i.sType, s._bAutoType = !1), h.extend(s, i), p(s, i, "sWidth", "sWidthOrig"), i.iDataSort !== n && (s.aDataSort = [i.iDataSort]), p(s, i, "aDataSort"));
						var o = s.mRender ? Q(s.mRender) : null,
							a = Q(s.mData);
						s.fnGetData = function(t, e) {
							var n = a(t, e);
							return s.mRender && e && "" !== e ? o(n, e, t) : n
						}, s.fnSetData = L(s.mData), t.oFeatures.bSort || (s.bSortable = !1), !s.bSortable || -1 == h.inArray("asc", s.asSorting) && -1 == h.inArray("desc", s.asSorting) ? (s.sSortingClass = t.oClasses.sSortableNone, s.sSortingClassJUI = "") : -1 == h.inArray("asc", s.asSorting) && -1 == h.inArray("desc", s.asSorting) ? (s.sSortingClass = t.oClasses.sSortable, s.sSortingClassJUI = t.oClasses.sSortJUI) : -1 != h.inArray("asc", s.asSorting) && -1 == h.inArray("desc", s.asSorting) ? (s.sSortingClass = t.oClasses.sSortableAsc, s.sSortingClassJUI = t.oClasses.sSortJUIAscAllowed) : -1 == h.inArray("asc", s.asSorting) && -1 != h.inArray("desc", s.asSorting) && (s.sSortingClass = t.oClasses.sSortableDesc, s.sSortingClassJUI = t.oClasses.sSortJUIDescAllowed)
					}
					function k(t) {
						if (!1 === t.oFeatures.bAutoWidth) return !1;
						da(t);
						for (var e = 0, n = t.aoColumns.length; n > e; e++) t.aoColumns[e].nTh.style.width = t.aoColumns[e].sWidth
					}
					function G(t, e) {
						var n = r(t, "bVisible");
						return "number" == typeof n[e] ? n[e] : null
					}
					function R(t, e) {
						var n = r(t, "bVisible"),
							n = h.inArray(e, n);
						return -1 !== n ? n : null
					}
					function t(t) {
						return r(t, "bVisible").length
					}
					function r(t, e) {
						var n = [];
						return h.map(t.aoColumns, function(t, i) {
							t[e] && n.push(i)
						}), n
					}
					function B(t) {
						for (var e = j.ext.aTypes, n = e.length, i = 0; n > i; i++) {
							var s = e[i](t);
							if (null !== s) return s
						}
						return "string"
					}
					function u(t, e) {
						for (var n = e.split(","), i = [], s = 0, o = t.aoColumns.length; o > s; s++) for (var a = 0; o > a; a++) if (t.aoColumns[s].sName == n[a]) {
							i.push(a);
							break
						}
						return i
					}
					function M(t) {
						for (var e = "", n = 0, i = t.aoColumns.length; i > n; n++) e += t.aoColumns[n].sName + ",";
						return e.length == i ? "" : e.slice(0, -1)
					}
					function ta(t, e, n, i) {
						var s, a, r, l, c;
						if (e) for (s = e.length - 1; s >= 0; s--) {
							var u = e[s].aTargets;
							for (h.isArray(u) || D(t, 1, "aTargets must be an array of targets, not a " + typeof u), a = 0, r = u.length; r > a; a++) if ("number" == typeof u[a] && 0 <= u[a]) {
								for (; t.aoColumns.length <= u[a];) o(t);
								i(u[a], e[s])
							} else if ("number" == typeof u[a] && 0 > u[a]) i(t.aoColumns.length + u[a], e[s]);
							else if ("string" == typeof u[a]) for (l = 0, c = t.aoColumns.length; c > l; l++)("_all" == u[a] || h(t.aoColumns[l].nTh).hasClass(u[a])) && i(l, e[s])
						}
						if (n) for (s = 0, t = n.length; t > s; s++) i(s, n[s])
					}
					function H(t, e) {
						var n;
						n = h.isArray(e) ? e.slice() : h.extend(!0, {}, e);
						var i = t.aoData.length,
							s = h.extend(!0, {}, j.models.oRow);
						s._aData = n, t.aoData.push(s);
						for (var o, s = 0, a = t.aoColumns.length; a > s; s++) n = t.aoColumns[s], "function" == typeof n.fnRender && n.bUseRendered && null !== n.mData ? F(t, i, s, S(t, i, s)) : F(t, i, s, v(t, i, s)), n._bAutoType && "string" != n.sType && (o = v(t, i, s, "type"), null !== o && "" !== o && (o = B(o), null === n.sType ? n.sType = o : n.sType != o && "html" != n.sType && (n.sType = "string")));
						return t.aiDisplayMaster.push(i), t.oFeatures.bDeferRender || ea(t, i), i
					}
					function ua(t) {
						var e, n, i, s, o, a, r;
						if (t.bDeferLoading || null === t.sAjaxSource) for (e = t.nTBody.firstChild; e;) {
							if ("TR" == e.nodeName.toUpperCase()) for (n = t.aoData.length, e._DT_RowIndex = n, t.aoData.push(h.extend(!0, {}, j.models.oRow, {
								nTr: e
							})), t.aiDisplayMaster.push(n), o = e.firstChild, i = 0; o;) a = o.nodeName.toUpperCase(), ("TD" == a || "TH" == a) && (F(t, n, i, h.trim(o.innerHTML)), i++), o = o.nextSibling;
							e = e.nextSibling
						}
						for (s = T(t), i = [], e = 0, n = s.length; n > e; e++) for (o = s[e].firstChild; o;) a = o.nodeName.toUpperCase(), ("TD" == a || "TH" == a) && i.push(o), o = o.nextSibling;
						for (n = 0, s = t.aoColumns.length; s > n; n++) {
							r = t.aoColumns[n], null === r.sTitle && (r.sTitle = r.nTh.innerHTML);
							var l, c, u = r._bAutoType,
								d = "function" == typeof r.fnRender,
								f = null !== r.sClass,
								p = r.bVisible;
							if (u || d || f || !p) for (a = 0, e = t.aoData.length; e > a; a++) o = t.aoData[a], l = i[a * s + n], u && "string" != r.sType && (c = v(t, a, n, "type"), "" !== c && (c = B(c), null === r.sType ? r.sType = c : r.sType != c && "html" != r.sType && (r.sType = "string"))), r.mRender ? l.innerHTML = v(t, a, n, "display") : r.mData !== n && (l.innerHTML = v(t, a, n, "display")), d && (c = S(t, a, n), l.innerHTML = c, r.bUseRendered && F(t, a, n, c)), f && (l.className += " " + r.sClass), p ? o._anHidden[n] = null : (o._anHidden[n] = l, l.parentNode.removeChild(l)), r.fnCreatedCell && r.fnCreatedCell.call(t.oInstance, l, v(t, a, n, "display"), o._aData, a, n)
						}
						if (0 !== t.aoRowCreatedCallback.length) for (e = 0, n = t.aoData.length; n > e; e++) o = t.aoData[e], A(t, "aoRowCreatedCallback", null, [o.nTr, o._aData, e])
					}
					function I(t, e) {
						return e._DT_RowIndex !== n ? e._DT_RowIndex : null
					}
					function fa(t, e, n) {
						for (var e = J(t, e), i = 0, t = t.aoColumns.length; t > i; i++) if (e[i] === n) return i;
						return -1
					}
					function Y(t, e, n, i) {
						for (var s = [], o = 0, a = i.length; a > o; o++) s.push(v(t, e, i[o], n));
						return s
					}
					function v(t, e, i, s) {
						var o = t.aoColumns[i];
						if ((i = o.fnGetData(t.aoData[e]._aData, s)) === n) return t.iDrawError != t.iDraw && null === o.sDefaultContent && (D(t, 0, "Requested unknown parameter " + ("function" == typeof o.mData ? "{mData function}" : "'" + o.mData + "'") + " from the data source for row " + e), t.iDrawError = t.iDraw), o.sDefaultContent;
						if (null === i && null !== o.sDefaultContent) i = o.sDefaultContent;
						else if ("function" == typeof i) return i();
						return "display" == s && null === i ? "" : i
					}
					function F(t, e, n, i) {
						t.aoColumns[n].fnSetData(t.aoData[e]._aData, i)
					}
					function Q(t) {
						if (null === t) return function() {
							return null
						};
						if ("function" == typeof t) return function(e, n, i) {
							return t(e, n, i)
						};
						if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("["))) {
							var e = function(t, i, s) {
									var o, a = s.split(".");
									if ("" !== s) {
										var r = 0;
										for (o = a.length; o > r; r++) {
											if (s = a[r].match(U)) {
												a[r] = a[r].replace(U, ""), "" !== a[r] && (t = t[a[r]]), o = [], a.splice(0, r + 1);
												for (var a = a.join("."), r = 0, l = t.length; l > r; r++) o.push(e(t[r], i, a));
												t = s[0].substring(1, s[0].length - 1), t = "" === t ? o : o.join(t);
												break
											}
											if (null === t || t[a[r]] === n) return n;
											t = t[a[r]]
										}
									}
									return t
								};
							return function(n, i) {
								return e(n, i, t)
							}
						}
						return function(e) {
							return e[t]
						}
					}
					function L(t) {
						if (null === t) return function() {};
						if ("function" == typeof t) return function(e, n) {
							t(e, "set", n)
						};
						if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("["))) {
							var e = function(t, i, s) {
									var o, a, s = s.split("."),
										r = 0;
									for (a = s.length - 1; a > r; r++) {
										if (o = s[r].match(U)) {
											s[r] = s[r].replace(U, ""), t[s[r]] = [], o = s.slice(), o.splice(0, r + 1), a = o.join(".");
											for (var l = 0, c = i.length; c > l; l++) o = {}, e(o, i[l], a), t[s[r]].push(o);
											return
										}(null === t[s[r]] || t[s[r]] === n) && (t[s[r]] = {}), t = t[s[r]]
									}
									t[s[s.length - 1].replace(U, "")] = i
								};
							return function(n, i) {
								return e(n, i, t)
							}
						}
						return function(e, n) {
							e[t] = n
						}
					}
					function Z(t) {
						for (var e = [], n = t.aoData.length, i = 0; n > i; i++) e.push(t.aoData[i]._aData);
						return e
					}
					function ga(t) {
						t.aoData.splice(0, t.aoData.length), t.aiDisplayMaster.splice(0, t.aiDisplayMaster.length), t.aiDisplay.splice(0, t.aiDisplay.length), y(t)
					}
					function ha(t, e) {
						for (var n = -1, i = 0, s = t.length; s > i; i++) t[i] == e ? n = i : t[i] > e && t[i]--; - 1 != n && t.splice(n, 1)
					}
					function S(t, e, n) {
						var i = t.aoColumns[n];
						return i.fnRender({
							iDataRow: e,
							iDataColumn: n,
							oSettings: t,
							aData: t.aoData[e]._aData,
							mDataProp: i.mData
						}, v(t, e, n, "display"))
					}
					function ea(t, e) {
						var n, i = t.aoData[e];
						if (null === i.nTr) {
							i.nTr = l.createElement("tr"), i.nTr._DT_RowIndex = e, i._aData.DT_RowId && (i.nTr.id = i._aData.DT_RowId), i._aData.DT_RowClass && (i.nTr.className = i._aData.DT_RowClass);
							for (var s = 0, o = t.aoColumns.length; o > s; s++) {
								var a = t.aoColumns[s];
								n = l.createElement(a.sCellType), n.innerHTML = "function" != typeof a.fnRender || a.bUseRendered && null !== a.mData ? v(t, e, s, "display") : S(t, e, s), null !== a.sClass && (n.className = a.sClass), a.bVisible ? (i.nTr.appendChild(n), i._anHidden[s] = null) : i._anHidden[s] = n, a.fnCreatedCell && a.fnCreatedCell.call(t.oInstance, n, v(t, e, s, "display"), i._aData, e, s)
							}
							A(t, "aoRowCreatedCallback", null, [i.nTr, i._aData, e])
						}
					}
					function va(t) {
						var e, n, i;
						if (0 !== h("th, td", t.nTHead).length) for (e = 0, i = t.aoColumns.length; i > e; e++) n = t.aoColumns[e].nTh, n.setAttribute("role", "columnheader"), t.aoColumns[e].bSortable && (n.setAttribute("tabindex", t.iTabIndex), n.setAttribute("aria-controls", t.sTableId)), null !== t.aoColumns[e].sClass && h(n).addClass(t.aoColumns[e].sClass), t.aoColumns[e].sTitle != n.innerHTML && (n.innerHTML = t.aoColumns[e].sTitle);
						else {
							var s = l.createElement("tr");
							for (e = 0, i = t.aoColumns.length; i > e; e++) n = t.aoColumns[e].nTh, n.innerHTML = t.aoColumns[e].sTitle, n.setAttribute("tabindex", "0"), null !== t.aoColumns[e].sClass && h(n).addClass(t.aoColumns[e].sClass), s.appendChild(n);
							h(t.nTHead).html("")[0].appendChild(s), V(t.aoHeader, t.nTHead)
						}
						if (h(t.nTHead).children("tr").attr("role", "row"), t.bJUI) for (e = 0, i = t.aoColumns.length; i > e; e++) {
							n = t.aoColumns[e].nTh, s = l.createElement("div"), s.className = t.oClasses.sSortJUIWrapper, h(n).contents().appendTo(s);
							var o = l.createElement("span");
							o.className = t.oClasses.sSortIcon, s.appendChild(o), n.appendChild(s)
						}
						if (t.oFeatures.bSort) for (e = 0; e < t.aoColumns.length; e++)!1 !== t.aoColumns[e].bSortable ? ia(t, t.aoColumns[e].nTh, e) : h(t.aoColumns[e].nTh).addClass(t.oClasses.sSortableNone);
						if ("" !== t.oClasses.sFooterTH && h(t.nTFoot).children("tr").children("th").addClass(t.oClasses.sFooterTH), null !== t.nTFoot) for (n = N(t, null, t.aoFooter), e = 0, i = t.aoColumns.length; i > e; e++) n[e] && (t.aoColumns[e].nTf = n[e], t.aoColumns[e].sClass && h(n[e]).addClass(t.aoColumns[e].sClass))
					}
					function W(t, e, i) {
						var s, o, a, r, l = [],
							c = [],
							h = t.aoColumns.length;
						for (i === n && (i = !1), s = 0, o = e.length; o > s; s++) {
							for (l[s] = e[s].slice(), l[s].nTr = e[s].nTr, a = h - 1; a >= 0; a--)!t.aoColumns[a].bVisible && !i && l[s].splice(a, 1);
							c.push([])
						}
						for (s = 0, o = l.length; o > s; s++) {
							if (t = l[s].nTr) for (; a = t.firstChild;) t.removeChild(a);
							for (a = 0, e = l[s].length; e > a; a++) if (r = h = 1, c[s][a] === n) {
								for (t.appendChild(l[s][a].cell), c[s][a] = 1; l[s + h] !== n && l[s][a].cell == l[s + h][a].cell;) c[s + h][a] = 1, h++;
								for (; l[s][a + r] !== n && l[s][a].cell == l[s][a + r].cell;) {
									for (i = 0; h > i; i++) c[s + i][a + r] = 1;
									r++
								}
								l[s][a].cell.rowSpan = h, l[s][a].cell.colSpan = r
							}
						}
					}
					function x(e) {
						var i = A(e, "aoPreDrawCallback", "preDraw", [e]);
						if (-1 !== h.inArray(!1, i)) E(e, !1);
						else {
							var s, o, i = [],
								a = 0,
								r = e.asStripeClasses.length;
							if (s = e.aoOpenRows.length, e.bDrawing = !0, e.iInitDisplayStart !== n && -1 != e.iInitDisplayStart && (e._iDisplayStart = e.oFeatures.bServerSide ? e.iInitDisplayStart : e.iInitDisplayStart >= e.fnRecordsDisplay() ? 0 : e.iInitDisplayStart, e.iInitDisplayStart = -1, y(e)), e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++;
							else if (e.oFeatures.bServerSide) {
								if (!e.bDestroying && !wa(e)) return
							} else e.iDraw++;
							if (0 !== e.aiDisplay.length) {
								var c = e._iDisplayStart;
								for (o = e._iDisplayEnd, e.oFeatures.bServerSide && (c = 0, o = e.aoData.length); o > c; c++) {
									var u = e.aoData[e.aiDisplay[c]];
									null === u.nTr && ea(e, e.aiDisplay[c]);
									var d = u.nTr;
									if (0 !== r) {
										var f = e.asStripeClasses[a % r];
										u._sRowStripe != f && (h(d).removeClass(u._sRowStripe).addClass(f), u._sRowStripe = f)
									}
									if (A(e, "aoRowCallback", null, [d, e.aoData[e.aiDisplay[c]]._aData, a, c]), i.push(d), a++, 0 !== s) for (u = 0; s > u; u++) if (d == e.aoOpenRows[u].nParent) {
										i.push(e.aoOpenRows[u].nTr);
										break
									}
								}
							} else i[0] = l.createElement("tr"), e.asStripeClasses[0] && (i[0].className = e.asStripeClasses[0]), s = e.oLanguage, r = s.sZeroRecords, 1 != e.iDraw || null === e.sAjaxSource || e.oFeatures.bServerSide ? s.sEmptyTable && 0 === e.fnRecordsTotal() && (r = s.sEmptyTable) : r = s.sLoadingRecords, s = l.createElement("td"), s.setAttribute("valign", "top"), s.colSpan = t(e), s.className = e.oClasses.sRowEmpty, s.innerHTML = ja(e, r), i[a].appendChild(s);
							if (A(e, "aoHeaderCallback", "header", [h(e.nTHead).children("tr")[0], Z(e), e._iDisplayStart, e.fnDisplayEnd(), e.aiDisplay]), A(e, "aoFooterCallback", "footer", [h(e.nTFoot).children("tr")[0], Z(e), e._iDisplayStart, e.fnDisplayEnd(), e.aiDisplay]), a = l.createDocumentFragment(), s = l.createDocumentFragment(), e.nTBody) {
								if (r = e.nTBody.parentNode, s.appendChild(e.nTBody), !e.oScroll.bInfinite || !e._bInitComplete || e.bSorted || e.bFiltered) for (; s = e.nTBody.firstChild;) e.nTBody.removeChild(s);
								for (s = 0, o = i.length; o > s; s++) a.appendChild(i[s]);
								e.nTBody.appendChild(a), null !== r && r.appendChild(e.nTBody)
							}
							A(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1, e.oFeatures.bServerSide && (E(e, !1), e._bInitComplete || $(e))
						}
					}
					function aa(t) {
						t.oFeatures.bSort ? O(t, t.oPreviousSearch) : t.oFeatures.bFilter ? K(t, t.oPreviousSearch) : (y(t), x(t))
					}
					function xa(t) {
						var e = h("<div></div>")[0];
						t.nTable.parentNode.insertBefore(e, t.nTable), t.nTableWrapper = h('<div id="' + t.sTableId + '_wrapper" class="' + t.oClasses.sWrapper + '" role="grid"></div>')[0], t.nTableReinsertBefore = t.nTable.nextSibling;
						for (var n, i, s, o, a, r, l, c = t.nTableWrapper, u = t.sDom.split(""), d = 0; d < u.length; d++) {
							if (i = 0, s = u[d], "<" == s) {
								if (o = h("<div></div>")[0], a = u[d + 1], "'" == a || '"' == a) {
									for (r = "", l = 2; u[d + l] != a;) r += u[d + l], l++;
									"H" == r ? r = t.oClasses.sJUIHeader : "F" == r && (r = t.oClasses.sJUIFooter), -1 != r.indexOf(".") ? (a = r.split("."), o.id = a[0].substr(1, a[0].length - 1), o.className = a[1]) : "#" == r.charAt(0) ? o.id = r.substr(1, r.length - 1) : o.className = r, d += l
								}
								c.appendChild(o), c = o
							} else if (">" == s) c = c.parentNode;
							else if ("l" == s && t.oFeatures.bPaginate && t.oFeatures.bLengthChange) n = ya(t), i = 1;
							else if ("f" == s && t.oFeatures.bFilter) n = za(t), i = 1;
							else if ("r" == s && t.oFeatures.bProcessing) n = Aa(t), i = 1;
							else if ("t" == s) n = Ba(t), i = 1;
							else if ("i" == s && t.oFeatures.bInfo) n = Ca(t), i = 1;
							else if ("p" == s && t.oFeatures.bPaginate) n = Da(t), i = 1;
							else if (0 !== j.ext.aoFeatures.length) for (o = j.ext.aoFeatures, l = 0, a = o.length; a > l; l++) if (s == o[l].cFeature) {
								(n = o[l].fnInit(t)) && (i = 1);
								break
							}
							1 == i && null !== n && ("object" != typeof t.aanFeatures[s] && (t.aanFeatures[s] = []), t.aanFeatures[s].push(n), c.appendChild(n))
						}
						e.parentNode.replaceChild(t.nTableWrapper, e)
					}
					function V(t, e) {
						var n, i, s, o, a, r, l, c, u, d, f = h(e).children("tr");
						for (t.splice(0, t.length), s = 0, r = f.length; r > s; s++) t.push([]);
						for (s = 0, r = f.length; r > s; s++) for (n = f[s], i = n.firstChild; i;) {
							if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase()) {
								for (c = 1 * i.getAttribute("colspan"), u = 1 * i.getAttribute("rowspan"), c = c && 0 !== c && 1 !== c ? c : 1, u = u && 0 !== u && 1 !== u ? u : 1, o = 0, a = t[s]; a[o];) o++;
								for (l = o, d = 1 === c ? !0 : !1, a = 0; c > a; a++) for (o = 0; u > o; o++) t[s + o][l + a] = {
									cell: i,
									unique: d
								}, t[s + o].nTr = n
							}
							i = i.nextSibling
						}
					}
					function N(t, e, n) {
						var i = [];
						n || (n = t.aoHeader, e && (n = [], V(n, e)));
						for (var e = 0, s = n.length; s > e; e++) for (var o = 0, a = n[e].length; a > o; o++)!n[e][o].unique || i[o] && t.bSortCellsTop || (i[o] = n[e][o].cell);
						return i
					}
					function wa(t) {
						if (t.bAjaxDataGet) {
							t.iDraw++, E(t, !0);
							var e = Ea(t);
							return ka(t, e), t.fnServerData.call(t.oInstance, t.sAjaxSource, e, function(e) {
								Fa(t, e)
							}, t), !1
						}
						return !0
					}
					function Ea(t) {
						var e, n, i, s, o = t.aoColumns.length,
							a = [];
						for (a.push({
							name: "sEcho",
							value: t.iDraw
						}), a.push({
							name: "iColumns",
							value: o
						}), a.push({
							name: "sColumns",
							value: M(t)
						}), a.push({
							name: "iDisplayStart",
							value: t._iDisplayStart
						}), a.push({
							name: "iDisplayLength",
							value: !1 !== t.oFeatures.bPaginate ? t._iDisplayLength : -1
						}), i = 0; o > i; i++) e = t.aoColumns[i].mData, a.push({
							name: "mDataProp_" + i,
							value: "function" == typeof e ? "function" : e
						});
						if (!1 !== t.oFeatures.bFilter) for (a.push({
							name: "sSearch",
							value: t.oPreviousSearch.sSearch
						}), a.push({
							name: "bRegex",
							value: t.oPreviousSearch.bRegex
						}), i = 0; o > i; i++) a.push({
							name: "sSearch_" + i,
							value: t.aoPreSearchCols[i].sSearch
						}), a.push({
							name: "bRegex_" + i,
							value: t.aoPreSearchCols[i].bRegex
						}), a.push({
							name: "bSearchable_" + i,
							value: t.aoColumns[i].bSearchable
						});
						if (!1 !== t.oFeatures.bSort) {
							var r = 0;
							for (e = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), i = 0; i < e.length; i++) for (n = t.aoColumns[e[i][0]].aDataSort, s = 0; s < n.length; s++) a.push({
								name: "iSortCol_" + r,
								value: n[s]
							}), a.push({
								name: "sSortDir_" + r,
								value: e[i][1]
							}), r++;
							for (a.push({
								name: "iSortingCols",
								value: r
							}), i = 0; o > i; i++) a.push({
								name: "bSortable_" + i,
								value: t.aoColumns[i].bSortable
							})
						}
						return a
					}
					function ka(t, e) {
						A(t, "aoServerParams", "serverParams", [e])
					}
					function Fa(t, e) {
						if (e.sEcho !== n) {
							if (1 * e.sEcho < t.iDraw) return;
							t.iDraw = 1 * e.sEcho
						}(!t.oScroll.bInfinite || t.oScroll.bInfinite && (t.bSorted || t.bFiltered)) && ga(t), t._iRecordsTotal = parseInt(e.iTotalRecords, 10), t._iRecordsDisplay = parseInt(e.iTotalDisplayRecords, 10);
						var i, s = M(t),
							s = e.sColumns !== n && "" !== s && e.sColumns != s;
						s && (i = u(t, e.sColumns));
						for (var o = Q(t.sAjaxDataProp)(e), a = 0, r = o.length; r > a; a++) if (s) {
							for (var l = [], c = 0, h = t.aoColumns.length; h > c; c++) l.push(o[a][i[c]]);
							H(t, l)
						} else H(t, o[a]);
						t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, x(t), t.bAjaxDataGet = !0, E(t, !1)
					}
					function za(t) {
						var e = t.oPreviousSearch,
							n = t.oLanguage.sSearch,
							n = -1 !== n.indexOf("_INPUT_") ? n.replace("_INPUT_", '<input type="text" />') : "" === n ? '<input type="text" />' : n + ' <input type="text" />',
							i = l.createElement("div");
						return i.className = t.oClasses.sFilter, i.innerHTML = "<label>" + n + "</label>", t.aanFeatures.f || (i.id = t.sTableId + "_filter"), n = h('input[type="text"]', i), i._DT_Input = n[0], n.val(e.sSearch.replace('"', "&quot;")), n.bind("keyup.DT", function() {
							for (var n = t.aanFeatures.f, i = "" === this.value ? "" : this.value, s = 0, o = n.length; o > s; s++) n[s] != h(this).parents("div.dataTables_filter")[0] && h(n[s]._DT_Input).val(i);
							i != e.sSearch && K(t, {
								sSearch: i,
								bRegex: e.bRegex,
								bSmart: e.bSmart,
								bCaseInsensitive: e.bCaseInsensitive
							})
						}), n.attr("aria-controls", t.sTableId).bind("keypress.DT", function(t) {
							return 13 == t.keyCode ? !1 : void 0
						}), i
					}
					function K(t, e, n) {
						var i = t.oPreviousSearch,
							s = t.aoPreSearchCols,
							o = function(t) {
								i.sSearch = t.sSearch, i.bRegex = t.bRegex, i.bSmart = t.bSmart, i.bCaseInsensitive = t.bCaseInsensitive
							};
						if (t.oFeatures.bServerSide) o(e);
						else {
							for (Ga(t, e.sSearch, n, e.bRegex, e.bSmart, e.bCaseInsensitive), o(e), e = 0; e < t.aoPreSearchCols.length; e++) Ha(t, s[e].sSearch, e, s[e].bRegex, s[e].bSmart, s[e].bCaseInsensitive);
							Ia(t)
						}
						t.bFiltered = !0, h(t.oInstance).trigger("filter", t), t._iDisplayStart = 0, y(t), x(t), la(t, 0)
					}
					function Ia(t) {
						for (var e = j.ext.afnFiltering, n = r(t, "bSearchable"), i = 0, s = e.length; s > i; i++) for (var o = 0, a = 0, l = t.aiDisplay.length; l > a; a++) {
							var c = t.aiDisplay[a - o];
							e[i](t, Y(t, c, "filter", n), c) || (t.aiDisplay.splice(a - o, 1), o++)
						}
					}
					function Ha(t, e, n, i, s, o) {
						if ("" !== e) for (var a = 0, e = ma(e, i, s, o), i = t.aiDisplay.length - 1; i >= 0; i--) s = Ja(v(t, t.aiDisplay[i], n, "filter"), t.aoColumns[n].sType), e.test(s) || (t.aiDisplay.splice(i, 1), a++)
					}
					function Ga(t, e, n, i, s, o) {
						if (i = ma(e, i, s, o), s = t.oPreviousSearch, n || (n = 0), 0 !== j.ext.afnFiltering.length && (n = 1), 0 >= e.length) t.aiDisplay.splice(0, t.aiDisplay.length), t.aiDisplay = t.aiDisplayMaster.slice();
						else if (t.aiDisplay.length == t.aiDisplayMaster.length || s.sSearch.length > e.length || 1 == n || 0 !== e.indexOf(s.sSearch)) for (t.aiDisplay.splice(0, t.aiDisplay.length), la(t, 1), e = 0; e < t.aiDisplayMaster.length; e++) i.test(t.asDataSearch[e]) && t.aiDisplay.push(t.aiDisplayMaster[e]);
						else for (e = n = 0; e < t.asDataSearch.length; e++) i.test(t.asDataSearch[e]) || (t.aiDisplay.splice(e - n, 1), n++)
					}
					function la(t, e) {
						if (!t.oFeatures.bServerSide) {
							t.asDataSearch = [];
							for (var n = r(t, "bSearchable"), i = 1 === e ? t.aiDisplayMaster : t.aiDisplay, s = 0, o = i.length; o > s; s++) t.asDataSearch[s] = na(t, Y(t, i[s], "filter", n))
						}
					}
					function na(t, e) {
						var n = e.join("  ");
						return -1 !== n.indexOf("&") && (n = h("<div>").html(n).text()), n.replace(/[\n\r]/g, " ")
					}
					function ma(t, e, n, i) {
						return n ? (t = e ? t.split(" ") : oa(t).split(" "), t = "^(?=.*?" + t.join(")(?=.*?") + ").*$", RegExp(t, i ? "i" : "")) : (t = e ? t : oa(t), RegExp(t, i ? "i" : ""))
					}
					function Ja(t, e) {
						return "function" == typeof j.ext.ofnSearch[e] ? j.ext.ofnSearch[e](t) : null === t ? "" : "html" == e ? t.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" == typeof t ? t.replace(/[\r\n]/g, " ") : t
					}
					function oa(t) {
						return t.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), "\\$1")
					}
					function Ca(t) {
						var e = l.createElement("div");
						return e.className = t.oClasses.sInfo, t.aanFeatures.i || (t.aoDrawCallback.push({
							fn: Ka,
							sName: "information"
						}), e.id = t.sTableId + "_info"), t.nTable.setAttribute("aria-describedby", t.sTableId + "_info"), e
					}
					function Ka(t) {
						if (t.oFeatures.bInfo && 0 !== t.aanFeatures.i.length) {
							var e, n = t.oLanguage,
								i = t._iDisplayStart + 1,
								s = t.fnDisplayEnd(),
								o = t.fnRecordsTotal(),
								a = t.fnRecordsDisplay();
							for (e = 0 === a ? n.sInfoEmpty : n.sInfo, a != o && (e += " " + n.sInfoFiltered), e += n.sInfoPostFix, e = ja(t, e), null !== n.fnInfoCallback && (e = n.fnInfoCallback.call(t.oInstance, t, i, s, o, a, e)), t = t.aanFeatures.i, n = 0, i = t.length; i > n; n++) h(t[n]).html(e)
						}
					}
					function ja(t, e) {
						var n = t.fnFormatNumber(t._iDisplayStart + 1),
							i = t.fnDisplayEnd(),
							i = t.fnFormatNumber(i),
							s = t.fnRecordsDisplay(),
							s = t.fnFormatNumber(s),
							o = t.fnRecordsTotal(),
							o = t.fnFormatNumber(o);
						return t.oScroll.bInfinite && (n = t.fnFormatNumber(1)), e.replace(/_START_/g, n).replace(/_END_/g, i).replace(/_TOTAL_/g, s).replace(/_MAX_/g, o)
					}
					function ba(t) {
						var e, n, i = t.iInitDisplayStart;
						if (!1 === t.bInitialised) setTimeout(function() {
							ba(t)
						}, 200);
						else {
							for (xa(t), va(t), W(t, t.aoHeader), t.nTFoot && W(t, t.aoFooter), E(t, !0), t.oFeatures.bAutoWidth && da(t), e = 0, n = t.aoColumns.length; n > e; e++) null !== t.aoColumns[e].sWidth && (t.aoColumns[e].nTh.style.width = q(t.aoColumns[e].sWidth));
							t.oFeatures.bSort ? O(t) : t.oFeatures.bFilter ? K(t, t.oPreviousSearch) : (t.aiDisplay = t.aiDisplayMaster.slice(), y(t), x(t)), null === t.sAjaxSource || t.oFeatures.bServerSide ? t.oFeatures.bServerSide || (E(t, !1), $(t)) : (n = [], ka(t, n), t.fnServerData.call(t.oInstance, t.sAjaxSource, n, function(n) {
								var s = "" !== t.sAjaxDataProp ? Q(t.sAjaxDataProp)(n) : n;
								for (e = 0; e < s.length; e++) H(t, s[e]);
								t.iInitDisplayStart = i, t.oFeatures.bSort ? O(t) : (t.aiDisplay = t.aiDisplayMaster.slice(), y(t), x(t)), E(t, !1), $(t, n)
							}, t))
						}
					}
					function $(t, e) {
						t._bInitComplete = !0, A(t, "aoInitComplete", "init", [t, e])
					}
					function pa(t) {
						var e = j.defaults.oLanguage;
						!t.sEmptyTable && t.sZeroRecords && "No data available in table" === e.sEmptyTable && p(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && t.sZeroRecords && "Loading..." === e.sLoadingRecords && p(t, t, "sZeroRecords", "sLoadingRecords")
					}
					function ya(t) {
						if (t.oScroll.bInfinite) return null;
						var e, n, i = '<select size="1" ' + ('name="' + t.sTableId + '_length"') + ">",
							s = t.aLengthMenu;
						if (2 == s.length && "object" == typeof s[0] && "object" == typeof s[1]) for (e = 0, n = s[0].length; n > e; e++) i += '<option value="' + s[0][e] + '">' + s[1][e] + "</option>";
						else for (e = 0, n = s.length; n > e; e++) i += '<option value="' + s[e] + '">' + s[e] + "</option>";
						return i += "</select>", s = l.createElement("div"), t.aanFeatures.l || (s.id = t.sTableId + "_length"), s.className = t.oClasses.sLength, s.innerHTML = "<label>" + t.oLanguage.sLengthMenu.replace("_MENU_", i) + "</label>", h('select option[value="' + t._iDisplayLength + '"]', s).attr("selected", !0), h("select", s).bind("change.DT", function() {
							var i = h(this).val(),
								s = t.aanFeatures.l;
							for (e = 0, n = s.length; n > e; e++) s[e] != this.parentNode && h("select", s[e]).val(i);
							t._iDisplayLength = parseInt(i, 10), y(t), t.fnDisplayEnd() == t.fnRecordsDisplay() && (t._iDisplayStart = t.fnDisplayEnd() - t._iDisplayLength, t._iDisplayStart < 0 && (t._iDisplayStart = 0)), -1 == t._iDisplayLength && (t._iDisplayStart = 0), x(t)
						}), h("select", s).attr("aria-controls", t.sTableId), s
					}
					function y(t) {
						t._iDisplayEnd = !1 === t.oFeatures.bPaginate ? t.aiDisplay.length : t._iDisplayStart + t._iDisplayLength > t.aiDisplay.length || -1 == t._iDisplayLength ? t.aiDisplay.length : t._iDisplayStart + t._iDisplayLength
					}
					function Da(t) {
						if (t.oScroll.bInfinite) return null;
						var e = l.createElement("div");
						return e.className = t.oClasses.sPaging + t.sPaginationType, j.ext.oPagination[t.sPaginationType].fnInit(t, e, function(t) {
							y(t), x(t)
						}), t.aanFeatures.p || t.aoDrawCallback.push({
							fn: function(t) {
								j.ext.oPagination[t.sPaginationType].fnUpdate(t, function(t) {
									y(t), x(t)
								})
							},
							sName: "pagination"
						}), e
					}
					function qa(t, e) {
						var n = t._iDisplayStart;
						if ("number" == typeof e) t._iDisplayStart = e * t._iDisplayLength, t._iDisplayStart > t.fnRecordsDisplay() && (t._iDisplayStart = 0);
						else if ("first" == e) t._iDisplayStart = 0;
						else if ("previous" == e) t._iDisplayStart = 0 <= t._iDisplayLength ? t._iDisplayStart - t._iDisplayLength : 0, 0 > t._iDisplayStart && (t._iDisplayStart = 0);
						else if ("next" == e) 0 <= t._iDisplayLength ? t._iDisplayStart + t._iDisplayLength < t.fnRecordsDisplay() && (t._iDisplayStart += t._iDisplayLength) : t._iDisplayStart = 0;
						else if ("last" == e) if (0 <= t._iDisplayLength) {
							var i = parseInt((t.fnRecordsDisplay() - 1) / t._iDisplayLength, 10) + 1;
							t._iDisplayStart = (i - 1) * t._iDisplayLength
						} else t._iDisplayStart = 0;
						else D(t, 0, "Unknown paging action: " + e);
						return h(t.oInstance).trigger("page", t), n != t._iDisplayStart
					}
					function Aa(t) {
						var e = l.createElement("div");
						return t.aanFeatures.r || (e.id = t.sTableId + "_processing"), e.innerHTML = t.oLanguage.sProcessing, e.className = t.oClasses.sProcessing, t.nTable.parentNode.insertBefore(e, t.nTable), e
					}
					function E(t, e) {
						if (t.oFeatures.bProcessing) for (var n = t.aanFeatures.r, i = 0, s = n.length; s > i; i++) n[i].style.visibility = e ? "visible" : "hidden";
						h(t.oInstance).trigger("processing", [t, e])
					}
					function Ba(t) {
						if ("" === t.oScroll.sX && "" === t.oScroll.sY) return t.nTable;
						var e = l.createElement("div"),
							n = l.createElement("div"),
							i = l.createElement("div"),
							s = l.createElement("div"),
							o = l.createElement("div"),
							a = l.createElement("div"),
							r = t.nTable.cloneNode(!1),
							c = t.nTable.cloneNode(!1),
							u = t.nTable.getElementsByTagName("thead")[0],
							d = 0 === t.nTable.getElementsByTagName("tfoot").length ? null : t.nTable.getElementsByTagName("tfoot")[0],
							f = t.oClasses;
						return n.appendChild(i), o.appendChild(a), s.appendChild(t.nTable), e.appendChild(n), e.appendChild(s), i.appendChild(r), r.appendChild(u), null !== d && (e.appendChild(o), a.appendChild(c), c.appendChild(d)), e.className = f.sScrollWrapper, n.className = f.sScrollHead, i.className = f.sScrollHeadInner, s.className = f.sScrollBody, o.className = f.sScrollFoot, a.className = f.sScrollFootInner, t.oScroll.bAutoCss && (n.style.overflow = "hidden", n.style.position = "relative", o.style.overflow = "hidden", s.style.overflow = "auto"), n.style.border = "0", n.style.width = "100%", o.style.border = "0", i.style.width = "" !== t.oScroll.sXInner ? t.oScroll.sXInner : "100%", r.removeAttribute("id"), r.style.marginLeft = "0", t.nTable.style.marginLeft = "0", null !== d && (c.removeAttribute("id"), c.style.marginLeft = "0"), i = h(t.nTable).children("caption"), 0 < i.length && (i = i[0], "top" === i._captionSide ? r.appendChild(i) : "bottom" === i._captionSide && d && c.appendChild(i)), "" !== t.oScroll.sX && (n.style.width = q(t.oScroll.sX), s.style.width = q(t.oScroll.sX), null !== d && (o.style.width = q(t.oScroll.sX)), h(s).scroll(function() {
							n.scrollLeft = this.scrollLeft, null !== d && (o.scrollLeft = this.scrollLeft)
						})), "" !== t.oScroll.sY && (s.style.height = q(t.oScroll.sY)), t.aoDrawCallback.push({
							fn: La,
							sName: "scrolling"
						}), t.oScroll.bInfinite && h(s).scroll(function() {
							!t.bDrawing && 0 !== h(this).scrollTop() && h(this).scrollTop() + h(this).height() > h(t.nTable).height() - t.oScroll.iLoadGap && t.fnDisplayEnd() < t.fnRecordsDisplay() && (qa(t, "next"), y(t), x(t))
						}), t.nScrollHead = n, t.nScrollFoot = o, e
					}
					function La(t) {
						var e, n, i, s, o, a, r, l, c = t.nScrollHead.getElementsByTagName("div")[0],
							u = c.getElementsByTagName("table")[0],
							d = t.nTable.parentNode,
							f = [],
							p = [],
							g = null !== t.nTFoot ? t.nScrollFoot.getElementsByTagName("div")[0] : null,
							m = null !== t.nTFoot ? g.getElementsByTagName("table")[0] : null,
							v = t.oBrowser.bScrollOversize,
							b = function(t) {
								r = t.style, r.paddingTop = "0", r.paddingBottom = "0", r.borderTopWidth = "0", r.borderBottomWidth = "0", r.height = 0
							};
						h(t.nTable).children("thead, tfoot").remove(), e = h(t.nTHead).clone()[0], t.nTable.insertBefore(e, t.nTable.childNodes[0]), i = t.nTHead.getElementsByTagName("tr"), s = e.getElementsByTagName("tr"), null !== t.nTFoot && (o = h(t.nTFoot).clone()[0], t.nTable.insertBefore(o, t.nTable.childNodes[1]), a = t.nTFoot.getElementsByTagName("tr"), o = o.getElementsByTagName("tr")), "" === t.oScroll.sX && (d.style.width = "100%", c.parentNode.style.width = "100%");
						var y = N(t, e);
						for (e = 0, n = y.length; n > e; e++) l = G(t, e), y[e].style.width = t.aoColumns[l].sWidth;
						null !== t.nTFoot && C(function(t) {
							t.style.width = ""
						}, o), t.oScroll.bCollapse && "" !== t.oScroll.sY && (d.style.height = d.offsetHeight + t.nTHead.offsetHeight + "px"), e = h(t.nTable).outerWidth(), "" === t.oScroll.sX ? (t.nTable.style.width = "100%", v && (h("tbody", d).height() > d.offsetHeight || "scroll" == h(d).css("overflow-y")) && (t.nTable.style.width = q(h(t.nTable).outerWidth() - t.oScroll.iBarWidth))) : "" !== t.oScroll.sXInner ? t.nTable.style.width = q(t.oScroll.sXInner) : e == h(d).width() && h(d).height() < h(t.nTable).height() ? (t.nTable.style.width = q(e - t.oScroll.iBarWidth), h(t.nTable).outerWidth() > e - t.oScroll.iBarWidth && (t.nTable.style.width = q(e))) : t.nTable.style.width = q(e), e = h(t.nTable).outerWidth(), C(b, s), C(function(t) {
							f.push(q(h(t).width()))
						}, s), C(function(t, e) {
							t.style.width = f[e]
						}, i), h(s).height(0), null !== t.nTFoot && (C(b, o), C(function(t) {
							p.push(q(h(t).width()))
						}, o), C(function(t, e) {
							t.style.width = p[e]
						}, a), h(o).height(0)), C(function(t, e) {
							t.innerHTML = "", t.style.width = f[e]
						}, s), null !== t.nTFoot && C(function(t, e) {
							t.innerHTML = "", t.style.width = p[e]
						}, o), h(t.nTable).outerWidth() < e ? (i = d.scrollHeight > d.offsetHeight || "scroll" == h(d).css("overflow-y") ? e + t.oScroll.iBarWidth : e, v && (d.scrollHeight > d.offsetHeight || "scroll" == h(d).css("overflow-y")) && (t.nTable.style.width = q(i - t.oScroll.iBarWidth)), d.style.width = q(i), t.nScrollHead.style.width = q(i), null !== t.nTFoot && (t.nScrollFoot.style.width = q(i)), "" === t.oScroll.sX ? D(t, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : "" !== t.oScroll.sXInner && D(t, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")) : (d.style.width = q("100%"), t.nScrollHead.style.width = q("100%"), null !== t.nTFoot && (t.nScrollFoot.style.width = q("100%"))), "" === t.oScroll.sY && v && (d.style.height = q(t.nTable.offsetHeight + t.oScroll.iBarWidth)), "" !== t.oScroll.sY && t.oScroll.bCollapse && (d.style.height = q(t.oScroll.sY), v = "" !== t.oScroll.sX && t.nTable.offsetWidth > d.offsetWidth ? t.oScroll.iBarWidth : 0, t.nTable.offsetHeight < d.offsetHeight && (d.style.height = q(t.nTable.offsetHeight + v))), v = h(t.nTable).outerWidth(), u.style.width = q(v), c.style.width = q(v), u = h(t.nTable).height() > d.clientHeight || "scroll" == h(d).css("overflow-y"), c.style.paddingRight = u ? t.oScroll.iBarWidth + "px" : "0px", null !== t.nTFoot && (m.style.width = q(v), g.style.width = q(v), g.style.paddingRight = u ? t.oScroll.iBarWidth + "px" : "0px"), h(d).scroll(), (t.bSorted || t.bFiltered) && (d.scrollTop = 0)
					}
					function C(t, e, n) {
						for (var i, s, o = 0, a = 0, r = e.length; r > a;) {
							for (i = e[a].firstChild, s = n ? n[a].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, s, o) : t(i, o), o++), i = i.nextSibling, s = n ? s.nextSibling : null;
							a++
						}
					}
					function Ma(t, e) {
						if (!t || null === t || "" === t) return 0;
						e || (e = l.body);
						var n, i = l.createElement("div");
						return i.style.width = q(t), e.appendChild(i), n = i.offsetWidth, e.removeChild(i), n
					}
					function da(t) {
						var e, n, i, s = 0,
							o = 0,
							a = t.aoColumns.length,
							r = h("th", t.nTHead),
							c = t.nTable.getAttribute("width");
						for (i = t.nTable.parentNode, n = 0; a > n; n++) t.aoColumns[n].bVisible && (o++, null !== t.aoColumns[n].sWidth && (e = Ma(t.aoColumns[n].sWidthOrig, i), null !== e && (t.aoColumns[n].sWidth = q(e)), s++));
						if (a == r.length && 0 === s && o == a && "" === t.oScroll.sX && "" === t.oScroll.sY) for (n = 0; n < t.aoColumns.length; n++) e = h(r[n]).width(), null !== e && (t.aoColumns[n].sWidth = q(e));
						else {
							for (s = t.nTable.cloneNode(!1), n = t.nTHead.cloneNode(!0), o = l.createElement("tbody"), e = l.createElement("tr"), s.removeAttribute("id"), s.appendChild(n), null !== t.nTFoot && (s.appendChild(t.nTFoot.cloneNode(!0)), C(function(t) {
								t.style.width = ""
							}, s.getElementsByTagName("tr"))), s.appendChild(o), o.appendChild(e), o = h("thead th", s), 0 === o.length && (o = h("tbody tr:eq(0)>td", s)), r = N(t, n), n = o = 0; a > n; n++) {
								var u = t.aoColumns[n];
								u.bVisible && null !== u.sWidthOrig && "" !== u.sWidthOrig ? r[n - o].style.width = q(u.sWidthOrig) : u.bVisible ? r[n - o].style.width = "" : o++
							}
							for (n = 0; a > n; n++) t.aoColumns[n].bVisible && (o = Na(t, n), null !== o && (o = o.cloneNode(!0), "" !== t.aoColumns[n].sContentPadding && (o.innerHTML += t.aoColumns[n].sContentPadding), e.appendChild(o)));
							if (i.appendChild(s), "" !== t.oScroll.sX && "" !== t.oScroll.sXInner ? s.style.width = q(t.oScroll.sXInner) : "" !== t.oScroll.sX ? (s.style.width = "", h(s).width() < i.offsetWidth && (s.style.width = q(i.offsetWidth))) : "" !== t.oScroll.sY ? s.style.width = q(i.offsetWidth) : c && (s.style.width = q(c)), s.style.visibility = "hidden", Oa(t, s), a = h("tbody tr:eq(0)", s).children(), 0 === a.length && (a = N(t, h("thead", s)[0])), "" !== t.oScroll.sX) {
								for (n = o = i = 0; n < t.aoColumns.length; n++) t.aoColumns[n].bVisible && (i = null === t.aoColumns[n].sWidthOrig ? i + h(a[o]).outerWidth() : i + (parseInt(t.aoColumns[n].sWidth.replace("px", ""), 10) + (h(a[o]).outerWidth() - h(a[o]).width())), o++);
								s.style.width = q(i), t.nTable.style.width = q(i)
							}
							for (n = o = 0; n < t.aoColumns.length; n++) t.aoColumns[n].bVisible && (i = h(a[o]).width(), null !== i && i > 0 && (t.aoColumns[n].sWidth = q(i)), o++);
							a = h(s).css("width"), t.nTable.style.width = -1 !== a.indexOf("%") ? a : q(h(s).outerWidth()), s.parentNode.removeChild(s)
						}
						c && (t.nTable.style.width = q(c))
					}
					function Oa(t, e) {
						"" === t.oScroll.sX && "" !== t.oScroll.sY ? (h(e).width(), e.style.width = q(h(e).outerWidth() - t.oScroll.iBarWidth)) : "" !== t.oScroll.sX && (e.style.width = q(h(e).outerWidth()))
					}
					function Na(t, e) {
						var n = Pa(t, e);
						if (0 > n) return null;
						if (null === t.aoData[n].nTr) {
							var i = l.createElement("td");
							return i.innerHTML = v(t, n, e, ""), i
						}
						return J(t, n)[e]
					}
					function Pa(t, e) {
						for (var n = -1, i = -1, s = 0; s < t.aoData.length; s++) {
							var o = v(t, s, e, "display") + "",
								o = o.replace(/<.*?>/g, "");
							o.length > n && (n = o.length, i = s)
						}
						return i
					}
					function q(t) {
						if (null === t) return "0px";
						if ("number" == typeof t) return 0 > t ? "0px" : t + "px";
						var e = t.charCodeAt(t.length - 1);
						return 48 > e || e > 57 ? t : t + "px"
					}
					function Qa() {
						var t = l.createElement("p"),
							e = t.style;
						e.width = "100%", e.height = "200px", e.padding = "0px";
						var n = l.createElement("div"),
							e = n.style;
						return e.position = "absolute", e.top = "0px", e.left = "0px", e.visibility = "hidden", e.width = "200px", e.height = "150px", e.padding = "0px", e.overflow = "hidden", n.appendChild(t), l.body.appendChild(n), e = t.offsetWidth, n.style.overflow = "scroll", t = t.offsetWidth, e == t && (t = n.clientWidth), l.body.removeChild(n), e - t
					}
					function O(t, e) {
						var i, s, o, a, r, l, c = [],
							u = [],
							d = j.ext.oSort,
							f = t.aoData,
							p = t.aoColumns,
							g = t.oLanguage.oAria;
						if (!t.oFeatures.bServerSide && (0 !== t.aaSorting.length || null !== t.aaSortingFixed)) {
							for (c = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), i = 0; i < c.length; i++) if (s = c[i][0], o = R(t, s), a = t.aoColumns[s].sSortDataType, j.ext.afnSortData[a]) if (r = j.ext.afnSortData[a].call(t.oInstance, t, s, o), r.length === f.length) for (o = 0, a = f.length; a > o; o++) F(t, o, s, r[o]);
							else D(t, 0, "Returned data sort array (col " + s + ") is the wrong length");
							for (i = 0, s = t.aiDisplayMaster.length; s > i; i++) u[t.aiDisplayMaster[i]] = i;
							var m, b = c.length;
							for (i = 0, s = f.length; s > i; i++) for (o = 0; b > o; o++) for (m = p[c[o][0]].aDataSort, r = 0, l = m.length; l > r; r++) a = p[m[r]].sType, a = d[(a ? a : "string") + "-pre"], f[i]._aSortData[m[r]] = a ? a(v(t, i, m[r], "sort")) : v(t, i, m[r], "sort");
							t.aiDisplayMaster.sort(function(t, e) {
								var n, i, s, o, a;
								for (n = 0; b > n; n++) for (a = p[c[n][0]].aDataSort, i = 0, s = a.length; s > i; i++) if (o = p[a[i]].sType, o = d[(o ? o : "string") + "-" + c[n][1]](f[t]._aSortData[a[i]], f[e]._aSortData[a[i]]), 0 !== o) return o;
								return d["numeric-asc"](u[t], u[e])
							})
						}
						for ((e === n || e) && !t.oFeatures.bDeferRender && P(t), i = 0, s = t.aoColumns.length; s > i; i++) a = p[i].sTitle.replace(/<.*?>/g, ""), o = p[i].nTh, o.removeAttribute("aria-sort"), o.removeAttribute("aria-label"), p[i].bSortable ? 0 < c.length && c[0][0] == i ? (o.setAttribute("aria-sort", "asc" == c[0][1] ? "ascending" : "descending"), o.setAttribute("aria-label", a + ("asc" == (p[i].asSorting[c[0][2] + 1] ? p[i].asSorting[c[0][2] + 1] : p[i].asSorting[0]) ? g.sSortAscending : g.sSortDescending))) : o.setAttribute("aria-label", a + ("asc" == p[i].asSorting[0] ? g.sSortAscending : g.sSortDescending)) : o.setAttribute("aria-label", a);
						t.bSorted = !0, h(t.oInstance).trigger("sort", t), t.oFeatures.bFilter ? K(t, t.oPreviousSearch, 1) : (t.aiDisplay = t.aiDisplayMaster.slice(), t._iDisplayStart = 0, y(t), x(t))
					}
					function ia(t, e, n, i) {
						Ra(e, {}, function(e) {
							if (!1 !== t.aoColumns[n].bSortable) {
								var s = function() {
										var i, s;
										if (e.shiftKey) {
											for (var o = !1, a = 0; a < t.aaSorting.length; a++) if (t.aaSorting[a][0] == n) {
												o = !0, i = t.aaSorting[a][0], s = t.aaSorting[a][2] + 1, t.aoColumns[i].asSorting[s] ? (t.aaSorting[a][1] = t.aoColumns[i].asSorting[s], t.aaSorting[a][2] = s) : t.aaSorting.splice(a, 1);
												break
											}!1 === o && t.aaSorting.push([n, t.aoColumns[n].asSorting[0], 0])
										} else 1 == t.aaSorting.length && t.aaSorting[0][0] == n ? (i = t.aaSorting[0][0], s = t.aaSorting[0][2] + 1, t.aoColumns[i].asSorting[s] || (s = 0), t.aaSorting[0][1] = t.aoColumns[i].asSorting[s], t.aaSorting[0][2] = s) : (t.aaSorting.splice(0, t.aaSorting.length), t.aaSorting.push([n, t.aoColumns[n].asSorting[0], 0]));
										O(t)
									};
								t.oFeatures.bProcessing ? (E(t, !0), setTimeout(function() {
									s(), t.oFeatures.bServerSide || E(t, !1)
								}, 0)) : s(), "function" == typeof i && i(t)
							}
						})
					}
					function P(t) {
						var e, n, i, s, o, a = t.aoColumns.length,
							r = t.oClasses;
						for (e = 0; a > e; e++) t.aoColumns[e].bSortable && h(t.aoColumns[e].nTh).removeClass(r.sSortAsc + " " + r.sSortDesc + " " + t.aoColumns[e].sSortingClass);
						for (n = null !== t.aaSortingFixed ? t.aaSortingFixed.concat(t.aaSorting) : t.aaSorting.slice(), e = 0; e < t.aoColumns.length; e++) if (t.aoColumns[e].bSortable) {
							for (o = t.aoColumns[e].sSortingClass, s = -1, i = 0; i < n.length; i++) if (n[i][0] == e) {
								o = "asc" == n[i][1] ? r.sSortAsc : r.sSortDesc, s = i;
								break
							}
							h(t.aoColumns[e].nTh).addClass(o), t.bJUI && (o = h("span." + r.sSortIcon, t.aoColumns[e].nTh), o.removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed), o.addClass(-1 == s ? t.aoColumns[e].sSortingClassJUI : "asc" == n[s][1] ? r.sSortJUIAsc : r.sSortJUIDesc))
						} else h(t.aoColumns[e].nTh).addClass(t.aoColumns[e].sSortingClass);
						if (o = r.sSortColumn, t.oFeatures.bSort && t.oFeatures.bSortClasses) {
							for (t = J(t), s = [], e = 0; a > e; e++) s.push("");
							for (e = 0, i = 1; e < n.length; e++) r = parseInt(n[e][0], 10), s[r] = o + i, 3 > i && i++;
							o = RegExp(o + "[123]");
							var l;
							for (e = 0, n = t.length; n > e; e++) r = e % a, i = t[e].className, l = s[r], r = i.replace(o, l), r != i ? t[e].className = h.trim(r) : 0 < l.length && -1 == i.indexOf(l) && (t[e].className = i + " " + l)
						}
					}
					function ra(t) {
						if (t.oFeatures.bStateSave && !t.bDestroying) {
							var e, n;
							e = t.oScroll.bInfinite;
							var i = {
								iCreate: (new Date).getTime(),
								iStart: e ? 0 : t._iDisplayStart,
								iEnd: e ? t._iDisplayLength : t._iDisplayEnd,
								iLength: t._iDisplayLength,
								aaSorting: h.extend(!0, [], t.aaSorting),
								oSearch: h.extend(!0, {}, t.oPreviousSearch),
								aoSearchCols: h.extend(!0, [], t.aoPreSearchCols),
								abVisCols: []
							};
							for (e = 0, n = t.aoColumns.length; n > e; e++) i.abVisCols.push(t.aoColumns[e].bVisible);
							A(t, "aoStateSaveParams", "stateSaveParams", [t, i]), t.fnStateSave.call(t.oInstance, t, i)
						}
					}
					function Sa(t, e) {
						if (t.oFeatures.bStateSave) {
							var n = t.fnStateLoad.call(t.oInstance, t);
							if (n) {
								var i = A(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
								if (-1 === h.inArray(!1, i)) {
									for (t.oLoadedState = h.extend(!0, {}, n), t._iDisplayStart = n.iStart, t.iInitDisplayStart = n.iStart, t._iDisplayEnd = n.iEnd, t._iDisplayLength = n.iLength, t.aaSorting = n.aaSorting.slice(), t.saved_aaSorting = n.aaSorting.slice(), h.extend(t.oPreviousSearch, n.oSearch), h.extend(!0, t.aoPreSearchCols, n.aoSearchCols), e.saved_aoColumns = [], i = 0; i < n.abVisCols.length; i++) e.saved_aoColumns[i] = {}, e.saved_aoColumns[i].bVisible = n.abVisCols[i];
									A(t, "aoStateLoaded", "stateLoaded", [t, n])
								}
							}
						}
					}
					function s(t) {
						for (var e = 0; e < j.settings.length; e++) if (j.settings[e].nTable === t) return j.settings[e];
						return null
					}
					function T(t) {
						for (var e = [], t = t.aoData, n = 0, i = t.length; i > n; n++) null !== t[n].nTr && e.push(t[n].nTr);
						return e
					}
					function J(t, e) {
						var i, s, o, a, r, l, c = [];
						s = 0;
						var h = t.aoData.length;
						for (e !== n && (s = e, h = e + 1), o = s; h > o; o++) if (l = t.aoData[o], null !== l.nTr) {
							for (s = [], i = l.nTr.firstChild; i;) a = i.nodeName.toLowerCase(), ("td" == a || "th" == a) && s.push(i), i = i.nextSibling;
							for (a = i = 0, r = t.aoColumns.length; r > a; a++) t.aoColumns[a].bVisible ? c.push(s[a - i]) : (c.push(l._anHidden[a]), i++)
						}
						return c
					}
					function D(t, e, n) {
						if (t = null === t ? "DataTables warning: " + n : "DataTables warning (table id = '" + t.sTableId + "'): " + n, 0 === e) {
							if ("alert" != j.ext.sErrMode) throw Error(t);
							alert(t)
						} else X.console && console.log && console.log(t)
					}
					function p(t, e, i, s) {
						s === n && (s = i), e[i] !== n && (t[s] = e[i])
					}
					function Ta(t, n) {
						var i, s;
						for (s in n) n.hasOwnProperty(s) && (i = n[s], "object" == typeof e[s] && null !== i && !1 === h.isArray(i) ? h.extend(!0, t[s], i) : t[s] = i);
						return t
					}
					function Ra(t, e, n) {
						h(t).bind("click.DT", e, function(e) {
							t.blur(), n(e)
						}).bind("keypress.DT", e, function(t) {
							13 === t.which && n(t)
						}).bind("selectstart.DT", function() {
							return !1
						})
					}
					function z(t, e, n, i) {
						n && t[e].push({
							fn: n,
							sName: i
						})
					}
					function A(t, e, n, i) {
						for (var e = t[e], s = [], o = e.length - 1; o >= 0; o--) s.push(e[o].fn.apply(t.oInstance, i));
						return null !== n && h(t.oInstance).trigger(n, i), s
					}
					function Ua(t) {
						var e = h('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
						l.body.appendChild(e), t.oBrowser.bScrollOversize = 100 === h("#DT_BrowserTest", e)[0].offsetWidth ? !0 : !1, l.body.removeChild(e)
					}
					function Va(t) {
						return function() {
							var e = [s(this[j.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
							return j.ext.oApi[t].apply(this, e)
						}
					}
					var U = /\[.*?\]$/,
						Wa = X.JSON ? JSON.stringify : function(t) {
							var e = typeof t;
							if ("object" !== e || null === t) return "string" === e && (t = '"' + t + '"'), t + "";
							var n, i, s = [],
								o = h.isArray(t);
							for (n in t) i = t[n], e = typeof i, "string" === e ? i = '"' + i + '"' : "object" === e && null !== i && (i = Wa(i)), s.push((o ? "" : '"' + n + '":') + i);
							return (o ? "[" : "{") + s + (o ? "]" : "}")
						};
					this.$ = function(t, e) {
						var n, i, o, a = [];
						i = s(this[j.ext.iApiIndex]);
						var r = i.aoData,
							l = i.aiDisplay,
							c = i.aiDisplayMaster;
						if (e || (e = {}), e = h.extend({}, {
							filter: "none",
							order: "current",
							page: "all"
						}, e), "current" == e.page) for (n = i._iDisplayStart, i = i.fnDisplayEnd(); i > n; n++)(o = r[l[n]].nTr) && a.push(o);
						else if ("current" == e.order && "none" == e.filter) for (n = 0, i = c.length; i > n; n++)(o = r[c[n]].nTr) && a.push(o);
						else if ("current" == e.order && "applied" == e.filter) for (n = 0, i = l.length; i > n; n++)(o = r[l[n]].nTr) && a.push(o);
						else if ("original" == e.order && "none" == e.filter) for (n = 0, i = r.length; i > n; n++)(o = r[n].nTr) && a.push(o);
						else if ("original" == e.order && "applied" == e.filter) for (n = 0, i = r.length; i > n; n++) o = r[n].nTr, -1 !== h.inArray(n, l) && o && a.push(o);
						else D(i, 1, "Unknown selection options");
						return a = h(a), n = a.filter(t), a = a.find(t), h([].concat(h.makeArray(n), h.makeArray(a)))
					}, this._ = function(t, e) {
						var n, i, s = [],
							o = this.$(t, e);
						for (n = 0, i = o.length; i > n; n++) s.push(this.fnGetData(o[n]));
						return s
					}, this.fnAddData = function(t, e) {
						if (0 === t.length) return [];
						var i, o = [],
							a = s(this[j.ext.iApiIndex]);
						if ("object" == typeof t[0] && null !== t[0]) for (var r = 0; r < t.length; r++) {
							if (i = H(a, t[r]), -1 == i) return o;
							o.push(i)
						} else {
							if (i = H(a, t), -1 == i) return o;
							o.push(i)
						}
						return a.aiDisplay = a.aiDisplayMaster.slice(), (e === n || e) && aa(a), o
					}, this.fnAdjustColumnSizing = function(t) {
						var e = s(this[j.ext.iApiIndex]);
						k(e), t === n || t ? this.fnDraw(!1) : ("" !== e.oScroll.sX || "" !== e.oScroll.sY) && this.oApi._fnScrollDraw(e)
					}, this.fnClearTable = function(t) {
						var e = s(this[j.ext.iApiIndex]);
						ga(e), (t === n || t) && x(e)
					}, this.fnClose = function(t) {
						for (var e = s(this[j.ext.iApiIndex]), n = 0; n < e.aoOpenRows.length; n++) if (e.aoOpenRows[n].nParent == t) return (t = e.aoOpenRows[n].nTr.parentNode) && t.removeChild(e.aoOpenRows[n].nTr), e.aoOpenRows.splice(n, 1), 0;
						return 1
					}, this.fnDeleteRow = function(t, e, i) {
						var o, a, r = s(this[j.ext.iApiIndex]),
							t = "object" == typeof t ? I(r, t) : t,
							l = r.aoData.splice(t, 1);
						for (o = 0, a = r.aoData.length; a > o; o++) null !== r.aoData[o].nTr && (r.aoData[o].nTr._DT_RowIndex = o);
						return o = h.inArray(t, r.aiDisplay), r.asDataSearch.splice(o, 1), ha(r.aiDisplayMaster, t), ha(r.aiDisplay, t), "function" == typeof e && e.call(this, r, l), r._iDisplayStart >= r.fnRecordsDisplay() && (r._iDisplayStart -= r._iDisplayLength, 0 > r._iDisplayStart && (r._iDisplayStart = 0)), (i === n || i) && (y(r), x(r)), l
					}, this.fnDestroy = function(t) {
						var i, o, a = s(this[j.ext.iApiIndex]),
							r = a.nTableWrapper.parentNode,
							l = a.nTBody,
							t = t === n ? !1 : t;
						if (a.bDestroying = !0, A(a, "aoDestroyCallback", "destroy", [a]), !t) for (i = 0, o = a.aoColumns.length; o > i; i++)!1 === a.aoColumns[i].bVisible && this.fnSetColumnVis(i, !0);
						for (h(a.nTableWrapper).find("*").andSelf().unbind(".DT"), h("tbody>tr>td." + a.oClasses.sRowEmpty, a.nTable).parent().remove(), a.nTable != a.nTHead.parentNode && (h(a.nTable).children("thead").remove(), a.nTable.appendChild(a.nTHead)), a.nTFoot && a.nTable != a.nTFoot.parentNode && (h(a.nTable).children("tfoot").remove(), a.nTable.appendChild(a.nTFoot)), a.nTable.parentNode.removeChild(a.nTable), h(a.nTableWrapper).remove(), a.aaSorting = [], a.aaSortingFixed = [], P(a), h(T(a)).removeClass(a.asStripeClasses.join(" ")), h("th, td", a.nTHead).removeClass([a.oClasses.sSortable, a.oClasses.sSortableAsc, a.oClasses.sSortableDesc, a.oClasses.sSortableNone].join(" ")), a.bJUI && (h("th span." + a.oClasses.sSortIcon + ", td span." + a.oClasses.sSortIcon, a.nTHead).remove(), h("th, td", a.nTHead).each(function() {
							var t = h("div." + a.oClasses.sSortJUIWrapper, this),
								e = t.contents();
							h(this).append(e), t.remove()
						})), !t && a.nTableReinsertBefore ? r.insertBefore(a.nTable, a.nTableReinsertBefore) : t || r.appendChild(a.nTable), i = 0, o = a.aoData.length; o > i; i++) null !== a.aoData[i].nTr && l.appendChild(a.aoData[i].nTr);
						if (!0 === a.oFeatures.bAutoWidth && (a.nTable.style.width = q(a.sDestroyWidth)), o = a.asDestroyStripes.length) for (t = h(l).children("tr"), i = 0; o > i; i++) t.filter(":nth-child(" + o + "n + " + i + ")").addClass(a.asDestroyStripes[i]);
						for (i = 0, o = j.settings.length; o > i; i++) j.settings[i] == a && j.settings.splice(i, 1);
						e = a = null
					}, this.fnDraw = function(t) {
						var e = s(this[j.ext.iApiIndex]);
						!1 === t ? (y(e), x(e)) : aa(e)
					}, this.fnFilter = function(t, e, i, o, a, r) {
						var c = s(this[j.ext.iApiIndex]);
						if (c.oFeatures.bFilter) if ((i === n || null === i) && (i = !1), (o === n || null === o) && (o = !0), (a === n || null === a) && (a = !0), (r === n || null === r) && (r = !0), e === n || null === e) {
							if (K(c, {
								sSearch: t + "",
								bRegex: i,
								bSmart: o,
								bCaseInsensitive: r
							}, 1), a && c.aanFeatures.f) for (e = c.aanFeatures.f, i = 0, o = e.length; o > i; i++) try {
								e[i]._DT_Input != l.activeElement && h(e[i]._DT_Input).val(t)
							} catch (u) {
								h(e[i]._DT_Input).val(t)
							}
						} else h.extend(c.aoPreSearchCols[e], {
							sSearch: t + "",
							bRegex: i,
							bSmart: o,
							bCaseInsensitive: r
						}), K(c, c.oPreviousSearch, 1)
					}, this.fnGetData = function(t, e) {
						var i = s(this[j.ext.iApiIndex]);
						if (t !== n) {
							var o = t;
							if ("object" == typeof t) {
								var a = t.nodeName.toLowerCase();
								"tr" === a ? o = I(i, t) : "td" === a && (o = I(i, t.parentNode), e = fa(i, o, t))
							}
							return e !== n ? v(i, o, e, "") : i.aoData[o] !== n ? i.aoData[o]._aData : null
						}
						return Z(i)
					}, this.fnGetNodes = function(t) {
						var e = s(this[j.ext.iApiIndex]);
						return t !== n ? e.aoData[t] !== n ? e.aoData[t].nTr : null : T(e)
					}, this.fnGetPosition = function(t) {
						var e = s(this[j.ext.iApiIndex]),
							n = t.nodeName.toUpperCase();
						return "TR" == n ? I(e, t) : "TD" == n || "TH" == n ? (n = I(e, t.parentNode), t = fa(e, n, t), [n, R(e, t), t]) : null
					}, this.fnIsOpen = function(t) {
						for (var e = s(this[j.ext.iApiIndex]), n = 0; n < e.aoOpenRows.length; n++) if (e.aoOpenRows[n].nParent == t) return !0;
						return !1
					}, this.fnOpen = function(e, n, i) {
						var o = s(this[j.ext.iApiIndex]),
							a = T(o);
						if (-1 !== h.inArray(e, a)) {
							this.fnClose(e);
							var a = l.createElement("tr"),
								r = l.createElement("td");
							return a.appendChild(r), r.className = i, r.colSpan = t(o), "string" == typeof n ? r.innerHTML = n : h(r).html(n), n = h("tr", o.nTBody), -1 != h.inArray(e, n) && h(a).insertAfter(e), o.aoOpenRows.push({
								nTr: a,
								nParent: e
							}), a
						}
					}, this.fnPageChange = function(t, e) {
						var i = s(this[j.ext.iApiIndex]);
						qa(i, t), y(i), (e === n || e) && x(i)
					}, this.fnSetColumnVis = function(e, i, o) {
						var a, r, l, c, h = s(this[j.ext.iApiIndex]),
							u = h.aoColumns,
							d = h.aoData;
						if (u[e].bVisible != i) {
							if (i) {
								for (a = r = 0; e > a; a++) u[a].bVisible && r++;
								if (c = r >= t(h), !c) for (a = e; a < u.length; a++) if (u[a].bVisible) {
									l = a;
									break
								}
								for (a = 0, r = d.length; r > a; a++) null !== d[a].nTr && (c ? d[a].nTr.appendChild(d[a]._anHidden[e]) : d[a].nTr.insertBefore(d[a]._anHidden[e], J(h, a)[l]))
							} else for (a = 0, r = d.length; r > a; a++) null !== d[a].nTr && (l = J(h, a)[e], d[a]._anHidden[e] = l, l.parentNode.removeChild(l));
							for (u[e].bVisible = i, W(h, h.aoHeader), h.nTFoot && W(h, h.aoFooter), a = 0, r = h.aoOpenRows.length; r > a; a++) h.aoOpenRows[a].nTr.colSpan = t(h);
							(o === n || o) && (k(h), x(h)), ra(h)
						}
					}, this.fnSettings = function() {
						return s(this[j.ext.iApiIndex])
					}, this.fnSort = function(t) {
						var e = s(this[j.ext.iApiIndex]);
						e.aaSorting = t, O(e)
					}, this.fnSortListener = function(t, e, n) {
						ia(s(this[j.ext.iApiIndex]), t, e, n)
					}, this.fnUpdate = function(t, e, i, o, a) {
						var l = s(this[j.ext.iApiIndex]),
							e = "object" == typeof e ? I(l, e) : e;
						if (h.isArray(t) && i === n) for (l.aoData[e]._aData = t.slice(), i = 0; i < l.aoColumns.length; i++) this.fnUpdate(v(l, e, i), e, i, !1, !1);
						else if (h.isPlainObject(t) && i === n) for (l.aoData[e]._aData = h.extend(!0, {}, t), i = 0; i < l.aoColumns.length; i++) this.fnUpdate(v(l, e, i), e, i, !1, !1);
						else {
							F(l, e, i, t);
							var t = v(l, e, i, "display"),
								c = l.aoColumns[i];
							null !== c.fnRender && (t = S(l, e, i), c.bUseRendered && F(l, e, i, t)), null !== l.aoData[e].nTr && (J(l, e)[i].innerHTML = t)
						}
						return i = h.inArray(e, l.aiDisplay), l.asDataSearch[i] = na(l, Y(l, e, "filter", r(l, "bSearchable"))), (a === n || a) && k(l), (o === n || o) && aa(l), 0
					}, this.fnVersionCheck = j.ext.fnVersionCheck, this.oApi = {
						_fnExternApiFunc: Va,
						_fnInitialise: ba,
						_fnInitComplete: $,
						_fnLanguageCompat: pa,
						_fnAddColumn: o,
						_fnColumnOptions: m,
						_fnAddData: H,
						_fnCreateTr: ea,
						_fnGatherData: ua,
						_fnBuildHead: va,
						_fnDrawHead: W,
						_fnDraw: x,
						_fnReDraw: aa,
						_fnAjaxUpdate: wa,
						_fnAjaxParameters: Ea,
						_fnAjaxUpdateDraw: Fa,
						_fnServerParams: ka,
						_fnAddOptionsHtml: xa,
						_fnFeatureHtmlTable: Ba,
						_fnScrollDraw: La,
						_fnAdjustColumnSizing: k,
						_fnFeatureHtmlFilter: za,
						_fnFilterComplete: K,
						_fnFilterCustom: Ia,
						_fnFilterColumn: Ha,
						_fnFilter: Ga,
						_fnBuildSearchArray: la,
						_fnBuildSearchRow: na,
						_fnFilterCreateSearch: ma,
						_fnDataToSearch: Ja,
						_fnSort: O,
						_fnSortAttachListener: ia,
						_fnSortingClasses: P,
						_fnFeatureHtmlPaginate: Da,
						_fnPageChange: qa,
						_fnFeatureHtmlInfo: Ca,
						_fnUpdateInfo: Ka,
						_fnFeatureHtmlLength: ya,
						_fnFeatureHtmlProcessing: Aa,
						_fnProcessingDisplay: E,
						_fnVisibleToColumnIndex: G,
						_fnColumnIndexToVisible: R,
						_fnNodeToDataIndex: I,
						_fnVisbleColumns: t,
						_fnCalculateEnd: y,
						_fnConvertToWidth: Ma,
						_fnCalculateColumnWidths: da,
						_fnScrollingWidthAdjust: Oa,
						_fnGetWidestNode: Na,
						_fnGetMaxLenString: Pa,
						_fnStringToCss: q,
						_fnDetectType: B,
						_fnSettingsFromNode: s,
						_fnGetDataMaster: Z,
						_fnGetTrNodes: T,
						_fnGetTdNodes: J,
						_fnEscapeRegex: oa,
						_fnDeleteIndex: ha,
						_fnReOrderIndex: u,
						_fnColumnOrdering: M,
						_fnLog: D,
						_fnClearTable: ga,
						_fnSaveState: ra,
						_fnLoadState: Sa,
						_fnCreateCookie: function(a, b, c, d, e) {
							var f = new Date;
							f.setTime(f.getTime() + 1e3 * c);
							var c = X.location.pathname.split("/"),
								a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase(),
								g;
							if (null !== e ? (g = "function" == typeof h.parseJSON ? h.parseJSON(b) : eval("(" + b + ")"), b = e(a, g, f.toGMTString(), c.join("/") + "/")) : b = a + "=" + encodeURIComponent(b) + "; expires=" + f.toGMTString() + "; path=" + c.join("/") + "/", a = l.cookie.split(";"), e = b.split(";")[0].length, f = [], 4096 < e + l.cookie.length + 10) {
								for (var j = 0, o = a.length; o > j; j++) if (-1 != a[j].indexOf(d)) {
									var k = a[j].split("=");
									try {
										(g = eval("(" + decodeURIComponent(k[1]) + ")")) && g.iCreate && f.push({
											name: k[0],
											time: g.iCreate
										})
									} catch (m) {}
								}
								for (f.sort(function(t, e) {
									return e.time - t.time
								}); 4096 < e + l.cookie.length + 10;) {
									if (0 === f.length) return;
									d = f.pop(), l.cookie = d.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + c.join("/") + "/"
								}
							}
							l.cookie = b
						},
						_fnReadCookie: function(t) {
							for (var e = X.location.pathname.split("/"), t = t + "_" + e[e.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", e = l.cookie.split(";"), n = 0; n < e.length; n++) {
								for (var i = e[n];
								" " == i.charAt(0);) i = i.substring(1, i.length);
								if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
							}
							return null
						},
						_fnDetectHeader: V,
						_fnGetUniqueThs: N,
						_fnScrollBarWidth: Qa,
						_fnApplyToChildren: C,
						_fnMap: p,
						_fnGetRowData: Y,
						_fnGetCellData: v,
						_fnSetCellData: F,
						_fnGetObjectDataFn: Q,
						_fnSetObjectDataFn: L,
						_fnApplyColumnDefs: ta,
						_fnBindAction: Ra,
						_fnExtend: Ta,
						_fnCallbackReg: z,
						_fnCallbackFire: A,
						_fnJsonString: Wa,
						_fnRender: S,
						_fnNodeToColumnIndex: fa,
						_fnInfoMacros: ja,
						_fnBrowserDetect: Ua,
						_fnGetColumns: r
					}, h.extend(j.ext.oApi, this.oApi);
					for (var sa in j.ext.oApi) sa && (this[sa] = Va(sa));
					var ca = this;
					return this.each(function() {
						var t, i, s, a = 0;
						i = this.getAttribute("id");
						var r = !1,
							c = !1;
						if ("table" != this.nodeName.toLowerCase()) D(null, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
						else {
							for (a = 0, t = j.settings.length; t > a; a++) {
								if (j.settings[a].nTable == this) {
									if (e === n || e.bRetrieve) return j.settings[a].oInstance;
									if (e.bDestroy) {
										j.settings[a].oInstance.fnDestroy();
										break
									}
									return void D(j.settings[a], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy")
								}
								if (j.settings[a].sTableId == this.id) {
									j.settings.splice(a, 1);
									break
								}
							}(null === i || "" === i) && (this.id = i = "DataTables_Table_" + j.ext._oExternConfig.iNextUnique++);
							var u = h.extend(!0, {}, j.models.oSettings, {
								nTable: this,
								oApi: ca.oApi,
								oInit: e,
								sDestroyWidth: h(this).width(),
								sInstance: i,
								sTableId: i
							});
							if (j.settings.push(u), u.oInstance = 1 === ca.length ? ca : h(this).dataTable(), e || (e = {}), e.oLanguage && pa(e.oLanguage), e = Ta(h.extend(!0, {}, j.defaults), e), p(u.oFeatures, e, "bPaginate"), p(u.oFeatures, e, "bLengthChange"), p(u.oFeatures, e, "bFilter"), p(u.oFeatures, e, "bSort"), p(u.oFeatures, e, "bInfo"), p(u.oFeatures, e, "bProcessing"), p(u.oFeatures, e, "bAutoWidth"), p(u.oFeatures, e, "bSortClasses"), p(u.oFeatures, e, "bServerSide"), p(u.oFeatures, e, "bDeferRender"), p(u.oScroll, e, "sScrollX", "sX"), p(u.oScroll, e, "sScrollXInner", "sXInner"), p(u.oScroll, e, "sScrollY", "sY"), p(u.oScroll, e, "bScrollCollapse", "bCollapse"), p(u.oScroll, e, "bScrollInfinite", "bInfinite"), p(u.oScroll, e, "iScrollLoadGap", "iLoadGap"), p(u.oScroll, e, "bScrollAutoCss", "bAutoCss"), p(u, e, "asStripeClasses"), p(u, e, "asStripClasses", "asStripeClasses"), p(u, e, "fnServerData"), p(u, e, "fnFormatNumber"), p(u, e, "sServerMethod"), p(u, e, "aaSorting"), p(u, e, "aaSortingFixed"), p(u, e, "aLengthMenu"), p(u, e, "sPaginationType"), p(u, e, "sAjaxSource"), p(u, e, "sAjaxDataProp"), p(u, e, "iCookieDuration"), p(u, e, "sCookiePrefix"), p(u, e, "sDom"), p(u, e, "bSortCellsTop"), p(u, e, "iTabIndex"), p(u, e, "oSearch", "oPreviousSearch"), p(u, e, "aoSearchCols", "aoPreSearchCols"), p(u, e, "iDisplayLength", "_iDisplayLength"), p(u, e, "bJQueryUI", "bJUI"), p(u, e, "fnCookieCallback"), p(u, e, "fnStateLoad"), p(u, e, "fnStateSave"), p(u.oLanguage, e, "fnInfoCallback"), z(u, "aoDrawCallback", e.fnDrawCallback, "user"), z(u, "aoServerParams", e.fnServerParams, "user"), z(u, "aoStateSaveParams", e.fnStateSaveParams, "user"), z(u, "aoStateLoadParams", e.fnStateLoadParams, "user"), z(u, "aoStateLoaded", e.fnStateLoaded, "user"), z(u, "aoRowCallback", e.fnRowCallback, "user"), z(u, "aoRowCreatedCallback", e.fnCreatedRow, "user"), z(u, "aoHeaderCallback", e.fnHeaderCallback, "user"), z(u, "aoFooterCallback", e.fnFooterCallback, "user"), z(u, "aoInitComplete", e.fnInitComplete, "user"), z(u, "aoPreDrawCallback", e.fnPreDrawCallback, "user"), u.oFeatures.bServerSide && u.oFeatures.bSort && u.oFeatures.bSortClasses ? z(u, "aoDrawCallback", P, "server_side_sort_classes") : u.oFeatures.bDeferRender && z(u, "aoDrawCallback", P, "defer_sort_classes"), e.bJQueryUI ? (h.extend(u.oClasses, j.ext.oJUIClasses), e.sDom === j.defaults.sDom && "lfrtip" === j.defaults.sDom && (u.sDom = '<"H"lfr>t<"F"ip>')) : h.extend(u.oClasses, j.ext.oStdClasses), h(this).addClass(u.oClasses.sTable), ("" !== u.oScroll.sX || "" !== u.oScroll.sY) && (u.oScroll.iBarWidth = Qa()), u.iInitDisplayStart === n && (u.iInitDisplayStart = e.iDisplayStart, u._iDisplayStart = e.iDisplayStart), e.bStateSave && (u.oFeatures.bStateSave = !0, Sa(u, e), z(u, "aoDrawCallback", ra, "state_save")), null !== e.iDeferLoading && (u.bDeferLoading = !0, a = h.isArray(e.iDeferLoading), u._iRecordsDisplay = a ? e.iDeferLoading[0] : e.iDeferLoading, u._iRecordsTotal = a ? e.iDeferLoading[1] : e.iDeferLoading), null !== e.aaData && (c = !0), "" !== e.oLanguage.sUrl ? (u.oLanguage.sUrl = e.oLanguage.sUrl, h.getJSON(u.oLanguage.sUrl, null, function(t) {
								pa(t), h.extend(!0, u.oLanguage, e.oLanguage, t), ba(u)
							}), r = !0) : h.extend(!0, u.oLanguage, e.oLanguage), null === e.asStripeClasses && (u.asStripeClasses = [u.oClasses.sStripeOdd, u.oClasses.sStripeEven]), t = u.asStripeClasses.length, u.asDestroyStripes = [], t) {
								for (i = !1, s = h(this).children("tbody").children("tr:lt(" + t + ")"), a = 0; t > a; a++) s.hasClass(u.asStripeClasses[a]) && (i = !0, u.asDestroyStripes.push(u.asStripeClasses[a]));
								i && s.removeClass(u.asStripeClasses.join(" "))
							}
							if (i = [], a = this.getElementsByTagName("thead"), 0 !== a.length && (V(u.aoHeader, a[0]), i = N(u)), null === e.aoColumns) for (s = [], a = 0, t = i.length; t > a; a++) s.push(null);
							else s = e.aoColumns;
							for (a = 0, t = s.length; t > a; a++) e.saved_aoColumns !== n && e.saved_aoColumns.length == t && (null === s[a] && (s[a] = {}), s[a].bVisible = e.saved_aoColumns[a].bVisible), o(u, i ? i[a] : null);
							for (ta(u, e.aoColumnDefs, s, function(t, e) {
								m(u, t, e)
							}), a = 0, t = u.aaSorting.length; t > a; a++) {
								u.aaSorting[a][0] >= u.aoColumns.length && (u.aaSorting[a][0] = 0);
								var d = u.aoColumns[u.aaSorting[a][0]];
								for (u.aaSorting[a][2] === n && (u.aaSorting[a][2] = 0), e.aaSorting === n && u.saved_aaSorting === n && (u.aaSorting[a][1] = d.asSorting[0]), i = 0, s = d.asSorting.length; s > i; i++) if (u.aaSorting[a][1] == d.asSorting[i]) {
									u.aaSorting[a][2] = i;
									break
								}
							}
							if (P(u), Ua(u), a = h(this).children("caption").each(function() {
								this._captionSide = h(this).css("caption-side")
							}), t = h(this).children("thead"), 0 === t.length && (t = [l.createElement("thead")], this.appendChild(t[0])), u.nTHead = t[0], t = h(this).children("tbody"), 0 === t.length && (t = [l.createElement("tbody")], this.appendChild(t[0])), u.nTBody = t[0], u.nTBody.setAttribute("role", "alert"), u.nTBody.setAttribute("aria-live", "polite"), u.nTBody.setAttribute("aria-relevant", "all"), t = h(this).children("tfoot"), 0 === t.length && 0 < a.length && ("" !== u.oScroll.sX || "" !== u.oScroll.sY) && (t = [l.createElement("tfoot")], this.appendChild(t[0])), 0 < t.length && (u.nTFoot = t[0], V(u.aoFooter, u.nTFoot)), c) for (a = 0; a < e.aaData.length; a++) H(u, e.aaData[a]);
							else ua(u);
							u.aiDisplay = u.aiDisplayMaster.slice(), u.bInitialised = !0, !1 === r && ba(u)
						}
					}), ca = null, this
				};
			j.fnVersionCheck = function(t) {
				for (var e = function(t, e) {
						for (; t.length < e;) t += "0";
						return t
					}, n = j.ext.sVersion.split("."), t = t.split("."), i = "", s = "", o = 0, a = t.length; a > o; o++) i += e(n[o], 3), s += e(t[o], 3);
				return parseInt(i, 10) >= parseInt(s, 10)
			}, j.fnIsDataTable = function(t) {
				for (var e = j.settings, n = 0; n < e.length; n++) if (e[n].nTable === t || e[n].nScrollHead === t || e[n].nScrollFoot === t) return !0;
				return !1
			}, j.fnTables = function(t) {
				var e = [];
				return jQuery.each(j.settings, function(n, i) {
					(!t || !0 === t && h(i.nTable).is(":visible")) && e.push(i.nTable)
				}), e
			}, j.version = "1.9.4", j.settings = [], j.models = {}, j.models.ext = {
				afnFiltering: [],
				afnSortData: [],
				aoFeatures: [],
				aTypes: [],
				fnVersionCheck: j.fnVersionCheck,
				iApiIndex: 0,
				ofnSearch: {},
				oApi: {},
				oStdClasses: {},
				oJUIClasses: {},
				oPagination: {},
				oSort: {},
				sVersion: j.version,
				sErrMode: "alert",
				_oExternConfig: {
					iNextUnique: 0
				}
			}, j.models.oSearch = {
				bCaseInsensitive: !0,
				sSearch: "",
				bRegex: !1,
				bSmart: !0
			}, j.models.oRow = {
				nTr: null,
				_aData: [],
				_aSortData: [],
				_anHidden: [],
				_sRowStripe: ""
			}, j.models.oColumn = {
				aDataSort: null,
				asSorting: null,
				bSearchable: null,
				bSortable: null,
				bUseRendered: null,
				bVisible: null,
				_bAutoType: !0,
				fnCreatedCell: null,
				fnGetData: null,
				fnRender: null,
				fnSetData: null,
				mData: null,
				mRender: null,
				nTh: null,
				nTf: null,
				sClass: null,
				sContentPadding: null,
				sDefaultContent: null,
				sName: null,
				sSortDataType: "std",
				sSortingClass: null,
				sSortingClassJUI: null,
				sTitle: null,
				sType: null,
				sWidth: null,
				sWidthOrig: null
			}, j.defaults = {
				aaData: null,
				aaSorting: [
					[0, "asc"]
				],
				aaSortingFixed: null,
				aLengthMenu: [10, 25, 50, 100],
				aoColumns: null,
				aoColumnDefs: null,
				aoSearchCols: [],
				asStripeClasses: null,
				bAutoWidth: !0,
				bDeferRender: !1,
				bDestroy: !1,
				bFilter: !0,
				bInfo: !0,
				bJQueryUI: !1,
				bLengthChange: !0,
				bPaginate: !0,
				bProcessing: !1,
				bRetrieve: !1,
				bScrollAutoCss: !0,
				bScrollCollapse: !1,
				bScrollInfinite: !1,
				bServerSide: !1,
				bSort: !0,
				bSortCellsTop: !1,
				bSortClasses: !0,
				bStateSave: !1,
				fnCookieCallback: null,
				fnCreatedRow: null,
				fnDrawCallback: null,
				fnFooterCallback: null,
				fnFormatNumber: function(t) {
					if (1e3 > t) return t;
					for (var e = t + "", t = e.split(""), n = "", e = e.length, i = 0; e > i; i++) 0 === i % 3 && 0 !== i && (n = this.oLanguage.sInfoThousands + n), n = t[e - i - 1] + n;
					return n
				},
				fnHeaderCallback: null,
				fnInfoCallback: null,
				fnInitComplete: null,
				fnPreDrawCallback: null,
				fnRowCallback: null,
				fnServerData: function(t, e, n, i) {
					i.jqXHR = h.ajax({
						url: t,
						data: e,
						success: function(t) {
							t.sError && i.oApi._fnLog(i, 0, t.sError), h(i.oInstance).trigger("xhr", [i, t]), n(t)
						},
						dataType: "json",
						cache: !1,
						type: i.sServerMethod,
						error: function(t, e) {
							"parsererror" == e && i.oApi._fnLog(i, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
						}
					})
				},
				fnServerParams: null,
				fnStateLoad: function(e) {
					var e = this.oApi._fnReadCookie(e.sCookiePrefix + e.sInstance),
						j;
					try {
						j = "function" == typeof h.parseJSON ? h.parseJSON(e) : eval("(" + e + ")")
					} catch (m) {
						j = null
					}
					return j
				},
				fnStateLoadParams: null,
				fnStateLoaded: null,
				fnStateSave: function(t, e) {
					this.oApi._fnCreateCookie(t.sCookiePrefix + t.sInstance, this.oApi._fnJsonString(e), t.iCookieDuration, t.sCookiePrefix, t.fnCookieCallback)
				},
				fnStateSaveParams: null,
				iCookieDuration: 7200,
				iDeferLoading: null,
				iDisplayLength: 10,
				iDisplayStart: 0,
				iScrollLoadGap: 100,
				iTabIndex: 0,
				oLanguage: {
					oAria: {
						sSortAscending: ": activate to sort column ascending",
						sSortDescending: ": activate to sort column descending"
					},
					oPaginate: {
						sFirst: "First",
						sLast: "Last",
						sNext: "Next",
						sPrevious: "Previous"
					},
					sEmptyTable: "No data available in table",
					sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
					sInfoEmpty: "Showing 0 to 0 of 0 entries",
					sInfoFiltered: "(filtered from _MAX_ total entries)",
					sInfoPostFix: "",
					sInfoThousands: ",",
					sLengthMenu: "Show _MENU_ entries",
					sLoadingRecords: "Loading...",
					sProcessing: "Processing...",
					sSearch: "Search:",
					sUrl: "",
					sZeroRecords: "No matching records found"
				},
				oSearch: h.extend({}, j.models.oSearch),
				sAjaxDataProp: "aaData",
				sAjaxSource: null,
				sCookiePrefix: "SpryMedia_DataTables_",
				sDom: "lfrtip",
				sPaginationType: "two_button",
				sScrollX: "",
				sScrollXInner: "",
				sScrollY: "",
				sServerMethod: "GET"
			}, j.defaults.columns = {
				aDataSort: null,
				asSorting: ["asc", "desc"],
				bSearchable: !0,
				bSortable: !0,
				bUseRendered: !0,
				bVisible: !0,
				fnCreatedCell: null,
				fnRender: null,
				iDataSort: -1,
				mData: null,
				mRender: null,
				sCellType: "td",
				sClass: "",
				sContentPadding: "",
				sDefaultContent: null,
				sName: "",
				sSortDataType: "std",
				sTitle: null,
				sType: null,
				sWidth: null
			}, j.models.oSettings = {
				oFeatures: {
					bAutoWidth: null,
					bDeferRender: null,
					bFilter: null,
					bInfo: null,
					bLengthChange: null,
					bPaginate: null,
					bProcessing: null,
					bServerSide: null,
					bSort: null,
					bSortClasses: null,
					bStateSave: null
				},
				oScroll: {
					bAutoCss: null,
					bCollapse: null,
					bInfinite: null,
					iBarWidth: 0,
					iLoadGap: null,
					sX: null,
					sXInner: null,
					sY: null
				},
				oLanguage: {
					fnInfoCallback: null
				},
				oBrowser: {
					bScrollOversize: !1
				},
				aanFeatures: [],
				aoData: [],
				aiDisplay: [],
				aiDisplayMaster: [],
				aoColumns: [],
				aoHeader: [],
				aoFooter: [],
				asDataSearch: [],
				oPreviousSearch: {},
				aoPreSearchCols: [],
				aaSorting: null,
				aaSortingFixed: null,
				asStripeClasses: null,
				asDestroyStripes: [],
				sDestroyWidth: 0,
				aoRowCallback: [],
				aoHeaderCallback: [],
				aoFooterCallback: [],
				aoDrawCallback: [],
				aoRowCreatedCallback: [],
				aoPreDrawCallback: [],
				aoInitComplete: [],
				aoStateSaveParams: [],
				aoStateLoadParams: [],
				aoStateLoaded: [],
				sTableId: "",
				nTable: null,
				nTHead: null,
				nTFoot: null,
				nTBody: null,
				nTableWrapper: null,
				bDeferLoading: !1,
				bInitialised: !1,
				aoOpenRows: [],
				sDom: null,
				sPaginationType: "two_button",
				iCookieDuration: 0,
				sCookiePrefix: "",
				fnCookieCallback: null,
				aoStateSave: [],
				aoStateLoad: [],
				oLoadedState: null,
				sAjaxSource: null,
				sAjaxDataProp: null,
				bAjaxDataGet: !0,
				jqXHR: null,
				fnServerData: null,
				aoServerParams: [],
				sServerMethod: null,
				fnFormatNumber: null,
				aLengthMenu: null,
				iDraw: 0,
				bDrawing: !1,
				iDrawError: -1,
				_iDisplayLength: 10,
				_iDisplayStart: 0,
				_iDisplayEnd: 10,
				_iRecordsTotal: 0,
				_iRecordsDisplay: 0,
				bJUI: null,
				oClasses: {},
				bFiltered: !1,
				bSorted: !1,
				bSortCellsTop: null,
				oInit: null,
				aoDestroyCallback: [],
				fnRecordsTotal: function() {
					return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
				},
				fnRecordsDisplay: function() {
					return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
				},
				fnDisplayEnd: function() {
					return this.oFeatures.bServerSide ? !1 === this.oFeatures.bPaginate || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
				},
				oInstance: null,
				sInstance: null,
				iTabIndex: 0,
				nScrollHead: null,
				nScrollFoot: null
			}, j.ext = h.extend(!0, {}, j.models.ext), h.extend(j.ext.oStdClasses, {
				sTable: "dataTable",
				sPagePrevEnabled: "paginate_enabled_previous",
				sPagePrevDisabled: "paginate_disabled_previous",
				sPageNextEnabled: "paginate_enabled_next",
				sPageNextDisabled: "paginate_disabled_next",
				sPageJUINext: "",
				sPageJUIPrev: "",
				sPageButton: "paginate_button",
				sPageButtonActive: "paginate_active",
				sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
				sPageFirst: "first",
				sPagePrevious: "previous",
				sPageNext: "next",
				sPageLast: "last",
				sStripeOdd: "odd",
				sStripeEven: "even",
				sRowEmpty: "dataTables_empty",
				sWrapper: "dataTables_wrapper",
				sFilter: "dataTables_filter",
				sInfo: "dataTables_info",
				sPaging: "dataTables_paginate paging_",
				sLength: "dataTables_length",
				sProcessing: "dataTables_processing",
				sSortAsc: "sorting_asc",
				sSortDesc: "sorting_desc",
				sSortable: "sorting",
				sSortableAsc: "sorting_asc_disabled",
				sSortableDesc: "sorting_desc_disabled",
				sSortableNone: "sorting_disabled",
				sSortColumn: "sorting_",
				sSortJUIAsc: "",
				sSortJUIDesc: "",
				sSortJUI: "",
				sSortJUIAscAllowed: "",
				sSortJUIDescAllowed: "",
				sSortJUIWrapper: "",
				sSortIcon: "",
				sScrollWrapper: "dataTables_scroll",
				sScrollHead: "dataTables_scrollHead",
				sScrollHeadInner: "dataTables_scrollHeadInner",
				sScrollBody: "dataTables_scrollBody",
				sScrollFoot: "dataTables_scrollFoot",
				sScrollFootInner: "dataTables_scrollFootInner",
				sFooterTH: "",
				sJUIHeader: "",
				sJUIFooter: ""
			}), h.extend(j.ext.oJUIClasses, j.ext.oStdClasses, {
				sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
				sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
				sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
				sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
				sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
				sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
				sPageButton: "fg-button ui-button ui-state-default",
				sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
				sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
				sPageFirst: "first ui-corner-tl ui-corner-bl",
				sPageLast: "last ui-corner-tr ui-corner-br",
				sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
				sSortAsc: "ui-state-default",
				sSortDesc: "ui-state-default",
				sSortable: "ui-state-default",
				sSortableAsc: "ui-state-default",
				sSortableDesc: "ui-state-default",
				sSortableNone: "ui-state-default",
				sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
				sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
				sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
				sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
				sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
				sSortJUIWrapper: "DataTables_sort_wrapper",
				sSortIcon: "DataTables_sort_icon",
				sScrollHead: "dataTables_scrollHead ui-state-default",
				sScrollFoot: "dataTables_scrollFoot ui-state-default",
				sFooterTH: "ui-state-default",
				sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
				sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
			}), h.extend(j.ext.oPagination, {
				two_button: {
					fnInit: function(t, e, n) {
						var i = t.oLanguage.oPaginate,
							s = function(e) {
								t.oApi._fnPageChange(t, e.data.action) && n(t)
							},
							i = t.bJUI ? '<a class="' + t.oClasses.sPagePrevDisabled + '" tabindex="' + t.iTabIndex + '" role="button"><span class="' + t.oClasses.sPageJUIPrev + '"></span></a><a class="' + t.oClasses.sPageNextDisabled + '" tabindex="' + t.iTabIndex + '" role="button"><span class="' + t.oClasses.sPageJUINext + '"></span></a>' : '<a class="' + t.oClasses.sPagePrevDisabled + '" tabindex="' + t.iTabIndex + '" role="button">' + i.sPrevious + '</a><a class="' + t.oClasses.sPageNextDisabled + '" tabindex="' + t.iTabIndex + '" role="button">' + i.sNext + "</a>";
						h(e).append(i);
						var o = h("a", e),
							i = o[0],
							o = o[1];
						t.oApi._fnBindAction(i, {
							action: "previous"
						}, s), t.oApi._fnBindAction(o, {
							action: "next"
						}, s), t.aanFeatures.p || (e.id = t.sTableId + "_paginate", i.id = t.sTableId + "_previous", o.id = t.sTableId + "_next", i.setAttribute("aria-controls", t.sTableId), o.setAttribute("aria-controls", t.sTableId))
					},
					fnUpdate: function(t) {
						if (t.aanFeatures.p) for (var e, n = t.oClasses, i = t.aanFeatures.p, s = 0, o = i.length; o > s; s++)(e = i[s].firstChild) && (e.className = 0 === t._iDisplayStart ? n.sPagePrevDisabled : n.sPagePrevEnabled, e = e.nextSibling, e.className = t.fnDisplayEnd() == t.fnRecordsDisplay() ? n.sPageNextDisabled : n.sPageNextEnabled)
					}
				},
				iFullNumbersShowPages: 5,
				full_numbers: {
					fnInit: function(t, e, n) {
						var i = t.oLanguage.oPaginate,
							s = t.oClasses,
							o = function(e) {
								t.oApi._fnPageChange(t, e.data.action) && n(t)
							};
						h(e).append('<a  tabindex="' + t.iTabIndex + '" class="' + s.sPageButton + " " + s.sPageFirst + '">' + i.sFirst + '</a><a  tabindex="' + t.iTabIndex + '" class="' + s.sPageButton + " " + s.sPagePrevious + '">' + i.sPrevious + '</a><span></span><a tabindex="' + t.iTabIndex + '" class="' + s.sPageButton + " " + s.sPageNext + '">' + i.sNext + '</a><a tabindex="' + t.iTabIndex + '" class="' + s.sPageButton + " " + s.sPageLast + '">' + i.sLast + "</a>");
						var a = h("a", e),
							i = a[0],
							s = a[1],
							r = a[2],
							a = a[3];
						t.oApi._fnBindAction(i, {
							action: "first"
						}, o), t.oApi._fnBindAction(s, {
							action: "previous"
						}, o), t.oApi._fnBindAction(r, {
							action: "next"
						}, o), t.oApi._fnBindAction(a, {
							action: "last"
						}, o), t.aanFeatures.p || (e.id = t.sTableId + "_paginate", i.id = t.sTableId + "_first", s.id = t.sTableId + "_previous", r.id = t.sTableId + "_next", a.id = t.sTableId + "_last")
					},
					fnUpdate: function(t, e) {
						if (t.aanFeatures.p) {
							var n, i, s = j.ext.oPagination.iFullNumbersShowPages,
								o = Math.floor(s / 2),
								a = Math.ceil(t.fnRecordsDisplay() / t._iDisplayLength),
								r = Math.ceil(t._iDisplayStart / t._iDisplayLength) + 1,
								l = "",
								c = t.oClasses,
								u = t.aanFeatures.p,
								d = function(i) {
									t.oApi._fnBindAction(this, {
										page: i + n - 1
									}, function(n) {
										t.oApi._fnPageChange(t, n.data.page), e(t), n.preventDefault()
									})
								};
							for (-1 === t._iDisplayLength ? r = o = n = 1 : s > a ? (n = 1, o = a) : o >= r ? (n = 1, o = s) : r >= a - o ? (n = a - s + 1, o = a) : (n = r - Math.ceil(s / 2) + 1, o = n + s - 1), s = n; o >= s; s++) l += r !== s ? '<a tabindex="' + t.iTabIndex + '" class="' + c.sPageButton + '">' + t.fnFormatNumber(s) + "</a>" : '<a tabindex="' + t.iTabIndex + '" class="' + c.sPageButtonActive + '">' + t.fnFormatNumber(s) + "</a>";
							for (s = 0, o = u.length; o > s; s++) i = u[s], i.hasChildNodes() && (h("span:eq(0)", i).html(l).children("a").each(d), i = i.getElementsByTagName("a"), i = [i[0], i[1], i[i.length - 2], i[i.length - 1]], h(i).removeClass(c.sPageButton + " " + c.sPageButtonActive + " " + c.sPageButtonStaticDisabled), h([i[0], i[1]]).addClass(1 == r ? c.sPageButtonStaticDisabled : c.sPageButton), h([i[2], i[3]]).addClass(0 === a || r === a || -1 === t._iDisplayLength ? c.sPageButtonStaticDisabled : c.sPageButton))
						}
					}
				}
			}), h.extend(j.ext.oSort, {
				"string-pre": function(t) {
					return "string" != typeof t && (t = null !== t && t.toString ? t.toString() : ""), t.toLowerCase()
				},
				"string-asc": function(t, e) {
					return e > t ? -1 : t > e ? 1 : 0
				},
				"string-desc": function(t, e) {
					return e > t ? 1 : t > e ? -1 : 0
				},
				"html-pre": function(t) {
					return t.replace(/<.*?>/g, "").toLowerCase()
				},
				"html-asc": function(t, e) {
					return e > t ? -1 : t > e ? 1 : 0
				},
				"html-desc": function(t, e) {
					return e > t ? 1 : t > e ? -1 : 0
				},
				"date-pre": function(t) {
					return t = Date.parse(t), (isNaN(t) || "" === t) && (t = Date.parse("01/01/1970 00:00:00")), t
				},
				"date-asc": function(t, e) {
					return t - e
				},
				"date-desc": function(t, e) {
					return e - t
				},
				"numeric-pre": function(t) {
					return "-" == t || "" === t ? 0 : 1 * t
				},
				"numeric-asc": function(t, e) {
					return t - e
				},
				"numeric-desc": function(t, e) {
					return e - t
				}
			}), h.extend(j.ext.aTypes, [function(t) {
				if ("number" == typeof t) return "numeric";
				if ("string" != typeof t) return null;
				var e, n = !1;
				if (e = t.charAt(0), -1 == "0123456789-".indexOf(e)) return null;
				for (var i = 1; i < t.length; i++) {
					if (e = t.charAt(i), -1 == "0123456789.".indexOf(e)) return null;
					if ("." == e) {
						if (n) return null;
						n = !0
					}
				}
				return "numeric"
			}, function(t) {
				var e = Date.parse(t);
				return null !== e && !isNaN(e) || "string" == typeof t && 0 === t.length ? "date" : null
			}, function(t) {
				return "string" == typeof t && -1 != t.indexOf("<") && -1 != t.indexOf(">") ? "html" : null
			}]), h.fn.DataTable = j, h.fn.dataTable = j, h.fn.dataTableSettings = j.settings, h.fn.dataTableExt = j.ext
		};
	"function" == typeof define && define.amd ? define(["jquery"], L) : jQuery && !jQuery.fn.dataTable && L(jQuery)
}(window, document), function(t) {
	function e() {
		var t = document.createElement("input"),
			e = "onpaste";
		return t.setAttribute(e, ""), "function" == typeof t[e] ? "paste" : "input"
	}
	var n, i = e() + ".mask",
		s = navigator.userAgent,
		o = /iphone/i.test(s),
		a = /android/i.test(s);
	t.mask = {
		definitions: {
			9: "[0-9]",
			a: "[A-Za-z]",
			"*": "[A-Za-z0-9]"
		},
		dataName: "rawMaskFn",
		placeholder: "_"
	}, t.fn.extend({
		caret: function(t, e) {
			var n;
			return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function() {
				this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", t), n.select())
			})) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), t = 0 - n.duplicate().moveStart("character", -1e5), e = t + n.text.length), {
				begin: t,
				end: e
			})
		},
		unmask: function() {
			return this.trigger("unmask")
		},
		mask: function(e, s) {
			var r, l, c, h, u, d;
			return !e && this.length > 0 ? (r = t(this[0]), r.data(t.mask.dataName)()) : (s = t.extend({
				placeholder: t.mask.placeholder,
				completed: null
			}, s), l = t.mask.definitions, c = [], h = d = e.length, u = null, t.each(e.split(""), function(t, e) {
				"?" == e ? (d--, h = t) : l[e] ? (c.push(RegExp(l[e])), null === u && (u = c.length - 1)) : c.push(null)
			}), this.trigger("unmask").each(function() {
				function r(t) {
					for (; d > ++t && !c[t];);
					return t
				}
				function f(t) {
					for (; --t >= 0 && !c[t];);
					return t
				}
				function p(t, e) {
					var n, i;
					if (!(0 > t)) {
						for (n = t, i = r(e); d > n; n++) if (c[n]) {
							if (!(d > i && c[n].test(C[i]))) break;
							C[n] = C[i], C[i] = s.placeholder, i = r(i)
						}
						y(), x.caret(Math.max(u, t))
					}
				}
				function g(t) {
					var e, n, i, o;
					for (e = t, n = s.placeholder; d > e; e++) if (c[e]) {
						if (i = r(e), o = C[e], C[e] = n, !(d > i && c[i].test(o))) break;
						n = o
					}
				}
				function m(t) {
					var e, n, i, s = t.which;
					8 === s || 46 === s || o && 127 === s ? (e = x.caret(), n = e.begin, i = e.end, 0 === i - n && (n = 46 !== s ? f(n) : i = r(n - 1), i = 46 === s ? r(i) : i), b(n, i), p(n, i - 1), t.preventDefault()) : 27 == s && (x.val(S), x.caret(0, w()), t.preventDefault())
				}
				function v(e) {
					var n, i, o, l = e.which,
						h = x.caret();
					e.ctrlKey || e.altKey || e.metaKey || 32 > l || l && (0 !== h.end - h.begin && (b(h.begin, h.end), p(h.begin, h.end - 1)), n = r(h.begin - 1), d > n && (i = String.fromCharCode(l), c[n].test(i) && (g(n), C[n] = i, y(), o = r(n), a ? setTimeout(t.proxy(t.fn.caret, x, o), 0) : x.caret(o), s.completed && o >= d && s.completed.call(x))), e.preventDefault())
				}
				function b(t, e) {
					var n;
					for (n = t; e > n && d > n; n++) c[n] && (C[n] = s.placeholder)
				}
				function y() {
					x.val(C.join(""))
				}
				function w(t) {
					var e, n, i = x.val(),
						o = -1;
					for (e = 0, pos = 0; d > e; e++) if (c[e]) {
						for (C[e] = s.placeholder; pos++ < i.length;) if (n = i.charAt(pos - 1), c[e].test(n)) {
							C[e] = n, o = e;
							break
						}
						if (pos > i.length) break
					} else C[e] === i.charAt(pos) && e !== h && (pos++, o = e);
					return t ? y() : h > o + 1 ? (x.val(""), b(0, d)) : (y(), x.val(x.val().substring(0, o + 1))), h ? e : u
				}
				var x = t(this),
					C = t.map(e.split(""), function(t) {
						return "?" != t ? l[t] ? s.placeholder : t : void 0
					}),
					S = x.val();
				x.data(t.mask.dataName, function() {
					return t.map(C, function(t, e) {
						return c[e] && t != s.placeholder ? t : null
					}).join("")
				}), x.attr("readonly") || x.one("unmask", function() {
					x.unbind(".mask").removeData(t.mask.dataName)
				}).bind("focus.mask", function() {
					clearTimeout(n);
					var t;
					S = x.val(), t = w(), n = setTimeout(function() {
						y(), t == e.length ? x.caret(0, t) : x.caret(t)
					}, 10)
				}).bind("blur.mask", function() {
					w(), x.val() != S && x.change()
				}).bind("keydown.mask", m).bind("keypress.mask", v).bind(i, function() {
					setTimeout(function() {
						var t = w(!0);
						x.caret(t), s.completed && t == x.val().length && s.completed.call(x)
					}, 0)
				}), w()
			}))
		}
	})
}(jQuery), jQuery &&
function(t) {
	function e(e, n) {
		var i = t('<div class="minicolors" />'),
			s = t.minicolors.defaults;
		e.data("minicolors-initialized") || (n = t.extend(!0, {}, s, n), i.addClass("minicolors-theme-" + n.theme).toggleClass("minicolors-with-opacity", n.opacity), void 0 !== n.position && t.each(n.position.split(" "), function() {
			i.addClass("minicolors-position-" + this)
		}), e.addClass("minicolors-input").data("minicolors-initialized", !1).data("minicolors-settings", n).prop("size", 7).wrap(i).after('<div class="minicolors-panel minicolors-slider-' + n.control + '"><div class="minicolors-slider"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider"><div class="minicolors-picker"></div></div><div class="minicolors-grid"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'), n.inline || (e.after('<span class="minicolors-swatch"><span class="minicolors-swatch-color"></span></span>'), e.next(".minicolors-swatch").on("click", function(t) {
			t.preventDefault(), e.focus()
		})), e.parent().find(".minicolors-panel").on("selectstart", function() {
			return !1
		}).end(), n.inline && e.parent().addClass("minicolors-inline"), r(e, !1), e.data("minicolors-initialized", !0))
	}
	function n(t) {
		var e = t.parent();
		t.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"), e.before(t).remove()
	}
	function i(t) {
		var e = t.parent(),
			n = e.find(".minicolors-panel"),
			i = t.data("minicolors-settings");
		!t.data("minicolors-initialized") || t.prop("disabled") || e.hasClass("minicolors-inline") || e.hasClass("minicolors-focus") || (s(), e.addClass("minicolors-focus"), n.stop(!0, !0).fadeIn(i.showSpeed, function() {
			i.show && i.show.call(t.get(0))
		}))
	}
	function s() {
		t(".minicolors-focus").each(function() {
			var e = t(this),
				n = e.find(".minicolors-input"),
				i = e.find(".minicolors-panel"),
				s = n.data("minicolors-settings");
			i.fadeOut(s.hideSpeed, function() {
				s.hide && s.hide.call(n.get(0)), e.removeClass("minicolors-focus")
			})
		})
	}
	function o(t, e, n) {
		var i, s, o, r, l = t.parents(".minicolors").find(".minicolors-input"),
			c = l.data("minicolors-settings"),
			h = t.find("[class$=-picker]"),
			u = t.offset().left,
			d = t.offset().top,
			f = Math.round(e.pageX - u),
			p = Math.round(e.pageY - d),
			g = n ? c.animationSpeed : 0;
		e.originalEvent.changedTouches && (f = e.originalEvent.changedTouches[0].pageX - u, p = e.originalEvent.changedTouches[0].pageY - d), 0 > f && (f = 0), 0 > p && (p = 0), f > t.width() && (f = t.width()), p > t.height() && (p = t.height()), t.parent().is(".minicolors-slider-wheel") && h.parent().is(".minicolors-grid") && (i = 75 - f, s = 75 - p, o = Math.sqrt(i * i + s * s), r = Math.atan2(s, i), 0 > r && (r += 2 * Math.PI), o > 75 && (o = 75, f = 75 - 75 * Math.cos(r), p = 75 - 75 * Math.sin(r)), f = Math.round(f), p = Math.round(p)), t.is(".minicolors-grid") ? h.stop(!0).animate({
			top: p + "px",
			left: f + "px"
		}, g, c.animationEasing, function() {
			a(l, t)
		}) : h.stop(!0).animate({
			top: p + "px"
		}, g, c.animationEasing, function() {
			a(l, t)
		})
	}
	function a(t, e) {
		function n(t, e) {
			var n, i;
			return t.length && e ? (n = t.offset().left, i = t.offset().top, {
				x: n - e.offset().left + t.outerWidth() / 2,
				y: i - e.offset().top + t.outerHeight() / 2
			}) : null
		}
		var i, s, o, a, r, c, h, d = t.val(),
			p = t.attr("data-opacity"),
			g = t.parent(),
			v = t.data("minicolors-settings"),
			b = g.find(".minicolors-swatch"),
			y = g.find(".minicolors-grid"),
			w = g.find(".minicolors-slider"),
			x = g.find(".minicolors-opacity-slider"),
			C = y.find("[class$=-picker]"),
			S = w.find("[class$=-picker]"),
			D = x.find("[class$=-picker]"),
			k = n(C, y),
			_ = n(S, w),
			T = n(D, x);
		if (e.is(".minicolors-grid, .minicolors-slider")) {
			switch (v.control) {
			case "wheel":
				a = y.width() / 2 - k.x, r = y.height() / 2 - k.y, c = Math.sqrt(a * a + r * r), h = Math.atan2(r, a), 0 > h && (h += 2 * Math.PI), c > 75 && (c = 75, k.x = 69 - 75 * Math.cos(h), k.y = 69 - 75 * Math.sin(h)), s = f(c / .75, 0, 100), i = f(180 * h / Math.PI, 0, 360), o = f(100 - Math.floor(_.y * (100 / w.height())), 0, 100), d = m({
					h: i,
					s: s,
					b: o
				}), w.css("backgroundColor", m({
					h: i,
					s: s,
					b: 100
				}));
				break;
			case "saturation":
				i = f(parseInt(k.x * (360 / y.width()), 10), 0, 360), s = f(100 - Math.floor(_.y * (100 / w.height())), 0, 100), o = f(100 - Math.floor(k.y * (100 / y.height())), 0, 100), d = m({
					h: i,
					s: s,
					b: o
				}), w.css("backgroundColor", m({
					h: i,
					s: 100,
					b: o
				})), g.find(".minicolors-grid-inner").css("opacity", s / 100);
				break;
			case "brightness":
				i = f(parseInt(k.x * (360 / y.width()), 10), 0, 360), s = f(100 - Math.floor(k.y * (100 / y.height())), 0, 100), o = f(100 - Math.floor(_.y * (100 / w.height())), 0, 100), d = m({
					h: i,
					s: s,
					b: o
				}), w.css("backgroundColor", m({
					h: i,
					s: s,
					b: 100
				})), g.find(".minicolors-grid-inner").css("opacity", 1 - o / 100);
				break;
			default:
				i = f(360 - parseInt(_.y * (360 / w.height()), 10), 0, 360), s = f(Math.floor(k.x * (100 / y.width())), 0, 100), o = f(100 - Math.floor(k.y * (100 / y.height())), 0, 100), d = m({
					h: i,
					s: s,
					b: o
				}), y.css("backgroundColor", m({
					h: i,
					s: 100,
					b: 100
				}))
			}
			t.val(u(d, v.letterCase))
		}
		e.is(".minicolors-opacity-slider") && (p = v.opacity ? parseFloat(1 - T.y / x.height()).toFixed(2) : 1, v.opacity && t.attr("data-opacity", p)), b.find("SPAN").css({
			backgroundColor: d,
			opacity: p
		}), l(t, d, p)
	}
	function r(t, e) {
		var n, i, s, o, a, r, c, h = t.parent(),
			p = t.data("minicolors-settings"),
			g = h.find(".minicolors-swatch"),
			b = h.find(".minicolors-grid"),
			y = h.find(".minicolors-slider"),
			w = h.find(".minicolors-opacity-slider"),
			x = b.find("[class$=-picker]"),
			C = y.find("[class$=-picker]"),
			S = w.find("[class$=-picker]");
		switch (n = u(d(t.val(), !0), p.letterCase), n || (n = u(d(p.defaultValue, !0), p.letterCase)), i = v(n), e || t.val(n), p.opacity && (s = "" === t.attr("data-opacity") ? 1 : f(parseFloat(t.attr("data-opacity")).toFixed(2), 0, 1), isNaN(s) && (s = 1), t.attr("data-opacity", s), g.find("SPAN").css("opacity", s), a = f(w.height() - w.height() * s, 0, w.height()), S.css("top", a + "px")), g.find("SPAN").css("backgroundColor", n), p.control) {
		case "wheel":
			r = f(Math.ceil(.75 * i.s), 0, b.height() / 2), c = i.h * Math.PI / 180, o = f(75 - Math.cos(c) * r, 0, b.width()), a = f(75 - Math.sin(c) * r, 0, b.height()), x.css({
				top: a + "px",
				left: o + "px"
			}), a = 150 - i.b / (100 / b.height()), "" === n && (a = 0), C.css("top", a + "px"), y.css("backgroundColor", m({
				h: i.h,
				s: i.s,
				b: 100
			}));
			break;
		case "saturation":
			o = f(5 * i.h / 12, 0, 150), a = f(b.height() - Math.ceil(i.b / (100 / b.height())), 0, b.height()), x.css({
				top: a + "px",
				left: o + "px"
			}), a = f(y.height() - i.s * (y.height() / 100), 0, y.height()), C.css("top", a + "px"), y.css("backgroundColor", m({
				h: i.h,
				s: 100,
				b: i.b
			})), h.find(".minicolors-grid-inner").css("opacity", i.s / 100);
			break;
		case "brightness":
			o = f(5 * i.h / 12, 0, 150), a = f(b.height() - Math.ceil(i.s / (100 / b.height())), 0, b.height()), x.css({
				top: a + "px",
				left: o + "px"
			}), a = f(y.height() - i.b * (y.height() / 100), 0, y.height()), C.css("top", a + "px"), y.css("backgroundColor", m({
				h: i.h,
				s: i.s,
				b: 100
			})), h.find(".minicolors-grid-inner").css("opacity", 1 - i.b / 100);
			break;
		default:
			o = f(Math.ceil(i.s / (100 / b.width())), 0, b.width()), a = f(b.height() - Math.ceil(i.b / (100 / b.height())), 0, b.height()), x.css({
				top: a + "px",
				left: o + "px"
			}), a = f(y.height() - i.h / (360 / y.height()), 0, y.height()), C.css("top", a + "px"), b.css("backgroundColor", m({
				h: i.h,
				s: 100,
				b: 100
			}))
		}
		t.data("minicolors-initialized") && l(t, n, s)
	}
	function l(t, e, n) {
		var i = t.data("minicolors-settings"),
			s = t.data("minicolors-lastChange");
		s && s.hex === e && s.opacity === n || (t.data("minicolors-lastChange", {
			hex: e,
			opacity: n
		}), i.change && (i.changeDelay ? (clearTimeout(t.data("minicolors-changeTimeout")), t.data("minicolors-changeTimeout", setTimeout(function() {
			i.change.call(t.get(0), e, n)
		}, i.changeDelay))) : i.change.call(t.get(0), e, n)), t.trigger("change").trigger("input"))
	}
	function c(e) {
		var n = d(t(e).val(), !0),
			i = y(n),
			s = t(e).attr("data-opacity");
		return i ? (void 0 !== s && t.extend(i, {
			a: parseFloat(s)
		}), i) : null
	}
	function h(e, n) {
		var i = d(t(e).val(), !0),
			s = y(i),
			o = t(e).attr("data-opacity");
		return s ? (void 0 === o && (o = 1), n ? "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + parseFloat(o) + ")" : "rgb(" + s.r + ", " + s.g + ", " + s.b + ")") : null
	}
	function u(t, e) {
		return "uppercase" === e ? t.toUpperCase() : t.toLowerCase()
	}
	function d(t, e) {
		return t = t.replace(/[^A-F0-9]/gi, ""), 3 !== t.length && 6 !== t.length ? "" : (3 === t.length && e && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), "#" + t)
	}
	function f(t, e, n) {
		return e > t && (t = e), t > n && (t = n), t
	}
	function p(t) {
		var e = {},
			n = Math.round(t.h),
			i = Math.round(255 * t.s / 100),
			s = Math.round(255 * t.b / 100);
		if (0 === i) e.r = e.g = e.b = s;
		else {
			var o = s,
				a = (255 - i) * s / 255,
				r = (o - a) * (n % 60) / 60;
			360 === n && (n = 0), 60 > n ? (e.r = o, e.b = a, e.g = a + r) : 120 > n ? (e.g = o, e.b = a, e.r = o - r) : 180 > n ? (e.g = o, e.r = a, e.b = a + r) : 240 > n ? (e.b = o, e.r = a, e.g = o - r) : 300 > n ? (e.b = o, e.g = a, e.r = a + r) : 360 > n ? (e.r = o, e.g = a, e.b = o - r) : (e.r = 0, e.g = 0, e.b = 0)
		}
		return {
			r: Math.round(e.r),
			g: Math.round(e.g),
			b: Math.round(e.b)
		}
	}
	function g(e) {
		var n = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
		return t.each(n, function(t, e) {
			1 === e.length && (n[t] = "0" + e)
		}), "#" + n.join("")
	}
	function m(t) {
		return g(p(t))
	}
	function v(t) {
		var e = b(y(t));
		return 0 === e.s && (e.h = 360), e
	}
	function b(t) {
		var e = {
			h: 0,
			s: 0,
			b: 0
		},
			n = Math.min(t.r, t.g, t.b),
			i = Math.max(t.r, t.g, t.b),
			s = i - n;
		return e.b = i, e.s = 0 !== i ? 255 * s / i : 0, e.h = 0 !== e.s ? t.r === i ? (t.g - t.b) / s : t.g === i ? 2 + (t.b - t.r) / s : 4 + (t.r - t.g) / s : -1, e.h *= 60, e.h < 0 && (e.h += 360), e.s *= 100 / 255, e.b *= 100 / 255, e
	}
	function y(t) {
		return t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16), {
			r: t >> 16,
			g: (65280 & t) >> 8,
			b: 255 & t
		}
	}
	t.minicolors = {
		defaults: {
			animationSpeed: 50,
			animationEasing: "swing",
			change: null,
			changeDelay: 0,
			control: "hue",
			defaultValue: "",
			hide: null,
			hideSpeed: 100,
			inline: !1,
			letterCase: "lowercase",
			opacity: !1,
			position: "bottom left",
			show: null,
			showSpeed: 100,
			theme: "default"
		}
	}, t.extend(t.fn, {
		minicolors: function(o, a) {
			switch (o) {
			case "destroy":
				return t(this).each(function() {
					n(t(this))
				}), t(this);
			case "hide":
				return s(), t(this);
			case "opacity":
				return void 0 === a ? t(this).attr("data-opacity") : (t(this).each(function() {
					r(t(this).attr("data-opacity", a))
				}), t(this));
			case "rgbObject":
				return c(t(this), "rgbaObject" === o);
			case "rgbString":
			case "rgbaString":
				return h(t(this), "rgbaString" === o);
			case "settings":
				return void 0 === a ? t(this).data("minicolors-settings") : (t(this).each(function() {
					var e = t(this).data("minicolors-settings") || {};
					n(t(this)), t(this).minicolors(t.extend(!0, e, a))
				}), t(this));
			case "show":
				return i(t(this).eq(0)), t(this);
			case "value":
				return void 0 === a ? t(this).val() : (t(this).each(function() {
					r(t(this).val(a))
				}), t(this));
			default:
				return "create" !== o && (a = o), t(this).each(function() {
					e(t(this), a)
				}), t(this)
			}
		}
	}), t(document).on("mousedown.minicolors touchstart.minicolors", function(e) {
		t(e.target).parents().add(e.target).hasClass("minicolors") || s()
	}).on("mousedown.minicolors touchstart.minicolors", ".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider", function(e) {
		var n = t(this);
		e.preventDefault(), t(document).data("minicolors-target", n), o(n, e, !0)
	}).on("mousemove.minicolors touchmove.minicolors", function(e) {
		var n = t(document).data("minicolors-target");
		n && o(n, e)
	}).on("mouseup.minicolors touchend.minicolors", function() {
		t(this).removeData("minicolors-target")
	}).on("mousedown.minicolors touchstart.minicolors", ".minicolors-swatch", function(e) {
		var n = t(this).parent().find(".minicolors-input");
		e.preventDefault(), i(n)
	}).on("focus.minicolors", ".minicolors-input", function() {
		var e = t(this);
		e.data("minicolors-initialized") && i(e)
	}).on("blur.minicolors", ".minicolors-input", function() {
		var e = t(this),
			n = e.data("minicolors-settings");
		e.data("minicolors-initialized") && (e.val(d(e.val(), !0)), "" === e.val() && e.val(d(n.defaultValue, !0)), e.val(u(e.val(), n.letterCase)))
	}).on("keydown.minicolors", ".minicolors-input", function(e) {
		var n = t(this);
		if (n.data("minicolors-initialized")) switch (e.keyCode) {
		case 9:
			s();
			break;
		case 13:
		case 27:
			s(), n.blur()
		}
	}).on("keyup.minicolors", ".minicolors-input", function() {
		var e = t(this);
		e.data("minicolors-initialized") && r(e, !0)
	}).on("paste.minicolors", ".minicolors-input", function() {
		var e = t(this);
		e.data("minicolors-initialized") && setTimeout(function() {
			r(e, !0)
		}, 1)
	})
}(jQuery), function(t) {
	var e = {
		init: function(n) {
			return this.each(function() {
				e.destroy.call(this), this.opt = t.extend(!0, {}, t.fn.raty.defaults, n);
				var i = t(this),
					s = ["number", "readOnly", "score", "scoreName"];
				e._callback.call(this, s), this.opt.precision && e._adjustPrecision.call(this), this.opt.number = e._between(this.opt.number, 0, this.opt.numberMax), this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/"), this.stars = e._createStars.call(this), this.score = e._createScore.call(this), e._apply.call(this, this.opt.score);
				var o = this.opt.space ? 4 : 0,
					a = this.opt.width || this.opt.number * this.opt.size + this.opt.number * o;
				this.opt.cancel && (this.cancel = e._createCancel.call(this), a += this.opt.size + o), this.opt.readOnly ? e._lock.call(this) : (i.css("cursor", "pointer"), e._binds.call(this)), this.opt.width !== !1 && i.css("width", a), e._target.call(this, this.opt.score), i.data({
					settings: this.opt,
					raty: !0
				})
			})
		},
		_adjustPrecision: function() {
			this.opt.targetType = "score", this.opt.half = !0
		},
		_apply: function(t) {
			t && t > 0 && (t = e._between(t, 0, this.opt.number), this.score.val(t)), e._fill.call(this, t), t && e._roundStars.call(this, t)
		},
		_between: function(t, e, n) {
			return Math.min(Math.max(parseFloat(t), e), n)
		},
		_binds: function() {
			this.cancel && e._bindCancel.call(this), e._bindClick.call(this), e._bindOut.call(this), e._bindOver.call(this)
		},
		_bindCancel: function() {
			e._bindClickCancel.call(this), e._bindOutCancel.call(this), e._bindOverCancel.call(this)
		},
		_bindClick: function() {
			var e = this,
				n = t(e);
			e.stars.on("click.raty", function(t) {
				e.score.val(e.opt.half || e.opt.precision ? n.data("score") : this.alt), e.opt.click && e.opt.click.call(e, parseFloat(e.score.val()), t)
			})
		},
		_bindClickCancel: function() {
			var t = this;
			t.cancel.on("click.raty", function(e) {
				t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
			})
		},
		_bindOut: function() {
			var n = this;
			t(this).on("mouseleave.raty", function(t) {
				var i = parseFloat(n.score.val()) || void 0;
				e._apply.call(n, i), e._target.call(n, i, t), n.opt.mouseout && n.opt.mouseout.call(n, i, t)
			})
		},
		_bindOutCancel: function() {
			var e = this;
			e.cancel.on("mouseleave.raty", function(n) {
				t(this).attr("src", e.opt.path + e.opt.cancelOff), e.opt.mouseout && e.opt.mouseout.call(e, e.score.val() || null, n)
			})
		},
		_bindOverCancel: function() {
			var n = this;
			n.cancel.on("mouseover.raty", function(i) {
				t(this).attr("src", n.opt.path + n.opt.cancelOn), n.stars.attr("src", n.opt.path + n.opt.starOff), e._target.call(n, null, i), n.opt.mouseover && n.opt.mouseover.call(n, null)
			})
		},
		_bindOver: function() {
			var n = this,
				i = t(n),
				s = n.opt.half ? "mousemove.raty" : "mouseover.raty";
			n.stars.on(s, function(s) {
				var o = parseInt(this.alt, 10);
				if (n.opt.half) {
					var a = parseFloat((s.pageX - t(this).offset().left) / n.opt.size),
						r = a > .5 ? 1 : .5;
					o = o - 1 + r, e._fill.call(n, o), n.opt.precision && (o = o - r + a), e._roundStars.call(n, o), i.data("score", o)
				} else e._fill.call(n, o);
				e._target.call(n, o, s), n.opt.mouseover && n.opt.mouseover.call(n, o, s)
			})
		},
		_callback: function(t) {
			for (var e in t)"function" == typeof this.opt[t[e]] && (this.opt[t[e]] = this.opt[t[e]].call(this))
		},
		_createCancel: function() {
			var e = t(this),
				n = this.opt.path + this.opt.cancelOff,
				i = t("<img />", {
					src: n,
					alt: "x",
					title: this.opt.cancelHint,
					"class": "raty-cancel"
				});
			return "left" == this.opt.cancelPlace ? e.prepend("&#160;").prepend(i) : e.append("&#160;").append(i), i
		},
		_createScore: function() {
			return t("<input />", {
				type: "hidden",
				name: this.opt.scoreName
			}).appendTo(this)
		},
		_createStars: function() {
			for (var n = t(this), i = 1; i <= this.opt.number; i++) {
				var s = e._getHint.call(this, i),
					o = this.opt.score && this.opt.score >= i ? "starOn" : "starOff";
				o = this.opt.path + this.opt[o], t("<img />", {
					src: o,
					alt: i,
					title: s
				}).appendTo(this), this.opt.space && n.append(i < this.opt.number ? "&#160;" : "")
			}
			return n.children("img")
		},
		_error: function(e) {
			t(this).html(e), t.error(e)
		},
		_fill: function(t) {
			for (var e = this, n = 0, i = 1; i <= e.stars.length; i++) {
				var s = e.stars.eq(i - 1),
					o = e.opt.single ? i == t : t >= i;
				if (e.opt.iconRange && e.opt.iconRange.length > n) {
					var a = e.opt.iconRange[n],
						r = a.on || e.opt.starOn,
						l = a.off || e.opt.starOff,
						c = o ? r : l;
					i <= a.range && s.attr("src", e.opt.path + c), i == a.range && n++
				} else {
					var c = o ? "starOn" : "starOff";
					s.attr("src", this.opt.path + this.opt[c])
				}
			}
		},
		_getHint: function(t) {
			var e = this.opt.hints[t - 1];
			return "" === e ? "" : e || t
		},
		_lock: function() {
			var n = parseInt(this.score.val(), 10),
				i = n ? e._getHint.call(this, n) : this.opt.noRatedMsg;
			t(this).data("readonly", !0).css("cursor", "").attr("title", i), this.score.attr("readonly", "readonly"), this.stars.attr("title", i), this.cancel && this.cancel.hide()
		},
		_roundStars: function(t) {
			var e = (t - Math.floor(t)).toFixed(2);
			if (e > this.opt.round.down) {
				var n = "starOn";
				this.opt.halfShow && e < this.opt.round.up ? n = "starHalf" : e < this.opt.round.full && (n = "starOff"), this.stars.eq(Math.ceil(t) - 1).attr("src", this.opt.path + this.opt[n])
			}
		},
		_target: function(n, i) {
			if (this.opt.target) {
				var s = t(this.opt.target);
				0 === s.length && e._error.call(this, "Target selector invalid or missing!"), this.opt.targetFormat.indexOf("{score}") < 0 && e._error.call(this, 'Template "{score}" missing!');
				var o = i && "mouseover" == i.type;
				void 0 === n ? n = this.opt.targetText : null === n ? n = o ? this.opt.cancelHint : this.opt.targetText : ("hint" == this.opt.targetType ? n = e._getHint.call(this, Math.ceil(n)) : this.opt.precision && (n = parseFloat(n).toFixed(1)), o || this.opt.targetKeep || (n = this.opt.targetText)), n && (n = this.opt.targetFormat.toString().replace("{score}", n)), s.is(":input") ? s.val(n) : s.html(n)
			}
		},
		_unlock: function() {
			t(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"), this.score.removeAttr("readonly", "readonly");
			for (var n = 0; n < this.opt.number; n++) this.stars.eq(n).attr("title", e._getHint.call(this, n + 1));
			this.cancel && this.cancel.css("display", "")
		},
		cancel: function(n) {
			return this.each(function() {
				t(this).data("readonly") !== !0 && (e[n ? "click" : "score"].call(this, null), this.score.removeAttr("value"))
			})
		},
		click: function(n) {
			return t(this).each(function() {
				t(this).data("readonly") !== !0 && (e._apply.call(this, n), this.opt.click || e._error.call(this, 'You must add the "click: function(score, evt) { }" callback.'), this.opt.click.call(this, n, t.Event("click")), e._target.call(this, n))
			})
		},
		destroy: function() {
			return t(this).each(function() {
				var e = t(this),
					n = e.data("raw");
				n ? e.off(".raty").empty().css({
					cursor: n.style.cursor,
					width: n.style.width
				}).removeData("readonly") : e.data("raw", e.clone()[0])
			})
		},
		getScore: function() {
			var e, n = [];
			return t(this).each(function() {
				e = this.score.val(), n.push(e ? parseFloat(e) : void 0)
			}), n.length > 1 ? n : n[0]
		},
		readOnly: function(n) {
			return this.each(function() {
				var i = t(this);
				i.data("readonly") !== n && (n ? (i.off(".raty").children("img").off(".raty"), e._lock.call(this)) : (e._binds.call(this), e._unlock.call(this)), i.data("readonly", n))
			})
		},
		reload: function() {
			return e.set.call(this, {})
		},
		score: function() {
			return arguments.length ? e.setScore.apply(this, arguments) : e.getScore.call(this)
		},
		set: function(e) {
			return this.each(function() {
				var n = t(this),
					i = n.data("settings"),
					s = t.extend({}, i, e);
				n.raty(s)
			})
		},
		setScore: function(n) {
			return t(this).each(function() {
				t(this).data("readonly") !== !0 && (e._apply.call(this, n), e._target.call(this, n))
			})
		}
	};
	t.fn.raty = function(n) {
		return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist!") : e.init.apply(this, arguments)
	}, t.fn.raty.defaults = {
		cancel: !1,
		cancelHint: "Cancel this rating!",
		cancelOff: "cancel-off.png",
		cancelOn: "cancel-on.png",
		cancelPlace: "left",
		click: void 0,
		half: !1,
		halfShow: !0,
		hints: ["bad", "poor", "regular", "good", "gorgeous"],
		iconRange: void 0,
		mouseout: void 0,
		mouseover: void 0,
		noRatedMsg: "Not rated yet!",
		number: 5,
		numberMax: 20,
		path: "",
		precision: !1,
		readOnly: !1,
		round: {
			down: .25,
			full: .6,
			up: .76
		},
		score: void 0,
		scoreName: "score",
		single: !1,
		size: 16,
		space: !0,
		starHalf: "star-half.png",
		starOff: "star-off.png",
		starOn: "star-on.png",
		target: void 0,
		targetFormat: "{score}",
		targetKeep: !1,
		targetText: "",
		targetType: "hint",
		width: void 0
	}
}(jQuery), function(t) {
	t.extend(t.fn, {
		validate: function(e) {
			if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var n = t.data(this[0], "validator");
			return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
				n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
			}), this.submit(function(e) {
				function i() {
					var i;
					return n.settings.submitHandler ? (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), !1) : !0
				}
				return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
			})), n)
		},
		valid: function() {
			if (t(this[0]).is("form")) return this.validate().form();
			var e = !0,
				n = t(this[0].form).validate();
			return this.each(function() {
				e = e && n.element(this)
			}), e
		},
		removeAttrs: function(e) {
			var n = {},
				i = this;
			return t.each(e.split(/\s/), function(t, e) {
				n[e] = i.attr(e), i.removeAttr(e)
			}), n
		},
		rules: function(e, n) {
			var i = this[0];
			if (e) {
				var s = t.data(i.form, "validator").settings,
					o = s.rules,
					a = t.validator.staticRules(i);
				switch (e) {
				case "add":
					t.extend(a, t.validator.normalizeRule(n)), delete a.messages, o[i.name] = a, n.messages && (s.messages[i.name] = t.extend(s.messages[i.name], n.messages));
					break;
				case "remove":
					if (!n) return delete o[i.name], a;
					var r = {};
					return t.each(n.split(/\s/), function(t, e) {
						r[e] = a[e], delete a[e]
					}), r
				}
			}
			var l = t.validator.normalizeRules(t.extend({}, t.validator.classRules(i), t.validator.attributeRules(i), t.validator.dataRules(i), t.validator.staticRules(i)), i);
			if (l.required) {
				var c = l.required;
				delete l.required, l = t.extend({
					required: c
				}, l)
			}
			return l
		}
	}), t.extend(t.expr[":"], {
		blank: function(e) {
			return !t.trim("" + t(e).val())
		},
		filled: function(e) {
			return !!t.trim("" + t(e).val())
		},
		unchecked: function(e) {
			return !t(e).prop("checked")
		}
	}), t.validator = function(e, n) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
	}, t.validator.format = function(e, n) {
		return 1 === arguments.length ?
		function() {
			var n = t.makeArray(arguments);
			return n.unshift(e), t.validator.format.apply(this, n)
		} : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
			e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
				return n
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(e, n, i) {
				"radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
			},
			unhighlight: function(e, n, i) {
				"radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
			}
		},
		setDefaults: function(e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function e(e) {
					var n = t.data(this[0].form, "validator"),
						i = "on" + e.type.replace(/^validate/, "");
					n.settings[i] && n.settings[i].call(n, this[0], e)
				}
				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n = this.groups = {};
				t.each(this.settings.groups, function(e, i) {
					"string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
						n[i] = e
					})
				});
				var i = this.settings.rules;
				t.each(i, function(e, n) {
					i[e] = t.validator.normalizeRule(n)
				}), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(e) {
				e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
				var n = this.check(e) !== !1;
				return n ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
			},
			showErrors: function(e) {
				if (e) {
					t.extend(this.errorMap, e), this.errorList = [];
					for (var n in e) this.errorList.push({
						message: e[n],
						element: this.findByName(n)[0]
					});
					this.successList = t.grep(this.successList, function(t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e = 0;
				for (var n in t) e++;
				return e
			},
			hideErrors: function() {
				this.addWrapper(this.toHide).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var e = this,
					n = {};
				return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
					return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !e.objectLength(t(this).rules()) ? !1 : (n[this.name] = !0, !0)
				})
			},
			clean: function(e) {
				return t(e)[0]
			},
			errors: function() {
				var e = this.settings.errorClass.replace(" ", ".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			},
			reset: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(e) {
				var n = t(e).attr("type"),
					i = t(e).val();
				return "radio" === n || "checkbox" === n ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var n, i = t(e).rules(),
					s = !1,
					o = this.elementValue(e);
				for (var a in i) {
					var r = {
						method: a,
						parameters: i[a]
					};
					try {
						if (n = t.validator.methods[a].call(this, o, e, r.parameters), "dependency-mismatch" === n) {
							s = !0;
							continue
						}
						if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!n) return this.formatAndAdd(e, r), !1
					} catch (l) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", l), l
					}
				}
				return s ? void 0 : (this.objectLength(i) && this.successList.push(e), !0)
			},
			customDataMessage: function(e, n) {
				return t(e).data("msg-" + n.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + n.toLowerCase())
			},
			customMessage: function(t, e) {
				var n = this.settings.messages[t];
				return n && (n.constructor === String ? n : n[e])
			},
			findDefined: function() {
				for (var t = 0; arguments.length > t; t++) if (void 0 !== arguments[t]) return arguments[t];
				return void 0
			},
			defaultMessage: function(e, n) {
				return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
			},
			formatAndAdd: function(e, n) {
				var i = this.defaultMessage(e, n.method),
					s = /\$?\{(\d+)\}/g;
				"function" == typeof i ? i = i.call(this, n.parameters, e) : s.test(i) && (i = t.validator.format(i.replace(s, "{$1}"), n.parameters)), this.errorList.push({
					message: i,
					element: e
				}), this.errorMap[e.name] = i, this.submitted[e.name] = i
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				var t, e;
				for (t = 0; this.errorList[t]; t++) {
					var n = this.errorList[t];
					this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return t(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(e, n) {
				var i = this.errorsFor(e);
				i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, e)), this.toShow = this.toShow.add(i)
			},
			errorsFor: function(e) {
				var n = this.idOrName(e);
				return this.errors().filter(function() {
					return t(this).attr("for") === n
				})
			},
			idOrName: function(t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(e) {
				return t(this.currentForm).find("[name='" + e + "']")
			},
			getLength: function(e, n) {
				switch (n.nodeName.toLowerCase()) {
				case "select":
					return t("option:selected", n).length;
				case "input":
					if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
				}
				return e.length
			},
			depend: function(t, e) {
				return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
			},
			dependTypes: {
				"boolean": function(t) {
					return t
				},
				string: function(e, n) {
					return !!t(e, n.form).length
				},
				"function": function(t, e) {
					return t(e)
				}
			},
			optional: function(e) {
				var n = this.elementValue(e);
				return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
			},
			stopRequest: function(e, n) {
				this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(e) {
				return t.data(e, "previousValue") || t.data(e, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(e, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(e, n) {
			e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
		},
		classRules: function(e) {
			var n = {},
				i = t(e).attr("class");
			return i && t.each(i.split(" "), function() {
				this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
			}), n
		},
		attributeRules: function(e) {
			var n = {},
				i = t(e),
				s = i[0].getAttribute("type");
			for (var o in t.validator.methods) {
				var a;
				"required" === o ? (a = i.get(0).getAttribute(o), "" === a && (a = !0), a = !! a) : a = i.attr(o), /min|max/.test(o) && (null === s || /number|range|text/.test(s)) && (a = Number(a)), a ? n[o] = a : s === o && "range" !== s && (n[o] = !0)
			}
			return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
		},
		dataRules: function(e) {
			var n, i, s = {},
				o = t(e);
			for (n in t.validator.methods) i = o.data("rule-" + n.toLowerCase()), void 0 !== i && (s[n] = i);
			return s
		},
		staticRules: function(e) {
			var n = {},
				i = t.data(e.form, "validator");
			return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
		},
		normalizeRules: function(e, n) {
			return t.each(e, function(i, s) {
				if (s === !1) return void delete e[i];
				if (s.param || s.depends) {
					var o = !0;
					switch (typeof s.depends) {
					case "string":
						o = !! t(s.depends, n.form).length;
						break;
					case "function":
						o = s.depends.call(n, n)
					}
					o ? e[i] = void 0 !== s.param ? s.param : !0 : delete e[i]
				}
			}), t.each(e, function(i, s) {
				e[i] = t.isFunction(s) ? s(n) : s
			}), t.each(["minlength", "maxlength"], function() {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function() {
				var n;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
			}), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function(e) {
			if ("string" == typeof e) {
				var n = {};
				t.each(e.split(/\s/), function() {
					n[this] = !0
				}), e = n
			}
			return e
		},
		addMethod: function(e, n, i) {
			t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], 3 > n.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function(e, n, i) {
				if (!this.depend(i, n)) return "dependency-mismatch";
				if ("select" === n.nodeName.toLowerCase()) {
					var s = t(n).val();
					return s && s.length > 0
				}
				return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
			},
			email: function(t, e) {
				return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
			},
			date: function(t, e) {
				return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
			},
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			creditcard: function(t, e) {
				if (this.optional(e)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(t)) return !1;
				var n = 0,
					i = 0,
					s = !1;
				t = t.replace(/\D/g, "");
				for (var o = t.length - 1; o >= 0; o--) {
					var a = t.charAt(o);
					i = parseInt(a, 10), s && (i *= 2) > 9 && (i -= 9), n += i, s = !s
				}
				return 0 === n % 10
			},
			minlength: function(e, n, i) {
				var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
				return this.optional(n) || s >= i
			},
			maxlength: function(e, n, i) {
				var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
				return this.optional(n) || i >= s
			},
			rangelength: function(e, n, i) {
				var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
				return this.optional(n) || s >= i[0] && i[1] >= s
			},
			min: function(t, e, n) {
				return this.optional(e) || t >= n
			},
			max: function(t, e, n) {
				return this.optional(e) || n >= t
			},
			range: function(t, e, n) {
				return this.optional(e) || t >= n[0] && n[1] >= t
			},
			equalTo: function(e, n, i) {
				var s = t(i);
				return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
					t(n).valid()
				}), e === s.val()
			},
			remote: function(e, n, i) {
				if (this.optional(n)) return "dependency-mismatch";
				var s = this.previousValue(n);
				if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), s.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = s.message, i = "string" == typeof i && {
					url: i
				} || i, s.old === e) return s.valid;
				s.old = e;
				var o = this;
				this.startRequest(n);
				var a = {};
				return a[n.name] = e, t.ajax(t.extend(!0, {
					url: i,
					mode: "abort",
					port: "validate" + n.name,
					dataType: "json",
					data: a,
					success: function(i) {
						o.settings.messages[n.name].remote = s.originalMessage;
						var a = i === !0 || "true" === i;
						if (a) {
							var r = o.formSubmitted;
							o.prepareElement(n), o.formSubmitted = r, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
						} else {
							var l = {},
								c = i || o.defaultMessage(n, "remote");
							l[n.name] = s.message = t.isFunction(c) ? c(e) : c, o.invalid[n.name] = !0, o.showErrors(l)
						}
						s.valid = a, o.stopRequest(n, a)
					}
				}, i)), "pending"
			}
		}
	}), t.format = t.validator.format
}(jQuery), function(t) {
	var e = {};
	if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, n, i) {
		var s = t.port;
		"abort" === t.mode && (e[s] && e[s].abort(), e[s] = i)
	});
	else {
		var n = t.ajax;
		t.ajax = function(i) {
			var s = ("mode" in i ? i : t.ajaxSettings).mode,
				o = ("port" in i ? i : t.ajaxSettings).port;
			return "abort" === s ? (e[o] && e[o].abort(), e[o] = n.apply(this, arguments), e[o]) : n.apply(this, arguments)
		}
	}
}(jQuery), function(t) {
	t.extend(t.fn, {
		validateDelegate: function(e, n, i) {
			return this.bind(n, function(n) {
				var s = t(n.target);
				return s.is(e) ? i.apply(s, arguments) : void 0
			})
		}
	})
}(jQuery), function() {
	var t, e, n, i, s = [].slice,
		o = {}.hasOwnProperty,
		a = function(t, e) {
			function n() {
				this.constructor = t
			}
			for (var i in e) o.call(e, i) && (t[i] = e[i]);
			return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
		},
		r = function(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		},
		l = [].indexOf ||
	function(t) {
		for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
		return -1
	};
	e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
		function t() {}
		return t.prototype.on = function(t, e) {
			return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e)
		}, t.prototype.fire = function() {
			var t, e, n, i, o, a, r;
			if (n = arguments[0], t = 2 <= arguments.length ? s.call(arguments, 1) : [], null != this.handlers && null != this.handlers[n]) {
				for (a = this.handlers[n], r = [], i = 0, o = a.length; o > i; i++) e = a[i], r.push(e.apply(null, t));
				return r
			}
		}, t
	}(), e.commas = function(t) {
		var e, n, i, s;
		return null != t ? (i = 0 > t ? "-" : "", e = Math.abs(t), n = Math.floor(e).toFixed(0), i += n.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), s = e.toString(), s.length > n.length && (i += s.slice(n.length)), i) : "-"
	}, e.pad2 = function(t) {
		return (10 > t ? "0" : "") + t
	}, e.Grid = function(n) {
		function i(e) {
			var n = this;
			if (this.el = t("string" == typeof e.element ? document.getElementById(e.element) : e.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
			"static" === this.el.css("position") && this.el.css("position", "relative"), this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), "string" == typeof this.options.units && (this.options.postUnits = e.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) {
				var e;
				return e = n.el.offset(), n.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
			}), this.el.bind("mouseout", function() {
				return n.fire("hoverout")
			}), this.el.bind("touchstart touchmove touchend", function(t) {
				var e, i;
				return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = n.el.offset(), n.fire("hover", i.pageX - e.left, i.pageY - e.top), i
			}), this.postInit && this.postInit()
		}
		return a(i, n), i.prototype.gridDefaults = {
			dateFormat: null,
			axes: !0,
			grid: !0,
			gridLineColor: "#aaa",
			gridStrokeWidth: .5,
			gridTextColor: "#888",
			gridTextSize: 12,
			hideHover: !1,
			yLabelFormat: null,
			numLines: 5,
			padding: 25,
			parseTime: !0,
			postUnits: "",
			preUnits: "",
			ymax: "auto",
			ymin: "auto 0",
			goals: [],
			goalStrokeWidth: 1,
			goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
			events: [],
			eventStrokeWidth: 1,
			eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"]
		}, i.prototype.setData = function(t, n) {
			var i, s, o, a, r, l, c, h, u, d, f, p;
			return null == n && (n = !0), null == t || 0 === t.length ? (this.data = [], this.raphael.clear(), null != this.hover && this.hover.hide(), void 0) : (d = this.cumulative ? 0 : null, f = this.cumulative ? 0 : null, this.options.goals.length > 0 && (r = Math.min.apply(null, this.options.goals), a = Math.max.apply(null, this.options.goals), f = null != f ? Math.min(f, r) : r, d = null != d ? Math.max(d, a) : a), this.data = function() {
				var n, i, a;
				for (a = [], o = n = 0, i = t.length; i > n; o = ++n) c = t[o], l = {}, l.label = c[this.options.xkey], this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = new Date(l.label).toString())) : l.x = o, h = 0, l.y = function() {
					var t, e, n, i;
					for (n = this.options.ykeys, i = [], s = t = 0, e = n.length; e > t; s = ++t) u = n[s], p = c[u], "string" == typeof p && (p = parseFloat(p)), null != p && "number" != typeof p && (p = null), null != p && (this.cumulative ? h += p : null != d ? (d = Math.max(p, d), f = Math.min(p, f)) : d = f = p), this.cumulative && null != h && (d = Math.max(h, d), f = Math.min(h, f)), i.push(p);
					return i
				}.call(this), a.push(l);
				return a
			}.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
				return (t.x > e.x) - (e.x > t.x)
			})), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.parseTime && this.options.events.length > 0 && (this.events = function() {
				var t, n, s, o;
				for (s = this.options.events, o = [], t = 0, n = s.length; n > t; t++) i = s[t], o.push(e.parseDate(i));
				return o
			}.call(this), this.xmax = Math.max(this.xmax, Math.max.apply(null, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(null, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", f), this.ymax = this.yboundary("max", d), this.ymin === this.ymax && (f && (this.ymin -= 1), this.ymax += 1), this.yInterval = (this.ymax - this.ymin) / (this.options.numLines - 1), this.precision = this.yInterval > 0 && this.yInterval < 1 ? -Math.floor(Math.log(this.yInterval) / Math.log(10)) : 0, this.dirty = !0, n ? this.redraw() : void 0)
		}, i.prototype.yboundary = function(t, e) {
			var n, i;
			return n = this.options["y" + t], "string" == typeof n ? "auto" === n.slice(0, 4) ? n.length > 5 ? (i = parseInt(n.slice(5), 10), null == e ? i : Math[t](e, i)) : null != e ? e : 0 : parseInt(n, 10) : n
		}, i.prototype._calc = function() {
			var t, e, n;
			return n = this.el.width(), t = this.el.height(), (this.elementWidth !== n || this.elementHeight !== t || this.dirty) && (this.elementWidth = n, this.elementHeight = t, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, this.options.axes && (e = Math.max(this.measureText(this.yAxisFormat(this.ymin), this.options.gridTextSize).width, this.measureText(this.yAxisFormat(this.ymax), this.options.gridTextSize).width), this.left += e, this.bottom -= 1.5 * this.options.gridTextSize), this.width = this.right - this.left, this.height = this.bottom - this.top, this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0
		}, i.prototype.transY = function(t) {
			return this.bottom - (t - this.ymin) * this.dy
		}, i.prototype.transX = function(t) {
			return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
		}, i.prototype.redraw = function() {
			return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0
		}, i.prototype.measureText = function(t, e) {
			var n, i;
			return null == e && (e = 12), i = this.raphael.text(100, 100, t).attr("font-size", e), n = i.getBBox(), i.remove(), n
		}, i.prototype.yAxisFormat = function(t) {
			return this.yLabelFormat(t)
		}, i.prototype.yLabelFormat = function(t) {
			return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + e.commas(t) + this.options.postUnits
		}, i.prototype.updateHover = function(t, e) {
			var n, i;
			return n = this.hitTest(t, e), null != n ? (i = this.hover).update.apply(i, n) : void 0
		}, i.prototype.drawGrid = function() {
			var t, e, n, i, s, o, a, r;
			if (this.options.grid !== !1 || this.options.axes !== !1) {
				for (t = this.ymin, e = this.ymax, r = [], n = o = t, a = this.yInterval; e >= t ? e >= o : o >= e; n = o += a) i = parseFloat(n.toFixed(this.precision)), s = this.transY(i), this.options.axes && this.drawYAxisLabel(this.left - this.options.padding / 2, s, this.yAxisFormat(i)), r.push(this.options.grid ? this.drawGridLine("M" + this.left + "," + s + "H" + (this.left + this.width)) : void 0);
				return r
			}
		}, i.prototype.drawGoals = function() {
			var t, e, n, i, s, o, a;
			for (o = this.options.goals, a = [], n = i = 0, s = o.length; s > i; n = ++i) e = o[n], t = this.options.goalLineColors[n % this.options.goalLineColors.length], a.push(this.drawGoal(e, t));
			return a
		}, i.prototype.drawEvents = function() {
			var t, e, n, i, s, o, a;
			for (o = this.events, a = [], n = i = 0, s = o.length; s > i; n = ++i) e = o[n], t = this.options.eventLineColors[n % this.options.eventLineColors.length], a.push(this.drawEvent(e, t));
			return a
		}, i.prototype.drawGoal = function(t, e) {
			return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
		}, i.prototype.drawEvent = function(t, e) {
			return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
		}, i.prototype.drawYAxisLabel = function(t, e, n) {
			return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
		}, i.prototype.drawGridLine = function(t) {
			return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
		}, i
	}(e.EventEmitter), e.parseDate = function(t) {
		var e, n, i, s, o, a, r, l, c, h, u;
		return "number" == typeof t ? t : (n = t.match(/^(\d+) Q(\d)$/), s = t.match(/^(\d+)-(\d+)$/), o = t.match(/^(\d+)-(\d+)-(\d+)$/), r = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), c = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), n ? new Date(parseInt(n[1], 10), 3 * parseInt(n[2], 10) - 1, 1).getTime() : s ? new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, 1).getTime() : o ? new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime() : r ? (h = new Date(parseInt(r[1], 10), 0, 1), 4 !== h.getDay() && h.setMonth(0, 1 + (4 - h.getDay() + 7) % 7), h.getTime() + 6048e5 * parseInt(r[2], 10)) : l ? l[6] ? (a = 0, "Z" !== l[6] && (a = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (a = 0 - a)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + a)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : c ? (u = parseFloat(c[6]), e = Math.floor(u), i = Math.round(1e3 * (u - e)), c[8] ? (a = 0, "Z" !== c[8] && (a = 60 * parseInt(c[10], 10) + parseInt(c[11], 10), "+" === c[9] && (a = 0 - a)), Date.UTC(parseInt(c[1], 10), parseInt(c[2], 10) - 1, parseInt(c[3], 10), parseInt(c[4], 10), parseInt(c[5], 10) + a, e, i)) : new Date(parseInt(c[1], 10), parseInt(c[2], 10) - 1, parseInt(c[3], 10), parseInt(c[4], 10), parseInt(c[5], 10), e, i).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
	}, e.Hover = function() {
		function n(n) {
			null == n && (n = {}), this.options = t.extend({}, e.Hover.defaults, n), this.el = t("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
		}
		return n.defaults = {
			"class": "morris-hover morris-default-style"
		}, n.prototype.update = function(t, e, n) {
			return this.html(t), this.show(), this.moveTo(e, n)
		}, n.prototype.html = function(t) {
			return this.el.html(t)
		}, n.prototype.moveTo = function(t, e) {
			var n, i, s, o, a, r;
			return a = this.options.parent.innerWidth(), o = this.options.parent.innerHeight(), i = this.el.outerWidth(), n = this.el.outerHeight(), s = Math.min(Math.max(0, t - i / 2), a - i), null != e ? (r = e - n - 10, 0 > r && (r = e + 10, r + n > o && (r = o / 2 - n / 2))) : r = o / 2 - n / 2, this.el.css({
				left: s + "px",
				top: r + "px"
			})
		}, n.prototype.show = function() {
			return this.el.show()
		}, n.prototype.hide = function() {
			return this.el.hide()
		}, n
	}(), e.Line = function(t) {
		function n(t) {
			return this.hilight = r(this.hilight, this), this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this instanceof e.Line ? void n.__super__.constructor.call(this, t) : new e.Line(t)
		}
		return a(n, t), n.prototype.init = function() {
			return this.pointGrow = Raphael.animation({
				r: this.options.pointSize + 3
			}, 25, "linear"), this.pointShrink = Raphael.animation({
				r: this.options.pointSize
			}, 25, "linear"), "always" !== this.options.hideHover ? (this.hover = new e.Hover({
				parent: this.el
			}), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut)) : void 0
		}, n.prototype.defaults = {
			lineWidth: 3,
			pointSize: 4,
			lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
			pointWidths: [1],
			pointStrokeColors: ["#ffffff"],
			pointFillColors: [],
			smooth: !0,
			xLabels: "auto",
			xLabelFormat: null,
			xLabelMargin: 50,
			continuousLine: !0,
			hideHover: !1
		}, n.prototype.calc = function() {
			return this.calcPoints(), this.generatePaths()
		}, n.prototype.calcPoints = function() {
			var t, e, n, i, s, o;
			for (s = this.data, o = [], n = 0, i = s.length; i > n; n++) t = s[n], t._x = this.transX(t.x), t._y = function() {
				var n, i, s, o;
				for (s = t.y, o = [], n = 0, i = s.length; i > n; n++) e = s[n], o.push(null != e ? this.transY(e) : e);
				return o
			}.call(this), o.push(t._ymax = Math.min.apply(null, [this.bottom].concat(function() {
				var n, i, s, o;
				for (s = t._y, o = [], n = 0, i = s.length; i > n; n++) e = s[n], null != e && o.push(e);
				return o
			}())));
			return o
		}, n.prototype.hitTest = function(t) {
			var e, n, i, s, o;
			if (0 === this.data.length) return null;
			for (o = this.data.slice(1), e = i = 0, s = o.length; s > i && (n = o[e], !(t < (n._x + this.data[e]._x) / 2)); e = ++i);
			return e
		}, n.prototype.onHoverMove = function(t, e) {
			var n;
			return n = this.hitTest(t, e), this.displayHoverForRow(n)
		}, n.prototype.onHoverOut = function() {
			return "auto" === this.options.hideHover ? this.displayHoverForRow(null) : void 0
		}, n.prototype.displayHoverForRow = function(t) {
			var e;
			return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
		}, n.prototype.hoverContentForRow = function(t) {
			var e, n, i, s, o, a, r;
			if (i = this.data[t], "function" == typeof this.options.hoverCallback) e = this.options.hoverCallback(t, this.options);
			else for (e = "<div class='morris-hover-row-label'>" + i.label + "</div>", r = i.y, n = o = 0, a = r.length; a > o; n = ++o) s = r[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(s) + "\n</div>";
			return [e, i._x, i._ymax]
		}, n.prototype.generatePaths = function() {
			var t, n, i, s, o;
			return this.paths = function() {
				var a, r, c, h;
				for (h = [], i = a = 0, r = this.options.ykeys.length; r >= 0 ? r > a : a > r; i = r >= 0 ? ++a : --a) o = this.options.smooth === !0 || (c = this.options.ykeys[i], l.call(this.options.smooth, c) >= 0), n = function() {
					var t, e, n, o;
					for (n = this.data, o = [], t = 0, e = n.length; e > t; t++) s = n[t], void 0 !== s._y[i] && o.push({
						x: s._x,
						y: s._y[i]
					});
					return o
				}.call(this), this.options.continuousLine && (n = function() {
					var e, i, s;
					for (s = [], e = 0, i = n.length; i > e; e++) t = n[e], null !== t.y && s.push(t);
					return s
				}()), h.push(n.length > 1 ? e.Line.createPath(n, o, this.bottom) : null);
				return h
			}.call(this)
		}, n.prototype.draw = function() {
			return this.options.axes && this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1 ? this.displayHoverForRow(this.data.length - 1) : void 0
		}, n.prototype.drawXAxis = function() {
			var t, n, i, s, o, a, r, l, c, h = this;
			for (a = this.bottom + 1.25 * this.options.gridTextSize, s = null, t = function(t, e) {
				var n, i;
				return n = h.drawXAxisLabel(h.transX(e), a, t), i = n.getBBox(), (null == s || s >= i.x + i.width) && i.x >= 0 && i.x + i.width < h.el.width() ? s = i.x - h.options.xLabelMargin : n.remove()
			}, i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
				[this.data[0].label, this.data[0].x]
			] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
				var t, e, n, i;
				for (n = this.data, i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push([o.label, o.x]);
				return i
			}.call(this), i.reverse(), c = [], r = 0, l = i.length; l > r; r++) n = i[r], c.push(t(n[0], n[1]));
			return c
		}, n.prototype.drawSeries = function() {
			var t, e, n, i, s, o, a, r, l;
			for (e = s = a = this.options.ykeys.length - 1; 0 >= a ? 0 >= s : s >= 0; e = 0 >= a ? ++s : --s) n = this.paths[e], null !== n && this.drawLinePath(n, this.colorFor(i, e, "line"));
			for (this.seriesPoints = function() {
				var t, n, i;
				for (i = [], e = t = 0, n = this.options.ykeys.length; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t) i.push([]);
				return i
			}.call(this), l = [], e = o = r = this.options.ykeys.length - 1; 0 >= r ? 0 >= o : o >= 0; e = 0 >= r ? ++o : --o) l.push(function() {
				var n, s, o, a;
				for (o = this.data, a = [], n = 0, s = o.length; s > n; n++) i = o[n], t = null != i._y[e] ? this.drawLinePoint(i._x, i._y[e], this.options.pointSize, this.colorFor(i, e, "point"), e) : null, a.push(this.seriesPoints[e].push(t));
				return a
			}.call(this));
			return l
		}, n.createPath = function(t, n, i) {
			var s, o, a, r, l, c, h, u, d, f, p, g, m, v;
			for (h = "", n && (a = e.Line.gradients(t)), u = {
				y: null
			}, r = m = 0, v = t.length; v > m; r = ++m) s = t[r], null != s.y && (null != u.y ? n ? (o = a[r], c = a[r - 1], l = (s.x - u.x) / 4, d = u.x + l, p = Math.min(i, u.y + l * c), f = s.x - l, g = Math.min(i, s.y - l * o), h += "C" + d + "," + p + "," + f + "," + g + "," + s.x + "," + s.y) : h += "L" + s.x + "," + s.y : n && null == a[r] || (h += "M" + s.x + "," + s.y)), u = s;
			return h
		}, n.gradients = function(t) {
			var e, n, i, s, o, a, r, l;
			for (n = function(t, e) {
				return (t.y - e.y) / (t.x - e.x)
			}, l = [], i = a = 0, r = t.length; r > a; i = ++a) e = t[i], null != e.y ? (s = t[i + 1] || {
				y: null
			}, o = t[i - 1] || {
				y: null
			}, l.push(null != o.y && null != s.y ? n(o, s) : null != o.y ? n(o, e) : null != s.y ? n(e, s) : null)) : l.push(null);
			return l
		}, n.prototype.hilight = function(t) {
			var e, n, i, s, o;
			if (null !== this.prevHilight && this.prevHilight !== t) for (e = n = 0, s = this.seriesPoints.length - 1; s >= 0 ? s >= n : n >= s; e = s >= 0 ? ++n : --n) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrink);
			if (null !== t && this.prevHilight !== t) for (e = i = 0, o = this.seriesPoints.length - 1; o >= 0 ? o >= i : i >= o; e = o >= 0 ? ++i : --i) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrow);
			return this.prevHilight = t
		}, n.prototype.colorFor = function(t, e, n) {
			return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, n) : "point" === n ? this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] : this.options.lineColors[e % this.options.lineColors.length]
		}, n.prototype.drawXAxisLabel = function(t, e, n) {
			return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor)
		}, n.prototype.drawLinePath = function(t, e) {
			return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.options.lineWidth)
		}, n.prototype.drawLinePoint = function(t, e, n, i, s) {
			return this.raphael.circle(t, e, n).attr("fill", i).attr("stroke-width", this.strokeWidthForSeries(s)).attr("stroke", this.strokeForSeries(s))
		}, n.prototype.strokeWidthForSeries = function(t) {
			return this.options.pointWidths[t % this.options.pointWidths.length]
		}, n.prototype.strokeForSeries = function(t) {
			return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
		}, n
	}(e.Grid), e.labelSeries = function(n, i, s, o, a) {
		var r, l, c, h, u, d, f, p, g, m, v;
		if (c = 200 * (i - n) / s, l = new Date(n), f = e.LABEL_SPECS[o], void 0 === f) for (v = e.AUTO_LABEL_ORDER, g = 0, m = v.length; m > g; g++) if (h = v[g], d = e.LABEL_SPECS[h], c >= d.span) {
			f = d;
			break
		}
		for (void 0 === f && (f = e.LABEL_SPECS.second), a && (f = t.extend({}, f, {
			fmt: a
		})), r = f.start(l), u = [];
		(p = r.getTime()) <= i;) p >= n && u.push([f.fmt(r), p]), f.incr(r);
		return u
	}, n = function(t) {
		return {
			span: 60 * t * 1e3,
			start: function(t) {
				return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
			},
			fmt: function(t) {
				return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes())
			},
			incr: function(e) {
				return e.setMinutes(e.getMinutes() + t)
			}
		}
	}, i = function(t) {
		return {
			span: 1e3 * t,
			start: function(t) {
				return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
			},
			fmt: function(t) {
				return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds())
			},
			incr: function(e) {
				return e.setSeconds(e.getSeconds() + t)
			}
		}
	}, e.LABEL_SPECS = {
		decade: {
			span: 1728e8,
			start: function(t) {
				return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
			},
			fmt: function(t) {
				return "" + t.getFullYear()
			},
			incr: function(t) {
				return t.setFullYear(t.getFullYear() + 10)
			}
		},
		year: {
			span: 1728e7,
			start: function(t) {
				return new Date(t.getFullYear(), 0, 1)
			},
			fmt: function(t) {
				return "" + t.getFullYear()
			},
			incr: function(t) {
				return t.setFullYear(t.getFullYear() + 1)
			}
		},
		month: {
			span: 24192e5,
			start: function(t) {
				return new Date(t.getFullYear(), t.getMonth(), 1)
			},
			fmt: function(t) {
				return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1)
			},
			incr: function(t) {
				return t.setMonth(t.getMonth() + 1)
			}
		},
		day: {
			span: 864e5,
			start: function(t) {
				return new Date(t.getFullYear(), t.getMonth(), t.getDate())
			},
			fmt: function(t) {
				return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
			},
			incr: function(t) {
				return t.setDate(t.getDate() + 1)
			}
		},
		hour: n(60),
		"30min": n(30),
		"15min": n(15),
		"10min": n(10),
		"5min": n(5),
		minute: n(1),
		"30sec": i(30),
		"15sec": i(15),
		"10sec": i(10),
		"5sec": i(5),
		second: i(1)
	}, e.AUTO_LABEL_ORDER = ["decade", "year", "month", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], e.Area = function(t) {
		function n(t) {
			return this instanceof e.Area ? (this.cumulative = !0, void n.__super__.constructor.call(this, t)) : new e.Area(t)
		}
		return a(n, t), n.prototype.calcPoints = function() {
			var t, e, n, i, s, o, a;
			for (o = this.data, a = [], i = 0, s = o.length; s > i; i++) t = o[i], t._x = this.transX(t.x), e = 0, t._y = function() {
				var i, s, o, a;
				for (o = t.y, a = [], i = 0, s = o.length; s > i; i++) n = o[i], e += n || 0, a.push(this.transY(e));
				return a
			}.call(this), a.push(t._ymax = t._y[t._y.length - 1]);
			return a
		}, n.prototype.drawSeries = function() {
			var t, e, i, s;
			for (t = i = s = this.options.ykeys.length - 1; 0 >= s ? 0 >= i : i >= 0; t = 0 >= s ? ++i : --i) e = this.paths[t], null !== e && (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t)));
			return n.__super__.drawSeries.call(this)
		}, n.prototype.fillForSeries = function(t) {
			var e;
			return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, Math.min(255, .75 * e.s), Math.min(255, 1.25 * e.l))
		}, n.prototype.drawFilledPath = function(t, e) {
			return this.raphael.path(t).attr("fill", e).attr("stroke-width", 0)
		}, n
	}(e.Line), e.Bar = function(n) {
		function i(n) {
			return this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this instanceof e.Bar ? void i.__super__.constructor.call(this, t.extend({}, n, {
				parseTime: !1
			})) : new e.Bar(n)
		}
		return a(i, n), i.prototype.init = function() {
			return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new e.Hover({
				parent: this.el
			}), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut)) : void 0
		}, i.prototype.defaults = {
			barSizeRatio: .75,
			barGap: 3,
			barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
			xLabelMargin: 50
		}, i.prototype.calc = function() {
			var t;
			return this.calcBars(), this.options.hideHover === !1 ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0
		}, i.prototype.calcBars = function() {
			var t, e, n, i, s, o, a;
			for (o = this.data, a = [], t = i = 0, s = o.length; s > i; t = ++i) e = o[t], e._x = this.left + this.width * (t + .5) / this.data.length, a.push(e._y = function() {
				var t, i, s, o;
				for (s = e.y, o = [], t = 0, i = s.length; i > t; t++) n = s[t], o.push(null != n ? this.transY(n) : null);
				return o
			}.call(this));
			return a
		}, i.prototype.draw = function() {
			return this.options.axes && this.drawXAxis(), this.drawSeries()
		}, i.prototype.drawXAxis = function() {
			var t, e, n, i, s, o, a, r, l;
			for (o = this.bottom + 1.25 * this.options.gridTextSize, i = null, l = [], t = a = 0, r = this.data.length; r >= 0 ? r > a : a > r; t = r >= 0 ? ++a : --a) s = this.data[this.data.length - 1 - t], e = this.drawXAxisLabel(s._x, o, s.label), n = e.getBBox(), l.push((null == i || i >= n.x + n.width) && n.x >= 0 && n.x + n.width < this.el.width() ? i = n.x - this.options.xLabelMargin : e.remove());
			return l
		}, i.prototype.drawSeries = function() {
			var t, e, n, i, s, o, a, r, l, c, h, u, d, f;
			return n = this.width / this.options.data.length, r = null != this.options.stacked ? 1 : this.options.ykeys.length, t = (n * this.options.barSizeRatio - this.options.barGap * (r - 1)) / r, a = n * (1 - this.options.barSizeRatio) / 2, f = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
				var r, p, g, m;
				for (g = this.data, m = [], i = r = 0, p = g.length; p > r; i = ++r) l = g[i], s = 0, m.push(function() {
					var r, p, g, m;
					for (g = l._y, m = [], c = r = 0, p = g.length; p > r; c = ++r) d = g[c], null !== d ? (f ? (u = Math.min(d, f), e = Math.max(d, f)) : (u = d, e = this.bottom), o = this.left + i * n + a, this.options.stacked || (o += c * (t + this.options.barGap)), h = e - u, this.options.stacked && (u -= s), this.drawBar(o, u, t, h, this.colorFor(l, c, "bar")), m.push(s += h)) : m.push(null);
					return m
				}.call(this));
				return m
			}.call(this)
		}, i.prototype.colorFor = function(t, e, n) {
			var i, s;
			return "function" == typeof this.options.barColors ? (i = {
				x: t.x,
				y: t.y[e],
				label: t.label
			}, s = {
				index: e,
				key: this.options.ykeys[e],
				label: this.options.labels[e]
			}, this.options.barColors.call(this, i, s, n)) : this.options.barColors[e % this.options.barColors.length]
		}, i.prototype.hitTest = function(t) {
			return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
		}, i.prototype.onHoverMove = function(t, e) {
			var n, i;
			return n = this.hitTest(t, e), (i = this.hover).update.apply(i, this.hoverContentForRow(n))
		}, i.prototype.onHoverOut = function() {
			return "auto" === this.options.hideHover ? this.hover.hide() : void 0
		}, i.prototype.hoverContentForRow = function(t) {
			var e, n, i, s, o, a, r, l;
			if ("function" == typeof this.options.hoverCallback) e = this.options.hoverCallback(t, this.options);
			else for (i = this.data[t], e = "<div class='morris-hover-row-label'>" + i.label + "</div>", l = i.y, n = a = 0, r = l.length; r > a; n = ++a) o = l[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(o) + "\n</div>";
			return s = this.left + (t + .5) * this.width / this.data.length, [e, s]
		}, i.prototype.drawXAxisLabel = function(t, e, n) {
			var i;
			return i = this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("fill", this.options.gridTextColor)
		}, i.prototype.drawBar = function(t, e, n, i, s) {
			return this.raphael.rect(t, e, n, i).attr("fill", s).attr("stroke-width", 0)
		}, i
	}(e.Grid), e.Donut = function() {
		function n(n) {
			if (this.select = r(this.select, this), !(this instanceof e.Donut)) return new e.Donut(n);
			if (this.el = t("string" == typeof n.element ? document.getElementById(n.element) : n.element), this.options = t.extend({}, this.defaults, n), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
			void 0 !== n.data && 0 !== n.data.length && (this.data = n.data, this.redraw())
		}
		return n.prototype.defaults = {
			colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
			backgroundColor: "#FFFFFF",
			labelColor: "#000000",
			formatter: e.commas
		}, n.prototype.redraw = function() {
			var t, n, i, s, o, a, r, l, c, h, u, d, f, p, g, m, v, b, y, w, x, C, S;
			for (this.el.empty(), this.raphael = new Raphael(this.el[0]), n = this.el.width() / 2, i = this.el.height() / 2, d = (Math.min(n, i) - 10) / 3, u = 0, w = this.data, p = 0, v = w.length; v > p; p++) f = w[p], u += f.value;
			for (l = 5 / (2 * d), t = 1.9999 * Math.PI - l * this.data.length, a = 0, o = 0, this.segments = [], x = this.data, g = 0, b = x.length; b > g; g++) s = x[g], c = a + l + t * (s.value / u), h = new e.DonutSegment(n, i, 2 * d, d, a, c, this.options.colors[o % this.options.colors.length], this.options.backgroundColor, s, this.raphael), h.render(), this.segments.push(h), h.on("hover", this.select), a = c, o += 1;
			for (this.text1 = this.drawEmptyDonutLabel(n, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(n, i + 10, this.options.labelColor, 14), r = Math.max.apply(null, function() {
				var t, e, n, i;
				for (n = this.data, i = [], t = 0, e = n.length; e > t; t++) s = n[t], i.push(s.value);
				return i
			}.call(this)), o = 0, C = this.data, S = [], m = 0, y = C.length; y > m; m++) {
				if (s = C[m], s.value === r) {
					this.select(o);
					break
				}
				S.push(o += 1)
			}
			return S
		}, n.prototype.select = function(t) {
			var e, n, i, s, o;
			for (o = this.segments, i = 0, s = o.length; s > i; i++) e = o[i], e.deselect();
			return n = "number" == typeof t ? this.segments[t] : t, n.select(), this.setLabels(n.data.label, this.options.formatter(n.data.value, n.data))
		}, n.prototype.setLabels = function(t, e) {
			var n, i, s, o, a, r, l, c;
			return n = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, o = 1.8 * n, s = n / 2, i = n / 3, this.text1.attr({
				text: t,
				transform: ""
			}), a = this.text1.getBBox(), r = Math.min(o / a.width, s / a.height), this.text1.attr({
				transform: "S" + r + "," + r + "," + (a.x + a.width / 2) + "," + (a.y + a.height)
			}), this.text2.attr({
				text: e,
				transform: ""
			}), l = this.text2.getBBox(), c = Math.min(o / l.width, i / l.height), this.text2.attr({
				transform: "S" + c + "," + c + "," + (l.x + l.width / 2) + "," + l.y
			})
		}, n.prototype.drawEmptyDonutLabel = function(t, e, n, i, s) {
			var o;
			return o = this.raphael.text(t, e, "").attr("font-size", i).attr("fill", n), null != s && o.attr("font-weight", s), o
		}, n
	}(), e.DonutSegment = function(t) {
		function e(t, e, n, i, s, o, a, l, c, h) {
			this.cx = t, this.cy = e, this.inner = n, this.outer = i, this.color = a, this.backgroundColor = l, this.data = c, this.raphael = h, this.deselect = r(this.deselect, this), this.select = r(this.select, this), this.sin_p0 = Math.sin(s), this.cos_p0 = Math.cos(s), this.sin_p1 = Math.sin(o), this.cos_p1 = Math.cos(o), this.is_long = o - s > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
		}
		return a(e, t), e.prototype.calcArcPoints = function(t) {
			return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
		}, e.prototype.calcSegment = function(t, e) {
			var n, i, s, o, a, r, l, c, h, u;
			return h = this.calcArcPoints(t), n = h[0], s = h[1], i = h[2], o = h[3], u = this.calcArcPoints(e), a = u[0], l = u[1], r = u[2], c = u[3], "M" + n + "," + s + ("A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + o) + ("L" + r + "," + c) + ("A" + e + "," + e + ",0," + this.is_long + ",1," + a + "," + l) + "Z"
		}, e.prototype.calcArc = function(t) {
			var e, n, i, s, o;
			return o = this.calcArcPoints(t), e = o[0], i = o[1], n = o[2], s = o[3], "M" + e + "," + i + ("A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + s)
		}, e.prototype.render = function() {
			var t = this;
			return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
				return t.fire("hover", t)
			})
		}, e.prototype.drawDonutArc = function(t, e) {
			return this.raphael.path(t).attr({
				stroke: e,
				"stroke-width": 2,
				opacity: 0
			})
		}, e.prototype.drawDonutSegment = function(t, e, n, i) {
			return this.raphael.path(t).attr({
				fill: e,
				stroke: n,
				"stroke-width": 3
			}).hover(i)
		}, e.prototype.select = function() {
			return this.selected ? void 0 : (this.seg.animate({
				path: this.selectedPath
			}, 150, "<>"), this.arc.animate({
				opacity: 1
			}, 150, "<>"), this.selected = !0)
		}, e.prototype.deselect = function() {
			return this.selected ? (this.seg.animate({
				path: this.path
			}, 150, "<>"), this.arc.animate({
				opacity: 0
			}, 150, "<>"), this.selected = !1) : void 0
		}, e
	}(e.EventEmitter)
}.call(this), function() {
	var t, e, n, i, s, o, a;
	i = function(t, e) {
		var n, i, s, o;
		o = [];
		for (i in e.prototype) try {
			s = e.prototype[i], o.push(null == t[i] && "function" != typeof s ? t[i] = s : void 0)
		} catch (a) {
			n = a
		}
		return o
	}, t = {}, null == t.options && (t.options = {}), n = {
		checks: {
			xhr: {
				url: function() {
					return ""
				}
			},
			image: {
				url: function() {
					return "/favicon.ico?_=" + Math.floor(1e9 * Math.random())
				}
			},
			active: "xhr"
		},
		checkOnLoad: !1,
		interceptRequests: !0,
		reconnect: !0
	}, s = function(t, e) {
		var n, i, s, o, a, r;
		for (n = t, o = e.split("."), i = a = 0, r = o.length; r > a && (s = o[i], n = n[s], "object" == typeof n); i = ++a);
		return i === o.length - 1 ? n : void 0
	}, t.getOption = function(e) {
		var i, o;
		return i = null != (o = s(t.options, e)) ? o : s(n, e), "function" == typeof i ? i() : i
	}, "function" == typeof window.addEventListener && window.addEventListener("online", function() {
		return setTimeout(t.confirmUp, 100)
	}, !1), "function" == typeof window.addEventListener && window.addEventListener("offline", function() {
		return t.confirmDown()
	}, !1), t.state = "up", t.markUp = function() {
		return t.trigger("confirmed-up"), "up" !== t.state ? (t.state = "up", t.trigger("up")) : void 0
	}, t.markDown = function() {
		return t.trigger("confirmed-down"), "down" !== t.state ? (t.state = "down", t.trigger("down")) : void 0
	}, o = {}, t.on = function(e, n, i) {
		var s, a, r, l, c;
		if (a = e.split(" "), a.length > 1) {
			for (c = [], r = 0, l = a.length; l > r; r++) s = a[r], c.push(t.on(s, n, i));
			return c
		}
		return null == o[e] && (o[e] = []), o[e].push([i, n])
	}, t.off = function(t, e) {
		var n, i, s, a, r;
		if (null != o[t]) {
			if (e) {
				for (i = 0, r = []; i < o[t].length;) a = o[t][i], n = a[0], s = a[1], r.push(s === e ? o[t].splice(i, 1) : i++);
				return r
			}
			return o[t] = []
		}
	}, t.trigger = function(t) {
		var e, n, i, s, a, r, l;
		if (null != o[t]) {
			for (a = o[t], l = [], i = 0, s = a.length; s > i; i++) r = a[i], e = r[0], n = r[1], l.push(n.call(e));
			return l
		}
	}, e = function(t, e, n) {
		var i, s;
		return i = function() {
			return t.status && t.status < 12e3 ? e() : n()
		}, null === t.onprogress ? (t.addEventListener("error", n, !1), t.addEventListener("timeout", n, !1), t.addEventListener("load", i, !1)) : (s = t.onreadystatechange, t.onreadystatechange = function() {
			return 4 === t.readyState ? i() : 0 === t.readyState && n(), "function" == typeof s ? s.apply(null, arguments) : void 0
		})
	}, t.checks = {}, t.checks.xhr = function() {
		var n, i;
		i = new XMLHttpRequest, i.offline = !1, i.open("HEAD", t.getOption("checks.xhr.url"), !0), e(i, t.markUp, t.markDown);
		try {
			i.send()
		} catch (s) {
			n = s, t.markDown()
		}
		return i
	}, t.checks.image = function() {
		var e;
		return e = document.createElement("img"), e.onerror = t.markDown, e.onload = t.markUp, void(e.src = t.getOption("checks.image.url"))
	}, t.checks.down = t.markDown, t.checks.up = t.markUp, t.check = function() {
		return t.trigger("checking"), t.checks[t.getOption("checks.active")]()
	}, t.confirmUp = t.confirmDown = t.check, t.onXHR = function(t) {
		var e, n, s;
		return e = function(e, n) {
			var i;
			return i = e.open, e.open = function(s, o, a, r, l) {
				return t({
					type: s,
					url: o,
					async: a,
					flags: n,
					user: r,
					password: l,
					xhr: e
				}), i.apply(e, arguments)
			}
		}, s = window.XMLHttpRequest, window.XMLHttpRequest = function(t) {
			var n, i, o;
			return n = new s(t), e(n, t), o = n.setRequestHeader, n.headers = {}, n.setRequestHeader = function(t, e) {
				return n.headers[t] = e, o.call(n, t, e)
			}, i = n.overrideMimeType, n.overrideMimeType = function(t) {
				return n.mimeType = t, i.call(n, t)
			}, n
		}, i(window.XMLHttpRequest, s), null != window.XDomainRequest ? (n = window.XDomainRequest, window.XDomainRequest = function() {
			var t;
			return t = new n, e(t), t
		}, i(window.XDomainRequest, n)) : void 0
	}, a = function() {
		return t.getOption("interceptRequests") && t.onXHR(function(n) {
			var i;
			return i = n.xhr, i.offline !== !1 ? e(i, t.confirmUp, t.confirmDown) : void 0
		}), t.getOption("checkOnLoad") ? t.check() : void 0
	}, setTimeout(a, 0), window.Offline = t
}.call(this), function() {
	var t, e, n, i, s, o, a, r, l;
	if (!window.Offline) throw new Error("Offline Reconnect brought in without offline.js");
	i = Offline.reconnect = {}, o = null, s = function() {
		var t;
		return null != i.state && "inactive" !== i.state && Offline.trigger("reconnect:stopped"), i.state = "inactive", i.remaining = i.delay = null != (t = Offline.getOption("reconnect.initialDelay")) ? t : 3
	}, e = function() {
		var t, e;
		return t = null != (e = Offline.getOption("reconnect.delay")) ? e : Math.min(Math.ceil(1.5 * i.delay), 3600), i.remaining = i.delay = t
	}, a = function() {
		return "connecting" !== i.state ? (i.remaining -= 1, Offline.trigger("reconnect:tick"), 0 === i.remaining ? r() : void 0) : void 0
	}, r = function() {
		return "waiting" === i.state ? (Offline.trigger("reconnect:connecting"), i.state = "connecting", Offline.check()) : void 0
	}, t = function() {
		return Offline.getOption("reconnect") ? (s(), i.state = "waiting", Offline.trigger("reconnect:started"), o = setInterval(a, 1e3)) : void 0
	}, l = function() {
		return null != o && clearInterval(o), s()
	}, n = function() {
		return Offline.getOption("reconnect") && "connecting" === i.state ? (Offline.trigger("reconnect:failure"), i.state = "waiting", e()) : void 0
	}, i.tryNow = r, s(), Offline.on("down", t), Offline.on("confirmed-down", n), Offline.on("up", l)
}.call(this), function() {
	var t, e, n, i, s, o;
	if (!window.Offline) throw new Error("Requests module brought in without offline.js");
	n = [], o = !1, i = function(t) {
		return Offline.trigger("requests:capture"), "down" !== Offline.state && (o = !0), n.push(t)
	}, s = function(t) {
		var e, n, i, s, o, a, r, l, c;
		l = t.xhr, o = t.url, s = t.type, a = t.user, i = t.password, e = t.body, l.abort(), l.open(s, o, !0, a, i), c = l.headers;
		for (n in c) r = c[n], l.setRequestHeader(n, r);
		return l.mimeType && l.overrideMimeType(l.mimeType), l.send(e)
	}, t = function() {
		return n = []
	}, e = function() {
		var e, i, o, a, r, l;
		for (Offline.trigger("requests:flush"), o = {}, r = 0, l = n.length; l > r; r++) i = n[r], a = i.url.replace(/(\?|&)_=[0-9]+/, function(t, e) {
			return "?" === e ? e : ""
		}), o["" + i.type.toUpperCase() + " - " + a] = i;
		for (e in o) i = o[e], s(i);
		return t()
	}, setTimeout(function() {
		return Offline.getOption("requests") !== !1 ? (Offline.on("confirmed-up", function() {
			return o ? (o = !1, t()) : void 0
		}), Offline.on("up", e), Offline.on("down", function() {
			return o = !1
		}), Offline.onXHR(function(t) {
			var e, n, s, o, a;
			return s = t.xhr, e = t.async, s.offline !== !1 && (n = function() {
				return i(t)
			}, a = s.send, s.send = function(e) {
				return t.body = e, a.apply(s, arguments)
			}, e) ? null === s.onprogress ? (s.addEventListener("error", n, !1), s.addEventListener("timeout", n, !1)) : (o = s.onreadystatechange, s.onreadystatechange = function() {
				return 0 === s.readyState ? n() : 4 === s.readyState && (0 === s.status || s.status >= 12e3) && n(), "function" == typeof o ? o.apply(null, arguments) : void 0
			}) : void 0
		}), Offline.requests = {
			flush: e,
			clear: t
		}) : void 0
	}, 0)
}.call(this), function() {
	var t, e, n, i, s;
	if (!Offline) throw new Error("Offline simulate brought in without offline.js");
	for (s = ["up", "down"], n = 0, i = s.length; i > n; n++) t = s[n], (document.querySelector("script[data-simulate='" + t + "']") || localStorage.OFFLINE_SIMULATE === t) && (null == Offline.options && (Offline.options = {}), null == (e = Offline.options).checks && (e.checks = {}), Offline.options.checks.active = t)
}.call(this), function() {
	var t, e, n, i, s, o, a, r, l, c, h, u, d;
	if (!window.Offline) throw new Error("Offline UI brought in without offline.js");
	e = '<div class="offline-ui"><div class="offline-ui-content"></div></div>', t = '<a href class="offline-ui-retry"></a>', s = function(t) {
		var e;
		return e = document.createElement("div"), e.innerHTML = t, e.children[0]
	}, o = i = null, n = function(t) {
		return c(t), o.className += " " + t
	}, c = function(t) {
		return o.className = o.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ")
	}, r = {}, a = function(t, e) {
		return n(t), null != r[t] && clearTimeout(r[t]), r[t] = setTimeout(function() {
			return c(t), delete r[t]
		}, 1e3 * e)
	}, u = function(t) {
		var e, n, i, s;
		i = {
			day: 86400,
			hour: 3600,
			minute: 60,
			second: 1
		};
		for (n in i) if (e = i[n], t >= e) return s = Math.floor(t / e), [s, n];
		return ["now", ""]
	}, h = function() {
		var a, r;
		return o = s(e), document.body.appendChild(o), null != Offline.reconnect && Offline.getOption("reconnect") && (o.appendChild(s(t)), a = o.querySelector(".offline-ui-retry"), r = function(t) {
			return t.preventDefault(), Offline.reconnect.tryNow()
		}, null != a.addEventListener ? a.addEventListener("click", r, !1) : a.attachEvent("click", r)), n("offline-ui-" + Offline.state), i = o.querySelector(".offline-ui-content")
	}, l = function() {
		return h(), Offline.on("up", function() {
			return c("offline-ui-down"), n("offline-ui-up"), a("offline-ui-up-2s", 2), a("offline-ui-up-5s", 5)
		}), Offline.on("down", function() {
			return c("offline-ui-up"), n("offline-ui-down"), a("offline-ui-down-2s", 2), a("offline-ui-down-5s", 5)
		}), Offline.on("reconnect:connecting", function() {
			return n("offline-ui-connecting"), c("offline-ui-waiting")
		}), Offline.on("reconnect:tick", function() {
			var t, e, s;
			return n("offline-ui-waiting"), c("offline-ui-connecting"), s = u(Offline.reconnect.remaining), t = s[0], e = s[1], i.setAttribute("data-retry-in-value", t), i.setAttribute("data-retry-in-unit", e)
		}), Offline.on("reconnect:stopped", function() {
			return c("offline-ui-connecting offline-ui-waiting"), i.setAttribute("data-retry-in-value", null), i.setAttribute("data-retry-in-unit", null)
		}), Offline.on("reconnect:failure", function() {
			return a("offline-ui-reconnect-failed-2s", 2), a("offline-ui-reconnect-failed-5s", 5)
		}), Offline.on("reconnect:success", function() {
			return a("offline-ui-reconnect-succeeded-2s", 2), a("offline-ui-reconnect-succeeded-5s", 5)
		})
	}, "complete" === document.readyState ? l() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", l, !1) : (d = document.onreadystatechange, document.onreadystatechange = function() {
		return "complete" === document.readyState && l(), "function" == typeof d ? d.apply(null, arguments) : void 0
	})
}.call(this), !
function(t) {
	"undefined" == typeof t.fn.each2 && t.extend(t.fn, {
		each2: function(e) {
			for (var n = t([0]), i = -1, s = this.length; ++i < s && (n.context = n[0] = this[i]) && e.call(n[0], i, n) !== !1;);
			return this
		}
	})
}(jQuery), function(t, e) {
	"use strict";

	function n(t) {
		var e, n, i, s;
		if (!t || t.length < 1) return t;
		for (e = "", n = 0, i = t.length; i > n; n++) s = t.charAt(n), e += z[s] || s;
		return e
	}
	function i(t, e) {
		for (var n = 0, i = e.length; i > n; n += 1) if (o(t, e[n])) return n;
		return -1
	}
	function s() {
		var e = t(R);
		e.appendTo("body");
		var n = {
			width: e.width() - e[0].clientWidth,
			height: e.height() - e[0].clientHeight
		};
		return e.remove(), n
	}
	function o(t, n) {
		return t === n ? !0 : t === e || n === e ? !1 : null === t || null === n ? !1 : t.constructor === String ? t + "" == n + "" : n.constructor === String ? n + "" == t + "" : !1
	}
	function a(e, n) {
		var i, s, o;
		if (null === e || e.length < 1) return [];
		for (i = e.split(n), s = 0, o = i.length; o > s; s += 1) i[s] = t.trim(i[s]);
		return i
	}
	function r(t) {
		return t.outerWidth(!1) - t.width()
	}
	function l(n) {
		var i = "keyup-change-value";
		n.on("keydown", function() {
			t.data(n, i) === e && t.data(n, i, n.val())
		}), n.on("keyup", function() {
			var s = t.data(n, i);
			s !== e && n.val() !== s && (t.removeData(n, i), n.trigger("keyup-change"))
		})
	}
	function c(n) {
		n.on("mousemove", function(n) {
			var i = H;
			(i === e || i.x !== n.pageX || i.y !== n.pageY) && t(n.target).trigger("mousemove-filtered", n)
		})
	}
	function h(t, n, i) {
		i = i || e;
		var s;
		return function() {
			var e = arguments;
			window.clearTimeout(s), s = window.setTimeout(function() {
				n.apply(i, e)
			}, t)
		}
	}
	function u(t) {
		var e, n = !1;
		return function() {
			return n === !1 && (e = t(), n = !0), e
		}
	}
	function d(t, e) {
		var n = h(t, function(t) {
			e.trigger("scroll-debounced", t)
		});
		e.on("scroll", function(t) {
			i(t.target, e.get()) >= 0 && n(t)
		})
	}
	function f(t) {
		t[0] !== document.activeElement && window.setTimeout(function() {
			var e, n = t[0],
				i = t.val().length;
			t.focus(), t.is(":visible") && n === document.activeElement && (n.setSelectionRange ? n.setSelectionRange(i, i) : n.createTextRange && (e = n.createTextRange(), e.collapse(!1), e.select()))
		}, 0)
	}
	function p(e) {
		e = t(e)[0];
		var n = 0,
			i = 0;
		if ("selectionStart" in e) n = e.selectionStart, i = e.selectionEnd - n;
		else if ("selection" in document) {
			e.focus();
			var s = document.selection.createRange();
			i = document.selection.createRange().text.length, s.moveStart("character", -e.value.length), n = s.text.length - i
		}
		return {
			offset: n,
			length: i
		}
	}
	function g(t) {
		t.preventDefault(), t.stopPropagation()
	}
	function m(t) {
		t.preventDefault(), t.stopImmediatePropagation()
	}
	function v(e) {
		if (!L) {
			var n = e[0].currentStyle || window.getComputedStyle(e[0], null);
			L = t(document.createElement("div")).css({
				position: "absolute",
				left: "-10000px",
				top: "-10000px",
				display: "none",
				fontSize: n.fontSize,
				fontFamily: n.fontFamily,
				fontStyle: n.fontStyle,
				fontWeight: n.fontWeight,
				letterSpacing: n.letterSpacing,
				textTransform: n.textTransform,
				whiteSpace: "nowrap"
			}), L.attr("class", "select2-sizer"), t("body").append(L)
		}
		return L.text(e.val()), L.width()
	}
	function b(e, n, i) {
		var s, o, a = [];
		s = e.attr("class"), s && (s = "" + s, t(s.split(" ")).each2(function() {
			0 === this.indexOf("select2-") && a.push(this)
		})), s = n.attr("class"), s && (s = "" + s, t(s.split(" ")).each2(function() {
			0 !== this.indexOf("select2-") && (o = i(this), o && a.push(o))
		})), e.attr("class", a.join(" "))
	}
	function y(t, e, i, s) {
		var o = n(t.toUpperCase()).indexOf(n(e.toUpperCase())),
			a = e.length;
		return 0 > o ? void i.push(s(t)) : (i.push(s(t.substring(0, o))), i.push("<span class='select2-match'>"), i.push(s(t.substring(o, o + a))), i.push("</span>"), void i.push(s(t.substring(o + a, t.length))))
	}
	function w(t) {
		var e = {
			"\\": "&#92;",
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#47;"
		};
		return String(t).replace(/[&<>"'\/\\]/g, function(t) {
			return e[t]
		})
	}
	function x(n) {
		var i, s = null,
			o = n.quietMillis || 100,
			a = n.url,
			r = this;
		return function(l) {
			window.clearTimeout(i), i = window.setTimeout(function() {
				var i = n.data,
					o = a,
					c = n.transport || t.fn.select2.ajaxDefaults.transport,
					h = {
						type: n.type || "GET",
						cache: n.cache || !1,
						jsonpCallback: n.jsonpCallback || e,
						dataType: n.dataType || "json"
					},
					u = t.extend({}, t.fn.select2.ajaxDefaults.params, h);
				i = i ? i.call(r, l.term, l.page, l.context) : null, o = "function" == typeof o ? o.call(r, l.term, l.page, l.context) : o, s && s.abort(), n.params && (t.isFunction(n.params) ? t.extend(u, n.params.call(r)) : t.extend(u, n.params)), t.extend(u, {
					url: o,
					dataType: n.dataType,
					data: i,
					success: function(t) {
						var e = n.results(t, l.page);
						l.callback(e)
					}
				}), s = c.call(r, u)
			}, o)
		}
	}
	function C(e) {
		var n, i, s = e,
			o = function(t) {
				return "" + t.text
			};
		t.isArray(s) && (i = s, s = {
			results: i
		}), t.isFunction(s) === !1 && (i = s, s = function() {
			return i
		});
		var a = s();
		return a.text && (o = a.text, t.isFunction(o) || (n = a.text, o = function(t) {
			return t[n]
		})), function(e) {
			var n, i = e.term,
				a = {
					results: []
				};
			return "" === i ? void e.callback(s()) : (n = function(s, a) {
				var r, l;
				if (s = s[0], s.children) {
					r = {};
					for (l in s) s.hasOwnProperty(l) && (r[l] = s[l]);
					r.children = [], t(s.children).each2(function(t, e) {
						n(e, r.children)
					}), (r.children.length || e.matcher(i, o(r), s)) && a.push(r)
				} else e.matcher(i, o(s), s) && a.push(s)
			}, t(s().results).each2(function(t, e) {
				n(e, a.results)
			}), void e.callback(a))
		}
	}
	function S(n) {
		var i = t.isFunction(n);
		return function(s) {
			var o = s.term,
				a = {
					results: []
				};
			t(i ? n() : n).each(function() {
				var t = this.text !== e,
					n = t ? this.text : this;
				("" === o || s.matcher(o, n)) && a.results.push(t ? this : {
					id: this,
					text: this
				})
			}), s.callback(a)
		}
	}
	function D(e, n) {
		if (t.isFunction(e)) return !0;
		if (!e) return !1;
		throw new Error(n + " must be a function or a falsy value")
	}
	function k(e) {
		return t.isFunction(e) ? e() : e
	}
	function _(e) {
		var n = 0;
		return t.each(e, function(t, e) {
			e.children ? n += _(e.children) : n++
		}), n
	}
	function T(t, n, i, s) {
		var a, r, l, c, h, u = t,
			d = !1;
		if (!s.createSearchChoice || !s.tokenSeparators || s.tokenSeparators.length < 1) return e;
		for (;;) {
			for (r = -1, l = 0, c = s.tokenSeparators.length; c > l && (h = s.tokenSeparators[l], r = t.indexOf(h), !(r >= 0)); l++);
			if (0 > r) break;
			if (a = t.substring(0, r), t = t.substring(r + h.length), a.length > 0 && (a = s.createSearchChoice.call(this, a, n), a !== e && null !== a && s.id(a) !== e && null !== s.id(a))) {
				for (d = !1, l = 0, c = n.length; c > l; l++) if (o(s.id(a), s.id(n[l]))) {
					d = !0;
					break
				}
				d || i(a)
			}
		}
		return u !== t ? t : void 0
	}
	function M(e, n) {
		var i = function() {};
		return i.prototype = new e, i.prototype.constructor = i, i.prototype.parent = e.prototype, i.prototype = t.extend(i.prototype, n), i
	}
	if (window.Select2 === e) {
		var E, F, N, A, I, L, P, O, H = {
			x: 0,
			y: 0
		},
			E = {
				TAB: 9,
				ENTER: 13,
				ESC: 27,
				SPACE: 32,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				SHIFT: 16,
				CTRL: 17,
				ALT: 18,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				HOME: 36,
				END: 35,
				BACKSPACE: 8,
				DELETE: 46,
				isArrow: function(t) {
					switch (t = t.which ? t.which : t) {
					case E.LEFT:
					case E.RIGHT:
					case E.UP:
					case E.DOWN:
						return !0
					}
					return !1
				},
				isControl: function(t) {
					var e = t.which;
					switch (e) {
					case E.SHIFT:
					case E.CTRL:
					case E.ALT:
						return !0
					}
					return t.metaKey ? !0 : !1
				},
				isFunctionKey: function(t) {
					return t = t.which ? t.which : t, t >= 112 && 123 >= t
				}
			},
			R = "<div class='select2-measure-scrollbar'></div>",
			z = {
				"\u24b6": "A",
				\uff21: "A",
				\u00c0: "A",
				\u00c1: "A",
				\u00c2: "A",
				\u1ea6: "A",
				\u1ea4: "A",
				\u1eaa: "A",
				\u1ea8: "A",
				\u00c3: "A",
				\u0100: "A",
				\u0102: "A",
				\u1eb0: "A",
				\u1eae: "A",
				\u1eb4: "A",
				\u1eb2: "A",
				\u0226: "A",
				\u01e0: "A",
				\u00c4: "A",
				\u01de: "A",
				\u1ea2: "A",
				\u00c5: "A",
				\u01fa: "A",
				\u01cd: "A",
				\u0200: "A",
				\u0202: "A",
				\u1ea0: "A",
				\u1eac: "A",
				\u1eb6: "A",
				\u1e00: "A",
				\u0104: "A",
				\u023a: "A",
				\u2c6f: "A",
				\ua732: "AA",
				\u00c6: "AE",
				\u01fc: "AE",
				\u01e2: "AE",
				\ua734: "AO",
				\ua736: "AU",
				\ua738: "AV",
				\ua73a: "AV",
				\ua73c: "AY",
				"\u24b7": "B",
				\uff22: "B",
				\u1e02: "B",
				\u1e04: "B",
				\u1e06: "B",
				\u0243: "B",
				\u0182: "B",
				\u0181: "B",
				"\u24b8": "C",
				\uff23: "C",
				\u0106: "C",
				\u0108: "C",
				\u010a: "C",
				\u010c: "C",
				\u00c7: "C",
				\u1e08: "C",
				\u0187: "C",
				\u023b: "C",
				\ua73e: "C",
				"\u24b9": "D",
				\uff24: "D",
				\u1e0a: "D",
				\u010e: "D",
				\u1e0c: "D",
				\u1e10: "D",
				\u1e12: "D",
				\u1e0e: "D",
				\u0110: "D",
				\u018b: "D",
				\u018a: "D",
				\u0189: "D",
				\ua779: "D",
				\u01f1: "DZ",
				\u01c4: "DZ",
				\u01f2: "Dz",
				\u01c5: "Dz",
				"\u24ba": "E",
				\uff25: "E",
				\u00c8: "E",
				\u00c9: "E",
				\u00ca: "E",
				\u1ec0: "E",
				\u1ebe: "E",
				\u1ec4: "E",
				\u1ec2: "E",
				\u1ebc: "E",
				\u0112: "E",
				\u1e14: "E",
				\u1e16: "E",
				\u0114: "E",
				\u0116: "E",
				\u00cb: "E",
				\u1eba: "E",
				\u011a: "E",
				\u0204: "E",
				\u0206: "E",
				\u1eb8: "E",
				\u1ec6: "E",
				\u0228: "E",
				\u1e1c: "E",
				\u0118: "E",
				\u1e18: "E",
				\u1e1a: "E",
				\u0190: "E",
				\u018e: "E",
				"\u24bb": "F",
				\uff26: "F",
				\u1e1e: "F",
				\u0191: "F",
				\ua77b: "F",
				"\u24bc": "G",
				\uff27: "G",
				\u01f4: "G",
				\u011c: "G",
				\u1e20: "G",
				\u011e: "G",
				\u0120: "G",
				\u01e6: "G",
				\u0122: "G",
				\u01e4: "G",
				\u0193: "G",
				"\ua7a0": "G",
				\ua77d: "G",
				\ua77e: "G",
				"\u24bd": "H",
				\uff28: "H",
				\u0124: "H",
				\u1e22: "H",
				\u1e26: "H",
				\u021e: "H",
				\u1e24: "H",
				\u1e28: "H",
				\u1e2a: "H",
				\u0126: "H",
				\u2c67: "H",
				\u2c75: "H",
				"\ua78d": "H",
				"\u24be": "I",
				\uff29: "I",
				\u00cc: "I",
				\u00cd: "I",
				\u00ce: "I",
				\u0128: "I",
				\u012a: "I",
				\u012c: "I",
				\u0130: "I",
				\u00cf: "I",
				\u1e2e: "I",
				\u1ec8: "I",
				\u01cf: "I",
				\u0208: "I",
				\u020a: "I",
				\u1eca: "I",
				\u012e: "I",
				\u1e2c: "I",
				\u0197: "I",
				"\u24bf": "J",
				\uff2a: "J",
				\u0134: "J",
				\u0248: "J",
				"\u24c0": "K",
				\uff2b: "K",
				\u1e30: "K",
				\u01e8: "K",
				\u1e32: "K",
				\u0136: "K",
				\u1e34: "K",
				\u0198: "K",
				\u2c69: "K",
				\ua740: "K",
				\ua742: "K",
				\ua744: "K",
				"\ua7a2": "K",
				"\u24c1": "L",
				\uff2c: "L",
				\u013f: "L",
				\u0139: "L",
				\u013d: "L",
				\u1e36: "L",
				\u1e38: "L",
				\u013b: "L",
				\u1e3c: "L",
				\u1e3a: "L",
				\u0141: "L",
				\u023d: "L",
				\u2c62: "L",
				\u2c60: "L",
				\ua748: "L",
				\ua746: "L",
				\ua780: "L",
				\u01c7: "LJ",
				\u01c8: "Lj",
				"\u24c2": "M",
				\uff2d: "M",
				\u1e3e: "M",
				\u1e40: "M",
				\u1e42: "M",
				\u2c6e: "M",
				\u019c: "M",
				"\u24c3": "N",
				\uff2e: "N",
				\u01f8: "N",
				\u0143: "N",
				\u00d1: "N",
				\u1e44: "N",
				\u0147: "N",
				\u1e46: "N",
				\u0145: "N",
				\u1e4a: "N",
				\u1e48: "N",
				\u0220: "N",
				\u019d: "N",
				"\ua790": "N",
				"\ua7a4": "N",
				\u01ca: "NJ",
				\u01cb: "Nj",
				"\u24c4": "O",
				\uff2f: "O",
				\u00d2: "O",
				\u00d3: "O",
				\u00d4: "O",
				\u1ed2: "O",
				\u1ed0: "O",
				\u1ed6: "O",
				\u1ed4: "O",
				\u00d5: "O",
				\u1e4c: "O",
				\u022c: "O",
				\u1e4e: "O",
				\u014c: "O",
				\u1e50: "O",
				\u1e52: "O",
				\u014e: "O",
				\u022e: "O",
				\u0230: "O",
				\u00d6: "O",
				\u022a: "O",
				\u1ece: "O",
				\u0150: "O",
				\u01d1: "O",
				\u020c: "O",
				\u020e: "O",
				\u01a0: "O",
				\u1edc: "O",
				\u1eda: "O",
				\u1ee0: "O",
				\u1ede: "O",
				\u1ee2: "O",
				\u1ecc: "O",
				\u1ed8: "O",
				\u01ea: "O",
				\u01ec: "O",
				\u00d8: "O",
				\u01fe: "O",
				\u0186: "O",
				\u019f: "O",
				\ua74a: "O",
				\ua74c: "O",
				\u01a2: "OI",
				\ua74e: "OO",
				\u0222: "OU",
				"\u24c5": "P",
				\uff30: "P",
				\u1e54: "P",
				\u1e56: "P",
				\u01a4: "P",
				\u2c63: "P",
				\ua750: "P",
				\ua752: "P",
				\ua754: "P",
				"\u24c6": "Q",
				\uff31: "Q",
				\ua756: "Q",
				\ua758: "Q",
				\u024a: "Q",
				"\u24c7": "R",
				\uff32: "R",
				\u0154: "R",
				\u1e58: "R",
				\u0158: "R",
				\u0210: "R",
				\u0212: "R",
				\u1e5a: "R",
				\u1e5c: "R",
				\u0156: "R",
				\u1e5e: "R",
				\u024c: "R",
				\u2c64: "R",
				\ua75a: "R",
				"\ua7a6": "R",
				\ua782: "R",
				"\u24c8": "S",
				\uff33: "S",
				\u1e9e: "S",
				\u015a: "S",
				\u1e64: "S",
				\u015c: "S",
				\u1e60: "S",
				\u0160: "S",
				\u1e66: "S",
				\u1e62: "S",
				\u1e68: "S",
				\u0218: "S",
				\u015e: "S",
				"\u2c7e": "S",
				"\ua7a8": "S",
				\ua784: "S",
				"\u24c9": "T",
				\uff34: "T",
				\u1e6a: "T",
				\u0164: "T",
				\u1e6c: "T",
				\u021a: "T",
				\u0162: "T",
				\u1e70: "T",
				\u1e6e: "T",
				\u0166: "T",
				\u01ac: "T",
				\u01ae: "T",
				\u023e: "T",
				\ua786: "T",
				\ua728: "TZ",
				"\u24ca": "U",
				\uff35: "U",
				\u00d9: "U",
				\u00da: "U",
				\u00db: "U",
				\u0168: "U",
				\u1e78: "U",
				\u016a: "U",
				\u1e7a: "U",
				\u016c: "U",
				\u00dc: "U",
				\u01db: "U",
				\u01d7: "U",
				\u01d5: "U",
				\u01d9: "U",
				\u1ee6: "U",
				\u016e: "U",
				\u0170: "U",
				\u01d3: "U",
				\u0214: "U",
				\u0216: "U",
				\u01af: "U",
				\u1eea: "U",
				\u1ee8: "U",
				\u1eee: "U",
				\u1eec: "U",
				\u1ef0: "U",
				\u1ee4: "U",
				\u1e72: "U",
				\u0172: "U",
				\u1e76: "U",
				\u1e74: "U",
				\u0244: "U",
				"\u24cb": "V",
				\uff36: "V",
				\u1e7c: "V",
				\u1e7e: "V",
				\u01b2: "V",
				\ua75e: "V",
				\u0245: "V",
				\ua760: "VY",
				"\u24cc": "W",
				\uff37: "W",
				\u1e80: "W",
				\u1e82: "W",
				\u0174: "W",
				\u1e86: "W",
				\u1e84: "W",
				\u1e88: "W",
				\u2c72: "W",
				"\u24cd": "X",
				\uff38: "X",
				\u1e8a: "X",
				\u1e8c: "X",
				"\u24ce": "Y",
				\uff39: "Y",
				\u1ef2: "Y",
				\u00dd: "Y",
				\u0176: "Y",
				\u1ef8: "Y",
				\u0232: "Y",
				\u1e8e: "Y",
				\u0178: "Y",
				\u1ef6: "Y",
				\u1ef4: "Y",
				\u01b3: "Y",
				\u024e: "Y",
				\u1efe: "Y",
				"\u24cf": "Z",
				\uff3a: "Z",
				\u0179: "Z",
				\u1e90: "Z",
				\u017b: "Z",
				\u017d: "Z",
				\u1e92: "Z",
				\u1e94: "Z",
				\u01b5: "Z",
				\u0224: "Z",
				"\u2c7f": "Z",
				\u2c6b: "Z",
				\ua762: "Z",
				"\u24d0": "a",
				\uff41: "a",
				\u1e9a: "a",
				\u00e0: "a",
				\u00e1: "a",
				\u00e2: "a",
				\u1ea7: "a",
				\u1ea5: "a",
				\u1eab: "a",
				\u1ea9: "a",
				\u00e3: "a",
				\u0101: "a",
				\u0103: "a",
				\u1eb1: "a",
				\u1eaf: "a",
				\u1eb5: "a",
				\u1eb3: "a",
				\u0227: "a",
				\u01e1: "a",
				\u00e4: "a",
				\u01df: "a",
				\u1ea3: "a",
				\u00e5: "a",
				\u01fb: "a",
				\u01ce: "a",
				\u0201: "a",
				\u0203: "a",
				\u1ea1: "a",
				\u1ead: "a",
				\u1eb7: "a",
				\u1e01: "a",
				\u0105: "a",
				\u2c65: "a",
				\u0250: "a",
				\ua733: "aa",
				\u00e6: "ae",
				\u01fd: "ae",
				\u01e3: "ae",
				\ua735: "ao",
				\ua737: "au",
				\ua739: "av",
				\ua73b: "av",
				\ua73d: "ay",
				"\u24d1": "b",
				\uff42: "b",
				\u1e03: "b",
				\u1e05: "b",
				\u1e07: "b",
				\u0180: "b",
				\u0183: "b",
				\u0253: "b",
				"\u24d2": "c",
				\uff43: "c",
				\u0107: "c",
				\u0109: "c",
				\u010b: "c",
				\u010d: "c",
				\u00e7: "c",
				\u1e09: "c",
				\u0188: "c",
				\u023c: "c",
				\ua73f: "c",
				\u2184: "c",
				"\u24d3": "d",
				\uff44: "d",
				\u1e0b: "d",
				\u010f: "d",
				\u1e0d: "d",
				\u1e11: "d",
				\u1e13: "d",
				\u1e0f: "d",
				\u0111: "d",
				\u018c: "d",
				\u0256: "d",
				\u0257: "d",
				\ua77a: "d",
				\u01f3: "dz",
				\u01c6: "dz",
				"\u24d4": "e",
				\uff45: "e",
				\u00e8: "e",
				\u00e9: "e",
				\u00ea: "e",
				\u1ec1: "e",
				\u1ebf: "e",
				\u1ec5: "e",
				\u1ec3: "e",
				\u1ebd: "e",
				\u0113: "e",
				\u1e15: "e",
				\u1e17: "e",
				\u0115: "e",
				\u0117: "e",
				\u00eb: "e",
				\u1ebb: "e",
				\u011b: "e",
				\u0205: "e",
				\u0207: "e",
				\u1eb9: "e",
				\u1ec7: "e",
				\u0229: "e",
				\u1e1d: "e",
				\u0119: "e",
				\u1e19: "e",
				\u1e1b: "e",
				\u0247: "e",
				\u025b: "e",
				\u01dd: "e",
				"\u24d5": "f",
				\uff46: "f",
				\u1e1f: "f",
				\u0192: "f",
				\ua77c: "f",
				"\u24d6": "g",
				\uff47: "g",
				\u01f5: "g",
				\u011d: "g",
				\u1e21: "g",
				\u011f: "g",
				\u0121: "g",
				\u01e7: "g",
				\u0123: "g",
				\u01e5: "g",
				\u0260: "g",
				"\ua7a1": "g",
				\u1d79: "g",
				\ua77f: "g",
				"\u24d7": "h",
				\uff48: "h",
				\u0125: "h",
				\u1e23: "h",
				\u1e27: "h",
				\u021f: "h",
				\u1e25: "h",
				\u1e29: "h",
				\u1e2b: "h",
				\u1e96: "h",
				\u0127: "h",
				\u2c68: "h",
				\u2c76: "h",
				\u0265: "h",
				\u0195: "hv",
				"\u24d8": "i",
				\uff49: "i",
				\u00ec: "i",
				\u00ed: "i",
				\u00ee: "i",
				\u0129: "i",
				\u012b: "i",
				\u012d: "i",
				\u00ef: "i",
				\u1e2f: "i",
				\u1ec9: "i",
				\u01d0: "i",
				\u0209: "i",
				\u020b: "i",
				\u1ecb: "i",
				\u012f: "i",
				\u1e2d: "i",
				\u0268: "i",
				\u0131: "i",
				"\u24d9": "j",
				\uff4a: "j",
				\u0135: "j",
				\u01f0: "j",
				\u0249: "j",
				"\u24da": "k",
				\uff4b: "k",
				\u1e31: "k",
				\u01e9: "k",
				\u1e33: "k",
				\u0137: "k",
				\u1e35: "k",
				\u0199: "k",
				\u2c6a: "k",
				\ua741: "k",
				\ua743: "k",
				\ua745: "k",
				"\ua7a3": "k",
				"\u24db": "l",
				\uff4c: "l",
				\u0140: "l",
				\u013a: "l",
				\u013e: "l",
				\u1e37: "l",
				\u1e39: "l",
				\u013c: "l",
				\u1e3d: "l",
				\u1e3b: "l",
				\u017f: "l",
				\u0142: "l",
				\u019a: "l",
				\u026b: "l",
				\u2c61: "l",
				\ua749: "l",
				\ua781: "l",
				\ua747: "l",
				\u01c9: "lj",
				"\u24dc": "m",
				\uff4d: "m",
				\u1e3f: "m",
				\u1e41: "m",
				\u1e43: "m",
				\u0271: "m",
				\u026f: "m",
				"\u24dd": "n",
				\uff4e: "n",
				\u01f9: "n",
				\u0144: "n",
				\u00f1: "n",
				\u1e45: "n",
				\u0148: "n",
				\u1e47: "n",
				\u0146: "n",
				\u1e4b: "n",
				\u1e49: "n",
				\u019e: "n",
				\u0272: "n",
				\u0149: "n",
				"\ua791": "n",
				"\ua7a5": "n",
				\u01cc: "nj",
				"\u24de": "o",
				\uff4f: "o",
				\u00f2: "o",
				\u00f3: "o",
				\u00f4: "o",
				\u1ed3: "o",
				\u1ed1: "o",
				\u1ed7: "o",
				\u1ed5: "o",
				\u00f5: "o",
				\u1e4d: "o",
				\u022d: "o",
				\u1e4f: "o",
				\u014d: "o",
				\u1e51: "o",
				\u1e53: "o",
				\u014f: "o",
				\u022f: "o",
				\u0231: "o",
				\u00f6: "o",
				\u022b: "o",
				\u1ecf: "o",
				\u0151: "o",
				\u01d2: "o",
				\u020d: "o",
				\u020f: "o",
				\u01a1: "o",
				\u1edd: "o",
				\u1edb: "o",
				\u1ee1: "o",
				\u1edf: "o",
				\u1ee3: "o",
				\u1ecd: "o",
				\u1ed9: "o",
				\u01eb: "o",
				\u01ed: "o",
				\u00f8: "o",
				\u01ff: "o",
				\u0254: "o",
				\ua74b: "o",
				\ua74d: "o",
				\u0275: "o",
				\u01a3: "oi",
				\u0223: "ou",
				\ua74f: "oo",
				"\u24df": "p",
				\uff50: "p",
				\u1e55: "p",
				\u1e57: "p",
				\u01a5: "p",
				\u1d7d: "p",
				\ua751: "p",
				\ua753: "p",
				\ua755: "p",
				"\u24e0": "q",
				\uff51: "q",
				\u024b: "q",
				\ua757: "q",
				\ua759: "q",
				"\u24e1": "r",
				\uff52: "r",
				\u0155: "r",
				\u1e59: "r",
				\u0159: "r",
				\u0211: "r",
				\u0213: "r",
				\u1e5b: "r",
				\u1e5d: "r",
				\u0157: "r",
				\u1e5f: "r",
				\u024d: "r",
				\u027d: "r",
				\ua75b: "r",
				"\ua7a7": "r",
				\ua783: "r",
				"\u24e2": "s",
				\uff53: "s",
				\u00df: "s",
				\u015b: "s",
				\u1e65: "s",
				\u015d: "s",
				\u1e61: "s",
				\u0161: "s",
				\u1e67: "s",
				\u1e63: "s",
				\u1e69: "s",
				\u0219: "s",
				\u015f: "s",
				\u023f: "s",
				"\ua7a9": "s",
				\ua785: "s",
				\u1e9b: "s",
				"\u24e3": "t",
				\uff54: "t",
				\u1e6b: "t",
				\u1e97: "t",
				\u0165: "t",
				\u1e6d: "t",
				\u021b: "t",
				\u0163: "t",
				\u1e71: "t",
				\u1e6f: "t",
				\u0167: "t",
				\u01ad: "t",
				\u0288: "t",
				\u2c66: "t",
				\ua787: "t",
				\ua729: "tz",
				"\u24e4": "u",
				\uff55: "u",
				\u00f9: "u",
				\u00fa: "u",
				\u00fb: "u",
				\u0169: "u",
				\u1e79: "u",
				\u016b: "u",
				\u1e7b: "u",
				\u016d: "u",
				\u00fc: "u",
				\u01dc: "u",
				\u01d8: "u",
				\u01d6: "u",
				\u01da: "u",
				\u1ee7: "u",
				\u016f: "u",
				\u0171: "u",
				\u01d4: "u",
				\u0215: "u",
				\u0217: "u",
				\u01b0: "u",
				\u1eeb: "u",
				\u1ee9: "u",
				\u1eef: "u",
				\u1eed: "u",
				\u1ef1: "u",
				\u1ee5: "u",
				\u1e73: "u",
				\u0173: "u",
				\u1e77: "u",
				\u1e75: "u",
				\u0289: "u",
				"\u24e5": "v",
				\uff56: "v",
				\u1e7d: "v",
				\u1e7f: "v",
				\u028b: "v",
				\ua75f: "v",
				\u028c: "v",
				\ua761: "vy",
				"\u24e6": "w",
				\uff57: "w",
				\u1e81: "w",
				\u1e83: "w",
				\u0175: "w",
				\u1e87: "w",
				\u1e85: "w",
				\u1e98: "w",
				\u1e89: "w",
				\u2c73: "w",
				"\u24e7": "x",
				\uff58: "x",
				\u1e8b: "x",
				\u1e8d: "x",
				"\u24e8": "y",
				\uff59: "y",
				\u1ef3: "y",
				\u00fd: "y",
				\u0177: "y",
				\u1ef9: "y",
				\u0233: "y",
				\u1e8f: "y",
				\u00ff: "y",
				\u1ef7: "y",
				\u1e99: "y",
				\u1ef5: "y",
				\u01b4: "y",
				\u024f: "y",
				\u1eff: "y",
				"\u24e9": "z",
				\uff5a: "z",
				\u017a: "z",
				\u1e91: "z",
				\u017c: "z",
				\u017e: "z",
				\u1e93: "z",
				\u1e95: "z",
				\u01b6: "z",
				\u0225: "z",
				\u0240: "z",
				\u2c6c: "z",
				\ua763: "z"
			};
		P = t(document), I = function() {
			var t = 1;
			return function() {
				return t++
			}
		}(), P.on("mousemove", function(t) {
			H.x = t.pageX, H.y = t.pageY
		}), F = M(Object, {
			bind: function(t) {
				var e = this;
				return function() {
					t.apply(e, arguments)
				}
			},
			init: function(n) {
				var i, o, a = ".select2-results";
				this.opts = n = this.prepareOpts(n), this.id = n.id, n.element.data("select2") !== e && null !== n.element.data("select2") && n.element.data("select2").destroy(), this.container = this.createContainer(), this.containerId = "s2id_" + (n.element.attr("id") || "autogen" + I()), this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.body = u(function() {
					return n.element.closest("body")
				}), b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", n.element.attr("style")), this.container.css(k(n.containerCss)), this.container.addClass(k(n.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(k(n.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = i = this.container.find(a), this.search = o = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), c(this.results), this.dropdown.on("mousemove-filtered touchstart touchmove touchend", a, this.bind(this.highlightUnderEvent)), d(80, this.results), this.dropdown.on("scroll-debounced", a, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function(t) {
					t.stopPropagation()
				}), t(this.dropdown).on("change", ".select2-input", function(t) {
					t.stopPropagation()
				}), t.fn.mousewheel && i.mousewheel(function(t, e, n, s) {
					var o = i.scrollTop();
					s > 0 && 0 >= o - s ? (i.scrollTop(0), g(t)) : 0 > s && i.get(0).scrollHeight - i.scrollTop() + s <= i.height() && (i.scrollTop(i.get(0).scrollHeight - i.height()), g(t))
				}), l(o), o.on("keyup-change input paste", this.bind(this.updateResults)), o.on("focus", function() {
					o.addClass("select2-focused")
				}), o.on("blur", function() {
					o.removeClass("select2-focused")
				}), this.dropdown.on("mouseup", a, this.bind(function(e) {
					t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
				})), this.dropdown.on("click mouseup mousedown", function(t) {
					t.stopPropagation()
				}), t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== n.maximumInputLength && this.search.attr("maxlength", n.maximumInputLength);
				var r = n.element.prop("disabled");
				r === e && (r = !1), this.enable(!r);
				var h = n.element.prop("readonly");
				h === e && (h = !1), this.readonly(h), O = O || s(), this.autofocus = n.element.prop("autofocus"), n.element.prop("autofocus", !1), this.autofocus && this.focus(), this.nextSearchTerm = e
			},
			destroy: function() {
				var t = this.opts.element,
					n = t.data("select2");
				this.close(), this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), n !== e && (n.container.remove(), n.dropdown.remove(), t.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({
					tabindex: this.elementTabIndex
				}) : t.removeAttr("tabindex"), t.show())
			},
			optionToData: function(t) {
				return t.is("option") ? {
					id: t.prop("value"),
					text: t.text(),
					element: t.get(),
					css: t.attr("class"),
					disabled: t.prop("disabled"),
					locked: o(t.attr("locked"), "locked") || o(t.data("locked"), !0)
				} : t.is("optgroup") ? {
					text: t.attr("label"),
					children: [],
					element: t.get(),
					css: t.attr("class")
				} : void 0
			},
			prepareOpts: function(n) {
				var i, s, r, l, c = this;
				if (i = n.element, "select" === i.get(0).tagName.toLowerCase() && (this.select = s = n.element), s && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
					if (this in n) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
				}), n = t.extend({}, {
					populateResults: function(i, s, o) {
						var a, r = this.opts.id;
						(a = function(i, s, l) {
							var h, u, d, f, p, g, m, v, b, y;
							for (i = n.sortResults(i, s, o), h = 0, u = i.length; u > h; h += 1) d = i[h], p = d.disabled === !0, f = !p && r(d) !== e, g = d.children && d.children.length > 0, m = t("<li></li>"), m.addClass("select2-results-dept-" + l), m.addClass("select2-result"), m.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), p && m.addClass("select2-disabled"), g && m.addClass("select2-result-with-children"), m.addClass(c.opts.formatResultCssClass(d)), v = t(document.createElement("div")), v.addClass("select2-result-label"), y = n.formatResult(d, v, o, c.opts.escapeMarkup), y !== e && v.html(y), m.append(v), g && (b = t("<ul></ul>"), b.addClass("select2-result-sub"), a(d.children, b, l + 1), m.append(b)), m.data("select2-data", d), s.append(m)
						})(s, i, 0)
					}
				}, t.fn.select2.defaults, n), "function" != typeof n.id && (r = n.id, n.id = function(t) {
					return t[r]
				}), t.isArray(n.element.data("select2Tags"))) {
					if ("tags" in n) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + n.element.attr("id");
					n.tags = n.element.data("select2Tags")
				}
				if (s ? (n.query = this.bind(function(t) {
					var n, s, o, a = {
						results: [],
						more: !1
					},
						r = t.term;
					o = function(e, n) {
						var i;
						e.is("option") ? t.matcher(r, e.text(), e) && n.push(c.optionToData(e)) : e.is("optgroup") && (i = c.optionToData(e), e.children().each2(function(t, e) {
							o(e, i.children)
						}), i.children.length > 0 && n.push(i))
					}, n = i.children(), this.getPlaceholder() !== e && n.length > 0 && (s = this.getPlaceholderOption(), s && (n = n.not(s))), n.each2(function(t, e) {
						o(e, a.results)
					}), t.callback(a)
				}), n.id = function(t) {
					return t.id
				}, n.formatResultCssClass = function(t) {
					return t.css
				}) : "query" in n || ("ajax" in n ? (l = n.element.data("ajax-url"), l && l.length > 0 && (n.ajax.url = l), n.query = x.call(n.element, n.ajax)) : "data" in n ? n.query = C(n.data) : "tags" in n && (n.query = S(n.tags), n.createSearchChoice === e && (n.createSearchChoice = function(e) {
					return {
						id: t.trim(e),
						text: t.trim(e)
					}
				}), n.initSelection === e && (n.initSelection = function(e, i) {
					var s = [];
					t(a(e.val(), n.separator)).each(function() {
						var e = {
							id: this,
							text: this
						},
							i = n.tags;
						t.isFunction(i) && (i = i()), t(i).each(function() {
							return o(this.id, e.id) ? (e = this, !1) : void 0
						}), s.push(e)
					}), i(s)
				}))), "function" != typeof n.query) throw "query function not defined for Select2 " + n.element.attr("id");
				return n
			},
			monitorSource: function() {
				var t, n, i = this.opts.element;
				i.on("change.select2", this.bind(function() {
					this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
				})), t = this.bind(function() {
					var t = i.prop("disabled");
					t === e && (t = !1), this.enable(!t);
					var n = i.prop("readonly");
					n === e && (n = !1), this.readonly(n), b(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(k(this.opts.containerCssClass)), b(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(k(this.opts.dropdownCssClass))
				}), i.on("propertychange.select2", t), this.mutationCallback === e && (this.mutationCallback = function(e) {
					e.forEach(t)
				}), n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new n(this.mutationCallback), this.propertyObserver.observe(i.get(0), {
					attributes: !0,
					subtree: !1
				}))
			},
			triggerSelect: function(e) {
				var n = t.Event("select2-selecting", {
					val: this.id(e),
					object: e
				});
				return this.opts.element.trigger(n), !n.isDefaultPrevented()
			},
			triggerChange: function(e) {
				e = e || {}, e = t.extend({}, e, {
					type: "change",
					val: this.val()
				}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
			},
			isInterfaceEnabled: function() {
				return this.enabledInterface === !0
			},
			enableInterface: function() {
				var t = this._enabled && !this._readonly,
					e = !t;
				return t === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
			},
			enable: function(t) {
				t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
			},
			disable: function() {
				this.enable(!1)
			},
			readonly: function(t) {
				return t === e && (t = !1), this._readonly === t ? !1 : (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface(), !0)
			},
			opened: function() {
				return this.container.hasClass("select2-dropdown-open")
			},
			positionDropdown: function() {
				var e, n, i, s, o, a = this.dropdown,
					r = this.container.offset(),
					l = this.container.outerHeight(!1),
					c = this.container.outerWidth(!1),
					h = a.outerHeight(!1),
					u = t(window),
					d = u.width(),
					f = u.height(),
					p = u.scrollLeft() + d,
					g = u.scrollTop() + f,
					m = r.top + l,
					v = r.left,
					b = g >= m + h,
					y = r.top - h >= this.body().scrollTop(),
					w = a.outerWidth(!1),
					x = p >= v + w,
					C = a.hasClass("select2-drop-above");
				C ? (n = !0, !y && b && (i = !0, n = !1)) : (n = !1, !b && y && (i = !0, n = !0)), i && (a.hide(), r = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), h = a.outerHeight(!1), p = u.scrollLeft() + d, g = u.scrollTop() + f, m = r.top + l, v = r.left, w = a.outerWidth(!1), x = p >= v + w, a.show()), this.opts.dropdownAutoWidth ? (o = t(".select2-results", a)[0], a.addClass("select2-drop-auto-width"), a.css("width", ""), w = a.outerWidth(!1) + (o.scrollHeight === o.clientHeight ? 0 : O.width), w > c ? c = w : w = c, x = p >= v + w) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body().css("position") && (e = this.body().offset(), m -= e.top, v -= e.left), x || (v = r.left + c - w), s = {
					left: v,
					width: c
				}, n ? (s.bottom = f - r.top, s.top = "auto", this.container.addClass("select2-drop-above"), a.addClass("select2-drop-above")) : (s.top = m, s.bottom = "auto", this.container.removeClass("select2-drop-above"), a.removeClass("select2-drop-above")), s = t.extend(s, k(this.opts.dropdownCss)), a.css(s)
			},
			shouldOpen: function() {
				var e;
				return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
			},
			clearDropdownAlignmentPreference: function() {
				this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
			},
			open: function() {
				return this.shouldOpen() ? (this.opening(), !0) : !1
			},
			opening: function() {
				var e, n = this.containerId,
					i = "scroll." + n,
					s = "resize." + n,
					o = "orientationchange." + n;
				this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()), e = t("#select2-drop-mask"), 0 == e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body()), e.on("mousedown touchstart click", function(e) {
					var n, i = t("#select2-drop");
					i.length > 0 && (n = i.data("select2"), n.opts.selectOnBlur && n.selectHighlighted({
						noFocus: !0
					}), n.close({
						focus: !0
					}), e.preventDefault(), e.stopPropagation())
				})), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
				var a = this;
				this.container.parents().add(window).each(function() {
					t(this).on(s + " " + i + " " + o, function() {
						a.positionDropdown()
					})
				})
			},
			close: function() {
				if (this.opened()) {
					var e = this.containerId,
						n = "scroll." + e,
						i = "resize." + e,
						s = "orientationchange." + e;
					this.container.parents().add(window).each(function() {
						t(this).off(n).off(i).off(s)
					}), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"))
				}
			},
			externalSearch: function(t) {
				this.open(), this.search.val(t), this.updateResults(!1)
			},
			clearSearch: function() {},
			getMaximumSelectionSize: function() {
				return k(this.opts.maximumSelectionSize)
			},
			ensureHighlightVisible: function() {
				var e, n, i, s, o, a, r, l = this.results;
				if (n = this.highlight(), !(0 > n)) {
					if (0 == n) return void l.scrollTop(0);
					e = this.findHighlightableChoices().find(".select2-result-label"), i = t(e[n]), s = i.offset().top + i.outerHeight(!0), n === e.length - 1 && (r = l.find("li.select2-more-results"), r.length > 0 && (s = r.offset().top + r.outerHeight(!0))), o = l.offset().top + l.outerHeight(!0), s > o && l.scrollTop(l.scrollTop() + (s - o)), a = i.offset().top - l.offset().top, 0 > a && "none" != i.css("display") && l.scrollTop(l.scrollTop() + a)
				}
			},
			findHighlightableChoices: function() {
				return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)")
			},
			moveHighlight: function(e) {
				for (var n = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < n.length;) {
					i += e;
					var s = t(n[i]);
					if (s.hasClass("select2-result-selectable") && !s.hasClass("select2-disabled") && !s.hasClass("select2-selected")) {
						this.highlight(i);
						break
					}
				}
			},
			highlight: function(e) {
				var n, s, o = this.findHighlightableChoices();
				return 0 === arguments.length ? i(o.filter(".select2-highlighted")[0], o.get()) : (e >= o.length && (e = o.length - 1), 0 > e && (e = 0), this.removeHighlight(), n = t(o[e]), n.addClass("select2-highlighted"), this.ensureHighlightVisible(), s = n.data("select2-data"), void(s && this.opts.element.trigger({
					type: "select2-highlight",
					val: this.id(s),
					choice: s
				})))
			},
			removeHighlight: function() {
				this.results.find(".select2-highlighted").removeClass("select2-highlighted")
			},
			countSelectableResults: function() {
				return this.findHighlightableChoices().length
			},
			highlightUnderEvent: function(e) {
				var n = t(e.target).closest(".select2-result-selectable");
				if (n.length > 0 && !n.is(".select2-highlighted")) {
					var i = this.findHighlightableChoices();
					this.highlight(i.index(n))
				} else 0 == n.length && this.removeHighlight()
			},
			loadMoreIfNeeded: function() {
				var t, e = this.results,
					n = e.find("li.select2-more-results"),
					i = this.resultsPage + 1,
					s = this,
					o = this.search.val(),
					a = this.context;
				0 !== n.length && (t = n.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (n.addClass("select2-active"), this.opts.query({
					element: this.opts.element,
					term: o,
					page: i,
					context: a,
					matcher: this.opts.matcher,
					callback: this.bind(function(t) {
						s.opened() && (s.opts.populateResults.call(this, e, t.results, {
							term: o,
							page: i,
							context: a
						}), s.postprocessResults(t, !1, !1), t.more === !0 ? (n.detach().appendTo(e).text(s.opts.formatLoadMore(i + 1)), window.setTimeout(function() {
							s.loadMoreIfNeeded()
						}, 10)) : n.remove(), s.positionDropdown(), s.resultsPage = i, s.context = t.context, this.opts.element.trigger({
							type: "select2-loaded",
							items: t
						}))
					})
				})))
			},
			tokenize: function() {},
			updateResults: function(n) {
				function i() {
					c.removeClass("select2-active"), d.positionDropdown()
				}
				function s(t) {
					h.html(t), i()
				}
				var a, r, l, c = this.search,
					h = this.results,
					u = this.opts,
					d = this,
					f = c.val(),
					p = t.data(this.container, "select2-last-term");
				if ((n === !0 || !p || !o(f, p)) && (t.data(this.container, "select2-last-term", f), n === !0 || this.showSearchInput !== !1 && this.opened())) {
					l = ++this.queryCount;
					var g = this.getMaximumSelectionSize();
					if (g >= 1 && (a = this.data(), t.isArray(a) && a.length >= g && D(u.formatSelectionTooBig, "formatSelectionTooBig"))) return void s("<li class='select2-selection-limit'>" + u.formatSelectionTooBig(g) + "</li>");
					if (c.val().length < u.minimumInputLength) return s(D(u.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + u.formatInputTooShort(c.val(), u.minimumInputLength) + "</li>" : ""), void(n && this.showSearch && this.showSearch(!0));
					if (u.maximumInputLength && c.val().length > u.maximumInputLength) return void s(D(u.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + u.formatInputTooLong(c.val(), u.maximumInputLength) + "</li>" : "");
					u.formatSearching && 0 === this.findHighlightableChoices().length && s("<li class='select2-searching'>" + u.formatSearching() + "</li>"), c.addClass("select2-active"), this.removeHighlight(), r = this.tokenize(), r != e && null != r && c.val(r), this.resultsPage = 1, u.query({
						element: u.element,
						term: c.val(),
						page: this.resultsPage,
						context: null,
						matcher: u.matcher,
						callback: this.bind(function(a) {
							var r;
							if (l == this.queryCount) {
								if (!this.opened()) return void this.search.removeClass("select2-active");
								if (this.context = a.context === e ? null : a.context, this.opts.createSearchChoice && "" !== c.val() && (r = this.opts.createSearchChoice.call(d, c.val(), a.results), r !== e && null !== r && d.id(r) !== e && null !== d.id(r) && 0 === t(a.results).filter(function() {
									return o(d.id(this), d.id(r))
								}).length && a.results.unshift(r)), 0 === a.results.length && D(u.formatNoMatches, "formatNoMatches")) return void s("<li class='select2-no-results'>" + u.formatNoMatches(c.val()) + "</li>");
								h.empty(), d.opts.populateResults.call(this, h, a.results, {
									term: c.val(),
									page: this.resultsPage,
									context: null
								}), a.more === !0 && D(u.formatLoadMore, "formatLoadMore") && (h.append("<li class='select2-more-results'>" + d.opts.escapeMarkup(u.formatLoadMore(this.resultsPage)) + "</li>"), window.setTimeout(function() {
									d.loadMoreIfNeeded()
								}, 10)), this.postprocessResults(a, n), i(), this.opts.element.trigger({
									type: "select2-loaded",
									items: a
								})
							}
						})
					})
				}
			},
			cancel: function() {
				this.close()
			},
			blur: function() {
				this.opts.selectOnBlur && this.selectHighlighted({
					noFocus: !0
				}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
			},
			focusSearch: function() {
				f(this.search)
			},
			selectHighlighted: function(t) {
				var e = this.highlight(),
					n = this.results.find(".select2-highlighted"),
					i = n.closest(".select2-result").data("select2-data");
				i ? (this.highlight(e), this.onSelect(i, t)) : t && t.noFocus && this.close()
			},
			getPlaceholder: function() {
				var t;
				return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
			},
			getPlaceholderOption: function() {
				if (this.select) {
					var t = this.select.children("option").first();
					if (this.opts.placeholderOption !== e) return "first" === this.opts.placeholderOption && t || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
					if ("" === t.text() && "" === t.val()) return t
				}
			},
			initContainerWidth: function() {
				function n() {
					var n, i, s, o, a, r;
					if ("off" === this.opts.width) return null;
					if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
					if ("copy" === this.opts.width || "resolve" === this.opts.width) {
						if (n = this.opts.element.attr("style"), n !== e) for (i = n.split(";"), o = 0, a = i.length; a > o; o += 1) if (r = i[o].replace(/\s/g, ""), s = r.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== s && s.length >= 1) return s[1];
						return "resolve" === this.opts.width ? (n = this.opts.element.css("width"), n.indexOf("%") > 0 ? n : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
					}
					return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
				}
				var i = n.call(this);
				null !== i && this.container.css("width", i)
			}
		}), N = M(F, {
			createContainer: function() {
				var e = t(document.createElement("div")).attr({
					"class": "select2-container"
				}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow'><b></b></span>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
				return e
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
			},
			opening: function() {
				var n, i, s;
				this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.search.focus(), n = this.search.get(0), n.createTextRange ? (i = n.createTextRange(), i.collapse(!1), i.select()) : n.setSelectionRange && (s = this.search.val().length, n.setSelectionRange(s, s)), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
			},
			close: function(t) {
				this.opened() && (this.parent.close.apply(this, arguments), t = t || {
					focus: !0
				}, this.focusser.removeAttr("disabled"), t.focus && this.focusser.focus())
			},
			focus: function() {
				this.opened() ? this.close() : (this.focusser.removeAttr("disabled"), this.focusser.focus())
			},
			isFocused: function() {
				return this.container.hasClass("select2-container-active")
			},
			cancel: function() {
				this.parent.cancel.apply(this, arguments), this.focusser.removeAttr("disabled"), this.focusser.focus()
			},
			destroy: function() {
				t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
			},
			initContainer: function() {
				var e, n = this.container,
					i = this.dropdown;
				this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = e = n.find(".select2-choice"), this.focusser = n.find(".select2-focusser"), this.focusser.attr("id", "s2id_autogen" + I()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")), this.focusser.attr("tabindex", this.elementTabIndex), this.search.on("keydown", this.bind(function(t) {
					if (this.isInterfaceEnabled()) {
						if (t.which === E.PAGE_UP || t.which === E.PAGE_DOWN) return void g(t);
						switch (t.which) {
						case E.UP:
						case E.DOWN:
							return this.moveHighlight(t.which === E.UP ? -1 : 1), void g(t);
						case E.ENTER:
							return this.selectHighlighted(), void g(t);
						case E.TAB:
							return void this.selectHighlighted({
								noFocus: !0
							});
						case E.ESC:
							return this.cancel(t), void g(t)
						}
					}
				})), this.search.on("blur", this.bind(function() {
					document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function() {
						this.search.focus()
					}), 0)
				})), this.focusser.on("keydown", this.bind(function(t) {
					if (this.isInterfaceEnabled() && t.which !== E.TAB && !E.isControl(t) && !E.isFunctionKey(t) && t.which !== E.ESC) {
						if (this.opts.openOnEnter === !1 && t.which === E.ENTER) return void g(t);
						if (t.which == E.DOWN || t.which == E.UP || t.which == E.ENTER && this.opts.openOnEnter) {
							if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;
							return this.open(), void g(t)
						}
						return t.which == E.DELETE || t.which == E.BACKSPACE ? (this.opts.allowClear && this.clear(), void g(t)) : void 0
					}
				})), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function(t) {
					if (this.opts.minimumResultsForSearch >= 0) {
						if (t.stopPropagation(), this.opened()) return;
						this.open()
					}
				})), e.on("mousedown", "abbr", this.bind(function(t) {
					this.isInterfaceEnabled() && (this.clear(), m(t), this.close(), this.selection.focus())
				})), e.on("mousedown", this.bind(function(e) {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(e)
				})), i.on("mousedown", this.bind(function() {
					this.search.focus()
				})), e.on("focus", this.bind(function(t) {
					g(t)
				})), this.focusser.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
				})).on("blur", this.bind(function() {
					this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
				})), this.search.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
				})), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
			},
			clear: function(e) {
				var n = this.selection.data("select2-data");
				if (n) {
					var i = t.Event("select2-clearing");
					if (this.opts.element.trigger(i), i.isDefaultPrevented()) return;
					var s = this.getPlaceholderOption();
					this.opts.element.val(s ? s.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e !== !1 && (this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(n),
						choice: n
					}), this.triggerChange({
						removed: n
					}))
				}
			},
			initSelection: function() {
				if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
				else {
					var t = this;
					this.opts.initSelection.call(null, this.opts.element, function(n) {
						n !== e && null !== n && (t.updateSelection(n), t.close(), t.setPlaceholder())
					})
				}
			},
			isPlaceholderOptionSelected: function() {
				var t;
				return this.getPlaceholder() ? (t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val() : !1
			},
			prepareOpts: function() {
				var e = this.parent.prepareOpts.apply(this, arguments),
					n = this;
				return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
					var i = t.find("option").filter(function() {
						return this.selected
					});
					e(n.optionToData(i))
				} : "data" in e && (e.initSelection = e.initSelection ||
				function(n, i) {
					var s = n.val(),
						a = null;
					e.query({
						matcher: function(t, n, i) {
							var r = o(s, e.id(i));
							return r && (a = i), r
						},
						callback: t.isFunction(i) ?
						function() {
							i(a)
						} : t.noop
					})
				}), e
			},
			getPlaceholder: function() {
				return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
			},
			setPlaceholder: function() {
				var t = this.getPlaceholder();
				if (this.isPlaceholderOptionSelected() && t !== e) {
					if (this.select && this.getPlaceholderOption() === e) return;
					this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
				}
			},
			postprocessResults: function(t, e, n) {
				var i = 0,
					s = this;
				if (this.findHighlightableChoices().each2(function(t, e) {
					return o(s.id(e.data("select2-data")), s.opts.element.val()) ? (i = t, !1) : void 0
				}), n !== !1 && this.highlight(e === !0 && i >= 0 ? i : 0), e === !0) {
					var a = this.opts.minimumResultsForSearch;
					a >= 0 && this.showSearch(_(t.results) >= a)
				}
			},
			showSearch: function(e) {
				this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
			},
			onSelect: function(t, e) {
				if (this.triggerSelect(t)) {
					var n = this.opts.element.val(),
						i = this.data();
					this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
						type: "select2-selected",
						val: this.id(t),
						choice: t
					}), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || this.focusser.focus(), o(n, this.id(t)) || this.triggerChange({
						added: t,
						removed: i
					})
				}
			},
			updateSelection: function(t) {
				var n, i, s = this.selection.find(".select2-chosen");
				this.selection.data("select2-data", t), s.empty(), null !== t && (n = this.opts.formatSelection(t, s, this.opts.escapeMarkup)), n !== e && s.append(n), i = this.opts.formatSelectionCssClass(t, s), i !== e && s.addClass(i), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
			},
			val: function() {
				var t, n = !1,
					i = null,
					s = this,
					o = this.data();
				if (0 === arguments.length) return this.opts.element.val();
				if (t = arguments[0], arguments.length > 1 && (n = arguments[1]), this.select) this.select.val(t).find("option").filter(function() {
					return this.selected
				}).each2(function(t, e) {
					return i = s.optionToData(e), !1
				}), this.updateSelection(i), this.setPlaceholder(), n && this.triggerChange({
					added: i,
					removed: o
				});
				else {
					if (!t && 0 !== t) return void this.clear(n);
					if (this.opts.initSelection === e) throw new Error("cannot call val() if initSelection() is not defined");
					this.opts.element.val(t), this.opts.initSelection(this.opts.element, function(t) {
						s.opts.element.val(t ? s.id(t) : ""), s.updateSelection(t), s.setPlaceholder(), n && s.triggerChange({
							added: t,
							removed: o
						})
					})
				}
			},
			clearSearch: function() {
				this.search.val(""), this.focusser.val("")
			},
			data: function(t) {
				var n, i = !1;
				return 0 === arguments.length ? (n = this.selection.data("select2-data"), n == e && (n = null), n) : (arguments.length > 1 && (i = arguments[1]), void(t ? (n = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), i && this.triggerChange({
					added: t,
					removed: n
				})) : this.clear(i)))
			}
		}), A = M(F, {
			createContainer: function() {
				var e = t(document.createElement("div")).attr({
					"class": "select2-container select2-container-multi"
				}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
				return e
			},
			prepareOpts: function() {
				var e = this.parent.prepareOpts.apply(this, arguments),
					n = this;
				return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
					var i = [];
					t.find("option").filter(function() {
						return this.selected
					}).each2(function(t, e) {
						i.push(n.optionToData(e))
					}), e(i)
				} : "data" in e && (e.initSelection = e.initSelection ||
				function(n, i) {
					var s = a(n.val(), e.separator),
						r = [];
					e.query({
						matcher: function(n, i, a) {
							var l = t.grep(s, function(t) {
								return o(t, e.id(a))
							}).length;
							return l && r.push(a), l
						},
						callback: t.isFunction(i) ?
						function() {
							for (var t = [], n = 0; n < s.length; n++) for (var a = s[n], l = 0; l < r.length; l++) {
								var c = r[l];
								if (o(a, e.id(c))) {
									t.push(c), r.splice(l, 1);
									break
								}
							}
							i(t)
						} : t.noop
					})
				}), e
			},
			selectChoice: function(t) {
				var e = this.container.find(".select2-search-choice-focus");
				e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
			},
			destroy: function() {
				t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments)
			},
			initContainer: function() {
				var e, n = ".select2-choices";
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(n);
				var i = this;
				this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() {
					i.search[0].focus(), i.selectChoice(t(this))
				}), this.search.attr("id", "s2id_autogen" + I()), t("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
					this.isInterfaceEnabled() && (this.opened() || this.open())
				})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(t) {
					if (this.isInterfaceEnabled()) {
						++this.keydowns;
						var n = e.find(".select2-search-choice-focus"),
							i = n.prev(".select2-search-choice:not(.select2-locked)"),
							s = n.next(".select2-search-choice:not(.select2-locked)"),
							o = p(this.search);
						if (n.length && (t.which == E.LEFT || t.which == E.RIGHT || t.which == E.BACKSPACE || t.which == E.DELETE || t.which == E.ENTER)) {
							var a = n;
							return t.which == E.LEFT && i.length ? a = i : t.which == E.RIGHT ? a = s.length ? s : null : t.which === E.BACKSPACE ? (this.unselect(n.first()), this.search.width(10), a = i.length ? i : s) : t.which == E.DELETE ? (this.unselect(n.first()), this.search.width(10), a = s.length ? s : null) : t.which == E.ENTER && (a = null), this.selectChoice(a), g(t), void(a && a.length || this.open())
						}
						if ((t.which === E.BACKSPACE && 1 == this.keydowns || t.which == E.LEFT) && 0 == o.offset && !o.length) return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), void g(t);
						if (this.selectChoice(null), this.opened()) switch (t.which) {
						case E.UP:
						case E.DOWN:
							return this.moveHighlight(t.which === E.UP ? -1 : 1), void g(t);
						case E.ENTER:
							return this.selectHighlighted(), void g(t);
						case E.TAB:
							return this.selectHighlighted({
								noFocus: !0
							}), void this.close();
						case E.ESC:
							return this.cancel(t), void g(t)
						}
						if (t.which !== E.TAB && !E.isControl(t) && !E.isFunctionKey(t) && t.which !== E.BACKSPACE && t.which !== E.ESC) {
							if (t.which === E.ENTER) {
								if (this.opts.openOnEnter === !1) return;
								if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return
							}
							this.open(), (t.which === E.PAGE_UP || t.which === E.PAGE_DOWN) && g(t), t.which === E.ENTER && g(t)
						}
					}
				})), this.search.on("keyup", this.bind(function() {
					this.keydowns = 0, this.resizeSearch()
				})), this.search.on("blur", this.bind(function(e) {
					this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
				})), this.container.on("click", n, this.bind(function(e) {
					this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
				})), this.container.on("focus", n, this.bind(function() {
					this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
				})), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
			},
			initSelection: function() {
				if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
					var t = this;
					this.opts.initSelection.call(null, this.opts.element, function(n) {
						n !== e && null !== n && (t.updateSelection(n), t.close(), t.clearSearch())
					})
				}
			},
			clearSearch: function() {
				var t = this.getPlaceholder(),
					n = this.getMaxSearchWidth();
				t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.search.width(n > 0 ? n : this.container.css("width"))) : this.search.val("").width(10)
			},
			clearPlaceholder: function() {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			},
			opening: function() {
				this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.updateResults(!0), this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
			},
			close: function() {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function() {
				this.close(), this.search.focus()
			},
			isFocused: function() {
				return this.search.hasClass("select2-focused")
			},
			updateSelection: function(e) {
				var n = [],
					s = [],
					o = this;
				t(e).each(function() {
					i(o.id(this), n) < 0 && (n.push(o.id(this)), s.push(this))
				}), e = s, this.selection.find(".select2-search-choice").remove(), t(e).each(function() {
					o.addSelectedChoice(this)
				}), o.postprocessResults()
			},
			tokenize: function() {
				var t = this.search.val();
				t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
			},
			onSelect: function(t, e) {
				this.triggerSelect(t) && (this.addSelectedChoice(t), this.opts.element.trigger({
					type: "selected",
					val: this.id(t),
					choice: t
				}), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(t, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
					added: t
				}), e && e.noFocus || this.focusSearch())
			},
			cancel: function() {
				this.close(), this.focusSearch()
			},
			addSelectedChoice: function(n) {
				var i, s, o = !n.locked,
					a = t("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),
					r = t("<li class='select2-search-choice select2-locked'><div></div></li>"),
					l = o ? a : r,
					c = this.id(n),
					h = this.getVal();
				i = this.opts.formatSelection(n, l.find("div"), this.opts.escapeMarkup), i != e && l.find("div").replaceWith("<div>" + i + "</div>"), s = this.opts.formatSelectionCssClass(n, l.find("div")), s != e && l.addClass(s), o && l.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function(e) {
					this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function() {
						this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), this.close(), this.focusSearch()
					})).dequeue(), g(e))
				})).on("focus", this.bind(function() {
					this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
				})), l.data("select2-data", n), l.insertBefore(this.searchContainer), h.push(c), this.setVal(h)
			},
			unselect: function(e) {
				var n, s, o = this.getVal();
				if (e = e.closest(".select2-search-choice"), 0 === e.length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
				if (n = e.data("select2-data")) {
					for (;
					(s = i(this.id(n), o)) >= 0;) o.splice(s, 1), this.setVal(o), this.select && this.postprocessResults();
					var a = t.Event("select2-removing");
					a.val = this.id(n), a.choice = n, this.opts.element.trigger(a), a.isDefaultPrevented() || (e.remove(), this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(n),
						choice: n
					}), this.triggerChange({
						removed: n
					}))
				}
			},
			postprocessResults: function(t, e, n) {
				var s = this.getVal(),
					o = this.results.find(".select2-result"),
					a = this.results.find(".select2-result-with-children"),
					r = this;
				o.each2(function(t, e) {
					var n = r.id(e.data("select2-data"));
					i(n, s) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
				}), a.each2(function(t, e) {
					e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
				}), -1 == this.highlight() && n !== !1 && r.highlight(0), !this.opts.createSearchChoice && !o.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && D(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + r.opts.formatNoMatches(r.search.val()) + "</li>")
			},
			getMaxSearchWidth: function() {
				return this.selection.width() - r(this.search)
			},
			resizeSearch: function() {
				var t, e, n, i, s, o = r(this.search);
				t = v(this.search) + 10, e = this.search.offset().left, n = this.selection.width(), i = this.selection.offset().left, s = n - (e - i) - o, t > s && (s = n - o), 40 > s && (s = n - o), 0 >= s && (s = t), this.search.width(Math.floor(s))
			},
			getVal: function() {
				var t;
				return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), a(t, this.opts.separator))
			},
			setVal: function(e) {
				var n;
				this.select ? this.select.val(e) : (n = [], t(e).each(function() {
					i(this, n) < 0 && n.push(this)
				}), this.opts.element.val(0 === n.length ? "" : n.join(this.opts.separator)))
			},
			buildChangeDetails: function(t, e) {
				for (var e = e.slice(0), t = t.slice(0), n = 0; n < e.length; n++) for (var i = 0; i < t.length; i++) o(this.opts.id(e[n]), this.opts.id(t[i])) && (e.splice(n, 1), n > 0 && n--, t.splice(i, 1), i--);
				return {
					added: e,
					removed: t
				}
			},
			val: function(n, i) {
				var s, o = this;
				if (0 === arguments.length) return this.getVal();
				if (s = this.data(), s.length || (s = []), !n && 0 !== n) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(i && this.triggerChange({
					added: this.data(),
					removed: s
				}));
				if (this.setVal(n), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), i && this.triggerChange(this.buildChangeDetails(s, this.data()));
				else {
					if (this.opts.initSelection === e) throw new Error("val() cannot be called if initSelection() is not defined");
					this.opts.initSelection(this.opts.element, function(e) {
						var n = t.map(e, o.id);
						o.setVal(n), o.updateSelection(e), o.clearSearch(), i && o.triggerChange(o.buildChangeDetails(s, o.data()))
					})
				}
				this.clearSearch()
			},
			onSortStart: function() {
				if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
				this.search.width(0), this.searchContainer.hide()
			},
			onSortEnd: function() {
				var e = [],
					n = this;
				this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
					e.push(n.opts.id(t(this).data("select2-data")))
				}), this.setVal(e), this.triggerChange()
			},
			data: function(e, n) {
				var i, s, o = this;
				return 0 === arguments.length ? this.selection.find(".select2-search-choice").map(function() {
					return t(this).data("select2-data")
				}).get() : (s = this.data(), e || (e = []), i = t.map(e, function(t) {
					return o.opts.id(t)
				}), this.setVal(i), this.updateSelection(e), this.clearSearch(), void(n && this.triggerChange(this.buildChangeDetails(s, this.data()))))
			}
		}), t.fn.select2 = function() {
			var n, s, o, a, r, l = Array.prototype.slice.call(arguments, 0),
				c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
				h = ["opened", "isFocused", "container", "dropdown"],
				u = ["val", "data"],
				d = {
					search: "externalSearch"
				};
			return this.each(function() {
				if (0 === l.length || "object" == typeof l[0]) n = 0 === l.length ? {} : t.extend({}, l[0]), n.element = t(this), "select" === n.element.get(0).tagName.toLowerCase() ? r = n.element.prop("multiple") : (r = n.multiple || !1, "tags" in n && (n.multiple = r = !0)), s = r ? new A : new N, s.init(n);
				else {
					if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;
					if (i(l[0], c) < 0) throw "Unknown method: " + l[0];
					if (a = e, s = t(this).data("select2"), s === e) return;
					if (o = l[0], "container" === o ? a = s.container : "dropdown" === o ? a = s.dropdown : (d[o] && (o = d[o]), a = s[o].apply(s, l.slice(1))), i(l[0], h) >= 0 || i(l[0], u) && 1 == l.length) return !1
				}
			}), a === e ? this : a
		}, t.fn.select2.defaults = {
			width: "copy",
			loadMorePadding: 0,
			closeOnSelect: !0,
			openOnEnter: !0,
			containerCss: {},
			dropdownCss: {},
			containerCssClass: "",
			dropdownCssClass: "",
			formatResult: function(t, e, n, i) {
				var s = [];
				return y(t.text, n.term, s, i), s.join("")
			},
			formatSelection: function(t, n, i) {
				return t ? i(t.text) : e
			},
			sortResults: function(t) {
				return t
			},
			formatResultCssClass: function() {
				return e
			},
			formatSelectionCssClass: function() {
				return e
			},
			formatNoMatches: function() {
				return "No matches found"
			},
			formatInputTooShort: function(t, e) {
				var n = e - t.length;
				return "Please enter " + n + " more character" + (1 == n ? "" : "s")
			},
			formatInputTooLong: function(t, e) {
				var n = t.length - e;
				return "Please delete " + n + " character" + (1 == n ? "" : "s")
			},
			formatSelectionTooBig: function(t) {
				return "You can only select " + t + " item" + (1 == t ? "" : "s")
			},
			formatLoadMore: function() {
				return "Loading more results..."
			},
			formatSearching: function() {
				return "Searching..."
			},
			minimumResultsForSearch: 0,
			minimumInputLength: 0,
			maximumInputLength: null,
			maximumSelectionSize: 0,
			id: function(t) {
				return t.id
			},
			matcher: function(t, e) {
				return n("" + e).toUpperCase().indexOf(n("" + t).toUpperCase()) >= 0
			},
			separator: ",",
			tokenSeparators: [],
			tokenizer: T,
			escapeMarkup: w,
			blurOnChange: !1,
			selectOnBlur: !1,
			adaptContainerCssClass: function(t) {
				return t
			},
			adaptDropdownCssClass: function() {
				return null
			},
			nextSearchTerm: function() {
				return e
			}
		}, t.fn.select2.ajaxDefaults = {
			transport: t.ajax,
			params: {
				type: "GET",
				cache: !1,
				dataType: "json"
			}
		}, window.Select2 = {
			query: {
				ajax: x,
				local: C,
				tags: S
			},
			util: {
				debounce: h,
				markMatch: y,
				escapeMarkup: w,
				stripDiacritics: n
			},
			"class": {
				"abstract": F,
				single: N,
				multi: A
			}
		}
	}
}(jQuery), !
function(t, e) {
	"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function() {
	return function() {
		var t, e, n, i, s, o, a, r, l, c, h, u, d, f, p, g, m, v = {}.hasOwnProperty,
			b = [].indexOf ||
		function(t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return -1
		}, y = [].slice;
		null == this.Tether && (this.Tether = {
			modules: []
		}), h = function(t) {
			var e, n, i, s, o;
			if (n = getComputedStyle(t).position, "fixed" === n) return t;
			for (i = void 0, e = t; e = e.parentNode;) {
				try {
					s = getComputedStyle(e)
				} catch (a) {}
				if (null == s) return e;
				if (/(auto|scroll)/.test(s.overflow + s["overflow-y"] + s["overflow-x"]) && ("absolute" !== n || "relative" === (o = s.position) || "absolute" === o || "fixed" === o)) return e
			}
			return document.body
		}, p = function() {
			var t;
			return t = 0, function() {
				return t++
			}
		}(), m = {}, l = function(t) {
			var e, i, o, a, r;
			if (o = t._tetherZeroElement, null == o && (o = t.createElement("div"), o.setAttribute("data-tether-id", p()), s(o.style, {
				top: 0,
				left: 0,
				position: "absolute"
			}), t.body.appendChild(o), t._tetherZeroElement = o), e = o.getAttribute("data-tether-id"), null == m[e]) {
				m[e] = {}, r = o.getBoundingClientRect();
				for (i in r) a = r[i], m[e][i] = a;
				n(function() {
					return m[e] = void 0
				})
			}
			return m[e]
		}, d = null, a = function(t) {
			var e, n, i, s, o, a, r;
			t === document ? (n = document, t = document.documentElement) : n = t.ownerDocument, i = n.documentElement, e = {}, r = t.getBoundingClientRect();
			for (s in r) a = r[s], e[s] = a;
			return o = l(n), e.top -= o.top, e.left -= o.left, null == e.width && (e.width = document.body.scrollWidth - e.left - e.right), null == e.height && (e.height = document.body.scrollHeight - e.top - e.bottom), e.top = e.top - i.clientTop, e.left = e.left - i.clientLeft, e.right = n.body.clientWidth - e.width - e.left, e.bottom = n.body.clientHeight - e.height - e.top, e
		}, r = function(t) {
			return t.offsetParent || document.documentElement
		}, c = function() {
			var t, e, n, i, o;
			return t = document.createElement("div"), t.style.width = "100%", t.style.height = "200px", e = document.createElement("div"), s(e.style, {
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				visibility: "hidden",
				width: "200px",
				height: "150px",
				overflow: "hidden"
			}), e.appendChild(t), document.body.appendChild(e), i = t.offsetWidth, e.style.overflow = "scroll", o = t.offsetWidth, i === o && (o = e.clientWidth), document.body.removeChild(e), n = i - o, {
				width: n,
				height: n
			}
		}, s = function(t) {
			var e, n, i, s, o, a, r;
			for (null == t && (t = {}), e = [], Array.prototype.push.apply(e, arguments), r = e.slice(1), o = 0, a = r.length; a > o; o++) if (i = r[o]) for (n in i) v.call(i, n) && (s = i[n], t[n] = s);
			return t
		}, f = function(t, e) {
			var n, i, s, o, a;
			if (null != t.classList) {
				for (o = e.split(" "), a = [], i = 0, s = o.length; s > i; i++) n = o[i], n.trim() && a.push(t.classList.remove(n));
				return a
			}
			return t.className = t.className.replace(new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), " ")
		}, e = function(t, e) {
			var n, i, s, o, a;
			if (null != t.classList) {
				for (o = e.split(" "), a = [], i = 0, s = o.length; s > i; i++) n = o[i], n.trim() && a.push(t.classList.add(n));
				return a
			}
			return f(t, e), t.className += " " + e
		}, u = function(t, e) {
			return null != t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
		}, g = function(t, n, i) {
			var s, o, a, r, l, c;
			for (o = 0, r = i.length; r > o; o++) s = i[o], b.call(n, s) < 0 && u(t, s) && f(t, s);
			for (c = [], a = 0, l = n.length; l > a; a++) s = n[a], c.push(u(t, s) ? void 0 : e(t, s));
			return c
		}, i = [], n = function(t) {
			return i.push(t)
		}, o = function() {
			var t, e;
			for (e = []; t = i.pop();) e.push(t());
			return e
		}, t = function() {
			function t() {}
			return t.prototype.on = function(t, e, n, i) {
				var s;
				return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
					handler: e,
					ctx: n,
					once: i
				})
			}, t.prototype.once = function(t, e, n) {
				return this.on(t, e, n, !0)
			}, t.prototype.off = function(t, e) {
				var n, i, s;
				if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
					if (null == e) return delete this.bindings[t];
					for (n = 0, s = []; n < this.bindings[t].length;) s.push(this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : n++);
					return s
				}
			}, t.prototype.trigger = function() {
				var t, e, n, i, s, o, a, r, l;
				if (n = arguments[0], t = 2 <= arguments.length ? y.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
					for (s = 0, l = []; s < this.bindings[n].length;) r = this.bindings[n][s], i = r.handler, e = r.ctx, o = r.once, i.apply(null != e ? e : this, t), l.push(o ? this.bindings[n].splice(s, 1) : s++);
					return l
				}
			}, t
		}(), this.Tether.Utils = {
			getScrollParent: h,
			getBounds: a,
			getOffsetParent: r,
			extend: s,
			addClass: e,
			removeClass: f,
			hasClass: u,
			updateClasses: g,
			defer: n,
			flush: o,
			uniqueId: p,
			Evented: t,
			getScrollBarSize: c
		}
	}.call(this), function() {
		var t, e, n, i, s, o, a, r, l, c, h, u, d, f, p, g, m, v, b, y, w, x, C, S, D, k, _, T, M, E = [].slice,
			F = function(t, e) {
				return function() {
					return t.apply(e, arguments)
				}
			};
		if (null == this.Tether) throw new Error("You must include the utils.js file before tether.js");
		i = this.Tether, M = i.Utils, g = M.getScrollParent, m = M.getSize, f = M.getOuterSize, u = M.getBounds, d = M.getOffsetParent, c = M.extend, s = M.addClass, C = M.removeClass, k = M.updateClasses, l = M.defer, h = M.flush, p = M.getScrollBarSize, _ = function(t, e, n) {
			return null == n && (n = 1), t + n >= e && e >= t - n
		}, D = function() {
			var t, e, n, i, s;
			for (t = document.createElement("div"), s = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0, i = s.length; i > n; n++) if (e = s[n], void 0 !== t.style[e]) return e
		}(), S = [], x = function() {
			var t, e, n;
			for (e = 0, n = S.length; n > e; e++) t = S[e], t.position(!1);
			return h()
		}, v = function() {
			var t;
			return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
		}, function() {
			var t, e, n, i, s, o, a, r, l;
			for (e = null, n = null, i = null, s = function() {
				return null != n && n > 16 ? (n = Math.min(n - 16, 250), void(i = setTimeout(s, 250))) : null != e && v() - e < 10 ? void 0 : (null != i && (clearTimeout(i), i = null), e = v(), x(), n = v() - e)
			}, r = ["resize", "scroll", "touchmove"], l = [], o = 0, a = r.length; a > o; o++) t = r[o], l.push(window.addEventListener(t, s));
			return l
		}(), t = {
			center: "center",
			left: "right",
			right: "left"
		}, e = {
			middle: "middle",
			top: "bottom",
			bottom: "top"
		}, n = {
			top: 0,
			left: 0,
			middle: "50%",
			center: "50%",
			bottom: "100%",
			right: "100%"
		}, r = function(n, i) {
			var s, o;
			return s = n.left, o = n.top, "auto" === s && (s = t[i.left]), "auto" === o && (o = e[i.top]), {
				left: s,
				top: o
			}
		}, a = function(t) {
			var e, i;
			return {
				left: null != (e = n[t.left]) ? e : t.left,
				top: null != (i = n[t.top]) ? i : t.top
			}
		}, o = function() {
			var t, e, n, i, s, o, a;
			for (e = 1 <= arguments.length ? E.call(arguments, 0) : [], n = {
				top: 0,
				left: 0
			}, s = 0, o = e.length; o > s; s++) a = e[s], i = a.top, t = a.left, "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof t && (t = parseFloat(t, 10)), n.top += i, n.left += t;
			return n
		}, b = function(t, e) {
			return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
		}, y = w = function(t) {
			var e, n, i;
			return i = t.split(" "), n = i[0], e = i[1], {
				top: n,
				left: e
			}
		}, T = function() {
			function t(t) {
				this.position = F(this.position, this);
				var e, n, s, o, a;
				for (S.push(this), this.history = [], this.setOptions(t, !1), o = i.modules, n = 0, s = o.length; s > n; n++) e = o[n], null != (a = e.initialize) && a.call(this);
				this.position()
			}
			return t.modules = [], t.prototype.getClass = function(t) {
				var e, n;
				return (null != (e = this.options.classes) ? e[t] : void 0) ? this.options.classes[t] : (null != (n = this.options.classes) ? n[t] : void 0) !== !1 ? this.options.classPrefix ? "" + this.options.classPrefix + "-" + t : t : ""
			}, t.prototype.setOptions = function(t, e) {
				var n, i, o, a, r, l;
				for (this.options = t, null == e && (e = !0), n = {
					offset: "0 0",
					targetOffset: "0 0",
					targetAttachment: "auto auto",
					classPrefix: "tether"
				}, this.options = c(n, this.options), r = this.options, this.element = r.element, this.target = r.target, this.targetModifier = r.targetModifier, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), l = ["element", "target"], o = 0, a = l.length; a > o; o++) {
					if (i = l[o], null == this[i]) throw new Error("Tether Error: Both element and target must be defined");
					null != this[i].jquery ? this[i] = this[i][0] : "string" == typeof this[i] && (this[i] = document.querySelector(this[i]))
				}
				if (s(this.element, this.getClass("element")), s(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
				return this.targetAttachment = y(this.options.targetAttachment), this.attachment = y(this.options.attachment), this.offset = w(this.options.offset), this.targetOffset = w(this.options.targetOffset), null != this.scrollParent && this.disable(), this.scrollParent = "scroll-handle" === this.targetModifier ? this.target : g(this.target), this.options.enabled !== !1 ? this.enable(e) : void 0
			}, t.prototype.getTargetBounds = function() {
				var t, e, n, i, s, o, a, r, l;
				if (null == this.targetModifier) return u(this.target);
				switch (this.targetModifier) {
				case "visible":
					return this.target === document.body ? {
						top: pageYOffset,
						left: pageXOffset,
						height: innerHeight,
						width: innerWidth
					} : (t = u(this.target), s = {
						height: t.height,
						width: t.width,
						top: t.top,
						left: t.left
					}, s.height = Math.min(s.height, t.height - (pageYOffset - t.top)), s.height = Math.min(s.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), s.height = Math.min(innerHeight, s.height), s.height -= 2, s.width = Math.min(s.width, t.width - (pageXOffset - t.left)), s.width = Math.min(s.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), s.width = Math.min(innerWidth, s.width), s.width -= 2, s.top < pageYOffset && (s.top = pageYOffset), s.left < pageXOffset && (s.left = pageXOffset), s);
				case "scroll-handle":
					return l = this.target, l === document.body ? (l = document.documentElement, t = {
						left: pageXOffset,
						top: pageYOffset,
						height: innerHeight,
						width: innerWidth
					}) : t = u(l), r = getComputedStyle(l), n = l.scrollWidth > l.clientWidth || "scroll" === [r.overflow, r.overflowX] || this.target !== document.body, o = 0, n && (o = 15), i = t.height - parseFloat(r.borderTopWidth) - parseFloat(r.borderBottomWidth) - o, s = {
						width: 15,
						height: .975 * i * (i / l.scrollHeight),
						left: t.left + t.width - parseFloat(r.borderLeftWidth) - 15
					}, e = 0, 408 > i && this.target === document.body && (e = -11e-5 * Math.pow(i, 2) - .00727 * i + 22.58), this.target !== document.body && (s.height = Math.max(s.height, 24)), a = this.target.scrollTop / (l.scrollHeight - i), s.top = a * (i - s.height - e) + t.top + parseFloat(r.borderTopWidth), this.target === document.body && (s.height = Math.max(s.height, 24)), s
				}
			}, t.prototype.clearCache = function() {
				return this._cache = {}
			}, t.prototype.cache = function(t, e) {
				return null == this._cache && (this._cache = {}), null == this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
			}, t.prototype.enable = function(t) {
				return null == t && (t = !0), s(this.target, this.getClass("enabled")), s(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), t ? this.position() : void 0
			}, t.prototype.disable = function() {
				return C(this.target, this.getClass("enabled")), C(this.element, this.getClass("enabled")), this.enabled = !1, null != this.scrollParent ? this.scrollParent.removeEventListener("scroll", this.position) : void 0
			}, t.prototype.destroy = function() {
				var t, e, n, i, s;
				for (this.disable(), s = [], t = n = 0, i = S.length; i > n; t = ++n) {
					if (e = S[t], e === this) {
						S.splice(t, 1);
						break
					}
					s.push(void 0)
				}
				return s
			}, t.prototype.updateAttachClasses = function(t, e) {
				var n, i, s, o, a, r, c, h, u, d = this;
				for (null == t && (t = this.attachment), null == e && (e = this.targetAttachment), o = ["left", "top", "bottom", "right", "middle", "center"], (null != (u = this._addAttachClasses) ? u.length : void 0) && this._addAttachClasses.splice(0, this._addAttachClasses.length), n = null != this._addAttachClasses ? this._addAttachClasses : this._addAttachClasses = [], t.top && n.push("" + this.getClass("element-attached") + "-" + t.top), t.left && n.push("" + this.getClass("element-attached") + "-" + t.left), e.top && n.push("" + this.getClass("target-attached") + "-" + e.top), e.left && n.push("" + this.getClass("target-attached") + "-" + e.left), i = [], a = 0, c = o.length; c > a; a++) s = o[a], i.push("" + this.getClass("element-attached") + "-" + s);
				for (r = 0, h = o.length; h > r; r++) s = o[r], i.push("" + this.getClass("target-attached") + "-" + s);
				return l(function() {
					return null != d._addAttachClasses ? (k(d.element, d._addAttachClasses, i), k(d.target, d._addAttachClasses, i), d._addAttachClasses = void 0) : void 0
				})
			}, t.prototype.position = function(t) {
				var e, n, s, l, c, f, g, m, v, y, w, x, C, S, D, k, _, T, M, E, F, N, A, I, L, P, O, H, R, z, $, j, W, B, U, q = this;
				if (null == t && (t = !0), this.enabled) {
					for (this.clearCache(), E = r(this.targetAttachment, this.attachment), this.updateAttachClasses(this.attachment, E), e = this.cache("element-bounds", function() {
						return u(q.element)
					}), L = e.width, s = e.height, 0 === L && 0 === s && null != this.lastSize ? (z = this.lastSize, L = z.width, s = z.height) : this.lastSize = {
						width: L,
						height: s
					}, A = N = this.cache("target-bounds", function() {
						return q.getTargetBounds()
					}), v = b(a(this.attachment), {
						width: L,
						height: s
					}), F = b(a(E), A), c = b(this.offset, {
						width: L,
						height: s
					}), f = b(this.targetOffset, A), v = o(v, c), F = o(F, f), l = N.left + F.left - v.left, I = N.top + F.top - v.top, $ = i.modules, P = 0, H = $.length; H > P; P++) if (g = $[P], D = g.position.call(this, {
						left: l,
						top: I,
						targetAttachment: E,
						targetPos: N,
						attachment: this.attachment,
						elementPos: e,
						offset: v,
						targetOffset: F,
						manualOffset: c,
						manualTargetOffset: f,
						scrollbarSize: T
					}), null != D && "object" == typeof D) {
						if (D === !1) return !1;
						I = D.top, l = D.left
					}
					if (m = {
						page: {
							top: I,
							left: l
						},
						viewport: {
							top: I - pageYOffset,
							bottom: pageYOffset - I - s + innerHeight,
							left: l - pageXOffset,
							right: pageXOffset - l - L + innerWidth
						}
					}, document.body.scrollWidth > window.innerWidth && (T = this.cache("scrollbar-size", p), m.viewport.bottom -= T.height), document.body.scrollHeight > window.innerHeight && (T = this.cache("scrollbar-size", p), m.viewport.right -= T.width), ("" !== (j = document.body.style.position) && "static" !== j || "" !== (W = document.body.parentElement.style.position) && "static" !== W) && (m.page.bottom = document.body.scrollHeight - I - s, m.page.right = document.body.scrollWidth - l - L), (null != (B = this.options.optimizations) ? B.moveElement : void 0) !== !1 && null == this.targetModifier) {
						for (w = this.cache("target-offsetparent", function() {
							return d(q.target)
						}), S = this.cache("target-offsetparent-bounds", function() {
							return u(w)
						}), C = getComputedStyle(w), n = getComputedStyle(this.element), x = S, y = {}, U = ["Top", "Left", "Bottom", "Right"], O = 0, R = U.length; R > O; O++) M = U[O], y[M.toLowerCase()] = parseFloat(C["border" + M + "Width"]);
						S.right = document.body.scrollWidth - S.left - x.width + y.right, S.bottom = document.body.scrollHeight - S.top - x.height + y.bottom, m.page.top >= S.top + y.top && m.page.bottom >= S.bottom && m.page.left >= S.left + y.left && m.page.right >= S.right && (_ = w.scrollTop, k = w.scrollLeft, m.offset = {
							top: m.page.top - S.top + _ - y.top,
							left: m.page.left - S.left + k - y.left
						})
					}
					return this.move(m), this.history.unshift(m), this.history.length > 3 && this.history.pop(), t && h(), !0
				}
			}, t.prototype.move = function(t) {
				var e, n, i, s, o, a, r, h, u, f, p, g, m, v, b, y, w, x = this;
				if (null != this.element.parentNode) {
					h = {};
					for (f in t) {
						h[f] = {};
						for (s in t[f]) {
							for (i = !1, y = this.history, v = 0, b = y.length; b > v; v++) if (r = y[v], !_(null != (w = r[f]) ? w[s] : void 0, t[f][s])) {
								i = !0;
								break
							}
							i || (h[f][s] = !0)
						}
					}
					e = {
						top: "",
						left: "",
						right: "",
						bottom: ""
					}, u = function(t, n) {
						var i, s, o;
						return (null != (o = x.options.optimizations) ? o.gpu : void 0) === !1 ? (t.top ? e.top = "" + n.top + "px" : e.bottom = "" + n.bottom + "px", t.left ? e.left = "" + n.left + "px" : e.right = "" + n.right + "px") : (t.top ? (e.top = 0, s = n.top) : (e.bottom = 0, s = -n.bottom), t.left ? (e.left = 0, i = n.left) : (e.right = 0, i = -n.right), e[D] = "translateX(" + Math.round(i) + "px) translateY(" + Math.round(s) + "px)", "msTransform" !== D ? e[D] += " translateZ(0)" : void 0)
					}, o = !1, (h.page.top || h.page.bottom) && (h.page.left || h.page.right) ? (e.position = "absolute", u(h.page, t.page)) : (h.viewport.top || h.viewport.bottom) && (h.viewport.left || h.viewport.right) ? (e.position = "fixed", u(h.viewport, t.viewport)) : null != h.offset && h.offset.top && h.offset.left ? (e.position = "absolute", a = this.cache("target-offsetparent", function() {
						return d(x.target)
					}), d(this.element) !== a && l(function() {
						return x.element.parentNode.removeChild(x.element), a.appendChild(x.element)
					}), u(h.offset, t.offset), o = !0) : (e.position = "absolute", u({
						top: !0,
						left: !0
					}, t.page)), o || "BODY" === this.element.parentNode.tagName || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element)), m = {}, g = !1;
					for (s in e) p = e[s], n = this.element.style[s], "" === n || "" === p || "top" !== s && "left" !== s && "bottom" !== s && "right" !== s || (n = parseFloat(n), p = parseFloat(p)), n !== p && (g = !0, m[s] = e[s]);
					return g ? l(function() {
						return c(x.element.style, m)
					}) : void 0
				}
			}, t
		}(), i.position = x, this.Tether = c(T, i)
	}.call(this), function() {
		var t, e, n, i, s, o, a, r, l, c, h = [].indexOf ||
		function(t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return -1
		};
		c = this.Tether.Utils, a = c.getOuterSize, o = c.getBounds, r = c.getSize, i = c.extend, l = c.updateClasses, n = c.defer, e = {
			left: "right",
			right: "left",
			top: "bottom",
			bottom: "top",
			middle: "middle"
		}, t = ["left", "top", "right", "bottom"], s = function(e, n) {
			var i, s, a, r, l, c, h;
			if ("scrollParent" === n ? n = e.scrollParent : "window" === n && (n = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), n === document && (n = n.documentElement), null != n.nodeType) for (s = r = o(n), l = getComputedStyle(n), n = [s.left, s.top, r.width + s.left, r.height + s.top], i = c = 0, h = t.length; h > c; i = ++c) a = t[i], a = a[0].toUpperCase() + a.substr(1), "Top" === a || "Left" === a ? n[i] += parseFloat(l["border" + a + "Width"]) : n[i] -= parseFloat(l["border" + a + "Width"]);
			return n
		}, this.Tether.modules.push({
			position: function(e) {
				var a, r, c, u, d, f, p, g, m, v, b, y, w, x, C, S, D, k, _, T, M, E, F, N, A, I, L, P, O, H, R, z, $, j, W, B, U, q, Y, V, X, G, J, K, Z, Q, te, ee = this;
				if (I = e.top, b = e.left, M = e.targetAttachment, !this.options.constraints) return !0;
				for (k = function(e) {
					var n, i, s, o;
					for (ee.removeClass(e), o = [], i = 0, s = t.length; s > i; i++) n = t[i], o.push(ee.removeClass("" + e + "-" + n));
					return o
				}, V = this.cache("element-bounds", function() {
					return o(ee.element)
				}), v = V.height, L = V.width, 0 === L && 0 === v && null != this.lastSize && (X = this.lastSize, L = X.width, v = X.height), F = this.cache("target-bounds", function() {
					return ee.getTargetBounds()
				}), E = F.height, N = F.width, T = {}, m = {}, r = [this.getClass("pinned"), this.getClass("out-of-bounds")], G = this.options.constraints, P = 0, z = G.length; z > P; P++) g = G[P], g.outOfBoundsClass && r.push(g.outOfBoundsClass), g.pinnedClass && r.push(g.pinnedClass);
				for (O = 0, $ = r.length; $ > O; O++) for (p = r[O], J = ["left", "top", "right", "bottom"], H = 0, j = J.length; j > H; H++) _ = J[H], r.push("" + p + "-" + _);
				for (a = [], T = i({}, M), m = i({}, this.attachment), K = this.options.constraints, R = 0, W = K.length; W > R; R++) {
					if (g = K[R], A = g.to, c = g.attachment, C = g.pin, null == c && (c = ""), h.call(c, " ") >= 0 ? (Z = c.split(" "), f = Z[0], d = Z[1]) : d = f = c, u = s(this, A), ("target" === f || "both" === f) && (I < u[1] && "top" === T.top && (I += E, T.top = "bottom"), I + v > u[3] && "bottom" === T.top && (I -= E, T.top = "top")), "together" === f && (I < u[1] && "top" === T.top && ("bottom" === m.top ? (I += E, T.top = "bottom", I += v, m.top = "top") : "top" === m.top && (I += E, T.top = "bottom", I -= v, m.top = "bottom")), I + v > u[3] && "bottom" === T.top && ("top" === m.top ? (I -= E, T.top = "top", I -= v, m.top = "bottom") : "bottom" === m.top && (I -= E, T.top = "top", I += v, m.top = "top")), "middle" === T.top && (I + v > u[3] && "top" === m.top ? (I -= v, m.top = "bottom") : I < u[1] && "bottom" === m.top && (I += v, m.top = "top"))), ("target" === d || "both" === d) && (b < u[0] && "left" === T.left && (b += N, T.left = "right"), b + L > u[2] && "right" === T.left && (b -= N, T.left = "left")), "together" === d && (b < u[0] && "left" === T.left ? "right" === m.left ? (b += N, T.left = "right", b += L, m.left = "left") : "left" === m.left && (b += N, T.left = "right", b -= L, m.left = "right") : b + L > u[2] && "right" === T.left ? "left" === m.left ? (b -= N, T.left = "left", b -= L, m.left = "right") : "right" === m.left && (b -= N, T.left = "left", b += L, m.left = "left") : "center" === T.left && (b + L > u[2] && "left" === m.left ? (b -= L, m.left = "right") : b < u[0] && "right" === m.left && (b += L, m.left = "left"))), ("element" === f || "both" === f) && (I < u[1] && "bottom" === m.top && (I += v, m.top = "top"), I + v > u[3] && "top" === m.top && (I -= v, m.top = "bottom")), ("element" === d || "both" === d) && (b < u[0] && "right" === m.left && (b += L, m.left = "left"), b + L > u[2] && "left" === m.left && (b -= L, m.left = "right")), "string" == typeof C ? C = function() {
						var t, e, n, i;
						for (n = C.split(","), i = [], e = 0, t = n.length; t > e; e++) x = n[e], i.push(x.trim());
						return i
					}() : C === !0 && (C = ["top", "left", "right", "bottom"]), C || (C = []), S = [], y = [], I < u[1] && (h.call(C, "top") >= 0 ? (I = u[1], S.push("top")) : y.push("top")), I + v > u[3] && (h.call(C, "bottom") >= 0 ? (I = u[3] - v, S.push("bottom")) : y.push("bottom")), b < u[0] && (h.call(C, "left") >= 0 ? (b = u[0], S.push("left")) : y.push("left")), b + L > u[2] && (h.call(C, "right") >= 0 ? (b = u[2] - L, S.push("right")) : y.push("right")), S.length) for (D = null != (Q = this.options.pinnedClass) ? Q : this.getClass("pinned"), a.push(D), q = 0, B = S.length; B > q; q++) _ = S[q], a.push("" + D + "-" + _);
					if (y.length) for (w = null != (te = this.options.outOfBoundsClass) ? te : this.getClass("out-of-bounds"), a.push(w), Y = 0, U = y.length; U > Y; Y++) _ = y[Y], a.push("" + w + "-" + _);
					(h.call(S, "left") >= 0 || h.call(S, "right") >= 0) && (m.left = T.left = !1), (h.call(S, "top") >= 0 || h.call(S, "bottom") >= 0) && (m.top = T.top = !1), (T.top !== M.top || T.left !== M.left || m.top !== this.attachment.top || m.left !== this.attachment.left) && this.updateAttachClasses(m, T)
				}
				return n(function() {
					return l(ee.target, a, r), l(ee.element, a, r)
				}), {
					top: I,
					left: b
				}
			}
		})
	}.call(this), function() {
		var t, e, n, i;
		i = this.Tether.Utils, e = i.getBounds, n = i.updateClasses, t = i.defer, this.Tether.modules.push({
			position: function(i) {
				var s, o, a, r, l, c, h, u, d, f, p, g, m, v, b, y, w, x, C, S, D, k, _, T, M, E = this;
				if (p = i.top, c = i.left, D = this.cache("element-bounds", function() {
					return e(E.element)
				}), l = D.height, g = D.width, f = this.getTargetBounds(), r = p + l, h = c + g, s = [], p <= f.bottom && r >= f.top) for (k = ["left", "right"], m = 0, w = k.length; w > m; m++) u = k[m], ((_ = f[u]) === c || _ === h) && s.push(u);
				if (c <= f.right && h >= f.left) for (T = ["top", "bottom"], v = 0, x = T.length; x > v; v++) u = T[v], ((M = f[u]) === p || M === r) && s.push(u);
				for (a = [], o = [], d = ["left", "top", "right", "bottom"], a.push(this.getClass("abutted")), b = 0, C = d.length; C > b; b++) u = d[b], a.push("" + this.getClass("abutted") + "-" + u);
				for (s.length && o.push(this.getClass("abutted")), y = 0, S = s.length; S > y; y++) u = s[y], o.push("" + this.getClass("abutted") + "-" + u);
				return t(function() {
					return n(E.target, o, a), n(E.element, o, a)
				}), !0
			}
		})
	}.call(this), function() {
		this.Tether.modules.push({
			position: function(t) {
				var e, n, i, s, o, a, r;
				return a = t.top, e = t.left, this.options.shift ? (n = function(t) {
					return "function" == typeof t ? t.call(this, {
						top: a,
						left: e
					}) : t
				}, i = n(this.options.shift), "string" == typeof i ? (i = i.split(" "), i[1] || (i[1] = i[0]), o = i[0], s = i[1], o = parseFloat(o, 10), s = parseFloat(s, 10)) : (r = [i.top, i.left], o = r[0], s = r[1]), a += o, e += s, {
					top: a,
					left: e
				}) : void 0
			}
		})
	}.call(this), this.Tether
}), function() {
	var t, e, n, i, s, o, a, r, l, c, h, u, d, f, p, g = function(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		},
		m = {}.hasOwnProperty,
		v = function(t, e) {
			function n() {
				this.constructor = t
			}
			for (var i in e) m.call(e, i) && (t[i] = e[i]);
			return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
		};
	p = Tether.Utils, r = p.extend, d = p.removeClass, o = p.addClass, c = p.hasClass, e = p.Evented, l = p.getBounds, f = p.uniqueId, n = new e, t = {
		top: "bottom center",
		left: "middle right",
		right: "middle left",
		bottom: "top center"
	}, a = function(t) {
		var e;
		return e = document.createElement("div"), e.innerHTML = t, e.children[0]
	}, h = function(t, e) {
		var n, i, s, o, a;
		return n = null != (i = null != (s = null != (o = null != (a = t.matches) ? a : t.matchesSelector) ? o : t.webkitMatchesSelector) ? s : t.mozMatchesSelector) ? i : t.oMatchesSelector, n.call(t, e)
	}, u = function(t, e) {
		var n, i, s, o, a, r;
		if (null == t) return t;
		if ("object" == typeof t) return t;
		for (o = t.split(" "), o.length > e.length && (o[0] = o.slice(0, +(o.length - e.length) + 1 || 9e9).join(" "), o.splice(1, o.length - e.length)), i = {}, n = a = 0, r = e.length; r > a; n = ++a) s = e[n], i[s] = o[n];
		return i
	}, i = function(e) {
		function n(t, e) {
			this.tour = t, this.destroy = g(this.destroy, this), this.scrollTo = g(this.scrollTo, this), this.complete = g(this.complete, this), this.cancel = g(this.cancel, this), this.isOpen = g(this.isOpen, this), this.hide = g(this.hide, this), this.show = g(this.show, this), this.setOptions(e)
		}
		return v(n, e), n.prototype.setOptions = function(t) {
			var e, n, i, s;
			if (this.options = null != t ? t : {}, this.destroy(), this.id = this.options.id || this.id || "step-" + f(), this.options.when) {
				s = this.options.when;
				for (e in s) n = s[e], this.on(e, n, this)
			}
			return null != (i = this.options).buttons ? (i = this.options).buttons : i.buttons = [{
				text: "Next",
				action: this.tour.next
			}]
		}, n.prototype.getTour = function() {
			return this.tour
		}, n.prototype.bindAdvance = function() {
			var t, e, n, i, s = this;
			return i = u(this.options.advanceOn, ["selector", "event"]), t = i.event, n = i.selector, e = function(t) {
				if (s.isOpen()) if (null != n) {
					if (h(t.target, n)) return s.tour.next()
				} else if (s.el && t.target === s.el) return s.tour.next()
			}, document.body.addEventListener(t, e), this.on("destroy", function() {
				return document.body.removeEventListener(t, e)
			})
		}, n.prototype.getAttachTo = function() {
			var t;
			if (t = u(this.options.attachTo, ["element", "on"]), null == t && (t = {}), "string" == typeof t.element && (t.element = document.querySelector(t.element), null == t.element)) throw new Error("Shepherd step's attachTo was not found in the page");
			return t
		}, n.prototype.setupTether = function() {
			var e, n, i;
			if ("undefined" == typeof Tether || null === Tether) throw new Error("Using the attachment feature of Shepherd requires the Tether library");
			return n = this.getAttachTo(), e = t[n.on || "right"], null == n.element && (n.element = "viewport", e = "middle center"), i = {
				classPrefix: "shepherd",
				element: this.el,
				constraints: [{
					to: "window",
					pin: !0,
					attachment: "together"
				}],
				target: n.element,
				offset: n.offset || "0 0",
				attachment: e
			}, this.tether = new Tether(r(i, this.options.tetherOptions))
		}, n.prototype.show = function() {
			var t = this;
			return null == this.el && this.render(), o(this.el, "shepherd-open"), document.body.setAttribute("data-shepherd-step", this.id), this.setupTether(), this.options.scrollTo && setTimeout(function() {
				return t.scrollTo()
			}), this.trigger("show")
		}, n.prototype.hide = function() {
			var t;
			return d(this.el, "shepherd-open"), document.body.removeAttribute("data-shepherd-step"), null != (t = this.tether) && t.destroy(), this.tether = null, this.trigger("hide")
		}, n.prototype.isOpen = function() {
			return c(this.el, "shepherd-open")
		}, n.prototype.cancel = function() {
			return this.tour.cancel(), this.trigger("cancel")
		}, n.prototype.complete = function() {
			return this.tour.complete(), this.trigger("complete")
		}, n.prototype.scrollTo = function() {
			var t;
			return t = this.getAttachTo().element, null != t ? t.scrollIntoView() : void 0
		}, n.prototype.destroy = function() {
			var t;
			return null != this.el && (document.body.removeChild(this.el), delete this.el), null != (t = this.tether) && t.destroy(), this.tether = null, this.trigger("destroy")
		}, n.prototype.render = function() {
			var t, e, n, i, s, o, r, l, c, h, u, d, f, p, g, m, v;
			if (null != this.el && this.destroy(), this.el = a("<div class='shepherd-step " + (null != (g = this.options.classes) ? g : "") + "' data-id='" + this.id + "'></div>"), i = document.createElement("div"), i.className = "shepherd-content", this.el.appendChild(i), o = document.createElement("header"), i.appendChild(o), null != this.options.title && (o.innerHTML += "<h3 class='shepherd-title'>" + this.options.title + "</h3>", this.el.className += " shepherd-has-title"), this.options.showCancelLink && (r = a("<a href class='shepherd-cancel-link'>\u2715</a>"), o.appendChild(r), this.el.className += " shepherd-has-cancel-link", this.bindCancelLink(r)), null != this.options.text) {
				for (h = a("<div class='shepherd-text'></div>"), c = this.options.text, "string" == typeof c && (c = [c]), u = 0, f = c.length; f > u; u++) l = c[u], h.innerHTML += "<p>" + l + "</p>";
				i.appendChild(h)
			}
			if (s = document.createElement("footer"), this.options.buttons) {
				for (e = a("<ul class='shepherd-buttons'></ul>"), m = this.options.buttons, d = 0, p = m.length; p > d; d++) n = m[d], t = a("<li><a class='shepherd-button " + (null != (v = n.classes) ? v : "") + "'>" + n.text + "</a>"), e.appendChild(t), this.bindButtonEvents(n, t.querySelector("a"));
				s.appendChild(e)
			}
			return i.appendChild(s), document.body.appendChild(this.el), this.setupTether(), this.options.advanceOn ? this.bindAdvance() : void 0
		}, n.prototype.bindCancelLink = function(t) {
			var e = this;
			return t.addEventListener("click", function(t) {
				return t.preventDefault(), e.cancel()
			})
		}, n.prototype.bindButtonEvents = function(t, e) {
			var n, i, s, o, a = this;
			null == t.events && (t.events = {}), null != t.action && (t.events.click = t.action), o = t.events;
			for (n in o) i = o[n], "string" == typeof i && (s = i, i = function() {
				return a.tour.show(s)
			}), e.addEventListener(n, i);
			return this.on("destroy", function() {
				var s, o;
				s = t.events, o = [];
				for (n in s) i = s[n], o.push(e.removeEventListener(n, i));
				return o
			})
		}, n
	}(e), s = function(t) {
		function e(t) {
			var e, i, s, o, a, r, l = this;
			for (this.options = null != t ? t : {}, this.hide = g(this.hide, this), this.complete = g(this.complete, this), this.cancel = g(this.cancel, this), this.back = g(this.back, this), this.next = g(this.next, this), this.steps = null != (a = this.options.steps) ? a : [], r = ["complete", "cancel", "hide", "start", "show", "active", "inactive"], i = function(t) {
				return l.on(t, function(e) {
					return null == e && (e = {}), e.tour = l, n.trigger(t, e)
				})
			}, s = 0, o = r.length; o > s; s++) e = r[s], i(e)
		}
		return v(e, t), e.prototype.addStep = function(t, e) {
			var n;
			return null == e && (e = t), e instanceof i ? e.tour = this : (("string" == (n = typeof t) || "number" === n) && (e.id = t.toString()), e = r({}, this.options.defaults, e), e = new i(this, e)), this.steps.push(e), e
		}, e.prototype.getById = function(t) {
			var e, n, i, s;
			for (s = this.steps, n = 0, i = s.length; i > n; n++) if (e = s[n], e.id === t) return e
		}, e.prototype.getCurrentStep = function() {
			return this.currentStep
		}, e.prototype.next = function() {
			var t;
			return t = this.steps.indexOf(this.currentStep), t === this.steps.length - 1 ? (this.hide(t), this.trigger("complete"), this.done()) : this.show(t + 1)
		}, e.prototype.back = function() {
			var t;
			return t = this.steps.indexOf(this.currentStep), this.show(t - 1)
		}, e.prototype.cancel = function() {
			var t;
			return null != (t = this.currentStep) && t.hide(), this.trigger("cancel"), this.done()
		}, e.prototype.complete = function() {
			var t;
			return null != (t = this.currentStep) && t.hide(), this.trigger("complete"), this.done()
		}, e.prototype.hide = function() {
			var t;
			return null != (t = this.currentStep) && t.hide(), this.trigger("hide"), this.done()
		}, e.prototype.done = function() {
			return n.activeTour = null, d(document.body, "shepherd-active"), this.trigger("inactive", {
				tour: this
			})
		}, e.prototype.show = function(t) {
			var e;
			return null == t && (t = 0), this.currentStep ? this.currentStep.hide() : (o(document.body, "shepherd-active"), this.trigger("active", {
				tour: this
			})), n.activeTour = this, e = "string" == typeof t ? this.getById(t) : this.steps[t], e ? (this.trigger("show", {
				step: e,
				previous: this.currentStep
			}), this.currentStep = e, e.show()) : void 0
		}, e.prototype.start = function() {
			return this.trigger("start"), this.currentStep = null, this.next()
		}, e
	}(e), r(n, {
		Tour: s,
		Step: i,
		Evented: e
	}), window.Shepherd = n
}.call(this), !
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "codemirror"], t) : t(window.jQuery, window.CodeMirror)
}(function(t, e) {
	"function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(t, e) {
		var n, i, s = this.length >>> 0,
			o = !1;
		for (1 < arguments.length && (i = e, o = !0), n = 0; s > n; ++n) this.hasOwnProperty(n) && (o ? i = t(i, this[n], n, this) : (i = this[n], o = !0));
		if (!o) throw new TypeError("Reduce of empty array with no initial value");
		return i
	});
	var n = {
		bMac: navigator.appVersion.indexOf("Mac") > -1,
		bMSIE: navigator.userAgent.indexOf("MSIE") > -1,
		bFF: navigator.userAgent.indexOf("Firefox") > -1,
		jqueryVersion: parseFloat(t.fn.jquery),
		bCodeMirror: !! e
	},
		i = function() {
			var t = function(t) {
					return function(e) {
						return t === e
					}
				},
				e = function(t, e) {
					return t === e
				},
				n = function() {
					return !0
				},
				i = function() {
					return !1
				},
				s = function(t) {
					return function() {
						return !t.apply(t, arguments)
					}
				},
				o = function(t) {
					return t
				};
			return {
				eq: t,
				eq2: e,
				ok: n,
				fail: i,
				not: s,
				self: o
			}
		}(),
		s = function() {
			var t = function(t) {
					return t[0]
				},
				e = function(t) {
					return t[t.length - 1]
				},
				n = function(t) {
					return t.slice(0, t.length - 1)
				},
				s = function(t) {
					return t.slice(1)
				},
				o = function(t, e) {
					var n = t.indexOf(e);
					return -1 === n ? null : t[n + 1]
				},
				a = function(t, e) {
					var n = t.indexOf(e);
					return -1 === n ? null : t[n - 1]
				},
				r = function(t, e) {
					return e = e || i.self, t.reduce(function(t, n) {
						return t + e(n)
					}, 0)
				},
				l = function(t) {
					for (var e = [], n = -1, i = t.length; ++n < i;) e[n] = t[n];
					return e
				},
				c = function(n, i) {
					if (0 === n.length) return [];
					var o = s(n);
					return o.reduce(function(t, n) {
						var s = e(t);
						return i(e(s), n) ? s[s.length] = n : t[t.length] = [n], t
					}, [
						[t(n)]
					])
				},
				h = function(t) {
					for (var e = [], n = 0, i = t.length; i > n; n++) t[n] && e.push(t[n]);
					return e
				};
			return {
				head: t,
				last: e,
				initial: n,
				tail: s,
				prev: a,
				next: o,
				sum: r,
				from: l,
				compact: h,
				clusterBy: c
			}
		}(),
		o = function() {
			var e = function(e) {
					return e && t(e).hasClass("note-editable")
				},
				a = function(e) {
					return e && t(e).hasClass("note-control-sizing")
				},
				r = function(t) {
					var e = function(e) {
							return function() {
								return t.find(e)
							}
						};
					return {
						editor: function() {
							return t
						},
						dropzone: e(".note-dropzone"),
						toolbar: e(".note-toolbar"),
						editable: e(".note-editable"),
						codable: e(".note-codable"),
						statusbar: e(".note-statusbar"),
						popover: e(".note-popover"),
						handle: e(".note-handle"),
						dialog: e(".note-dialog")
					}
				},
				l = function(t) {
					return function(e) {
						return e && e.nodeName === t
					}
				},
				c = function(t) {
					return t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName)
				},
				h = function(t) {
					return t && /^UL|^OL/.test(t.nodeName)
				},
				u = function(t) {
					return t && /^TD|^TH/.test(t.nodeName)
				},
				d = function(t, n) {
					for (; t;) {
						if (n(t)) return t;
						if (e(t)) break;
						t = t.parentNode
					}
					return null
				},
				f = function(t, e) {
					e = e || i.fail;
					var n = [];
					return d(t, function(t) {
						return n.push(t), e(t)
					}), n
				},
				p = function(e, n) {
					for (var i = f(e), s = n; s; s = s.parentNode) if (t.inArray(s, i) > -1) return s;
					return null
				},
				g = function(t, e) {
					var n = [],
						i = !1,
						s = !1;
					return function o(a) {
						if (a) {
							if (a === t && (i = !0), i && !s && n.push(a), a === e) return void(s = !0);
							for (var r = 0, l = a.childNodes.length; l > r; r++) o(a.childNodes[r])
						}
					}(p(t, e)), n
				},
				m = function(t, e) {
					e = e || i.fail;
					for (var n = []; t && (n.push(t), !e(t));) t = t.previousSibling;
					return n
				},
				v = function(t, e) {
					e = e || i.fail;
					for (var n = []; t && (n.push(t), !e(t));) t = t.nextSibling;
					return n
				},
				b = function(t, e) {
					var n = [];
					return e = e || i.ok, function s(i) {
						t !== i && e(i) && n.push(i);
						for (var o = 0, a = i.childNodes.length; a > o; o++) s(i.childNodes[o])
					}(t), n
				},
				y = function(t, e) {
					var n = e.nextSibling,
						i = e.parentNode;
					return n ? i.insertBefore(t, n) : i.appendChild(t), t
				},
				w = function(e, n) {
					return t.each(n, function(t, n) {
						e.appendChild(n)
					}), e
				},
				x = l("#text"),
				C = function(t) {
					return x(t) ? t.nodeValue.length : t.childNodes.length
				},
				S = function(t) {
					for (var e = 0; t = t.previousSibling;) e += 1;
					return e
				},
				D = function(e, n) {
					var o = s.initial(f(n, i.eq(e)));
					return t.map(o, S).reverse()
				},
				k = function(t, e) {
					for (var n = t, i = 0, s = e.length; s > i; i++) n = n.childNodes[e[i]];
					return n
				},
				_ = function(t, e) {
					if (0 === e) return t;
					if (e >= C(t)) return t.nextSibling;
					if (x(t)) return t.splitText(e);
					var n = t.childNodes[e];
					return t = y(t.cloneNode(!1), t), w(t, v(n))
				},
				T = function(t, e, n) {
					var s = f(e, i.eq(t));
					return 1 === s.length ? _(e, n) : s.reduce(function(t, i) {
						var s = i.cloneNode(!1);
						return y(s, i), t === e && (t = _(t, n)), w(s, v(t)), s
					})
				},
				M = function(t, e) {
					if (t && t.parentNode) {
						if (t.removeNode) return t.removeNode(e);
						var n = t.parentNode;
						if (!e) {
							var i, s, o = [];
							for (i = 0, s = t.childNodes.length; s > i; i++) o.push(t.childNodes[i]);
							for (i = 0, s = o.length; s > i; i++) n.insertBefore(o[i], t)
						}
						n.removeChild(t)
					}
				},
				E = function(t) {
					return o.isTextarea(t[0]) ? t.val() : t.html()
				};
			return {
				blank: n.bMSIE ? "&nbsp;" : "<br/>",
				emptyPara: "<p><br/></p>",
				isEditable: e,
				isControlSizing: a,
				buildLayoutInfo: r,
				isText: x,
				isPara: c,
				isList: h,
				isTable: l("TABLE"),
				isCell: u,
				isAnchor: l("A"),
				isDiv: l("DIV"),
				isLi: l("LI"),
				isSpan: l("SPAN"),
				isB: l("B"),
				isU: l("U"),
				isS: l("S"),
				isI: l("I"),
				isImg: l("IMG"),
				isTextarea: l("TEXTAREA"),
				ancestor: d,
				listAncestor: f,
				listNext: v,
				listPrev: m,
				listDescendant: b,
				commonAncestor: p,
				listBetween: g,
				insertAfter: y,
				position: S,
				makeOffsetPath: D,
				fromOffsetPath: k,
				split: T,
				remove: M,
				html: E
			}
		}(),
		a = {
			version: "0.5.1",
			options: {
				width: null,
				height: null,
				focus: !1,
				tabsize: null,
				styleWithSpan: !0,
				disableLinkTarget: !1,
				disableDragAndDrop: !1,
				codemirror: null,
				lang: "en-US",
				direction: null,
				toolbar: [
					["style", ["style"]],
					["font", ["bold", "italic", "underline", "clear"]],
					["fontname", ["fontname"]],
					["color", ["color"]],
					["para", ["ul", "ol", "paragraph"]],
					["height", ["height"]],
					["table", ["table"]],
					["insert", ["link", "picture", "video"]],
					["view", ["fullscreen", "codeview"]],
					["help", ["help"]]
				],
				oninit: null,
				onfocus: null,
				onblur: null,
				onenter: null,
				onkeyup: null,
				onkeydown: null,
				onImageUpload: null,
				onImageUploadError: null,
				onToolbarClick: null,
				keyMap: {
					pc: {
						"CTRL+Z": "undo",
						"CTRL+Y": "redo",
						TAB: "tab",
						"SHIFT+TAB": "untab",
						"CTRL+B": "bold",
						"CTRL+I": "italic",
						"CTRL+U": "underline",
						"CTRL+SHIFT+S": "strikethrough",
						"CTRL+BACKSLASH": "removeFormat",
						"CTRL+SHIFT+L": "justifyLeft",
						"CTRL+SHIFT+E": "justifyCenter",
						"CTRL+SHIFT+R": "justifyRight",
						"CTRL+SHIFT+J": "justifyFull",
						"CTRL+SHIFT+NUM7": "insertUnorderedList",
						"CTRL+SHIFT+NUM8": "insertOrderedList",
						"CTRL+LEFTBRACKET": "outdent",
						"CTRL+RIGHTBRACKET": "indent",
						"CTRL+NUM0": "formatPara",
						"CTRL+NUM1": "formatH1",
						"CTRL+NUM2": "formatH2",
						"CTRL+NUM3": "formatH3",
						"CTRL+NUM4": "formatH4",
						"CTRL+NUM5": "formatH5",
						"CTRL+NUM6": "formatH6",
						"CTRL+ENTER": "insertHorizontalRule"
					},
					mac: {
						"CMD+Z": "undo",
						"CMD+SHIFT+Z": "redo",
						TAB: "tab",
						"SHIFT+TAB": "untab",
						"CMD+B": "bold",
						"CMD+I": "italic",
						"CMD+U": "underline",
						"CMD+SHIFT+S": "strikethrough",
						"CMD+BACKSLASH": "removeFormat",
						"CMD+SHIFT+L": "justifyLeft",
						"CMD+SHIFT+E": "justifyCenter",
						"CMD+SHIFT+R": "justifyRight",
						"CMD+SHIFT+J": "justifyFull",
						"CMD+SHIFT+NUM7": "insertUnorderedList",
						"CMD+SHIFT+NUM8": "insertOrderedList",
						"CMD+LEFTBRACKET": "outdent",
						"CMD+RIGHTBRACKET": "indent",
						"CMD+NUM0": "formatPara",
						"CMD+NUM1": "formatH1",
						"CMD+NUM2": "formatH2",
						"CMD+NUM3": "formatH3",
						"CMD+NUM4": "formatH4",
						"CMD+NUM5": "formatH5",
						"CMD+NUM6": "formatH6",
						"CMD+ENTER": "insertHorizontalRule"
					}
				}
			},
			lang: {
				"en-US": {
					font: {
						bold: "Bold",
						italic: "Italic",
						underline: "Underline",
						strike: "Strike",
						clear: "Remove Font Style",
						height: "Line Height",
						name: "Font Family",
						size: "Font Size"
					},
					image: {
						image: "Picture",
						insert: "Insert Image",
						resizeFull: "Resize Full",
						resizeHalf: "Resize Half",
						resizeQuarter: "Resize Quarter",
						floatLeft: "Float Left",
						floatRight: "Float Right",
						floatNone: "Float None",
						dragImageHere: "Drag an image here",
						selectFromFiles: "Select from files",
						url: "Image URL",
						remove: "Remove Image"
					},
					link: {
						link: "Link",
						insert: "Insert Link",
						unlink: "Unlink",
						edit: "Edit",
						textToDisplay: "Text to display",
						url: "To what URL should this link go?",
						openInNewWindow: "Open in new window"
					},
					video: {
						video: "Video",
						videoLink: "Video Link",
						insert: "Insert Video",
						url: "Video URL?",
						providers: "(YouTube, Vimeo, Vine, Instagram, or DailyMotion)"
					},
					table: {
						table: "Table"
					},
					hr: {
						insert: "Insert Horizontal Rule"
					},
					style: {
						style: "Style",
						normal: "Normal",
						blockquote: "Quote",
						pre: "Code",
						h1: "Header 1",
						h2: "Header 2",
						h3: "Header 3",
						h4: "Header 4",
						h5: "Header 5",
						h6: "Header 6"
					},
					lists: {
						unordered: "Unordered list",
						ordered: "Ordered list"
					},
					options: {
						help: "Help",
						fullscreen: "Full Screen",
						codeview: "Code View"
					},
					paragraph: {
						paragraph: "Paragraph",
						outdent: "Outdent",
						indent: "Indent",
						left: "Align left",
						center: "Align center",
						right: "Align right",
						justify: "Justify full"
					},
					color: {
						recent: "Recent Color",
						more: "More Color",
						background: "BackColor",
						foreground: "FontColor",
						transparent: "Transparent",
						setTransparent: "Set transparent",
						reset: "Reset",
						resetToDefault: "Reset to default"
					},
					shortcut: {
						shortcuts: "Keyboard shortcuts",
						close: "Close",
						textFormatting: "Text formatting",
						action: "Action",
						paragraphFormatting: "Paragraph formatting",
						documentStyle: "Document Style"
					},
					history: {
						undo: "Undo",
						redo: "Redo"
					}
				}
			}
		},
		r = function() {
			var e = function(e) {
					return t.Deferred(function(n) {
						t.extend(new FileReader, {
							onload: function(t) {
								var e = t.target.result;
								n.resolve(e)
							},
							onerror: function() {
								n.reject(this)
							}
						}).readAsDataURL(e)
					}).promise()
				},
				n = function(e) {
					return t.Deferred(function(n) {
						t("<img>").one("load", function() {
							n.resolve(t(this))
						}).one("error abort", function() {
							n.reject(t(this))
						}).css({
							display: "none"
						}).appendTo(document.body).attr("src", e)
					}).promise()
				};
			return {
				readFileAsDataURL: e,
				createImage: n
			}
		}(),
		l = {
			isEdit: function(t) {
				return -1 !== [8, 9, 13, 32].indexOf(t)
			},
			nameFromCode: {
				8: "BACKSPACE",
				9: "TAB",
				13: "ENTER",
				32: "SPACE",
				48: "NUM0",
				49: "NUM1",
				50: "NUM2",
				51: "NUM3",
				52: "NUM4",
				53: "NUM5",
				54: "NUM6",
				55: "NUM7",
				56: "NUM8",
				66: "B",
				69: "E",
				73: "I",
				74: "J",
				75: "K",
				76: "L",
				82: "R",
				83: "S",
				85: "U",
				89: "Y",
				90: "Z",
				191: "SLASH",
				219: "LEFTBRACKET",
				220: "BACKSLASH",
				221: "RIGHTBRACKET"
			}
		},
		c = function() {
			var e = function(e, i) {
					if (n.jqueryVersion < 1.9) {
						var s = {};
						return t.each(i, function(t, n) {
							s[n] = e.css(n)
						}), s
					}
					return e.css.call(e, i)
				};
			this.stylePara = function(e, n) {
				t.each(e.nodes(o.isPara), function(e, i) {
					t(i).css(n)
				})
			}, this.current = function(n, i) {
				var s = t(o.isText(n.sc) ? n.sc.parentNode : n.sc),
					a = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
					r = e(s, a) || {};
				if (r["font-size"] = parseInt(r["font-size"]), r["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", r["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", r["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", n.isOnList()) {
					var l = ["circle", "disc", "disc-leading-zero", "square"],
						c = t.inArray(r["list-style-type"], l) > -1;
					r["list-style"] = c ? "unordered" : "ordered"
				} else r["list-style"] = "none";
				var h = o.ancestor(n.sc, o.isPara);
				if (h && h.style["line-height"]) r["line-height"] = h.style.lineHeight;
				else {
					var u = parseInt(r["line-height"]) / parseInt(r["font-size"]);
					r["line-height"] = u.toFixed(1)
				}
				return r.image = o.isImg(i) && i, r.anchor = n.isOnAnchor() && o.ancestor(n.sc, o.isAnchor), r.aAncestor = o.listAncestor(n.sc, o.isEditable), r
			}
		},
		h = function() {
			var e = !! document.createRange,
				n = function(t, e) {
					var n, i, a = t.parentElement(),
						r = document.body.createTextRange(),
						l = s.from(a.childNodes);
					for (n = 0; n < l.length; n++) if (!o.isText(l[n])) {
						if (r.moveToElementText(l[n]), r.compareEndPoints("StartToStart", t) >= 0) break;
						i = l[n]
					}
					if (0 !== n && o.isText(l[n - 1])) {
						var c = document.body.createTextRange(),
							h = null;
						c.moveToElementText(i || a), c.collapse(!i), h = i ? i.nextSibling : a.firstChild;
						var u = t.duplicate();
						u.setEndPoint("StartToStart", c);
						for (var d = u.text.replace(/[\r\n]/g, "").length; d > h.nodeValue.length && h.nextSibling;) d -= h.nodeValue.length, h = h.nextSibling;
						h.nodeValue, e && h.nextSibling && o.isText(h.nextSibling) && d === h.nodeValue.length && (d -= h.nodeValue.length, h = h.nextSibling), a = h, n = d
					}
					return {
						cont: a,
						offset: n
					}
				},
				a = function(t) {
					var e = function(t, n) {
							var a, r;
							if (o.isText(t)) {
								var l = o.listPrev(t, i.not(o.isText)),
									c = s.last(l).previousSibling;
								a = c || t.parentNode, n += s.sum(s.tail(l), o.length), r = !c
							} else {
								if (a = t.childNodes[n] || t, o.isText(a)) return e(a, n);
								n = 0, r = !1
							}
							return {
								cont: a,
								collapseToStart: r,
								offset: n
							}
						},
						n = document.body.createTextRange(),
						a = e(t.cont, t.offset);
					return n.moveToElementText(a.cont), n.collapse(a.collapseToStart), n.moveStart("character", a.offset), n
				},
				r = function(n, r, l, c) {
					this.sc = n, this.so = r, this.ec = l, this.eo = c;
					var h = function() {
							if (e) {
								var t = document.createRange();
								return t.setStart(n, r), t.setEnd(l, c), t
							}
							var i = a({
								cont: n,
								offset: r
							});
							return i.setEndPoint("EndToEnd", a({
								cont: l,
								offset: c
							})), i
						};
					this.select = function() {
						var t = h();
						if (e) {
							var n = document.getSelection();
							n.rangeCount > 0 && n.removeAllRanges(), n.addRange(t)
						} else t.select()
					}, this.nodes = function(e) {
						var a = o.listBetween(n, l),
							r = s.compact(t.map(a, function(t) {
								return o.ancestor(t, e)
							}));
						return t.map(s.clusterBy(r, i.eq2), s.head)
					}, this.commonAncestor = function() {
						return o.commonAncestor(n, l)
					};
					var u = function(t) {
							return function() {
								var e = o.ancestor(n, t);
								return !!e && e === o.ancestor(l, t)
							}
						};
					this.isOnEditable = u(o.isEditable), this.isOnList = u(o.isList), this.isOnAnchor = u(o.isAnchor), this.isOnCell = u(o.isCell), this.isCollapsed = function() {
						return n === l && r === c
					}, this.insertNode = function(t) {
						var n = h();
						e ? n.insertNode(t) : n.pasteHTML(t.outerHTML)
					}, this.toString = function() {
						var t = h();
						return e ? t.toString() : t.text
					}, this.bookmark = function(t) {
						return {
							s: {
								path: o.makeOffsetPath(t, n),
								offset: r
							},
							e: {
								path: o.makeOffsetPath(t, l),
								offset: c
							}
						}
					}
				};
			return {
				create: function(t, i, s, o) {
					if (0 === arguments.length) if (e) {
						var a = document.getSelection();
						if (0 === a.rangeCount) return null;
						var l = a.getRangeAt(0);
						t = l.startContainer, i = l.startOffset, s = l.endContainer, o = l.endOffset
					} else {
						var c = document.selection.createRange(),
							h = c.duplicate();
						h.collapse(!1);
						var u = c;
						u.collapse(!0);
						var d = n(u, !0),
							f = n(h, !1);
						t = d.cont, i = d.offset, s = f.cont, o = f.offset
					} else 2 === arguments.length && (s = t, o = i);
					return new r(t, i, s, o)
				},
				createFromNode: function(t) {
					return this.create(t, 0, t, 1)
				},
				createFromBookmark: function(t, e) {
					var n = o.fromOffsetPath(t, e.s.path),
						i = e.s.offset,
						s = o.fromOffsetPath(t, e.e.path),
						a = e.e.offset;
					return new r(n, i, s, a)
				}
			}
		}(),
		u = function() {
			this.tab = function(t, e) {
				var n = o.ancestor(t.commonAncestor(), o.isCell),
					i = o.ancestor(n, o.isTable),
					a = o.listDescendant(i, o.isCell),
					r = s[e ? "prev" : "next"](a, n);
				r && h.create(r, 0).select()
			}, this.createTable = function(e, n) {
				for (var i, s = [], a = 0; e > a; a++) s.push("<td>" + o.blank + "</td>");
				i = s.join("");
				for (var r, l = [], c = 0; n > c; c++) l.push("<tr>" + i + "</tr>");
				r = l.join("");
				var h = '<table class="table table-bordered">' + r + "</table>";
				return t(h)[0]
			}
		},
		d = function() {
			var e = new c,
				i = new u;
			this.saveRange = function(t) {
				t.data("range", h.create())
			}, this.restoreRange = function(t) {
				var e = t.data("range");
				e && e.select()
			}, this.currentStyle = function(t) {
				var n = h.create();
				return n.isOnEditable() && e.current(n, t)
			}, this.undo = function(t) {
				t.data("NoteHistory").undo(t)
			}, this.redo = function(t) {
				t.data("NoteHistory").redo(t)
			};
			for (var s = this.recordUndo = function(t) {
					t.data("NoteHistory").recordUndo(t)
				}, a = ["bold", "italic", "underline", "strikethrough", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "insertOrderedList", "insertUnorderedList", "indent", "outdent", "formatBlock", "removeFormat", "backColor", "foreColor", "insertHorizontalRule", "fontName"], l = 0, d = a.length; d > l; l++) this[a[l]] = function(t) {
				return function(e, n) {
					s(e), document.execCommand(t, !1, n)
				}
			}(a[l]);
			var f = function(e, n, i) {
					s(e);
					var a = new Array(i + 1).join("&nbsp;");
					n.insertNode(t('<span id="noteTab">' + a + "</span>")[0]);
					var r = t("#noteTab").removeAttr("id");
					n = h.create(r[0], 1), n.select(), o.remove(r[0])
				};
			this.tab = function(t, e) {
				var n = h.create();
				n.isCollapsed() && n.isOnCell() ? i.tab(n) : f(t, n, e.tabsize)
			}, this.untab = function() {
				var t = h.create();
				t.isCollapsed() && t.isOnCell() && i.tab(t, !0)
			}, this.insertImage = function(t, e) {
				r.createImage(e).then(function(e) {
					s(t), e.css({
						display: "",
						width: Math.min(t.width(), e.width())
					}), h.create().insertNode(e[0])
				}).fail(function() {
					var e = t.data("callbacks");
					e.onImageUploadError && e.onImageUploadError()
				})
			}, this.insertVideo = function(e, n) {
				s(e);
				var i, o = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
					a = n.match(o),
					r = /\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/,
					l = n.match(r),
					c = /\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/,
					u = n.match(c),
					d = /\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/,
					f = n.match(d),
					p = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
					g = n.match(p);
				if (a && 11 === a[2].length) {
					var m = a[2];
					i = t("<iframe>").attr("src", "//www.youtube.com/embed/" + m).attr("width", "640").attr("height", "360")
				} else l && l[0].length > 0 ? i = t("<iframe>").attr("src", l[0] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true") : u && u[0].length > 0 ? i = t("<iframe>").attr("src", u[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed") : f && f[3].length > 0 ? i = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("src", "//player.vimeo.com/video/" + f[3]).attr("width", "640").attr("height", "360") : g && g[2].length > 0 && (i = t("<iframe>").attr("src", "//www.dailymotion.com/embed/video/" + g[2]).attr("width", "640").attr("height", "360"));
				i && (i.attr("frameborder", 0), h.create().insertNode(i[0]))
			}, this.formatBlock = function(t, e) {
				s(t), e = n.bMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e)
			}, this.formatPara = function(t) {
				this.formatBlock(t, "P")
			};
			for (var l = 1; 6 >= l; l++) this["formatH" + l] = function(t) {
				return function(e) {
					this.formatBlock(e, "H" + t)
				}
			}(l);
			this.fontSize = function(t, e) {
				s(t), document.execCommand("fontSize", !1, 3), n.bFF ? t.find("font[size=3]").removeAttr("size").css("font-size", e + "px") : t.find("span").filter(function() {
					return "medium" === this.style.fontSize
				}).css("font-size", e + "px")
			}, this.lineHeight = function(t, n) {
				s(t), e.stylePara(h.create(), {
					lineHeight: n
				})
			}, this.unlink = function(t) {
				var e = h.create();
				if (e.isOnAnchor()) {
					s(t);
					var n = o.ancestor(e.sc, o.isAnchor);
					e = h.createFromNode(n), e.select(), document.execCommand("unlink")
				}
			}, this.createLink = function(e, i, a) {
				var r = h.create();
				s(e);
				var l = i;
				if (-1 !== i.indexOf("@") && -1 === i.indexOf(":") ? l = "mailto:" + i : -1 === i.indexOf("://") && (l = "http://" + i), (n.bMSIE || n.bFF) && r.isCollapsed()) {
					r.insertNode(t('<A id="linkAnchor">' + i + "</A>")[0]);
					var c = t("#linkAnchor").attr("href", l).removeAttr("id");
					r = h.createFromNode(c[0]), r.select()
				} else document.execCommand("createlink", !1, l), r = h.create();
				t.each(r.nodes(o.isAnchor), function(e, n) {
					a ? t(n).attr("target", "_blank") : t(n).removeAttr("target")
				})
			}, this.getLinkInfo = function() {
				var e = h.create(),
					n = !0,
					i = "";
				if (e.isOnAnchor()) {
					var s = o.ancestor(e.sc, o.isAnchor);
					e = h.createFromNode(s), n = "_blank" === t(s).attr("target"), i = s.href
				}
				return {
					text: e.toString(),
					url: i,
					newWindow: n
				}
			}, this.getVideoInfo = function() {
				var t = h.create();
				if (t.isOnAnchor()) {
					var e = o.ancestor(t.sc, o.isAnchor);
					t = h.createFromNode(e)
				}
				return {
					text: t.toString()
				}
			}, this.color = function(t, e) {
				var n = JSON.parse(e),
					i = n.foreColor,
					o = n.backColor;
				s(t), i && document.execCommand("foreColor", !1, i), o && document.execCommand("backColor", !1, o)
			}, this.insertTable = function(t, e) {
				s(t);
				var n = e.split("x");
				h.create().insertNode(i.createTable(n[0], n[1]))
			}, this.floatMe = function(t, e, n) {
				s(t), n.css("float", e)
			}, this.resize = function(t, e, n) {
				s(t), n.css({
					width: t.width() * e + "px",
					height: ""
				})
			}, this.resizeTo = function(t, e, n) {
				var i;
				if (n) {
					var s = t.y / t.x,
						o = e.data("ratio");
					i = {
						width: o > s ? t.x : t.y / o,
						height: o > s ? t.x * o : t.y
					}
				} else i = {
					width: t.x,
					height: t.y
				};
				e.css(i)
			}, this.removeMedia = function(t, e, n) {
				s(t), n.detach()
			}
		},
		f = function() {
			var t = [],
				e = [],
				n = function(t) {
					var e = t[0],
						n = h.create();
					return {
						contents: t.html(),
						bookmark: n.bookmark(e),
						scrollTop: t.scrollTop()
					}
				},
				i = function(t, e) {
					t.html(e.contents).scrollTop(e.scrollTop), h.createFromBookmark(t[0], e.bookmark).select()
				};
			this.undo = function(s) {
				var o = n(s);
				0 !== t.length && (i(s, t.pop()), e.push(o))
			}, this.redo = function(s) {
				var o = n(s);
				0 !== e.length && (i(s, e.pop()), t.push(o))
			}, this.recordUndo = function(i) {
				e = [], t.push(n(i))
			}
		},
		p = function() {
			this.update = function(e, n) {
				var i = function(e, n) {
						e.find(".dropdown-menu li a").each(function() {
							var e = t(this).data("value") + "" == n + "";
							this.className = e ? "checked" : ""
						})
					},
					o = function(t, n) {
						var i = e.find(t);
						i.toggleClass("active", n())
					},
					a = e.find(".note-fontname");
				if (a.length > 0) {
					var r = n["font-family"];
					r && (r = s.head(r.split(",")), r = r.replace(/\'/g, ""), a.find(".note-current-fontname").text(r), i(a, r))
				}
				var l = e.find(".note-fontsize");
				l.find(".note-current-fontsize").text(n["font-size"]), i(l, parseFloat(n["font-size"]));
				var c = e.find(".note-height");
				i(c, parseFloat(n["line-height"])), o('button[data-event="bold"]', function() {
					return "bold" === n["font-bold"]
				}), o('button[data-event="italic"]', function() {
					return "italic" === n["font-italic"]
				}), o('button[data-event="underline"]', function() {
					return "underline" === n["font-underline"]
				}), o('button[data-event="justifyLeft"]', function() {
					return "left" === n["text-align"] || "start" === n["text-align"]
				}), o('button[data-event="justifyCenter"]', function() {
					return "center" === n["text-align"]
				}), o('button[data-event="justifyRight"]', function() {
					return "right" === n["text-align"]
				}), o('button[data-event="justifyFull"]', function() {
					return "justify" === n["text-align"]
				}), o('button[data-event="insertUnorderedList"]', function() {
					return "unordered" === n["list-style"]
				}), o('button[data-event="insertOrderedList"]', function() {
					return "ordered" === n["list-style"]
				})
			}, this.updateRecentColor = function(e, n, i) {
				var s = t(e).closest(".note-color"),
					o = s.find(".note-recent-color"),
					a = JSON.parse(o.attr("data-value"));
				a[n] = i, o.attr("data-value", JSON.stringify(a));
				var r = "backColor" === n ? "background-color" : "color";
				o.find("i").css(r, i)
			}, this.updateFullscreen = function(t, e) {
				var n = t.find('button[data-event="fullscreen"]');
				n.toggleClass("active", e)
			}, this.updateCodeview = function(t, e) {
				var n = t.find('button[data-event="codeview"]');
				n.toggleClass("active", e)
			}, this.activate = function(t) {
				t.find("button").not('button[data-event="codeview"]').removeClass("disabled")
			}, this.deactivate = function(t) {
				t.find("button").not('button[data-event="codeview"]').addClass("disabled")
			}
		},
		g = function() {
			var e = function(e, n) {
					var i = t(n),
						s = i.position(),
						o = i.height();
					e.css({
						display: "block",
						left: s.left,
						top: s.top + o
					})
				};
			this.update = function(t, n) {
				var i = t.find(".note-link-popover");
				if (n.anchor) {
					var s = i.find("a");
					s.attr("href", n.anchor.href).html(n.anchor.href), e(i, n.anchor)
				} else i.hide();
				var o = t.find(".note-image-popover");
				n.image ? e(o, n.image) : o.hide()
			}, this.hide = function(t) {
				t.children().hide()
			}
		},
		m = function() {
			this.update = function(e, n) {
				var i = e.find(".note-control-selection");
				if (n.image) {
					var s = t(n.image),
						o = s.position(),
						a = {
							w: s.width(),
							h: s.height()
						};
					i.css({
						display: "block",
						left: o.left,
						top: o.top,
						width: a.w,
						height: a.h
					}).data("target", n.image);
					var r = a.w + "x" + a.h;
					i.find(".note-control-selection-info").text(r)
				} else i.hide()
			}, this.hide = function(t) {
				t.children().hide()
			}
		},
		v = function() {
			var e = function(t, e) {
					t.toggleClass("disabled", !e), t.attr("disabled", !e)
				};
			this.showImageDialog = function(n, i) {
				return t.Deferred(function(t) {
					var s = i.find(".note-image-dialog"),
						o = i.find(".note-image-input"),
						a = i.find(".note-image-url"),
						r = i.find(".note-image-btn");
					s.one("shown.bs.modal", function(n) {
						n.stopPropagation(), o.replaceWith(o.clone().on("change", function() {
							s.modal("hide"), t.resolve(this.files)
						})), r.click(function(e) {
							e.preventDefault(), s.modal("hide"), t.resolve(a.val())
						}), a.keyup(function() {
							e(r, a.val())
						}).val("").focus()
					}).one("hidden.bs.modal", function(t) {
						t.stopPropagation(), n.focus(), o.off("change"), a.off("keyup"), r.off("click")
					}).modal("show")
				})
			}, this.showVideoDialog = function(n, i, s) {
				return t.Deferred(function(t) {
					var o = i.find(".note-video-dialog"),
						a = o.find(".note-video-url"),
						r = o.find(".note-video-btn");
					o.one("shown.bs.modal", function(n) {
						n.stopPropagation(), a.val(s.text).keyup(function() {
							e(r, a.val())
						}).trigger("keyup").trigger("focus"), r.click(function(e) {
							e.preventDefault(), o.modal("hide"), t.resolve(a.val())
						})
					}).one("hidden.bs.modal", function(t) {
						t.stopPropagation(), n.focus(), a.off("keyup"), r.off("click")
					}).modal("show")
				})
			}, this.showLinkDialog = function(n, i, s) {
				return t.Deferred(function(t) {
					var o = i.find(".note-link-dialog"),
						a = o.find(".note-link-text"),
						r = o.find(".note-link-url"),
						l = o.find(".note-link-btn"),
						c = o.find("input[type=checkbox]");
					o.one("shown.bs.modal", function(n) {
						n.stopPropagation(), a.val(s.text), r.keyup(function() {
							e(l, r.val()), s.text || a.val(r.val())
						}).val(s.url).trigger("focus"), c.prop("checked", s.newWindow), l.one("click", function(e) {
							e.preventDefault(), o.modal("hide"), t.resolve(r.val(), c.is(":checked"))
						})
					}).one("hidden.bs.modal", function(t) {
						t.stopPropagation(), n.focus(), r.off("keyup")
					}).modal("show")
				}).promise()
			}, this.showHelpDialog = function(t, e) {
				var n = e.find(".note-help-dialog");
				n.one("hidden.bs.modal", function(e) {
					e.stopPropagation(), t.focus()
				}).modal("show")
			}
		},
		b = function() {
			var i = new d,
				s = new p,
				a = new g,
				c = new m,
				h = new v,
				u = function(e) {
					var n = t(e).closest(".note-editor");
					return n.length > 0 && o.buildLayoutInfo(n)
				},
				b = function(e, n) {
					i.restoreRange(e);
					var s = e.data("callbacks");
					s.onImageUpload ? s.onImageUpload(n, i, e) : t.each(n, function(t, n) {
						r.readFileAsDataURL(n).then(function(t) {
							i.insertImage(e, t)
						}).fail(function() {
							s.onImageUploadError && s.onImageUploadError()
						})
					})
				},
				y = function(t) {
					o.isImg(t.target) && t.preventDefault()
				},
				w = function(t) {
					var e = u(t.currentTarget || t.target),
						n = i.currentStyle(t.target);
					n && (s.update(e.toolbar(), n), a.update(e.popover(), n), c.update(e.handle(), n))
				},
				x = function(t) {
					var e = u(t.currentTarget || t.target);
					a.hide(e.popover()), c.hide(e.handle())
				},
				C = function(e) {
					if (o.isControlSizing(e.target)) {
						var n = u(e.target),
							s = n.handle(),
							r = n.popover(),
							l = n.editable(),
							h = n.editor(),
							d = s.find(".note-control-selection").data("target"),
							f = t(d),
							p = f.offset(),
							g = t(document).scrollTop();
						h.on("mousemove", function(t) {
							i.resizeTo({
								x: t.clientX - p.left,
								y: t.clientY - (p.top - g)
							}, f, !t.shiftKey), c.update(s, {
								image: d
							}), a.update(r, {
								image: d
							})
						}).one("mouseup", function() {
							h.off("mousemove")
						}), f.data("ratio") || f.data("ratio", f.height() / f.width()), i.recordUndo(l), e.stopPropagation(), e.preventDefault()
					}
				},
				S = function(e) {
					var n = t(e.target).closest("[data-event]");
					n.length > 0 && e.preventDefault()
				},
				D = function(a) {
					var r = t(a.target).closest("[data-event]");
					if (r.length > 0) {
						var l, c, d, f = r.attr("data-event"),
							p = r.attr("data-value"),
							g = u(a.target),
							m = g.editor(),
							v = g.toolbar(),
							y = g.dialog(),
							x = g.editable(),
							C = g.codable(),
							S = m.data("options");
						if (-1 !== t.inArray(f, ["resize", "floatMe", "removeMedia"])) {
							var D = g.handle(),
								k = D.find(".note-control-selection");
							d = t(k.data("target"))
						}
						if (i[f] && (x.trigger("focus"), i[f](x, p, d)), -1 !== t.inArray(f, ["backColor", "foreColor"])) s.updateRecentColor(r[0], f, p);
						else if ("showLinkDialog" === f) {
							x.focus();
							var _ = i.getLinkInfo();
							i.saveRange(x), h.showLinkDialog(x, y, _).then(function(t, e) {
								i.restoreRange(x), i.createLink(x, t, e)
							})
						} else if ("showImageDialog" === f) x.focus(), h.showImageDialog(x, y).then(function(t) {
							"string" == typeof t ? (i.restoreRange(x), i.insertImage(x, t)) : b(x, t)
						});
						else if ("showVideoDialog" === f) {
							x.focus();
							var T = i.getVideoInfo();
							i.saveRange(x), h.showVideoDialog(x, y, T).then(function(t) {
								i.restoreRange(x), i.insertVideo(x, t)
							})
						} else if ("showHelpDialog" === f) h.showHelpDialog(x, y);
						else if ("fullscreen" === f) {
							var M = t("html, body"),
								E = function(t) {
									m.css("width", t.w), x.css("height", t.h), C.css("height", t.h), C.data("cmEditor") && C.data("cmEditor").setSize(null, t.h)
								};
							m.toggleClass("fullscreen");
							var F = m.hasClass("fullscreen");
							F ? (x.data("orgHeight", x.css("height")), t(window).on("resize", function() {
								E({
									w: t(window).width(),
									h: t(window).height() - v.outerHeight()
								})
							}).trigger("resize"), M.css("overflow", "hidden")) : (t(window).off("resize"), E({
								w: S.width || "",
								h: x.data("orgHeight")
							}), M.css("overflow", "auto")), s.updateFullscreen(v, F)
						} else if ("codeview" === f) {
							m.toggleClass("codeview");
							var N = m.hasClass("codeview");
							if (N) {
								if (C.val(x.html()), C.height(x.height()), s.deactivate(v), C.focus(), n.bCodeMirror) {
									c = e.fromTextArea(C[0], t.extend({
										mode: "text/html",
										lineNumbers: !0
									}, S.codemirror));
									var A = m.data("options").codemirror.tern || !1;
									A && (l = new e.TernServer(A), c.ternServer = l, c.on("cursorActivity", function(t) {
										l.updateArgHints(t)
									})), c.setSize(null, x.outerHeight()), c.autoFormatRange && c.autoFormatRange({
										line: 0,
										ch: 0
									}, {
										line: c.lineCount(),
										ch: c.getTextArea().value.length
									}), C.data("cmEditor", c)
								}
							} else n.bCodeMirror && (c = C.data("cmEditor"), C.val(c.getValue()), c.toTextArea()), x.html(C.val() || o.emptyPara), x.height(S.height ? C.height() : "auto"), s.activate(v), x.focus();
							s.updateCodeview(g.toolbar(), N)
						}
						w(a)
					}
				},
				k = 24,
				_ = function(e) {
					var n = t(document),
						i = u(e.target).editable(),
						s = i.offset().top - n.scrollTop();
					n.on("mousemove", function(t) {
						var e = t.clientY - (s + k);
						i.height(e)
					}).one("mouseup", function() {
						n.off("mousemove")
					}), e.stopPropagation(), e.preventDefault()
				},
				T = 18,
				M = function(e) {
					var n, i = t(e.target.parentNode),
						s = i.next(),
						o = i.find(".note-dimension-picker-mousecatcher"),
						a = i.find(".note-dimension-picker-highlighted"),
						r = i.find(".note-dimension-picker-unhighlighted");
					if (void 0 === e.offsetX) {
						var l = t(e.target).offset();
						n = {
							x: e.pageX - l.left,
							y: e.pageY - l.top
						}
					} else n = {
						x: e.offsetX,
						y: e.offsetY
					};
					var c = {
						c: Math.ceil(n.x / T) || 1,
						r: Math.ceil(n.y / T) || 1
					};
					a.css({
						width: c.c + "em",
						height: c.r + "em"
					}), o.attr("data-value", c.c + "x" + c.r), 3 < c.c && c.c < 10 && r.css({
						width: c.c + 1 + "em"
					}), 3 < c.r && c.r < 10 && r.css({
						height: c.r + 1 + "em"
					}), s.html(c.c + " x " + c.r)
				},
				E = function(e) {
					var n = t(),
						i = e.dropzone,
						s = e.dropzone.find(".note-dropzone-message");
					t(document).on("dragenter", function(t) {
						var o = e.editor.hasClass("codeview");
						o || 0 !== n.length || (e.editor.addClass("dragover"), i.width(e.editor.width()), i.height(e.editor.height()), s.text("Drag Image Here")), n = n.add(t.target)
					}).on("dragleave", function(t) {
						n = n.not(t.target), 0 === n.length && e.editor.removeClass("dragover")
					}).on("drop", function() {
						n = t(), e.editor.removeClass("dragover")
					}), i.on("dragenter", function() {
						i.addClass("hover"), s.text("Drop Image")
					}).on("dragleave", function() {
						i.removeClass("hover"), s.text("Drag Image Here")
					}), i.on("drop", function(t) {
						var e = t.originalEvent.dataTransfer;
						if (e && e.files) {
							var n = u(t.currentTarget || t.target);
							n.editable().focus(), b(n.editable(), e.files)
						}
						t.preventDefault()
					}).on("dragover", !1)
				};
			this.bindKeyMap = function(t, e) {
				var n = t.editor,
					s = t.editable;
				s.on("keydown", function(t) {
					var o = [];
					t.metaKey && o.push("CMD"), t.ctrlKey && o.push("CTRL"), t.shiftKey && o.push("SHIFT");
					var a = l.nameFromCode[t.keyCode];
					a && o.push(a);
					var r = e[o.join("+")];
					r ? (t.preventDefault(), i[r](s, n.data("options"))) : l.isEdit(t.keyCode) && i.recordUndo(s)
				})
			}, this.attach = function(t, e) {
				var s = e.keyMap[n.bMac ? "mac" : "pc"];
				this.bindKeyMap(t, s), t.editable.on("mousedown", y), t.editable.on("keyup mouseup", w), t.editable.on("scroll", x), e.disableDragAndDrop || E(t), t.handle.on("mousedown", C), t.toolbar.on("click", D), t.popover.on("click", D), t.toolbar.on("mousedown", S), t.popover.on("mousedown", S), t.statusbar.on("mousedown", _);
				var o = t.toolbar,
					a = o.find(".note-dimension-picker-mousecatcher");
				a.on("mousemove", M), t.editable.on("blur", function() {
					i.saveRange(t.editable)
				}), t.editor.data("options", e), e.styleWithSpan && !n.bMSIE && setTimeout(function() {
					document.execCommand("styleWithCSS", 0, !0)
				}), t.editable.data("NoteHistory", new f), e.onenter && t.editable.keypress(function(t) {
					t.keyCode === l.ENTER && e.onenter(t)
				}), e.onfocus && t.editable.focus(e.onfocus), e.onblur && t.editable.blur(e.onblur), e.onkeyup && t.editable.keyup(e.onkeyup), e.onkeydown && t.editable.keydown(e.onkeydown), e.onpaste && t.editable.on("paste", e.onpaste), e.onToolbarClick && t.toolbar.click(e.onToolbarClick), t.editable.data("callbacks", {
					onChange: e.onChange,
					onAutoSave: e.onAutoSave,
					onImageUpload: e.onImageUpload,
					onImageUploadError: e.onImageUploadError,
					onFileUpload: e.onFileUpload,
					onFileUploadError: e.onFileUpload
				})
			}, this.dettach = function(t) {
				t.editable.off(), t.toolbar.off(), t.handle.off(), t.popover.off()
			}
		},
		y = function() {
			var e, i, s, a, r;
			e = {
				picture: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.image + '" data-event="showImageDialog" tabindex="-1"><i class="fa fa-picture-o icon-picture"></i></button>'
				},
				link: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.link.link + '" data-event="showLinkDialog" tabindex="-1"><i class="fa fa-link icon-link"></i></button>'
				},
				video: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.video.video + '" data-event="showVideoDialog" tabindex="-1"><i class="fa fa-youtube-play icon-play"></i></button>'
				},
				table: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="' + t.table.table + '" data-toggle="dropdown" tabindex="-1"><i class="fa fa-table icon-table"></i> <span class="caret"></span></button><ul class="dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>'
				},
				style: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="' + t.style.style + '" data-toggle="dropdown" tabindex="-1"><i class="fa fa-magic icon-magic"></i> <span class="caret"></span></button><ul class="dropdown-menu"><li><a data-event="formatBlock" data-value="p">' + t.style.normal + '</a></li><li><a data-event="formatBlock" data-value="blockquote"><blockquote>' + t.style.blockquote + '</blockquote></a></li><li><a data-event="formatBlock" data-value="pre">' + t.style.pre + '</a></li><li><a data-event="formatBlock" data-value="h1"><h1>' + t.style.h1 + '</h1></a></li><li><a data-event="formatBlock" data-value="h2"><h2>' + t.style.h2 + '</h2></a></li><li><a data-event="formatBlock" data-value="h3"><h3>' + t.style.h3 + '</h3></a></li><li><a data-event="formatBlock" data-value="h4"><h4>' + t.style.h4 + '</h4></a></li><li><a data-event="formatBlock" data-value="h5"><h5>' + t.style.h5 + '</h5></a></li><li><a data-event="formatBlock" data-value="h6"><h6>' + t.style.h6 + "</h6></a></li></ul>"
				},
				fontname: function(t) {
					var e = ["Serif", "Sans", "Arial", "Arial Black", "Courier", "Courier New", "Comic Sans MS", "Helvetica", "Impact", "Lucida Grande", "Lucida Sans", "Tahoma", "Times", "Times New Roman", "Verdana"],
						n = '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="' + t.font.name + '" tabindex="-1"><span class="note-current-fontname">Arial</span> <b class="caret"></b></button>';
					n += '<ul class="dropdown-menu">';
					for (var i = 0; i < e.length; i++) n += '<li><a data-event="fontName" data-value="' + e[i] + '"><i class="fa fa-check icon-ok"></i> ' + e[i] + "</a></li>";
					return n += "</ul>"
				},
				fontsize: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="' + t.font.size + '" tabindex="-1"><span class="note-current-fontsize">11</span> <b class="caret"></b></button><ul class="dropdown-menu"><li><a data-event="fontSize" data-value="8"><i class="fa fa-check icon-ok"></i> 8</a></li><li><a data-event="fontSize" data-value="9"><i class="fa fa-check icon-ok"></i> 9</a></li><li><a data-event="fontSize" data-value="10"><i class="fa fa-check icon-ok"></i> 10</a></li><li><a data-event="fontSize" data-value="11"><i class="fa fa-check icon-ok"></i> 11</a></li><li><a data-event="fontSize" data-value="12"><i class="fa fa-check icon-ok"></i> 12</a></li><li><a data-event="fontSize" data-value="14"><i class="fa fa-check icon-ok"></i> 14</a></li><li><a data-event="fontSize" data-value="18"><i class="fa fa-check icon-ok"></i> 18</a></li><li><a data-event="fontSize" data-value="24"><i class="fa fa-check icon-ok"></i> 24</a></li><li><a data-event="fontSize" data-value="36"><i class="fa fa-check icon-ok"></i> 36</a></li></ul>'
				},
				color: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small note-recent-color" title="' + t.color.recent + '" data-event="color" data-value=\'{"backColor":"yellow"}\' tabindex="-1"><i class="fa fa-font icon-font" style="color:black;background-color:yellow;"></i></button><button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="' + t.color.more + '" data-toggle="dropdown" tabindex="-1"><span class="caret"></span></button><ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">' + t.color.background + '</div><div class="note-color-reset" data-event="backColor" data-value="inherit" title="' + t.color.transparent + '">' + t.color.setTransparent + '</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">' + t.color.foreground + '</div><div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + t.color.reset + '">' + t.color.resetToDefault + '</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>'
				},
				bold: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.font.bold + '" data-shortcut="Ctrl+B" data-mac-shortcut="\u2318+B" data-event="bold" tabindex="-1"><i class="fa fa-bold icon-bold"></i></button>'
				},
				italic: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.font.italic + '" data-shortcut="Ctrl+I" data-mac-shortcut="\u2318+I" data-event="italic" tabindex="-1"><i class="fa fa-italic icon-italic"></i></button>'
				},
				underline: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.font.underline + '" data-shortcut="Ctrl+U" data-mac-shortcut="\u2318+U" data-event="underline" tabindex="-1"><i class="fa fa-underline icon-underline"></i></button>'
				},
				clear: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.font.clear + '" data-shortcut="Ctrl+\\" data-mac-shortcut="\u2318+\\" data-event="removeFormat" tabindex="-1"><i class="fa fa-eraser icon-eraser"></i></button>'
				},
				ul: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.lists.unordered + '" data-shortcut="Ctrl+Shift+8" data-mac-shortcut="\u2318+\u21e7+7" data-event="insertUnorderedList" tabindex="-1"><i class="fa fa-list-ul icon-list-ul"></i></button>'
				},
				ol: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.lists.ordered + '" data-shortcut="Ctrl+Shift+7" data-mac-shortcut="\u2318+\u21e7+8" data-event="insertOrderedList" tabindex="-1"><i class="fa fa-list-ol icon-list-ol"></i></button>'
				},
				paragraph: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="' + t.paragraph.paragraph + '" data-toggle="dropdown" tabindex="-1"><i class="fa fa-align-left icon-align-left"></i>  <span class="caret"></span></button><div class="dropdown-menu"><div class="note-align btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.left + '" data-shortcut="Ctrl+Shift+L" data-mac-shortcut="\u2318+\u21e7+L" data-event="justifyLeft" tabindex="-1"><i class="fa fa-align-left icon-align-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.center + '" data-shortcut="Ctrl+Shift+E" data-mac-shortcut="\u2318+\u21e7+E" data-event="justifyCenter" tabindex="-1"><i class="fa fa-align-center icon-align-center"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.right + '" data-shortcut="Ctrl+Shift+R" data-mac-shortcut="\u2318+\u21e7+R" data-event="justifyRight" tabindex="-1"><i class="fa fa-align-right icon-align-right"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.justify + '" data-shortcut="Ctrl+Shift+J" data-mac-shortcut="\u2318+\u21e7+J" data-event="justifyFull" tabindex="-1"><i class="fa fa-align-justify icon-align-justify"></i></button></div><div class="note-list btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.outdent + '" data-shortcut="Ctrl+[" data-mac-shortcut="\u2318+[" data-event="outdent" tabindex="-1"><i class="fa fa-outdent icon-indent-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.paragraph.indent + '" data-shortcut="Ctrl+]" data-mac-shortcut="\u2318+]" data-event="indent" tabindex="-1"><i class="fa fa-indent icon-indent-right"></i></button></div></div>'
				},
				height: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="' + t.font.height + '" tabindex="-1"><i class="fa fa-text-height icon-text-height"></i>&nbsp; <b class="caret"></b></button><ul class="dropdown-menu"><li><a data-event="lineHeight" data-value="1.0"><i class="fa fa-check icon-ok"></i> 1.0</a></li><li><a data-event="lineHeight" data-value="1.2"><i class="fa fa-check icon-ok"></i> 1.2</a></li><li><a data-event="lineHeight" data-value="1.4"><i class="fa fa-check icon-ok"></i> 1.4</a></li><li><a data-event="lineHeight" data-value="1.5"><i class="fa fa-check icon-ok"></i> 1.5</a></li><li><a data-event="lineHeight" data-value="1.6"><i class="fa fa-check icon-ok"></i> 1.6</a></li><li><a data-event="lineHeight" data-value="1.8"><i class="fa fa-check icon-ok"></i> 1.8</a></li><li><a data-event="lineHeight" data-value="2.0"><i class="fa fa-check icon-ok"></i> 2.0</a></li><li><a data-event="lineHeight" data-value="3.0"><i class="fa fa-check icon-ok"></i> 3.0</a></li></ul>'
				},
				help: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.options.help + '" data-event="showHelpDialog" tabindex="-1"><i class="fa fa-question icon-question"></i></button>'
				},
				fullscreen: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.options.fullscreen + '" data-event="fullscreen" tabindex="-1"><i class="fa fa-arrows-alt icon-fullscreen"></i></button>'
				},
				codeview: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.options.codeview + '" data-event="codeview" tabindex="-1"><i class="fa fa-code icon-code"></i></button>'
				},
				undo: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.history.undo + '" data-event="undo" tabindex="-1"><i class="fa fa-undo icon-undo"></i></button>'
				},
				redo: function(t) {
					return '<button type="button" class="btn btn-default btn-sm btn-small" title="' + t.history.redo + '" data-event="redo" tabindex="-1"><i class="fa fa-repeat icon-repeat"></i></button>'
				}
			}, i = function(t) {
				return '<div class="note-popover"><div class="note-link-popover popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content note-link-content"><a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.link.edit + '" data-event="showLinkDialog" tabindex="-1"><i class="fa fa-edit icon-edit"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.link.unlink + '" data-event="unlink" tabindex="-1"><i class="fa fa-unlink icon-unlink"></i></button></div></div></div><div class="note-image-popover popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content note-image-content"><div class="btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.resizeFull + '" data-event="resize" data-value="1" tabindex="-1"><span class="note-fontsize-10">100%</span> </button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.resizeHalf + '" data-event="resize" data-value="0.5" tabindex="-1"><span class="note-fontsize-10">50%</span> </button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.resizeQuarter + '" data-event="resize" data-value="0.25" tabindex="-1"><span class="note-fontsize-10">25%</span> </button></div><div class="btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.floatLeft + '" data-event="floatMe" data-value="left" tabindex="-1"><i class="fa fa-align-left icon-align-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.floatRight + '" data-event="floatMe" data-value="right" tabindex="-1"><i class="fa fa-align-right icon-align-right"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.floatNone + '" data-event="floatMe" data-value="none" tabindex="-1"><i class="fa fa-align-justify icon-align-justify"></i></button></div><div class="btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="' + t.image.remove + '" data-event="removeMedia" data-value="none" tabindex="-1"><i class="fa fa-trash-o icon-trash"></i></button></div></div></div></div>'
			};
			var s = function() {
					return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>'
				},
				l = function(t) {
					return '<table class="note-shortcut"><thead><tr><th></th><th>' + t.shortcut.textFormatting + "</th></tr></thead><tbody><tr><td>\u2318 + B</td><td>" + t.font.bold + "</td></tr><tr><td>\u2318 + I</td><td>" + t.font.italic + "</td></tr><tr><td>\u2318 + U</td><td>" + t.font.underline + "</td></tr><tr><td>\u2318 + \u21e7 + S</td><td>" + t.font.strike + "</td></tr><tr><td>\u2318 + \\</td><td>" + t.font.clear + "</td></tr></tr></tbody></table>"
				},
				c = function(t) {
					return '<table class="note-shortcut"><thead><tr><th></th><th>' + t.shortcut.action + "</th></tr></thead><tbody><tr><td>\u2318 + Z</td><td>" + t.history.undo + "</td></tr><tr><td>\u2318 + \u21e7 + Z</td><td>" + t.history.redo + "</td></tr><tr><td>\u2318 + ]</td><td>" + t.paragraph.indent + "</td></tr><tr><td>\u2318 + [</td><td>" + t.paragraph.outdent + "</td></tr><tr><td>\u2318 + ENTER</td><td>" + t.hr.insert + "</td></tr></tbody></table>"
				},
				h = function(t, e) {
					var n = '<table class="note-shortcut"><thead><tr><th></th><th>' + t.shortcut.extraKeys + "</th></tr></thead><tbody>";
					for (var i in e.extraKeys) e.extraKeys.hasOwnProperty(i) && (n += "<tr><td>" + i + "</td><td>" + e.extraKeys[i] + "</td></tr>");
					return n += "</tbody></table>"
				},
				u = function(t) {
					return '<table class="note-shortcut"><thead><tr><th></th><th>' + t.shortcut.paragraphFormatting + "</th></tr></thead><tbody><tr><td>\u2318 + \u21e7 + L</td><td>" + t.paragraph.left + "</td></tr><tr><td>\u2318 + \u21e7 + E</td><td>" + t.paragraph.center + "</td></tr><tr><td>\u2318 + \u21e7 + R</td><td>" + t.paragraph.right + "</td></tr><tr><td>\u2318 + \u21e7 + J</td><td>" + t.paragraph.justify + "</td></tr><tr><td>\u2318 + \u21e7 + NUM7</td><td>" + t.lists.ordered + "</td></tr><tr><td>\u2318 + \u21e7 + NUM8</td><td>" + t.lists.unordered + "</td></tr></tbody></table>"
				},
				d = function(t) {
					return '<table class="note-shortcut"><thead><tr><th></th><th>' + t.shortcut.documentStyle + "</th></tr></thead><tbody><tr><td>\u2318 + NUM0</td><td>" + t.style.normal + "</td></tr><tr><td>\u2318 + NUM1</td><td>" + t.style.h1 + "</td></tr><tr><td>\u2318 + NUM2</td><td>" + t.style.h2 + "</td></tr><tr><td>\u2318 + NUM3</td><td>" + t.style.h3 + "</td></tr><tr><td>\u2318 + NUM4</td><td>" + t.style.h4 + "</td></tr><tr><td>\u2318 + NUM5</td><td>" + t.style.h5 + "</td></tr><tr><td>\u2318 + NUM6</td><td>" + t.style.h6 + "</td></tr></tbody></table>"
				},
				f = function(t, e) {
					var n = '<table class="note-shortcut-layout"><tbody><tr><td>' + c(t, e) + "</td><td>" + l(t, e) + "</td></tr><tr><td>" + d(t, e) + "</td><td>" + u(t, e) + "</td></tr>";
					return e.extraKeys && (n += '<tr><td colspan="2">' + h(t, e) + "</td></tr>"), n += "</tbody</table>"
				},
				p = function(t) {
					return t.replace(/\u2318/g, "Ctrl").replace(/\u21e7/g, "Shift")
				};
			a = function(t, e) {
				var i = function() {
						return '<div class="note-image-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4>' + t.image.insert + '</h4></div><div class="modal-body"><div class="row-fluid"><h5>' + t.image.selectFromFiles + '</h5><input class="note-image-input" type="file" name="files" accept="image/*" /><h5>' + t.image.url + '</h5><input class="note-image-url form-control span12" type="text" /></div></div><div class="modal-footer"><button href="#" class="btn btn-primary note-image-btn disabled" disabled="disabled">' + t.image.insert + "</button></div></div></div></div>"
					},
					s = function() {
						return '<div class="note-link-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4>' + t.link.insert + '</h4></div><div class="modal-body"><div class="row-fluid"><div class="form-group"><label>' + t.link.textToDisplay + '</label><input class="note-link-text form-control span12" disabled type="text" /></div><div class="form-group"><label>' + t.link.url + '</label><input class="note-link-url form-control span12" type="text" /></div>' + (e.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + t.link.openInNewWindow + "</label></div>") + '</div></div><div class="modal-footer"><button href="#" class="btn btn-primary note-link-btn disabled" disabled="disabled">' + t.link.insert + "</button></div></div></div></div>"
					},
					o = function() {
						return '<div class="note-video-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4>' + t.video.insert + '</h4></div><div class="modal-body"><div class="row-fluid"><div class="form-group"><label>' + t.video.url + '</label>&nbsp;<small class="text-muted">' + t.video.providers + '</small><input class="note-video-url form-control span12" type="text" /></div></div></div><div class="modal-footer"><button href="#" class="btn btn-primary note-video-btn disabled" disabled="disabled">' + t.video.insert + "</button></div></div></div></div>"
					},
					a = function() {
						return '<div class="note-help-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + t.shortcut.close + '</a><div class="title">' + t.shortcut.shortcuts + "</div>" + (n.bMac ? f(t, e) : p(f(t, e))) + '<p class="text-center"><a href="//hackerwins.github.io/summernote/" target="_blank">Summernote 0.5.1</a> \xb7 <a href="//github.com/HackerWins/summernote" target="_blank">Project</a> \xb7 <a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a></p></div></div></div></div>'
					};
				return '<div class="note-dialog">' + i() + s() + o() + a() + "</div>"
			}, r = function() {
				return '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'
			};
			var g = function(e, i) {
					e.find("button").each(function(e, i) {
						var s = t(i),
							o = s.attr(n.bMac ? "data-mac-shortcut" : "data-shortcut");
						o && s.attr("title", function(t, e) {
							return e + " (" + o + ")"
						})
					}).tooltip({
						container: "body",
						trigger: "hover",
						placement: i || "top"
					}).on("click", function() {
						t(this).tooltip("hide")
					})
				},
				m = [
					["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
					["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
					["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
					["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
					["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
					["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
					["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
					["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
				],
				v = function(e) {
					e.find(".note-color-palette").each(function() {
						for (var e = t(this), n = e.attr("data-target-event"), i = [], s = 0, o = m.length; o > s; s++) {
							for (var a = m[s], r = [], l = 0, c = a.length; c > l; l++) {
								var h = a[l];
								r.push(['<button type="button" class="note-color-btn" style="background-color:', h, ';" data-event="', n, '" data-value="', h, '" title="', h, '" data-toggle="button" tabindex="-1"></button>'].join(""))
							}
							i.push("<div>" + r.join("") + "</div>")
						}
						e.html(i.join(""))
					})
				};
			this.createLayout = function(n, l) {
				var c = n.next();
				if (!c || !c.hasClass("note-editor")) {
					var h = t('<div class="note-editor"></div>');
					l.width && h.width(l.width), l.height > 0 && t('<div class="note-statusbar">' + r() + "</div>").prependTo(h);
					var u = !n.is(":disabled"),
						d = t('<div class="note-editable" contentEditable="' + u + '"></div>').prependTo(h);
					l.height && d.height(l.height), l.direction && d.attr("dir", l.direction), d.html(o.html(n) || o.emptyPara), t('<textarea class="note-codable"></textarea>').prependTo(h);
					for (var f = t.summernote.lang[l.lang], p = "", m = 0, b = l.toolbar.length; b > m; m++) {
						var y = l.toolbar[m];
						p += '<div class="note-' + y[0] + ' btn-group">';
						for (var w = 0, x = y[1].length; x > w; w++) p += e[y[1][w]](f);
						p += "</div>"
					}
					p = '<div class="note-toolbar btn-toolbar">' + p + "</div>";
					var C = t(p).prependTo(h);
					v(C), g(C, "bottom");
					var S = t(i(f)).prependTo(h);
					g(S), t(s()).prependTo(h);
					var D = t(a(f, l)).prependTo(h);
					D.find("button.close, a.modal-close").click(function() {
						t(this).closest(".modal").modal("hide")
					}), t('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(h), h.insertAfter(n), n.hide()
				}
			}, this.layoutInfoFromHolder = function(t) {
				var e = t.next();
				if (e.hasClass("note-editor")) {
					var n = o.buildLayoutInfo(e);
					for (var i in n) n.hasOwnProperty(i) && (n[i] = n[i].call());
					return n
				}
			}, this.removeLayout = function(t) {
				var e = this.layoutInfoFromHolder(t);
				e && (t.html(e.editable.html()), e.editor.remove(), t.show())
			}
		};
	t.summernote = t.summernote || {}, t.extend(t.summernote, a);
	var w = new y,
		x = new b;
	t.fn.extend({
		summernote: function(e) {
			if (e = t.extend({}, t.summernote.options, e), this.each(function(n, i) {
				var s = t(i);
				w.createLayout(s, e);
				var a = w.layoutInfoFromHolder(s);
				x.attach(a, e), o.isTextarea(s[0]) && s.closest("form").submit(function() {
					s.html(s.code())
				})
			}), this.first() && e.focus) {
				var n = w.layoutInfoFromHolder(this.first());
				n.editable.focus()
			}
			return this.length > 0 && e.oninit && e.oninit(), this
		},
		code: function(e) {
			if (void 0 === e) {
				var i = this.first();
				if (0 === i.length) return;
				var s = w.layoutInfoFromHolder(i);
				if (s && s.editable) {
					var o = s.editor.hasClass("codeview");
					return o && n.bCodeMirror && s.codable.data("cmEditor").save(), o ? s.codable.val() : s.editable.html()
				}
				return i.html()
			}
			return this.each(function(n, i) {
				var s = w.layoutInfoFromHolder(t(i));
				s && s.editable && s.editable.html(e)
			}), this
		},
		destroy: function() {
			return this.each(function(e, n) {
				var i = t(n),
					s = w.layoutInfoFromHolder(i);
				s && s.editable && (x.dettach(s), w.removeLayout(i))
			}), this
		}
	})
}), function() {
	function t(t, e, i) {
		n(e);
		var s = t.style,
			o = {};
		for (var a in e) i && (o[a] = s[a] || ""), s[a] = e[a];
		return o
	}
	function e() {
		var t = {},
			e = ["webkitTransition", "transition", "mozTransition"],
			n = ["webkitTransform", "transform", "mozTransform"],
			i = {
				transition: "transitionend",
				mozTransition: "transitionend",
				webkitTransition: "webkitTransitionEnd"
			};
		return e.some(function(e) {
			return void 0 !== c.style[e] ? (t.transition = e, t.transEnd = i[e], !0) : void 0
		}), n.some(function(e) {
			return void 0 !== c.style[e] ? (t.transform = e, !0) : void 0
		}), t
	}
	function n(t) {
		t.transition && (t[g] = t.transition), t.transform && (t[m] = t.transform)
	}
	function i(e, n) {
		for (var i, s = getComputedStyle(e), o = document.createElement("div"), a = y.length; a--;) i = y[a], o.style[i] = s[i];
		return t(o, {
			visibility: "hidden",
			width: n.width + "px",
			height: n.height + "px",
			display: "inline" === s.display ? "inline-block" : s.display
		}), f.deepCopy ? o.innerHTML = e.innerHTML : o.textContent = e.textContent, o
	}
	var s, o, a, r, l = /^([\d\.]+)%$/,
		c = document.createElement("div"),
		h = document.createElement("div"),
		u = !1,
		d = !1,
		f = {
			transitionDuration: ".4s",
			transitionTimingFunction: "cubic-bezier(.4,0,0,1)",
			bgColor: "#fff",
			bgOpacity: 1,
			maxWidth: 300,
			maxHeight: 300,
			onOpen: null,
			onClose: null
		},
		p = e(),
		g = p.transition,
		m = p.transform,
		v = m.replace(/(.*)Transform/, "-$1-transform"),
		b = p.transEnd;
	t(c, {
		position: "fixed",
		display: "none",
		zIndex: 99998,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: 0,
		backgroundColor: f.bgColor,
		transition: "opacity " + f.transitionDuration + " " + f.transitionTimingFunction
	}), t(h, {
		position: "fixed",
		zIndex: 99999,
		top: "50%",
		left: "50%",
		width: 0,
		height: 0
	});
	var y = ["position", "display", "float", "top", "left", "right", "bottom", "marginBottom", "marginLeft", "marginRight", "marginTop", "font", "lineHeight", "verticalAlign"],
		w = {
			config: function(e) {
				if (!e) return f;
				for (var n in e) f[n] = e[n];
				return t(c, {
					backgroundColor: f.bgColor,
					transition: "opacity " + f.transitionDuration + " " + f.transitionTimingFunction
				}), this
			},
			open: function(e, n) {
				if (!u && !d) {
					s = "string" == typeof e ? document.querySelector(e) : e, u = !0, d = !0, o = s.parentNode;
					var p = s.getBoundingClientRect(),
						g = Math.min(f.maxWidth / p.width, f.maxHeight / p.height),
						m = p.left - (window.innerWidth - p.width) / 2,
						y = p.top - (window.innerHeight - p.height) / 2;
					a = i(s, p), r = t(s, {
						position: "absolute",
						top: 0,
						left: 0,
						right: "",
						bottom: "",
						whiteSpace: "nowrap",
						marginTop: -p.height / 2 + "px",
						marginLeft: -p.width / 2 + "px",
						transform: "translate(" + m + "px, " + y + "px)",
						transition: ""
					}, !0);
					var w = s.style.width.match(l),
						x = s.style.height.match(l);
					if (w || x) {
						var C = w ? +w[1] / 100 : 1,
							S = x ? +x[1] / 100 : 1;
						t(h, {
							width: ~~ (p.width / C) + "px",
							height: ~~ (p.height / S) + "px"
						})
					}
					o.appendChild(c), o.appendChild(h), o.insertBefore(a, s), h.appendChild(s), c.style.display = "block"; {
						s.offsetHeight
					}
					return c.style.opacity = f.bgOpacity, t(s, {
						transition: v + " " + f.transitionDuration + " " + f.transitionTimingFunction,
						transform: "scale(" + g + ")"
					}), s.addEventListener(b, function D() {
						s.removeEventListener(b, D), d = !1, n = n || f.onOpen, n && n(s)
					}), this
				}
			},
			close: function(e) {
				if (u && !d) {
					d = !0;
					var n = a.getBoundingClientRect(),
						i = n.left - (window.innerWidth - n.width) / 2,
						l = n.top - (window.innerHeight - n.height) / 2;
					return c.style.opacity = 0, t(s, {
						transform: "translate(" + i + "px, " + l + "px)"
					}), s.addEventListener(b, function p() {
						s.removeEventListener(b, p), t(s, r), o.insertBefore(s, a), o.removeChild(a), o.removeChild(c), o.removeChild(h), c.style.display = "none", a = null, u = !1, d = !1, e = "function" == typeof e ? e : f.onClose, e && e(s)
					}), this
				}
			},
			listen: function x(t) {
				if ("string" != typeof t) return t.addEventListener("click", function(e) {
					e.stopPropagation(), u ? w.close() : w.open(t)
				}), this;
				for (var e = document.querySelectorAll(t), n = e.length; n--;) x(e[n])
			}
		};
	c.addEventListener("click", w.close), h.addEventListener("click", w.close), "object" == typeof exports ? module.exports = w : "function" == typeof define && define.amd ? define(function() {
		return w
	}) : this.Zoomerang = w
}();
var ready = function() {
		Skins.initialize(), Sidebar.initialize(), UI.smart_selects(), $("[data-toggle='tooltip']").tooltip(), window.devicePixelRatio >= 1.2 && $("[data-2x]").each(function() {
			"IMG" == this.tagName ? $(this).attr("src", $(this).attr("data-2x")) : $(this).css({
				"background-image": "url(" + $(this).attr("data-2x") + ")"
			})
		}), Number.prototype.formatMoney = function(t, e, n) {
			var i = this,
				t = isNaN(t = Math.abs(t)) ? 2 : t,
				e = void 0 == e ? "." : e,
				n = void 0 == n ? "," : n,
				s = 0 > i ? "-" : "",
				o = parseInt(i = Math.abs(+i || 0).toFixed(t)) + "",
				a = (a = o.length) > 3 ? a % 3 : 0;
			return s + (a ? o.substr(0, a) + n : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n) + (t ? e + Math.abs(i - o).toFixed(t).slice(2) : "")
		}
	};
$(document).on("ready page:load", ready), $(document).on("page:change", function() {
	window.prevPageYOffset = window.pageYOffset, window.prevPageXOffset = window.pageXOffset
}), $(document).on("page:load", function() {
	$(".fix-scroll").length > 0 && $(".fix-scroll").hide().show()
});
var UI = {
	smart_selects: function() {
		var t = $("[data-smart-select]");
		$.each(t, function(t, e) {
			var n = $(e);
			if (n.parent().hasClass("fake-select-wrap")) return void n.siblings(".fake-select").html(n.find("option:selected").text());
			var i = $("<div class='fake-select-wrap' />"),
				s = $("<div class='fake-select'></div>");
			n.wrap(i), n.after(s), s.html(n.find("option:selected").text()), n.change(function() {
				s.html($(this).find("option:selected").text())
			}), n.focus(function() {
				s.addClass("focus")
			}).focusout(function() {
				s.removeClass("focus")
			})
		})
	}
},
	Skins = {
		initialize: function() {
			var t = $(".skin-switcher .toggler"),
				e = $(".skin-switcher .menu"),
				n = $(".main-sidebar");
			t.length && ($.cookie("current_skin") && (n.attr("id", $.cookie("current_skin")), e.find("a").removeClass("active"), e.find("a[data-skin=" + $.cookie("current_skin") + "]").addClass("active")), t.click(function(t) {
				t.stopPropagation(), e.toggleClass("active")
			}), $("body").click(function() {
				e.removeClass("active")
			}), e.click(function(t) {
				t.stopPropagation()
			}), e.find("a").click(function(t) {
				t.preventDefault();
				var i = $(this).data("skin");
				e.find("a").removeClass("active"), $(this).addClass("active"), n.attr("id", i), $.removeCookie("current_skin", {
					path: "/"
				}), $.cookie("current_skin", i, {
					path: "/"
				})
			}))
		}
	},
	Sidebar = {
		initialize: function() {
			var t = $(".main-sidebar"),
				e = t.find(".current-user .menu");
			$(".current-user .name").click(function(t) {
				t.preventDefault(), t.stopPropagation(), e.toggleClass("active")
			}), e.click(function(t) {
				t.stopPropagation()
			}), $("body").click(function() {
				e.removeClass("active")
			});
			var n = t.find("[data-toggle~='sidebar']");
			n.click(function(t) {
				if (t.preventDefault(), !utils.isTablet()) {
					$(this).closest(".submenu").length || n.not(this).removeClass("toggled").siblings(".submenu").slideUp(300, a);
					var e = $(this),
						i = $(this).siblings(".submenu");
					e.toggleClass("toggled"), e.hasClass("toggled") ? i.slideDown(300, a) : i.slideUp(300, a)
				}
			});
			var i = window.location.pathname;
			t.find(".menu-section a").removeClass("active");
			var s = t.find("a[href='" + i + "']");
			if (s.length) {
				if (s.addClass("active"), s.parents(".submenu").length) {
					var o = s.closest(".option").find("[data-toggle~='sidebar']");
					o.addClass("active toggled"), s.parents(".submenu").addClass("active")
				}
			} else t.find(".menu-section .option > a:eq(0)").addClass("active");
			var a = function() {
					var t = $("body").height();
					$(".main-sidebar").css("bottom", "auto");
					var e = $(".main-sidebar").height();
					t > e ? $(".main-sidebar").css("bottom", 0) : $(".main-sidebar").css("bottom", "auto")
				},
				r = $("#content .sidebar-toggler");
			r.click(function(t) {
				t.stopPropagation(), $("body").toggleClass("open-sidebar")
			}), $("#content").click(function() {
				$("body").removeClass("open-sidebar")
			})
		}
	};
window.utils = {
	isFirefox: function() {
		return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
	},
	animation_ends: function() {
		return "animationend webkitAnimationEnd oAnimationEnd"
	},
	isTablet: function() {
		return $(".main-sidebar").width() < 100
	},
	get_timestamp: function(t) {
		return moment().subtract("days", t).toDate().getTime()
	}
}, function() {
	var t = function() {
			if ($("#docs").length) {
				hljs.configure({
					tabReplace: "  ",
					classPrefix: ""
				}), hljs.initHighlightingOnLoad();
				var t = $(".languages .language");
				t.click(function(e) {
					e.preventDefault();
					var n = $(this).data("lang");
					t.removeClass("selected"), $(this).addClass("selected"), $("pre code").hide(), $("pre code." + n).css("display", "block")
				})
			}
		};
	$(document).on("ready page:load", t), $(document).on("page:change page:restore", function() {
		$("pre code").each(function(t, e) {
			hljs.highlightBlock(e)
		})
	})
}(), function() {
	var t = function() {
			if ($("#calendar").length) {
				var t = new Date,
					e = t.getDate(),
					n = t.getMonth(),
					i = t.getFullYear();
				$("#fullcalendar").fullCalendar({
					header: {
						left: "month,agendaWeek,agendaDay",
						center: "title",
						right: "today prev,next"
					},
					selectable: !0,
					selectHelper: !0,
					editable: !0,
					events: [{
						title: "All Day Event",
						start: new Date(i, n, 1)
					}, {
						title: "Long Event",
						start: new Date(i, n, e - 5),
						end: new Date(i, n, e - 2)
					}, {
						id: 999,
						title: "Repeating Event",
						start: new Date(i, n, e - 3, 16, 0),
						allDay: !1
					}, {
						id: 999,
						title: "Repeating Event",
						start: new Date(i, n, e + 4, 16, 0),
						allDay: !1
					}, {
						title: "Meeting",
						start: new Date(i, n, e, 10, 30),
						allDay: !1
					}, {
						title: "Lunch",
						start: new Date(i, n, e, 12, 0),
						end: new Date(i, n, e, 14, 0),
						allDay: !1
					}, {
						title: "Birthday Party",
						start: new Date(i, n, e + 1, 19, 0),
						end: new Date(i, n, e + 1, 22, 30),
						allDay: !1
					}, {
						title: "Click for Google",
						start: new Date(i, n, 28),
						end: new Date(i, n, 29),
						url: "http://google.com/"
					}],
					eventBackgroundColor: "#278ccf"
				}), $("#new-event-popup .fa-times").click(function() {
					$("#new-event-popup").fadeOut("fast")
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			function t(t, e) {
				t ? ($(".users-list .header").hide(), $(".users-list .header.select-users").addClass("active").find(".total-checked").html("(" + e + " total users)")) : ($(".users-list .header").show(), $(".users-list .header.select-users").removeClass("active"))
			}
			if ($("#users").length) {
				var e = $(".select-users input:checkbox"),
					n = $("[name='select-user']");
				e.change(function() {
					var i = e.is(":checked");
					i ? (n.prop("checked", "checked"), t(i, n.length)) : (n.prop("checked", ""), t(i, 0))
				}), n.change(function() {
					var e = $(".user [name='select-user']:checked");
					t(e.length, e.length)
				}), $btns = $(".grid-view"), $views = $(".users-view"), $btns.click(function(t) {
					t.preventDefault(), $btns.removeClass("active"), $(this).addClass("active"), $views.removeClass("active"), $(".users-grid").hide(), $(".users-list").hide(), $($(this).data("grid")).show()
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#datatables").length) {
				var t = $("#orders-datatable");
				t.dataTable({
					sPaginationType: "full_numbers",
					iDisplayLength: 20,
					aLengthMenu: [
						[20, 50, 100, -1],
						[20, 50, 100, "All"]
					],
					bDestroy: !0
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			$("#email-templates").length && (Zoomerang.config({
				maxHeight: 650,
				maxWidth: 650,
				bgColor: "#000",
				bgOpacity: .8
			}).listen(".email img"), $(".fa-search-plus").click(function() {
				var t = $(this).siblings("img");
				Zoomerang.open(t[0])
			}))
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#dashboard").length) {
				$(".input-daterange").datepicker({
					autoclose: !0,
					orientation: "right top",
					endDate: new Date
				}); {
					var t = "#efefef",
						e = "#b0b3e3",
						n = [
							[utils.get_timestamp(15), 1290],
							[utils.get_timestamp(14), 1050],
							[utils.get_timestamp(13), 1100],
							[utils.get_timestamp(12), 1300],
							[utils.get_timestamp(11), 1050],
							[utils.get_timestamp(10), 1521],
							[utils.get_timestamp(9), 950],
							[utils.get_timestamp(8), 1130],
							[utils.get_timestamp(7), 1100],
							[utils.get_timestamp(6), 1472],
							[utils.get_timestamp(5), 1410],
							[utils.get_timestamp(4), 1684],
							[utils.get_timestamp(3), 1410],
							[utils.get_timestamp(2), 1322],
							[utils.get_timestamp(1), 1050],
							[utils.get_timestamp(0), 1238]
						],
						i = [
							[utils.get_timestamp(14), 1500],
							[utils.get_timestamp(13), 1600],
							[utils.get_timestamp(12), 1630],
							[utils.get_timestamp(11), 1310],
							[utils.get_timestamp(10), 1530],
							[utils.get_timestamp(9), 2050],
							[utils.get_timestamp(8), 2310],
							[utils.get_timestamp(7), 2050],
							[utils.get_timestamp(6), 2125],
							[utils.get_timestamp(5), 1400],
							[utils.get_timestamp(4), 1600],
							[utils.get_timestamp(3), 1930],
							[utils.get_timestamp(2), 2e3],
							[utils.get_timestamp(1), 2320]
						],
						s = {
							xaxis: {
								mode: "time",
								tickLength: 10
							},
							series: {
								lines: {
									show: !0,
									lineWidth: 2,
									fill: !0,
									fillColor: {
										colors: [{
											opacity: .04
										}, {
											opacity: .1
										}]
									}
								},
								shadowSize: 0
							},
							selection: {
								mode: "x"
							},
							grid: {
								hoverable: !0,
								clickable: !0,
								tickColor: t,
								borderWidth: 0,
								borderColor: t
							},
							tooltip: !0,
							colors: [e]
						},
						o = ($.plot($("#visitors-chart"), [n], $.extend(s, {
							tooltipOpts: {
								content: "Visitors on <b>%x</b>: <span class='value'>%y</span>",
								defaultTheme: !1,
								shifts: {
									x: -75,
									y: -70
								}
							}
						})), $.plot($("#payments-chart"), [i], $.extend(s, {
							tooltipOpts: {
								content: "Payments on <b>%x</b>: <span class='value'>$%y</span>",
								defaultTheme: !1,
								shifts: {
									x: -75,
									y: -70
								}
							}
						})), $.plot($("#signups-chart"), [n], $.extend(s, {
							tooltipOpts: {
								content: "New signups on <b>%x</b>: <b class='value'>%y</b>",
								defaultTheme: !1,
								shifts: {
									x: -78,
									y: -70
								}
							}
						})), [
							[utils.get_timestamp(30), 930],
							[utils.get_timestamp(29), 1200],
							[utils.get_timestamp(28), 980],
							[utils.get_timestamp(27), 950],
							[utils.get_timestamp(26), 1e3],
							[utils.get_timestamp(25), 1050],
							[utils.get_timestamp(24), 1150],
							[utils.get_timestamp(23), 2300],
							[utils.get_timestamp(22), 1200],
							[utils.get_timestamp(21), 1300],
							[utils.get_timestamp(20), 1700],
							[utils.get_timestamp(19), 1450],
							[utils.get_timestamp(18), 1500],
							[utils.get_timestamp(17), 546],
							[utils.get_timestamp(16), 614],
							[utils.get_timestamp(15), 954],
							[utils.get_timestamp(14), 1700],
							[utils.get_timestamp(13), 1800],
							[utils.get_timestamp(12), 1900],
							[utils.get_timestamp(11), 2e3],
							[utils.get_timestamp(10), 2100],
							[utils.get_timestamp(9), 2200],
							[utils.get_timestamp(8), 2300],
							[utils.get_timestamp(7), 2400],
							[utils.get_timestamp(6), 2550],
							[utils.get_timestamp(5), 2600],
							[utils.get_timestamp(4), 1800],
							[utils.get_timestamp(3), 2200],
							[utils.get_timestamp(2), 2350],
							[utils.get_timestamp(1), 2800],
							[utils.get_timestamp(0), 3245]
						]),
						a = {
							yaxes: {
								min: 0
							},
							xaxis: {
								mode: "time",
								timeformat: "%a %d"
							},
							series: {
								bars: {
									show: !0,
									lineWidth: 0,
									barWidth: 47e6,
									align: "center",
									fillColor: {
										colors: [{
											opacity: .7
										}, {
											opacity: .7
										}]
									}
								}
							},
							grid: {
								show: !0,
								hoverable: !0,
								clickable: !0,
								tickColor: t,
								borderWidth: 0,
								borderColor: t
							},
							tooltip: !0,
							tooltipOpts: {
								content: "Visits on <b>%x</b>: <span class='value'>%y</span>",
								defaultTheme: !1,
								shifts: {
									x: -65,
									y: -70
								}
							},
							colors: ["#4fa3d5"]
						};
					$.plot($("#bar-chart"), [o], a)
				}
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			$("body#sidebar").length && ($("html, body").css("height", "100%"), $(".main-sidebar").wrapInner("<div class='scroll-wrapper'></div>"))
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			$("#form").length && ($("#new-customer").validate({
				rules: {
					"customer[first_name]": {
						required: !0
					},
					"customer[email]": {
						required: !0,
						email: !0
					},
					"customer[address]": {
						required: !0
					},
					"customer[notes]": {
						required: !0
					}
				},
				highlight: function(t) {
					$(t).closest(".form-group").removeClass("success").addClass("error")
				},
				success: function(t) {
					t.addClass("valid").closest(".form-group").removeClass("error").addClass("success")
				}
			}), $("#customer-tags").select2({
				placeholder: "Select tags or add new ones",
				tags: ["supplier", "lead", "client", "friend", "developer", "customer"],
				tokenSeparators: [",", " "]
			}), $(".mask-phone").mask("(999) 999-9999"), $(".mask-cc").mask("9999 9999 9999 9999"))
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			$("#form-product").length && ($("#new-product").validate({
				rules: {
					"product[first_name]": {
						required: !0
					},
					"product[email]": {
						required: !0,
						email: !0
					},
					"product[address]": {
						required: !0
					},
					"product[notes]": {
						required: !0
					}
				},
				highlight: function(t) {
					$(t).closest(".form-group").removeClass("success").addClass("error")
				},
				success: function(t) {
					t.addClass("valid").closest(".form-group").removeClass("error").addClass("success")
				}
			}), $("#product-tags").select2({
				placeholder: "Select tags or add new ones",
				tags: ["shirt", "gloves", "socks", "sweater"],
				tokenSeparators: [",", " "]
			}), $("#summernote").summernote({
				height: 240,
				toolbar: [
					["style", ["style"]],
					["style", ["bold", "italic", "underline", "clear"]],
					["fontsize", ["fontsize"]],
					["para", ["ul", "ol", "paragraph"]],
					["height", ["height"]],
					["insert", ["picture", "link", "video"]],
					["view", ["fullscreen", "codeview"]],
					["table", ["table"]]
				]
			}), $("#raty").raty({
				path: "/assets/raty",
				score: 4
			}), $(".datepicker").datepicker({
				autoclose: !0,
				orientation: "left bottom"
			}), $("input.minicolors").minicolors({
				position: "top left",
				defaultValue: "#9b86d1",
				theme: "bootstrap"
			}), $(".mask-phone").mask("(999) 999-9999"), $(".mask-cc").mask("9999 9999 9999 9999"))
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#pricing").length) {
				var t = $(".plans .plan");
				t.click(function() {
					t.removeClass("selected"), $(this).addClass("selected")
				});
				var e = $("[data-step]"),
					n = $(".step-panel"),
					i = $(".steps .step");
				e.click(function(t) {
					t.preventDefault();
					var e = $(this).data("step");
					n.removeClass("active"), n.eq(e).addClass("active"), i.removeClass("active"), i.eq(e).addClass("active"), 1 === e && $("#billing-form input:text:eq(0)").focus()
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			function t(t) {
				t ? a.removeClass("disabled") : a.addClass("disabled")
			}
			if ($("#search").length) {
				var e = $(".filters .filter input:checkbox");
				e.change(function() {
					var t = $(this).closest(".filter").find(".filter-option");
					$(this).is(":checked") ? t.slideDown(150, function() {
						t.find("input:text:eq(0)").focus()
					}) : t.slideUp(150)
				});
				var n = $(".field-switch");
				n.change(function() {
					var t = $(this).find("option:selected").data("field"),
						e = $(this).closest(".filter-option");
					e.find(".field").hide(), e.find(".field." + t).show(), "calendar" === t ? e.find(".datepicker").datepicker("show") : e.find(".field." + t + " input:text").focus()
				}), $(".datepicker").datepicker({
					autoclose: !0,
					orientation: "right top"
				});
				var i = $("#products-datatable");
				i.dataTable({
					sPaginationType: "full_numbers",
					iDisplayLength: 20,
					aLengthMenu: [
						[20, 50, 100, -1],
						[20, 50, 100, "All"]
					],
					bDestroy: !0
				});
				var s = $("input:checkbox.toggle-all"),
					o = $("[name='select-product']"),
					a = $(".bulk-actions .dropdown-toggle");
				s.change(function() {
					var e = s.is(":checked");
					e ? (o.prop("checked", "checked"), t(!0)) : (o.prop("checked", ""), t(!1))
				}), o.change(function() {
					var e = $("[name='select-product']:checked");
					t(e.length)
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#projects").length) {
				var t = $(".project");
				t.each(function(t, e) {
					var n, i = $(e).find(".add-more"),
						s = i.siblings(".menu");
					i.click(function(t) {
						t.preventDefault()
					}), $(e).on("mouseenter", ".add-more, .menu", function() {
						clearTimeout(n), n = null, s.addClass("active")
					}), $(e).on("mouseleave", ".add-more, .menu", function() {
						n = setTimeout(function() {
							s.removeClass("active")
						}, 400)
					})
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#reports").length) {
				{
					var t = "#efefef",
						e = "#b0b3e3",
						n = [
							[utils.get_timestamp(18), 1245],
							[utils.get_timestamp(17), 1290],
							[utils.get_timestamp(16), 1230],
							[utils.get_timestamp(15), 1290],
							[utils.get_timestamp(14), 1250],
							[utils.get_timestamp(13), 1100],
							[utils.get_timestamp(12), 1300],
							[utils.get_timestamp(11), 1250],
							[utils.get_timestamp(10), 1501],
							[utils.get_timestamp(9), 1400],
							[utils.get_timestamp(8), 1350],
							[utils.get_timestamp(7), 1390],
							[utils.get_timestamp(6), 1252],
							[utils.get_timestamp(5), 1410],
							[utils.get_timestamp(4), 1484],
							[utils.get_timestamp(3), 1410],
							[utils.get_timestamp(2), 1322],
							[utils.get_timestamp(1), 1320],
							[utils.get_timestamp(0), 1438]
						],
						i = {
							xaxis: {
								mode: "time",
								tickLength: 5
							},
							series: {
								lines: {
									show: !0,
									lineWidth: 2,
									fill: !1
								},
								shadowSize: 0
							},
							selection: {
								mode: "x"
							},
							grid: {
								hoverable: !0,
								clickable: !0,
								tickColor: t,
								borderWidth: 0,
								borderColor: t
							},
							tooltip: !0,
							tooltipOpts: {
								content: "Your sales for <b>%x</b>: <span class='value'>$%y</span>",
								dateFormat: "%y-%0m-%0d",
								defaultTheme: !1,
								shifts: {
									x: -75,
									y: -70
								}
							},
							colors: [e]
						};
					$.plot($("#sales-chart"), [n], i)
				}
				$("#datatable-example").dataTable({
					sPaginationType: "full_numbers",
					iDisplayLength: 20,
					aLengthMenu: [
						[20, 50, 100, -1],
						[20, 50, 100, "All"]
					]
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#reports-alt").length) {
				$('input[name="daterange"]').daterangepicker({
					ranges: {
						Today: [moment(), moment()],
						Yesterday: [moment().subtract("days", 1), moment().subtract("days", 1)],
						"Last 7 Days": [moment().subtract("days", 6), moment()],
						"This Month": [moment().startOf("month"), moment().endOf("month")],
						"Last Month": [moment().subtract("month", 1).startOf("month"), moment().subtract("month", 1).endOf("month")]
					},
					opens: "left",
					startDate: moment().subtract("days", 29),
					endDate: moment()
				});
				var t = $("#datatable-example");
				t.dataTable({
					sPaginationType: "full_numbers",
					iDisplayLength: 20,
					aLengthMenu: [
						[20, 50, 100, -1],
						[20, 50, 100, "All"]
					],
					bDestroy: !0
				}); {
					var e = "#efefef",
						n = "#4fa3d5",
						i = [
							["Jan", 2300.33],
							["Feb", 1899.99],
							["March", 8830],
							["April", 1778],
							["May", 4298],
							["Jun", 2298],
							["Jul", 4298],
							["Aug", 1798],
							["Sep", 6139.99],
							["Oct", 834],
							["Nov", 1855.99],
							["Dec", 3433.99]
						],
						s = {
							yaxes: {
								min: 0
							},
							xaxis: {
								mode: "categories",
								tickLength: 0,
								ticks: [
									[0, "January"],
									[1, "February"],
									[2, "March"],
									[3, "April"],
									[4, "May"],
									[5, "June"],
									[6, "July"],
									[7, "August"],
									[8, "September"],
									[9, "October"],
									[10, "November"],
									[11, "December"]
								]
							},
							series: {
								bars: {
									show: !0,
									lineWidth: 0,
									barWidth: .55,
									align: "center",
									fillColor: {
										colors: [{
											opacity: 1
										}, {
											opacity: 1
										}]
									}
								}
							},
							grid: {
								show: !0,
								hoverable: !0,
								clickable: !0,
								tickColor: e,
								borderWidth: 0,
								borderColor: e
							},
							tooltip: !0,
							tooltipOpts: {
								content: function(t, e, n) {
									return "Sales on <b>" + e + "</b> 2014: <span class='value'>$" + n.formatMoney(2) + "</span>"
								},
								defaultTheme: !1,
								shifts: {
									x: -65,
									y: -70
								}
							},
							colors: [n]
						};
					$.plot($("#bar-chart"), [i], s)
				}
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#ui").length) {
				e(), $("#prompt-modal").on("shown.bs.modal", function() {
					$("#prompt-modal").find("input:text").focus()
				}), $("#form-modal").on("shown.bs.modal", function() {
					$("#form-modal").find("input:text:eq(0)").focus(), $("#form-modal .datepicker").datepicker({
						autoclose: !0
					})
				}), $("#form-modal").submit(function() {
					return $(this).modal("hide"), Messenger().post("Your task was created succesfully."), !1
				}), $("#form-validation-modal").on("shown.bs.modal", function() {
					$("#form-validation-modal").find("input:text:eq(0)").focus()
				}), $("#new-user-form").validate({
					rules: {
						"user[name]": {
							required: !0
						},
						"user[email]": {
							required: !0,
							email: !0
						},
						"user[notes]": {
							required: !0
						}
					},
					highlight: function(t) {
						$(t).closest(".form-group").removeClass("success").addClass("error")
					},
					success: function(t) {
						t.addClass("valid").closest(".form-group").removeClass("error").addClass("success")
					}
				}), Messenger.options = {
					extraClasses: "messenger-fixed messenger-on-bottom messenger-on-right",
					theme: "flat"
				}, $(".normal-notification").click(function(t) {
					t.preventDefault(), Messenger().post("A new order has been placed by John Williams!")
				}), $(".error-notification").click(function(t) {
					t.preventDefault(), Messenger().post({
						message: "Sorry, there was problem while processing your request.",
						type: "error",
						showCloseButton: !0
					})
				}), $(".button-notification").click(function(t) {
					t.preventDefault();
					var e;
					e = Messenger().post({
						message: "Uploading new files...",
						type: "info",
						actions: {
							cancel: {
								label: "cancel upload",
								action: function() {
									return e.update({
										message: "File uploading was canceled",
										type: "success",
										actions: !1
									})
								}
							}
						}
					})
				}), $(".run-notification").click(function(t) {
					t.preventDefault();
					var e = 0;
					Messenger().run({
						errorMessage: "Error sending message",
						successMessage: "Message sent!",
						action: function(t) {
							return ++e < 2 ? t.error({
								status: 500,
								readyState: 0,
								responseText: 0
							}) : t.success()
						}
					})
				});
				var t;
				t = new Shepherd.Tour({
					defaults: {
						classes: "shepherd-element shepherd-open shepherd-theme-arrows",
						showCancelLink: !0
					}
				}), t.addStep("example-step", {
					text: "This modal looks really cool for welcoming new users",
					attachTo: {
						element: ".tour-first-step",
						on: "bottom"
					},
					buttons: [{
						text: "Exit",
						classes: "btn btn-default",
						action: t.cancel
					}, {
						text: "Next",
						classes: "btn btn-primary",
						action: t.next
					}]
				}), t.addStep("example-step", {
					text: "This button is useful to show users a message regarding an action on your app",
					attachTo: {
						element: ".tour-second-step",
						on: "top"
					},
					buttons: [{
						text: "Back",
						classes: "btn btn-default",
						action: t.back
					}, {
						text: "Next",
						classes: "btn btn-primary",
						action: t.next
					}]
				}), t.addStep("example-step", {
					text: "This plugin is very useful to notify users of their connections",
					attachTo: {
						element: ".tour-third-step",
						on: "top"
					},
					buttons: [{
						text: "Back",
						classes: "btn btn-default",
						action: t.back
					}, {
						text: "Next",
						classes: "btn btn-primary",
						action: t.next
					}]
				}), t.addStep("example-step", {
					text: "You can change the theme skins here",
					attachTo: {
						element: ".skin-switcher",
						on: "left"
					},
					buttons: [{
						text: "Back",
						classes: "btn btn-default",
						action: t.back
					}, {
						text: "Done",
						classes: "btn btn-success",
						action: t.next
					}]
				}), $(".start-tour").click(function(e) {
					e.preventDefault(), t.start()
				})
			}
		};
	$(document).on("ready page:load", t);
	var e = function() {
			var t, e;
			if ("undefined" == typeof Offline || null === Offline) throw new Error("Offline simulate UI brought in without Offline.js");
			console.info("The offline.simulate.ui.js module is a development-only resource. Make sure to remove offline.simulate.ui.js in production."), Offline.options.reconnect = {
				initialDelay: 10
			}, t = function() {
				return document.getElementById("offline-simulate-check").addEventListener("click", function() {
					var t;
					return null == (t = Offline.options).checks && (t.checks = {}), Offline.options.checks.active = this.checked ? "down" : "up", Offline.check()
				})
			}, "interactive" === (e = document.readyState) || "complete" === e ? t() : document.addEventListener("DOMContentLoaded", t)
		}
}(), function() {
	var t = function() {
			if ($("#user-profile").length) {
				var t = $(".tabs a"),
					e = $(".tab-content .tab");
				t.click(function(n) {
					n.preventDefault();
					var i = t.index(this);
					t.removeClass("active"), t.eq(i).addClass("active"), e.removeClass("active"), e.eq(i).addClass("active")
				}), $("#datatable-example").dataTable({
					sPaginationType: "full_numbers",
					iDisplayLength: 20,
					aLengthMenu: [
						[20, 50, 100, -1],
						[20, 50, 100, "All"]
					]
				})
			}
		};
	$(document).on("ready page:load", t)
}(), function() {
	var t = function() {
			if ($("#wizard").length) {
				var t = $(".form-wizard .step"),
					e = t.find("[data-step]"),
					n = $(".header .steps .step"),
					i = 0;
				e.click(function(e) {
					e.preventDefault();
					var s = $(this).data("step") - 1,
						o = s > i ? "fadeInRightStep" : "fadeInLeftStep",
						a = "fadeInRightStep" === o ? "fadeOutLeftStep" : "fadeOutRightStep",
						r = t.eq(i);
					r.on(utils.animation_ends(), function() {
						r.removeClass("fadeInRightStep fadeInLeftStep fadeOutRightStep fadeOutLeftStep")
					}).addClass(a), i = s, n.removeClass("active").filter(":lt(" + (i + 1) + ")").addClass("active"), t.removeClass("active"), t.eq(s).addClass("active animated " + o)
				})
			}
		};
	$(document).on("ready page:load", t)
}();