import type { Component as VueComponent } from "vue";
import type { EditorComponent } from "./component";

type PureComponentModule<M> = {
  name: string;
  label: string;
  order: number;
  icon: VueComponent;
  componentMap: { [componentName: string]: M };
};

/**
 * 组件懒加载定义
 */
export type ImportedComponentModule = PureComponentModule<
  () => Promise<{ default: EditorComponent }>
>;

/**
 * 组件缓存定义
 */
export type CachedComponentModule = PureComponentModule<EditorComponent>;
