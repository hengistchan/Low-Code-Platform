import type { EditorComponent } from "@/lib";
import IconHelper from "../../../helper/IconHelper";
import IconTextBox from "~icons/mdi/text-box";
import Text from "./index.vue";

const component: EditorComponent = {
  name: "text",
  moduleName: "text",
  label: "基础文本",
  preview: () => <p>文本</p>,
  render: () => import("./index.vue"),
  props: {},
  icon: IconHelper(IconTextBox),
};

export default component;
