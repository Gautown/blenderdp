import {
  BaseApp,
  createAssetLink,
  createModuleScriptElement,
  createStylesheetElementSet
} from "./chunk-OT7GGQEN.js";
import {
  Pipeline,
  RedirectSinglePageBuiltModule,
  createConsoleLogger,
  findRouteToRewrite
} from "./chunk-RGKBCLOU.js";
import "./chunk-6ESEJPI4.js";
import "./chunk-YNA37RYU.js";
import "./chunk-EAUHV4YX.js";
import "./chunk-YE4TU7BS.js";
import "./chunk-IGW5TBWW.js";
import {
  deserializeManifest,
  deserializeRouteData,
  deserializeRouteInfo,
  serializeRouteData,
  serializeRouteInfo
} from "./chunk-W4I2I42D.js";
import "./chunk-EC5AHR7R.js";
import "./chunk-AHHGZUK3.js";
import "./chunk-73D67CZQ.js";
import "./chunk-3BDX3ZOZ.js";
import "./chunk-S2NUSMAZ.js";
import "./chunk-ZKNHH342.js";
import "./chunk-JGRMTRFV.js";
import "./chunk-74PY6FDS.js";
import "./chunk-EBNURPDV.js";
import "./chunk-3W5DIN2W.js";
import "./chunk-752CUAJ7.js";
import "./chunk-ZJ2TFWJF.js";
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
import "./chunk-ICZUEYIK.js";
import "./chunk-LJA7NSNK.js";
import "./chunk-22OUQE6O.js";
import "./chunk-XKW7F657.js";
import "./chunk-6JCJLAEP.js";
import "./chunk-43U7TROC.js";
import {
  getFallbackRoute,
  routeIsFallback,
  routeIsRedirect
} from "./chunk-ZDRFTGTO.js";
import "./chunk-3CQKBMXD.js";
import "./chunk-O5ENVNT3.js";
import "./chunk-EM3Z7L5D.js";
import "./chunk-EGRHWZRV.js";
import "./chunk-G7PSGJA4.js";
import "./chunk-NMRFGD2L.js";
import "./chunk-G3PMV62Z.js";

// node_modules/astro/dist/core/app/pipeline.js
var AppPipeline = class _AppPipeline extends Pipeline {
  getName() {
    return "AppPipeline";
  }
  static create({ manifest, streaming }) {
    const resolve = async function resolve2(specifier) {
      if (!(specifier in manifest.entryModules)) {
        throw new Error(`Unable to resolve [${specifier}]`);
      }
      const bundlePath = manifest.entryModules[specifier];
      if (bundlePath.startsWith("data:") || bundlePath.length === 0) {
        return bundlePath;
      } else {
        return createAssetLink(bundlePath, manifest.base, manifest.assetsPrefix);
      }
    };
    const logger = createConsoleLogger({ level: manifest.logLevel });
    const pipeline = new _AppPipeline(
      logger,
      manifest,
      "production",
      manifest.renderers,
      resolve,
      streaming,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0
    );
    return pipeline;
  }
  async headElements(routeData) {
    const { assetsPrefix, base } = this.manifest;
    const routeInfo = this.manifest.routes.find(
      (route) => route.routeData.route === routeData.route
    );
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script, base, assetsPrefix));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    const module = await this.getModuleForRoute(routeData);
    return module.page();
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: () => Promise.resolve(defaultRoute.instance)
        };
      }
    }
    let routeToProcess = route;
    if (routeIsRedirect(route)) {
      if (route.redirectRoute) {
        routeToProcess = route.redirectRoute;
      } else {
        return RedirectSinglePageBuiltModule;
      }
    } else if (routeIsFallback(route)) {
      routeToProcess = getFallbackRoute(route, this.manifest.routes);
    }
    if (this.manifest.pageMap) {
      const importComponentInstance = this.manifest.pageMap.get(routeToProcess.component);
      if (!importComponentInstance) {
        throw new Error(
          `Unexpectedly unable to find a component instance for route ${route.route}`
        );
      }
      return await importComponentInstance();
    } else if (this.manifest.pageModule) {
      return this.manifest.pageModule;
    }
    throw new Error(
      "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
    );
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r) => r.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base,
      outDir: this.manifest?.serverLike ? this.manifest.buildClientDir : this.manifest.outDir
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { newUrl, pathname, componentInstance, routeData };
  }
};

// node_modules/astro/dist/core/app/app.js
var App = class extends BaseApp {
  createPipeline(streaming) {
    return AppPipeline.create({
      manifest: this.manifest,
      streaming
    });
  }
  isDev() {
    return false;
  }
  // Should we log something for our users?
  logRequest(_options) {
  }
};

// node_modules/astro/dist/core/app/common.js
function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}
var PREFIX_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always",
  "domains-prefix-always",
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
var REDIRECT_TO_DEFAULT_LOCALE = /* @__PURE__ */ new Set([
  "pathname-prefix-always-no-redirect",
  "domains-prefix-always-no-redirect"
]);
function fromRoutingStrategy(strategy, fallbackType) {
  let routing;
  if (strategy === "manual") {
    routing = "manual";
  } else {
    routing = {
      prefixDefaultLocale: PREFIX_DEFAULT_LOCALE.has(strategy),
      redirectToDefaultLocale: !REDIRECT_TO_DEFAULT_LOCALE.has(strategy),
      fallbackType
    };
  }
  return routing;
}
export {
  App,
  AppPipeline,
  BaseApp,
  createConsoleLogger,
  deserializeManifest,
  deserializeRouteData,
  deserializeRouteInfo,
  fromRoutingStrategy,
  serializeRouteData,
  serializeRouteInfo,
  toRoutingStrategy
};
//# sourceMappingURL=astro_app.js.map
