import type { EditorComponent, ComponentModule } from "@/lib";
import { mapValues, entries } from "lodash";

export const mapModules = (ms: Record<string, { [key: string]: any }>) => {
  const componentModules: {
    [moduleName: string]: ComponentModule;
  } = {};

  mapValues(ms, (module: { default: ComponentModule }) => {
    componentModules[module.default.name] = module.default;
  });

  return componentModules;
};

export const mapComponents = (cs: Record<string, { [key: string]: any }>) => {
  const components: EditorComponent[] = [];
  const componentMap: {
    [componentName: string]: EditorComponent;
  } = {};
  entries(cs).forEach(([componentPath, componentImport]) => {
    const res = componentPath.match(/^.\/([\d\D]+)\/index.tsx$/);
    if (res) {
      componentMap[res[1]] = componentImport.default as EditorComponent;
      components.push(componentImport.default as EditorComponent);
    }
  });
  components.sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
  return {
    components,
    componentMap,
  };
};
