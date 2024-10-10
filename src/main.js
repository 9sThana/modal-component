import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Modal from "./components/Modal.vue"; // Modal component
import { modalMixin } from "./mixin/mixins"; // Mixin

const app = createApp(App);

// Register the Modal component globally
app.component("Modal", Modal);

// Register the modal mixin globally
app.mixin(modalMixin);

// Mount the app
app.mount("#app");