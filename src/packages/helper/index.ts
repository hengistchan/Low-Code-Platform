import { CachedComponentModule } from "../../lib/types/module";
import type { ImportedComponentModule } from "../../lib/types/module";
import { mapValues, entries } from "lodash";
import {} from "lodash";
import type { ImportedComponent } from "../../lib/types/component";

export const mapModules = (
  ms: Record<
    string,
    {
      [key: string]: any;
    }
  >,
) => {
  const importedComponentModules: {
    [moduleName: string]: ImportedComponentModule;
  } = {};
  const cachedComponentModules: {
    [moduleName: string]: CachedComponentModule;
  } = {};

  mapValues(ms, (module: { default: ImportedComponentModule }) => {
    importedComponentModules[module.default.name] = module.default;
    cachedComponentModules[module.default.name] = {
      ...module.default,
      componentMap: {},
      components: [],
    };
  });

  return {
    importedComponentModules,
    cachedComponentModules,
  };
};

export const mapComponents = (
  cs: Record<
    string,
    {
      [key: string]: any;
    }
  >,
) => {
  const components: ImportedComponent[] = [];
  const componentMap: {
    [componentName: string]: ImportedComponent;
  } = {};
  entries(cs).forEach(([componentPath, componentImport]) => {
    const res = componentPath.match(/^.\/([\d\D]+)\/index.tsx$/);
    if (res) {
      componentMap[res[1]] = componentImport as ImportedComponent;
    }
  });
  return {
    components,
    componentMap,
  };
};
