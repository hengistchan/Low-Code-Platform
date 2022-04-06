// 组件类型定义

import type { CSSProperties, Component as VueComponent } from "vue";

// 组件实例定义
export type Component = PureComponent & OptionalComponentOption;

export type ImportedComponent = () => Promise<{ default: EditorComponent }>;

type PureComponent = {
  _id: string; // Component ID
  moduleName: string;
  name: string;
  label: string;
  styles: CSSProperties;
  props: Record<string, unknown>;
  children: { [soltName: string]: Component };
  [prop: string]: unknown;
};

type OptionalComponentOption = {
  models: { [key: string]: Model };
  events: Event[];
  actions: Actions;
};

// 组件库组件定义
export type EditorComponent = {
  moduleName: string;
  name: string;
  label: string;
  preview: () => JSX.Element;
  render: (component: Component) => (props?: any) => JSX.Element;
  props: Record<string, unknown>;
  order?: number;
  icon: VueComponent;
} & Partial<OptionalComponentOption>;

export interface Event {
  label: string;
  value: string;
  code?: string;
}

export type Model = {
  name: string;
  key: string;
  defaultValue?: number | string;
};

export type Actions = {
  [actionName: string]: { [actionKey: string]: Action };
};

export interface Action {
  key: string;
  event: string;
  name: string;
  code: string;
}
