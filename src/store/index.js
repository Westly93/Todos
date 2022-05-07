import { createStore } from "vuex";
import todos from "./modules/todos";

const store = createStore({
  modules: {
    todos,
  },
  /*state: {
    todos: [
      {
        id: 1,
        title: "Todo one",
      },
      {
        id: 2,
        title: "Todo two",
      },
      {
        id: 3,
        title: "Todo three",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {},
  actions: {},*/
});

export default store;
