import * as jsxRuntime from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-wrap-balancer";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const fonts = "";
const tailwind = "";
createInertiaApp({
  id: "mw-ui",
  title: (title) => title ? `MUJIWA | ${title}` : `MUJIWA`,
  progress: { includeCSS: false },
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./pages/auth/login/index.jsx": () => import("./assets/index-04b6da18.mjs"), "./pages/auth/register/index.jsx": () => import("./assets/index-606fd146.mjs"), "./pages/dummy/index.jsx": () => import("./assets/index-745a8521.mjs") });
    return pages[`./pages/${name}/index.jsx`]();
  },
  setup({ el, App, props }) {
    createRoot(el).render(/* @__PURE__ */ jsx(Provider, { children: /* @__PURE__ */ jsx(App, { ...props }) }));
  }
});
export {
  Fragment as F,
  jsx as a,
  jsxs as j
};
