<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <span :class="{ 'done':todo.completed }"
          @click="() => todo.completed = !todo.completed">
        {{ todo.text }}
      </span>
      <button>X</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
        {
          id: 1,
          text: 'one',
          completed: false
        },
        {
          id: 2,
          text: 'two',
          completed: true
        },
        {
          id: 3,
          text: 'three',
          completed: false
        }
      ]
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
