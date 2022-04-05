import { editorSymbol } from "../core/CreateEditor";

export const getEditor = () => {
  const editor = inject(editorSymbol);
  if (editor == null) {
    throw new Error("Editor实例未挂载");
  }
  return editor;
};

export const useEditorStore = () => {
  const editor = getEditor();
  return editor.store;
};
