import type { EditorComponent } from "./component";
import type { Component as VueComponent } from "vue";

// 模块定义
export type ComponentModule = {
  name: string;
  label: string;
  order: number;
  components: EditorComponent[];
  componentMap: { [componentName: string]: EditorComponent };
  icon: VueComponent;
};
