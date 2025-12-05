(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  91915,
  (e, r, t) => {
    "use strict";

    function n(e, r) {
      if (void 0 === r && (r = {}), r.onlyHashChange) return void e();
      let t = document.documentElement;
      t.dataset.scrollBehavior;
      let n = t.style.scrollBehavior;
      t.style.scrollBehavior = "auto", r.dontForceLayout || t.getClientRects(), e(), t.style.scrollBehavior = n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "disableSmoothScrollDuringRouteTransition", {
      enumerable: !0,
      get: function() {
        return n
      }
    }), e.r(33525)
  },
  68017,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "HTTPAccessFallbackBoundary", {
      enumerable: !0,
      get: function() {
        return l
      }
    });
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      c = e.r(90373),
      i = e.r(54394);
    e.r(33525);
    let u = e.r(8372);

    class s extends o.default.Component {
      componentDidCatch() {}

      static getDerivedStateFromError(e) {
        if ((0, i.isHTTPAccessFallbackError)(e)) return {
          triggeredStatus: (0, i.getAccessFallbackHTTPStatus)(e)
        };
        throw e
      }

      static getDerivedStateFromProps(e, r) {
        return e.pathname !== r.previousPathname && r.triggeredStatus ? {
          triggeredStatus: void 0,
          previousPathname: e.pathname
        } : {
          triggeredStatus: r.triggeredStatus,
          previousPathname: e.pathname
        }
      }

      render() {
        let {
            notFound: e,
            forbidden: r,
            unauthorized: t,
            children: n
          } = this.props,
          {
            triggeredStatus: o
          } = this.state,
          c = {
            [i.HTTPAccessErrorStatus.NOT_FOUND]: e,
            [i.HTTPAccessErrorStatus.FORBIDDEN]: r,
            [i.HTTPAccessErrorStatus.UNAUTHORIZED]: t
          };
        if (o) {
          let u = o === i.HTTPAccessErrorStatus.NOT_FOUND && e,
            s = o === i.HTTPAccessErrorStatus.FORBIDDEN && r,
            l = o === i.HTTPAccessErrorStatus.UNAUTHORIZED && t;
          return u || s || l ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("meta", {
              name: "robots",
              content: "noindex"
            }), !1, c[o]]
          }) : n
        }
        return n
      }

      constructor(e) {
        super(e), this.state = {
          triggeredStatus: void 0,
          previousPathname: e.pathname
        }
      }
    }

    function l(e) {
      let {
        notFound: r,
        forbidden: t,
        unauthorized: n,
        children: i
      } = e,
        l = (0, c.useUntrackedPathname)(),
        d = (0, o.useContext)(u.MissingSlotContext);
      return r || t || n ? (0, a.jsx)(s, {
        pathname: l,
        notFound: r,
        forbidden: t,
        unauthorized: n,
        missingSlots: d,
        children: i
      }) : (0, a.jsx)(a.Fragment, {
        children: i
      })
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  91798,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "useRouterBFCache", {
      enumerable: !0,
      get: function() {
        return a
      }
    });
    let n = e.r(71645);

    function a(e, r) {
      let [t, a] = (0, n.useState)(() => ({
        tree: e,
        stateKey: r,
        next: null
      }));
      if (t.tree === e) return t;
      let o = {
          tree: e,
          stateKey: r,
          next: null
        },
        c = 1,
        i = t,
        u = o;
      for (; null !== i && c < 1;) {
        if (i.stateKey === r) {
          u.next = i.next;
          break
        } {
          c++;
          let e = {
            tree: i.tree,
            stateKey: i.stateKey,
            next: null
          };
          u.next = e, u = e
        }
        i = i.next
      }
      return a(o), o
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  39756,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function() {
        return T
      }
    });
    let n = e.r(55682),
      a = e.r(90809),
      o = e.r(43476),
      c = e.r(88540),
      i = a._(e.r(71645)),
      u = n._(e.r(74080)),
      s = e.r(8372),
      l = e.r(87288),
      d = e.r(1244),
      f = e.r(72383),
      p = e.r(56019),
      h = e.r(91915),
      y = e.r(58442),
      g = e.r(68017),
      m = e.r(70725),
      b = e.r(84356),
      P = e.r(41538),
      _ = e.r(91798);
    e.r(74180);
    let O = u.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      E = ["bottom", "height", "left", "right", "top", "width", "x", "y"];

    function v(e, r) {
      let t = e.getBoundingClientRect();
      return t.top >= 0 && t.top <= r
    }

    class S extends i.default.Component {
      componentDidMount() {
        this.handlePotentialScroll()
      }

      componentDidUpdate() {
        this.props.focusAndScrollRef.apply && this.handlePotentialScroll()
      }

      render() {
        return this.props.children
      }

      constructor(...e) {
        super(...e), this.handlePotentialScroll = () => {
          let {
            focusAndScrollRef: e,
            segmentPath: r
          } = this.props;
          if (e.apply) {
            if (0 !== e.segmentPaths.length && !e.segmentPaths.some(e => r.every((r, t) => (0, p.matchSegment)(r, e[t])))) return;
            let t = null,
              n = e.hashFragment;
            if (n && (t = function(e) {
                var r;
                return "top" === e ? document.body : null != (r = document.getElementById(e)) ? r : document.getElementsByName(e)[0]
              }(n)), t || (t = "undefined" == typeof window ? null : (0, O.findDOMNode)(this)), !(t instanceof Element)) return;
            for (; !(t instanceof HTMLElement) || function(e) {
                if (["sticky", "fixed"].includes(getComputedStyle(e).position)) return !0;
                let r = e.getBoundingClientRect();
                return E.every(e => 0 === r[e])
              }(t);) {
              if (null === t.nextElementSibling) return;
              t = t.nextElementSibling
            }
            e.apply = !1, e.hashFragment = null, e.segmentPaths = [], (0, h.disableSmoothScrollDuringRouteTransition)(() => {
              if (n) return void t.scrollIntoView();
              let e = document.documentElement,
                r = e.clientHeight;
              !v(t, r) && (e.scrollTop = 0, v(t, r) || t.scrollIntoView())
            }, {
              dontForceLayout: !0,
              onlyHashChange: e.onlyHashChange
            }), e.onlyHashChange = !1, t.focus()
          }
        }
      }
    }

    function w(e) {
      let {
        segmentPath: r,
        children: t
      } = e,
        n = (0, i.useContext)(s.GlobalLayoutRouterContext);
      if (!n) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
        value: "E473",
        enumerable: !1,
        configurable: !0
      });
      return (0, o.jsx)(S, {
        segmentPath: r,
        focusAndScrollRef: n.focusAndScrollRef,
        children: t
      })
    }

    function j(e) {
      let {
        tree: r,
        segmentPath: t,
        cacheNode: n,
        url: a
      } = e,
        u = (0, i.useContext)(s.GlobalLayoutRouterContext);
      if (!u) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
        value: "E473",
        enumerable: !1,
        configurable: !0
      });
      let {
        tree: f
      } = u,
        h = null !== n.prefetchRsc ? n.prefetchRsc : n.rsc,
        y = (0, i.useDeferredValue)(n.rsc, h),
        g = "object" == typeof y && null !== y && "function" == typeof y.then ? (0, i.use)(y) : y;
      if (!g) {
        let e = n.lazyData;
        if (null === e) {
          let r = function e(r, t) {
            if (r) {
              let [n, a] = r,
                o = 2 === r.length;
              if ((0, p.matchSegment)(t[0], n) && t[1].hasOwnProperty(a)) {
                if (o) {
                  let r = e(void 0, t[1][a]);
                  return [t[0], {
                    ...t[1],
                    [a]: [r[0], r[1], r[2], "refetch"]
                  }]
                }
                return [t[0], {
                  ...t[1],
                  [a]: e(r.slice(2), t[1][a])
                }]
              }
            }
            return t
          }(["", ...t], f),
            o = (0, b.hasInterceptionRouteInCurrentTree)(f),
            s = Date.now();
          n.lazyData = e = (0, l.fetchServerResponse)(new URL(a, location.origin), {
            flightRouterState: r,
            nextUrl: o ? u.nextUrl : null
          }).then(e => ((0, i.startTransition)(() => {
            (0, P.dispatchAppRouterAction)({
              type: c.ACTION_SERVER_PATCH,
              previousTree: f,
              serverResponse: e,
              navigatedAt: s
            })
          }), e)), (0, i.use)(e)
        }
        (0, i.use)(d.unresolvedThenable)
      }
      return (0, o.jsx)(s.LayoutRouterContext.Provider, {
        value: {
          parentTree: r,
          parentCacheNode: n,
          parentSegmentPath: t,
          url: a
        },
        children: g
      })
    }

    function R(e) {
      let r, {
        loading: t,
        children: n
      } = e;
      if (r = "object" == typeof t && null !== t && "function" == typeof t.then ? (0, i.use)(t) : t) {
        let e = r[0],
          t = r[1],
          a = r[2];
        return (0, o.jsx)(i.Suspense, {
          fallback: (0, o.jsxs)(o.Fragment, {
            children: [t, a, e]
          }),
          children: n
        })
      }
      return (0, o.jsx)(o.Fragment, {
        children: n
      })
    }

    function T(e) {
      let {
        parallelRouterKey: r,
        error: t,
        errorStyles: n,
        errorScripts: a,
        templateStyles: c,
        templateScripts: u,
        template: l,
        notFound: d,
        forbidden: p,
        unauthorized: h,
        segmentViewBoundaries: b
      } = e,
        P = (0, i.useContext)(s.LayoutRouterContext);
      if (!P) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
        value: "E56",
        enumerable: !1,
        configurable: !0
      });
      let {
        parentTree: O,
        parentCacheNode: E,
        parentSegmentPath: v,
        url: S
      } = P,
        T = E.parallelRoutes,
        C = T.get(r);
      C || (C = new Map, T.set(r, C));
      let x = O[0],
        A = null === v ? [r] : v.concat([x, r]),
        D = O[1][r],
        M = D[0],
        k = (0, m.createRouterCacheKey)(M, !0),
        F = (0, _.useRouterBFCache)(D, k),
        I = [];
      do {
        let e = F.tree,
          r = F.stateKey,
          i = e[0],
          b = (0, m.createRouterCacheKey)(i),
          P = C.get(b);
        if (void 0 === P) {
          let e = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map,
            loading: null,
            navigatedAt: -1
          };
          P = e, C.set(b, e)
        }
        let _ = E.loading,
          O = (0, o.jsxs)(s.TemplateContext.Provider, {
            value: (0, o.jsxs)(w, {
              segmentPath: A,
              children: [(0, o.jsx)(f.ErrorBoundary, {
                errorComponent: t,
                errorStyles: n,
                errorScripts: a,
                children: (0, o.jsx)(R, {
                  loading: _,
                  children: (0, o.jsx)(g.HTTPAccessFallbackBoundary, {
                    notFound: d,
                    forbidden: p,
                    unauthorized: h,
                    children: (0, o.jsxs)(y.RedirectBoundary, {
                      children: [(0, o.jsx)(j, {
                        url: S,
                        tree: e,
                        cacheNode: P,
                        segmentPath: A
                      }), null]
                    })
                  })
                })
              }), null]
            }),
            children: [c, u, l]
          }, r);
        I.push(O), F = F.next
      } while (null !== F)
      return I
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  37457,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function() {
        return i
      }
    });
    let n = e.r(90809),
      a = e.r(43476),
      o = n._(e.r(71645)),
      c = e.r(8372);

    function i() {
      let e = (0, o.useContext)(c.TemplateContext);
      return (0, a.jsx)(a.Fragment, {
        children: e
      })
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  65932,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), ! function(e, r) {
      for (var t in r) Object.defineProperty(e, t, {
        enumerable: !0,
        get: r[t]
      })
    }(t, {
      describeHasCheckingStringProperty: function() {
        return o
      },
      describeStringPropertyAccess: function() {
        return a
      },
      wellKnownProperties: function() {
        return c
      }
    });
    let n = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

    function a(e, r) {
      return n.test(r) ? "`" + e + "." + r + "`" : "`" + e + "[" + JSON.stringify(r) + "]`"
    }

    function o(e, r) {
      let t = JSON.stringify(r);
      return "`Reflect.has(" + e + ", " + t + ")`, `" + t + " in " + e + "`, or similar"
    }
    let c = new Set(["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "then", "catch", "finally", "status", "displayName", "_debugInfo", "toJSON", "$$typeof", "__esModule"])
  },
  93504,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "createRenderSearchParamsFromClient", {
      enumerable: !0,
      get: function() {
        return o
      }
    });
    let n = e.r(65932),
      a = new WeakMap;

    function o(e) {
      let r = a.get(e);
      if (r) return r;
      let t = Promise.resolve(e);
      return a.set(e, t), Object.keys(e).forEach(r => {
        n.wellKnownProperties.has(r) || (t[r] = e[r])
      }), t
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  66996,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "createRenderSearchParamsFromClient", {
      enumerable: !0,
      get: function() {
        return n
      }
    });
    let n = e.r(93504).createRenderSearchParamsFromClient;
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  6831,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "createRenderParamsFromClient", {
      enumerable: !0,
      get: function() {
        return o
      }
    });
    let n = e.r(65932),
      a = new WeakMap;

    function o(e) {
      let r = a.get(e);
      if (r) return r;
      let t = Promise.resolve(e);
      return a.set(e, t), Object.keys(e).forEach(r => {
        n.wellKnownProperties.has(r) || (t[r] = e[r])
      }), t
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  97689,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "createRenderParamsFromClient", {
      enumerable: !0,
      get: function() {
        return n
      }
    });
    let n = e.r(6831).createRenderParamsFromClient;
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
      value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
  },
  42715,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "ReflectAdapter", {
      enumerable: !0,
      get: function() {
        return n
      }
    });

    class n {
      static get(e, r, t) {
        let n = Reflect.get(e, r, t);
        return "function" == typeof n ? n.bind(e) : n
      }

      static set(e, r, t, n) {
        return Reflect.set(e, r, t, n)
      }

      static has(e, r) {
        return Reflect.has(e, r)
      }

      static deleteProperty(e, r) {
        return Reflect.deleteProperty(e, r)
      }
    }
  },
  76361,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "createDedupedByCallsiteServerErrorLoggerDev", {
      enumerable: !0,
      get: function() {
        return u
      }
    });
    let n = function(e, r) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var t = a(r);
        if (t && t.has(e)) return t.get(e);
        var n = {
            __proto__: null
          },
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var c in e)
          if ("default" !== c && Object.prototype.hasOwnProperty.call(e, c)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, c) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, c, i) : n[c] = e[c]
          } return n.default = e, t && t.set(e, n), n
      }(e.r(71645));

    function a(e) {
      if ("function" != typeof WeakMap) return null;
      var r = new WeakMap,
        t = new WeakMap;
      return (a = function(e) {
        return e ? t : r
      })(e)
    }
    let o = {
        current: null
      },
      c = "function" == typeof n.cache ? n.cache : e => e,
      i = console.warn;

    function u(e) {
      return function() {
        for (var r = arguments.length, t = Array(r), n = 0; n < r; n++) t[n] = arguments[n];
        i(e(...t))
      }
    }
    c(e => {
      try {
        i(o.current)
      } finally {
        o.current = null
      }
    })
  },
  83066,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "afterTaskAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return n
      }
    });
    let n = (0, e.r(90317).createAsyncLocalStorage)()
  },
  41643,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "afterTaskAsyncStorage", {
      enumerable: !0,
      get: function() {
        return n.afterTaskAsyncStorageInstance
      }
    });
    let n = e.r(83066)
  },
  50999,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), ! function(e, r) {
      for (var t in r) Object.defineProperty(e, t, {
        enumerable: !0,
        get: r[t]
      })
    }(t, {
      isRequestAPICallableInsideAfter: function() {
        return u
      },
      throwForSearchParamsAccessInUseCache: function() {
        return i
      },
      throwWithStaticGenerationBailoutError: function() {
        return o
      },
      throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return c
      }
    });
    let n = e.r(43248),
      a = e.r(41643);

    function o(e, r) {
      throw Object.defineProperty(new n.StaticGenBailoutError("Route ".concat(e, " couldn't be rendered statically because it used ").concat(r, ". See more info here: https://nextjs.org/docs/app/buil..."))
    }
    // The content is truncated, so the formatted code is partial.
  }
]);