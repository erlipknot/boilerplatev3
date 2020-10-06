import zendesk from "../services/zendesk.js";
import global from '../store/global.js';

const { computed } = Vue;


export default {
  setup() {
    const { surname } = global;
    const eventResult = computed(() => {
      return global.eventResult;
    })
    return { surname, eventResult };
  },
  data() {
    return {
      name: "Gregg",
    };
  },
  template: `<h1>Hello {{ name }}</h1><h1>{{ surname }}</h1><h1>{{ eventResult }}</h1>`
};