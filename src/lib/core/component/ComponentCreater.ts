import { cloneDeep } from "lodash";
import type { EditorComponent, Component } from "./../../types/component";

const componentCreater = (component: EditorComponent) => {
  const cpn: Component = {
    _id: nanoid(),
    moduleName: component.moduleName,
    name: component.name,
    label: component.label,
    styles: {},
    props: cloneDeep(component.props ?? {}),
    children: {
      slot1: [],
      slot2: [],
    },
    models: cloneDeep(component.models ?? {}),
    events: cloneDeep(component.events || []),
    actions: cloneDeep(component.actions ?? {}),
  };
  return cpn;
};

export default componentCreater;
