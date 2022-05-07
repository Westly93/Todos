import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("http://127.0.0.1:8000/todos/");
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("http://127.0.0.1:8000/todos/", { title });
    commit("newTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://127.0.0.1:8000/todos/${id}`);
    commit("removeTodo", id);
  },
  async updateTodo({ commit }, updTodo) {
    console.updTodo;
    const response = await axios.put(
      `http://127.0.0.1:8000/todos/${updTodo.id}/`,
      updTodo
    );
    //console.log(response.data);
    commit("updateTodo", response.data);
  },
  async filterTodos({ commit }, e) {
    //console.log(e);
    const limmit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `http://127.0.0.1:8000/todos/_limmit=${limmit}`
    );
    commit("setTodos", response.data);
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    //console.log(updTodo);
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
