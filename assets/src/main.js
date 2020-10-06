import zendesk from "./services/zendesk.js";
import App from "./components/app.js";

const { createApp } = Vue;

const { init, setEvents, ticketEventResult } = zendesk;
const initVueApp = () => {
  createApp(App).mount('#app');
}
init();
setEvents('app.registered', initVueApp);
setEvents('ticket.requester.email.changed', ticketEventResult);