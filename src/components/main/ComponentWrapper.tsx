import { Component, useEditor } from "@/lib";
import { PropType, Suspense } from "vue";

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

    const AsyncComponent = defineAsyncComponent({
      loader: component.render,
    });

    return () => <AsyncComponent component={props.element} />;
  },
});
