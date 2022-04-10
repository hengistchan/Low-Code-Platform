import { Component, useEditor } from "@/lib";
import type { PropType } from "vue";

export default defineComponent({
  name: "render",
  props: {
    element: {
      type: Object as PropType<Component>,
      required: true,
    },
  },
  setup(props) {
    const moduleName = props.element.moduleName;
    const componentName = props.element.name;
    const { modules } = useEditor();
    const component = modules[moduleName]?.componentMap[componentName];
    const C = toRaw(component.render);
    // @ts-ignore
    return () => <C component={props.element} />;
  },
});
