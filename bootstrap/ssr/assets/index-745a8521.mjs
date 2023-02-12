import { a as jsx } from "../main.mjs";
import "react/jsx-runtime";
import "@inertiajs/react";
import "react-dom/client";
import "react-wrap-balancer";
function dummy() {
  return /* @__PURE__ */ jsx("h1", { dusk: "test", children: "Hello world" });
}
export {
  dummy as default
};
