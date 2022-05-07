<template>
  <div>
    <h1>Add Todo</h1>
    <div class="add-todo">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px #156 solid;
  border-radius: 4px;
}
input[type="text"]:focus {
  outline: none;
}
input[type="submit"] {
  flex: 2;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
@media (max-width: 500px) {
  form {
    width: 80vw;
  }
}
</style>
