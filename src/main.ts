import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createEditor } from "./lib";

import "@/styles/main.scss";
import "uno.css";

const app = createApp(App);
app.use(createPinia());
app.use(createEditor());

app.mount("#app");
