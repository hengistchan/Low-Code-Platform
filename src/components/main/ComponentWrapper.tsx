import { Component, useEditor } from "@/lib";
import { entries } from "lodash";
import { renderSlot, type PropType, type Slot } from "vue";

export default defineComponent({
  name: "render",
  props: {
    element: {
      type: Object as PropType<Component>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const moduleName = props.element.moduleName;
    const componentName = props.element.name;
    const { modules } = useEditor();
    const component = modules[moduleName]?.componentMap[componentName];
    const C = toRaw(component.render);

    return () => (
      // @ts-ignore
      <C component={props.element}>
        {entries(slots).reduce((prev, [key, slot]) => {
          if (typeof slot === "function") {
            prev[key] = slot;
          }
          return prev;
        }, {} as { [key: string]: Slot })}
      </C>
    );
  },
});
