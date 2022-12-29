import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiTrash } from "oh-vue-icons/icons";

const app = createApp(App);

addIcons(BiTrash);
app.component("v-icon", OhVueIcon);

app.mount("#app");
