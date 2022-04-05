import { CachedComponentModule } from "../../lib/types/module";
import type { ImportedComponentModule } from "../../lib/types/module";
import { mapValues } from "lodash";

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
    };
  });

  return {
    importedComponentModules,
    cachedComponentModules,
  };
};
