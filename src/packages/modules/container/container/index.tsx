import type { EditorComponent } from "@/lib";
import IconHelper from "../../../helper/IconHelper";
import IconTextBox from "~icons/mdi/package-variant-plus";

type Slots = {
  [slotName: string]: { key: string; span: string };
};

export type Props = {
  slots: Slots;
  value: string;
};

const component: EditorComponent<Props> = {
  name: "container",
  moduleName: "container",
  label: "基础容器",
  preview: () => <p>文本</p>,
  render: () => import("./index.vue"),
  props: {
    slots: {
      slot1: { key: "slot1", span: "12" },
      slot2: { key: "slot2", span: "12" },
    },
    value: "Hello World",
  },
  icon: IconHelper(IconTextBox),
};

export default component;
