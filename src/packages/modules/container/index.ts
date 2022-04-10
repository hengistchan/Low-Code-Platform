import type { ComponentModule } from "@/lib";
import { mapComponents } from "../../../packages/helper";
import Icon from "~icons/mdi/contain";
import IconHelper from "../../helper/IconHelper";

const c = import.meta.globEager("./*/index.tsx");
const { components, componentMap } = mapComponents(c);

const cm: ComponentModule = {
  name: "container",
  label: "容器组件",
  order: 2,
  icon: IconHelper(Icon),
  components,
  componentMap,
};

export default cm;
