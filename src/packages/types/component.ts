// 组件类型定义

import { CSSProperties } from "vue";

// 组件实例定义
export type Component = PureComponent & OptionalComponentOption;

type PureComponent = {
  _id: string; // Component ID
  moduleNane: string;
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
  preview: () => JSX.Element;
  render: (component: Component) => (props?: any) => JSX.Element;
  order?: number;
} & PureComponent &
  Partial<OptionalComponentOption>;

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
