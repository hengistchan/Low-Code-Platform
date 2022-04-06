import type { EditorComponent, Component } from "./../../types/component";

const componentCreater = (component: EditorComponent) => {
  const cpn: Component = {
    _id: nanoid(),
    moduleName: component.moduleName,
    name: component.name,
    label: component.label,
    styles: {},
    props: {},
    children: {},
    models: {},
    events: component.events || [],
    actions: {},
  };
  return cpn;
};

export default componentCreater;
