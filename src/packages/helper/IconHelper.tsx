import { Component as VueComponent } from "vue";

const IconHelper = (icon: VueComponent) =>
  h(
    "i",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    h(markRaw(icon)),
  );

export default IconHelper;
