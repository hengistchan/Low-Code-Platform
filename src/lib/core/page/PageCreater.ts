import { Page } from "./../../types/page";

const pageCreater = (title = "新页面"): Page => {
  return {
    title,
    props: {
      backgroundColor: "#ffffff",
      backgroundImage: "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "669px",
    },
    components: [],
  };
};

export default pageCreater;
