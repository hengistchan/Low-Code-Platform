import type { EditorComponent } from "@/lib";
import IconHelper from "../../../helper/IconHelper";
import IconTextBox from "~icons/mdi/text-box";

const component: EditorComponent = {
  name: "text",
  moduleName: "text",
  label: "文本",
  preview: () => <p>文本</p>,
  render: () => import("./index.vue"),
  props: {},
  icon: IconHelper(IconTextBox),
};

export default component;
