!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react"], t)
    : t(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
          "react-steps"
        ] = {}),
        e.React
      );
})(this, function (e, t) {
  "use strict";
  function l(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var r = l(t);
  const a = () =>
      r.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          className: "bi bi-lock-fill",
          viewBox: "0 0 16 16",
        },
        r.default.createElement("path", {
          d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z",
        })
      ),
    i = ({
      isLast: e,
      className: t,
      children: l,
      index: i,
      isActive: s,
      activeColor: n,
      inActiveColor: c,
      setCurStep: d,
      locked: u,
      isLastActive: f,
      borderColor: v,
      label: m,
      stepSize: p,
    }) =>
      r.default.createElement(
        r.default.Fragment,
        null,
        r.default.createElement(
          "div",
          null,
          r.default.createElement(
            "li",
            {
              onClick: () => {
                var e;
                u || ((e = i || 0), d && d(e));
              },
              className: `rounded-full border-8  \n        flex items-center justify-center transition duration-300\n        relative \n        text-white \n        ${
                u ? "cursor-not-allowed" : "cursor-pointer"
              } ${t}`,
              style: {
                width: p,
                height: p,
                backgroundColor: s ? n : c,
                borderColor: s ? v : c,
              },
            },
            r.default.createElement(
              r.default.Fragment,
              null,
              u && r.default.createElement(a, null),
              !u && (l || i)
            )
          ),
          r.default.createElement(
            "div",
            { className: "relative h-6" },
            r.default.createElement(
              "p",
              {
                className:
                  "absolute left-1/2 -translate-x-1/2  whitespace-nowrap",
              },
              m
            )
          )
        ),
        !e &&
          r.default.createElement(o, {
            height: p || 0,
            isActive: f || !1,
            activeColor: v || "",
            inActiveColor: c || "",
          })
      );
  i.defaultProps = {
    isLast: !1,
    className: "",
    isActive: !1,
    locked: !1,
    isLastActive: !1,
    setCurStep: () => {},
    label: "",
    index: 0,
    stepSize: 60,
  };
  const o = ({ isActive: e, activeColor: t, inActiveColor: l, height: a }) =>
      r.default.createElement(
        "div",
        {
          className: "flex w-full justify-start items-center relative",
          style: { height: a },
        },
        r.default.createElement("div", {
          className: "absolute border-t-8  w-full z-0",
          style: { borderColor: l },
        }),
        r.default.createElement("div", {
          className:
            "border-t-8  bg-red-400 transition-width  duration-700 ease-in-out z-50 " +
            (e ? "w-full" : "w-0"),
          style: { borderColor: t },
        })
      ),
    s = ({
      children: e,
      curStep: l,
      setCurStep: a,
      activeColor: i,
      inActiveColor: o,
      borderColor: s,
      stepSize: n,
    }) =>
      r.default.createElement(
        "ul",
        { className: "flex flex-row justify-between mx-3" },
        e.map((r, c) =>
          t.cloneElement(r, {
            isLastActive: c <= l - 1,
            isActive: c <= l,
            setCurStep: a,
            activeColor: i,
            inActiveColor: o,
            borderColor: s,
            stepSize: n,
            key: c,
            index: c,
            isLast: c === e.length - 1,
          })
        )
      );
  (s.defaultProps = {
    borderColor: "#8fb3db",
    activeColor: "#0b294b",
    inActiveColor: "#D1D5DB",
    stepSize: 60,
  }),
    (e.Step = i),
    (e.Stepper = s),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    (e[Symbol.toStringTag] = "Module");
});
