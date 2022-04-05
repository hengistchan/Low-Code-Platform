import { mapModules } from "./helper";
const ms = import.meta.globEager("./modules/*/index.ts");

const { importedComponentModules, cachedComponentModules } = mapModules(ms);

export { importedComponentModules, cachedComponentModules };
