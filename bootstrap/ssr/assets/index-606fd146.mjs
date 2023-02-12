import { a as jsx, F as Fragment, j as jsxs } from "../main.mjs";
import { u as useRoute, l as lodashExports, X as XCircleIcon, A as AuthLayout } from "./lodash-4a7eaf83.mjs";
import Balancer from "react-wrap-balancer";
import { v4 } from "uuid";
import { motion } from "framer-motion";
import { useForm, Link } from "@inertiajs/react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef } from "react";
import "react/jsx-runtime";
import "react-dom/client";
import "ziggy-js";
const RegisterPage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, transition: { type: "spring" }, children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-lg w-full mx-auto mt-6", children: /* @__PURE__ */ jsx("h6", { className: "block text-center text-xl sm:text-3xl font-bold tracking-tight text-slate-900", children: /* @__PURE__ */ jsx(Balancer, { children: "Vytvořte si svůj účet MW" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "shadow-md rounded-md overflow-hidden grid grid-cols-1 mt-8 mx-auto max-w-lg w-full", children: /* @__PURE__ */ jsx(Form, {}) }),
    /* @__PURE__ */ jsx("span", { className: "mt-2 mx-auto block max-w-lg w-full text-center text-sm font-medium text-slate-400", children: "Formulář je chráněn Turnstile od společnosti Cloudflare" })
  ] }) });
};
const Form = () => {
  const route = useRoute();
  const ref = useRef(null);
  const form = useForm({ "username": "", "email": "", "password": "", "password_confirmation": "", "cf-turnstile-response": "" });
  const inputHandle = (el) => {
    const { name, value } = el.target;
    form.setData(name, value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    form.post(route("register"), { onError: () => ref.current.reset() });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white px-6 py-8", children: [
    /* @__PURE__ */ jsx(ErrorMessage, { errors: form.errors }),
    /* @__PURE__ */ jsxs("form", { onSubmit: formSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Uživatelské jméno",
          name: "username",
          handler: inputHandle,
          type: "text",
          value: form.data.username
        }
      ),
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Email",
          name: "email",
          handler: inputHandle,
          type: "email",
          value: form.data.email
        }
      ),
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Heslo",
          name: "password",
          handler: inputHandle,
          type: "password",
          value: form.data.password
        }
      ),
      /* @__PURE__ */ jsx(
        InputField,
        {
          label: "Heslo (Ověření)",
          name: "password_confirmation",
          handler: inputHandle,
          type: "password",
          value: form.data.password_confirmation
        }
      ),
      /* @__PURE__ */ jsx(Turnstile, { ref, onSuccess: (token) => form.setData("cf-turnstile-response", token), siteKey: "0x4AAAAAAAA-B3L_qlbHqoCw", options: { size: "invisible" } }),
      /* @__PURE__ */ jsx(InputButton, { type: "submit", loading: form.processing, className: `text-slate-50 ${form.processing ? "bg-slate-900 hover:bg-slate-800 focus:bg-slate-800" : "bg-brand hover:bg-blue-600 focus:bg-blue-600"} focus:outline-none focus-within:ring-2 focus-within:ring-offset-1 ${form.processing ? "focus-within:ring-slate-900 focus-within:ring-offset-white" : "focus-within:ring-brand focus-within:ring-offset-white"} transition`, children: "Zaregistrovat se" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-slate-900 font-medium text-sm", children: "Už máte u nás účet?" }),
        /* @__PURE__ */ jsx(Link, { href: route("login"), className: "text-sm text-brand underline hover:text-blue-600 focus:outline-none focus-within:ring-1 focus-within:ring-brand focus-within:rounded focus-within:ring-offset-2 focus-within:ring-offset-white", children: "Přihlásit se" })
      ] })
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
RegisterPage.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { children: page });
export {
  RegisterPage as default
};
