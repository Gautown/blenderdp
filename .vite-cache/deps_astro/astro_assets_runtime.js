import {
  spreadAttributes
} from "./chunk-AIH5PXDG.js";
import "./chunk-73D67CZQ.js";
import "./chunk-S2NUSMAZ.js";
import "./chunk-ZKNHH342.js";
import "./chunk-3BDX3ZOZ.js";
import "./chunk-UZQ5C7FT.js";
import "./chunk-Q5W3JYNC.js";
import "./chunk-XQASQ2HK.js";
import {
  renderTemplate
} from "./chunk-K4S5DUXW.js";
import "./chunk-YU63MHB5.js";
import {
  generateCspDigest
} from "./chunk-ZJ2TFWJF.js";
import "./chunk-ZY6SPQNF.js";
import "./chunk-C7FTX6Y2.js";
import "./chunk-CLG4NFET.js";
import "./chunk-OEBWUCFG.js";
import "./chunk-RWSE54HX.js";
import "./chunk-KDVGFZWC.js";
import "./chunk-Z2GMSBIL.js";
import "./chunk-ZLGLL3IU.js";
import "./chunk-W7XOZZYE.js";
import "./chunk-5GIRW7PW.js";
import "./chunk-D2DBHPA3.js";
import "./chunk-GDTSWXGT.js";
import "./chunk-WOH65E4U.js";
import "./chunk-DILL7Y4U.js";
import "./chunk-ZBJO6VF3.js";
import "./chunk-KMWTWISZ.js";
import "./chunk-C6EJMJQM.js";
import "./chunk-H5YU4H2Y.js";
import {
  unescapeHTML
} from "./chunk-ICZUEYIK.js";
import "./chunk-LJA7NSNK.js";
import {
  createComponent
} from "./chunk-22OUQE6O.js";
import "./chunk-XKW7F657.js";
import "./chunk-6JCJLAEP.js";
import "./chunk-43U7TROC.js";
import "./chunk-O5ENVNT3.js";
import "./chunk-EGRHWZRV.js";
import "./chunk-G7PSGJA4.js";
import "./chunk-NMRFGD2L.js";
import "./chunk-G3PMV62Z.js";

// node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  if (import.meta.env.DEV) {
    makeNonEnumerable(Component);
    Object.defineProperty(Component, /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom"), {
      value: (_, opts, inspect) => inspect(meta, opts)
    });
  }
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}
function makeNonEnumerable(object) {
  for (const property in object) {
    Object.defineProperty(object, property, { enumerable: false });
  }
}
export {
  createSvgComponent,
  dropAttributes
};
//# sourceMappingURL=astro_assets_runtime.js.map
