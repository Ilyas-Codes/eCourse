import "./app.css";
import "../node_modules/plyr/dist/plyr.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
