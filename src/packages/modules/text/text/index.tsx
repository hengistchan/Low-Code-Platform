import type { EditorComponent } from "@/lib/types/component";
import IconTextBox from "~icons/mdi/text-box";

const component: EditorComponent = {
  name: "text",
  moduleName: "text",
  label: "文本",
  preview: () => <p>文本</p>,
  render: (component) => {
    return () => {
      return <p>文本</p>;
    };
  },
  props: {},
  icon: markRaw(IconTextBox),
};

export default component;
