<template>
  <div class="todos-list">
    <div
      :class="{ 'is-completed': todo.completed }"
      class="todo"
      @dblclick="onDblClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
    >
      <h5>{{ todo.title }}</h5>
      <small>{{ todo.date_created }}</small>
      <span @click="deleteTodo(todo.id)">&times;</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updTodo);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos-list {
  width: 100%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.todo {
  margin: 10px;
  background: #095544;
  border-radius: 2px;
  position: relative;
}
.todo h5 {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 10px 20px;
}
.todo small {
  margin-bottom: 20px;
  margin-left: 20px;
}
.todo span {
  position: absolute;
  font-size: 20px;
  bottom: 0;
  right: 20px;
  color: red;
  font-size: 2rem;
  cursor: pointer;
}
.is-completed {
  background: #156;
}
@media (max-width: 500px) {
  .todos-list {
    grid-template-columns: 1fr;
    width: 80vw;
    margin: 10px 0;
  }
}
</style>
