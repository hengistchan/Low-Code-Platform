import type { EditorComponent } from "@/lib";
import IconHelper from "../../../helper/IconHelper";
import IconTextBox from "~icons/mdi/package-variant-plus";
import Component from "./index.vue";

const component: EditorComponent = {
  name: "container",
  moduleName: "container",
  label: "基础容器",
  preview: () => <p>文本</p>,
  render: () => import("./index.vue"),
  props: {},
  icon: IconHelper(IconTextBox),
};

export default component;
