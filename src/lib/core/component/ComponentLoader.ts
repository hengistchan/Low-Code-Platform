import type { EditorComponent } from "./../../types/component";
import { getEditor } from "./../../helper/index";
import { get, set, entries, values } from "lodash";
import log from "../../helper/log";

/**
 * It loads a component from a module.
 * @param {string} modules - The name of the module that contains the component.
 * @param {string} componentName - The name of the component to load.
 * @returns The component itself.
 */
const componentLoader = async (
  modules: string,
  componentName: string,
): Promise<EditorComponent | null> => {
  const editor = getEditor();
  const path = [modules, "componentMap", componentName];
  const cachedComponentModules = editor.modules.cachedComponentModules;
  const importedComponentModules = editor.modules.importedComponentModules;

  // 从缓存查询
  let component = get(cachedComponentModules, path, null) as EditorComponent;
  // 缓存命中
  if (component) {
    log(`${modules}.${componentName}组件加载 from cache`, "green");
    return component;
  }

  const importedComponent = get(importedComponentModules, path, null);
  if (importedComponent == null) {
    return null;
  }
  component = (await importedComponent()).default;
  // 放入缓存
  set(cachedComponentModules, path, component);
  log(`${modules}.${componentName}组件加载 from async`, "green");
  return component;
};

/**
 * Load all components in the editor
 */
const loadAllComponent = async () => {
  const editor = getEditor();
  const importedComponentModules = editor.modules.importedComponentModules;
  const cachedComponentModules = editor.modules.cachedComponentModules;
  const kvim = entries(importedComponentModules);
  for (let i = 0; i < kvim.length; i++) {
    const kvic = entries(kvim[i][1].componentMap);
    const modules = kvim[i][0];
    for (let j = 0; j < kvic.length; j++) {
      const componentName = kvic[j][0];
      await componentLoader(modules, componentName);
    }
    cachedComponentModules[modules].components = values(
      cachedComponentModules[modules].componentMap ?? {},
    ).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
  }
  return cachedComponentModules;
};

export { loadAllComponent, componentLoader };
export default componentLoader;
