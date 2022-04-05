import { entries } from "lodash";
import type { ImportedComponent } from "../../../lib/types/component";
import type { ImportedComponentModule } from "../../../lib/types/module";
import IconText from "~icons/mdi/text";

const c = import.meta.glob("./*/index.tsx");

const components: ImportedComponent[] = [];
const componentMap: {
  [componentName: string]: ImportedComponent;
} = {};
entries(c).forEach(([componentPath, componentImport]) => {
  const res = componentPath.match(/^.\/([\d\D]+)\/index.tsx$/);
  if (res) {
    componentMap[res[1]] = componentImport as ImportedComponent;
  }
});

const cm: ImportedComponentModule = {
  name: "text",
  label: "文本组件",
  order: 1,
  icon: IconText,
  components,
  componentMap,
};

export default cm;
