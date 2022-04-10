import { createEditor, editorSymbol } from "./core/CreateEditor";
import pageCreater from "./core/page/PageCreater";
import componentCreater from "./core/component/ComponentCreater";
import { default as useEditorStore } from "./core/store";
import { getEditor as useEditor } from "./helper";

import type { EditorStore } from "./core/store";
import type { Editor } from "./core/CreateEditor";
import type {
  Component,
  EditorComponent,
  Event,
  Model,
  Actions,
  Action,
} from "./types/component";
import type { ComponentModule } from "./types/module";
import type { Page, PageProps } from "./types/page";

export type {
  Editor,
  EditorStore,
  Component,
  EditorComponent,
  Event,
  Model,
  Actions,
  Action,
  Page,
  PageProps,
  ComponentModule,
};

export {
  useEditor,
  useEditorStore,
  createEditor,
  editorSymbol,
  pageCreater,
  componentCreater,
};
