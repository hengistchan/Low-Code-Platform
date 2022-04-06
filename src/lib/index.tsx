import { createEditor, editorSymbol } from "./core/CreateEditor";
import {
  componentLoader,
  loadAllComponent,
} from "./core/component/ComponentLoader";
import componentCreater from "./core/component/ComponentCreater";
import { default as useEditorStore } from "./core/store";
import { getEditor as useEditor } from "./helper";

import type { EditorStore } from "./core/store";
import type { Editor } from "./core/CreateEditor";
import type {
  Component,
  ImportedComponent,
  EditorComponent,
  Event,
  Model,
  Actions,
  Action,
} from "./types/component";
import type {
  ImportedComponentModule,
  CachedComponentModule,
} from "./types/module";
import type { Page, PageProps } from "./types/page";

export type {
  Editor,
  EditorStore,
  Component,
  ImportedComponent,
  EditorComponent,
  Event,
  Model,
  Actions,
  Action,
  ImportedComponentModule,
  CachedComponentModule,
  Page,
  PageProps,
};

export {
  useEditor,
  useEditorStore,
  createEditor,
  editorSymbol,
  componentLoader,
  loadAllComponent,
  componentCreater,
};
