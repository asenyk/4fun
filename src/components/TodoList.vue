<template>
  <div>
    <input type="text" v-model="todoText"/>
    <button @click="addItem">Add item</button>
    <div v-for="(todo, index) in todos" :key="todo.id">
      <span :class="{ 'done':todo.completed }"
            @click="markCompleted(todo)">
        {{ todo.text }}
      </span>
      <button @click="deleteItem(index)">X</button>
    </div>
    <hr>
    <button @click="testWriteFirestore()">Write Firestore</button>
  </div>
</template>

<script>
import { db } from '../firebase'

export default {
  data () {
    return {
      todoText: '',
      todos: []
    }
  },
  methods: {
    testWriteFirestore () {
      db.collection('users').add({
        testField1: 'Qwe',
        testField2: 'Qwerty',
        testField3: 12
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    addItem () {
      if (this.todoText !== '') {
        const createId = () => parseInt(Math.random() * 10000000000000)
        const obj = {
          id: createId(),
          text: this.todoText,
          completed: false
        }
        this.todos.push(obj)
        this.todoText = ''
      }
    },
    markCompleted (todo) {
      todo.completed = !todo.completed
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
