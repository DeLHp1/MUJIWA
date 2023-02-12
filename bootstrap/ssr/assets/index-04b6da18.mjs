import { j as jsxs, a as jsx } from "../main.mjs";
import { u as useRoute, l as lodashExports, X as XCircleIcon, A as AuthLayout } from "./lodash-4a7eaf83.mjs";
import { useForm, Link } from "@inertiajs/react";
import { Switch } from "@headlessui/react";
import { v4 } from "uuid";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef } from "react";
import "react/jsx-runtime";
import "react-dom/client";
import "ziggy-js";
const LoginPage = () => {
  return /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, transition: { type: "spring" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-lg w-full mx-auto mt-6", children: [
      /* @__PURE__ */ jsx("h6", { className: "block text-center text-xl sm:text-3xl font-bold tracking-tight text-slate-900", children: /* @__PURE__ */ jsx(Balancer, { children: "Vítámě tě zpět na naší stránce." }) }),
      /* @__PURE__ */ jsx("span", { className: "block mt-1 text-center text-lg sm:text-xl font-medium tracking-tight text-slate-700", children: /* @__PURE__ */ jsx(Balancer, { children: "Přihlašte se pomocí vašeho účtu MW" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "shadow-md rounded-md overflow-hidden grid grid-cols-1 mt-8 mx-auto max-w-lg w-full", children: [
      /* @__PURE__ */ jsx(LeftSide, {}),
      /* @__PURE__ */ jsx(RightSide, {})
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mt-2 mx-auto block max-w-lg w-full text-center text-sm font-medium text-slate-400", children: "Formulář je chráněn Turnstile od společnosti Cloudflare" })
  ] });
};
const LeftSide = () => {
  const route = useRoute();
  const ref = useRef(null);
  const form = useForm({ "username": "", "password": "", "remember": false, "cf-turnstile-response": "" });
  const inputHandle = (el) => {
    const { name, value } = el.target;
    form.setData(name, value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    form.post(route("login"), { onError: () => ref.current.reset() });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white px-6 py-8", children: [
    /* @__PURE__ */ jsx(ErrorMessage, { errors: form.errors }),
    /* @__PURE__ */ jsxs("form", { onSubmit: formSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Uživatelské jméno",
          name: "username",
          type: "text",
          value: form.data.username,
          handler: inputHandle
        }
      ),
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Heslo",
          name: "password",
          type: "password",
          value: form.data.password,
          handler: inputHandle
        }
      ),
      /* @__PURE__ */ jsx(Turnstile, { ref, siteKey: "0x4AAAAAAAA-B3L_qlbHqoCw", options: { size: "invisible" }, onSuccess: (token) => form.setData("cf-turnstile-response", token) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(InputCheckbox, { checked: form.data.remember, setChecked: form.setData, inputCheck: "remember", srOnly: "Zapamatovat si mě" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-900 ml-2 font-medium text-xs sm:text-sm", children: "Zapamatovat si mě" })
        ] }),
        /* @__PURE__ */ jsx(Link, { href: "#", className: "text-xs sm:text-sm text-brand underline hover:text-blue-600 focus:outline-none focus-within:ring-1 focus-within:ring-brand focus-within:rounded focus-within:ring-offset-2 focus-within:ring-offset-white", children: "Zapomenuté heslo?" })
      ] }),
      /* @__PURE__ */ jsx(InputButton, { className: `text-slate-50 ${form.processing ? "bg-slate-900 hover:bg-slate-800 focus:bg-slate-800" : "bg-brand hover:bg-blue-600 focus:bg-blue-600"} focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 ${form.processing ? "focus-within:ring-slate-900 focus-within:ring-offset-white" : "focus-within:ring-brand focus-within:ring-offset-white"} transition`, loading: form.processing, children: "Přihlásit se" })
    ] })
  ] });
};
const RightSide = () => {
  const route = useRoute();
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "absolute inset-0 z-0 h-full w-full stroke-white/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
            "pattern",
            {
              id: "983e3e4c-de6d-4c3f-8d64-b9761d1534cc",
              width: 100,
              height: 100,
              x: "50%",
              y: -1,
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsx("path", { d: "M.5 200V.5H200", fill: "none" })
            }
          ) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 1108 632",
        "aria-hidden": "true",
        className: "absolute  z-0 w-full max-w-none transform-gpu blur-3xl h-full",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)",
              fillOpacity: ".2",
              d: "M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
            }
          ),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "175c433f-44f6-4d59-93f0-c5c51ad5566d",
              x1: "1220.59",
              x2: "-85.053",
              y1: "432.766",
              y2: "638.714",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#4F46E5" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#80CAFF" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative px-6 py-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-lg font-bold", children: "Nemáte na naší stránce účet?" }),
      /* @__PURE__ */ jsx("span", { className: "block text-slate-300 text-sm mt-1 font-medium", children: "To není vůbec problém, díky našemu průvodci si můžeš u nás jednoduše a rychle vytvořit svůj účet." }),
      /* @__PURE__ */ jsx(Link, { href: route("register"), className: "relative mt-6 font-medium flex items-center justify-center w-full px-4 py-3 rounded-md shadow bg-white text-slate-900 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-white focus-within:ring-offset-slate-900 transition", children: "Zaregistrovat se" })
    ] })
  ] });
};
const InputField = ({ label = "", name = "", type = "text", value = "", handler = Function }) => {
  const uniqueID = `InputField-${v4()}`;
  return /* @__PURE__ */ jsxs("div", { id: uniqueID, className: "rounded-md border border-slate-300 px-3 py-2 shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: uniqueID, className: "block select-none text-xs font-medium text-slate-900", children: label }),
    /* @__PURE__ */ jsx("input", { id: uniqueID, name, type, value, onChange: handler, className: "block w-full border-0 p-0 text-slate-700 placeholder-slate-500 outline-none focus:outline-0 focus:ring-0 sm:text-sm" })
  ] });
};
const InputCheckbox = ({ checked = false, setChecked, inputCheck = "", srOnly = "" }) => {
  return /* @__PURE__ */ jsxs(
    Switch,
    {
      checked,
      onChange: (bool) => setChecked(inputCheck, bool),
      className: `relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-brand ui-not-checked:bg-slate-900 focus:outline-none focus-within:ring-1 ui-checked:focus-within:ring-brand ui-not-checked:focus-within:ring-slate-900 focus-within:ring-offset-1 focus-within:ring-offset-white transition`,
      children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: srOnly }),
        /* @__PURE__ */ jsx("span", { className: "inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1" })
      ]
    }
  );
};
const InputButton = ({ type = "submit", children, loading = false, className = "" }) => {
  return /* @__PURE__ */ jsxs("button", { type, className: `relative flex items-center justify-center w-full px-4 py-3 rounded-md shadow ${className}`, children: [
    loading ? /* @__PURE__ */ jsx("svg", { className: "absolute left-1/2 -translate-x-1/2 inset-x-0 transition-all ease-in-out", width: "24", height: "24", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsxs("circle", { cx: "12", cy: "12", r: "9.5", fill: "none", strokeWidth: "3", strokeLinecap: "round", children: [
        /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dasharray", dur: "1.5s", calcMode: "spline", values: "0 150;42 150;42 150;42 150", keyTimes: "0;0.475;0.95;1", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1", repeatCount: "indefinite" }),
        /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", calcMode: "spline", values: "0;-16;-59;-59", keyTimes: "0;0.475;0.95;1", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1", repeatCount: "indefinite" })
      ] }),
      /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", values: "0 12 12;360 12 12", repeatCount: "indefinite" })
    ] }) }) : null,
    /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${loading ? "invisible" : null}`, children })
  ] });
};
const ErrorMessage = ({ errors }) => {
  const ListOfError = Object.entries(errors).map(([key, value]) => /* @__PURE__ */ jsx("li", { children: value }, key));
  return !lodashExports.isEmpty(errors) ? /* @__PURE__ */ jsx("div", { className: "rounded-md bg-red-50 p-4 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(XCircleIcon, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Nastala chyba při validaci" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ jsx("ul", { role: "list", className: "list-disc space-y-1 pl-3", children: ListOfError }) })
    ] })
  ] }) }) : null;
};
LoginPage.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { children: page });
export {
  LoginPage as default
};
