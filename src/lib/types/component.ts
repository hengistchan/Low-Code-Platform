// 组件类型定义
import type {
  CSSProperties,
  Component as VueComponent,
  DefineComponent,
} from "vue";

// 组件实例定义
export type Component<P = Record<string, unknown>> = PureComponent<P> &
  OptionalComponentOption;

type PureComponent<P> = {
  _id: string; // Component ID
  moduleName: string;
  name: string;
  label: string;
  styles: CSSProperties;
  props: P;
  children: { [soltName: string]: Component };
  [prop: string]: unknown;
};

type OptionalComponentOption = {
  models: { [key: string]: Model };
  events: Event[];
  actions: Actions;
};

// 组件库组件定义
export type EditorComponent<P = Record<string, unknown>> = {
  moduleName: string;
  name: string;
  label: string;
  preview?: () => JSX.Element;
  render:
    | (() => Promise<typeof import("*.vue")>)
    | DefineComponent
    | VueComponent;
  props: P;
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
