import type { Component as VueComponent } from "vue";
import type { EditorComponent } from "./component";

type PureComponentModule<M> = {
  name: string;
  label: string;
  order: number;
  icon: VueComponent;
  componentMap: { [componentName: string]: M };
  components: M[];
};

/**
 * 组件模块定义
 */
export type ComponentModule = PureComponentModule<EditorComponent>;
