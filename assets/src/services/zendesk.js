import global from '../store/global.js';

let CLIENT = null;

const Zendesk = {
  init() {
    CLIENT = ZAFClient.init();
  },

  setEvents(event, callback) {
    return CLIENT.on(`${event}`, function(data) {
      if (`${event}` === 'app.registered') global.surname = data.metadata.settings;
      return callback(data);
    });
  },

  ticketEventResult(data) {
    setTimeout(() => {
      if (data !== null) {
        global.eventResult = data;
      }
    }, 500);
  },

  resizeApp(appHeight) {
    CLIENT.invoke('resize', { width: '100%', height: appHeight + 'px' });
  }
}

export default Zendesk;

//client.invoke('resize', { width: '100%', height: '200px' });



/* import store from '../store/global.js';

let CLIENT = null;

export default function zendesk() {
  const appSettings = ref({});
  const init = () => {
    CLIENT = ZAFClient.init();
  };

  const setEvents = (event, callback) => {
    return CLIENT.on(`${event}`, function(data) {
      if (`${event}` === 'app.registered') store.surname = data.metadata.settings;
      return callback(data);
    });
  }

  const ticketEventResult = (data) => {
    setTimeout(() => {
      if (data !== null) {
        state['eventResult'] = data;
        console.log(state['eventResult'])
      }
    }, 500);
  }

  return { appSettings, init, setEvents, ticketEventResult };

} */

//client.invoke('resize', { width: '100%', height: '200px' });