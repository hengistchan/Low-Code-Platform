import type { ComponentModule } from "@/lib";
import { mapComponents } from "../../../packages/helper";
import IconText from "~icons/mdi/text";
import IconHelper from "../../helper/IconHelper";

const c = import.meta.globEager("./*/index.tsx");
const { components, componentMap } = mapComponents(c);

const cm: ComponentModule = {
  name: "text",
  label: "文本组件",
  order: 1,
  icon: IconHelper(IconText),
  components,
  componentMap,
};

export default cm;
