import { mapModules } from "./helper";
const ms = import.meta.globEager("./modules/*/index.ts");

const componentModules = mapModules(ms);

export { componentModules };
