import type { App, InjectionKey } from "vue";
import type {
  ImportedComponentModule,
  CachedComponentModule,
} from "../types/module";
import editorStore from "./store";
import log from "../helper/log";

// try to delete
import * as Modules from "../../packages/index";
// try to delete

export type Editor = {
  store: typeof editorStore;
  modules: {
    importedComponentModules: { [moduleName: string]: ImportedComponentModule };
    cachedComponentModules: { [moduleName: string]: CachedComponentModule };
  };
};

const editorSymbol = Symbol("editor") as InjectionKey<Editor>;

const initEditor: Editor = {
  store: editorStore,
  modules: {
    importedComponentModules: {},
    cachedComponentModules: {},
  },
};

/**
 * It creates a new editor instance.
 * @returns The `install` function is being returned.
 */
const createEditor = () => {
  const install = (app: App) => {
    const refInitData = reactive(initEditor);
    refInitData.modules.importedComponentModules =
      Modules.importedComponentModules;
    refInitData.modules.cachedComponentModules = Modules.cachedComponentModules;
    app.provide(editorSymbol, refInitData);
    log("Editor初始化完成");
  };
  return {
    install,
  };
};

export { createEditor, editorSymbol };
