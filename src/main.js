import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Modal from "./components/Modal.vue";

// createApp(App).mount("#app");

const app = createApp(App);

app.component("Modal", Modal);
app.mount("#app");
