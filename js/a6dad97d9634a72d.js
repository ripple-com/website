!function() {
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t) {
        var e = {
            exports: {}
        };
        return t(e, e.exports), e.exports
    }
    var r, n, o = function(t) {
            return t && t.Math === Math && t
        },
        i = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof t && t) || o("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        a = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        u = !a(function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        s = !a(function() {
            var t = function() {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        }),
        c = Function.prototype.call,
        f = s ? c.bind(c) : function() {
            return c.apply(c, arguments)
        },
        l = {}.propertyIsEnumerable,
        h = Object.getOwnPropertyDescriptor,
        p = h && !l.call({
            1: 2
        }, 1) ? function(t) {
            var e = h(this, t);
            return !!e && e.enumerable
        } : l,
        v = {
            f: p
        },
        d = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        g = Function.prototype,
        y = g.call,
        m = s && g.bind.bind(y, y),
        b = s ? m : function(t) {
            return function() {
                return y.apply(t, arguments)
            }
        },
        w = b({}.toString),
        S = b("".slice),
        E = function(t) {
            return S(w(t), 8, -1)
        },
        O = Object,
        x = b("".split),
        R = a(function() {
            return !O("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" === E(t) ? x(t, "") : O(t)
        } : O,
        P = function(t) {
            return null == t
        },
        A = TypeError,
        j = function(t) {
            if (P(t)) throw new A("Can't call method on " + t);
            return t
        },
        k = function(t) {
            return R(j(t))
        },
        I = "object" == typeof document && document.all,
        T = void 0 === I && void 0 !== I ? function(t) {
            return "function" == typeof t || t === I
        } : function(t) {
            return "function" == typeof t
        },
        M = function(t) {
            return "object" == typeof t ? null !== t : T(t)
        },
        L = function(t, e) {
            return arguments.length < 2 ? T(r = i[t]) ? r : void 0 : i[t] && i[t][e];
            var r
        },
        U = b({}.isPrototypeOf),
        N = i.navigator,
        C = N && N.userAgent,
        _ = C ? String(C) : "",
        F = i.process,
        B = i.Deno,
        D = F && F.versions || B && B.version,
        z = D && D.v8;
    z && (n = (r = z.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]);
    var W = n,
        q = i.String,
        H = !!Object.getOwnPropertySymbols && !a(function() {
            var t = Symbol("symbol detection");
            return !q(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && W && W < 41
        }),
        $ = H && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        K = Object,
        G = $ ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            var e = L("Symbol");
            return T(e) && U(e.prototype, K(t))
        },
        V = String,
        Y = function(t) {
            try {
                return V(t)
            } catch (t) {
                return "Object"
            }
        },
        X = TypeError,
        Q = function(t) {
            if (T(t)) return t;
            throw new X(Y(t) + " is not a function")
        },
        Z = function(t, e) {
            var r = t[e];
            return P(r) ? void 0 : Q(r)
        },
        tt = TypeError,
        et = Object.defineProperty,
        rt = function(t, e) {
            try {
                et(i, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                i[t] = e
            }
            return e
        },
        nt = e(function(t) {
            var e = "__core-js_shared__",
                r = t.exports = i[e] || rt(e, {});
            (r.versions || (r.versions = [])).push({
                version: "3.38.1",
                mode: "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }),
        ot = function(t, e) {
            return nt[t] || (nt[t] = e || {})
        },
        it = Object,
        at = function(t) {
            return it(j(t))
        },
        ut = b({}.hasOwnProperty),
        st = Object.hasOwn || function(t, e) {
            return ut(at(t), e)
        },
        ct = 0,
        ft = Math.random(),
        lt = b(1..toString),
        mt = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + lt(++ct + ft, 36)
        },
        ht = i.Symbol,
        pt = nt("wks"),
        vt = $ ? ht.for || ht : ht && ht.withoutSetter || mt,
        dt = function(t) {
            return ut(pt, t) || (pt[t] = H && ut(ht, t) ? ht[t] : vt("Symbol." + t)), pt[t]
        },
        gt = TypeError,
        yt = dt("toPrimitive"),
        mt = function(t, e) {
            if (!M(t) || G(t)) return t;
            var r, n = Z(t, yt);
            if (n) {
                if (void 0 === e && (e = "default"), r = f(n, t, e), !M(r) || G(r)) return r;
                throw new gt("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"), function(t, e) {
                var r, n;
                if ("string" === e && T(r = t.toString) && !M(n = f(r, t))) return n;
                if (T(r = t.valueOf) && !M(n = f(r, t))) return n;
                if ("string" !== e && T(r = t.toString) && !M(n = f(r, t))) return n;
                throw new tt("Can't convert object to primitive value")
            }(t, e)
        },
        bt = function(t) {
            var e = mt(t, "string");
            return G(e) ? e : e + ""
        },
        wt = i.document,
        St = M(wt) && M(wt.createElement),
        Et = function(t) {
            return St ? wt.createElement(t) : {}
        },
        Ot = !u && !a(function() {
            return 7 !== Object.defineProperty(Et("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        xt = Object.getOwnPropertyDescriptor,
        Rt = {
            f: u ? xt : function(t, e) {
                if (t = k(t), e = bt(e), Ot) try {
                    return xt(t, e)
                } catch (t) {}
                if (st(t, e)) return d(!f(v.f, t, e), t[e])
            }
        },
        Pt = u && a(function() {
            return 42 !== Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }),
        At = String,
        jt = TypeError,
        kt = function(t) {
            if (M(t)) return t;
            throw new jt(At(t) + " is not an object")
        },
        It = TypeError,
        Tt = Object.defineProperty,
        Mt = Object.getOwnPropertyDescriptor,
        Lt = "enumerable",
        Ut = "configurable",
        Nt = "writable",
        Ct = {
            f: u ? Pt ? function(t, e, r) {
                if (kt(t), e = bt(e), kt(r), "function" == typeof t && "prototype" === e && "value" in r && Nt in r && !r[Nt]) {
                    var n = Mt(t, e);
                    n && n[Nt] && (t[e] = r.value, r = {
                        configurable: Ut in r ? r[Ut] : n[Ut],
                        enumerable: Lt in r ? r[Lt] : n[Lt],
                        writable: !1
                    })
                }
                return Tt(t, e, r)
            } : Tt : function(t, e, r) {
                if (kt(t), e = bt(e), kt(r), Ot) try {
                    return Tt(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw new It("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        _t = u ? function(t, e, r) {
            return Ct.f(t, e, d(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        Ft = Function.prototype,
        Bt = u && Object.getOwnPropertyDescriptor,
        Dt = st(Ft, "name"),
        zt = {
            EXISTS: Dt,
            PROPER: Dt && "something" === function() {}.name,
            CONFIGURABLE: Dt && (!u || u && Bt(Ft, "name").configurable)
        },
        Wt = b(Function.toString);
    T(rt.inspectSource) || (rt.inspectSource = function(t) {
        return Wt(t)
    });
    var qt, Ht, $t, Kt = rt.inspectSource,
        Gt = i.WeakMap,
        Vt = T(Gt) && /native code/.test(String(Gt)),
        Yt = nt("k...(truncated...

    // Continuing the formatting as much as possible.
}