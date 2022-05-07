<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <div class="keys">
      <div>Double click to mark as completed</div>
      <div class="flex">
        <div class="completed"></div>
        <span>Completed!</span>
      </div>
      <div class="flex">
        <div class="not-completed"></div>
        Not Completed!
      </div>
    </div>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container {
  width: 1100px;
  margin: auto;
}
.keys {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
}
.completed {
  width: 10px;
  height: 10px;
  background: #095544;
}
.not-completed {
  width: 10px;
  height: 10px;
  background: #156;
}
.flex {
  display: flex;
  margin-left: 20px;
}
@media (max-width: 500px) {
  .keys {
    grid-template-columns: 1fr;
    width: 80vw;
    text-align: left;
    margin-left: 20px;
  }
  .flex {
    margin-top: 20px;
  }
}
</style>
