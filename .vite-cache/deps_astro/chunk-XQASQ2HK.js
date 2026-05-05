import {
  renderSlotToString
} from "./chunk-K4S5DUXW.js";
import {
  toAttributeString
} from "./chunk-RWSE54HX.js";
import {
  markHTMLString
} from "./chunk-ICZUEYIK.js";

// node_modules/astro/dist/runtime/server/render/dom.js
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName) return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

export {
  componentIsHTMLElement,
  renderHTMLElement
};
//# sourceMappingURL=chunk-XQASQ2HK.js.map
