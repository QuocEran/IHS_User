import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

// Tailwind
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

// Define layout
import { registerGlobalComponent } from "./utils/registerGlobalComponent";

// Firebase auth
import { projectAuth } from "@/configs/firebase";

// Config App
library.add(fas);
library.add(faFontAwesome);

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponent(app);

    app.component("fa", FontAwesomeIcon);
    app.use(store);
    app.use(router);
    app.mount("#app");
  }
});
