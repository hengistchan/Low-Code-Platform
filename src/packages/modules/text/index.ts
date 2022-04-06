import type { ImportedComponentModule } from "../../../lib/types/module";
import { mapComponents } from "../../../packages/helper";
import IconText from "~icons/mdi/text";

const c = import.meta.glob("./*/index.tsx");
const { components, componentMap } = mapComponents(c);

const cm: ImportedComponentModule = {
  name: "text",
  label: "文本组件",
  order: 1,
  icon: markRaw(IconText),
  components,
  componentMap,
};

export default cm;
