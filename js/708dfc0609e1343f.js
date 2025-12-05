(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  68027,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "default", {
      enumerable: !0,
      get: function() {
        return u
      }
    });
    let n = e.r(43476),
      o = e.r(12354),
      i = {
        error: {
          fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        text: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "28px",
          margin: "0 8px"
        }
      },
      u = function(e) {
        let {
          error: t
        } = e,
          r = null == t ? void 0 : t.digest;
        return (0, n.jsxs)("html", {
          id: "__next_error__",
          children: [
            (0, n.jsx)("head", {}),
            (0, n.jsxs)("body", {
              children: [
                (0, n.jsx)(o.HandleISRError, {
                  error: t
                }),
                (0, n.jsx)("div", {
                  style: i.error,
                  children: (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("h2", {
                        style: i.text,
                        children: [
                          "Application error: a ",
                          r ? "server" : "client",
                          "-side exception has occurred while loading ",
                          window.location.hostname,
                          " (see the",
                          " ",
                          r ? "server logs" : "browser console",
                          " for more information)."
                        ]
                      }),
                      r ? (0, n.jsx)("p", {
                        style: i.text,
                        children: "Digest: " + r
                      }) : null
                    ]
                  })
                })
              ]
            })
          ]
        })
      };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
      value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
  },
  35451,
  (e, t, r) => {
    ! function() {
      var e = {
        229: function(e) {
          var t, r, n, o = e.exports = {};

          function i() {
            throw Error("setTimeout has not been defined")
          }

          function u() {
            throw Error("clearTimeout has not been defined")
          }
          try {
            t = "function" == typeof setTimeout ? setTimeout : i
          } catch (e) {
            t = i
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : u
          } catch (e) {
            r = u
          }

          function s(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
            try {
              return t(e, 0)
            } catch (r) {
              try {
                return t.call(null, e, 0)
              } catch (r) {
                return t.call(this, e, 0)
              }
            }
          }
          var c = [],
            a = !1,
            l = -1;

          function f() {
            a && n && (a = !1, n.length ? c = n.concat(c) : l = -1, c.length && p())
          }

          function p() {
            if (!a) {
              var e = s(f);
              a = !0;
              for (var t = c.length; t;) {
                for (n = c, c = [];++l < t;) n && n[l].run();
                l = -1, t = c.length
              }
              n = null, a = !1,
                function(e) {
                  if (r === clearTimeout) return clearTimeout(e);
                  if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                  try {
                    r(e)
                  } catch (t) {
                    try {
                      return r.call(null, e)
                    } catch (t) {
                      return r.call(this, e)
                    }
                  }
                }(e)
            }
          }

          function d(e, t) {
            this.fun = e, this.array = t
          }

          function y() {}
          o.nextTick = function(e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            c.push(new d(e, t)), 1 !== c.length || a || s(p)
          }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
          }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
            return []
          }, o.binding = function(e) {
            throw Error("process.binding is not supported")
          }, o.cwd = function() {
            return "/"
          }, o.chdir = function(e) {
            throw Error("process.chdir is not supported")
          }, o.umask = function() {
            return 0
          }
        }
      },
      r = {};

      function n(t) {
        var o = r[t];
        if (void 0 !== o) return o.exports;
        var i = r[t] = {
            exports: {}
          },
          u = !0;
        try {
          e[t](i, i.exports, n), u = !1
        } finally {
          u && delete r[t]
        }
        return i.exports
      }
      n.ab = "/ROOT/node_modules/next/dist/compiled/process/", t.exports = n(229)
    }()
  },
  47167,
  (e, t, r) => {
    "use strict";
    var n, o;
    t.exports = (null == (n = e.g.process) ? void 0 : n.env) && "object" == typeof(null == (o = e.g.process) ? void 0 : o.env) ? e.g.process : e.r(35451)
  },
  45689,
  (e, t, r) => {
    "use strict";
    var n = Symbol.for("react.transitional.element");

    function o(e, t, r) {
      var o = null;
      if (void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t)
        for (var i in r = {}, t) "key" !== i && (r[i] = t[i]);
      else r = t;
      return {
        $$typeof: n,
        type: e,
        key: o,
        ref: void 0 !== (t = r.ref) ? t : null,
        props: r
      }
    }
    r.Fragment = Symbol.for("react.fragment"), r.jsx = o, r.jsxs = o
  },
  43476,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(45689)
  },
  90317,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), ! function(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }(r, {
      bindSnapshot: function() {
        return s
      },
      createAsyncLocalStorage: function() {
        return u
      },
      createSnapshot: function() {
        return c
      }
    });
    let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: !1,
      configurable: !0
    });

    class o {
      disable() {
        throw n
      }

      getStore() {}

      run() {
        throw n
      }

      exit() {
        throw n
      }

      enterWith() {
        throw n
      }

      static bind(e) {
        return e
      }
    }
    let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

    function u() {
      return i ? new i : new o
    }

    function s(e) {
      return i ? i.bind(e) : o.bind(e)
    }

    function c() {
      return i ? i.snapshot() : function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return e(...r)
      }
    }
  },
  42344,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "workAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return n
      }
    });
    let n = (0, e.r(90317).createAsyncLocalStorage)()
  },
  63599,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "workAsyncStorage", {
      enumerable: !0,
      get: function() {
        return n.workAsyncStorageInstance
      }
    });
    let n = e.r(42344)
  },
  12354,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "HandleISRError", {
      enumerable: !0,
      get: function() {
        return o
      }
    });
    let n = "undefined" == typeof window ? e.r(63599).workAsyncStorage : void 0;

    function o(e) {
      let {
        error: t
      } = e;
      if (n) {
        let e = n.getStore();
        if ((null == e ? void 0 : e.isRevalidate) || (null == e ? void 0 : e.isStaticGeneration)) throw console.error(t), t
      }
      return null
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
      value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
  },
  55682,
  (e, t, r) => {
    "use strict";
    r._ = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  },
  90809,
  (e, t, r) => {
    "use strict";

    function n(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (n = function(e) {
        return e ? r : t
      })(e)
    }
    r._ = function(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
      };
      var r = n(t);
      if (r && r.has(e)) return r.get(e);
      var o = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, u) : null;
          s && (s.get || s.set) ? Object.defineProperty(o, u, s) : o[u] = e[u]
        } return o.default = e, r && r.set(e, o), o
    }
  },
  50740,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(50740)
  },
  71645,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(50740)
  },
  18800,
  (e, t, r) => {
    "use strict";
    ! function e() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (e) {
        console.error(e)
      }
    }(), t.exports = e.r(18800)
  },
  74080,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(18800)
  },
  42732,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return n
      }
    });
    let n = e.r(55682)._(e.r(71645)).default.createContext({})
  }
]);