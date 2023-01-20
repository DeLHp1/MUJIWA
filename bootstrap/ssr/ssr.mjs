import * as jsxRuntime from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const jsx = jsxRuntime.jsx;
function dummy() {
  return /* @__PURE__ */ jsx("h1", { dusk: "test", children: "Hello world" });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dummy
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    id: "mw-ui",
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./pages/dummy/index.jsx": __vite_glob_0_0 });
      return pages[`./pages/${name}/index.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
