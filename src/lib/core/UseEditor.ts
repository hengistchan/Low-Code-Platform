import { getEditor } from "../helper";
import { loadAllComponent } from "./component/ComponentLoader";

const useEditor = () => {
  const editor = getEditor();

  const getLoadedModules = async () => {
    await loadAllComponent();
    return editor.modules.cachedComponentModules;
  };

  const useEditorStore = () => {
    return editor.store();
  };

  return {
    getLoadedModules,
    useEditorStore,
  };
};

export default useEditor;
