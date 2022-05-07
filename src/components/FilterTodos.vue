<template>
  <div class="filter">
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  border: none;
  border-bottom: 1px #156 solid;
  padding: 6px 12px;
  margin-bottom: 20px;
}
select:focus {
  outline: none;
  border: 1px #156 solid;
  border-radius: 5px;
}
</style>
